import {
  CheckCircle2Icon,
  ChevronDown,
  ChevronUp,
  Eye,
  Play,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function PopularCourses({sectionRef}) {
  const [openDetails, setOpenDetails] = useState(null);
  const courses = [
    {
      title:
        "Professional graphic design tutorial full course with exercise file",
      rating: 5.0,
      reviews: 392,
      students: 2538,
      videoClasses: 7,
      hours: 4,
      features: [
        "How to reduce file pixel dimensions without losing quality",
        "How to make logo pixel perfect with different extension",
        "Create vector file from rasterize layer styles",
        "Make color gradient with photoshop build-in tools",
      ],
    },
    {
      title: "Become ultimate photoshop expert within 30 days",
      rating: 5.0,
      reviews: 392,
      students: 2538,
      videoClasses: 7,
      hours: 4,
      features: [
        "How to reduce file pixel dimensions without losing quality",
        "How to make logo pixel perfect with different extension",
        "Create vector file from rasterize layer styles",
        "Make color gradient with photoshop build-in tools",
      ],
    },
    {
      title: "After effects animation tutorial with photoshop documents",
      rating: 5.0,
      reviews: 392,
      students: 2538,
      videoClasses: 7,
      hours: 4,
      features: [
        "How to reduce file pixel dimensions without losing quality",
        "How to make logo pixel perfect with different extension",
        "Create vector file from rasterize layer styles",
        "Make color gradient with photoshop build-in tools",
      ],
    },
    {
      title: "Adobe illustrator vector art design mockup",
      rating: 5.0,
      reviews: 392,
      students: 2538,
      videoClasses: 7,
      hours: 4,
      features: [
        "How to reduce file pixel dimensions without losing quality",
        "How to make logo pixel perfect with different extension",
        "Create vector file from rasterize layer styles",
        "Make color gradient with photoshop build-in tools",
      ],
    },
  ];

  function openDetailsByIndex(index) {
    setOpenDetails(openDetails === index ? null : index);
  }
  return (
    <>
      <div ref={sectionRef} className="h-screen py-16 flex justify-center items-center">
        <div className="max-w-7xl flex flex-col items-center gap-4">
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <p className="font-light text-orange-500">QUALITY FEATURES</p>
            <h1 className="font-semibold text-4xl">Popular Designing Course</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border border-gray-100 shadow rounded-lg transition-all"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => openDetailsByIndex(index)}
                >
                  <div className="flex justify-around items-center gap-10">
                    <button className="cursor-pointer bg-yellow-300/10 p-4 rounded-full hover:scale-110 transition-all">
                      <Play className="h-5 w-5 fill-orange-400 text-orange-400" />
                    </button>
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= course.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-600 ml-2">
                          {course.rating} ({course.reviews} reviews)
                        </span>
                        <div className="flex items-center text-xs text-gray-500 ml-2">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>
                            {course.students.toLocaleString()} students watched
                          </span>
                        </div>
                      </div>
                      <h2 className="font-semibold">{course.title}</h2>
                      <p className="text-xs text-gray-500">
                        Get your tutorials delivered at let home collect sample
                        from the victory of the managments.
                      </p>
                    </div>
                    <button className="text-sm bg-emerald-400 p-2 rounded-md text-white cursor-pointer">
                      7 Video Classes <span className="font-light">|</span> 4
                      hrs
                    </button>
                    {openDetails === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>
                {openDetails === index ? (
                  <div className="grid grid-cols-2 gap-3 w-[90%] ml-auto p-4">
                    {course?.features?.map((feature, index) => (
                      <p
                        className="flex items-center gap-2 text-xs"
                        key={index}
                      >
                        <CheckCircle2Icon className="h-6 w-6 fill-gray-300 text-white" />
                        {feature}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
