import Image from "next/image";
import logo from "../assets/images/logo.png";
import avatar from "../public/images/placeholder_img.jpg";

export default function Contacts() {
  return (
    <section className="relative isolate my-10 overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          width={50}
          height={50}
          alt=""
          src={logo}
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi rem aut alias, maiores praesentium consequuntur porro
              optio? Aliquid, autem molestiae?”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              width={100}
              height={100}
              alt="Avatar"
              src={avatar}
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Lorem Ipsum</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Lorem Ipsum</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
