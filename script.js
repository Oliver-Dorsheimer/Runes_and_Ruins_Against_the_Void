const TAU = 6.28318531;
const PI = 3.1415926535;

function getRandomNumber(){
    const randomNumberArray = new Uint32Array(1);
    crypto.getRandomValues(randomNumberArray);
    const randomNumber = randomNumberArray[0] / 2**32;
    return randomNumber;
};