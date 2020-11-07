module.exports = function solution(dron, downfallInfo, mapSize) {
    // ваш код



    const arr = [];
    for (const key in downfallInfo) {
        if (downfallInfo[key]) {
           arr.push(dron[key]); 
        }
    }

    PromiseAll(arr).then(val => {
        
    })


  }

  function solution(
    dron: Dron, 
    downfallInfo: downfallInfo, 
    mapSize: number
  ): Promise<[number, number]> {}


  interface Dron {
    move: (position: [number, number]) => Promise<boolean>;
    top: () => Promise<number>;
    left: () => Promise<number>;
    right: () => Promise<number>;
    bottom: () => Promise<number>;
  }

  interface DownfallInfo {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }