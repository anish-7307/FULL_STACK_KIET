const About = () => {
    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">About KIET University</h1>
                <p className="text-lg text-gray-600">KIET University is a premier educational institution committed to academic excellence, innovation, and holistic development.</p>
            </section>
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">To provide world-class education that fosters critical thinking, creativity, and leadership skills in our students. We strive to create an environment where learning goes beyond the classroom and prepares students for the challenges of tomorrow.</p>
            </section>
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">Engineering & Technology</div>
                    <div className="bg-gray-100 p-4 rounded-lg">Business & Management</div>
                    <div className="bg-gray-100 p-4 rounded-lg">Arts & Humanities</div>
                    <div className="bg-gray-100 p-4 rounded-lg">Science & Research</div>
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="mb-2"><strong>Email:</strong> info@kiet.edu</p>
                    <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 University Road, City, State</p>
                </div>
            </section>
        </div>
    );
};

export default About;