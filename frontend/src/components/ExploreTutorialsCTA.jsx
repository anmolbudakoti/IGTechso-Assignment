export default function ExploreTutorialsCTA() {
  const cardsData = [
    {
      id: 1,
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      review: 1243,
      students: 1542,
    },
    {
      id: 2,
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      image:
        "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      review: 1243,
      students: 1542,
    },
    {
      id: 3,
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      review: 1243,
      students: 1542,
    },
    {
      id: 4,
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      image:
        "https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      review: 1243,
      students: 1542,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center w-full py-16">
      <div className="flex flex-col gap-5 w-2/5 text-center items-center">
        <p className="font-light text-orange-500">FREE TUTORIAL</p>
        <h1 className="font-semibold text-4xl">
          More than thousand of free tutorial upload every weeks
        </h1>
        <p className="text-sm leading-10">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="bg-orange-300/30 w-fit py-2 px-4 text-orange-500 font-medium rounded-md cursor-pointer">
          Explore details
        </button>
      </div>
    </div>
  );
}
