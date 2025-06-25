

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

      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">What We Cover</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <li className="bg-blue-50 rounded-xl py-6 px-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Productivity</h3>
            <p className="text-gray-600 text-sm">Tips, tools, and time management strategies</p>
          </li>
          <li className="bg-blue-50 rounded-xl py-6 px-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Wellness</h3>
            <p className="text-gray-600 text-sm">Mindfulness, mental clarity, healthy routines</p>
          </li>
          <li className="bg-blue-50 rounded-xl py-6 px-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Tech & Tools</h3>
            <p className="text-gray-600 text-sm">Apps, gear, and digital minimalism</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
