import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="h-80vw w-full">
      <section className="py-8 bg-gray-950 md:py-0 rounded-ee-3xl rounded-es-3xl">
        <div className="px-4 mx-auto max-w-screen-lg text-center py-32">
          <div className="w-full h-full flex lg:flex-row justify-between items-center gap-8">
            <div className="text-start font-semibold">
              <h1 className="text-xl tracking-tight leading-none text-gray-100 md:text-2xl lg:text-3xl">
                Customer and Business 
                <span className="text-lime-400"> Rendezvous </span>
                Management.
              </h1>
              <p className="text-xs text-gray-400 pt-4">
                本当は、ユーザのみなさんからヒントを得て作成された書くますプラットフォームです。オープンソース、フリー、ブログの書くますを行うことができます。
              </p>
              <Link href="/register">
                <button className="border border-gray-200 px-8 py-2 hover:bg-gray-200  rounded-full mt-4 transition-all ease-in duration-500 text-gray-200 hover:text-gray-950">
                  <span className="text-xs w-full flex flex-row items-center justify-between gap-1.5">
                    Get started
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            <div className="hidden lg:flex flex-col justify-center items-center h-64 w-full relative">
              <Image
              alt=""
              src="/1.jpg"
              fill
              className="absolute object-cover"
              />
            </div>
          </div>
          
          {/* <div className="my-4">
          <form className="flex items-center justify-center w-full ">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
              type="search"
              className="block w-full self-center p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Search..."
              required/>
            </div>
          </form>
        </div>
        <div className="">
          <span className="text-white font-lg">
            Services:{" "}
          </span>
          <Link href="/category">
            <button
            type="button"
            className="text-white border border-gray-100 focus:ring-3 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-sm px-4 py-1 text-center mr-3 md:mr-3">
            aaaaa
            </button>
          </Link>
          <Link href="/category">
            <button
            type="button"
            className="text-white border border-gray-100 focus:ring-3 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-sm px-4 py-1 text-center mr-3 md:mr-3">
            aaaaa
            </button>
          </Link> 
          <Link href="/category">
            <button
            type="button"
            className="text-white border border-gray-100 focus:ring-3 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-sm px-4 py-1 text-center mr-3 md:mr-3">
            aaaaa
            </button>
          </Link> 
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;