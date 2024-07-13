export default function ThinkIndiaInfo() {
  return (
    <>
      <div>
        <h2
          className=" font-semibold font-mono border-l-4 text-fuchsia-50 border-sky-500 antialiased non-italic tracking-wide p-4 mt-7  ml-12  text-xl md:text-3xl fade-right"
          data-aos="fade-right"
          style={{ zIndex: "0", pointerEvents: "auto" }}
        >
          <span
            data-aos="fade-right"
            className="cursor-pointer hover:text-sky-500 pointer-events-auto"
          >
            Think India
          </span>
        </h2>

        <Card />
      </div>
    </>
  );
}

const Card = () => {
  return (
    <div
      className="w-full h-auto flex flex-col md:flex-row content-evenly place-content-evenly place-items-center justify-around justify-items-center justify-self-stretch flex-nowrap fade-up  p-4 "
      data-aos="fade-up"
    >
      <div
        className="border border-blue-700 p-6 cursor-pointer transition-all duration-200 ease-in-out shadow-2xl hover:border-rose-500 m-4 h-auto w-full md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl "
        data-aos="fade-up"
      >
        <h2 className="font-semibold text-center text-white text-3xl p-4 mb-4  cursor-pointer mt-3">
          Vision
        </h2>
        <p className="text-gray-300 text-lg shadow-md font-medium leading-6 mt-2 justify-start">
          Think India is a pan-India initiative that aims to bring together the
          Country&apos;s best talent and intellectual resources to develop a
          nationalistic spirit and inspire young people to serve society. <br />
          <br />
          The initiative&apos;s vision is to create a forum for students,
          researchers, and professionals from national institutes to deliberate
          on issues of national importance, raise concerns, and offer innovative
          solutions.
          <br /> <br /> Think India also aims to instill a "Nation First"
          attitude and encourage young people to take responsibility for nation
          building.
        </p>
      </div>

      <div
        className="border border-blue-700 p-6 transition-all cursor-pointer duration-200 ease-in-out shadow-2xl hover:border-rose-500 m-4 h-auto w-full md:w-1/3 bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-easing="linear"
      >
        <h2 className="font-semibold text-center text-white text-3xl p-4 mb-4  cursor-pointer mt-3">
          Mission
        </h2>
        <p className="text-gray-300 text-lg shadow-md font-medium leading-6 mt-2 justify-start">
          We, as a pan-India organization, have been striving to bring together
          the best talents & minds of the country and infuse in them a
          nation-first attitude, to develop in them a solution-oriented thinking
          process, and to inspire young India to serve the society.
        </p>
      </div>
    </div>
  );
};
