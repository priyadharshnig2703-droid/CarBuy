
function Main() {
    return (
        <main className="p-6">

            {/* Image + Text */}
            <div className="flex flex-col md:flex-row gap-6">

                {/* Left side */}
                <div className="md:w-1/2 bg-gray-200 h-64 flex items-center justify-center">
                    <p>Large Image / Card</p>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-4">
                        Welcome to Our Website
                    </h2>

                    <p className="mb-4">
                        This is the main content area of the webpage.
                    </p>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Learn More
                    </button>
                </div>

            </div>

            {/* Bottom section */}
            <div className="mt-6 bg-gray-200 p-6">
                <h2 className="text-2xl font-bold">
                    Bottom Section
                </h2>

                <p>
                    This is the full-width section at the bottom.
                </p>
            </div>

        </main>
    );
}

export default Main;
