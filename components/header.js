import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { fecha } from '@/utils/helpers';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <header className='sticky top-0 flex flex-col mx-auto roboto md:px-0'>
  
        <div className='mb-4 md:mb-[46px] lg:mb-[52px] '>
            <div className="flex flex-row items-center w-[100%] justify-between  bg-primary shadow ">

                <div className='flex items-center'>
                    <button
                    className=" w-[56px] h-[56px] md:w-[40px] lg:h-[70px] flex justify-center items-center outline-none focus:border-gray-400 focus:border bg-[#3e4c59]"
                    onClick={() => setNavbar(!navbar)}
                    >
                    {navbar ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 lg:w-[40px] text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                    </button>

                    <div className='text-white hidden md:flex ml-4 w-20 md:justify-between'>

                        <Link href='/'>
                            <InstagramIcon  sx={{ fontSize: 18 }}/> 
                        </Link>

                        <Link href='/'>
                            <FacebookOutlinedIcon  sx={{ fontSize: 18 }}/> 
                        </Link>

                        <Link href='/'>
                            <TwitterIcon  sx={{ fontSize: 18 }}/> 
                        </Link>
                            
                    </div>
                </div>


                <Link href='/'>
                    <div className='w-[96px] h-[36px] lg:w-[115px] lg:h-[43px] xl:w-[128px] xl:h-[48px]'>
                        <Image 
                            src='/logoblanco.png'
                            alt='logo'
                            width={128}
                            height={48}
                        />
                    </div>
                </Link>
                
                <div className='flex items-center'>

                    <div className='text-white hidden md:flex mr-4 md:justify-between'>
                        <p className='text-xs'>{fecha()}</p>
                    </div>

                    <div className=' bg-[#3e4c59] w-[56px] h-[56px] md:w-[40px] lg:h-[70px] flex justify-center items-center hover:cursor-pointer'>
                        <span className='text-white text-xl'>&#x1F50D;&#xFE0E;</span>
                    </div>

                </div>

            </div>
        </div> 

        <nav className='z-50 absolute top-[56px] lg:top-[70px] w-full '>
            <ul className= {`${navbar ? 'flex justify-between ' : 'hidden md:flex md:justify-around md:space-y-0'} text-white bg-celeste p-1.5 md:px-5 text-xs xl:text-sm `} >
                <div className={`${navbar ? 'flex flex-col md:grid md:grid-cols-2 md:gap-x-9 md:gap-y-3 ' : 'flex flex-row gap-x-4'}   uppercase`}>
                    <li>
                        <Link href="/politica">
                            Política
                        </Link>
                    </li> 
                    <li>
                        <Link href="/sociedad">
                            Sociedad
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Policiales
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Ovación
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`${!navbar ? 'hidden' : 'block'}`} >
                            Economía
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={`${!navbar ? 'hidden' : 'block'}`} >
                            Espectáculos                                    </Link>
                    </li>
                    <li>
                        <Link href="/" className={`${!navbar ? 'hidden' : 'block'}`} >
                            Series y Películas                                    </Link>
                    </li>
                    <li>
                        <Link href="/" className={`${!navbar ? 'hidden' : 'block'}`} >
                            País                                    </Link>
                    </li>
                    <li>
                        <Link href="/" className={`${!navbar ? 'hidden' : 'block'}`} >
                            Mundo                                    </Link>
                    </li>
                </div>

                <div className={`${!navbar ? 'flex flex-row gap-x-4 ' : 'flex flex-col'}`}>
                    <li>
                        <Link href="/">
                            Canal 7
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Radio Nihuil
                        </Link>
                    </li>
                    
                </div>
            </ul>
        </nav>
    
    </header>
  );
}