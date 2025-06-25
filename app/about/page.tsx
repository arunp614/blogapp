

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          About <span className="text-blue-600">MindFuel</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Fueling your mind with insights on productivity, wellness, and tech.
        </p>
      </section>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            MindFuel exists to help individuals simplify their lives through modern tools,
            thoughtful routines, and mindful habits. We believe that personal growth
            starts with small, intentional steps every day.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Why We Started</h2>
          <p className="text-gray-700 leading-relaxed">
            This blog began as a weekend passion project by a group of friends who wanted
            to document their journey of staying focused in a distracted world. Today, it’s a
            growing resource for curious minds like yours.
          </p>
        </div>
      </section>

    </div>
  );
}
