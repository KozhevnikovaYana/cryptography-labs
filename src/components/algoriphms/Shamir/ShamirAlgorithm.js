import {fastDegreeModule, NOD} from "../common/functions";
const BigInt = require('big-integer');
/*Full ShamirForm encryption and decryption algorithm
* returns an all steps of encoding and decoding,*/
export function ShamirEncode(message, P) { // size - порядок // p = (q*2) + 1
    let p = BigInt(P); // Открытое большое число
    const [Ca, Cb, Da, Db] = ShamirGenerate(p);
    // A формирует x1
    let x1 = fastDegreeModule(message, Ca, p);
    // x1 отправляется к абоненту B
    let x2 = fastDegreeModule(x1, Cb, p);
    // x2 отправляется к абоненту A
    let x3 = fastDegreeModule(x2, Da, p);
    // x3 отправляется к абоненту B и он получает исходное сообщение
    let x4 = fastDegreeModule(x3, Db, p);
    console.table(x1, x2, x3, x4);
    return {p, Ca, Cb, Da, Db, x1, x2, x3, x4}
}

/*Generate P, Ca, Cb, Da, Db for ShamirForm's alrorithm
* size of P is 'size' bits*/
function ShamirGenerate(p) { // size - порядок // p = (q*2) + 1
    let Ca = BigInt(2); // абонент A
    while (NOD(Ca, p.minus(BigInt(1))) !== BigInt(1)){
        Ca = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1))).toString());
    }
    let Da = BigInt((BigInt(Ca).modInv(p.minus(BigInt(1)))).toString());

    let Cb = BigInt(2); // абонент B
    while (NOD(Cb, p.minus(BigInt(1))) !== BigInt(1)){
        Cb = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1))).toString());
    }
    let Db = BigInt((BigInt(Cb).modInv(p.minus(BigInt(1)))).toString());
    return [Ca, Cb, Da, Db]
}
