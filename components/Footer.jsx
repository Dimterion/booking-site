import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full flex-wrap justify-around gap-2 bg-gray-100 p-6 text-sm text-gray-800">
      <section className="flex flex-wrap justify-center">
        <p className="">&copy; {currentYear} Booking Site. Made by</p>
        <a
          href="https://github.com/Dimterion"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline transition-colors hover:text-gray-800"
        >
          Dimterion
        </a>
        .
      </section>
      <section className="flex flex-wrap gap-2">
        <Link href="/places">Places</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </section>
    </footer>
  );
};

export default Footer;
