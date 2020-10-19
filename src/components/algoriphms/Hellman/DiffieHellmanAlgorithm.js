/*An Diffie-Hellman algorithm
* Can get (P and Q) OR size of them in number of digits*/
import {fastDegreeModule, randomIntFromInterval} from "../common/functions";
const BigInt = require('big-integer');
/*An Diffie-Hellman algorithm
* Can get (P and Q) OR size of them in number of digits*/
export function diffiHellman(P,G){
    let p,g;
    p = BigInt(P);
    g = BigInt(G);
    // first client
    let Xa = (BigInt.randBetween(p.divide(BigInt(2)), p.minus(BigInt(1)))).toString();
    let Ya = fastDegreeModule(g,Xa, p);

    // second
    let Xb = (BigInt.randBetween(p.divide(BigInt(2)), p.minus(BigInt(1)))).toString();
    let Yb = fastDegreeModule(g,Xb, p);

    // Connection
    let Zab = fastDegreeModule(Yb,Xa, p);
    let Zba = fastDegreeModule(Ya,Xb, p);

    // console.table({q, p, g, Xa, Ya, Xb, Yb, Zab, Zba})
    return {p, g, Xa, Ya, Xb, Yb, Zab, Zba}
}
