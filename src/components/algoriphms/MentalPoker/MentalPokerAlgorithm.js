import {fastDegreeModule, randomIntFromInterval, NOD} from "../common/functions";
const BigInt = require('big-integer');
/**
 * MentalPokerAlgorithm
 * @param -module
 * @constructor
 */
export function MentalPoker(P){
    const p = BigInt(P);
    //шаг 1: выбираем параметры Алисы и Боба. Выбираем 3 карты.
    const [Ca, Cb, Da, Db] = MentalPokerGenerate(p);
    let cards = [];
    while (cards.length < 3){
        let tmp = BigInt(BigInt.randBetween(BigInt(1), BigInt(54)).toString());
        cards.push(tmp);
    }
    //Шаг 1. Алиса вычисляет числа u1, u2, u3 и высылает их Бобу
    let codeCards = [];
    for(let i = 0; i < 3; ++i){
        codeCards.push(fastDegreeModule(cards[i],Ca, p));
    }
    //Шаг 2. Боб получает 3 числа, выбирает одно из них. Отправляет его Алисе.
    // Алиса получает число, вычисляет карту
    let index = randomIntFromInterval(0, 2);
    let aliceCard = fastDegreeModule(codeCards[index], Da, p);
    //Шаг 3. Боб вычисляет для оставщихся чисел степени
    console.log(codeCards);
    codeCards.splice(index , 1);
    console.log(codeCards);
    for(let i = 0; i < codeCards.length; ++i){
        codeCards[i] = fastDegreeModule(codeCards[i],Cb, p);
    }
    //Шаг 4. Алиса вычисляет одно из них и отправляет Бобу
    //Боб узнаёт карту
    index = randomIntFromInterval(0, 1);
    let w1 =  fastDegreeModule(codeCards[index], Da, p);
    let bobCard = fastDegreeModule(w1, Db, p);
    return [Ca, Da, Cb, Db, cards, aliceCard, bobCard];
}

/*Generate Ca, Cb, Da, Db for Mental Poker*/
function MentalPokerGenerate(p) { // size - порядок // p = (q*2) + 1
    let Ca = BigInt(2); // абонент A
    while (NOD(Ca, p.minus(BigInt(1))) != BigInt(1)){
        Ca = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1))).toString());
    }
    let Da = BigInt((BigInt(Ca).modInv(p.minus(BigInt(1)))).toString());

    let Cb = BigInt(2); // абонент B
    while (NOD(Cb, p.minus(BigInt(1))) != BigInt(1)){
        Cb = BigInt(BigInt.randBetween(BigInt(1), p.minus(BigInt(1))).toString());
    }
    let Db = BigInt((BigInt(Cb).modInv(p.minus(BigInt(1)))).toString());
    return [Ca, Cb, Da, Db]
}
