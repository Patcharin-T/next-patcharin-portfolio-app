import Image from "next/image";

type GalleryCardProps = {
image: string;
title: string;
};

export default function GalleryCard({
image,
title,
}: GalleryCardProps) {
return ( <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:border-blue-500 transition-all duration-300">

```
  <Image
    src={image}
    alt={title}
    width={500}
    height={350}
    className="w-full h-72 object-cover"
  />

  <div className="p-4">
    <p className="text-center text-gray-300 font-medium">
      {title}
    </p>
  </div>

</div>

);
}
