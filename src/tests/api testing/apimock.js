import React, { useState } from 'react'

const getLocalStorageData = () => {
    const data = localStorage.getItem('UserDate')
    return data ? JSON.parse(data) : []
}

const Apimock = () => {
    const [data, setData] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value
        setData({
            ...data,
            [name]: val
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        window.localStorage.setItem('UserData', JSON.stringify(data));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="fname" name="fname" onChange={handleChange} placeholder="First Name" />
                <input type="text" id="fname" name="sname" onChange={handleChange} placeholder="last Name" />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Apimock;