type SkillCardProps = {
  name: string;
};

export default function SkillCard({
  name,
}: SkillCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-blue-500 transition">
      {name}
    </div>
  );
}