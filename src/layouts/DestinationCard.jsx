import React from 'react'
import { Button } from 'react-scroll'

const DestinationCard = (props) => {
    const backgroundColor = 'bg-brightColor'
  return (
    <div className='w-full lg:w-2/6 cursor-pointer hover:shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
        <img className='rounded-t-lg' src={props.img} alt='img'/>
        <div className='bg-[#f2f2f2f2] p-5 spy-y-3 rounded-b-lg'>
            <h2 className='text-xl font-medium text-center'>{props.title}</h2>
            <p className='text-sm'>{props.para}</p>
            <div className='flex flex-row justify-center'>
                <Button title='Book Tickets' backgroundColor={backgroundColor}/>
            </div>
        </div>
    </div>
  )
}

export default DestinationCard