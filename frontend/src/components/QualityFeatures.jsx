import { ChevronLeft, ChevronRight, Eye, Play, Star } from "lucide-react";
import { useState } from "react";

export default function QualityFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const qualityTutorials = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      rating: 5.0,
      reviews: 392,
      students: 2538,
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title:
        "Create multiple artboard by using figma prototyping tools development",
      rating: 4.5,
      reviews: 524,
      students: 3532,
      image:
        "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      rating: 5.0,
      reviews: 392,
      students: 1037,
      image:
        "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title:
        "Professional graphic design tutorial full course with exercise file",
      rating: 5.0,
      reviews: 392,
      students: 2538,
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Advanced UI/UX design patterns for modern web applications",
      rating: 4.8,
      reviews: 256,
      students: 1845,
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title:
        "Complete guide to responsive web design with CSS Grid and Flexbox",
      rating: 4.9,
      reviews: 678,
      students: 4321,
      image:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % qualityTutorials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + qualityTutorials.length) % qualityTutorials.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-light mb-2">QUALITY FEATURES</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Tutorials that people love most
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              }}
            >
              {qualityTutorials.map((tutorial, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <img
                        src={tutorial.image}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute top-1/3 left-[40%] cursor-pointer bg-gray-300/70 p-4 rounded-full hover:scale-110 transition-all">
                        <Play className="h-8 w-8 fill-white text-white" />
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= tutorial.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {tutorial.rating} ({tutorial.reviews} reviews)
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>
                          {tutorial.students.toLocaleString()} students watched
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border border-gray-200 rounded-full p-4 transition-all hover:scale-110 cursor-pointer"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border border-gray-200 rounded-full p-4 transition-all hover:scale-110 cursor-pointer"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {qualityTutorials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                  index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
