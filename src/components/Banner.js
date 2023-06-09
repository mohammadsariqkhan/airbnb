import React from 'react';
import Image from "next/image";

function Banner(props) {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image className="object-cover" src='https://links.papareact.com/0fm' fill alt="banner"/>
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="bg-white text-purple-500 px-10 py-4 rounded-full shadow-md my-3 font-bold hover:shadow-xl active:scale-x-90 transition duration-150">I'm flexible</button>

            </div>
        </div>
    );
}

export default Banner;