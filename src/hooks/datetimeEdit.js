export function getCurrentTime(timeZoneDiff) {
    let date = new Date();
    return (date.getHours() - timeZoneDiff + `:${date.getMinutes() <= 9 ? "0" + String(date.getMinutes()) : String(date.getMinutes())}`);
}

export function reformatTimeInMin(times) { // ? Format like HH:MM
    return (times.split(":")[0] * 60) + Number(times.split(":")[1]);
}