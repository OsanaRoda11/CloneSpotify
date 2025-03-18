import { House, Library, Search } from "lucide-react"


function NavBar(){
    return(
        <div>
            <aside className='w-72 bg-zinc-950 p-6 h-full'>
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
        </div>
    )
}
export default NavBar