import {ChevronRight, ChevronLeft, Play } from 'lucide-react'
import img1 from './img/Hino do Céu.jpeg'
import img2 from './img/This Is Our God.jpeg'
import img3 from './img/awake.jpeg'
import img4 from './img/cornerstone.jpeg'
import img5 from './img/empires.png'
import img6 from './img/graves into gardens.jpeg'
import img7 from './img/hallelujah here below.jpeg'
import img8 from './img/here as in heaven.jpeg'
import img9 from './img/hllsongWorship.webp'
import img10 from './img/living hope.jpeg'
import img11 from './img/othername.jpeg'
import img12 from './img/transferir.webp'
import img13 from './img/unnamed.jpg'
import img14 from './img/Elevation-Worship-Do-It-Agai-scaled.webp'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='h-full flex flex-col'>
      <div className='flex flex-1'>
        <NavBar/>
        <main className='flex-1 p-6 '>
          <div className='flex gap-2'>
            <button className=' rounded-full bg-black opacity-70 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black opacity-70 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='text-3xl mt-10 font-semibold'>Good Afternoon</h1>

          <div className='grid grid-cols-3 flex gap-3 mt-4'>
            <a className='bg-white/10 group rounded flex items-center gap-4  hoverflow-hidden hover:bg-white/15 transition-color'>
              <img src={img6} alt="" className='w-24 h-20 object-cover'/>
              <strong >Graves into gardens</strong>
              <button className=' bg-green-400 rounded-full p-4 ml-auto mr-4 flex opacity-0 group-hover:opacity-100'>
                <Play/> 
              </button>
            </a>
            <a className='group bg-white/10 rounded flex items-center gap-4 hover:bg-white/15 hoverflow-hidden'>
              <img src={img7} alt="" className='w-24 h-20  object-cover'/>
              <strong >Hallelujah here below</strong>
              <button className=' bg-green-400 rounded-full p-4 ml-auto mr-4 flex opacity-0 group-hover:opacity-100'>
                <Play/> 
              </button>
            </a>
            <a className='group bg-white/10 rounded flex items-center gap-4 hover:bg-white/15 hoverflow-hidden'>
              <img src={img8} alt="" className='w-24 h-20  object-cover'/>
              <strong >Here as in heaven</strong>
              <button className=' bg-green-400 rounded-full p-4 ml-auto mr-4 flex opacity-0 group-hover:opacity-100'>
                <Play/> 
              </button>
            </a>
            <a className='group bg-white/10 rounded flex items-center gap-4 hover:bg-white/15 hoverflow-hidden'>
              <img src={img4} alt="" className='w-24 h-20  object-cover'/>
              <strong >Cornerstone</strong>
              <button className=' bg-green-400 rounded-full p-4 ml-auto mr-4 flex opacity-0 group-hover:opacity-100'>
                <Play/> 
              </button>
            </a>
            <a className='group bg-white/10 rounded flex items-center gap-4 hover:bg-white/15 hoverflow-hidden'>
              <img src={img1} alt="" className='w-24 h-20  object-cover'/>
              <strong >Hino do Céu</strong>
              <button className=' bg-green-400 rounded-full p-4 ml-auto mr-4 flex opacity-0 group-hover:opacity-100'>
                <Play/> 
              </button>
            </a>
            <a className='group bg-white/10 rounded flex items-center gap-4 hover:bg-white/15 hoverflow-hidden'>
              <img src={img2} alt="" className='w-24 h-20  object-cover'/>
              <strong >This Is Our God</strong>
              <button className=' bg-green-400 rounded-full p-4 ml-auto mr-4 flex opacity-0 group-hover:opacity-100'>
                <Play/> 
              </button>
            </a>
          </div>
          
          <h2 className='font-semibold text-2xl mt-10'>Made for Osana Roda Manuel</h2>

          <div className='grid grid-cols-6 flex gap-4 mt-4'>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img10} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>This Is Amazing Grace</strong>
              <span className='text-sm text-zinc-400'>Canção de Jeremy Riddle e Phill Whickham ‧ 2015</span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img13} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Love Of God</strong>
              <span className='text-sm text-zinc-400'>Canção de Phill Whickham ‧ 2024
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img9} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Jesus I Need You</strong>
              <span className='text-sm text-zinc-400'>Canção de Hillsong Worship ‧ 2015</span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img12} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Psalm 23</strong>
              <span className='text-sm text-zinc-400'>Canção de Phill Whickham ‧ 2023
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img14} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Do It Again</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2017
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img3} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Been So Good</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2023
              </span>
            </a>
            
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img5} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Do It Again</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2017
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img11} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Been So Good</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2023
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img14} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Do It Again</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2017
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img3} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Been So Good</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2023
              </span>
            </a><a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img14} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Do It Again</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2017
              </span>
            </a>
            <a href='' className='p-3 bg-white/3 flex flex-col gap-2'>
              <img src={img3} alt="" className='h-40 w-40 object-cover' />
              <strong className='font-semibold'>Been So Good</strong>
              <span className='text-sm text-zinc-400'>Canção de Elevation Worship ‧ 2023
              </span>
            </a>
          </div>
          
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default App
