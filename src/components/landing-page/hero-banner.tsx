import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="h-[130vh] md:h-[150vh] w-full bg-gray-950 rounded-b-3xl py-8 md:py-0">
      <div className="max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center">
        <div className="w-full h-[50vh] flex flex-col justify-center items-center mt-16 p-4 md:p-0">
          <div className="w-full h-full flex flex-col justify-center items-center gap-2.5">
            <h1 className="w-full flex flex-row justify-between items-center text-xl tracking-tighter font-bold text-gray-100 md:text-4xl lg:text-5xl uppercase">
              <span className="text-indigo-500">Rendezvous</span>
              <span>Management</span>
              <span>For</span>
              <span>Everyone</span>
            </h1>
            <h3 className="text-base text-zinc-100 p-4">
              Find the right <i>rendezvous</i>, right away. Our <b>Rendezvous</b>{" "}
               management software is fit for professionals, service-based local businesses, and mid-large enterprises across multiple industries.
            </h3>
            <div className="w-fit h-fit flex flex-col md:flex-row justify-center items-center gap-4">
              <Link
                target="_blank"
                href="https://github.com/eloquent-studio/rendezvous"
                className="inline-flex items-center justify-start gap-2 text-sm py-2.5 px-9 font-bold text-black transition-all duration-200 ease-in-out bg-white rounded-full hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#1b1b1b"
                >
                  <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                </svg>
                Join Our Community
              </Link>
              <Link
                href="/register"
                className="relative inline-flex items-center justify-start py-3 pl-16 pr-24 overflow-hidden font-semibold text-white transition-all duration-200 ease-in-out border border-white rounded-full hover:px-20 bg-transparent group"
              >
                <span className="absolute bottom-0 left-0 h-full w-0 transition-all duration-500 ease-in-out bg-white group-hover:w-full" />
                <span className="absolute right-16 duration-200 ease-out group-hover:translate-x-20">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-12 -translate-x-20 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black text-sm">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="group relative m-9 flex h-[50vh] md:h-[80vh] w-full rounded-3xl px-4 md:p-0">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-950 opacity-70 transition duration-500 ease-in-out group-hover:opacity-100">
            <Image
              height={256}
              width={512}
              src="/1.jpg"
              alt="project image"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
