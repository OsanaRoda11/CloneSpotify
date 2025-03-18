import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react"
import img11 from '../img/othername.jpeg'


function Footer(){
    return(
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
             <span>5:03</span>
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
    )
}
export default Footer