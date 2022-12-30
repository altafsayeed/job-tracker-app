import main from "../assets/images/interview.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/";
import { Link } from "react-router-dom";
import "animate.css";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info animate__animated animate__rollIn">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Whether you are applying to 1 job or 20 jobs per day, Jobify is here
            to help you keep track of all your job applications in one place.
            Say goodbye to forgetting where you've applied to and digging
            through your inbox. You can add new jobs that you've applied to,
            view all of their statuses, and view your progress on your
            dashboard. Jobify makes it easy and simple to organize your job
            applications.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img
          src={main}
          alt="job hunt"
          className="img main-img animate__animated animate__zoomInRight"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
