const Heading = ({ title, number }) => {
  return (
    <section className="mb-5 flex items-center justify-center bg-gray-50 px-4 py-4 shadow">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      {number > 0 && (
        <span className="text-2xl font-bold tracking-tight text-gray-900">
          : {number}
        </span>
      )}
    </section>
  );
};

export default Heading;
