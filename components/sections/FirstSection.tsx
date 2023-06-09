import { useEffect, useState } from "react";
import Image from "next/image";
import PaymentModalDesktop from "../PaymentModalDesktop";
import PaymentModalMobile from "../PaymentModalMobile";
import isMobile from "is-mobile";

export default function FirstSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    // first section starts here
    <section className="section1 pt-2">
      {/* navbar starts here */}
      <nav className="py-1 border-0 relative z-30">
        <div className="px-6 md:px-6 mx-auto">
          <div className="flex justify-between items-center">
            {/* SGM logo goes here */}
            <div>
              <div className="border-0 rounded-full p-1 bg-yellow-50 select-none">
                <a href="#" className="select-none">
                  <Image
                    src="/logo.svg"
                    alt="SGM Logo"
                    width="50"
                    height="50"
                  />
                </a>
              </div>
            </div>
            {/* primary nav */}
            <div className="hidden md:block items-center space-x-12 text-gray-50 hover:cursor-pointer">
              <a href="#" className="hover:text-yellow-900">
                Home
              </a>
              <a href="#our-mission" className="hover:text-yellow-900">
                Our Mission
              </a>
              <a href="#events" className="hover:text-yellow-900">
                Events
              </a>
              <a href="#captures" className="hover:text-yellow-900">
                Captures
              </a>
              <a href="#sgm-family" className="hover:text-yellow-900">
                SGM Family
              </a>
            </div>
            {/* secondary nav */}
            <div className="hidden md:block">
              <div
                className="flex button_class drop-shadow cursor-pointer"
                onClick={handleModal}
              >
                <a>Donate</a>
                <Image
                  className="ml-3"
                  src="/donation_icon.png"
                  alt="donate logo"
                  width="20"
                  height="10"
                ></Image>
              </div>
            </div>
            {/* mobile button goes here */}
            <div className="md:hidden flex items-center text-white">
              {isMenuOpen ? (
                <div className="card flex flex-col">
                  <div className="top-2 right-2" onClick={handleMenuClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="#FCEFE0"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="card flex flex-col">
                  <div className="top-2 right-2" onClick={handleMenuClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#FCEFE0"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* mobile menu goes here */}
        {isMenuOpen && (
          <div className="absolute right-6 w-5/12 my-1 mr-4 py-2 flex border rounded-lg text-yellow-700 bg-yellow-50 md:hidden">
            <div className="flex">
              <div className="justify-items-start text-left pl-3">
                <div className="hover:text-yellow-900 transition-all hover:font-bold py-1 pl-4 pr-3">
                  <a href="#">Home</a>
                </div>
                <div className="hover:text-yellow-900 transition-all hover:font-bold py-1 pl-4 pr-3">
                  <a href="#our-mission">Our Mission</a>
                </div>
                <div className="hover:text-yellow-900 transition-all hover:font-bold py-1 pl-4 pr-3">
                  <a href="#events">Events</a>
                </div>
                <div className="hover:text-yellow-900 transition-all hover:font-bold py-1 pl-4 pr-3">
                  <a href="#captures">Captures</a>
                </div>
                <div className="hover:text-yellow-900 transition-all hover:font-bold py-1 pl-4 pr-3">
                  <a href="#sgm-family">SGM Family</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Navbar ends here */}

      {isModalOpen && <PaymentModalDesktop handleModal={handleModal} />}

      {/* remaining section starts here */}
      <div className="flex flex-col md:flex-row justify-between pb-32 md:items-end">
        <div className="pl-6 pt-8 md:pt-12 md:w-2/5">
          <div className="border_bottom mb-3">
            <h1 className="text-xl md:text-4xl font-semibold font-montserrat text-yellow-50">
              <span className="inline">Student Gyan Movement</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-montserrat text-yellow-50">
              ABV-IIITM Gwalior
            </h2>
          </div>
          <h3 className="md:text-xl font-montserrat text-yellow-50 mb-8">
            Not for me, but for the Nation
          </h3>
          {isMobileDevice ? (
            <PaymentModalMobile />
          ) : (
            <button
              className="relative button_class mt-4 md:mt-24 z-30"
              onClick={handleModal}
            >
              Donate
            </button>
          )}
        </div>
        <div className="relative md:w-3/5 flex flex-row">
          {/* <img
            src="/logo.png"
            alt="SGM Logo"
            className="absolute -top-24 md:-right-2 md:w-full md:-top-48 xl:-top-60 2xl:-top-72 left-0 bottom-0"
          /> */}
          {/* <img
            src="https://res.cloudinary.com/ddxd7kwpn/image/upload/v1674997149/sgm/children_image_e3upjg.png"
            alt="photo of children"
            className="relative mx-auto w-4/5 md:top-32 top-16"
          /> */}
        </div>
      </div>
      {/* remaining section ends here */}
    </section>
    //section ends here
  );
}
