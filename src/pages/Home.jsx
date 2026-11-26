import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const categories = ["All items", "Books", "Electronics", "Home & living", "Clothing", "Sports"];

const products = [
  { id: 1, title: "The design of everyday things", category: "Books", price: 18, condition: "Like new", seller: "Maya R.", campus: "North Campus", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85", alt: "Stack of colorful books" },
  { id: 2, title: "Wireless headphones", category: "Electronics", price: 42, condition: "Gently used", seller: "Jordan K.", campus: "West Hall", image: "https://images.unsplash.com/photo-150 headphone?auto=format&fit=crop&w=700&q=85", alt: "Wireless headphones" },
  { id: 3, title: "Ceramic desk lamp", category: "Home & living", price: 24, condition: "Like new", seller: "Sam T.", campus: "North Campus", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85", alt: "Warm desk lamp" },
  { id: 4, title: "Everyday canvas tote", category: "Clothing", price: 12, condition: "Good", seller: "Riley P.", campus: "East Quad", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85", alt: "Canvas tote bag" },
  { id: 5, title: "Instant film camera", category: "Electronics", price: 56, condition: "Good", seller: "Alex D.", campus: "West Hall", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85", alt: "Camera on a table" },
  { id: 6, title: "Soft knit throw blanket", category: "Home & living", price: 20, condition: "Like new", seller: "Nina S.", campus: "South House", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85", alt: "Cozy living room with a soft throw" },
  { id: 7, title: "Intro to psychology textbook", category: "Books", price: 15, condition: "Good", seller: "Chris L.", campus: "East Quad", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85", alt: "Open book on a table" },
  { id: 8, title: "Classic court sneakers", category: "Sports", price: 35, condition: "Gently used", seller: "Taylor W.", campus: "North Campus", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85", alt: "Red athletic sneaker" },
];

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <a className="product-image" href="#sell" aria-label={`Learn more about ${product.title}`}>
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="condition-tag">{product.condition}</span>
        <button className="save-button" type="button" aria-label={`Save ${product.title}`} onClick={(event) => event.preventDefault()}>♡</button>
      </a>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{product.title}</h3>
          <p className="product-price">${product.price}</p>
        </div>
        <p className="product-meta"><span>{product.seller}</span><span className="meta-dot">·</span><span>{product.campus}</span></p>
      </div>
    </article>
  );
}

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All items");
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === "All items" || product.category === activeCategory;
      const matchesSearch = !query || `${product.title} ${product.category} ${product.seller} ${product.campus}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function focusListings() {
    document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearch={focusListings} />
      <main>
        <div className="page-shell">
          <Hero />

          <section className="marketplace" id="discover">
            <div className="section-heading">
              <div>
                <p className="section-kicker">A little bit of everything</p>
                <h2>Find your next <span>good thing.</span></h2>
              </div>
              <a className="text-link" href="#sell">See how it works <span aria-hidden="true">↗</span></a>
            </div>

            <div className="marketplace-toolbar">
              <div className="category-list" aria-label="Filter by category">
                {categories.map((category) => (
                  <button
                    className={`category-chip${activeCategory === category ? " active" : ""}`}
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <p className="result-count">{filteredProducts.length} finds nearby</p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="empty-state">
                <span aria-hidden="true">⌕</span>
                <h3>No finds just yet</h3>
                <p>Try a different search or category — there’s always something around campus.</p>
                <button type="button" onClick={() => { setSearchQuery(""); setActiveCategory("All items"); }}>Clear filters</button>
              </div>
            )}
          </section>

          <section className="sell-banner" id="sell">
            <div className="sell-icon" aria-hidden="true">↗</div>
            <div>
              <p className="section-kicker">Your closet called</p>
              <h2>Ready to pass something on?</h2>
              <p>Give your pre-loved things a new home with someone on campus.</p>
            </div>
            <a className="sell-banner-link" href="mailto:hello@unikoyo.com?subject=I%20want%20to%20sell%20on%20UniKoyo">Start selling <span aria-hidden="true">→</span></a>
          </section>

          <section className="community-note" id="community">
            <span className="community-icon" aria-hidden="true">✳</span>
            <p><strong>Good for your wallet. Better for your campus.</strong> Keep useful things in circulation, one student-to-student find at a time.</p>
            <span className="community-note-end">Made for campus life</span>
          </section>
        </div>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">u</span><span>unikoyo<span className="brand-period">.</span></span></a>
        <p>Your campus. Your community.</p>
        <span>© {new Date().getFullYear()} UniKoyo</span>
      </footer>
    </div>
  );
}

export default Home;
