import fs from 'fs-extra'

const vovals = ["a", "e", "i", "o", "u"];
const badStrings = ["ab", "cd", "pq", "xy"];
const doubleCharRegEx = /([a-z])\1/;

const isNice = (rawStr:string): boolean => {

    const str = rawStr.split('');

    let vovalCount = 0;

    str.forEach((el:string) => {
        vovals.forEach((v:string) => {
            if(el === v)
                vovalCount++;
        })
    })

    if(vovalCount < 3)
        return false;

    if(!rawStr.match(doubleCharRegEx))
        return false

    let contain = false;

    badStrings.forEach((el:string) => {
        if(rawStr.split(el).length > 1){
            contain = true;
        }
    })

    if(contain) return false;

    return true;
}


const main = () => {

    const rawInput = fs.readFileSync('../input.txt')
        .toString();

    const input = rawInput
        .trim()
        .split(`
`);

    let result = 0;

    for(let i = 0; i < input.length; i++){
        if(isNice(input[i]))
            result++;
    }

    console.log(result);
}

void main();
