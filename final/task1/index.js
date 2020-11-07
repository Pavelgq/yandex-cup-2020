module.exports = function getBestFitImageIndex(frame, images) {

    const s = frame.w * frame.h;
    const r = frame.w * frame.h;
    const arr = [];
    images.forEach(el => {
        let w = (el.w * frame.h) / (el.h);
        let h = (el.h * frame.w) / (el.w);
        let x = {w: 0, h: 0};
        if (w - frame.w > 0) {
            x.w =  w; 
            x.h = frame.h;
        } else {
            x.h = h;
            x.w = frame.w;
        }
        let sNew = x.h * x.w;
        arr.push(sNew - s);
    });

    console.log(arr);

    let minS = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minS]) {
            minS = i;
        }
    }

    return minS;

};