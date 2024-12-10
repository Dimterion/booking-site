const stats = [
  { id: 1, name: "Lorem Ipsum", value: "10 Lorem" },
  { id: 2, name: "Lorem Ipsum", value: "100,000 Lorem" },
  { id: 3, name: "Lorem Ipsum", value: "1,000,000 Lorem" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-24 sm:py-32 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.id}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-base/7 text-gray-600">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {stat.value}
            </dd>
          </article>
        ))}
      </dl>
    </section>
  );
}
