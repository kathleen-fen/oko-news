import React from 'react'
import './Loader.scss'

function Loader(props) {
    return (
        <div className={["loader","col-md-12",props.clName].join(' ')}>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader