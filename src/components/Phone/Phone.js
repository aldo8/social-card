import React from 'react'

function Phone({number,type}) {
    return (
        <div>
            <p>{`${type}: ${number}`}</p>
        </div>
    )
}

export default Phone
