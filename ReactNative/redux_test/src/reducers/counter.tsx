enum ActionType {
    INCREMENT,
    DECREMENT
}

interface Action {
    type: ActionType;
}

const counter = (state = 0, action: Action) => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return state + 1;

        case ActionType.DECREMENT:
            return state - 1;

        default:
            return state;
    }
}

export default counter;