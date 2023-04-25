<template>
    <div class="main">
        <div class="main__desktop">
            <div class="container">
                <div class="main__inner">
                    <app-temperature-now v-if="show" :todayInfo="todayInfo" :place="place" />
                    <app-temperature-of-day
                        v-if="show"
                        :utcDiff="weatherData.utcDiff"
                        :temperature="weatherData.hourly.temperature_2m.slice(0, 24)"
                        :currentTime="weatherData.currentTime"
                    />
                    <app-sun-time
                        v-if="show"
                        :utcDiff="weatherData.utcDiff"
                        :sunrise="weatherData.daily.sunrise[0].split('T')[1]"
                        :sunset="weatherData.daily.sunset[0].split('T')[1]"
                        :currentTime="weatherData.currentTime"
                    />
                    <app-week-weather v-if="show" :weekWeatherInfo="weekWeatherInfo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import { getCurrentTime } from "./hooks/datetimeEdit";

const store = useStore();

const show = ref(false);
const place = ref("Gorno-Altaysk");

const weatherData = ref({
    utcDiff: 0,
    currentTime: "",
    daily: null,
    hourly: null,
});

const todayInfo = ref({});
const weekWeatherInfo = ref([]);

onMounted(() => {
    getData();

    setInterval(() => {
        weatherData.value.currentTime = getCurrentTime(weatherData.value.utcDiff);
    }, 15000);
});

async function getData() {
    let date = new Date();

    let startDate = `${date.getFullYear()}-${
        date.getMonth() + 1 <= 9 ? "0" + String(date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getDate() <= 9 ? "0" + String(date.getDate()) : date.getDate()}`;

    date.setDate(date.getDate() + 4);
    let endDate = `${date.getFullYear()}-${
        date.getMonth() + 1 <= 9 ? "0" + String(date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getDate() <= 9 ? "0" + String(date.getDate()) : date.getDate()}`;

    try {
        show.value = false;
        const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=51.96&longitude=85.92&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=rain&daily=weathercode&daily=temperature_2m_max&daily=temperature_2m_min&daily=precipitation_probability_max&daily=rain_sum&daily=sunrise&daily=sunset&daily=windspeed_10m_max&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&past_days=0&forecast_days=1&start_date=${startDate}&end_date=${endDate}&timezone=auto`
        );

        if (typeof response.data == "object" && !response.data.type) {
            weatherData.value.daily = response.data.daily;
            weatherData.value.hourly = response.data.hourly;

            let date = new Date();
            weatherData.value.utcDiff = date.getTimezoneOffset() / -60 - response.data.utc_offset_seconds / 3600;
            weatherData.value.currentTime = getCurrentTime(weatherData.value.utcDiff);

            weatherData.value.daily.weathercode.forEach((wc, index) => {
                let weatherIcon = computed(() => store.getters["vmcode/GET_TYPE_OF_WEATHER"](wc));

                weekWeatherInfo.value.push({
                    day: index,
                    temperature: {
                        min: Math.ceil(weatherData.value.daily.temperature_2m_min[index]),
                        max: Math.ceil(weatherData.value.daily.temperature_2m_max[index]),
                    },
                    type: weatherIcon.value.type,
                });
            });

            todayInfo.value = {
                weather: computed(() =>
                    store.getters["vmcode/GET_TYPE_OF_WEATHER"](weatherData.value.daily.weathercode[0])
                ),
                temperature: Math.round(
                    weatherData.value.hourly.temperature_2m[Number(weatherData.value.currentTime.split(":")[0])]
                ),
                temperatureNight: Math.round(weatherData.value.daily.temperature_2m_min[0]),
                temperatureDay: Math.round(weatherData.value.daily.temperature_2m_max[0]),
                wind: Math.round(weatherData.value.daily.windspeed_10m_max[0]),
                humidity:
                    weatherData.value.hourly.relativehumidity_2m[Number(weatherData.value.currentTime.split(":")[0])],
                rain: weatherData.value.daily.precipitation_probability_max[0],
            };

            show.value = true;
        }
    } catch (e) {
        console.debug(e);
    }
}
</script>

<style lang="scss">
@use "@/assets/scss/fonts";
@use "@/assets/scss/null";
@use "@/assets/scss/vars";

html {
    font-family: "Lato", "Arial", "sans-serif";
    font-size: 20px;
    font-weight: 400;
}

.main {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/img/Background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    .main__desktop {
        display: block;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(40px);

        .container {
            display: flex;
            align-items: center;
            height: 100%;

            // <!-- @ media -->
            @media (max-width: 1151px) {
                justify-content: center;
                padding: 60px 0;
            }
        }
    }

    .main__inner {
        display: grid;
        grid-template-columns: 480px 277px 277px;
        grid-template-rows: 244px 244px;
        column-gap: 24px;
        row-gap: 24px;
        grid-template-areas:
            "tn aq st"
            "tn ww ww";

        // <!-- @ media -->
        @media (max-width: 1151px) {
            grid-template-columns: 50% 50%;
            grid-template-rows: 480px 244px 244px;
            margin-left: -24px; // <!-- ? Bcs column gap shifts to the right on it meaning -->
            grid-template-areas:
                "tn tn"
                "aq st"
                "ww ww";
        }

        // <!-- @ media -->
        @media (max-width: 591px) {
            grid-template-columns: 100%;
            grid-template-rows: 360px 221px 221px 183px;
            margin-left: 0;
            column-gap: 0;
            grid-template-areas:
                "tn"
                "aq"
                "st"
                "ww";
        }

        // <!-- @ media -->
        @media (max-width: 449px) {
            padding: 0 12px;
        }
    }

    .component {
        background: vars.$color-g-primary;
        border-radius: 10px;
        backdrop-filter: blur(20px);
        cursor: pointer;
        transition: all 0.36s ease-in-out;

        .wrapper {
            padding: 16px;
            display: flex;
            align-items: center;

            // <!-- @ media -->
            @media (max-width: 591px) {
                padding: 4px;
            }
        }

        .title {
            display: flex;
            align-items: center;

            img {
                display: block;
                margin-right: 10px;
            }

            .title__item {
                font-size: 16px;
                font-weight: 700;
                text-align: center;
                color: #dad8f7;
                margin: 20px 0;
            }
        }
    }

    @media (max-width: 1151px) {
        height: 100%;
    }
}

.container {
    max-width: 1090px;
    width: 100%;
    margin: 0 auto;
}
</style>
