import Image from 'next/image';
import jdSir from '../../public/jdsir_image.png';
import manojSir from '../../public/1669281255_dr manoj Dash.jpg';
import directorSir from '../../public/directors_image.png';
import pinkuSir from '../../public/1668597418_DSC_1271.jpeg';
import Faculty from './Faculty';
import image from '../../public/art_competition.jpeg';

export default function SixthSection() {
    return (
        <section id="team-sgm">
            <div className="flex items-center justify-center">
                {/* <div className="flex flex-col">
        <div className="w-11/12 mx-auto border-2 border-slate-50 drop-shadow-md">
          <img
            src="https://res.cloudinary.com/ddxd7kwpn/image/upload/v1674997168/sgm/team_sgm_u6cubb.jpg"
            alt="SGM Team Photo"
            className="w-full mid:w-5/6 mid:h-60"
          />
        </div>
        <div className="py-2 w-11/12 text-center text-brown2 mx-auto font-montserrat font-semibold text-xl">
          Team SGM
		  </div>
		</div> */}
                {/* <div className="flex md:flex-row sm:flex-col items-center justify-center mt-20 w-2/3 mb-10"> */}
                <div className="grid sm:grid-cols-1 md:grid-cols-4">
                    <div className="contents md:hidden">
                        <div>
                            <Faculty
                                name="Prof.S N Singh"
                                address={directorSir}
                                info1="Director"
                                info2="ABV-IIITM, Gwalior"
                                classInfo="director"
                            />
                        </div>
                        <div className="-mt-20">
                            <Faculty
                                name="Prof.Joydeep Dhar"
                                address={jdSir}
                                info1="Dean Of Students' Affair"
                                info2="ABV-IIITM, Gwalior"
                                classInfo="jdSir"
                            />
                        </div>
                    </div>

                    <div className="md:contents hidden">
                        <Faculty
                            name="Prof.S N Singh"
                            address={directorSir}
                            info1="Director ABV-IIITM"
                            classInfo="director"
                        />
                        <Faculty
                            name="Prof.Joydeep Dhar"
                            address={jdSir}
                            info1="DoSA ABV-IIITM"
                            classInfo="jdSir"
                        />
                        <Faculty
                            name="Dr.Pinku Ranjan"
                            address={directorSir}
                            info1="Welfare SAC ABV-IIITM"
                            classInfo="pinkuSir"
                        />
                        <Faculty
                            name="Dr.Manoj Kumar Dash"
                            address={jdSir}
                            info1="Welfare SAC ABV-IIITM"
                            classInfo="pinkuSir"
                        />
                    </div>
                </div>
            </div>

            <div className="md:hidden sm:contents">
                <div className="text-center flex flex-col items-center justify-center">
                    <Image
                        className=" m-10 sm:w-4/5 pl-5 pr-5 -mt-16"
                        src={image}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />

                    <div className=" text-brown2 text-2xl -mt-5">Team SGM</div>
                </div>
            </div>
        </section>
    );
}
