export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title"> <strong>Hey 👋 ,
            <br />  I'm ILHAME KADDI  </strong>  </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer 
            </h1>
            <p className="hero--section-description">

            Passionate full-stack developer  <br />creating innovative web solutions.
            </p>

          </div>     
          <button
          className="btn btn-primary"
  onClick={() => (window.location.href = 'mailto:ilhamkaddi2004@gmail.com')}
>
  Get In Touch
</button>

        </div>
        <div className="hero--section--img">
          <img src="/images/ilham-photo.png" alt="Hero Section"  style={{ width: '500px', height: '500px' }} />

        </div>

      </section>
    );

  }