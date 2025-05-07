import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentFeedback() {
  const courses = [
    {
      id: 1,
      title: "Ethical Hacking & Cyber Security Mastery",
      image: "/assets/cert.jpg",
      price: "Rs 2499",
      originalPrice: "Rs 6000"
    },
    {
      id: 2,
      title: "Python for Hackers/Coders",
      image: "/assets/cert.jpg",
      price: "Rs 999",
      features: ["Hindi Language", "10+ Projects", "Lifetime Access", "Certificate On Completion"]
    },
    {
      id: 3,
      title: "Free Classes & Resources",
      image: "/assets/cert.jpg",
      instructor: "Nitesh Singh"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading with underline */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Our Most Loved Recorded Courses</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="relative">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-black font-medium">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      0 Week
                    </span>
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}