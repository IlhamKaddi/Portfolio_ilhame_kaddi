import '@fortawesome/fontawesome-free/css/all.min.css';

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="/images/ilhama.png" alt="About Me"    style={{ width: '500px', height: '500px' }} />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            {/* <p className="section--title">About</p> */}
            <h1 className="skills-section--heading">  <span className="aboutMe">  About Me</span></h1>
            <p className="hero--section-description">
            Hi, I'm Ilhame, a passionate full-stack developer from Morocco.  <br /> 
            I specialize in creating responsive and scalable web applications using modern technologies. <br />
            For more details downlaodd my  CV  
            </p>
       <a
  href="/Cv_Kaddi_Ilhame (1).pdf"
  download
  className="btn btn-primary"
>
 Download CV  <i className="fas fa-download"></i>
</a>

          </div>
        </div>

      </section>
    );
  }
