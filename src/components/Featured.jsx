import { Button } from '@heroui/react';
import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const destinations = await res.json();
    // console.log(data, 'fetured');
    return (
        <div className='my-10 max-w-7xl mx-auto'>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className='text-2xl font-bold'>Featured destinations</h1>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur doloribus temporibus ipsum debitis quod?</p>
                </div>
                <Link href={'/destinations'}><Button variant='outline' className={'text-cyan-500 rounded-none'}>All Destination</Button></Link>

            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default Featured;