import Image from "next/image";

export default function AboutPage() {
return ( <main className="min-h-screen bg-slate-950 text-white py-16"> <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-blue-400 uppercase tracking-widest">
        About Me
      </p>

      <h1 className="text-5xl font-bold mt-4">
        Get To Know Me
      </h1>

      <p className="text-gray-400 mt-4">
        Personal information, education, interests and career goals.
      </p>
    </div>

    {/* Profile Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-3xl border border-slate-700 shadow-xl"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-blue-400">
          Personal Profile
        </h2>

        <div className="space-y-4 text-gray-300">

          <p>
            <span className="font-semibold text-white">
              Name:
            </span>{" "}
            Patcharin Thonglam
          </p>

          <p>
            <span className="font-semibold text-white">
              Position:
            </span>{" "}
            Front-End Developer
          </p>

          <p>
            <span className="font-semibold text-white">
              Education:
            </span>{" "}
            Digital Technology and Innovation student
          </p>

          <p className="leading-8">
            I am a Digital Technology and Innovation student with a passion for software development and creating digital solutions.
          </p>

        </div>
      </div>

    </div>

    {/* Education */}
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">
        Education
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h3 className="text-xl font-semibold">
          Digital Technology and Innovation
        </h3>

        <p className="text-gray-400 mt-2">
          Southeast Asia University (SAU)
        </p>

        <p className="text-gray-500 mt-2">
          Expected Graduation: 2026
        </p>
      </div>
    </section>

    {/* Career Objective */}
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">
        Career Objective
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <p className="text-gray-300 leading-8">
          My goal is to become a professional Front-End Developer
          and contribute to building high-quality web applications
          that provide excellent user experiences. I am eager to
          learn new technologies and continuously improve my
          development skills.
        </p>
      </div>
    </section>

    {/* Strengths */}
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">
        Strengths
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="font-semibold mb-2">
            Fast Learner
          </h3>
          <p className="text-gray-400">
            Able to quickly adapt and learn new technologies.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="font-semibold mb-2">
            Responsible
          </h3>
          <p className="text-gray-400">
            Committed to completing tasks effectively.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="font-semibold mb-2">
            Teamwork
          </h3>
          <p className="text-gray-400">
            Able to work collaboratively with others.
          </p>
        </div>

      </div>
    </section>

    {/* Interests & Hobbies */}
    <section className="mt-20">
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Interests
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Web Development</li>
            <li>• UI/UX Design</li>
            <li>• Artificial Intelligence</li>
            <li>• Technology Trends</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Hobbies
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Coding</li>
            <li>• Traveling</li>
            <li>• Photography</li>
            <li>• Watching Tech Videos</li>
          </ul>
        </div>

      </div>
    </section>

  </div>
</main>

);
}
