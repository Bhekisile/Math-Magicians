function NavBar() {
  const headingStyle = { fontSize: '48px' };
  return (
    <div>
      <nav className="nav-bar">
        <span style={headingStyle}>Math Magicians</span>
        <ul>
          <li>Home</li>
          <li>Calculator</li>
          <li>Quote</li>
        </ul>
      </nav>
    </div>

  );
}

export default NavBar;
