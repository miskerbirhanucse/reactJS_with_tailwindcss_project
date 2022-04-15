import React from "react";

function Cta() {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading  */}

        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>

        {/* Button */}
        <div>
          <a
            className="p-3 pt-2 px-6 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-300"
            href="/#"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
