import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="profile">
        <div className="profile-image"></div>
        <div className="description">
          <div className="about">
            <h1 style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#2d3436",
              marginBottom: "1rem",
              letterSpacing: "0.1em"
            }}>Hello!</h1>
            <h3 style={{
              fontSize: "1.2rem", 
              fontWeight: "600",
              color: "#636e72",
              marginBottom: "1.5rem",
              letterSpacing: "0.05em"
            }}>A Bit About Me</h3>
            <p style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#636e72",
              fontWeight: "400",
              letterSpacing: "0.02em",
              maxWidth: "800px",
              marginBottom: "2rem"
            }}>
              I'm a passionate software developer with 3 years of experience crafting elegant solutions
              to complex problems. My expertise spans multiple programming languages including Golang,
              Java, JavaScript, TypeScript, C#.Net and Python. I love building robust and scalable
              applications while continuously learning new technologies to stay at the forefront of
              software development.
            </p>
            <div className="about-list">
             <a href="#">
               <div className="circle" id="resume">
                Resume
              </div>
             </a>
             <a href="#">
               <div className="circle" id="project">
                Projects
              </div>
             </a>
              <a href="#">
                <div className="circle" id="contact">
                Contact
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
