
enum ActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

interface Action {
    type: ActionType;
    text: string;
}
const todos = (state = [], action: Action) => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            break;
            
        case ActionType.DELETE_TODO:
            break;
    }
}

export default todos;