import React, { useState } from 'react';
import '../index.css';

const Todoform = (props) => {

    const [input, setInput] = useState('');
    const handleSubmit  = (event)=>{
        event.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random() * 1000),
            text : input 
        });
        setInput('')
    }
    
    const handleChange = (event)=>{
        setInput(event.target.value);
    }

    return (
        <div className='w-fit mx-auto sm:w-3/5 bg-neutral-50 shadow-xl rounded mx-auto'>
            <form  className='mt-5' onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='Add some' 
                name='text'
                value={input}
                onChange={handleChange}
                className='shadow appearance-none border rounded md:w-3/4 sm:w-2/3 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                <button className='mx-3 mb-3 md:bg-transparent hover:bg-neutral-500 text-neutral-500 font-semi-bold hover:text-white py-1 px-2 mt-3 border border-neutral-500 hover:border-transparent rounded' type='submit'>Add Items</button>
            </form>
        </div>
    );
}

export default Todoform;
