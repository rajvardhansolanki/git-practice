import React, { useState } from 'react'

const blog = () => {
    const [one, setOne] = useState()
    return (
        <div className="container">
            <ul>
                <li>Angular</li>
                <li>React</li>
                <li>Vew</li>
            </ul>
            <div className="number">
                <span>one</span>
                <span>two</span>
            </div>
            <div>
                <button className="btn">Submit</button>
            </div>
        </div>
    )
}

export default blog