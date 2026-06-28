import SkillCard from "@/components/skillcard";

export default function SkillsPage() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
  ];

  const mobileSkills = [
    "React Native",
    "Flutter",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "REST API",
  ];

  const databaseSkills = [
    "MySQL",
    "Supabase",
    "SQL",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
  ];

  const languageSkills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            My Skills
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Technical Skills
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            A collection of technologies, frameworks, and tools
            that I use to build modern web applications and
            mobile applications.
          </p>
        </div>

        {/* Frontend */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Frontend Development
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Mobile */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Mobile Development
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mobileSkills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Backend */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Backend Development
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backendSkills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Database */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Database
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {databaseSkills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Programming Languages */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Programming Languages
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languageSkills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Tools & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {toolsSkills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}