export const vmcodeModule = {
    namespaced: true,
    state: {
        vmcodeArray: [
            { type: "sun", text: "Ясное небо", code: 0 },
            { type: "suncloudy", text: "В основном ясно", code: 1 },
            { type: "suncloudy", text: "Частичная облачность", code: 2 },
            { type: "cloudy", text: "Пасмурно", code: 3 },
            { type: "fog", text: "Туман", code: 45 },
            { type: "fog", text: "Иней", code: 48 },
            { type: "drizzle", text: "Легкий моросящий дождь", code: 51 },
            { type: "drizzle", text: "Умеренный моросящий дождь", code: 53 },
            { type: "drizzle", text: "Сильный моросящий дождь", code: 55 },
            { type: "freezing_drizzle", text: "Легкий ледяной моросящий дождь", code: 56 },
            { type: "freezing_drizzle", text: "Сильный ледяной моросящий дождь", code: 57 },
            { type: "rain", text: "Небольшой дождь", code: 61 },
            { type: "rain", text: "Умеренный дождь", code: 63 },
            { type: "rain", text: "Сильный дождь", code: 65 },
            { type: "freezing_drizzle", text: "Ледяной моросящий дождь", code: 66 },
            { type: "freezing_drizzle", text: "Ледяной моросящий дождь", code: 67 },
            { type: "snow", text: "Легкий снег", code: 71 },
            { type: "snow", text: "Умеренный снег", code: 73 },
            { type: "snow", text: "Сильный снег", code: 75 },
            { type: "snow", text: "Снежные крупинки", code: 77 },
            { type: "rain", text: "Небольшой ливень", code: 80 },
            { type: "rain", text: "Умеренный ливень", code: 81 },
            { type: "rain", text: "Сильный ливень", code: 82 },
            { type: "snow", text: "Снегопад", code: 85 },
            { type: "snow", text: "Снегопад", code: 86 },
            { type: "thunder", text: "Гроза", code: 95 },
            { type: "hail", text: "Легкий град", code: 96 },
            { type: "hail", text: "Град", code: 99 }
        ]
    },
    getters: {
        GET_TYPE_OF_WEATHER: (state) => (weatherCode) => {
            const dateWeather = state.vmcodeArray.find((el) => el.code == weatherCode);
            return dateWeather;
        }
    }
}