import Link from "next/link";

const Footer = () => {
  return (
      <footer className="max-w-screen-lg mx-auto">
        <div className="w-full md:px-8 p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            Logo
            <ul className="flex flex-wrap items-center mb-6 text-sm font-semibold text-gray-800 sm:mb-0">
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Rendesvous/rendezvous" target="_blank" rel='noreferrer' className="hover:underline">
                  Source
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              本当™
            </Link>
            All rights reversed.
          </span>
        </div>
      </footer>
  );
};

export default Footer;