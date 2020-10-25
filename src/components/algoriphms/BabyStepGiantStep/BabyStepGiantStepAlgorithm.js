import {fastDegreeModule} from "../common/functions";

const BigInt = require('big-integer');

//решение уравнения y = a^x mod p
export function BabyStepGiantStepAlgorithm(Y, A, M, K, P){
    // Шаг 1
    let m = BigInt(M);
    let k = BigInt(K);
    let p = BigInt(P);
    let y = BigInt(Y);
    let a = BigInt(A);
    let a_m = fastDegreeModule(a, m, p);
    //Шаг 2
    // посмотреть, как по-англйскии - ряд
    let rowY = [], rowA = [];
    let startY = y, startA = BigInt(1);
    for(let i = 0; i < k; ++i){
        startA = BigInt((startA.multiply(a_m)) % p);
        rowA.push(startA);
    }
    rowY.push(startY);
    for(let i = 0; i < m - 1; ++i){
        startY = BigInt(startY.multiply(a) % p);
        rowY.push(startY);
    }
    rowY.push(startY);
    console.log(rowY);
    console.log(rowA);
    for(let i = 0; i < rowY.length; ++i){
        for(let j = 0; j < rowA.length; ++j){
            if(rowY[i].equals(rowA[j])){
                console.log(i, j);
                return (i) * m - (j + 1);
            }
        }
    }
    return null;
}
