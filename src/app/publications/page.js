export default function Publications() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-6">
        
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-lg pt-10">
            Featured In
          </h1>
          <p className="text-lg md:text-xl text-secondary drop-shadow-md max-w-2xl mx-auto">
            Recent publication features and design recognition
          </p>
        </div>


        <div className="max-w-md mx-auto">
          <a 
            href="https://www.dezeen.com/2025/06/01/art-gallery-supporting-corcoran-school-of-arts-design-schoolshows" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-2xl group-hover:bg-opacity-15 group-hover:scale-105 transition-all duration-300">

              <div className="aspect-[4/4] bg-white rounded-lg shadow-lg overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-300">
            
                <img
                  src="/images/dezeen+design+magazine+logo.webp" 
                  alt="Magazine Cover - Design Feature"
                  className="w-full h-full object-cover"
                />
              </div>

          
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary mb-2">
                  Dezeen Magazine
                </h2>
                <p className="text-secondary text-sm mb-3">
                  June 2025 Article
                </p>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:text-opacity-80 transition-colors">
                  Read Article 
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </div>
          </a>
        </div>

    

      </div>
    </main>
  );
}