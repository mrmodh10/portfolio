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
    title: "Biotech Connect",
    description:
      "Biotech Connect is a biotech engagement app with product browsing, patient stories, and expert insights, trusted by 5,000+ users to bridge the gap between consumers and providers.",
    link: "https://play.google.com/store/apps/details?id=com.biotech.biotechvision",
  },
  {
    title: "PathQuest AP",
    description:
      "Accounts payable management app featuring real-time tracking, automated invoice management, and workflow optimization.",
    link: "https://play.google.com/store/apps/details?id=com.pathquestap",
  },
  {
    title: "Quiz Empire",
    description:
      "Competitive real-money quiz game with leaderboards. Supports real-time multiplayer, custom challenges, and daily rewards.",
    link: "https://www.capermint.com/project/quiz-empire/",
  },
  {
    title: "Goal Scaling",
    description:
      "Educational and healthcare app utilizing a structured five-point scale to track goal attainment with data visualization and progress tracking.",
    link: "https://apps.apple.com/us/app/goal-scaling/id1560169255",
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
          I'm a <b>Flutter Developer by day, bug-squashing ninja by night</b>, with <b>5+ years of experience</b> turning coffee into scalable, high-performance, cross-platform apps. Whether it's <b>Flutter, Dart, Firebase, Supabase</b>, or decoding mysterious <b>REST APIs</b> at 2 AM — I speak them all fluently (with minimal crying).
<p>I've helped launch everything from <b>scrappy MVPs to enterprise-grade monsters</b>, always thriving in <b>Agile, remote-first teams</b> where Wi-Fi and Git commits are sacred. I've taken multiple apps from <b>"just an idea" to "live on the app store"</b> — and yes, I still get excited every time I see a green checkmark in <b>CI/CD</b>.</p>
<p>My hobbies include <b>refactoring perfectly working code</b>, fighting with state management (<b>Bloc, Cubit, StreamBuilder</b> — pick your fighter), and whispering sweet nothings to my <b>modular architecture</b> so it doesn’t break in production.</p>
          
        </p>
      </section>
      <br/>
      <section>
        <h2>Professional Projects with Real-World Impact</h2>
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
        <h3>Resume</h3>
        <p className="textDecoration">
          <b>M.S. in Computer Science</b> from <b>Western Michigan University</b>. Former <b>React Developer Intern</b> at <b>Knight Watch Inc.</b> and <b>Flutter Developer</b> at <b>CoHive LLC</b>.
        </p>
        <a href="https://drive.google.com/file/d/168d45VjoSNlm5qEIwpSF4kdWWrSUf6Fw/view?usp=sharing" download>
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
