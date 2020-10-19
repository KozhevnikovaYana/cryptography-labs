import {fastDegreeModule, NOD} from "../../common/functions";

const BigInt = require('big-integer');

export function ElGamalDigitalSignatureAlgorithm(message, P, G){
    let p = BigInt(P);
    let g = BigInt(G);
    let m = BigInt(message);
    let x = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1))));
    let y = BigInt(fastDegreeModule(g, x, p));
    let k = BigInt(2); // абонент A
    while (NOD(k, p.minus(BigInt(1))) !== 1){
        k = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1))));
    }
    let r = BigInt(fastDegreeModule(g, k, p));
    let u = BigInt(m.minus(x.multiply(r)) % (p - 1));
    while (u.isNegative()){
        u = u.plus(p.minus(BigInt(1)));
    }
    let s = BigInt(k.modInv(p.minus(BigInt(1))).multiply(u) % (p - 1));
    while (s.isNegative()){
        s = s.plus(p.minus(BigInt(1)));
    }
    let ans1 = BigInt((fastDegreeModule(y, r, p) * fastDegreeModule(r, s, p)) % p);
    let ans2 = BigInt(fastDegreeModule(g, m, p));
    return [x, y, k, r, u, s, ans1, ans2]
}
