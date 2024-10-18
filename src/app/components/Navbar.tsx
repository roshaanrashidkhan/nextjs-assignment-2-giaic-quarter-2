import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="h-[100px] max-w-full">
        <nav className="flex gap-5 h-full items-center justify-between max-w-[80%] mx-auto">
            <div className="logo">
                <Image src="/svg/Logo.svg" width="150" height="100" alt="logo" />
            </div>
            <div className="links flex gap-6 items-center">
               <Link href="/" className="hover:underline">Home</Link> 
               <Link href="/" className="hover:underline">Features</Link> 
               <Link href="/" className="hover:underline">Community</Link> 
               <Link href="/" className="hover:underline">Blog</Link> 
               <Link href="/" className="hover:underline">Pricing</Link> 
               <Link href="/" className="bg-[#4caf4f] hover:opacity-90 px-5 py-3 rounded-sm text-white flex items-center gap-2">Register Now <Image className="to-white" src="/svg/right-arrow.svg" width="20" height="20" alt="right-arrow" /></Link> 
            </div>
        </nav>
      </header>
    </>
  );
}
