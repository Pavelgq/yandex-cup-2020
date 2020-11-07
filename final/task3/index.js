class TaskManager {
    constructor(N) {
        this.robots = N;
        this.q = [];
        this.report = [];
        this.prom = [];
    } // общее число роботов-исполнителей (от 1 до 1024)  

    // Добавление задачи в очередь  
    addToQueue(
        task // задача для исполнения, см. формат выше  
    ) {
        this.q.push(task);
    }
    // Promise, который запускает процесс выполнения задач и выдаёт список отчётов  
    run() {
        this.q.sort((a, b) => b.priority - a.priority);
        let curRobor = 0;
        let report = [];
        for (let i = 0; i < this.robots; i++) {
            report.push([]);
            this.report.push({
                tasks: [],
                successCount: 0,
                failedCount: 0,
                timeSpent:0
            })
        }
        this.q.forEach(el => {
            report[curRobor].push(el);

            if (curRobor < this.robots - 1) {
                curRobor += 1;
            } else {
                curRobor = 0;
            }
        })

        for (let i = 0; i < this.robots; i++) {
            let prom = []
            report[i].forEach(el => {
                let date = new Date();
                prom.push(el.job().then((res) => {
                    this.report[i].tasks = report[i].map(el => el.id);
                    this.report[i].successCount += 1;
                    this.report[i].timeSpent += new Date() - date;
                    return this.report[i];

                }).catch(e => {
                    this.report[i].tasks = report[i].map(el => el.id);
                    this.report[i].failedCount += 1;
                    this.report[i].timeSpent += new Date() - date;
                    return this.report[i];
                }))
            })
            this.prom.push(...prom)
        }

        return Promise.all(this.prom).then(val => {
            return val.filter((el, i) => {
                return el.tasks[0] = report[i].map(el => el.id)[0] 
            })
        })

    }
}


module.exports = {
    TaskManager
};