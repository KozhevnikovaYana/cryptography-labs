
/*An Diffie-Hellman algorithm
* Can get (P and Q) OR size of them in number of digits*/
export function diffiHellman(p, g){
    // first
    let Xa =  randomIntFromInterval((p/2), (p-1));
    console.log(Xa);
    let Ya = fastDegreeModule(g,Xa, p);
    console.log(Ya);
    // second
    let Xb = randomIntFromInterval((p/2), (p-1));
    console.log(Xb);
    let Yb = fastDegreeModule(g,Xb, p);
    console.log(Yb);
    // Connection
    let Zab = fastDegreeModule(Yb,Xa, p);
    console.log(Zab);
    let Zba = fastDegreeModule(Ya,Xb, p);
    console.log(Zba);

//     console.table({ p, g, Xa, Ya, Xb, Yb, Zab, Zba})
    return {p, g, Xa, Ya, Xb, Yb, Zab, Zba}
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*A - base, X - power, P - module
* returns (A ** P) mod M for any numbers*/
export function fastDegreeModule(a,x,p) {
    let result = 1;
    let arrayOfDegrees = countFactorOf2Degree(x).split(" ");
    let helpVar = (a * a) % p;
    let helpDegree = 2;
    for (let i = arrayOfDegrees.length; i > 0; i--) {

        // Возведение в степень по модулю
        if (arrayOfDegrees[i - 1] !== "" && arrayOfDegrees[i - 1] !== '1' && arrayOfDegrees[i - 1] !== '0') {
            while (helpDegree.toString() !== arrayOfDegrees[i - 1]) {
                helpVar = ((helpVar * helpVar)) % p;
                helpDegree = helpDegree * 2;
            }
            result = (result * helpVar) % p;
        } else {
            result = (result * degreeModule(a, parseInt(arrayOfDegrees[i - 1]), p)) % p;
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
    let tmp = 1;
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return "1";
    }
    while (tmp <= num) {
        tmp *= 2;
    }
    tmp /= 2;
    num = num - tmp;
    return tmp.toString() + " " + countFactorOf2Degree(num);
}
