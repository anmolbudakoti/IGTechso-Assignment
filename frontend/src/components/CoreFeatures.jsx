import { ArrowDownCircle, LucideArrowDown } from "lucide-react";

export default function CoreFeatures() {
  return (
    <>
      <div className="flex justify-center items-center w-full py-16">
        <div className="max-w-7xl mx-auto px-8 flex justify-center items-center gap-12 relative">
          <div className="grid grid-cols-2 grid-rows-5 gap-12 p-2">
            <div className="shadow row-start-2 row-span-2 flex flex-col items-center justify-center gap-2 h-48 rounded-md hover:scale-110 transition-transform hover:shadow-xl">
              <h1 className="text-4xl text-yellow-500 font-semibold">80K+</h1>
              <p className="text-xs text-gray-600 w-3/5 text-center">
                We have more than students
              </p>
            </div>
            <div className="shadow row-start-4 row-span-2 flex flex-col items-center justify-center gap-2 h-48 rounded-md hover:scale-110 transition-transform hover:shadow-xl">
              <h1 className="text-4xl text-pink-500 font-semibold">90+</h1>
              <p className="text-xs text-gray-600 w-3/5 text-center">
                Daily updated blog post maintain
              </p>
            </div>
            <div className="shadow row-start-1 row-span-2 flex flex-col items-center justify-center gap-2 h-48 rounded-md hover:scale-110 transition-transform hover:shadow-xl">
              <h1 className="text-4xl text-orange-500 font-semibold">150+</h1>
              <p className="text-xs text-gray-600 w-3/5 text-center">
                Free online tutorials videos available
              </p>
            </div>
            <div className="shadow row-start-3 row-span-2 flex flex-col items-center justify-center gap-2 h-48 rounded-md hover:scale-110 transition-transform hover:shadow-xl">
              <h1 className="text-4xl text-purple-400 font-semibold">& 3M</h1>
              <p className="text-xs text-gray-600 w-3/5 text-center">
                Job posted everydays with qualification
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-2/5">
            <p className="font-light text-orange-500">CORE FEATURES</p>
            <h1 className="font-semibold text-4xl">
              Smart Jackpots that you may love this anytime & anywhere
            </h1>
            <p className="text-sm leading-8">
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>
            <button className="bg-orange-300/30 w-fit py-2 px-4 text-orange-500 font-medium rounded-md cursor-pointer">
              Explore details
            </button>
          </div>
          <button className="absolute bottom-5 left-1/2 animate-bounce bg-gray-300/30 p-2 rounded-full z-50">
            <LucideArrowDown className="h-8 w-8 text-gray-500" />
          </button>
        </div>
      </div>
    </>
  );
}
