export function SiteFooter() {
  return (
    <>
      <footer id="footer" className="site-footer">
        <div className="footer-top">
          <div className="footer-top-main">
            <div className="footer-follow-us">
              <h4>FOLLOW US</h4>{" "}
              <a href="https://www.instagram.com/oraimoclub" />
              <img
                alt=""
                data-src="https://cdn-static.oraimo.com/img/icon-instagram-white.svg"
                className="lazyloaded"
                src="/images/oraimo-01632e53d70dacb1.svg"
              />
            </div>
          </div>
        </div>
      </footer>{" "}
      <a href="https://web.facebook.com/oraimoNigeria" />
      <img
        alt=""
        data-src="https://cdn-static.oraimo.com/img/icon-facebook-white.svg"
        className="lazyloaded"
        src="/images/oraimo-9110c7b50cf71a33.svg"
      />{" "}
      <a href="https://www.youtube.com/user/OraimoMate">
        <img
          alt=""
          data-src="https://cdn-static.oraimo.com/img/icon-youtube-white.svg"
          className="lazyloaded"
          src="/images/oraimo-2a398fd54a13af79.svg"
        />
      </a>{" "}
      <a href="https://twitter.com/OraimoMate">
        <img
          alt=""
          data-src="https://cdn-static.oraimo.com/img/icon-twitter-white.svg"
          className="lazyloaded"
          src="/images/oraimo-38f08e20fecb83d6.svg"
        />
      </a>{" "}
      <a href="https://www.tiktok.com/@oraimonigeria?_t=8i0RvzUb8Cc&_r=1">
        <img
          alt=""
          data-src="https://cdn-static.oraimo.com/img/icon-tiktok-white.svg"
          className="lazyloaded"
          src="/images/oraimo-f4fef0760f4d5616.svg"
        />
      </a>{" "}
      <div className="footer-app-desktop">
        <img
          alt=""
          data-src="https://cdn-static.oraimo.com/img/app-store.svg"
          className="footer-app-icon ls-is-cached lazyloaded"
          src="/images/oraimo-bd76c5fab268ba61.svg"
        />{" "}
        <div className="footer-app-words">
          <p className="footer-app-title">Download oraimo store App</p>{" "}
          <p className="footer-app-content">
            Get access to app exclusive offer!
          </p>
        </div>{" "}
        <div className="footer-app-stores">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.transsion.oraimostore"
          >
            <img
              alt=""
              data-src="https://cdn-static.oraimo.com/img/google-play-white.svg"
              className="lazyloaded"
              src="/images/oraimo-176a070801c14fc7.svg"
            />
          </a>{" "}
          <a
            target="_blank"
            href="https://apps.apple.com/app/oraimo-store/id6475294366"
          >
            <img
              alt=""
              data-src="https://cdn-static.oraimo.com/img/app-store-white.svg"
              className="lazyloaded"
              src="/images/oraimo-3cae711678ef35dc.svg"
            />
          </a>
        </div>
      </div>{" "}
      <div className="footer-container">
        <div className="footer-subscribe">
          <div className="subscribe-points">
            Subscribe now and earn <span>500</span> points!
          </div>{" "}
          <div className="subscribe-desc">
            Get the Latest oraimo News and Giveaways
          </div>{" "}
          <span>
            <form id="subscribe" className="footer-subscribe-form">
              <span>
                <div className="footer-subscribe-box">
                  <div className="input-group">
                    <input
                      placeholder="Enter your email address"
                      type="email"
                      defaultValue=""
                    />{" "}
                    <button type="submit">
                      <span className="icon icon-subscribe"></span>
                    </button>
                  </div>{" "}
                  <span
                    className="v-error-message"
                    style={{ display: "none" }}
                  ></span>
                </div>
              </span>
            </form>
          </span>{" "}
          <div className="subscribe-agree">
            <div className="checkbox-icon">
              <div className="o-checkbox">
                <input
                  id="checkbox-icon"
                  name="name1"
                  type="checkbox"
                  value="on"
                />{" "}
                <img
                  src="/images/oraimo-33435202f3685b0d.png"
                  alt=""
                  className="o-checkbox-icon"
                />
              </div>
            </div>{" "}
            <label htmlFor="checkbox-icon" className="privacy-policy-text">
              I have read and agree to the oraimo Store{" "}
              <a href="https://ng.oraimo.com/pages/terms-of-service">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="https://ng.oraimo.com/pages/privacy-policy">
                Privacy Policy
              </a>
            </label>
          </div>
        </div>{" "}
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a className="footer-nav-title">Customer Service</a>{" "}
            <ul className="footer-nav-sub">
              <li>
                <a
                  href="https://ng.oraimo.com/oraimo-daily-deals.html?utm_source=google&utm_medium=google/cpc&campaignid=22204367736&kwd=oraimo%20store&gad_source=1&gad_campaignid=22204367736&gbraid=0AAAAA-z9zelSylQJ6xACoKMuoqMevLOR3&gclid=CjwKCAjw48TUBhBREiwAK0GnQUuVunQz90UZldULVFwcn9k8amcNbZy2OtkD-9OtDmGFiu3DOl8pcxoC7NsQAvD_BwE"
                  className="footer-nav-link"
                >
                  Service Hours:
                </a>{" "}
                <p className="footer-nav-text">
                  Monday-Friday (Excluding public holidays)
                </p>{" "}
                <p className="footer-nav-text">9AM to 1PM</p>{" "}
                <p className="footer-nav-text">2PM to 5:30PM</p>{" "}
                <p className="footer-nav-text">Saturday 10AM to 12:30PM</p>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/oraimo-daily-deals.html?utm_source=google&utm_medium=google/cpc&campaignid=22204367736&kwd=oraimo%20store&gad_source=1&gad_campaignid=22204367736&gbraid=0AAAAA-z9zelSylQJ6xACoKMuoqMevLOR3&gclid=CjwKCAjw48TUBhBREiwAK0GnQUuVunQz90UZldULVFwcn9k8amcNbZy2OtkD-9OtDmGFiu3DOl8pcxoC7NsQAvD_BwE"
                  className="footer-nav-link"
                >
                  Phone:
                </a>{" "}
                <p className="footer-nav-text">070004142999</p>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/oraimo-daily-deals.html?utm_source=google&utm_medium=google/cpc&campaignid=22204367736&kwd=oraimo%20store&gad_source=1&gad_campaignid=22204367736&gbraid=0AAAAA-z9zelSylQJ6xACoKMuoqMevLOR3&gclid=CjwKCAjw48TUBhBREiwAK0GnQUuVunQz90UZldULVFwcn9k8amcNbZy2OtkD-9OtDmGFiu3DOl8pcxoC7NsQAvD_BwE"
                  className="footer-nav-link"
                >
                  Email:
                </a>{" "}
                <p className="footer-nav-text">care.ng@oraimo.com</p>{" "}
                <p className="footer-nav-text">
                  deliveryissue.ng@oraimo.com（First Choice for Logistics
                  Issue）
                </p>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/oraimo-daily-deals.html?utm_source=google&utm_medium=google/cpc&campaignid=22204367736&kwd=oraimo%20store&gad_source=1&gad_campaignid=22204367736&gbraid=0AAAAA-z9zelSylQJ6xACoKMuoqMevLOR3&gclid=CjwKCAjw48TUBhBREiwAK0GnQUuVunQz90UZldULVFwcn9k8amcNbZy2OtkD-9OtDmGFiu3DOl8pcxoC7NsQAvD_BwE"
                  className="footer-nav-link"
                >
                  WhatsApp:
                </a>{" "}
                <p className="footer-nav-text">
                  +234 916 459 8060/ +234 818 642 3337
                </p>
              </li>
            </ul>
          </li>{" "}
          <li className="footer-nav-item">
            <a className="footer-nav-title">About oraimo</a>{" "}
            <ul className="footer-nav-sub">
              <li>
                <a
                  href="https://ng.oraimo.com/pages/about-oraimo"
                  className="footer-nav-link"
                >
                  About Us
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/where-to-buy"
                  className="footer-nav-link"
                >
                  Where to Buy
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/join-o-club"
                  className="footer-nav-link"
                >
                  O-CLUB
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/sign-up-for-the-oraimo-points-program"
                  className="footer-nav-link"
                >
                  Explorer Point Program
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/blogs"
                  className="footer-nav-link"
                >
                  Blogs
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/affiliate/join-overview"
                  className="footer-nav-link"
                >
                  Affiliate Program
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://www.oraimo.com/?bypass=1"
                  className="footer-nav-link"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </li>{" "}
          <li className="footer-nav-item">
            <a className="footer-nav-title">Terms</a>{" "}
            <ul className="footer-nav-sub">
              <li>
                <a
                  href="https://ng.oraimo.com/pages/oraimo-warranty"
                  className="footer-nav-link"
                >
                  Warranty
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/shipping-%26-delivery-policy"
                  className="footer-nav-link"
                >
                  Shipping &amp; Delivery
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/return-refund-policy"
                  className="footer-nav-link"
                >
                  Return &amp; Refund Policy
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/terms-of-service"
                  className="footer-nav-link"
                >
                  Terms &amp; Conditions
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/privacy-policy"
                  className="footer-nav-link"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </li>{" "}
          <li className="footer-nav-item">
            <a className="footer-nav-title">Get Help</a>{" "}
            <ul className="footer-nav-sub">
              <li>
                <a
                  href="https://ng.oraimo.com/order/track"
                  className="footer-nav-link"
                >
                  Track Order
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/visit-carlcare"
                  className="footer-nav-link"
                >
                  Visit Carlcare
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/contact-us"
                  className="footer-nav-link"
                >
                  Contact Us
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/pages/online-shopping-guide"
                  className="footer-nav-link"
                >
                  Online Shopping Guide
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://ng.oraimo.com/authenticate.html"
                  className="footer-nav-link"
                >
                  Product Authentication
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>{" "}
      <div className="footer-app-mobile sf-hidden"> </div>{" "}
      <div className="footer-copyright">
        <img
          alt="araimo Logo"
          data-src="https://cdn-static.oraimo.com/img/logo2.png"
          className="lazyloaded"
          src="/images/oraimo-300235af7a69691c.png"
        />{" "}
        <p>© 2013-2026 oraimo Copyright.</p>
      </div>{" "}
      <button className="footer-back-to-top sf-hidden">
        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M52 91.35V20.111l26.651 27.046 5.698-5.615L48.001 4.65l-36.35 36.892 5.698 5.615L44 20.111V91.35z"
            fill="white"
          ></path>
        </svg>
      </button>{" "}
      <div className="v-alert sf-hidden"></div>
    </>
  );
}
