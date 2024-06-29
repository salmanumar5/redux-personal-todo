import React from 'react'
import { useSelector } from 'react-redux'
import TodoItems from './TodoItems';

function TodoList() {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch;
        })
    })

  return (
    <div>
        <ul>
            <li className='my-2 text-sm italic'>All your task are here...</li>
            {
                filteredTodos.map((todo, index) => (
                    <TodoItems key={index} todo={todo} index={index}/>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList