function solve() {
    function hasClima(car) {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = function () {
            if (temp < tempSettings)
                temp++;
            else if (temp > tempSettings)
                temp--;
        }
    }

    function hasAudio(car) {
        car.currentTrack = null;
        car.nowPlaying = function () {
            if (currentTrack !== null) {
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
            }
        }
    }

    function hasParktronic(car) {
        car.checkDistance = function (distance) {
            if (distance < 0.1)
                console.log("Beep! Beep! Beep!");
            else if (distance < 0.25 && distance >= 0.1)
                console.log("Beep! Beep!");
            else if (distance < 0.5 && distance >= 0.25)
                console.log("Beep!");
        }
    }
    return {
        hasClima,
        hasAudio,
        hasParktronic
    };
}