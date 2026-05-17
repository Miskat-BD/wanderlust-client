'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log(user);
    const handleSignOut = async()=>{
        await authClient.signOut();
    }
    return (
        <div>
            <nav className='flex justify-between items-center p-5'>
                <ul className='flex justify-between items-center gap-2'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destinations'}>Destinations</Link></li>
                    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                    <li><Link href={'/admin'}>Admin</Link></li>
                    <li><Link href={'/add-destination'}>Add Destination</Link></li>
                </ul>
                <div className="">
                    <Image src={'/assets/Wanderlast.png'} alt='logo' width={150} height={150} />
                </div>
                <ul className='flex justify-between items-center  gap-2'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    {user ?
                        <div className=" flex gap-2 items-center">
                            <li>
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user.image} />
                                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                                </Avatar>
                            </li>
                            <li>
                                <Button onClick={handleSignOut} variant='danger' className={'rounded-none'}>Logout</Button>
                            </li>
                        </div> :
                        <div className="flex items-center gap-1">
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/signup'}>Sign Up</Link></li>
                        </div>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;