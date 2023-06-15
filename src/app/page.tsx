import Image from 'next/image'


import patternDesktop from '@/images/pattern-bg-desktop.png'
import patternMobile from '@/images/pattern-bg-mobile.png'
import arrowIcon from '@/images/icon-arrow.svg'
import locationIcon from '@/images/icon-location.svg'
import { InputPage } from './InputPage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-400 ">
      <Image className='relative' src={patternDesktop} alt={''}/>

      <InputPage/>
    <div className="w-full bg-yellow-200 h-full">klkl;k</div>
    </main>
  )
}
