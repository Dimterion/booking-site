import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-max px-8 py-12 sm:flex sm:py-24">
      <p className="text-4xl font-bold sm:text-5xl">404</p>
      <section className="sm:ml-6">
        <article className="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Page not found.</h1>
          <p className="mt-4 text-base">Please check the link and try again.</p>
        </article>
        <article className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-medium text-gray-800 transition-colors hover:text-gray-600"
          >
            <FaArrowLeft />
            Home page
          </Link>
        </article>
      </section>
    </section>
  );
}
