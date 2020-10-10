import {fastDegreeModule, randomPrime, NOD, getInverseElem} from "../common/functions";
const BigInt = require('big-integer');

/*
* алгортим RSA с "лазейкой"
* */
export function RSA(message){
    const [Pa, Qa, Na, Da, Ca, fia] = bigNumbersGenerate(10);
    const [Pb, Qb, Nb, Db, Cb, fib] = bigNumbersGenerate(10);
    let m = BigInt(message);
    let e = fastDegreeModule(m, Db, Nb);
    let m1 = fastDegreeModule(e, Cb, Nb);
    return [Na, Ca, Da, Nb, Cb, Db, m1];
}


/*Generate P, Q, N, E, D for RSA algorithm*/
function bigNumbersGenerate(keysize) {
    let d = BigInt(65537);
    let eilerFunc;

    let p = BigInt(randomPrime(keysize / 2));
    let q = BigInt(randomPrime(keysize / 2));
    eilerFunc = (p.minus(BigInt(1)).multiply(q.minus(BigInt(1))));
    if(NOD(d,eilerFunc) !== BigInt(1)){
        do {
            d = BigInt.randBetween(BigInt(5), eilerFunc.minus(BigInt(1)))
        } while (BigInt.gcd(d, eilerFunc).notEquals(1));
    }

    let n = p.multiply(q);
    let c = BigInt(d).modInv(eilerFunc);
  //  let c = getInverseElem(d, eilerFunc);
    return [p, q, n, d, c, eilerFunc];
}
