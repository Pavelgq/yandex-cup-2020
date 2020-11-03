'use strict'

const numbers = document.querySelectorAll('.symbol');

const keys = document.querySelectorAll('.key');

for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];
    console.log(el)
    setTimeout(() => {
        switch (el.classList[1]) {
            case 'one':
                keys[0].click();
            break;
            case 'two':
                keys[1].click();
            break;
            case 'three':
                keys[2].click();
            break;
            case 'four':
                keys[3].click();
            break;
            case 'five':
                keys[4].click();
            break;
            case 'six':
                keys[5].click();
            break;
            case 'seven':
                keys[6].click();
            break;
            case 'eight':
                keys[7].click();
            break;
            case 'nine':
                keys[8].click();
            break;
            case 'zero':
                keys[10].click();
            break;
            case 'call':
                keys[9].click();
            break;
        
            default:
    
                break;
        }
    }, 1000*i);
    
    
    
}
