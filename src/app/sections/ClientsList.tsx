import Heading from "../components/Heading";
import Icons from "../components/Icons";

type Icon = { name: string; src: string };

export default function ClientsList() {
  const icons: Icon[] = [
    { name: "icon1", src: "/svg/client-icon-1.svg" },
    { name: "icon2", src: "/svg/client-icon-2.svg" },
    { name: "icon3", src: "/svg/client-icon-3.svg" },
    { name: "icon4", src: "/svg/client-icon-4.svg" },
    { name: "icon5", src: "/svg/client-icon-5.svg" },
    { name: "icon6", src: "/svg/client-icon-6.svg" },
    { name: "icon7", src: "/svg/client-icon-7.svg" },
  ];

  const heading:string = "Our Clients";
  const paragraph:string = "We have been working with fortune 500+ clients";
  return (
    <section className="w-full">
      <div className="w-[80%] py-8 flex flex-col gap-10 mx-auto">
        <Heading heading={heading} paragraph={paragraph} />
        <div className="clientsList flex items-center justify-between gap-5">
          <Icons icons={icons} width={50} height={50}/>
        </div>
      </div>
    </section>
  );
}
