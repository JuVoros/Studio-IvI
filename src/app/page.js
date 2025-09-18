export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: "url('/images/bg.jpg')",
    }}
    >
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
           Welcome to My Portfolio
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow-md">
          Exploring technology, creativity, and innovation
        </p>
        <button className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30">
          Explore My Work
        </button>
      </div>
    </main>
  )
}