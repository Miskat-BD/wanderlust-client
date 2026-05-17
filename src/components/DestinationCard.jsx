import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { MdArrowOutward } from 'react-icons/md';

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, imageUrl, duration, price } = destination;
    return (
        <div className='border rounded-2xl'>
            <Image
            className='rounded-t-2xl w-full h-55 object-cover'
                alt={destinationName}
                src={imageUrl}
                width={400} height={400}
            />
            <div className="p-2">
                <div className="flex  items-center gap-1"><LuMapPin /> <span>{country}</span></div>
                <div className="flex justify-between items-center">
                    <div className="">
                        <div className="text-xl font-bold">{destinationName}</div>
                        <div className="flex  items-center gap-1"><FaRegCalendar /> {duration}</div>
                    </div>
                    <div className="">
                        <h3 className=' text-2xl font-bold'>${price}</h3>
                    </div>
                </div>
            </div>
            <Link href={`/destinations/${_id}`}><Button variant='ghost' className="text-cyan-500 mt-1 ml-2">Book Now  <MdArrowOutward /></Button></Link>
        </div>
    );
};

export default DestinationCard;