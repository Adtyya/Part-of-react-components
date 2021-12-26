import React, { useEffect, useState } from 'react';
import Todoform from './TodoForm';
import './Todo.css';
import Todoedit from './TodoEdit';
import Loading from './Loading';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 3400)
        const data = localStorage.getItem('todo-list');
        if(data){
            setTodos(JSON.parse(data));
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('todo-list', JSON.stringify(todos))        
    })

    const addTodo = (todo)=>{
        if(!todo.text){
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }
    const completeTodo = (id)=>{
        const update = todos.map((todo)=>{
            if(todo.id === id){
                todo.setComplete = !todo.setComplete 
                console.log(todo)
            }
            return todo;
        })
        setTodos(update)
    }
    
    const handleRemove = (id)=>{
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    return (
        <div className="wrapper">
            {loading ? 
            <Loading handleLoading={loading}/>
            :
            <div className='none sm:container mx-auto'>
                <h3 className='block text-2xl pt-20 sm:text-3xl font-bold text-center text-gray-50'>What's Your Plan Today ? </h3>
                <Todoform onSubmit={addTodo}/>
                <Todoedit todos={todos} removeTodo={handleRemove} handleComplete={completeTodo}/>
            </div>
            }
        </div>
    );
}

export default Todo;
