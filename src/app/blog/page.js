export default function Blog() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* Overlay for cloudy blur effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-2xl pt-10">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/30">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
            Thoughts, insights, and stories from the design world
          </p>

          {/* Placeholder Content */}
          <div className="space-y-4">
            <p className="text-white/80">
              Coming soon — I’ll be sharing articles on design, creativity,
              and architecture.
            </p>
            <p className="text-sm text-white/70">
              Stay tuned for updates, or check out my{" "}
              <a href="/projects" className="underline hover:text-white">
                Projects
              </a>{" "}
              in the meantime.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
