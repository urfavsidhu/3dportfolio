import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student</h4>
                <h5>PSIT, Kanpur</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Started my Bachelor of Computer Applications, building a
              strong foundation in programming with C/C++ and core
              computer science concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Taught Full Stack Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Learning and building full-stack web applications with React,
              Node.js and MongoDB, shipping real projects to sharpen my
              skills ahead of graduating in 2028.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
