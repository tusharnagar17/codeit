import ThemeChanger from './ThemeChanger';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {
    return (
        <div className='flex justify-around items-center my-8 py-4 mx-auto md:max-w-5xl shadow-sm border-b-[0.5px]'>
            <div>
                <Image src="/codeit-logo.png" alt='code-it logo' height={100} width={150} />
            </div>
            <div className=''>
                <div className='hidden md:flex list-none justify-around items-center'>
                     <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-lg hover:text-2xl transition duration-500'><a href="#Home">Home</a></li>
                     <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#About">About</a></li>
                    <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Services">Services</a></li>
                    <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Projects">Projects</a></li>
                     <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Contact">Contact</a></li>
                     <ThemeChanger />
                </div>
                
                <div className="md:hidden flex gap-8 items-center text-3xl ml-6">
                  
                  <ThemeChanger />
                <HamburgerMenu />
                  
                </div>
                
            </div>
        </div>
    )
}

export default NavBar