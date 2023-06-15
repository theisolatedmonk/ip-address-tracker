'use client'
import Image from 'next/image'
import React from 'react'
import arrowIcon from '@/images/icon-arrow.svg'
type Props = {}




export  function InputPage({}: Props) {
  return (
 
  <div className="top-0 w-full min-h-screen  bg-opacity-30 flex justify-center  fixed inset-0">   <div className="flex flex-col   items-center gap-4 w-96    h-full mt-24  ">
  <p>IP Address Tracker</p>
    <div className="bg-whit rounded-lg w-full flex items-center h-10  justify-center">
      <input  className='text-black h-full  outline-none rounded-l-lg' type="number " />
   
     <button className='w-8 h-full  bg-black p-2 rounded-r-lg'> <Image className='  ' src={arrowIcon} alt={''}/></button>
      
    </div>
    <div className="flex bg-white p-2 rounded-lg">
<Data name={'IP ADDRESS'} output={''} class={'border-r-2'}/>
<Data name={'LOCATION'} output={''} class={'border-r-2'}/>
<Data name={'TIMEZONE'} output={'TIMEZONE'} class={'border-r-2'}/>
<Data name={'ISP'} output={''} class={''}/>


</div>
  </div></div>
   
  )
}



type DataType = {
name: string
output: string | number
class: string
}

export  function Data(props:DataType) {
  return (
    <div className={'flex flex-col bg-w text-black p-2 gap-2  ${props.class} '}>
        <p className='bg-green-400'>{props.name}</p>
        <p className="bg-yellow-500 w-full">{props.output} </p>
    </div>
  )
}