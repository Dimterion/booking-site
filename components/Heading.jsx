const Heading = ({ title }) => {
  return (
    <section className="mb-5 bg-white px-4 py-4 shadow">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
    </section>
  );
};

export default Heading;
