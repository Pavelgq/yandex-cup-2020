const input = {
    type: 'task',
    title: 'Sub task',
    assignee: null,
    spectators: [],
    subtasks: [],
    parent: {
        type: 'task',
        title: 'Something else',
        assignee: null,
        spectators: [{
            type: 'user',
            login: 'fedor',
            tasks: [{
                type: 'task',
                title: 'Do something',
                assignee: null,
                spectators: [{
                    type: 'user',
                    login: 'arkady',
                    tasks: [],
                    spectating: [
                        null
                    ]
                }],
                subtasks: [],
                parent: null
            }],
            spectating: [
                null
            ]
        }],
        subtasks: [
            null
        ],
        parent: null
    }
}

module.exports = {input};