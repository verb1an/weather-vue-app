<template>
    <section class="component airquality">
        <div class="wrapper">
            <div class="title">
                <img src="@/assets/icons/thermometer.svg" alt="icon thermometer">
                <h2 class="title__item">Температура 24ч</h2>
            </div>
            <div class="graf" style="width: 240px">
                <svg width="240px" height="100px" view-box="0 0 240 100">
                    <polyline
                        :points="`
                            0,${ posTemp[0] } 
                            15,${ posTemp[0] }
                            85,${ posTemp[1] }
                            155,${ posTemp[2] }
                            225,${ posTemp[3] }
                            240,${ posTemp[3] }
                        `"
                        stroke="white"
                        fill="transparent"
                    />
                    <polyline
                        :points="`
                            0,${ posTemp[0] } 
                            15,${ posTemp[0] }
                            85,${ posTemp[1] }
                            155,${ posTemp[2] }
                            225,${ posTemp[3] }
                            240,${ posTemp[3] }

                            240,100 0,100 0,40
                        `"
                        stroke="transparent"
                        fill="url('#myGradient')"
                        
                    />

                    <text
                        v-for="n in 4"
                        :key="n"
                        :x="5 + 70*(n-1)"
                        :y="`${posTemp[(n-1)] > 30 ? posTemp[(n-1)] - 6 : posTemp[(n-1)] + 24}`"
                        class="text"
                        style="text-align: center"
                    >
                        {{ temperatureOfDay[n-1] }}°
                    </text>

                    <linearGradient id="myGradient" gradientTransform="rotate(90)">
                        <stop offset="5%" stop-color="rgba(255, 255, 255, .15)" />
                        <stop offset="95%" stop-color="rgba(255, 255, 255, .01)" />
                    </linearGradient>
                </svg>

                <div class="time__points">
                    <span v-for="time in timePoints" :key="time">{{ time }}</span>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: "app-temperature-of-day",
};
</script>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
    utcDiff: { type: Number, required: true },
    temperature: { type: Array, required: true },
    currentTime: { type: String, required: true }
})

const timePoints = ref([]);
const temperatureOfDay = ref([]); // <!-- * always 4  -->
const posTemp = ref([]);

// <!-- ? Fill main arrays -->
for(let i = 0; i < 4; i++) {
    let timePoint = Math.round( 24 / ( props.currentTime.split(":")[0] > 4 ? props.currentTime.split(":")[0] : 4 ) );

    timePoints.value.splice( 0, 0, (String(23 - timePoint * i) + ":00") );
    temperatureOfDay.value.splice( 0, 0, Math.round(props.temperature[23 - timePoint * i]) );
} 

const minTemp = temperatureOfDay.value.reduce((prev, next) => (prev < next ? prev : next)) - 10;
const maxTemp = temperatureOfDay.value.reduce((prev, next) => (prev > next ? prev : next)) + 10;

const pointTemp = Math.round(100 / (Math.abs(minTemp) + Math.abs(maxTemp))); // <!-- * Var quanity pixels of 1 deg * 100 is height of graf  -->

temperatureOfDay.value.forEach(el => {
    posTemp.value.push( (maxTemp - el) * pointTemp )
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.airquality {
    grid-area: aq;

    .wrapper {
        flex-direction: column;
    }
    .graf {
        svg {
            background-color: rgba(255, 255, 255, 0.1);

            .text {
                fill: vars.$color-g-white;
                font-size: 14px;
            }

            .linear {
                fill: linear-gradien(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2));
            }
        }
    }

    .time__points {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 5px;
        width: 100%;

        span {
            font-size: 11px;
            font-weight: 400;
            color: vars.$color-g-light-green;
        }
    }
}
</style>
