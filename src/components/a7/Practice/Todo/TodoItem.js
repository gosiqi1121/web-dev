const TodoItem = (todo
                      = {done: true, title: 'Buy milk', status: 'COMPLETED'}) => {
    return (
        <li>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}({todo.status})
        </li>
    );
}
export default TodoItem;
/*
provide default object o we can test
component standalone
we don't need ` `,
don't need $
use defaultChecked to set initial state
don't need $
don't need ` `
*/
