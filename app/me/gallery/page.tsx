import GalleryCard from "@/components/gallerycard";

export default function GalleryPage() {
  const galleryImages = [
    {
      image: "/gallery/gallery1.jpg",
      title: "Coding Session #1",
    },
    {
      image: "/gallery/gallery2.jpg",
      title: "Coding Session #2",
    },
    {
      image: "/gallery/gallery3.jpg",
      title: "Coding Session #3",
    },
    {
      image: "/gallery/gallery4.jpg",
      title: "Coding Session #4",
    },
    {
      image: "/gallery/gallery5.jpg",
      title: "Coding Session #5",
    },
    {
      image: "/gallery/gallery6.jpg",
      title: "Coding Session #6",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest">
            Gallery
          </p>

          <h1 className="text-5xl font-bold mt-4">
            My Coding Journey
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of moments while studying, coding,
            and developing web applications.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <GalleryCard
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </main>
  );
}