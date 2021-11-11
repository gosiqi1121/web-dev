const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todos = (state = data, action) => {
    let newState = state;
    switch (action.type) {
        case "create-todo":
            newState = {
                ...action.todo,
                _id : (new Date()).getTime() + ""
            };
            return [...state, newState]

        case "delete-todo":
            newState = state.filter((todo) => {
                return todo !== action.todo;
            })
            return newState;


        case "update-todo":
            newState = state.map(todo => {
               const newTodo = todo._id === action.todo._id ? action.todo : todo;
               return newTodo;
            });
            return newState;
        default :
            return state;
    }
}

export default todos;
