<template>
    <section class="component suntime">
        <div class="wrapper">
            <div class="title">
                <img src="@/assets/icons/sun-time.svg" alt="icon sun time" />
                <h2 class="title__item">Восход/Закат</h2>
            </div>
            <div class="graf">
                <!-- * Actually time -->
                <div class="text__time">
                    <span>{{ currentTime }}</span>
                </div>

                <!-- * Sun icon moved with time -->
                <!-- ? 190 equal 180deg in semicircle with some padding for beautiful -->
                <div class="sun" :style="`transform: translate(100%, 0) rotate(-${180 - 1.8 * sunTimeByPercent}deg);`">
                    <span></span>
                </div>

                <!-- * Circle gradient fill, width increas with time -->
                <span class="circle">
                    <span class="time__plan" :style="`width: ${sunTimeByPercent + 5}%;`"></span>
                </span>

                <!-- * Arounb circle like border -->
                <svg width="220px" height="112px" view-box="0 0 212 120">
                    <circle cx="110" cy="112" r="106" stroke-width="6" fill="transparent" stroke-dasharray="2 13.82" />
                </svg>

                <!-- * Sunset and sunrise time -->
                <div class="suntime__info">
                    <span class="suntime__info_sunrise">{{ props.sunrise }}</span>
                    <span class="suntime__info_sunset">{{ props.sunset }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-sun-time",
};
</script>

<script setup>
import { defineProps, computed } from "vue";
import { reformatTimeInMin } from "@/hooks/datetimeEdit.js";

const props = defineProps({
    utcDiff: { type: Number, required: true },
    sunrise: { type: String, required: true },
    sunset: { type: String, required: true },
    currentTime: { type: String, required: true },
});

const sunsetMin = reformatTimeInMin(props.sunset);
const sunriseMin = reformatTimeInMin(props.sunrise);
const sunTimeLong = sunsetMin - sunriseMin;

let nowTimeInMin = computed(() => reformatTimeInMin(props.currentTime));
let sunTimeByPercent = computed(() => Math.ceil((nowTimeInMin.value - sunriseMin) / (sunTimeLong / 100)));
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.suntime {
    grid-area: st;

    .wrapper {
        flex-direction: column;
    }

    .graf {
        position: relative;
        width: 212px;
        height: 106px;

        .circle {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            border-bottom: 1px solid vars.$color-g-yellow;

            border-radius: 212px 212px 0 0;
            overflow: hidden;

            .time__plan {
                display: block;
                position: absolute;
                height: 100%;
                background: linear-gradient(180deg, rgba(251, 219, 96, 0.2) 0%, rgba(251, 219, 96, 0) 101.89%);
            }
        }

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -52.5%);

            circle {
                paint-order: stroke;
                stroke: vars.$color-g-yellow;
            }
        }

        .sun {
            position: relative;
            display: block;
            width: 50%;
            height: 0;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
            transform-origin: 0;

            span {
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%);
                border-radius: 50%;
                width: 12px;
                height: 12px;
                background-color: vars.$color-g-yellow;
            }
        }

        .text__time {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding-top: 14px;

            span {
                font-size: 14px;
                font-weight: 700;
                color: vars.$color-g-white;
            }
        }

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: -4px;
            width: 2px;
            height: 8px;
            background-color: vars.$color-g-yellow;
        }

        &::before {
            left: 0;
        }

        &::after {
            right: 0;
        }
    }

    .suntime__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 12px 0;
        span {
            display: block;
            font-size: 12px;
            font-weight: 4;
            line-height: 14.4px;
            color: vars.$color-g-white;

            &:first-child {
                transform: translate(-50%, 0);
            }

            &:last-child {
                transform: translate(50%, 0);
            }
        }
    }
}
</style>
