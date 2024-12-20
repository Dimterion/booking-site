import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-2">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-800 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <section className="mx-auto min-w-56 max-w-2xl py-1 sm:py-40">
        <article className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">
            Booking App
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Check all of the available places to book.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/places"
              className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <Link
              href="/about"
              className="text-sm/6 font-semibold text-gray-800 transition-colors hover:text-gray-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
        <article className="my-8 flex justify-center text-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Add your place{" "}
            <Link href="/places/add" className="font-semibold text-blue-800">
              <span aria-hidden="true" className="absolute inset-0" />
              here <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>
      </section>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-45rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
