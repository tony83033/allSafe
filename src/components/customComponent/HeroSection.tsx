export function HeroSection() {
    return (
      <section className="py-16 md:py-24 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-gray-600 text-xl md:text-2xl font-medium">
              WE EQUIP YOU WITH <span className="bg-[#FF5722] text-white px-2 py-1">SKILLS</span>
            </h2>
          </div>
  
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1E2C] mb-4 leading-tight">
            Creating Skilled Taskforce Of
            <br />
            Job Ready <span className="text-[#7C4DFF]">Security Professionals</span>
          </h1>
  
          {/* Orange underline */}
          <div className="relative w-full flex justify-center mb-8">
            <div className="w-64 h-2 bg-[#FF5722] rounded-full absolute -mt-1"></div>
          </div>
  
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-10">
            Join India's Most Trusted Cyber Security Academy
          </p>
  
          <h3 className="text-3xl md:text-4xl font-bold text-[#1A1E2C] mt-12">What You Want To Learn?</h3>
        </div>
      </section>
    )
  }
  