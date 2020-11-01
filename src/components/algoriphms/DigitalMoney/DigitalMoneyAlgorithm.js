import {fastDegreeModule, NOD} from "../common/functions";

const BigInt = require('big-integer');

export function DigitalMoneyAlgorithm(n, p, q, c){
    n = BigInt(n);
    p = BigInt(p);
    q = BigInt(q);
    c = BigInt(c);
    let N = p.multiply(q);
    let d = c.modInv((p.minus(BigInt(1))).multiply(q.minus(BigInt(1))));
    let r = BigInt(2);
    if(NOD(r, N) !== BigInt(1)){
        do {
            r = BigInt.randBetween(BigInt(5), N.minus(BigInt(1)))
        } while (BigInt.gcd(r, N).notEquals(1));
    }
    let n_c = BigInt(BigInt(fastDegreeModule(r, d, N)).multiply(n) % N);
    let s_c = BigInt(fastDegreeModule(n_c, c, N));
    let s = BigInt(s_c.multiply(r.modInv(N)) % N);
    return [N, c, r, n_c, s_c, s];
}
