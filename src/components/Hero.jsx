function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-star">✳</span> THE MARKETPLACE MADE FOR CAMPUS</p>
        <h1>Good finds.<br /><span>Good people.</span></h1>
        <p className="hero-description">
          Buy, sell and pass things on with people right around you. Your next favourite find is closer than you think.
        </p>
        <a className="hero-cta" href="#discover">Explore the marketplace <span aria-hidden="true">↘</span></a>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true">
            <span>J</span><span>M</span><span>A</span><span>+</span>
          </div>
          <p><strong>Made for students</strong><br />Built around your campus life</p>
        </div>
      </div>

      <div className="hero-art" aria-label="A collection of student marketplace finds">
        <div className="hero-sun" />
        <div className="hero-sticker sticker-top">CAMPUS<br />FINDS <span>↗</span></div>
        <figure className="hero-photo photo-main">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85" alt="Laptop and study essentials on a desk" />
        </figure>
        <figure className="hero-photo photo-small">
          <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=85" alt="A stack of books ready for a new reader" />
        </figure>
        <div className="hero-sticker sticker-bottom"><span aria-hidden="true">✦</span> Pass it on.</div>
        <span className="art-sparkle sparkle-one" aria-hidden="true">✳</span>
        <span className="art-sparkle sparkle-two" aria-hidden="true">✦</span>
      </div>
    </section>
  );
}

export default Hero;
