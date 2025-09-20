export default function PageTemplate() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
         backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
       }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto bt-10 pt-10">

        <div className="text-center mb-12 pt-10 bt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            ABOUT ME
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md max-w-3xl mx-auto">
            Crafting spaces that inspire and transform through innovative design and architectural excellence.
          </p>
        </div>

        {/* Centered Image Rectangle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300">
            <div 
              className="w-80 h-60 bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('')"
              }}
            >
              {/* Subtle overlay for image */}
              <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          
         
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300">
            <div className="text-center">
              
              {/* Card Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Interior Design & Architecture
              </h3>
              
            
              <p className="text-white text-opacity-90 mb-8 leading-relaxed text-lg">
                With a passion for creating spaces that seamlessly blend functionality with aesthetic beauty, 
                I specialize in transforming environments into extraordinary experiences that reflect each client&apos;s unique vision.
              </p>

              {/* Bullet Points Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                <div className="group text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full mt-3 group-hover:bg-opacity-100 transition-all duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Residential Spaces</h4>
                      <p className="text-white text-opacity-80 text-sm leading-relaxed">
                        Creating personalized living environments that reflect your lifestyle and aesthetic preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full mt-3 group-hover:bg-opacity-100 transition-all duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Commercial Design</h4>
                      <p className="text-white text-opacity-80 text-sm leading-relaxed">
                        Designing functional work environments that inspire productivity and creativity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full mt-3 group-hover:bg-opacity-100 transition-all duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Sustainable Solutions</h4>
                      <p className="text-white text-opacity-80 text-sm leading-relaxed">
                        Integrating eco-friendly materials and energy-efficient systems into every project.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full mt-3 group-hover:bg-opacity-100 transition-all duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Space Optimization</h4>
                      <p className="text-white text-opacity-80 text-sm leading-relaxed">
                        Maximizing functionality through thoughtful layout and innovative storage solutions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}