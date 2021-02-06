export const AppReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
            };

        case 'DELETING_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    return task.id !== action.payload;
                })
            }
        case 'EDITING_TASK':
            const editing = action.payload;
            const editingTask = state.tasks.map((task) => {
                if (task.id === editing.id) {
                    return editing;
                } else {
                    return task;
                }
            })
            return {
                task: editingTask,
            }


        default:
            return state;
    }
}