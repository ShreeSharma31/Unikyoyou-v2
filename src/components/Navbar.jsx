function Navbar({ searchQuery, onSearchChange, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <>
      <div className="announcement-bar">
        <span className="announcement-dot" aria-hidden="true" />
        Your campus marketplace is just getting started
      </div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="UniKoyo home">
          <span className="brand-mark" aria-hidden="true">u</span>
          <span>unikoyo<span className="brand-period">.</span></span>
        </a>

        <form className="header-search" onSubmit={handleSubmit} role="search">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            aria-label="Search marketplace items"
            type="search"
            placeholder="Find books, gadgets, room essentials..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <nav className="header-actions" aria-label="Main navigation">
          <a className="nav-community" href="#community">Community</a>
          <a className="sell-button" href="#sell"><span aria-hidden="true">＋</span> Sell an item</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
