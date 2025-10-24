import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "./customCard.js";
import "./styles.css";

const projects = [
  {
    title: "CoHive",
    description:
      "Roommate-finding app with 1,00+ downloads in the first month. Features secure messaging, advanced filters, and AI-based recommendations.",
    link: "https://play.google.com/store/apps/details?id=llc.appdogs.cohive",
  },
  {
    title: "Kush Gold",
    description:
      "Bullion trading web app with secure payments. Implements real-time price tracking, transaction history, and secure authentication.",
    link: "https://mrmodh10.github.io/kushGold_Web/",
  },
  {
    title: "Quiz Empire",
    description:
      "Competitive real-money quiz game with leaderboards. Supports real-time multiplayer, custom challenges, and daily rewards.",
    link: "https://www.capermint.com/project/quiz-empire/",
  },
  {
    title: "PathQuest AP",
    description:
      "Accounts payable management app featuring real-time tracking, automated invoice management, and workflow optimization.",
    link: "https://play.google.com/store/apps/details?id=com.pathquestap",
  },
  {
    title: "PathQuest BI",
    description:
      "PathQuest BI is a mobile app that provides real-time financial insights and customizable reports, helping businesses make smarter, data-driven decisions on the go.",
    link: "https://play.google.com/store/apps/details?id=com.pathquest&utm_source=na_Med",
  },
  {
    title: "Biotech Connect",
    description:
      "Biotech Connect is designed to enhance user interaction with biotech products, featuring product browsing,success stories from patients, and expert testimonials. The app aims to bridge the gap between consumers and providers in the biotech industry.",
    link: "https://play.google.com/store/apps/details?id=com.biotech.biotechvision",
  },
];

export default function Portfolio() {
  return (
    <div className="body">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Mohit Modh</h1>
        <p className="text-lg">
          Flutter & React Developer | Building Scalable Apps
        </p>
        <div className="social-icons">
          <a href="https://github.com/mrmodh10" target="_blank">
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-modh-740a24132"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:mohitmodh10@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p className="textDecoration">
          Results-driven <b>Flutter Developer</b> with <b>5+</b> years of
          experience in cross-platform app development and{" "}
          <b>1 year in React</b>. Proven expertise in building{" "}
          <b>scalable applications</b>, <b>optimizing performance</b>, and{" "}
          <b>leading projects</b> from concept to launch. Strong knowledge of{" "}
          <b>Dart, Firebase, TypeScript, and REST APIs</b>. Passionate about
          creating <b>high-quality, user-centric</b> mobile solutions.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-500"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2>Resume</h2>
        <p className="textDecoration">
          Master’s in <b>Computer Science</b> at <b>Western Michigan University</b>. Former
          <b> React Developer Intern</b> at <b>Knight Watch Inc, Kalamazoo, USA</b>.
        </p>
        <a href="https://drive.google.com/file/d/1z4Tm4xEL-jgAmrU9vm_yFrry0-VU4qnT/view?usp=sharing" download>
          <button className="button"><b>Download Resume</b></button>
        </a>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: mohitmodh10@gmail.com</p>
        <p>Phone: +1(269)-220-4266</p>
      </section>
    </div>
  );
}