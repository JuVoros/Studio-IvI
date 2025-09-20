export default function Blog() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* cloudy feel */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        
        {/* Page Title */}
        <div className="mb-12 pt-10 bt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-lg bt-5 pt-5">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-secondary drop-shadow-md max-w-2xl mx-auto">
            Thoughts, insights, and stories from the design world
          </p>
        </div>


        {/* Vintage Book Cover Container */}
        <div className="max-w-md mx-auto">
          {/* Book Container */}
          <div className="relative">
            {/* Book Shadow/Depth */}
            <div className="absolute inset-0 bg-gray-800 rounded-r-lg transform translate-x-2 translate-y-2"></div>
            
            {/* Main Book Cover */}
            <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 border-4 border-amber-800 rounded-r-lg shadow-2xl overflow-hidden">
              {/* Book Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-b from-amber-700 to-amber-900 border-r-2 border-amber-800"></div>
              
              {/* Vintage Texture Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50 to-amber-100 opacity-60"></div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-8 w-8 h-8 border-t-2 border-l-2 border-amber-800 opacity-40"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-800 opacity-40"></div>
              <div className="absolute bottom-4 left-8 w-8 h-8 border-b-2 border-l-2 border-amber-800 opacity-40"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-800 opacity-40"></div>
              
              {/* Content Area */}
              <div className="relative p-8 pl-12 min-h-[600px] flex flex-col justify-center">
                
                {/* Decorative Top Border */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-0.5 bg-amber-800"></div>
                    <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                    <div className="w-12 h-0.5 bg-amber-800"></div>
                  </div>
                </div>
                
                {/* Book Title */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-amber-900 mb-2 font-serif tracking-wide">
                    STUDIO IVI
                  </h2>
                  <div className="w-20 h-0.5 bg-amber-800 mx-auto mb-3"></div>
                  <h3 className="text-xl text-amber-800 font-serif italic">
                    Design Journal
                  </h3>
                </div>
                
                {/* Coming Soon Section */}
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-amber-900 mb-4 font-serif">
                    Coming Soon
                  </h4>
                  <p className="text-sm text-amber-800 font-serif italic mb-4">
                    A Collection of Thoughts, Insights,<br/>
                    and Creative Discoveries
                  </p>
                </div>

                {/* Topics Preview - Vintage Style */}
                <div className="space-y-3 mb-6">
                  <div className="text-center">
                    <div className="text-xs text-amber-700 font-serif uppercase tracking-wide mb-2">Featured Topics</div>
                    <div className="space-y-2 text-xs text-amber-800 font-serif">
                      <div>• Design Process & Development</div>
                      <div>• Sustainable Material Focus</div>
                      <div>• Industry Insights & Trends</div>
                      <div>• Architecture Student Life</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Middle Element */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 border border-amber-800 rounded-full flex items-center justify-center">
                    <span className="text-amber-800 text-sm">✦</span>
                  </div>
                </div>
                
                {/* Volume/Edition Info */}
                <div className="text-center mb-4">
                  <div className="text-xs text-amber-700 font-serif">
                    Volume I • MMXXIV
                  </div>
                </div>

                {/* Newsletter Signup - Vintage Style */}
                <div className="text-center">
                  <p className="text-xs text-amber-800 font-serif italic mb-4">
                    Be notified when stories unfold
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    <a 
                      href="/contact"
                      className="px-6 py-2 bg-amber-800 bg-opacity-20 text-amber-900 font-serif text-sm rounded border border-amber-800 border-opacity-30 hover:bg-opacity-30 transition-all duration-200"
                    >
                      Get Updates
                    </a>
                    
                    <a 
                      href="/projects"
                      className="px-6 py-2 bg-transparent text-amber-800 font-serif text-sm rounded border border-amber-700 border-opacity-50 hover:bg-amber-800 hover:bg-opacity-10 transition-all duration-200"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
                
                {/* Decorative Bottom Border */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-0.5 bg-amber-800"></div>
                    <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                    <div className="w-12 h-0.5 bg-amber-800"></div>
                  </div>
                </div>
              </div>
              
              {/* Vintage Wear Effects */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-amber-300 rounded-full opacity-30"></div>
              <div className="absolute bottom-12 left-16 w-2 h-2 bg-amber-300 rounded-full opacity-20"></div>
              <div className="absolute top-20 left-20 w-1 h-1 bg-amber-700 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}