"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from '@heroui/react';
import React, { useState } from 'react';
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
    const { _id, destinationName, country, imageUrl, duration, price, description } = destination;
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log(user);
    const [departureDate, setDepartureData] = useState(null);
    // console.log(new Date(departureDate));
    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }
        const {data: tokenData} = await authClient.token();
        console.log(tokenData);

        // console.log(bookingData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        // console.log(data);
        toast.success("You Booked Successfully")
    }
    return (
        <Card className='mt-10'>
            <h1 className='text-sm text-muted'>Starting From</h1>
            <p className='text-cyan-500 text-2xl font-bold'>${price}</p>
            <p className='text-sm text-muted'>per person</p>

            <DateField onChange={setDepartureData} className="w-[256px]" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className={'bg-cyan-500 w-full'}>Book Now</Button>
        </Card>
    );
};

export default BookingCard;