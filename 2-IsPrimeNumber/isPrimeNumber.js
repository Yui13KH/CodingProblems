// okay so the initial thought was incorrect cause there is always a bigger number that is prime
// so you cant just check if the number is not divisible by something like 2,3,5,7,11,13, etc.
// that doesnt work for bigger numbers.

// naive way is to just check if the number is divisble by anything from 2 to the number itself - 1 
// but simple thinking tells u that u only need the first half cuz anything more then n/2 wont give u modulo == 0
// after some research i found a better way
// divide the number from 2 to the square root of the number
// logic explination why this works is here : https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is

function isPrime(number){
    if (isNaN(number)) return false
    if (!Number.isInteger(number)) return false
    if (number < 2) return false
    for (let i = 2; i < Math.floor(Math.sqrt(number)) + 1; i++){
        if (number % i === 0) return false
    }
    return true
}

module.exports = isPrime