const Home = () => {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Welcome to KIET University</h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">Empowering minds, shaping futures. Discover excellence in education at KIET.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                        Explore Programs
                    </button>
                </div>
            </section>
            <section className="py-16 px-4 bg-gray-100 text-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose KIET?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Quality Education</h3>
                            <p>Top-notch faculty and modern curriculum designed for real-world success.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Innovation</h3>
                            <p>Cutting-edge research and technology integration in every program.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">Community</h3>
                            <p>A vibrant campus life and diverse community fostering growth.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;