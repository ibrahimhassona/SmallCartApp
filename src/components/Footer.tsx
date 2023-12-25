import Link from "next/link"

const Footer = () => {
  return (
    <footer className="padding-container h-[50px] w-full bg-gray-700 text-gray-300 flex items-center justify-center">
           <p className="text-sm">&copy; 2023 Your <Link className="text-white" href='/'>Pizza Hub</Link>. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer