import { Card } from "@/components/ui/card";
import { 
  Monitor, 

  Award, 
  User, 
  Shield, 
  UsersRound, 
  Star, 
  Laptop 
} from "lucide-react";

export default function ServicesWeDeliver() {
  const services = [
    {
      id: 1,
      title: "Corporate Training",
      icon: Monitor
    },
    {
      id: 2,
      title: "Online Live Training",
      icon: Monitor
    },
    {
      id: 3,
      title: "Courses & Certifications",
      icon: Award
    },
    {
      id: 4,
      title: "1-On-1 Training",
      icon: User
    },
    {
      id: 5,
      title: "Penetration Testing",
      icon: Shield
    },
    {
      id: 6,
      title: "Workshops & Webinars",
      icon: UsersRound
    },
    {
      id: 7,
      title: "Career Mentorship",
      icon: Star
    },
    {
      id: 8,
      title: "Web App Development",
      icon: Laptop
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading with underline */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2">Services We Deliver</h2>
        <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id} 
            className="flex flex-col items-center justify-center p-8 border border-gray-200 hover:shadow-md transition-shadow rounded-md"
          >
            <service.icon size={32} className="mb-4" />
            <h3 className="text-lg font-bold text-center">
              {service.title.includes(" & ") ? (
                <>
                  {service.title.split(" & ")[0]} & <br />
                  {service.title.split(" & ")[1]}
                </>
              ) : (
                service.title
              )}
            </h3>
          </Card>
        ))}
      </div>
    </div>
  );
}