import Image from "next/image";
import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 w-full">
      <div className="w-[80%] grid grid-cols-2 py-20 items-center justify-between mx-auto">
        <div className="flex flex-col gap-5">
          <div className="heading flex flex-col gap-3">
            <h1 className="text-5xl font-bold text-gray-600">
              Lessons and Insights
            </h1>
            <h1 className="text-[#4caf4f] text-5xl font-bold">from 8 years</h1>
          </div>
          <p className="text-gray-500">
            Where to grow business as a photographer: site or social media?
          </p>
          <Button buttonText="Register" />
        </div>
        <aside className="flex justify-end">
          <Image
            src="/png/hero-image.png"
            width="350"
            height="100"
            alt="hero-image"
          />
        </aside>
      </div>
    </section>
  );
}
