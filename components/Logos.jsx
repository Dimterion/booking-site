import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function Logos() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-center text-xl font-semibold text-gray-900">
        Lorem Ipsum
      </h2>
      <section className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image
          alt="Logo"
          src={logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Logo"
          src={logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Logo"
          src={logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Logo"
          src={logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        />
        <Image
          alt="Logo"
          src={logo}
          width={158}
          height={48}
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
      </section>
    </section>
  );
}
