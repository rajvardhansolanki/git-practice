import React, { useEffect, useState } from 'react'
import dataJson from "./dataJson.json"

const StateTest = () => {
    const [data, setData] = useState()
    useEffect(() => {
        setData(dataJson)
    }, [])
    return (
        <>
            <ul className="orderList">
                <li className="abc" key="angular">angular</li>
                <li className="abc" key="node">node</li>
                <li className="abc" key="vew">vew</li>
            </ul>
            <div className="sdsds" key="angular">hello</div>

            {/* {data ?
                data.map((item, index) => {
                    return (
                        <>
                            <h1 className="sdsds" key="1">hello</h1>
                        </>
                    )
                })
                : ""
            } */}
        </>
    )
}

export default StateTest