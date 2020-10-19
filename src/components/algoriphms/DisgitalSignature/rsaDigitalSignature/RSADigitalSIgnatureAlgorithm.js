import {NOD, randomPrime, fastDegreeModule} from "../../common/functions";

const BigInt = require('big-integer');

export function RSADigitalSignatureAlgorithm(message){
    const [Na, Da, Ca] = bigNumbersGenerate(10);
    let m = BigInt(message)
    let s = fastDegreeModule(m, Ca, Na);
    let w = fastDegreeModule(s, Da, Na);
    return [Na, Da, Ca, s, w];
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
    return [n, d, c, eilerFunc];
}
