import React from 'react';
import {FcCheckmark} from 'react-icons/fc'
import {FcFullTrash} from 'react-icons/fc'
import {FcUndo} from 'react-icons/fc'

const Todoedit = ({todos, removeTodo, handleComplete}) => {

    return (
        <div className='w-11/12 md:w-3/5 bg-neutral-50 shadow-xl rounded mx-auto'>
            {todos.map((todo)=> (
                
                <div key={todo.id}>
                        {todo.setComplete ?
                        <ul className='relative list-inside text-gray-500 list-none mx-2 my-3 py-1'>
                            <li className='line-through'>
                            {todo.text}
                            <FcUndo className='absolute inset-y-0 right-7 mt-2' onClick={()=>handleComplete(todo.id)}/>
                            <FcFullTrash className='absolute inset-y-0 right-0 mt-2 ' onClick={()=>removeTodo(todo.id)}/>
                            </li>
                        </ul>
                        :
                        <ul className='relative list-inside text-gray-500 list-disc mx-2 my-3 py-1 sm:mx-2 py-2'>
                            <li>
                            {todo.text}
                            <FcCheckmark className='absolute inset-y-0 right-7 mt-2' onClick={()=>handleComplete(todo.id)}/>
                            <FcFullTrash className='absolute inset-y-0 right-0 mt-2 ' onClick={()=>removeTodo(todo.id)}/>
                            </li>
                        </ul>
                        
                    }
                       
                    </div>
            ))}
        </div>
    );
}

export default Todoedit;
