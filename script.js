function getRandomNumber(){
    const randomNumberArray = new Uint32Array(1);
    crypto.getRandomValues(randomNumberArray);
    const randomNumber = randomNumberArray[0] / 2**32;
    return randomNumber;
};