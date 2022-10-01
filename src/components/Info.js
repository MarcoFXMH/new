import profilePicture from "../images/profilePicture.png"
export default function Info(){
    return(
      <div className="info__main-container">
        <div className="info__photo-container">
          <img src={profilePicture} alt="Profile picture" className="info__photo"/>
        </div>

        <div className="info__info-container">
           <h1 className="info__title">Laura Smith</h1>
           <h3 className="info__subtitle">Frontend Developer</h3>
           <p className="info__subtitle-site">laurasmith.website</p>
        </div>

        <div className="info__button-container">
            <a href="#" className="info__button">
              <i class="uil uil-envelope info__button-icon"></i>
              <span className="info__button-text">Email</span>
            </a>
            <a href="#" className="info__button-two">
              <i class="uil uil-linkedin info__button-icon-two"></i>
              <span className="info__button-text-two">LinkedIn</span>
            </a>
        </div>
      </div>
    )
}