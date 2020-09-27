const ONE_SECOND_DEGREES = 6;  
const ONE_SECOND_FACTOR = 1 / Framework.SPEED * ONE_SECOND_DEGREES; 
const MAX_FACTOR = 1 / Framework.MAX_SPEED * ONE_SECOND_DEGREES;  
 
class MyClock extends Framework.Clock {  
    constructor() {  
        super();  
 
        this.arrows.push(new Framework.Arrow("seconds", {  
            color: "red"  
        }));  
 
        this.arrows.push(new Framework.Arrow("minutes", {  
            weight: 3,  
            length: 80  
        }));  
 
        this.arrows.push(new Framework.Arrow("hours", {  
            weight: 3,  
            length: 60  
        }));  
 
        this.arrows.push(new Framework.Arrow("days", {  
            weight: 3,  
            length: 60  
        }));  
 
        this.buttons.push(new Framework.Button("Reset", () => {  
            this.buttonAHandler();
        }));  
 
        this.tick = 0;  
    }  
 
    onAfterTick() {  
        const [arrow] = this.arrows;  
 
        // console.log("after: " + arrow.pos);  
    }  

    onBeforeTick() {  
        const [sArrow, mArrow, hArrow, dArrow] = this.arrows;  
 
        this.tick++;  

        sArrow.rotateFactor = getRotateFactor(this.tick, sArrow.pos, 10)  
        // sArrow.rotateFactor = this.tick % 10 ? 0 : ONE_SECOND_FACTOR;  
        mArrow.rotateFactor = this.tick % 600  ? 0 : ONE_SECOND_FACTOR;
        hArrow.rotateFactor = this.tick % 36000  ? 0 : ONE_SECOND_FACTOR;
        dArrow.rotateFactor = this.tick % 864000  ? 0 : ONE_SECOND_FACTOR;
 
        // console.log("before: " + arrow.pos);  

        !sArrow.rotateFactor && !mArrow.rotateFactor && !hArrow.rotateFactor && !dArrow.rotateFactor
    }  

    buttonAHandler() {
        this.tick = 0;
    }
}

function getRotateFactor(tick, pos, k) {
    let angle = ((tick / k) * 360) - pos;
        angle != 0 && (angle = 360);
   

    const factor = angle / Framework.SPEED;
     
    const newFactor = tick % k ? 0 : ONE_SECOND_FACTOR;

    return 
}