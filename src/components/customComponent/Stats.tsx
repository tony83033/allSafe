import { Users, Network, GraduationCap, HandshakeIcon } from "lucide-react"

export default function StatsSection() {
  return (
    <div className="w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* 5000+ Students & Professionals */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 border-white p-5 mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold">5000+</h3>
              <p className="text-[#FF5733] text-sm">
                Students & Professionals
                <br />
                Trained
              </p>
            </div>
          </div>

          {/* 300K+ Social Media Followers */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 border-white p-5 mb-4">
              <Network className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold">300K+</h3>
              <p className="text-[#FF5733] text-sm">Social Media Followers</p>
            </div>
          </div>

          {/* 100+ Students Placed */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 border-white p-5 mb-4">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold">100+</h3>
              <p className="text-[#FF5733] text-sm">Students Placed</p>
            </div>
          </div>

          {/* 50+ Workshops & Webinars */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 border-white p-5 mb-4">
              <HandshakeIcon className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold">50+</h3>
              <p className="text-[#FF5733] text-sm">Workshops & Webinars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
