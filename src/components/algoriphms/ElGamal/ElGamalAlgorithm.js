import {fastDegreeModule} from "../common/functions";
const BigInt = require('big-integer');
/*An Al Gamal algorithm in 3 functions
* Encrypt and Decrypt functions return strings */
export function ElGamalEncrypt(message, P, D2, G) {
    let p = BigInt(P);
    let g = BigInt(G);
    //Вычисляем Db
    let d2 = BigInt(D2);
    let k;

    // Шифрование
    k = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1)).toString()));
    let r = fastDegreeModule(g, k, p);
    let cipher = (BigInt(message) * fastDegreeModule(d2, k, p)) % p; // Вычисляем е = m * (Db ^ k) mod p

    return [cipher, r]
}

export function ElGamalDecrypt(message, P, C2, R) {
    let p = BigInt(P);
    // 2 числа Ci
    let c2 = BigInt(C2);
    let r = BigInt(R);
    // Шифрование
    let decipher = (BigInt(message) * fastDegreeModule(r, p - BigInt(1) - c2, p)) % p;
    return decipher;
}

export function ElGamalGenerate(P, G) { // При P слишком малом может не хватить мощности алфавита для символов Unicode
    let p = BigInt(P);
    let g = BigInt(G);
    // 2 числа Ci
    // Абонент А выбирает случайное число k и вычисляет из него r, e
    let c2 = BigInt(BigInt.randBetween(BigInt(1), (p-BigInt(1))).toString()); // Закрытый ключ
    //Вычисляем Di
    let d2 = fastDegreeModule(g, c2, p); // Открытый
    return [c2,d2];
}

