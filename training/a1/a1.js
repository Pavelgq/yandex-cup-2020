/** @returns string */  
module.exports = function(inputString) {  
    // ваш код здесь  

    const reg = /(M|NGC)[0-9]+\s\((.*)\)\s[AIGKFM]\-[0-9]+\#([0-9]+)\s[0-9]+/;

    const [, , coord, planetId] = inputString.match(reg);

    console.log(coord, planetId)

    const arr = coord.split('; ');
    let sf;
    if (arr[0] > 0) {
        if (arr[1] >= 0 && arr[1] < 360) {
            if (arr[2] >= 0 && arr[2] < 180) {
               if (arr[2] <= 90) {
                   sf = 0;
               } else {
                   sf = 1;
               } 
            }
        }
    }
    
    return `${sf} ${planetId}`;
 }
 