import { useState } from 'react';
import IncDec from './IncDec.css'

function Counter()
{
    const [count , setCount] = useState(0);
    function Increse()
    {
        setCount(count =>count+1);
    }
    function Decrease()
    {
        setCount(count=>count-1);
    }
    return (
        <>
        <div>
            <button className= "Increment btn"  onClick={Increse}> Increment </button>
            <button className= "Increment btn"  onClick={Decrease}> Decrement </button>
            <h1> {count}</h1>
        </div>
        </>
    );
}

export default Counter;