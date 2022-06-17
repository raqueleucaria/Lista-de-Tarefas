import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    };

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete': 
            'todo-row'} key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <FaRegTrashAlt
                    className='removeButton' 
                    onClick={() => removeTodo(todo.id)}
                />
                <FaRegEdit
                    className='editButton' 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                />

            </div>
        </div> 
    ))
}

export default Todo