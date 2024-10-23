import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <div className="min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Page not found.
                </h1>
                <p className="mt-1 text-base">
                  Please check the link and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 font-medium transition-colors"
                >
                  <FaArrowLeft />
                  <span>Home page</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
