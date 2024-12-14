import About from "@/components/About";
import Banner from "@/components/Banner";
import Logos from "@/components/Logos";
import Stats from "@/components/Stats";

export default function AboutPage() {
  const links = [
    { name: "Web Site", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Contacts", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];
  const stats = [
    { name: "Lorem1", value: "10" },
    { name: "Lorem2", value: "10+" },
    { name: "Lorem3", value: "20" },
    { name: "Lorem4", value: "Lorem Ipsum" },
  ];

  return (
    <>
      <Banner />
      <About links={links} stats={stats} />
      <Logos />
      <Stats />
    </>
  );
}
