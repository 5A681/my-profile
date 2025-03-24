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
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </div>
      </nav>
    </div>
  );
}
