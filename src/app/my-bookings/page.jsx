import { BookingCancelAlert } from '@/components/BoookingCancelAlert';
import { auth } from '@/lib/auth';
import { BookOpen, TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const { token } = await auth.api.getToken({
            headers: await headers()
        })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json()
    // console.log(bookings, 'data');

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold mb-5'>My Booking page</h1>
            <div className="space-y-5">
                {
                    bookings.map(booking => <div key={booking._id}>
                        <div className="flex gap-4 p-5 border min-w-3xl mb-5">
                            <Image
                                src={booking.imageUrl}
                                alt={booking.destinationName}
                                width={200}
                                height={200}
                            />
                            <div className="">
                                <h1>{booking.destinationName}</h1>
                                <p>{new Date(booking.departureDate).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}</p>
                                <p>Booking ID: {booking._id}</p>
                                <p className='text-3xl font-bold text-cyan-500'>${booking.price}</p>
                                <BookingCancelAlert bookingId={booking._id}/>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;