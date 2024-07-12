import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-slate-950 text-sm w-full mt-[10vh]"
      style={{ zIndex: "0" }}
    >
      <div className="mb-10 w-11/12 grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto items-start justify-items-center">
        <div  className="mt-10 w-full order-1">
          {/* <img
            src={ThinkIndia}
            alt="logo"
            className="h-14 mb-2 w-auto rounded-full"
            height={55}
            width={150}
          /> */}
          <p className="max-w-xs py-3 text-base text-white">
            Think India <br /> NIT Patna
          </p>
        </div>

        <div  className="mt-10 w-full order-2">
          <div className="flex items-center justify-start">
            <h1 className="font-extrabold text-2xl text-blue-700 mr-3">|</h1>
            <h1 className="text-lg font-semibold text-white">Useful Links</h1>
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-base text-gray-400">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="#ThinkIndia" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#Updates" className="hover:text-white">
                Updates
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div  className="mt-10 w-full order-3">
          <div className="flex items-center justify-start">
            <h1 className="font-extrabold text-2xl text-blue-700 mr-3">|</h1>
            <h1 className="text-lg font-semibold text-white">Address</h1>
          </div>
          <p className="mt-4 text-base text-gray-400">
            NIT Patna, Ashok Rajpath,
            <br />
            Patna, Bihar 800005
            <br />
            India
            <br />
            {/* Phone : 70155590** <br /> */}
            Email : aashishs.ug23.cs@nitp.ac.in
            <br />
            LinkedIn :{" "}
            <a
              href="https://www.linkedin.com/in/aashish-kumar-singh-7110b02a9/"
              className=" no-underline text-cyan-600 hover:underline-offset-2 hover:underline"
            >
              Aashish Kumar Singh
            </a>
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto bg-gray-800 h-px"></div>
      <div className="py-7 text-gray-500 font-medium text-sm gap-4 flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto">
        <p className="text-gray-400">
          Designed & Developed by{" "}
          <a
            style={{ textDecoration: "none" }}
            className="font-medium text-blue-500"
            href="https://www.linkedin.com/in/aashish-kumar-singh-7110b02a9/"
            target="_blank"
          >
            <span className="text-sky-500">Aashish Kumar Singh</span>
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
