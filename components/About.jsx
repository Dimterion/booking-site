export default function About({ links, stats }) {
  return (
    <section className="relative isolate my-10 overflow-hidden rounded-md bg-gray-100 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-800 to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-white to-[#776fff] opacity-20"
        />
      </div>
      <article className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">
            About
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
            Find out more about the app.
          </p>
        </section>
        <section className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <article className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-700 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </article>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-700">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-gray-700">
                  {stat.value}
                </dd>
              </article>
            ))}
          </dl>
        </section>
      </article>
    </section>
  );
}
