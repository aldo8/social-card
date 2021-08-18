import React from 'react'

function Location({location}) {
    return (
        <div>
            <p>{`Location: ${location.street.name} ${location.street.number}`}</p>
            
        </div>
    )
}

export default Location