<template>
    <section class="component weathernow">
        <div class="wrapper">
            <div class="weather__icon">
                <img :src="require(`@/assets/icons/weather-${todayInfo.weather.type}.svg`)" alt="icon weather" />
            </div>
            <div class="place">
                <h3 class="place__item">{{ place }}</h3>
            </div>
            <div class="temperature">
                <h2 class="temperature__item">{{ todayInfo.temperature }}<span>°C</span></h2>
                <h3 class="temperature__ofday">
                    <span>{{ todayInfo.temperatureDay }}</span>
                    <span>{{ todayInfo.temperatureNight }}</span>
                </h3>
                <h3 class="weather__code">
                    <span> {{ todayInfo.weather.type }} </span>
                </h3>
            </div>
            <div class="weather__info">
                <div class="weather__info_item">
                    <span class="icon"><img src="@/assets/icons/wind.svg" alt="icon weather" /></span>
                    <h3 class="name">Ветер</h3>
                    <h2 class="stat">{{ todayInfo.wind }} <span>km/h</span></h2>
                </div>
                <div class="weather__info_item">
                    <span class="icon"><img src="@/assets/icons/drops.svg" alt="icon weather" /></span>
                    <h3 class="name">Влажность</h3>
                    <h2 class="stat">{{ todayInfo.humidity }} <span>%</span></h2>
                </div>
                <div class="weather__info_item">
                    <span class="icon"><img src="@/assets/icons/weather-rain.svg" alt="icon weather" /></span>
                    <h3 class="name">Осадки</h3>
                    <h2 class="stat">{{ todayInfo.rain }} <span>%</span></h2>
                </div>
            </div>
        </div>
        <span class="bg"></span>
    </section>
</template>

<script>
export default {
    name: "app-temperature-now",
};
</script>

<script setup>
import { defineProps } from "vue";
defineProps({
    todayInfo: { type: Object, required: true },
    place: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.weathernow {
    grid-area: tn;
    margin-right: 12px;
    background-image: url("@/assets/img/TemperatureNow.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    .wrapper {
        position: relative;
        padding: 12px;
        display: block;

        // <!-- @ media -->
        @media (max-width: 591px) {
            overflow: hidden;
            padding: 10px;
        }
    }

    .weather__icon {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-20%, -40%);
        width: 176px;
        height: 176px;

        img {
            width: 100%;
            height: 100%;
        }

        // <!-- @ media -->
        @media (max-width: 1151px) {
            transform: translate(0, -10%);
        }

        // <!-- @ media -->
        @media (max-width: 591px) {
            width: 132px;
            height: 132px;
        }
    }

    .place {
        padding: 20px;
        .place__item {
            font-family: "Lato", "Arial", "sans-serif";
            font-size: 14px;
            font-weight: 700;
            color: vars.$color-g-light-primary;
            text-align: right;
        }
    }

    .temperature {
        width: 100%;
        height: 270px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 100px;

        .temperature__item {
            color: vars.$color-g-white;
            font-size: 88px;
            font-weight: 700;
            line-height: 1;
            display: flex;
            align-items: start;
            transform: translate(10%, 0);
            transition: all 0.32s;
            margin-bottom: 15px;

            span {
                display: block;
                font-size: 24px;
                letter-spacing: 2px;
                transform: translate(0, 50%);

                // <!-- @ media -->
                @media (max-width: 591px) {
                    font-size: 16px;
                }
            }

            // <!-- @ media -->
            @media (max-width: 591px) {
                font-size: 60px;
            }
        }

        .temperature__ofday {
            color: vars.$color-g-white;
            font-size: 20px;
            font-weight: 700;
            height: 41px;

            span {
                padding: 0 5px;
                &::after {
                    content: "°";
                }
                &:last-child {
                    color: vars.$color-g-light-primary;
                }
            }
        }

        .weather__code {
            font-size: 18px;
            color: vars.$color-g-white;
        }

        // <!-- @ media -->
        @media (max-width: 1151px) {
            margin-bottom: 70px;
        }

        // <!-- @ media -->
        @media (max-width: 1151px) {
            margin-bottom: 40px;
            height: 180px;
        }
    }

    .weather__info {
        display: flex;
        align-items: end;
        justify-content: center;
        flex-grow: 1;
        bottom: 0;

        .weather__info_item {
            flex-grow: 1;
            padding: 12px 16px;
            border-radius: 6px;
            background-color: rgba(102, 96, 200, 0.6);

            display: grid;
            grid-template-columns: 32px 1fr;
            grid-template-rows: repeat(1fr, 1fr);
            grid-column-gap: 12px;
            grid-template-areas:
                "ic nm"
                "ic st";

            .icon {
                width: 32px;
                height: 32px;
                grid-area: ic;

                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    height: 100%;
                }

                // <!-- @ media -->
                @media (max-width: 449px) {
                    width: 27px;
                    height: 27px;
                }
            }

            .name {
                grid-area: nm;
                font-size: 12px;
                color: #e7e6fb;
                font-weight: 400;
            }

            .stat {
                grid-area: st;
                font-size: 18px;
                font-weight: 700;
                color: #e7e6fb;

                span {
                    font-size: 14px;

                    // <!-- @ media -->
                    @media (max-width: 449px) {
                        font-size: 12px;
                    }
                }

                // <!-- @ media -->
                @media (max-width: 449px) {
                    font-size: 16px;
                }
            }

            & + .weather__info_item {
                margin-left: 8px;
            }

            // <!-- @ media -->
            @media (max-width: 449px) {
                padding: 4px 8px;
                grid-template-columns: 32px 1fr;
                grid-column-gap: 4px;
            }
        }
    }

    // <!-- @ media -->
    @media (max-width: 1151px) {
        margin-right: 0;
    }
}
</style>
