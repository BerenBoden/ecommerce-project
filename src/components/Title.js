import React from 'react'

export default function Title({name}) {
    return (
        <div>
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-captalize font-weight-bold">
                    {name}
                </h1>
            </div>
        </div>
    )
}
