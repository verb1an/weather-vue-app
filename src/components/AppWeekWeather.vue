<template>
    <section class="component weekweather">
        <div class="wrapper">
            <div v-for="item in weekWeatherInfo" :key="item.day" class="week__weather_item">
                <h2 class="name">{{ days[item.day] }}</h2>
                <span class="icon">
                    <img :src="require(`@/assets/icons/weather-${item.type}.svg`)" alt="icon weather" />
                </span>
                <h3 class="stat">
                    <span class="stat__max">{{ item.temperature.max }}</span>
                    <span class="stat__min">{{ item.temperature.min }}</span>
                </h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-week-weather",
};
</script>

<script setup>
import { defineProps } from "vue";
defineProps({
    weekWeatherInfo: { type: Array, required: true },
});
const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.weekweather {
    grid-area: ww;

    .wrapper {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        // <!-- @ media -->
        @media (max-width: 591px) {
            padding: 4px;
        }
    }
    .week__weather_item {
        padding: 0 13px;
        margin: 0 6px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .name {
            font-size: 14px;
            font-weight: 700;
            color: #dad8f7;
        }

        .icon {
            width: 64px;
            height: 64px;
            margin: 15px 0;

            img {
                width: 100%;
                height: 100%;
            }

            // <!-- @ media -->
            @media (max-width: 591px) {
                width: 40px;
                height: 40px;
            }
        }

        .stat {
            display: flex;
            align-items: center;
            span {
                font-size: 16px;
                font-weight: 700;
                line-height: 16px;

                color: vars.$color-g-white;
                display: flex;
                align-items: center;
                &::after {
                    display: block;
                    content: "°";
                    transform: translate(0, 0);
                }

                &:last-child {
                    color: vars.$color-g-light-primary;
                    margin-left: 5px;
                }

                // <!-- @ media -->
                @media (max-width: 591px) {
                    font-size: 13px;
                }
            }
        }

        // <!-- @ media -->
        @media (max-width: 591px) {
            margin: 0;
            padding: 0 10px;
        }
    }
}
</style>
