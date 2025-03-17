import {Search, House , Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2  } from 'lucide-react'
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

function App() {

  return (
    <div className='h-full flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className=' flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500  rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500  rounded-full'></div>
            <div className='w-3 h-3 bg-green-500  rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-4'>
            <a href="" className='flex gap-3 text-gray-100 text-sm  '>
              <House></House>
              Home
            </a>
            <a href="" className='flex gap-3 text-gray-100 text-sm '>
              <Search></Search>
              Search
            </a>
            <a href="" className='flex gap-3 text-gray-100 text-sm  '>
              <Library/>
              Your Library
            </a>
          </nav>
          <nav className='flex flex-col gap-3 mt-6 border-t border-gray-800 pt-6'>
            <a href="" className='text-sm text-gray-400 hover:text-gray-100'>Hot Hats Brasil</a>
            <a href="" className='text-sm text-gray-400 hover:text-gray-100'>Aniver Funk</a>
            <a href="" className='text-sm text-gray-400 hover:text-gray-100'>Packages Are Funding</a>
            <a href="" className='text-sm text-gray-400 hover:text-gray-100'>My Playlist #3</a>
            <a href="" className='text-sm text-gray-400 hover:text-gray-100'>Top Brasil</a>
          </nav>
        </aside>
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
      <footer className='fixed bottom-0 w-full bg-zinc-800 p-6 flex items-center justify-between'>
           <div className='flex gap-x-4'>
            <img src={img11} alt="" className='h-12 w-12 object-cover' />
              <div className='flex flex-col gap-1'>
                <strong className='font-normal'>Other Name</strong>
                <span className='text-xs text-zinc-400'>Hillsong United</span>
              </div>
           </div>
           
           <div className='flex flex-col'>
              <div className='flex justify-center items-center gap-5'>
                <Shuffle size={20} className='hover:cursor-pointer hover:text-green-600'/>
                <SkipBack size={20} className='hover:cursor-pointer hover:text-green-600'/>
                <button className='bg-white p-2 text-black rounded-full hover:bg-green-600'>
                  <Play/>
                </button>
                <SkipForward size={20} className='hover:cursor-pointer hover:text-green-600'/>
                <Repeat size={20} className='hover:cursor-pointer hover:text-green-600'/>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <span>0:45</span>
                <div className='h-1 w-92 rounded-full bg-zinc-600'>
                  <div className='h-1 w-32 rounded-full bg-green-700'></div>
                </div>
                <span>5.03</span>
              </div>
           </div>
           <div className='flex items-center gap-4'>
              <Mic2 size={20}/>
              <LayoutList size={20}/>
              <Laptop2 size={20}/>
              <div className='flex items-center gap-2'>
              <Volume size={20}/>
              <div className='h-1 w-32 rounded-full bg-zinc-600'>
                  <div className='h-1 w-24 rounded-full bg-white'></div>
                </div>
              </div>
              <Maximize2 size={20}/>
           </div>
      </footer>
    </div>
  )
}

export default App
