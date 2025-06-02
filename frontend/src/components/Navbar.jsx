import { ChevronDown, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-center items-center w-full">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <Crown className="h-8 w-8" />
              <h1 className="text-xl font-bold">Landguru</h1>
            </div>

            <div className="hidden md:flex items-center gap-x-6">
              <Link to={"/"} className="text-gray-800 hover:text-black">
                Home
              </Link>
              <Link
                to={"/"}
                className="flex justify-center items-center gap-1 text-gray-800 hover:text-black"
              >
                Advertise <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                to={"/"}
                className="flex justify-center items-center gap-1 text-gray-800 hover:text-black"
              >
                Supports <ChevronDown className="h-4 w-4" />
              </Link>
              <Link to={"/"} className="text-gray-800 hover:text-black">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <button className="bg-orange-300/30 text-orange-400 font-semibold px-4 py-2 rounded-lg cursor-pointer">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
