import { Play, Search, Star } from "lucide-react";
import { useState } from "react";
import womenlearning from "../assets/women-using-laptop.jpg";
import dummyVideo from "../assets/vegeta.mp4";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-center gap-10 items-center w-full h-full">
          <div className="flex w-1/3 flex-col gap-7">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-black" />
                ))}
                <Star className="h-5 w-5 fill-gray-300 text-gray-300" />
              </div>
              <span className="text-sm text-gray-700">
                Trusted by over 4,332 students
              </span>
            </div>

            <h1 className="text-6xl font-semibold">
              Learn Design <br /> with Nia Matos
            </h1>
            <div className="w-4/5">
              <p className="text-gray-600 text-sm leading-8">
                Get your blood tests delivered at let home collect sample from
                the victory of the managments that supplies best design system
                guidelines ever.
              </p>
            </div>

            <div className="flex justify-between items-center bg-gray-300/20 w-4/5 px-4 rounded-md">
              <input
                type="text"
                className="py-3 px-2 w-full"
                placeholder="Search Course Name"
              />
              <button className="cursor-pointer">
                <Search />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">Sponsored by:</span>
              <div className="text-gray-300 flex justify-center items-center gap-6 font-medium">
                <span>PayPal</span>
                <span>Google</span>
                <span>Dropbox</span>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex justify-center items-center h-[60%]">
            <div className="relative h-full w-full">
              {!isVideoPlaying ? (
                <>
                  <img
                    src={womenlearning}
                    alt="Woman using laptop"
                    className="object-cover rounded-md h-full w-full"
                  />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer bg-gray-300/70 p-4 rounded-full hover:scale-110 transition-all"
                  >
                    <Play className="h-8 w-8 fill-white text-white" />
                  </button>
                </>
              ) : (
                <div className="h-full w-full">
                  <video
                    className="h-full w-full rounded-md object-cover"
                    controls
                    src={dummyVideo}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
