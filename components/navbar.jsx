import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 flex justify-between">
      <button className="font-bold ml-5 text-xl">
        <Link href="/">
        DarthNews
        </Link>
      </button>
      <div className="flex mr-5 gap-5">
        <Link href="/" className="font-semibold hover:scale-110 transition-all duration-150">Home</Link>
        <Link href="/posts" className="font-semibold hover:scale-110 transition-all duration-150">Posts</Link>
        <Link href="/contact" className="font-semibold hover:scale-110 transition-all duration-150">Contact</Link>
      </div>
    </div> 
    
  )
}
