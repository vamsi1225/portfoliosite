'use client';

export default function DummySection() {
    return (
        <section className="w-full my-16 sm:my-16 lg:my-20">
            <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">Hey Viewer</h2>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    More work is on the way. I have just started to develop my web portfolio. 
                </p>
            </div>

            <div className="bg-gray-700 h-64 rounded-md flex items-center justify-center text-white">
                Thankyou for visiting the site
            </div>
        </section>
    );
}
