import SectionHeader from "../utils/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" direction="left" />
      {experience.map((item) => (
        <ExperienceItem key={item.company + item.position} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    company: "Tejas Networks Ltd.",
    position: "Software Engineer - R&D",
    time: "August 2023 - Present",
    location: "Bengaluru",
    description: [
      "Developed 2 new BGP attributes from scratch, allowas-in and as-override (with VRF), for global and route-maps configuration in Tejas core operating system.",
      "Engineered a static ARP deletion mechanism with VRF.",
      "Fixed issues related to clock and timezone discrepancies, ensuring accurate timekeeping across systems.",
      "Migrated 5+ CLI features, including BGP attributes and ACL configurations, to GUI, improving user interaction and operational efficiency.",
      "Fixed critical key filter bugs in the GUI, ensuring accurate data retrieval.",
    ],
    techStack: [
      "C",
      "C++",
      "Linux",
      "XML",
      "TCPDUMP",
      "GDB",
      "JavaScript",
      "Computer Networks",
      "OOPs",
      "Git",
      "Gerrit",
    ],
  },
  {
    company: "Tejas Networks Ltd.",
    position: "Software Engineer Intern - R&D",
    time: "March 2023 - July 2023",
    location: "Bengaluru",
    description: [
      "Developed and deployed a software solution enabling the transformation of a (24+2) port enterprise switch variant into a (16+2) port configuration.",
    ],
    techStack: [
      "C",
      "C++",
      "Linux",
      "Threading",
      "Computer Networks",
      "OOPs",
      "Git",
      "Vim",
      "CLIs",
    ],
  },
];

export default Experience;
