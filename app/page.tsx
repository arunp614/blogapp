import Link from "next/link";
import Subscribe from "./components/Subscribe";


export default function Home() {
  return (
      <div className="bg-white text-gray-900 px-6 md:px-20 py-16">

      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Fuel Your Mind. <br />
          <span className="text-blue-600">Master Your Day.</span>
        </h1>
        <p className="text-xl text-gray-600 mt-4 mb-8">
          Explore actionable insights on productivity, tech, and wellness.
        </p>
        <Link
          href="/about"
          className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Learn More About Us
        </Link>
      </section>

      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Productivity", "Wellness", "Tech & Tools"].map((title) => (
            <div
              key={title}
              className="bg-blue-50 p-6 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Discover practical tips, routines, and tools to level up your day.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border rounded-xl p-5 hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">Blog Title #{i}</h3>
              <p className="text-sm text-gray-600">
                A short excerpt from the blog post goes here. Keep it snappy and inviting.
              </p>
              <Link href="#" className="text-blue-600 mt-2 inline-block text-sm hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
        <Subscribe/>
      
    </div>

  );
}
