import {makeAutoObservable} from "mobx";

class Todo {
    // Состояние, в отличие от Redux, является изменяемым
    todos = [
        {id: 1001, title: 'Сходить в магазин', completed: false},
        {id: 1002, title: 'Купить хлеба', completed: false},
        {id: 1003, title: 'Скачать музыку', completed: false}
    ]

    constructor() {
        // Делаем класс автоматически отслеживающим состояние
        makeAutoObservable(this)
    }

    // Action для изменения состояния
    addTodo(title) {
        this.todos.push({id: Date.now(), title: title, completed: false})
    }

    // Action для изменения состояния
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    // Action для изменения состояния
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => this.todos = [...this.todos, ...json])
    }
}

export default new Todo()