import React from 'react';
import {observer} from "mobx-react-lite";
import todo from './mobx/todo'

const Todo = observer(() => {
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>Fetch todos</button>

            <button onClick={() => todo.addTodo(prompt('Todo title is...'))}>Add Todo</button>

            {todo.todos.map(t =>
                <div key={t.id} className={"todo"}>
                    <input
                        type="checkbox"
                        checked={t.completed}
                        onClick={() => todo.completeTodo(t.id)}
                    />
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>&times;</button>
                </div>
            )}
        </div>
    );
});

export default Todo;