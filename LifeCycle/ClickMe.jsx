import React, { useState } from 'react';

const Clickme = () => {
    const [count, setCount] = useState(0);
    const tambah = function(){setCount(num => num +1 )};
    //Menggunakan function biasa
    const kurang =()=>{setCount(num => Math.max(num-1, 0))};
    //Menggunakan arrow function. Tanpa arrow function = function(){}, menggunakan arrow function()=> 

        return (
            <div>
                <p>You clicked me {count} times!</p>
                <button onClick={tambah}>+</button>
                <button onClick={kurang}>-</button>
            </div>
    );
};

export default Clickme;
