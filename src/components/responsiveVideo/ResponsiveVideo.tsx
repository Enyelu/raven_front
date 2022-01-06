import ReactPlayer from "react-player";
import "./Responsive-player.scss";
const ResponsivePlayer = () => {
  return (
    <div className="card-group card-group-reduce">
      <div className="card card-reduce">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=z7mIkruXgJQ"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="card-body ">
          <h5 className="card-title">A Day in the life of Software Engineer</h5>
          <p className="card-text">
            Software engineers and developers work on computer applications and
            programs. These professionals identify problems by running extensive
            tests. They then correct the issues and build new programs. Now is a
            lucrative time to start a software engineering career.
          </p>
        </div>
      </div>
      <div className="card card-reduce">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=NlqPTSmhlhk"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="card-body ">
          <h5 className="card-title">Which email service should I used?</h5>
          <p className="card-text">
            Gmail is the overall best email service. Outlook is good for
            multiple app integrations. Yahoo has good spam blocking
            capabilities. Zoho Mail is the best option for home businesses. AOL
            provides unlimited storage.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResponsivePlayer;
