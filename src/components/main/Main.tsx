import { Component } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../responsiveVideo/ResponsiveVideo";
import { data } from "./data";
import "./Main.scss";
class Main extends Component<{}, { currentImage: number; images: string[] }> {
  state = {
    images: data,
    currentImage: 0
  };
  timerID!: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(() => this.changeImages(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeImages() {
    const { images, currentImage } = this.state;
    if (currentImage < images.length - 1) {
      this.setState((prevState) => {
        return { currentImage: prevState.currentImage + 1 };
      });
    } else {
      this.setState(() => {
        return { currentImage: 0 };
      });
    }
  }

  render() {
    const { images, currentImage } = this.state;
    return (
      <>
        <div className="card bg-dark text-white">
          <img
            src={images[currentImage]}
            alt="images"
            className="imageBack card-img"
            width="100%"
            height="100%"
          />
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Link to="/" className="removeDefault">
              <div className="card">
                <img
                  src={images[5]}
                  alt="cleaning images"
                  width="100%"
                  height="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">We Love people that code</h5>
                  <p className="card-text">
                    Computer coding is the use of computer programming languages
                    to give computers and machines a set of instructions on what
                    actions to perform. It’s how humans communicate with
                    machines. It’s what allows us to create computer software
                    like programs, operating systems, and mobile apps.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/" className="removeDefault">
              <div className="card">
                <img
                  src={images[6]}
                  alt="cleaning images"
                  width="100%"
                  height="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Team Raven on the move</h5>
                  <p className="card-text">
                    Team building is about providing the skills, training and
                    resources that your people need, so that they can work in
                    harmony. But, to be truly effective, it needs to be a
                    continual process, embedded into your team and
                    organization's culture. We love to work together as one
                    forever.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/" className="removeDefault">
              <div className="card">
                <img
                  src={images[8]}
                  alt="cleaning images"
                  width="100%"
                  height="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Pets</h5>
                  <p className="card-text">
                    While a pet is generally kept for the pleasure that it can
                    give to its owner, often, especially with horses, dogs, and
                    cats, as well as with some other animals, this pleasure
                    appears to be mutual. Thus, pet keeping can be described as
                    a symbiotic relationship, one that benefits both animals and
                    human beings. As the keeping of pets has been practiced from
                    prehistoric times to the present and as pets are found in
                    nearly every culture and society, pet keeping apparently
                    satisfies a deep, universal human need.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/" className="removeDefault">
              <div className="card">
                <img
                  src={images[7]}
                  alt="cleaning images"
                  width="100%"
                  height="100%"
                />
                <div className="card-body">
                  <h5 className="card-title">Sports</h5>
                  <p className="card-text">
                    A sports film is a film genre that uses sport as the theme
                    of the film. It is a production in which a sport, sporting
                    event, athlete, or follower of sport are prominently
                    featured, and which depend on sport to a significant degree
                    for their plot motivation or resolution. Despite this, sport
                    is ultimately rarely the central concern of such films and
                    sport performs primarily an allegorical role. Furthermore,
                    sports fans are not necessarily the target demographic.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <ResponsiveVideo />
      </>
    );
  }
}
export default Main;
