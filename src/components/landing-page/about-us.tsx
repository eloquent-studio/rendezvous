import Image from "next/image";
import Link from "next/link";

const aboutItems = [
  {
    id: 1,
    title: "Rendezvous Anytime, Anywhere",
    info: "Seamlessly manage your meetings with our all-encompassing software, accessible anytime, anywhere.",
  },
  {
    id: 2,
    title: "Streamline Your Business",
    info: "Transform your business operations with a single click, and customize your experience instantly.",
  },
  {
    id: 3,
    title: "Join the Open-Source Revolution",
    info: "Embrace our free, open-source, and customizable software—become a part of our innovative development journey.",
  },
  {
    id: 4,
    title: "Explore and Locate",
    info: "Effortlessly explore and locate your ideal meeting points with ease.",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-2 lg:p-0 my-16">
      <section className="w-full my-8 bg-blue-950 ps-8 md:ps-0 py-8 text-white">
        <div className="w-full flex flex-row justify-start md:justify-around items-center">
          <div className="w-fit hidden md:flex flex-row items-center justify-center gap-4">
            <h1 className="text-8xl font-semibold uppercase">r.</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="128px"
              viewBox="0 -960 960 960"
              width="128px"
              fill="#1e3a8a"
            >
              <path d="M480-40q-23 0-46-3t-46-8Q300 14 194.5-4.5T33-117q-45-74-29-159t77-143v-3Q19-479 4-562.5T32-720q37-63 102-95.5T271-838q32-57 87.5-89.5T480-960q66 0 121.5 32.5T689-838q72-10 137 22.5T928-720q43 74 28 157.5T879-422v3q61 58 77 143t-29 159Q871-23 765.5-4.5T572-51q-23 5-46 8t-46 3ZM288-90q-32-18-61-41.5T174-183q-24-28-42.5-60.5T101-311q-20 36-20 76.5t21 75.5q29 48 81.5 68.5T288-90Zm384 0q52 20 104.5-.5T858-159q21-35 21-75.5T859-311q-12 35-30.5 67.5T786-183q-24 28-52.5 51.5T672-90Zm-192-30q134 0 227-93t93-227q0-29-4.5-55.5T782-547q-29 20-64 31t-73 11q-102 0-173.5-71.5T400-750q-104 26-172 112t-68 198q0 134 93 227t227 93ZM360-350q-21 0-35.5-14.5T310-400q0-21 14.5-35.5T360-450q21 0 35.5 14.5T410-400q0 21-14.5 35.5T360-350Zm240 0q-21 0-35.5-14.5T550-400q0-21 14.5-35.5T600-450q21 0 35.5 14.5T650-400q0 21-14.5 35.5T600-350ZM94-544q9-33 23-63.5t33-57.5q19-27 41.5-51t48.5-44q-43 0-79.5 21T102-681q-20 32-22 67t14 70Zm772 0q16-35 14-70t-22-67q-22-37-58.5-58T720-760q26 20 48.5 44t41.5 51q19 27 33 57.5t23 63.5Zm-221-41q29 0 54-9t46-25q-21-32-50-57.5T632-721q-34-19-72-29t-80-10v10q0 69 48 117t117 48Zm-54-239q-20-26-49-41t-62-15q-33 0-62 15t-49 41q26-8 54-12t57-4q29 0 57 4t54 12ZM150-665Zm660 0Zm-330-85Zm0-90ZM174-183Zm612 0Z" />
            </svg>
          </div>
          <div className="w-fit flex flex-col items-start justify-center gap-2">
            <p className="font-extrabold text-3xl md:text-5xl lg:text-4xl uppercase">
              Rendezvouses
            </p>
            <p className="font-light text-xl md:text-3xl lg:text-3xl italic">
              right here for you
            </p>
            <Link
              href="/register"
              className="py-1.5 px-8 text-xs focus:outline-none rounded border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-blue-800 text-blue-50 border-blue-900  hover:text-white hover:bg-blue-700"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>
      <section className="w-fit grid grid-cols-1 md:grid-cols-2 my-16 p-4 md:p-0">
        <div>
          <h1 className="text-xl font-bold pb-4">The best part? Everything!</h1>
          {aboutItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-center w-full p-4 space-x-4 rtl:space-x-reverse text-gray-900 bg-white divide-x rtl:divide-x-reverse divide-gray-200">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="ps-4 text-sm font-bold">{item.title}</div>
              </div>
              <span className="text-gray-500 font-semibold text-xs">
                {item.info}
              </span>
            </div>
          ))}
        </div>
        <div className="relative w-full h-96">
          <Image src="/appointment.svg" fill alt="" className="absolute" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
