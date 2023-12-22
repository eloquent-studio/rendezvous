import Link from "next/link";


const HeroBanner = () => {
  return (
    <div className="h-80vw w-full">
      <section className="py-8 bg-slate-600 md:py-0">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
          <h1 className="text-3xl font-bold tracking-tight leading-none text-slate-100 md:text-4xl lg:text-5xl">
            みんなのためのプラットフォーム
          </h1>
          <p className="text-sm font-bold text-zinc-200 lg:text-lg pt-4 sm:px-16 lg:px-48">
            本当は、ユーザのみなさんからヒントを得て作成された書くますプラットフォームです。オープンソース、フリー、ブログの書くますを行うことができます。
          </p>
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