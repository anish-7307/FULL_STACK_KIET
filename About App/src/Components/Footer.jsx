const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">&copy; 2024 KIET University. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                    <a href="#terms" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                    <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;