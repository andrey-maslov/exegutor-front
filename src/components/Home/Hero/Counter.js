import React, {useState} from 'react'

export default function() {

    let [num, setNum] = useState(0);

    let increase = () => {
        setNum('test')
    };

    return (
        <div className="counter">
            <strong>{num}</strong>
            <br/>
            <button onClick={increase}>+ 1</button>
        </div>
    )


}