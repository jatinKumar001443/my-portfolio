import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Jatin Kumar</h1>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`flex-col md:flex md:flex-row md:gap-6 ${menuOpen ? 'flex' : 'hidden'}`}>
          <a href="#personal_info" className="hover:text-yellow-400">Personal Information</a>
          <a href="#career_Objective" className="hover:text-yellow-400">Career Objective</a>
          <a href="#education" className="hover:text-yellow-400">Education</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#certificates" className="hover:text-yellow-400">Certificates</a>
          <a href="#soft_skills" className="hover:text-yellow-400">Soft Skills</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      {/* Personal Information */}
      <section id="personal_info" className="p-6">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p><strong>Name:</strong> Jatin Kumar</p>
        <p><strong>Location:</strong> Barnala, Punjab</p>
        <p><strong>Email ID:</strong> mrbansal157134@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/jatin-kumar-bansal" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            View Profile
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/jatinKumar001443/My-portfolio" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            View Profile
          </a>
        </p>
      </section>
      <hr />

      {/* Career Objective */}
      <section id="career_Objective" className="p-6">
        <h2 className="text-xl font-bold mb-2">Career Objective</h2>
        <p>
          Highly motivated Full Stack Developer with hands-on experience in frontend and backend technologies. Skilled
          in building dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Seeking a
          position to contribute to real-world applications while learning and growing with a passionate tech team.
        </p>
      </section>
      <hr />

      {/* Education */}
      <section id="education" className="p-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Diploma in Computer Application (ADCA):</strong> 2022 - 2023</li>
          <li><strong>Bachelor of Computer Applications (BCA):</strong> 2023 - 2026</li>
        </ul>
      </section>
      <hr />

      {/* Skills */}
      <section id="skills" className="p-6">
        <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
        <div><strong>Frontend:</strong> HTML5, CSS, JavaScript</div>
        <div><strong>Frameworks/Libraries:</strong> React.js, Next.js, Tailwind CSS, Bootstrap</div>
        <div><strong>Backend:</strong> Java, PHP, TypeScript</div>
        <div><strong>Frameworks/Libraries:</strong> Node.js, Express.js</div>
        <div><strong>Database:</strong> MongoDB, MySQL</div>
        <div><strong>Deployment:</strong> Git, GitHub, Postman</div>
        <div><strong>Development Skills:</strong> C, C++, Java, Python+AI, DSA Using AI</div>
        <div>REST API / JSON</div>
      </section>
      <hr />

      {/* Projects */}
      <section id="projects" className="p-6">
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Portfolio Website</h3>
          <p>Personal responsive website using HTML, Tailwind, and JavaScript.</p>
          <p>
            <a href="#" className="text-blue-600 underline">Live</a> |{" "}
            <a href="#" className="text-blue-600 underline">GitHub</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Financial Manager App</h3>
          <p>Tracks expenses with backend API and frontend React dashboard.</p>
          <p>
            <a href="#" className="text-blue-600 underline">Live</a> |{" "}
            <a href="#" className="text-blue-600 underline">GitHub</a>
          </p>
        </div>
      </section>
      <hr />

      {/* Certificates */}
      <section id="certificates" className="p-6">
        <h2 className="text-xl font-bold mb-2">Certification</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Data Analytics Job Simulation - Deloitte</li>
          <li>GenAI Powered Data Analytics Job Simulation - TATA</li>
          <li>Software Engineering Job Simulation - Electronic Arts</li>
          <li>Software Engineering Job Simulation - AWS</li>
        </ul>
      </section>
      <hr />

      {/* Soft Skills */}
      <section id="soft_skills" className="p-6">
        <h2 className="text-xl font-bold mb-2">Soft Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Problem Solving & Critical Thinking</li>
          <li>Communication & Teamwork</li>
          <li>Self-learning & Adaptability</li>
          <li>Time Management & Discipline</li>
        </ul>
      </section>
      <hr />

      {/* Contact */}
      <section id="contact" className="p-6">
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <p><strong>Email:</strong> <a href="mailto:mrbansal157134@gmail.com" className="text-blue-600 underline">mrbansal157134@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jatin-kumar-bansal" target="_blank" rel="noreferrer" className="text-blue-600 underline">Click Here</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/jatinKumar001443/My-portfolio.git" target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub</a></p>
      </section>
      <hr />

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-900 text-white">
        © 2025 Jatin Kumar | Full Stack Developer Portfolio
      </footer>
    </div>
  );
}
