/*
* There are a lot of crypto functions: crypto algorithms and accessory functions
*/
const BigInt = require('big-integer');


/*A - base, P - power, M - module
* returns (A ** P) mod M for any numbers*/
export function fastDegreeModule(A,P,M) {
    let a = BigInt(A);
    let p = BigInt(P);
    let m = BigInt(M);
    let result = BigInt(1);
    let arrayOfDegrees = countFactorOf2Degree(p).split(" ");
    let helpVar = (a * a) % m;
    let helpDegree = BigInt(2);
    for (let i = arrayOfDegrees.length; i > 0; i--) {

        // Возведение в степень по модулю
        if (arrayOfDegrees[i - 1] !== "" && arrayOfDegrees[i - 1] !== '1' && arrayOfDegrees[i - 1] !== '0') {

            while (helpDegree.toString() !== arrayOfDegrees[i - 1]) {
                helpVar = ((helpVar * helpVar)) % m;
                helpDegree = helpDegree.multiply(BigInt(2));
            }

            result = (result * helpVar) % m;

        } else result = (result * degreeModule(a, BigInt(arrayOfDegrees[i - 1]), m)) % m;
    }

    return result;
}

/*Same result but it's not optimal
* Also it can't evaluate a REAL big numbers*/
const degreeModule = (a, p, m) => {
    return (a ** p) % m;
};



/*Factorize number to sum of degrees of 2
* returns a string like "2 4 8" for 14 */
function countFactorOf2Degree(num) {
    let tmp = BigInt(1);
    if (num.equals(BigInt(0))) {
        return "0";
    } else if (num.equals(BigInt(1))) {
        return "1";
    }
    while (tmp <= num) {
        tmp = tmp.multiply(BigInt(2));
    }
    tmp = tmp.divide(BigInt(2));
    num = num.minus(tmp);
    return tmp.toString() + " " + countFactorOf2Degree(num);
}

/*Find d = a^(-1) mod m
* uses an Extended Euclid's algorithm */
export function getInverseElem(a,m) {
    m = BigInt(m);
    a = BigInt(a);
    a = (a % m + m) % m;
    if (!a || m < BigInt(2)) {
        return NaN // invalid input
    }
    const s = [];
    let b = m;
    while(b) {                  // Алгоритм Евклида с записью промежуточных значений
        [a, b] = [b, a % b];
        s.push({a, b})
    }
    if (a !== BigInt(1)) {
        return NaN // Обратного элемента нет
    }
    // Нахождение обратного элемента по "ручному алгоритму"
    let x = BigInt(1);
    let y = BigInt(0);
    for(let i = s.length - 2; i >= 0; --i) {
        [x, y] = [y,  x - y * ~~(s[i].a / s[i].b)]
    }
    let t = ((y % m) + m) % m;
    if (t > BigInt(0)){
        return t;
    } else {
        return t + m;
    }
}

/*GCD - Euclid's algorithm to find Greatest common divisor */
export function NOD(a, b) {
    if (!b) {
        return a;
    }
    return NOD(b, a % b);
}



/*Generate a prime number
* size in bits*/
export function randomPrime(bits) {
    const min = BigInt.one.shiftLeft(BigInt(bits - 1));
    const max = BigInt.one.shiftLeft(BigInt(bits)).prev();

    while (true) {
        let p = BigInt.randBetween(min, max);
        // console.log(p);
        if (p.isProbablePrime(32)) {
            return p.toString();
        }
    }
}


export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
