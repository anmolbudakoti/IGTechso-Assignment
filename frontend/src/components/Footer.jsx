import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="py-16 border-t border-gray-300">
        <div className="flex justify-around items-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium mb-4">About Us</h1>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Support Center
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Customer Support
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              About Us
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Copyright
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Popular Campaign
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-medium mb-4">Our Information</h1>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Return Policy
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Terms & Conditions
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Site Map
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Store Hours
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-medium mb-4">My Account</h1>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Press inquiries
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Social media
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Directories
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Images & B-roll
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Permissions
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-medium mb-4">Policy</h1>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Application security
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Software Principles
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Directories
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Unwanted software policy
            </Link>
            <Link className="text-sm text-gray-500 hover:text-black" to={"/"}>
              Responsible supply chain
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
