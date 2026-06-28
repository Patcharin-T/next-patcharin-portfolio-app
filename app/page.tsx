import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm">
              Front-End Developer Portfolio
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I am
              <span className="block text-blue-400">
                Patcharin Thonglam
              </span>
            </h1>

            <h2 className="mt-4 text-2xl text-gray-300">
              Digital Technology and Innovation Student
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
              Passionate about building modern web applications
              with React and Next.js. I enjoy creating clean,
              responsive, and user-friendly interfaces while
              continuously learning new technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link href="/about">
                <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
                  About Me
                </button>
              </Link>

              <Link href="/me/projects">
                <button className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition">
                  View Projects
                </button>
              </Link>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-20 rounded-full"></div>

              <Image
                src="/profile.jpg"
                alt="Patcharin Profile"
                width={380}
                height={380}
                priority
                className="relative rounded-3xl border border-slate-700 shadow-2xl object-cover"
              />

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}