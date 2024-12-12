const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full flex-wrap justify-center bg-gray-100 p-6 text-sm text-gray-800">
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
    </footer>
  );
};

export default Footer;
