import Image from 'next/image';
import image from '../../public/art_competition.jpeg';

export default function FifthSection() {
    return (
        <>
            <h2 className="px-6 text-lg md:text-2xl font-semibold font-montserrat text-black pb-8 mt-8">
                SGM Family
            </h2>
            <section
                className="flex justify-center items-center text-left"
                id="sgm-family"
            >
                <div className="md:grid md:grid-cols-2 md:grid-rows-1 text-black w-2/3 sm:flex sm:flex-col md:m-0 ">
                    <div
                        className="md:mr-10 text-lg text-brown3 mb-5 md:mb-0 "
                        id="left-info"
                    >
                        SGM IIITM Gwalior is mentored by the Director of our
                        esteemed institute Prof. SN Singh and Faculty
                        Coordinator, Prof. Joydeep Dhar (DOSA ABV-IIITM). The
                        student team has two departments namely Teaching and
                        Management.
                    </div>
                    <div className="hidden md:contents" id="right-image-parent">
                        <Image
                            className="md:ml-20 m-10 md:w-4/5 w-full ml-0 mt-0"
                            id="right-image"
                            src={image}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
