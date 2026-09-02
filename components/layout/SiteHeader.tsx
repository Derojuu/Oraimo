export function SiteHeader() {
  return (
    <>
      <header
        id="header"
        className="site-header has-brands fixed"
        style={{ paddingRight: "0px" }}
        data-version="2"
      >
        <div className="header-top sf-hidden"> </div>{" "}
        <div className="header-main">
          <a href="/" className="header-main-logo">
            <img
              alt="oraimo"
              src="/images/oraimo-f0c278e34ed37ced.svg"
              className="animate"
            />{" "}
            <img
              alt="oraimo"
              src="/images/oraimo-b57327327fbcc3d9.svg"
              className="animate"
            />
          </a>{" "}
          <nav className="header-menu">
            <div className="header-menu-item">
              <a href="https://ng.oraimo.com/collections/oraimo-daily-deals">
                <span>All Products</span>
              </a>
            </div>{" "}
            <div className="header-menu-item">
              <a href="https://ng.oraimo.com/collections/audio">
                <span>Audio</span>
              </a>
            </div>{" "}
            <div className="header-menu-item">
              <a href="https://ng.oraimo.com/collections/power">
                <span>Power</span>
              </a>
            </div>{" "}
            <div className="header-menu-item">
              <a href="https://ng.oraimo.com/collections/smart-office">
                <span>Smart &amp; Office</span>
              </a>
            </div>{" "}
            <div className="header-menu-item">
              <a href="https://ng.oraimo.com/collections/personal-care">
                <span>Personal Care</span>
              </a>
            </div>{" "}
            <div className="header-menu-item">
              <a href="https://ng.oraimo.com/collections/home-appliances">
                <span>Home Appliances</span>
              </a>
            </div>{" "}
            <div className="header-menu-item auto">
              <a href="javascript:void(0)">
                <span>Shop by Occasion</span>
              </a>{" "}
              <div
                className="header-nav-dropdown sf-hidden"
                style={{ top: "98px" }}
              >
                {" "}
              </div>
            </div>{" "}
            <div className="header-menu-item">
              <a href="javascript:void(0)">
                <span>Support</span>
              </a>
            </div>
          </nav>{" "}
          <div className="header-main-btns">
            <a href="/checkout" className="header-main-btn">
              <img alt="" src="/images/oraimo-f449fd90b882c4b6.svg" />
            </a>{" "}
            <button type="button" className="header-main-btn">
              <img alt="" src="/images/oraimo-03cf42c906b996fb.svg" />{" "}
              <span
                id="site_cart_num"
                className="header-main-num"
                style={{ display: "none" }}
              ></span>
            </button>{" "}
            <button type="button" className="header-main-btn account">
              <img alt="" src="/images/oraimo-58580ea50004c0d7.svg" />{" "}
              <ul className="desktop-user-center">
                <li>
                  <div>
                    <a href="https://ng.oraimo.com/auth/sign-in">Sign in</a>{" "}
                    <div className="point-tip">
                      <img
                        alt=""
                        src="/images/oraimo-6df96919adf6998e.svg"
                        className="ls-is-cached lazyloaded"
                      />{" "}
                      <a href="https://ng.oraimo.com/auth/sign-up">
                        Register &amp; Get Points &amp;gt;
                      </a>
                    </div>
                  </div>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/order">My Order</a>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/person">
                    Personal Information
                  </a>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/wishlist">My Wish</a>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/point">
                    My Explorer Points
                  </a>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/coupon">Coupons Center</a>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/address">
                    Address Management
                  </a>
                </li>{" "}
                <li>
                  <a href="https://ng.oraimo.com/user/review">
                    Product Reviews
                  </a>
                </li>{" "}
              </ul>
            </button>{" "}
            <button
              type="button"
              className="header-main-btn menu sf-hidden"
            ></button>
          </div>
        </div>{" "}
        <div className="header-nav-containers">
          <div className="header-nav-empty"></div>{" "}
          <div className="header-nav-container main">
            <div className="header-nav-body">
              <a
                href="https://ng.oraimo.com/collections/oraimo-daily-deals"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">All Products</span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">Audio</span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">Power</span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">
                    Smart &amp; Office
                  </span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">Personal Care</span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">
                    Home Appliances
                  </span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">
                    Shop by Occasion
                  </span>{" "}
                  <span className="header-nav-product-tag">HOT</span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <div className="header-nav-divider"></div>{" "}
              <a href="javascript:void(0)" className="header-nav-product-link">
                <span className="header-nav-product-title">
                  <span className="header-nav-product-text">Support</span>
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>{" "}
          <div className="header-nav-container product">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-nav-main">
                <div className="header-nav-list">
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Wireless Stereo Earbuds"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Wireless_Stereo_Earbuds.svg"
                          src="/images/oraimo-77cb27b0117a2a2b.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Wireless Stereo Earbuds
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Open-Ear Headphones"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Open_Ear_Headphones2.svg"
                          src="/images/oraimo-47e9eaea721a63bd.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Open-Ear Headphones
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Wireless Over-Ear Headphones"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Wireless_Over_Ear_Headphones.svg"
                          src="/images/oraimo-008f3379cc673d69.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Wireless Over-Ear Headphones
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Wireless Neckband Headphones"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Wireless_Neckband_Headphones.svg"
                          src="/images/oraimo-21595f66886a28af.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Wireless Neckband Headphones
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Wireless Speakers"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Wireless_Speakers.svg"
                          src="/images/oraimo-82d92698383e5ef2.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Wireless Speakers
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Wired Earphones"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Wired_Earphones.svg"
                          src="/images/oraimo-365c06cd3a160aab.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Wired Earphones
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>
                </div>{" "}
                <a
                  href="https://ng.oraimo.com/collections/audio"
                  className="header-nav-link-bottom"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 14V4H4V6H12V14H14Z"
                      fill="black"
                    ></path>{" "}
                    <path d="M3 15L12 6" stroke="black" strokeWidth="2"></path>
                  </svg>{" "}
                  <span>View All Audio</span>
                </a>
              </div>{" "}
              <div className="header-nav-app sf-hidden"> </div>
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>{" "}
          <div className="header-nav-container product">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-nav-main">
                <div className="header-nav-list">
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Power Banks"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Power_Banks.svg"
                          src="/images/oraimo-7cc17d008d44729a.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Power Banks
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Power Station"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Power_Station.svg"
                          src="/images/oraimo-965a041d28224229.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Power Station
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Wall Chargers"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Wall_Chargers.svg"
                          src="/images/oraimo-b0b0fb2322d41502.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Wall Chargers
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Car Chargers"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Car_Chargers.svg"
                          src="/images/oraimo-b3eea6d09df35edb.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Car Chargers
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Cables"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Cables.svg"
                          src="/images/oraimo-56c29218f9157a96.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">Cables</span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>
                </div>{" "}
                <a
                  href="https://ng.oraimo.com/collections/power"
                  className="header-nav-link-bottom"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 14V4H4V6H12V14H14Z"
                      fill="black"
                    ></path>{" "}
                    <path d="M3 15L12 6" stroke="black" strokeWidth="2"></path>
                  </svg>{" "}
                  <span>View All Power</span>
                </a>
              </div>{" "}
              <div className="header-nav-app sf-hidden"> </div>
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>{" "}
          <div className="header-nav-container product">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-nav-main">
                <div className="header-nav-list">
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Smart Watches"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Smart_Watches.svg"
                          src="/images/oraimo-c818ff8c716a688c.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Smart Watches
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      rel="nofollow"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Computer Accessories"
                          data-src="https://cdn-img.oraimo.com/NG/2026/07/24/Keyboard.svg"
                          src="/images/oraimo-e6ca3c3cc7c138b2.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Computer Accessories
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Camera & Photo"
                          data-src="https://cdn-img.oraimo.com/NG/2026/05/18/Camera.svg"
                          src="/images/oraimo-05a219691d6aec86.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Camera &amp; Photo
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Item Finders"
                          data-src="https://cdn-img.oraimo.com/NG/2026/05/18/Item_Finders.svg"
                          src="/images/oraimo-d1bf1d1c790c0d4c.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Item Finders
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Phone Accessories"
                          data-src="https://cdn-img.oraimo.com/NG/2026/07/24/accessories.svg"
                          src="/images/oraimo-d4917f453ade5a98.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Phone Accessories
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Smart Control"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Smart_Control.svg"
                          src="/images/oraimo-88e9b104d17bface.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Smart Control
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>
                </div>{" "}
                <a
                  href="https://ng.oraimo.com/collections/smart-office"
                  className="header-nav-link-bottom"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 14V4H4V6H12V14H14Z"
                      fill="black"
                    ></path>{" "}
                    <path d="M3 15L12 6" stroke="black" strokeWidth="2"></path>
                  </svg>{" "}
                  <span>View All Smart &amp; Office</span>
                </a>
              </div>{" "}
              <div className="header-nav-app sf-hidden"> </div>
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>{" "}
          <div className="header-nav-container product">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-nav-main">
                <div className="header-nav-list">
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Grooming Series"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Grooming_Series.svg"
                          src="/images/oraimo-ab8ab0fa0b441112.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Grooming Series
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Oral Care"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Oral_Care.svg"
                          src="/images/oraimo-abec6c60be9e2866.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Oral Care
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Hair Dryers"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Hair_Dryers.svg"
                          src="/images/oraimo-94d2dd0f12731710.svg"
                          className="header-nav-product-icon lazyloading"
                        />{" "}
                        <span className="header-nav-product-text">
                          Hair Dryers
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Hair Styling Tools"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/HairStylingTools.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-f0000db097d6b27f.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Hair Styling Tools
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>
                </div>{" "}
                <a
                  href="https://ng.oraimo.com/collections/personal-care"
                  className="header-nav-link-bottom"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 14V4H4V6H12V14H14Z"
                      fill="black"
                    ></path>{" "}
                    <path d="M3 15L12 6" stroke="black" strokeWidth="2"></path>
                  </svg>{" "}
                  <span>View All Personal Care</span>
                </a>
              </div>{" "}
              <div className="header-nav-app sf-hidden"> </div>
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>{" "}
          <div className="header-nav-container product">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-nav-main">
                <div className="header-nav-list scrolled">
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Steamer & Irons"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Steamer_Irons.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-e6cea8d22fe57e6f.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Steamer &amp; Irons
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Kitchen Appliances"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Air_Fryer.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-82d6918a78009a05.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Kitchen Appliances
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Humidifiers"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Humidifiers.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-0030dbba085105a3.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Humidifiers
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Vacuums"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Vacuums.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-673ad671544efbbb.svg"
                        />{" "}
                        <span className="header-nav-product-text">Vacuums</span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Fans"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Handle_Fans.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-2152542cc7b89b04.svg"
                        />{" "}
                        <span className="header-nav-product-text">Fans</span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Electric Kettles"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Electric_Kettles.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-c8dc2b836a58d239.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Electric Kettles
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Coffee Machines"
                          data-src="https://cdn-img.oraimo.com/NG/2026/05/18/Coffee_Machines.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-1b58edfb82112685.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Coffee Machines
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>{" "}
                  <div className="header-nav-level">
                    <a
                      href="javascript:void(0)"
                      className="header-nav-product-link"
                    >
                      <span className="header-nav-product-title">
                        <img
                          alt="Lightings"
                          data-src="https://cdn-img.oraimo.com/NG/2026/03/31/Smart_Lighting.svg"
                          className="header-nav-product-icon lazyloaded"
                          src="/images/oraimo-33a2c0591585a03f.svg"
                        />{" "}
                        <span className="header-nav-product-text">
                          Lightings
                        </span>
                      </span>{" "}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-nav-product-arrow"
                      >
                        <path
                          d="M26.4453 7.77783L14.0009 20.2223L1.55643 7.77783"
                          stroke="black"
                          strokeWidth="3.11111"
                        ></path>
                      </svg>
                    </a>{" "}
                    <div className="header-nav-recommend sf-hidden"> </div>
                  </div>
                </div>{" "}
                <a
                  href="https://ng.oraimo.com/collections/home-appliances"
                  className="header-nav-link-bottom scroll-before"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 14V4H4V6H12V14H14Z"
                      fill="black"
                    ></path>{" "}
                    <path d="M3 15L12 6" stroke="black" strokeWidth="2"></path>
                  </svg>{" "}
                  <span>View All Home Appliances</span>
                </a>
              </div>{" "}
              <div className="header-nav-app sf-hidden"> </div>
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>{" "}
          <div className="header-nav-container auto sf-hidden"> </div>{" "}
          <div className="header-nav-container support">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-nav-support">
                <a
                  href="https://ng.oraimo.com/order/track"
                  className="header-nav-support-link"
                >
                  <img
                    alt="Track Order"
                    data-src="https://cdn-img.oraimo.com/NG/2026/03/31/track_order.png"
                    className="header-nav-support-banner lazyloaded"
                    src="/images/oraimo-7b8d289fe0b0aab3.webp"
                  />{" "}
                  <span className="header-nav-support-title">
                    <span>Track Order</span>{" "}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                        fill="black"
                      ></path>{" "}
                      <path
                        d="M28 14.75H0V17.4167H28V14.75Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </a>{" "}
                <a
                  href="https://www.carlcare.com/ng/"
                  rel="nofollow"
                  className="header-nav-support-link"
                >
                  <img
                    alt="Visit Carlcare"
                    data-src="https://cdn-img.oraimo.com/NG/2026/03/31/visit_carlcare.png"
                    className="header-nav-support-banner lazyloaded"
                    src="/images/oraimo-7fb0bac2ff94f9f5.webp"
                  />{" "}
                  <span className="header-nav-support-title">
                    <span>Visit Carlcare</span>{" "}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                        fill="black"
                      ></path>{" "}
                      <path
                        d="M28 14.75H0V17.4167H28V14.75Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </a>{" "}
                <a
                  href="https://ng.oraimo.com/authenticate.html"
                  className="header-nav-support-link"
                >
                  <img
                    alt="Product Authentication"
                    data-src="https://cdn-img.oraimo.com/NG/2026/03/31/product_authentication.png"
                    className="header-nav-support-banner lazyloaded"
                    src="/images/oraimo-50c5005a3ed5aeb8.webp"
                  />{" "}
                  <span className="header-nav-support-title">
                    <span>Product Authentication</span>{" "}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                        fill="black"
                      ></path>{" "}
                      <path
                        d="M28 14.75H0V17.4167H28V14.75Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="header-nav-container search">
            <div className="header-nav-header sf-hidden"> </div>{" "}
            <div className="header-nav-body">
              <div className="header-search">
                <form className="header-search-form">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-search-icon"
                  >
                    <path
                      d="M35.6367 32.8091L46.0215 43.1939L43.1931 46.0223L32.8083 35.6375L35.6367 32.8091Z"
                      fill="black"
                    ></path>{" "}
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      stroke="black"
                      strokeWidth="4"
                    ></circle>
                  </svg>{" "}
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    defaultValue=""
                  />{" "}
                  <button
                    type="button"
                    className="header-search-cancel sf-hidden"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90445 5.79086L5.79007 3.90524L15.9992 14.1144L26.2084 3.90524L28.094 5.79085L17.8848 16L28.094 26.2091L26.2084 28.0948L15.9992 17.8856L5.79007 28.0948L3.90445 26.2091L14.1136 16L3.90445 5.79086Z"
                        fill="black"
                      ></path>
                    </svg>
                  </button>
                </form>{" "}
                <p className="header-search-title" style={{ display: "none" }}>
                  Recent Searches
                </p>{" "}
                <div
                  className="header-search-recents"
                  style={{ display: "none" }}
                >
                  {" "}
                </div>{" "}
                <p className="header-search-title">
                  Most frequently searched
                  <a
                    href="https://ng.oraimo.com/search"
                    className="header-search-more"
                  >
                    View More
                  </a>
                </p>{" "}
                <div className="header-search-words">
                  <a
                    href="https://ng.oraimo.com/product/oraimo-easypump-lightweight-gentle-wearable-breast-pump-obr-841a"
                    className="header-search-word"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74725 22.4906C9.74725 22.4906 0.402719 20.2758 4.40819 10.3125C4.87225 10.7391 5.1535 11.4844 5.37147 11.918C5.87537 6.69375 9.79178 6.18516 9.22928 1.5C10.7433 2.03906 15.5176 3.62812 16.2605 9.47578C16.973 8.14219 18.0699 7.43203 18.9019 7.29141C18.6933 8.34141 19.0332 10.1508 19.7926 12.0023C20.9644 14.8688 19.0394 20.5734 13.1332 22.0523C14.0238 19.9781 13.0019 17 11.9293 13.7648C11.1418 17.3695 8.00193 18 9.74725 22.4906Z"
                        fill="#FA3C00"
                      ></path>
                    </svg>{" "}
                    <span>New Easy Pump</span>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-spacebuds-2-true-wireless-earbuds-otw-631-spacegrey?ean=4894947114120"
                    className="header-search-word"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74725 22.4906C9.74725 22.4906 0.402719 20.2758 4.40819 10.3125C4.87225 10.7391 5.1535 11.4844 5.37147 11.918C5.87537 6.69375 9.79178 6.18516 9.22928 1.5C10.7433 2.03906 15.5176 3.62812 16.2605 9.47578C16.973 8.14219 18.0699 7.43203 18.9019 7.29141C18.6933 8.34141 19.0332 10.1508 19.7926 12.0023C20.9644 14.8688 19.0394 20.5734 13.1332 22.0523C14.0238 19.9781 13.0019 17 11.9293 13.7648C11.1418 17.3695 8.00193 18 9.74725 22.4906Z"
                        fill="#FA3C00"
                      ></path>
                    </svg>{" "}
                    <span>SpaceBuds 2</span>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/search/Power+bank"
                    className="header-search-word"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74725 22.4906C9.74725 22.4906 0.402719 20.2758 4.40819 10.3125C4.87225 10.7391 5.1535 11.4844 5.37147 11.918C5.87537 6.69375 9.79178 6.18516 9.22928 1.5C10.7433 2.03906 15.5176 3.62812 16.2605 9.47578C16.973 8.14219 18.0699 7.43203 18.9019 7.29141C18.6933 8.34141 19.0332 10.1508 19.7926 12.0023C20.9644 14.8688 19.0394 20.5734 13.1332 22.0523C14.0238 19.9781 13.0019 17 11.9293 13.7648C11.1418 17.3695 8.00193 18 9.74725 22.4906Z"
                        fill="#FA3C00"
                      ></path>
                    </svg>{" "}
                    <span>Power bank</span>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/search/Smart+watch"
                    className="header-search-word"
                  >
                    <span>Smart watch</span>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/search/Powerbank"
                    className="header-search-word"
                  >
                    <span>Powerbank</span>
                  </a>
                </div>{" "}
                <p className="header-search-title">Recommendations</p>{" "}
                <div className="header-search-recommends">
                  <a
                    href="https://ng.oraimo.com/product/oraimo-spacebuds-2-true-wireless-earbuds-otw-631-spacegrey?ean=4894947114120"
                    className="header-search-recommend"
                  >
                    <span className="header-search-tag new">New Arrival</span>{" "}
                    <img
                      alt="SpaceBuds 2"
                      src="/images/oraimo-a31b9b015bf76efb.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">SpaceBuds 2</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-easypump-lightweight-gentle-wearable-breast-pump-obr-841a?ean=4894947115608"
                    className="header-search-recommend"
                  >
                    <span className="header-search-tag new">Flash Sale</span>{" "}
                    <img
                      alt="EasyPump"
                      src="/images/oraimo-3bb468dd1374a311.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">EasyPump</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-easycut-2-10w-super-powerful-quick-charge-hair-clipper-ocl-233n-naturaltitanium?ean=4894947109065"
                    className="header-search-recommend"
                  >
                    <span className="header-search-tag new">Flash Sale</span>{" "}
                    <img
                      alt="EasyCut 2"
                      src="/images/oraimo-fab0e39612c597a2.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">EasyCut 2</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/spacebuds-neo-plus-active-noise-cancellation-spatial-audio-true-wireless-earphones?ean=4894947069055"
                    className="header-search-recommend"
                  >
                    <img
                      alt="SpaceBuds Neo+"
                      src="/images/oraimo-b622b6f530258bf9.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">SpaceBuds Neo+</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-robustline-1.5m-3a-60w-type-c-to-type-c-cable?ean=4894947066214"
                    className="header-search-recommend"
                  >
                    <img
                      alt="RobustLine"
                      src="/images/oraimo-59055f93397730b4.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">RobustLine</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-powerbox-300-lite-30000mah-15w-power-bank-with-3-outputs-and-led-torch?ean=4894947011801"
                    className="header-search-recommend"
                  >
                    <img
                      alt="PowerBox 300 Lit"
                      src="/images/oraimo-c2defe6d23866ebf.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">PowerBox 300 Lit</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-conch-2c-wide-compatiblity-type-c-in-ear-wired-earphone-oep-320c?ean=4894947096761"
                    className="header-search-recommend"
                  >
                    <img
                      alt="CONCH 2C"
                      src="/images/oraimo-233647fbd4cf3051.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">CONCH 2C</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-spacebuds-n-active-noise-cancellation-38-hour-play-time-true-wireless-earbuds?ean=4894947054648"
                    className="header-search-recommend"
                  >
                    <img
                      alt="SpaceBuds N"
                      src="/images/oraimo-81bd161374c2fedd.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">SpaceBuds N</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-opensnap-clip-on-open-ear-true-wireless-headphones-opn-373?ean=4894947092275"
                    className="header-search-recommend"
                  >
                    <img
                      alt="OpenSnap"
                      src="/images/oraimo-5add2a39e995ccf4.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">OpenSnap</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo_ocd-152cc_3a_1m?ean=4894947096488"
                    className="header-search-recommend"
                  >
                    <img
                      alt="Braid"
                      src="/images/oraimo-8aab9e6c22bc7bde.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">Braid</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-powernova-l21-20000mah-30w-power-bank-opb-7203c?ean=4894947105456"
                    className="header-search-recommend"
                  >
                    <span className="header-search-tag new">New Arrival</span>{" "}
                    <img
                      alt="PowerNova L21"
                      src="/images/oraimo-8d25a22f5c65d112.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">PowerNova L21</h2>
                  </a>{" "}
                  <a
                    href="https://ng.oraimo.com/product/oraimo-powercube-202-uk-type-plug-20w-compatible-charger-kit-ocw-5202u?ean=4894947097164"
                    className="header-search-recommend"
                  >
                    <img
                      alt="PowerCube 202"
                      src="/images/oraimo-727ccde8864a0798.webp"
                      className="header-search-picture"
                    />{" "}
                    <h2 className="header-search-name">PowerCube 202</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="header-nav-container account">
            <div className="header-nav-body">
              <a
                href="https://ng.oraimo.com/user/order"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">My Order</span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <div className="header-nav-divider"></div>{" "}
              <a
                href="https://ng.oraimo.com/user/person"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">
                  Personal Information
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a
                href="https://ng.oraimo.com/user/wishlist"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">My Wish</span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a
                href="https://ng.oraimo.com/user/point"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">
                  My Explorer Points
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a
                href="https://ng.oraimo.com/user/coupon"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">Coupons Center</span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a
                href="https://ng.oraimo.com/user/address"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">
                  Address Management
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
              <a
                href="https://ng.oraimo.com/user/review"
                className="header-nav-product-link"
              >
                <span className="header-nav-product-title">
                  Product Reviews
                </span>{" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-nav-product-next"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9481 3L15.0625 4.88562L26.1197 15.9428L15.0625 27L16.9481 28.8856L29.8909 15.9428L16.9481 3Z"
                    fill="black"
                  ></path>{" "}
                  <path d="M28 14.75H0V17.4167H28V14.75Z" fill="black"></path>
                </svg>
              </a>{" "}
            </div>{" "}
            <div className="header-nav-footer sf-hidden"></div>
          </div>
        </div>{" "}
        <div className="v-cart">
          <div className="cart-shadow sf-hidden"></div>{" "}
          <div className="cart-main">
            <div className="cart-header">
              <h4 className="cart-header-title">Shopping Cart</h4>{" "}
              <a href="javascript:void(0)" className="cart-header-close">
                <span className="icon icon-modal-close"></span>
              </a>
            </div>{" "}
            <div className="cart-body">
              <div className="v-loading">
                {" "}
                <div className="cart-empty-tip">
                  <p>
                    <span className="icon icon-cart"></span>
                  </p>{" "}
                  <p>Your cart is empty</p>
                </div>
              </div>
            </div>{" "}
            <div className="cart-footer" style={{ display: "none" }}>
              {" "}
            </div>
          </div>{" "}
          <div className="v-confirm sf-hidden"></div>{" "}
          <div className="v-alert sf-hidden"></div>
        </div>
      </header>
    </>
  );
}
