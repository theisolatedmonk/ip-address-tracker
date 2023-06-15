'use client'
import Image from 'next/image'
import React from 'react'
import arrowIcon from '@/images/icon-arrow.svg'
type Props = {}




export  function InputPage({}: Props) {
  return (
    <div className="flex flex-col mt- bg-green-200 absolute items-center gap-6">
    <p>IP Address Tracker</p>
      <div className="bg-whit rounded-lg w-full flex items-center h-10  px-20">
        <input  className='text-black h-full border rounded-l-lg' type="number " />
     
        <Image className='rounded-r-lg bg-black h-full w-full' src={arrowIcon} alt={''}/>
        
      </div>
      <div className="flex bg-red-500 p-4 rounded-lg">
<Data name={'IP ADDRESS'} output={''} class={'border-r-2'}/>
<Data name={'LOCATION'} output={''} class={'border-r-2'}/>
<Data name={'TIMEZONE'} output={'TIMEZONE'} class={'border-r-2'}/>
<Data name={'ISP'} output={''} class={''}/>


</div>
    </div>
  )
}



type DataType = {
name: string
output: string | number
class: string
}

export  function Data(props:DataType) {
  return (
    <div className={'flex flex-col bg-white text-black p-4 gap-2  ${props.class} '}>
        <p className='bg-green-400'>{props.name}</p>
        <p className="bg-yellow-500 w-full">{props.output} </p>
    </div>
  )
}