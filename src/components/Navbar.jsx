import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black border-b border-purple-600 sticky top-0 z-50">
      <h1 className="text-purple-400 text-2xl font-bold">CRYPTICSploit</h1>
      <ul className="flex space-x-6 text-white text-lg">
        <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
        <li><Link to="/cv" className="hover:text-purple-400">CV</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
