import ProjectCard from "@/components/projectcard";

export default function ProjectsPage() {
  const projects = [
    {
      image: "/projects/project1.png",
      title: "THAI HOTLINE APP",
      description:
        "Thai emergrncy hotline directory application.",
      technology: "Flutter,Dart",
      role: "Front-End Developer",
      year: "2026",
    },
    {
      image: "/projects/project2.jpg",
      title: "Money Tracking App",
      description:
        "Mobile application for tracking income and expenses wiith data management features.",
      technology: "React Native, TypeScript, Supabase",
      role: "Front-End Developer",
      year: "2025",
    },
    {
      image: "/projects/project3.jpg",
      title: "Run Tracker App",
      description:
        "Mobile application for tracking running activities and personal progress.",
      technology: "React Native, TypeScript, Supabase",
      role: "Front-End Developer",
      year: "2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest">
            My Projects
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Featured Projects
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some projects that demonstrate my skills and
            experience in web development.
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              technology={project.technology}
              role={project.role}
              year={project.year}
            />
          ))}
        </div>

      </div>
    </main>
  );
}