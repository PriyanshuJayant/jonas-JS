function Random(min, max){
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
}

const newNum = Random(10,20);

console.log(newNum);

console.log(Math.ceil(12.1)); // rounds up to the nearest integer
console.log(Math.floor(23.9)); // rounds down to the nearest integer
console.log(Math.trunc(12.22)); // removes the decimal part and returns the integer part of a number
console.log(Math.round(12.9)); // rounds to the nearest integer, if the decimal part is 0.5 or higher, it rounds up, otherwise it rounds down

console.log(Number.MAX_SAFE_INTEGER);

const bigNum = BigInt(6758447642543672546532745732465329786478162);

const ans = (bigNum * bigNum * bigNum* bigNum* bigNum* bigNum* bigNum* bigNum* bigNum* bigNum* bigNum);

console.log(ans)
