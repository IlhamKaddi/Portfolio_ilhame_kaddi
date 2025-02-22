import data from "../../data/index.json";

export default function MySkills() {

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        {/* <p className="section--title"></p> */}
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container">
        {data.skils.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain"      style={{
        width: '300px',
        height: '250px',
       
      }}/>
            </div>
            <div className="skills--section--card--content">
              <p className="skills--section--description">{item.title}</p>
              {/* <p className="skills--section--description">{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}