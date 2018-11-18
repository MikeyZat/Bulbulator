export let random = (min, max) => {
    let r = Math.random();
    return Math.floor(r * (max - min) + min);
};