const BigInt = require('big-integer');
/*An Diffie-Hellman algorithm
* Can get (P and Q) OR size of them in number of digits*/
export function DiffiHellman(p, g){
    // first
    let Xa =  randomIntFromInterval((p/2), (p-1));
    console.log(Xa);
    let Ya = fastDegreeModule(g,Xa, p);
    console.log(Ya);
    // second
    let Xb = randomIntFromInterval((p/2), (p-1));
    console.log(Xb);
    let Yb = fastDegreeModule(g,Xb, p);
    console.log(Yb);
    // Connection
    let Zab = fastDegreeModule(Yb,Xa, p);
    console.log(Zab);
    let Zba = fastDegreeModule(Ya,Xb, p);
    console.log(Zba);

//     console.table({ p, g, Xa, Ya, Xb, Yb, Zab, Zba})
    return {p, g, Xa, Ya, Xb, Yb, Zab, Zba}
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*A - base, X - power, P - module
* returns (A ** P) mod M for any numbers*/
export function fastDegreeModule(a,x,p) {
    let result = 1;
    let arrayOfDegrees = countFactorOf2Degree(x).split(" ");
    let helpVar = (a * a) % p;
    let helpDegree = 2;
    for (let i = arrayOfDegrees.length; i > 0; i--) {

        // Возведение в степень по модулю
        if (arrayOfDegrees[i - 1] !== "" && arrayOfDegrees[i - 1] !== '1' && arrayOfDegrees[i - 1] !== '0') {
            while (helpDegree.toString() !== arrayOfDegrees[i - 1]) {
                helpVar = ((helpVar * helpVar)) % p;
                helpDegree = helpDegree * 2;
            }
            result = (result * helpVar) % p;
        } else {
            result = (result * degreeModule(a, parseInt(arrayOfDegrees[i - 1]), p)) % p;
        }
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
    //if(num == 0) return "0";
    let tmp = 1;
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return "1";
    }
    while (tmp <= num) {
        tmp *= 2;
    }
    tmp /= 2;
    num = num - tmp;
    return tmp.toString() + " " + countFactorOf2Degree(num);
}

/*Full Shamir encryption and decryption algorithm
* returns an all steps of encoding and decoding,*/
export function ShamirEncode(message, P, CA, DA, CB, DB) { // size - порядок // p = (q*2) + 1
    let p = BigInt(P); // Открытое большое число
    let Ca = BigInt(CA); // абонент A
    while (NOD(Ca, p-1n) !== 1n){
        Ca = BigInt(BigInt.randBetween(1,p-1n).toString());
    }
    let Da = BigInt(DA || BigInt((BigInt(Ca).modInv(p-1n)).toString()));

    let Cb = BigInt(CB); // абонент B
    while (NOD(Cb, p-1n) !== 1n){
        Cb = BigInt(BigInt.randBetween(1,p-1n).toString());
    }
    let Db = BigInt(DB || BigInt((BigInt(Cb).modInv(p-1n)).toString()));
    // A формирует x1
    let x1 = asUTF8Codes(message).split(" ");
    for (let i = 0; i < x1.length; i++){
        x1[i] = fastDegreeModule(x1[i], Ca, p);
    }
    // x1 отправляется к абоненту B
    let x2 = [];
    for (let i = 0; i < x1.length; i++){
        x2[i] = fastDegreeModule(x1[i], Cb, p);
    }
    // x2 отправляется к абоненту A
    let x3 = [];
    for (let i = 0; i < x2.length; i++){
        x3[i] = fastDegreeModule(x2[i], Da, p);
    }
    // x3 отправляется к абоненту B и он получает исходное сообщение
    let x4 = [];
    for (let i = 0; i < x3.length; i++){
        x4[i] = fastDegreeModule(x3[i], Db, p);
        x4[i] = unicodeToChar(parseInt(x4[i]));
    }
    x4 = x4.join('');
    return {p, Ca, Cb, Da, Db, x1, x2, x3, x4}
}

/*Generate P, Ca, Cb, Da, Db for Shamir's alrorithm
* size of P is 'size' bits*/
function ShamirGenerate(size) { // size - порядок // p = (q*2) + 1

    let numbers  = getPrimeNumbersBits(size);
    let p = BigInt(numbers.p); // Открытое большое число
    let Ca = 2n; // абонент A
    while (NOD(Ca, p-1n) !== 1n){
        Ca = BigInt(BigInt.randBetween(1,p-1n).toString());
    }
    let Da = BigInt((BigInt(Ca).modInv(p-1n)).toString());

    let Cb = 2n; // абонент B
    while (NOD(Cb, p-1n) !== 1n){
        Cb = BigInt(BigInt.randBetween(1,p-1n).toString());
    }
    let Db = BigInt((BigInt(Cb).modInv(p-1n)).toString());
    return {p, Ca, Cb, Da, Db}
}

/*Find d = a^(-1) mod m
* uses an Extended Euclid's algorithm */
function getInverseElem(a,m) {
    m = BigInt(m); a = BigInt(a);
    a = (a % m + m) % m;
    if (!a || m < 2n) {
        return NaN // invalid input
    }
    const s = [];
    let b = m;
    while(b) {                  // Алгоритм Евклида с записью промежуточных значений
        [a, b] = [b, a % b];
        s.push({a, b})
    }
    if (a !== 1n) {
        return NaN // Обратного элемента нет
    }
    // Нахождение обратного элемента по "ручному алгоритму"
    let x = 1n;
    let y = 0n;
    for(let i = s.length - 2; i >= 0; --i) {
        [x, y] = [y,  x - y * ~~(s[i].a / s[i].b)]
    }
    let t = ((y % m) + m) % m;
    if (t > 0n){
        return t
    } else {
        return t + m;
    }
}

/*GCD - Euclid's algorithm to find Greatest common divisor */
function NOD(a, b) {
    if (!b) {
        return a;
    }
    return NOD(b, a % b);
}

/*String to array of UTF8 codes*/
function asUTF8Codes(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        output += str.charCodeAt(i) + " ";
    }
    return output.trim();
}

