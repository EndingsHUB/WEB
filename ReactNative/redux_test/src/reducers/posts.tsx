
export enum TddoActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

interface Action {
    type: TddoActionType;
    text: string;
}
const todos = (state: string[] = [], action: Action) => {
    switch (action.type) {
        case TddoActionType.ADD_TODO:
            return [...state, action.text];

        case TddoActionType.DELETE_TODO:
            return state;


        default:
            return state;
    }
}

export default todos;