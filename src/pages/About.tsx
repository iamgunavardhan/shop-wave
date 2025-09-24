import Container from "../components/ui/Container";

export default function About(){
    return(
        <Container>
            <div className="bg-gray-50 min-h-screen">
               {/* Hero */}
            <section className="bg-indigo-600 text-white py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-lg lg:text-xl text-indigo-200">
                    Building a modern shopping experience for everyone, everywhere.
                </p>
                </div>
            </section>

      {/* Mission */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
                Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                At <span className="font-semibold">ShopEase</span>, we believe
                shopping should be simple, enjoyable, and accessible to everyone. Our
                mission is to connect customers with high-quality products at
                affordable prices, all while delivering exceptional service and
                seamless digital experiences.
                </p>
            </section>

      {/* Story */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                    alt="Team working"
                    className="rounded-xl shadow-lg"
                    />
                </div>
                <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    Our Story
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                    Founded in 2023, ShopEase started as a small project with a big
                    dream: to bring people closer to the products they love through
                    technology. With a passion for design and innovation, we’ve built
                    a platform that puts customers first.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                    Today, our team continues to grow, driven by a shared goal:
                    redefining ecommerce by blending style, convenience, and trust.
                    </p>
                </div>
                </div>
            </section>
            </div>
        </Container>
    )
}