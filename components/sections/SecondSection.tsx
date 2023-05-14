import Image from 'next/image';
import one from '../../public/graduate-hat.png';
import two from '../../public/eco-light.png';
import three from '../../public/recommendation.png';
import four from '../../public/first_feature.png';
import five from '../../public/second_feature.png';
import six from '../../public/third_feature.png';
export default function SecondSection() {
    return (
        <>
            <section className="" id="our-mission">
                <h2 className="text-lg md:text-2xl font-semibold font-montserrat text-black">
                    Our Mission
                </h2>
                <div className="flex justify-center items-center">
                    <div className="hidden md:contents">
                        <div className="w-full md:w-7/12 py-6 ">
                            <div className=" missions text-black flex md:flex-row flex-col justify-between items-center">
                                <div className="rounded-2xl p-10 font-semibold shadow-xl basic-right md:h-56 sm:h-48 h-48 md:w-full w-3/5 m-5 bg-gray-200 ml-10 flex flex-col justify-center items-center">
                                    <Image
                                        className="md:w-2/3 sm:w-1/4"
                                        src={one}
                                        alt="Overall Education"
                                        height={100}
                                    />

                                    <p className="text-center md:mt-5 mt-2">
                                        Education is a basic right
                                    </p>
                                </div>
                                <div className="rounded-2xl p-10 font-semibold shadow-xl overall-development md:h-56 sm:h-48 h-40 md:w-full w-3/5 m-5 bg-gray-200 ml-10 flex flex-col justify-center items-center">
                                    <Image
                                        className="md:w-2/3 sm:w-1/4"
                                        src={two}
                                        alt="Overall Education"
                                        height={90}
                                    />
                                    <p className="text-center mt-5">
                                        Focus on overall development
                                    </p>
                                </div>
                                <div className="rounded-2xl p-10 font-semibold shadow-xl quality-education md:h-56 sm:h-48 h-40 md:w-full w-3/5 m-5 bg-gray-200 ml-10 flex flex-col justify-center items-center">
                                    <Image
                                        className="md:w-2/3 sm:w-1/4"
                                        src={three}
                                        alt="Overall Education"
                                        height={95}
                                    />

                                    <p className="text-center mt-5">
                                        Free quality education for all
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contents md:hidden">
                        <div>
                            <div className="text-brown3 m-5">
							Inspired by Right to Education Act (2002), introduced by former Prime Minister Late Atal Bihari Vajpayee, also the founder of our institute ABV-IIITM Gwalior
                            </div>
                            <div className="flex flex-row ml-5 mb-5">
                                <Image src={four} alt="four" width={95} />
                                <div className="ml-2 mr-5 flex items-center text-brown3">
                                    <p>Education is the basic right</p>
                                </div>
                            </div>
                            <div className="flex flex-row  ml-5 mb-5">
                                <Image src={five} alt="four" width={120} />
                                <div className="ml-2 mr-5 flex items-center text-brown3">
                                    <p>
                                        Focus on overall development of children
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row ml-5 mb-5">
                                <Image src={six} alt="four" width={150} />
                                <div className="ml-2 mr-5 flex items-center text-brown3">
                                    <p>
                                        Access to education irrespective of
                                        financial status
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
