import DevicesIcon from "@mui/icons-material/Devices";
import WebIcon from "@mui/icons-material/Web";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import AdbIcon from "@mui/icons-material/Adb";
import DrawIcon from "@mui/icons-material/Draw";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Link from "next/link";
export default function Team() {
  return (
    <>
      <div
        className="ml-12 mt-7  p-4  border-l-4 border-sky-500 mb-4 "
        data-aos="fade-right"
      >
        <h1>
          <span className="text-white text-3xl font-semibold cursor-pointer hover:text-sky-500">
            Think India N.I.T Patna Team
          </span>
        </h1>
      </div>
      <div
        className="flex flex-col md:flex-row h-auto w-[100vw] md:w-[90vw] justify-evenly justify-items-stretch content-center gap-7 flex-wrap text-white font-3xl shadow-xl font-semibold text-2xl p-5 m-auto min-h-[50vh]"
        data-aos="fade-right"
      >
        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center items-center w-auto md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <ImportantDevicesIcon />
            </span>
            {/* Web Team */}
            <Link href="/about">Web Team</Link>
          </div>
        </div>

        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center w-auto items-center md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <SatelliteAltIcon />
            </span>
            {/* Content & Media Team */}
            <Link href="/about">Content & Media Team</Link>
          </div>
        </div>

        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center items-center w-auto md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <AdbIcon />
            </span>
            {/* Android Team */}
            <Link href="/about">Android Team</Link>
          </div>
        </div>

        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center items-center w-auto md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <DrawIcon />
            </span>
            {/* Design Team */}
            <Link href="/about">Design Team</Link>
          </div>
        </div>

        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center items-center w-auto md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <AccessibilityNewIcon />
            </span>
            {/* Public Relations Team */}
            <Link href="/about">Public Relation Team</Link>
          </div>
        </div>

        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center items-center w-auto md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <CallMissedOutgoingIcon />
            </span>
            {/* Outreach Team */}
            <Link href="/about">Outreach Team</Link>
          </div>
        </div>

        <div
          className="rounded-3xl w-full md:w-auto shadow-orange-200 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-pink-500  animate-gradient-x"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          {" "}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-3 m-1 rounded-3xl tex-center items-center w-auto md:w-[25vw] border-rose-500 hover:border-blue-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out">
            <span className="p-3 mr-2">
              <WebIcon />
            </span>
            {/* Technical Team */}
            <Link href="/about">Technical Team</Link>
          </div>
        </div>
      </div>
    </>
  );
}
