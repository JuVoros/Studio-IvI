import Image from "next/image"

export default function Title() {
    return (
        <div className="absolute top-0 left-0 w-full text-center py-2 pt-4 pb-2 bg-transparent z-30">
            <h1 className="text-5xl sm:text-1xl md:text-6xl lg:text-8xl font-extrabold tracking-wide text-white drop-shadow-lg px-4">
               STUDIO IVI  <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
              </div>
                
                    {/*  LOGO (NOT animated, always visible) 
                    <div className="w-[450px] sm:w-[600px] md:w-[750px] lg:w-[900px] mb-6">
                      <Image
                        src="/images/Transparent Logo.png"
                        alt="Studio IvI Logo"
                        width={3000}
                        height={3000}
                        priority
                        className="w-full h-auto object-contain drop-shadow-2xl invert brightness-200"
                
                    </div>
                      /> */}
            </h1>
        </div>
    )
}