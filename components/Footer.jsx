import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full flex-wrap justify-around gap-3 bg-gray-100 p-6 text-sm text-gray-800 md:justify-between md:px-10">
      <section className="flex flex-wrap justify-center">
        <p>&copy; {currentYear} Booking Site. Made by</p>
        <a
          href="https://github.com/Dimterion"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline transition-colors hover:text-gray-600"
        >
          Dimterion
        </a>
        .
      </section>
      <section className="flex flex-wrap gap-3">
        <Link className="transition-colors hover:text-gray-600" href="/places">
          Places
        </Link>
        <Link className="transition-colors hover:text-gray-600" href="/about">
          About
        </Link>
        <Link className="transition-colors hover:text-gray-600" href="/contact">
          Contact
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
