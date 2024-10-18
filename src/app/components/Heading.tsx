type Props = {
    heading: string,
    paragraph: string
}

export default function Heading({heading, paragraph}: Props) {
    return (
        <div className="px-56 flex flex-col items-center gap-6">
          <h2 className="text-4xl text-center font-bold text-gray-600">{heading}</h2>
          <p className="text-gray-500 text-center">
            {paragraph}
          </p>
        </div>
    )
}