import Link from "next/link"

type Props = {
    buttonText: string
}

export default function Button({buttonText}: Props) {
    return (
        <button className="bg-[#4caf4f] hover:opacity-90 rounded-sm text-white w-28 h-12">
            <Link href="/">{buttonText}</Link>
        </button>
    )
}