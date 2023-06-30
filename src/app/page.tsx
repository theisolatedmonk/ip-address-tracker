import Image from 'next/image'


import patternDesktop from '@/images/pattern-bg-desktop.png'
import patternMobile from '@/images/pattern-bg-mobile.png'
import arrowIcon from '@/images/icon-arrow.svg'
import locationIcon from '@/images/icon-location.svg'
import { InputPage } from './InputPage'
import Map  from './Map'
import App from 'next/app'
import LeafletMap from './Map'


export default function Home() {


  return (
    <main className="flex  min-h-screen flex-col items-center bg-gray-400 w-full  font-Rubik">
     <div className="flex w-full relative"> 
     <Image className='sm:flex hidden h-full w-full placeholder:' src={patternDesktop} alt={''}/>
     <Image className=' h-full w-full sm:hidden' src={patternMobile} alt={''}/>
     </div>
    
      <InputPage/>
   <div className="h-full w-full z-10 ">   
      <LeafletMap  /></div>
    </main>
    
  )
}
