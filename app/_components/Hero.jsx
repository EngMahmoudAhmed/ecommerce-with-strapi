import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-0">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl capitalize">
            All your digital Product
            <strong className="font-extrabold text-teal-700 pt-4 sm:block">
              is one click away
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed capitalize">
            start exploring state of the art assets now !
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full bg-gray-200 rounded px-12 py-3 text-sm font-medium text-teal-600 shadow transition hover:text-teal-600/75 focus:outline-none focus:ring active:text-teal-400 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
