import "./Footer.css";
import "boxicons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <li>
          <div>
            <h1>Contact</h1>
            <h3>085-870-3952</h3>
          </div>
        </li>
        <li>
          <div>
            <h1>Email</h1>
            <h3>heartboxengineer@gmail.com</h3>
          </div>
        </li>
        <li>
          <div>
            <h1>Connect</h1>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </li>
        <li>
          <div>
            <h1>Location</h1>
            <h3>Bangkok, TH</h3>
          </div>
        </li>
      </div>
    </div>
  );
}
