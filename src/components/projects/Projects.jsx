import React from "react";
import Project from "./Project";
import SectionHeader from "../utils/SectionHeader";
import styles from "./projects.module.scss";
import FluentImg from "../../assets/Fluent.png";
import TodoImg from "../../assets/Minimal Todo.png";
import CLIImg from "../../assets/CLI Website.png";
import RPGImg from "../../assets/Auto RPG.png";

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="right" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Fluent Programming Language",
    image: FluentImg,
    githubLink: "https://github.com/anujpunjani/Fluent",
    deployedLink: "https://anujpunjani.github.io/Fluent",
    techStackUsed: ["ReactJS", "NodeJS", "OOPs", "Compiler Design"],
    description: "My own programming language written in JavaScript.",
    modalContent: (
      <>
        <p>Created a new programming language named Fluent using Node.Js.</p>
        <p>
          Implemented lexical analysis, parsing, and code generation components.
        </p>
        <p>
          Integrated advanced features such as Arrow Functions, allowing
          functions to be assigned to variables, Built-In Functions, CLI mode &
          direct execution from files.
        </p>
      </>
    ),
  },
  {
    title: "Minimal Todo",
    image: TodoImg,
    githubLink: "https://github.com/anujpunjani/dev",
    deployedLink:
      "https://chromewebstore.google.com/detail/minimal-todo/lolenhbhlaakeokpnepiecpikieiehca",
    techStackUsed: ["HTML", "CSS", "JavaScript", "Sortable.Js"],
    description: "Chrome Extension (Featured by Google)",
    modalContent: (
      <>
        <p>
          Minimal Todo is a simple and effective to-do & task list, which helps
          you to make everything done and witness all important moments in life.
        </p>
      </>
    ),
  },
  {
    title: "CLI Website",
    image: CLIImg,
    githubLink: "https://github.com/anujpunjani/dev",
    deployedLink: "https://anujpunjani.github.io/dev/",
    techStackUsed: ["HTML", "CSS", "JavaScript"],
    description: "My terminal portfolio.",
    modalContent: (
      <>
        <p>A terminal style website</p>
      </>
    ),
  },
  {
    title: "Automatic Role Playing Game (Hero vs Enemies)",
    image: RPGImg,
    githubLink: "https://github.com/anujpunjani/Auto-RPG",
    deployedLink: "",
    techStackUsed: ["C", "C++", "Data Structures", "OOPs", "Game Design"],
    description:
      "A command line based automatic turn-based role-playing game (RPG).",
    modalContent: (
      <>
        <p>
          CLI-based RPG using C with advanced data structures: structs, linked
          lists, stacks, generic pointers, data file handling.
        </p>
        <p>
          Showcased proficiency by implementing an automated gaming system with
          0% lag, highlighting key programming principles.
        </p>
      </>
    ),
  },
];

export default Projects;
