import React from 'react'
import Image from 'next/image'

const visonariesData = [
    {
        name: 'Kailas Mahavarkar',
        title: 'Software Engineer at Carwale',
        image: '/assets/orka_black.svg'
    },
    {
        name: 'Kamal Maharana',
        title: 'Senior Software Engineer at PineLabs',
        image: '/assets/orka_black.svg'
    },
    {
        name: 'Shubham Mandwale',
        title: 'Data Analyst',
        image: '/assets/orka_black.svg'
    },
]

const Visionaries = () => {
    return (
        <div className='flex flex-col prose text-center max-w-full'>
            <h1 >
                Visionaries
            </h1>
            <div className="flex flex-wrap items-center justify-center ">
                {visonariesData.map((x, index) => {
                    return (
                        <div key={index} className="max-w-md w-full  h-auto  ">
                            <div className="flex flex-col flex-grow-0 items-center justify-center  text-center">
                                <Image
                                    className='rounded-full mb-0 p-2 min-h-[100px] min-w-[100px] border-2'
                                    src={x.image}
                                    width={0}
                                    height={0}
                                    alt=''
                                />
                                <p className="text-lg font-bold mb-0">
                                    {x.name}
                                </p>
                                <p className=" text-lg font-semibold m-0 p-0">
                                    {x.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Visionaries