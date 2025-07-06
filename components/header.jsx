import {SignedIn, SignedOut ,SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ArrowLeft, CarFront,  Heart,  Layout } from 'lucide-react'
import { Button } from './ui/button'
import { checkUser } from '@/lib/checkUser'


const Header = async ({isAdminPage=false}) => {
    const user= await checkUser();
    const isAdmin = user?.role==='ADMIN'
  return (
    <header className='fixed top-0 bg-white/80 w-full backdrop-blur-md z-50 border-b'>
        <nav className='mx-auto px-4 py-4 flex item-center justify-between'>
            <Link href={isAdminPage? '/admin' :'/'} className='flex'>
            <Image src={'/logo.png'} alt='Vehiql logo' width={150} height={100} className='h-12 w-auto object-contain'/>
            {isAdminPage&& (
                <span className='text-xs font-extralight'>admin</span>
            )}
            </Link>
        
            <div className='flex gap-2 justify-center items-center' >
                {isAdminPage ? (<>
                <Link href={'/'}>
                    <Button variant={'outline'}  >
                        <ArrowLeft size={18}/> <span >Back To App</span></Button></Link>
                </>) : (<SignedIn>
                    <Link href={'/saved-cars'}>
                    <Button >
                        <Heart size={18}/> <span className='hidden md:inline'>Saved Cars</span></Button></Link>


                    {!isAdmin ? (
                        <Link href={'/reservations'}>
                    <Button variant={'outline'}>
                        <CarFront size={18}/> <span className='hidden md:inline'>My Reservations</span></Button></Link>
                    ):(

                    <Link href={'/admin'}>
                    <Button variant={'outline'}>
                        <Layout size={18}/> <span className='hidden md:inline'>Admin Portal</span></Button>
                        </Link>
                    )}
                </SignedIn>)}


                <SignedOut>
                    <SignInButton forceRedirectUrl='/'>
                        <Button>Login</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton
                    appearance={{
                        elements:{
                            avatarBox : 'w-10 h-10'
                        }
                    }}/>
                </SignedIn>
            </div>
        </nav>
    </header>
  )
}

export default Header
