import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t w-full text-xs">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-row justify-between items-center p-4">
          <div>
            <h2 className="mb-6 font-bold text-gray-900 uppercase">Company</h2>
            <ul className="text-gray-500 font-semibold">
              <li className="mb-4">
                <Link href="#" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Brand Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold text-gray-900 uppercase">
              Help center
            </h2>
            <ul className="text-gray-500 font-semibold">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold text-gray-900 uppercase">Legal</h2>
            <ul className="text-gray-500 font-semibold">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col justify-start">
            <h2 className="mb-6 font-bold text-gray-900 uppercase">Legal</h2>
            <ul className="text-gray-500 font-semibold">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-4 flex items-center justify-center">
          <span className="text-gray-500 text-center">
            ©{new Date().getFullYear()} <Link href="/">Rendezvous™</Link>. All
            Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
