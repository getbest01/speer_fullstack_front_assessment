function Payments(props) {
  return (
    <>
      <section className="payments">
        <nav className="navPmt">EXP|CON</nav>
        <div className="paymentBody">
          <div className="paymentText">
            <h1>PAYMENT</h1>
          </div>
          <form action="#">
            <div className="formContainer">
              <div>
                <p className="formTitle">1. Select your plan</p>
                <div className="plans">
                  <input
                    id="basic"
                    type="radio"
                    name="plan"
                    checked={props.selectedPlan === "basic" ? "checked" : ""}
                  ></input>
                  <label
                    id="basicPlanlabel"
                    className="formPlan"
                    htmlFor="basic"
                  >
                    BASIC
                  </label>
                  <input
                    id="advanced"
                    type="radio"
                    name="plan"
                    checked={props.selectedPlan === "advanced" ? "checked" : ""}
                  ></input>
                  <label
                    id="advancedPlanlabel"
                    className="formPlan"
                    htmlFor="advanced"
                  >
                    ADVANCED
                  </label>
                  <input
                    id="pro"
                    type="radio"
                    name="plan"
                    checked={props.selectedPlan === "pro" ? "checked" : ""}
                  ></input>
                  <label id="proPlanlabel" className="formPlan" htmlFor="pro">
                    PRO
                  </label>
                </div>
              </div>
              <div className="formBottom">
                <div>
                  <p className="formTitle">2. Billing Information</p>
                  <div className="formA">
                    <label className="formLable" htmlFor="fullName">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Mathew Mozzaf"
                    ></input>
                    <label htmlFor="billAddr" className="formLable">
                      BILLING ADDRESS
                    </label>

                    <input type="text" id="billAddr"></input>
                  </div>
                  <div className="formB">
                    <div className="formA">
                      <label className="formLable" htmlFor="city">
                        CITY
                      </label>
                      <input type="text" id="city"></input>
                    </div>
                    <div className="formA">
                      <label className="formLable" htmlFor="postalCode">
                        POSTAL CODE
                      </label>
                      <input type="text" id="postalCode"></input>
                    </div>
                  </div>
                  <div className="formA">
                    <label className="formLable" htmlFor="country">
                      COUNTRY
                    </label>
                    <input type="text" id="country"></input>
                  </div>
                </div>
                <div>
                  <p className="formTitle">3. Credit Card Information</p>
                  <div className="formA">
                    <label className="formLable" htmlFor="cardHolderName">
                      CARDHOLDER'S NAME
                    </label>
                    <input type="text" id="cardHolderName"></input>
                    <label className="formLable" htmlFor="cardNumber">
                      CARD NUMBER
                    </label>
                    <input type="text" id="cardNumber"></input>
                  </div>
                  <div className="formB">
                    <div className="formA">
                      <label className="formLable" htmlFor="expiryMth">
                        EXPIRY MONTH
                      </label>
                      <input
                        type="number"
                        id="expiryMth"
                        min="1"
                        max="12"
                      ></input>
                    </div>
                    <div className="formA">
                      <label className="formLable" htmlFor="expiryYr">
                        EXPIRY YEAR
                      </label>
                      <input
                        type="number"
                        id="expiryYr"
                        min="00"
                        max="99"
                      ></input>
                    </div>
                  </div>
                  <div className="formA">
                    <label className="formLable" htmlFor="cvv">
                      CVV
                    </label>
                    <input type="number" id="cvv" min="000" max="999"></input>
                  </div>
                </div>
              </div>
            </div>
            <p className="ack">
              By continuing, I acknowledge that I've read and agree to the{" "}
              <span id="term">Terms of service</span> &amp;{" "}
              <span id="term">Privacy Policy</span>.
            </p>

            <button className="heroTryBtn" type="submit">
              DOWNLOAD
            </button>
          </form>
        </div>
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
      </section>
    </>
  );
}

export default Payments;
