import React from 'react';
import Image from 'next/image';

function Faculty(props) {
    return (
        <div className="text-black relative mr-5 mb-20">
            <Image
                className={`md:mr-10 ${props.classInfo} md:w-full sm:w-1/5`}
                src={props.address}
                alt={props.name}
                height={250}
                width={250}
            />
            <div className="md:bg-gray-200 p-4 flex flex-col items-center justify-center md:w-6/7 -bottom-10 right-0  md:absolute">
                <span className="font-bold md:text-sm text-brown3 text-xl">
                    {props.name}
                </span>
                <span className="md:text-sm text-brown3 text-xl">
                    {props.info1}
                </span>
                <span className="md:text-sm text-brown3 text-xl">
                    {props.info2}
                </span>
            </div>
        </div>
    );
}

export default Faculty;
