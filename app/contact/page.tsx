import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest">
            Contact
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Get In Touch
          </h1>

          <p className="text-gray-400 mt-4">
            Feel free to contact me for opportunities,
            collaboration, or professional networking.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Email
              </h2>

              <p className="text-gray-300">
                patcharinn.tl@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Phone Number
              </h2>

              <p className="text-gray-300">
                083-202-1772
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                GitHub
              </h2>

              <Link
                href="https://github.com/Patcharin-T"
                target="_blank"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                github.com/Patcharin-T
              </Link>
            </div>

          </div>

          {/* Resume Button */}
          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}