export const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const mpsToKmph = (mps) => {
    return mps * 3.6
}
