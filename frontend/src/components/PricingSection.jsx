import { CheckCircle2, XCircle } from "lucide-react";

export default function PricingSection() {
  return (
    <>
      <div className="py-16">
        <div className="px-8 flex flex-col items-center justify-center gap-10">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-light mb-2">PRICING PLAN</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Choose your pricing policy
            </h2>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 w-fit bg-gray-100 rounded-lg p-2">
              <button className="px-6 py-2 cursor-pointer bg-white rounded-md">
                Monthly Plan
              </button>
              <button className="px-6 py-2 cursor-pointer">Annual Plan</button>
            </div>
          </div>

          <div className="flex justify-center gap-10 items-center w-full h-full">
            <div className="border border-gray-300 p-8 rounded-md flex justify-between flex-col gap-10 w-1/3 h-[34rem]">
              <div>
                <h2 className="font-medium text-lg">Free Plan</h2>
                <h3 className="text-sm text-gray-500">
                  For Small teams or office
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Ultimate access to all course, exercises and assessments
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Free acess for all kind of exercise corrections with
                    downloads.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Total assessment corrections with free download access
                    system
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-8 h-8 text-white fill-gray-400" />
                  <p className="text-sm text-gray-500">
                    Unlimited download of courses on the mobile app contents
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-8 h-8 text-white fill-gray-400" />
                  <p className="text-sm text-gray-500">
                    Download and print courses and exercises in PDF
                  </p>
                </div>
              </div>

              <div className=" flex justify-center items-center">
                <button className="px-6 py-2 bg-orange-300/20 text-orange-400 font-medium rounded-md text-sm">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="border border-gray-300 p-8 rounded-md flex justify-between flex-col gap-10 w-1/3 h-[34rem]">
              <div>
                <p className="text-white bg-orange-400 w-fit p-2 rounded-md text-sm mb-3">
                  Recommended
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-medium text-lg">Premium</h2>
                    <h3 className="text-sm text-gray-500">
                      For startup enterprise
                    </h3>
                  </div>
                  <div>
                    <h2 className="text-gray-500 text-sm">Starting from</h2>
                    <h3 className="text-green-400 text-2xl font-semibold">
                      49.99/mo
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Ultimate access to all course, exercises and assessments
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Free acess for all kind of exercise corrections with
                    downloads.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Total assessment corrections with free download access
                    system
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Unlimited download of courses on the mobile app contents
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-white fill-green-400" />
                  <p className="text-sm text-gray-500">
                    Download and print courses and exercises in PDF
                  </p>
                </div>
              </div>

              <div className=" flex justify-center items-center">
                <button className="px-6 py-2 bg-orange-300/20 text-orange-400 font-medium rounded-md text-sm">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
