import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technology: string;
  role: string;
  year: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  technology,
  role,
  year,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">

      {/* รูปโปรเจกต์ */}
      <div className="relative w-full h-[450px] bg-slate-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* รายละเอียด */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 leading-7 mb-4">
          {description}
        </p>

        <div className="space-y-2 text-sm">
          <p>
            <span className="text-blue-400 font-semibold">
              Technology:
            </span>{" "}
            {technology}
          </p>

          <p>
            <span className="text-blue-400 font-semibold">
              Role:
            </span>{" "}
            {role}
          </p>

          <p>
            <span className="text-blue-400 font-semibold">
              Year:
            </span>{" "}
            {year}
          </p>
        </div>
      </div>

    </div>
  );
}