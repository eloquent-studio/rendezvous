import Image from "next/image"
import Link from "next/link"

const aboutItems = [
  {
  id: 1,
  title: "Stick to your budget",
  info: "Find the right service for every price point. No hourly rates, just project-based pricing",
  },
  {
    id: 2,
    title: "Stick to your budget",
    info: "Find the right service for every price point. No hourly rates, just project-based pricing",
  },
  {
    id: 3,
    title: "Stick to your budget",
    info: "Find the right service for every price point. No hourly rates, just project-based pricing",
  },
  {
    id: 4,
    title: "Stick to your budget",
    info: "Find the right service for every price point. No hourly rates, just project-based pricing",
  }
]

const AboutUs = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-2 lg:p-0 my-16">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        <div>
          <h1 className="text-xl font-bold pb-4">The best part? Everything!</h1>
          {aboutItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-center w-full p-4 space-x-4 rtl:space-x-reverse text-gray-900 bg-white divide-x rtl:divide-x-reverse divide-gray-200">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                  <div className="ps-4 text-sm font-medium">{item.title}</div>
              </div>
              <span className="text-gray-700 font-medium text-xs">{item.info}</span>
            </div>
            ))}
        </div>
        <div className="relative w-full h-96 ">
          <Image
          src="/1.jpg"
          fill
          alt=""
          className="absolute"
          />
        </div>
      </section>
      <div className="w-full my-8 bg-blue-950">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="hidden md:flex w-1/3 h-64 relative">
            <Image fill src="/1.jpg" alt="" className="absolute self-start"/>
          </div>
          <div className="w-full md:w-2/3 p-8 md:p-2 text-white flex flex-row items-center justify-evenly">
            <div>
              <p className="font-extrabold text-3xl md:text-5xl lg:text-4xl">
              何か特にお考えですか。
              </p>
              <p className="font-bold text-xl md:text-3xl lg:text-3xl">
              ここに書いてください。
              </p>
            </div>
            <Link
              href="/register"
              className="border border-gray-200 px-16 py-1 hover:bg-gray-200 rounded-full mt-4 transition-all ease-in duration-500 text-white hover:text-blue-950 text-sm font-semibold">Join</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs