import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map(TodoItem)
            }

        </ul>


    );
}
export default TodoList;
