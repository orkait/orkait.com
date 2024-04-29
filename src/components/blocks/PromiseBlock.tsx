import React from 'react'
import { infoCardData } from "../../data/infocard.data";


const PromiseBlock = () => {
    return (
        <div className='prose max-w-full'>
            <h1 className='text-center'>
                Our Promise
            </h1>
            <div className="flex mt-5 max-w-full flex-wrap  items-center justify-center">
                {infoCardData.map((x, index) => (
                    <div key={index} className={`card bg-base-100 shadow-md m-2 w-96 hover:shadow-xl min-w-[300px] min-h-[200px] mx-2  border-[1px] `}>
                        <div className="card-body">
                            <figure className="p-2 m-0 bg-primary/70 text-white flex items-center justify-center rounded-full mt-2 w-fit ">
                                {x.icon && x.icon}
                            </figure>
                            <h2 className="card-title m-0">
                                {x.title}
                            </h2>
                            <p className='m-0'>
                                {x.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PromiseBlock