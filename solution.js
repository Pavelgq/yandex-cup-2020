const ONE_SECOND_DEGREES = 6;
const ONE_SECOND_FACTOR = 1 / Framework.SPEED * ONE_SECOND_DEGREES;
const MAX_FACTOR = Framework.MAX_SPEED / Framework.SPEED;
const TPS = 1000 / Framework.INTERVAL;

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
        this.reset = true;
    }

    onAfterTick() {
        const [arrow] = this.arrows;

        // console.log("after: " + arrow.pos);  
    }

    onBeforeTick() {
        const [sArrow, mArrow, hArrow, dArrow] = this.arrows;

        if (!this.reset) {
            this.tick++;
        }

        const relative = getRelativePos(this.tick);
        sArrow.rotateFactor = getRotateFactor(sArrow.pos, relative.seconds, this.reset);
        mArrow.rotateFactor = getRotateFactor(mArrow.pos, relative.minutes, this.reset);
        hArrow.rotateFactor = getRotateFactor(hArrow.pos, relative.hours, this.reset);
        dArrow.rotateFactor = getRotateFactor(dArrow.pos, relative.days, this.reset); 
        !sArrow.rotateFactor && !mArrow.rotateFactor && !hArrow.rotateFactor && !dArrow.rotateFactor && (this.reset = false)
    }

    buttonAHandler() {
        this.tick = 0;
        this.reset = true;
    }
}

function getRelativePos(ticks) {
    const ts = Math.floor(ticks / TPS);

    const seconds = ts % 60 * 360 / 60;
    const minutes = Math.floor(ts / 60) % 60 * 360 / 60;
    const hours = Math.floor(ts / (60 * 60)) % 12 * 360 / 12;
    const days = Math.floor(ts / (60 * 60 * 24)) % 60 * 360 / 60;
    console.log('sec', seconds);
    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function getRotateFactor(pos, target, reset = false) {
    let newAngle = target - pos;

    if (!reset) {
        if (newAngle < 0) {
            newAngle += 360;
        }
    } else {
        if (newAngle < 0)
            newAngle += 360

    }
    console.log(newAngle);
    const factor = Math.floor((newAngle / Framework.SPEED) * 10) / 10;
    return Math.abs(factor) > MAX_FACTOR ? MAX_FACTOR : factor;
}