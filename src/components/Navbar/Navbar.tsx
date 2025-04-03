import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <div id="name">Phongphat Srithong</div>
          <div id="role">Developer</div>
        </div>
        <div id="navbarlist">
          <li>
            <a href="#" style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "#2d3436",
              padding: "0 15px",
              borderRight: "2px solid #dfe6e9"
            }}>Resume</a>
          </li>
          <li>
            <a href="#" style={{
              fontSize: "1.1rem", 
              fontWeight: 500,
              color: "#2d3436",
              padding: "0 15px",
              borderRight: "2px solid #dfe6e9"
            }}>Projects</a>
          </li>
          <li>
            <a href="#" style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "#2d3436",
              padding: "0 15px"
            }}>Contacts</a>
          </li>
        </div>
      </nav>
    </div>
  );
}
