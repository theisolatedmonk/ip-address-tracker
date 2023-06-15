import Image from 'next/image'


import patternDesktop from '@/images/pattern-bg-desktop.png'
import patternMobile from '@/images/pattern-bg-mobile.png'
import arrowIcon from '@/images/icon-arrow.svg'
import locationIcon from '@/images/icon-location.svg'
import { InputPage } from './InputPage'
import Map  from './Map'


export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center bg-gray-400 w-full  font-Rubik">
     <div className="flex w-full relative"> <Image className=' h-full w-full placeholder:' src={patternDesktop} alt={''}/></div>
    
      <InputPage/>
      {/* </div> */}
      {/* <div className="w-full bg-yellow-200 h-full">klkl;k</div> */}
      <Map/>
    </main>
    
  )
}