/*Number to UTF char*/
function unicodeToChar(text) {
    return String.fromCharCode(parseInt(text))
}


/*Generate 2 prime numbers P and Q
* Q consist of deg digits
* P = Q*2 + 1*/
function getPrimeNumbers(deg) { // указывается степень
    const min = BigInt(10n ** (BigInt(deg)-2n));
    const max = BigInt(10n ** (BigInt(deg)));
    let q,p;
    while (true) {
        q = (BigInt.randBetween(min, max)).toString();
        if (SolovayStrassenTest(q.toString(),32)) {
            p = (2n*BigInt(q) + 1n).toString();
            if (SolovayStrassenTest(p.toString(),32)){ // Почему-то нужно передавать как строку BigInt не работает
                return {p, q}
            }
        }
    }
}

/*Test on primarity of a number P
* returns bool*/
function SolovayStrassenTest(p, iterations) {
    p = BigInt(p);
    if (p < 2n)
        return false;
    if (p !== 2n && p % 2n === 0n)
        return false;

    for (let i = 0; i < iterations; i++)
    {
        // Generate a random number a
        let a = BigInt(BigInt.randBetween(1, 999999999)) % ((p - 1n) + 1n); // TODO: Do ok generation of prime numbers
        let jacobian = (p + BigInt(calculateJacobian(a, p))) % p;
        let mod = fastDegreeModule(a, (p - 1n) / 2n, p);

        if (!jacobian || mod !== jacobian)
            return false;
    }
    return true;
}

/*Generate 2 prime numbers P and Q
* Q size in bits; P = Q*2 + 1
* This function uses a secure generation of bytes with 'crypto' object*/
function getPrimeNumbersBits(bits) { // У p-1 будет большой простой делитель

    let q,p;
    while (true) {
        q = BigInt('0x' + crypto.randomBytes(~~(bits/8)).toString('hex'));
        if (SolovayStrassenTest(q,10)) {
            // console.timeLog('gen');
            p = ((2n*q + 1n));
            if (SolovayStrassenTest(p,10)){
                return {p, q}
            }
        }
    }
}


/*Find a Jacobian*/
function calculateJacobian(a, n) {
    if (!a)
        return 0;// (0/n) = 0
    let  ans = 1;
    if (a < 0n)
    {
        a = -a; // (a/n) = (-a/n)*(-1/n)
        if (n % 4n === 3n)
            ans = -ans; // (-1/n) = -1 if n = 3 (mod 4)
    }

    if (a === 1n)
        return ans;// (1/n) = 1

    while (a)
    {
        if (a < 0n)
        {
            a = -a;// (a/n) = (-a/n)*(-1/n)
            if (n % 4n === 3n)
                ans = -ans;// (-1/n) = -1 if n = 3 (mod 4)
        }
        while (a % 2n === 0n)
        {
            a = a / 2n;
            if (n % 8n === 3n || n % 8n === 5n)
                ans = -ans;

        }
        [a,n] = [n,a]; // swap
        if (a % 4n === 3n && n % 4n === 3n)
            ans = -ans;
        a = a % n;
        if (a > n / 2n)
            a = a - n;
    }
    if (n === 1n)
        return ans;
    return 0;
}
