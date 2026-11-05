
function Navbar() {
  return (
    <nav className="navbar">

      {/* Website Logo */}
      <div className="logo">
        LOGO
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
        />

        <button>
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">

        <a href="#community">
          Community
        </a>

        <button className="login-btn">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
