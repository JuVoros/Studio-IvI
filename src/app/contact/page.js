export default function Contact() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
         backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')"
      }}
    >

      
      <div className="relative z-10 w-full max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-secondary drop-shadow-md max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s connect and discuss how we can work together.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Email Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300 text-center">
            {/* Email Icon */}
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-3">
              Email
            </h3>
            
            <p className="text-secondary mb-4 text-sm">
              Send me a message anytime
            </p>
            
            <a 
              href="mailto:your.email@example.com"
              className="inline-block px-6 py-3 bg-primary bg-opacity-20 text-primary font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200 text-sm"
            >
              your.email@example.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300 text-center">
            {/* Phone Icon */}
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-3">
              Phone
            </h3>
            
            <p className="text-secondary mb-4 text-sm">
              Call or text me directly
            </p>
            
            <a 
              href="tel:+1234567890"
              className="inline-block px-6 py-3 bg-primary bg-opacity-20 text-primary font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200 text-sm"
            >
              +1 (xxx) xxx-xxxx
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300 text-center">
            {/* LinkedIn Icon */}
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💼</span>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-3">
              LinkedIn
            </h3>
            
            <p className="text-secondary mb-4 text-sm">
              Connect with me professionally
            </p>
            <a 
              href="https://www.linkedin.com/in/teoivirank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary bg-opacity-20 text-primary font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200 text-sm"
            >
              View Profile
            </a>
          </div>

        </div>

        {/* Additional Contact Info */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Let&apos;s Work Together
          </h3>
          
          <p className="text-secondary mb-6 leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a specific project in mind or just want to connect, 
            I&apos;d love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-primary bg-opacity-20 text-primary font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200"
            >
              Send Message
            </a>
            
            <a 
              href="/projects"
              className="px-8 py-3 bg-transparent text-secondary font-medium rounded-lg border border-secondary border-opacity-50 hover:bg-secondary hover:bg-opacity-10 transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}