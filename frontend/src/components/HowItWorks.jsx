export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Set disbursement Instructions",
      desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
    {
      id: 2,
      title: "Assembly retrieves funds from your account",
      desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
    {
      id: 3,
      title: "Assembly initiates disbursement",
      desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
    {
      id: 4,
      title: "Customer receives funds payment",
      desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
  ];
  return (
    <>
      <div className="h-screen w-full py-16 flex flex-col items-center px-10 gap-40">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="font-light text-orange-500">WHAT'S THE FUNCTION</p>
          <h1 className="font-semibold text-4xl">Let's see how it works</h1>
        </div>
        <div className="flex justify-around items-center gap-3">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col w-[15%] gap-5">
              <h1 className="font-semibold p-4 rounded-full shadow w-fit">
                0{step.id}
              </h1>
              <h2 className="font-medium">{step.title}</h2>
              <p className="text-xs leading-5">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
