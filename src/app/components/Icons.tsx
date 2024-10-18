import Image from "next/image"

type StringObject = {
    name: string,
    src: string
}

type Props = {
    icons: StringObject[], 
    width: number,
    height: number,
}

export default function Icons({icons, width, height}:Props) {
    return (
        <>
        {icons.map((icon: StringObject) => (
              <div key={icon.name}>
                <Image src={icon.src} width={`${width}`} height={`${height}`} alt={icon.name} />
              </div>
        ))}
        </>
    );
}