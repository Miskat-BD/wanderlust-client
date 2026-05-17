import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1>All Destinationd</h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;