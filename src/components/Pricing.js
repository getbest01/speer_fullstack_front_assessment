function Pricing(props) {

  //Payment select button click to render Payments page
  function handleClick(e) {
    e.preventDefault();
    props.paymentToggle(e.target.value);
  }

  return (
    <>
      <section className="pricing">
        <nav>EXP|CON</nav>
        <div className="priceBody">
          <div className="priceText">
            <h1>PRICING</h1>
            <p>
              Test out out app today! Choose from three subscription based
              payment models.
            </p>
          </div>
          <div className="priceOption">
            <div className="basic">
              <div className="term">
                <ul>
                  <li>BASIC</li>
                  <li></li>
                  <li>MONTHLY</li>
                </ul>
              </div>
              <div className="price">$9</div>
              <div className="details">
                <ul>
                  <li>Very good</li>
                  <li>Amazing</li>
                  <li>Perfect job</li>
                  <li>Love this</li>
                  <li>It's so good</li>
                  <li>Features</li>
                </ul>
              </div>
            </div>
            <div className="advanced">
              <div className="term">
                <ul>
                  <li>ADVANCED</li>
                  <li></li>
                  <li>YEARLY</li>
                </ul>
              </div>
              <div className="price">$99</div>
              <div className="details">
                <ul>
                  <li>Very very good</li>
                  <li>Even Amazing</li>
                  <li>Perfect job</li>
                  <li>Love this more</li>
                  <li>It's so so good</li>
                  <li>More Features</li>
                </ul>
              </div>
            </div>
            <div className="pro">
              <div className="term">
                <ul>
                  <li>PRO</li>
                  <li></li>
                  <li>YEARLY</li>
                </ul>
              </div>
              <div className="price">$120</div>
              <div className="details">
                <ul>
                  <li>Very very good</li>
                  <li>Even more</li>
                  <li>Perfect job</li>
                  <li>Love this more</li>
                  <li>It's so so good</li>
                  <li>More Features</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="priceBtnGrp">
            <button id="basicPr" className="hoverBtn" value="basic" onClick={handleClick}>select</button>
            <button id="advancedPr" className="hoverBtn" value="advanced" onClick={handleClick}> select</button>
            <button id="proPr" className="hoverBtn" value="pro" onClick={handleClick}>select</button>
          </div>
        </div>
      </section>
      <section className="prPerks">
      <nav className="navFlex">
              <div>EXP|CON</div>
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
                    No commitment, <br></br> cancel anytime. Never worry about forgetting
                    a payment again!
                  </p>
                </div>
                <div>
                  <div id="perks2">
                    <p>No Fee</p>
                    <p>Cancellation</p>
                    <p>Policy</p>
                  </div>
                  <p  id="perksComm">
                    No commitment, <br></br>cancel anytime. Never worry about forgetting
                    a payment again!
                  </p>
                </div>
                <div>
                  <div id="perks3">
                    <p>Subscription</p>
                    <p>Payment</p>
                    <p>Model</p>
                  </div>
                  <p  id="perksComm">
                    No commitment, <br></br>cancel anytime. Never worry about forgetting
                    a payment again!
                  </p>
                </div>
              </div>
            </div>
      </section>
      <footer>
          <a href="emailto:support@experienceconcerts.co">
            <i>
              <span>&#9993;</span>
            </i> support@experienceconcerts.co
          </a>
          <div className="footDiv">
            <h1>EXP|CON</h1>
            <h4>
              2019 &copy; All Rights Reserved | Speer Technologies Incorporated
            </h4>
          </div>
        </footer>

    </>
  );
}

export default Pricing;
