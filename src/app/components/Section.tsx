import Image from "next/image";
import Button from "./Button";

type Props = {
    name: string,
    src: string,
    heading: string,
    paragraph: string,
    buttonText: string,
    width: number,
    height: number
}

export default function Section({name, src, heading, paragraph, buttonText, width, height}: Props) {
    return (
        <>
            <div>
                <Image src={src} width={`${width}`} height={`${height}`} alt={name} />
            </div>
            <aside className="flex flex-col gap-5 pl-32">
                <h4 className="text-3xl font-bold text-gray-600">{heading}</h4>
                <p className="text-gray-500 text-justify">{paragraph}</p>
                <Button buttonText={buttonText} />
            </aside>
        </>
    )
}