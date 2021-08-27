import speaker1Img from "../images/Speaker1.jpg";
import speaker1Img1 from "../images/speakers2.png";
import mp3Music from "../music/music_sample.mp3";

function Landing(props) {
  //Try it button click to render Pricing page
  function handleClick(e) {
    e.preventDefault();
    props.pricingToggle();
  }

  function musicPlay(e) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const audioElement = document.querySelector("audio");
    e.preventDefault();
    console.log(e.target);
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // play or pause track depending on state

    if (e.target.dataset.playing === "false") {
      audioElement.play();
      e.target.dataset.playing = "true";
    } else if (e.target.dataset.playing === "true") {
      audioElement.pause();
      e.target.dataset.playing = "false";
    }
  }

  return (
    <>
      <div>
        <main>
          <section className="hero">
            <nav>EXP|CON</nav>
            <div className="heroBody">
              <div className="heroText">
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <p>
                  Experience your favourite artists like never before and from
                  the comfort of your own home.
                </p>
              </div>
              <div className="heroBtnDiv">
                <button className="heroTryBtn" onClick={handleClick}>
                  TRY IT NOW
                </button>
              </div>
            </div>
            <div className="imgChoice">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </section>
          <section className="red">
            <nav className="navFlex">
              <div>EXP|CON</div>
              <button
                id="redBtn"
                className="hoverBtn"
                onClick={handleClick}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  let x = e.pageX - e.target.offsetLeft;
                  let y = e.pageY - e.target.offsetTop;
                  e.target.style = { "--x": x + "px" };
                  e.target.style = { "--y": y + "px" };
                }}
              >
                <span>TRY IT NOW</span>
              </button>
            </nav>
            <div className="redBody">
              <div className="redText">
                <h1>SUPERIOR SOUND</h1>
                <p>Experience live versions of your favoutite songs.</p>
                <button
                  id="redBtn"
                  className="hoverBtn"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    let x = e.pageX - e.target.offsetLeft;
                    let y = e.pageY - e.target.offsetTop;
                    e.target.style = { "--x": x + "px" };
                    e.target.style = { "--y": y + "px" };
                  }}
                >
                  <span>SEE DEMO</span>
                </button>
              </div>
              <div className="redSpeakerDiv">
                <audio src={mp3Music} crossOrigin="anonymous"></audio>
                <img
                  data-playing="false"
                  className="speaker1"
                  src={speaker1Img}
                  onClick={musicPlay}
                  alt="speaker1"
                />
                <img
                  data-playing="false"
                  className="speaker2"
                  src={speaker1Img}
                  onClick={musicPlay}
                  alt="speaker2"
                />
              </div>
            </div>
          </section>
          <section className="yellow">
            <nav className="navFlex">
              <div>EXP|CON</div>
              <button
                id="yellowBtn"
                className="hoverBtn"
                onClick={handleClick}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  let x = e.pageX - e.target.offsetLeft;
                  let y = e.pageY - e.target.offsetTop;
                  e.target.style = { "--x": x + "px" };
                  e.target.style = { "--y": y + "px" };
                }}
              >
                TRY IT NOW
              </button>
            </nav>
            <div className="yellowBody">
              <div className="yellowText">
                <h1>FRONT ROW SEATS </h1>
                <p>Experience concerts up close and personal.</p>
              </div>
              <button
                id="yellowBtn"
                className="hoverBtn"
                onMouseEnter={(e) => {
                  e.preventDefault();
                  let x = e.target.pageX - e.target.offsetLeft;
                  let y = e.target.pageY - e.target.offsetTop;
                  e.target.style = { "--x": {x} + "px" };
                  e.target.style = { "--y": {y} + "px" };
                }}
              >
                <span>SEE DEMO</span>
              </button>
            </div>
          </section>
          <section className="perks">
            <nav className="navFlex">
              <div>EXP|CON</div>
              <button
                id="perksBtn"
                className="heroTryBtn"
                onClick={handleClick}
              >
                TRY IT NOW
              </button>
            </nav>

            <div className="perksSec">
              <div className="perksText">
                <h1>PERKS</h1>
              </div>
              <div className="perksContent">
                <div>
                  <div id="perks1">
                    <p>Subscription</p>
                    <p>Payment</p>
                    <p>Model</p>
                  </div>
                  <p id="perksComm">
                    No commitment, <br></br> cancel anytime. Never worry about
                    forgetting a payment again!
                  </p>
                </div>
                <div>
                  <div id="perks2">
                    <p>No Fee</p>
                    <p>Cancellation</p>
                    <p>Policy</p>
                  </div>
                  <p id="perksComm">
                    No commitment, <br></br>cancel anytime. Never worry about
                    forgetting a payment again!
                  </p>
                </div>
                <div>
                  <div id="perks3">
                    <p>Subscription</p>
                    <p>Payment</p>
                    <p>Model</p>
                  </div>
                  <p id="perksComm">
                    No commitment, <br></br>cancel anytime. Never worry about
                    forgetting a payment again!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="review">
            <nav className="navFlex">
              <div>EXP|CON</div>
              <button
                id="reviewBtn"
                className="hoverBtn"
                onClick={handleClick}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  let x = e.pageX - e.target.offsetLeft;
                  let y = e.pageY - e.target.offsetTop;
                  e.target.style = { "--x": x + "px" };
                  e.target.style = { "--y": y + "px" };
                }}
              >
                TRY IT NOW
              </button>
            </nav>
            <div className="reviewBody">
              <div className="speakerPic">
                <img
                  className="speaker3"
                  alt="speaker"
                  src={speaker1Img1}
                ></img>
                <img
                  className="speaker3"
                  alt="speaker"
                  src={speaker1Img1}
                ></img>
              </div>
              <div className="reviewSec">
                <div className="reviewText">
                  <h1>REVIEWS</h1>
                </div>
                <div className="reviewContent">
                  <div>
                    <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    <p className="reviewer">ARTIST</p>
                    <p>
                      &quot;Love it, it's the best. I can't live without
                      it!&quot;
                    </p>
                  </div>
                  <div>
                    <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    <p className="reviewer">PRODUCER</p>
                    <p>
                      &quot;Love it, it's the best. I can't live without
                      it!&quot;
                    </p>
                  </div>
                  <div>
                    <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    <p className="reviewer">MUSIC FAN</p>
                    <p>
                      &quot;Love it, it's the best. I can't live without
                      it!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="conNow">
            <nav>EXP|CON</nav>
            <div className="conGrp">
              <div className="conNowText">
                <h1>GET EXP|CON NOW</h1>
                <h3>Purchase and download the app.</h3>
              </div>
              <button id="conBtn" className="heroTryBtn" onClick={handleClick}>
                TRY IT NOW
              </button>
            </div>
          </section>
        </main>
        <footer>
          <a href="emailto:support@experienceconcerts.co">
            <i>
              <span>&#9993;</span>
            </i>{" "}
            support@experienceconcerts.co
          </a>
          <div className="footDiv">
            <h1>EXP|CON</h1>
            <h4>
              2019 &copy; All Rights Reserved | Speer Technologies Incorporated
            </h4>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing;
