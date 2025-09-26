export default function PageTemplate() {
  return (
<main 
  className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 pb-20 pt-24 md:pt-10"
  style={{
    backgroundImage: "url('/images/OfficePic4.jpeg')"
  }}
>
      {/* Dark overlay*/}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content Container */}
      <div className="absolute pt-20 relative z-10 w-full max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            PROJECTS
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md max-w-3xl mx-auto">
            A brief description or subtitle for this page goes here.
          </p>
        </div>

        {/* Two Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300">
            <div className="text-center md:text-left">
              {/* Card Icon/Image Placeholder */}
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              
              {/* Card Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Card Title One
              </h3>
              
              {/* Card Content */}
              <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                This is where you can add your main content for the first card. 
              </p>
              
              {/* Card Button */}
              <button className="w-full md:w-auto px-6 py-3 bg-white bg-opacity-20 text-white font-medium rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300">
            <div className="text-center md:text-left">
              {/* Card Icon/Image Placeholder */}
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              
              {/* Card Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Card Title Two
              </h3>
              
              {/* Card Content */}
              <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                This is the content area for your second card.
              </p>
              
              {/* Card Button */}
              <button className="w-full md:w-auto px-6 py-3 bg-white bg-opacity-20 text-white font-medium rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}