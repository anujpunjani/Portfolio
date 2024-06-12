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
      "I have successfully transitioned and integrated over 5+ features from a Command Line Interface (CLI) to a Graphical User Interface (GUI).",
      "Additionally, I implemented a mechanism for deleting static ARP with VRF, improving network management capabilities.",
      "Furthermore, I have meticulously maintained and optimized code for various Layer 3 (L3) network protocols like BGP and VRRP, ensuring smooth functionality and optimal performance.",
    ],
    techStack: [
      "C",
      "C++",
      "Java",
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
      "Successfully deployed a custom switch software image enabling precise control of electrical optical ports based on specific build ID, transforming a 26-port network switch into a more streamlined 22 port configuration.",
    ],
    techStack: [
      "C",
      "C++",
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
