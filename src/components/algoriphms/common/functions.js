const bigInt = require('big-integer');

/*An Diffie-Hellman algorithm
* Can get (P and Q) OR size of them in number of digits*/
export function diffiHellman(P, G){
    let p = BigInt(P);
   // let g = BigInt(G) % p;
    let g = BigInt(G);
    // first client
    let Xa = (bigInt.randBetween((p/2n).toString(), (p-1n).toString()));
    let Ya = fastDegreeModule(g,Xa, p);

    // second
    let Xb = (bigInt.randBetween((p/2n).toString(), (p-1n).toString()));
    let Yb = fastDegreeModule(g,Xb, p);

    // Connection
    let Zab = fastDegreeModule(Yb,Xa, p);
    let Zba = fastDegreeModule(Ya,Xb, p);

     console.table({ p, g, Xa, Ya, Xb, Yb, Zab, Zba})
    return {p, g, Xa, Ya, Xb, Yb, Zab, Zba}
}
/*A - base, X - power, P - module
* returns (A ** P) mod M for any numbers*/
export function fastDegreeModule(A,X,P) {
    let a = BigInt(A); let x = BigInt(X); let p = BigInt(P);
    let result = 1n;
    let arrayOfDegrees = countFactorOf2Degree(x).split(" ");
    let helpVar = (a * a) % p;
    let helpDegree = 2n;
    for (let i = arrayOfDegrees.length; i > 0; i--) {

        // Возведение в степень по модулю
        if (arrayOfDegrees[i - 1] !== "" && arrayOfDegrees[i - 1] !== '1' && arrayOfDegrees[i - 1] !== '0') {
            while (helpDegree.toString() !== arrayOfDegrees[i - 1]) {
                helpVar = ((helpVar * helpVar)) % p;
                helpDegree = helpDegree * 2n;
            }
            result = (result * helpVar) % p;
        } else {
            result = (result * degreeModule(a, BigInt(arrayOfDegrees[i - 1]), p)) % p;
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
    let tmp = 1n;
    if (num === 0n) {
        return 0n;
    } else if (num === 1n) {
        return "1";
    }
    while (tmp <= num) {
        tmp *= 2n;
    }
    tmp /= 2n;
    num = num - tmp;
    // console.log(tmp, num)
    return tmp.toString() + " " + countFactorOf2Degree(num);
}
