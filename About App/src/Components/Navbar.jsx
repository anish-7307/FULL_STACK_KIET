import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-blue-400 text-xl font-bold">KIET University</h1>
                    </div>
                    <div className="flex space-x-8">
                        <Link to="/" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;