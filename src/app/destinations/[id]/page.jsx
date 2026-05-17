import BookingCard from '@/components/BookingCard';
import DeleteAlert from '@/components/DeleteAlert';
import EditModal from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const destinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const destination = await res.json()
    // console.log(destination, 'params');
    const { _id, destinationName, country, imageUrl, duration, price, description } = destination;
    return (
        <div className='my-20 max-w-7xl mx-auto '>
            <div className="flex justify-end items-center gap-2">
                <EditModal destination={destination} />
                <DeleteAlert destination={destination} />
            </div>
            <Image
                className='w-full h-100 object-cover'
                alt={destinationName}
                src={imageUrl}
                width={800} height={400}
            />
            <div className="flex justify-between">
                <div className="p-2">
                    <div className="flex  items-center gap-1"><LuMapPin /> <span>{country}</span></div>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <div className="text-xl font-bold">{destinationName}</div>
                            <div className="flex  items-center gap-1"><FaRegCalendar /> {duration}</div>
                        </div>

                    </div>
                    <h2 className='text-2xl font-bold mt-10'>Overview</h2>
                    <p>{description}</p>
                </div>
                <div className="border mt-5">
                    <BookingCard destination={destination} />
                </div>
            </div>
        </div>
    );
};

export default destinationDetailsPage;