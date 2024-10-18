import Image from "next/image";
import Icons from "../components/Icons";
import Link from "next/link";

type ImageList = {
    name: string,
    src: string
}

export default function ClientReviews() {

  const imageList: ImageList[] = [
    { name: "icon1", src: "/svg/client-icon-1.svg" },
    { name: "icon2", src: "/svg/client-icon-2.svg" },
    { name: "icon3", src: "/svg/client-icon-3.svg" },
    { name: "icon4", src: "/svg/client-icon-4.svg" },
    { name: "icon5", src: "/svg/client-icon-5.svg" },
    { name: "icon6", src: "/svg/client-icon-6.svg" },
  ];

  return (
    <section className="w-full bg-gray-100">
      <div className="w-[80%] flex py-10 gap-5 items-center mx-auto">
        <div>
          <Image src="/svg/tesla-image.svg" width="1800" height="500" alt="tesla-icon" />
        </div>
        <aside className="flex flex-col gap-3 justify-end text-justify">
            <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque nobis officia aliquam, minima sequi itaque cum quidem animi? Nam ad delectus unde deserunt vel quisquam, laboriosam, ea, doloremque distinctio quos aliquam eius eligendi aliquid. Unde laboriosam eaque, hic voluptatum nam error beatae eos consequuntur facere nostrum alias quo blanditiis totam modi a placeat, vitae dolore minus. Quod recusandae, quo suscipit sit temporibus deleniti maiores.</p>
            <h5 className="text-[#4caf4f] text-lg">Tim Miller</h5>
            <small className="text-gray-500">British Dragon Boat Racing Association</small>
            <div className="flex items-center gap-5 justify-between">
                <Icons width={45} height={40} icons={imageList} />
                <button className="px-4 py-4 text-[#4caf4f] hover:opacity-80"><Link className="flex items-center justify-center gap-3 font-bold" href="/">Meet All Customers <Image src="/svg/right-arrow-green.svg" width="20" height="30" alt="right-arrow-icon" /></Link></button>
            </div>
        </aside>
      </div>
    </section>
  );
}
