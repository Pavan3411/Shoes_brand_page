const HeroSection = () => {
    return <main className="hero container">
        <div className="Hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>At Nike, we're dedicated to delivering unparalleled comfort and style. Because your feet deserve the absolute best in every step</p>
            <div className="hero-button">
                <button>
                    Shop Now</button>
                    <button className="secondary-button">
                        Category
                    </button>
            </div>
            <div className="shopping">
                <p>
                    Also Available On
                </p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="Hero-image">
        <img src="/images/shoe_image.png" alt="shoe-logo" />
            
        </div>
    </main>
}
export default HeroSection;