import Image from "next/image";

type IProps = {
  name: string;
  alt: string;
  src: string;
};

type Props = {
  items: IProps[];
  width: number;
  height: number;
  heading: string;
  smallText: string;
};

export default function CompanyStats({
  items,
  width,
  height,
  heading,
  smallText,
}: Props) {
  return (
    <>
      {items.map((item: IProps) => (
        <div key={item.name} className="grid grid-cols-2">
          <Image
            src={item.src}
            width={`${width}`}
            height={`${height}`}
            alt={item.alt}
          />
          <div className="rightText">
            <h5>{heading}</h5>
            <small>{smallText}</small>
          </div>
        </div>
      ))}
    </>
  );
}
