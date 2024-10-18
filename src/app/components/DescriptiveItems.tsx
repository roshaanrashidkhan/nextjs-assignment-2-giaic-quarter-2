import Image from "next/image";

type ItemsObject = {
    name: string,
    src: string,
    heading: string,
    paragraph: string
}

type Props = {
    items: ItemsObject[],
    width: number,
    height: number
}

export default function DescriptiveItems({items, width, height}: Props) {
    return (
        <div className="items flex justify-between items-center gap-7">
            {items.map((item: ItemsObject) => (
            <div key={item.name} className="item flex gap-4 flex-col items-center">
                <Image src={item.src} width={`${width}`} height={`${height}`} alt={item.name} />
                <h3 className="text-2xl px-16 text-center font-bold text-gray-600">{item.heading}</h3>
                <p className="text-gray-500 px-10 text-justify text-last-center">{item.paragraph}</p>
            </div>
            ))}
        </div>
    )
}