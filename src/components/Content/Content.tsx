import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="profile">
        <div className="profile-image"></div>
        <div className="description">
          <div className="about">
            <h1>Hello</h1>
            <h3>A Bit About Me</h3>
            <p>
              I'm software developer. Experinced 3 years. My programming
              languages are Golang, Java, JavaScript, TypeScript C#.Net and
              Python{" "}
            </p>
            <div className="about-list">
              <div className="circle" id="resume">
                Resume
              </div>
              <div className="circle" id="project">
                Projects
              </div>
              <div className="circle" id="contact">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
