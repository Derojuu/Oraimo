export function CheckoutPage() {
  return (
    <>
      <div id="app" className="page-checkout">
        {" "}
        <ul className="v-step">
          <li>Shopping Cart</li> <li className="current">Secure Checkout</li>{" "}
          <li>Order Complete</li>
        </ul>{" "}
        <div className="checkout-main">
          <div className="checkout-operate checkout-form">
            <div className="checkout-section checkout-address">
              <div className="section-body">
                <div className="section-content">
                  <h1 className="section-title">
                    <span className="section-title-text">Shipping Address</span>
                  </h1>{" "}
                  <span>
                    <form className="site-form">
                      <div className="form-group">
                        <label>
                          Email Address<i>*</i>
                        </label>{" "}
                        <span>
                          <input
                            type="text"
                            placeholder=""
                            className="form-input"
                            defaultValue=""
                          />{" "}
                          <span
                            className="v-error-message"
                            style={{ display: "none" }}
                          ></span>
                        </span>{" "}
                        <p className="form-text"></p>
                        <div className="v-checkbox">
                          <input type="checkbox" value="on" />{" "}
                          <span className="icon icon-checkbox sf-hidden"></span>
                        </div>
                        <span className="form-text-box">Set as default</span>
                      </div>
                    </form>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <p></p>{" "}
      <div className="form-group split left">
        <label>
          First Name<i>*</i>
        </label>{" "}
        <span>
          <input
            type="text"
            placeholder=""
            className="form-input"
            defaultValue=""
          />{" "}
          <span className="v-error-message" style={{ display: "none" }}></span>
        </span>
      </div>{" "}
      <div className="form-group split right">
        <label>
          Last Name<i>*</i>
        </label>{" "}
        <span>
          <input
            type="text"
            placeholder=""
            className="form-input"
            defaultValue=""
          />{" "}
          <span className="v-error-message" style={{ display: "none" }}></span>
        </span>
      </div>{" "}
      <div className="form-group">
        <label>
          State/Province<i>*</i>
        </label>{" "}
        <div dir="auto" className="v-select vs--single vs--searchable">
          {" "}
          <div
            id="vs4__combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="vs4__listbox"
            aria-label="Search for option"
            className="vs__dropdown-toggle"
          >
            <div className="vs__selected-options">
              {" "}
              <input
                aria-autoComplete="list"
                aria-labelledby="vs4__combobox"
                aria-controls="vs4__listbox"
                type="search"
                autoComplete="off"
                className="vs__search"
                defaultValue=""
              />
            </div>{" "}
            <div className="vs__actions">
              <button
                type="button"
                title="Clear Selected"
                aria-label="Clear Selected"
                className="vs__clear"
                style={{ display: "none" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                  <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                </svg>
              </button>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                role="presentation"
                className="vs__open-indicator"
              >
                <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
              </svg>{" "}
              <div className="vs__spinner" style={{ display: "none" }}>
                Loading...
              </div>
            </div>
          </div>{" "}
          <ul
            id="vs4__listbox"
            role="listbox"
            style={{ display: "none", visibility: "hidden" }}
          ></ul>{" "}
        </div>{" "}
        <span>
          {" "}
          <span className="v-error-message" style={{ display: "none" }}></span>
        </span>
      </div>{" "}
      <div className="form-group split left">
        <label>
          City<i>*</i>
        </label>{" "}
        <div
          dir="auto"
          className="v-select vs--single vs--searchable vs--disabled"
        >
          {" "}
          <div
            id="vs5__combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="vs5__listbox"
            aria-label="Search for option"
            className="vs__dropdown-toggle"
          >
            <div className="vs__selected-options">
              {" "}
              <input
                disabled
                aria-autoComplete="list"
                aria-labelledby="vs5__combobox"
                aria-controls="vs5__listbox"
                type="search"
                autoComplete="off"
                className="vs__search"
                defaultValue=""
              />
            </div>{" "}
            <div className="vs__actions">
              <button
                disabled
                type="button"
                title="Clear Selected"
                aria-label="Clear Selected"
                className="vs__clear"
                style={{ display: "none" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                  <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                </svg>
              </button>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                role="presentation"
                className="vs__open-indicator"
              >
                <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
              </svg>{" "}
              <div className="vs__spinner" style={{ display: "none" }}>
                Loading...
              </div>
            </div>
          </div>{" "}
          <ul
            id="vs5__listbox"
            role="listbox"
            style={{ display: "none", visibility: "hidden" }}
          ></ul>{" "}
        </div>{" "}
        <span>
          {" "}
          <span className="v-error-message" style={{ display: "none" }}></span>
        </span>
      </div>{" "}
      <div className="form-group split right">
        <label>
          District<i>*</i>
        </label>{" "}
        <div
          dir="auto"
          className="v-select vs--single vs--searchable vs--disabled"
        >
          {" "}
          <div
            id="vs6__combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="vs6__listbox"
            aria-label="Search for option"
            className="vs__dropdown-toggle"
          >
            <div className="vs__selected-options">
              {" "}
              <input
                disabled
                aria-autoComplete="list"
                aria-labelledby="vs6__combobox"
                aria-controls="vs6__listbox"
                type="search"
                autoComplete="off"
                className="vs__search"
                defaultValue=""
              />
            </div>{" "}
            <div className="vs__actions">
              <button
                disabled
                type="button"
                title="Clear Selected"
                aria-label="Clear Selected"
                className="vs__clear"
                style={{ display: "none" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                  <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                </svg>
              </button>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                role="presentation"
                className="vs__open-indicator"
              >
                <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
              </svg>{" "}
              <div className="vs__spinner" style={{ display: "none" }}>
                Loading...
              </div>
            </div>
          </div>{" "}
          <ul
            id="vs6__listbox"
            role="listbox"
            style={{ display: "none", visibility: "hidden" }}
          ></ul>{" "}
        </div>{" "}
        <span>
          {" "}
          <span className="v-error-message" style={{ display: "none" }}></span>
        </span>
      </div>{" "}
      <div className="form-group">
        <label>
          Street Address<i>*</i>
        </label>{" "}
        <span>
          <input
            type="text"
            placeholder=""
            className="form-input"
            defaultValue=""
          />{" "}
          <span className="v-error-message" style={{ display: "none" }}></span>
        </span>{" "}
        <p className="form-text">
          <span className="form-text-box">
            Detailed street address can help our rider find you quickly.
          </span>
        </p>
      </div>{" "}
      <div className="form-flex">
        <div className="form-group left input-area-code">
          <label>
            Area Number<i>*</i>
          </label>{" "}
          <span>
            <input
              type="text"
              placeholder=""
              className="form-input"
              value="+234"
            />{" "}
            <span
              className="v-error-message"
              style={{ display: "none" }}
            ></span>
          </span>
        </div>{" "}
        <div className="form-group right input-phone">
          <label>
            Phone Number<i>*</i>
          </label>{" "}
          <span>
            <input
              type="text"
              placeholder="Please provide your 10-digit phone number."
              className="form-input"
              defaultValue=""
            />{" "}
            <span
              className="v-error-message"
              style={{ display: "none" }}
            ></span>
          </span>
        </div>
      </div>{" "}
      <div className="form-group">
        <label>WhatsApp No.</label>{" "}
        <input
          type="text"
          placeholder="For backup contact number in logistics delivery"
          className="form-input"
          defaultValue=""
        />
      </div>{" "}
      <div className="btn-group">
        <button type="button">Continue</button>
      </div>{" "}
      <div className="checkout-section checkout-overview">
        <div className="section-body">
          <div className="section-content">
            <h1 className="section-title">
              <span className="section-title-text">My Order</span>{" "}
              <a
                href="https://ng.oraimo.com/cart"
                className="section-title-btn"
              >
                Edit
              </a>
            </h1>{" "}
            <div className="overview-content">
              {" "}
              <div className="overview-products">
                <div className="checkout-product">
                  <div className="product-picture">
                    <img
                      alt="Watch 5 Lite oraimo Watch 5 Lite Smart Watch"
                      src="/images/oraimo-47193eaeff8f8335.webp"
                    />
                  </div>{" "}
                  <div className="product-detail">
                    <h1 className="product-title">
                      Watch 5 Lite oraimo Watch 5 Lite Smart Watch
                    </h1>{" "}
                    <p className="product-other">
                      <span className="product-qty">Qty: 2</span>{" "}
                      <span className="product-attr">Black</span>
                    </p>{" "}
                    <p className="product-price">
                      <span>₦ 18,000</span>
                    </p>
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="checkout-easytobuy">
                <button className="easytobuy-btn">
                  <span>Change</span>{" "}
                  <img alt="" src="/images/oraimo-aa79f76ab8d5951d.svg" />
                </button>{" "}
                <div className="section-body">
                  <div className="section-content">
                    <h1 className="section-title">
                      <span className="grab-title section-title-text">
                        Grab &amp; Go Deals
                      </span>
                    </h1>{" "}
                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                      <div
                        className="swiper-wrapper"
                        style={{ transform: "translate3d(0px,0px,0px)" }}
                      >
                        <div
                          className="swiper-no-swiping swiper-slide swiper-slide-active"
                          style={{ width: "350px" }}
                        >
                          <div className="section-flex">
                            <div className="checkout-product">
                              <div className="product-picture">
                                <img
                                  alt="oraimo Braid USB-A to Type-C 2.4A  Fast Charging"
                                  src="/images/oraimo-11bee71607ba621f.webp"
                                />
                              </div>{" "}
                              <div className="product-detail">
                                <h1 className="product-title">
                                  oraimo Braid USB-A to Type-C 2.4A Fast
                                  Charging
                                </h1>{" "}
                                <p className="product-other">
                                  <span className="product-attr">Black</span>
                                </p>{" "}
                                <p className="product-price">
                                  <span>₦ 1,890</span> <del>₦ 2,210</del>
                                </p>
                              </div>
                            </div>{" "}
                            <div className="v-checkbox2">
                              <input type="checkbox" value="on" />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-322548436c2568fc.svg"
                                className="checkbox-check"
                              />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-7f92ddaa94cee376.svg"
                                className="checkbox-checked"
                              />
                            </div>
                          </div>{" "}
                          <div className="swiper-slide"></div>
                        </div>
                        <div
                          className="swiper-no-swiping swiper-slide swiper-slide-next"
                          style={{ width: "350px" }}
                        >
                          <div className="section-flex">
                            <div className="checkout-product">
                              <div className="product-picture">
                                <img
                                  alt="oraimo RobustLine 2A 1M Type-C Cable"
                                  src="/images/oraimo-1044a12e9e07678b.webp"
                                />
                              </div>{" "}
                              <div className="product-detail">
                                <h1 className="product-title">
                                  oraimo RobustLine 2A 1M Type-C Cable
                                </h1>{" "}
                                <p className="product-other">
                                  <span className="product-attr">Black</span>
                                </p>{" "}
                                <p className="product-price">
                                  <span>₦ 1,440</span> <del>₦ 1,780</del>
                                </p>
                              </div>
                            </div>{" "}
                            <div className="v-checkbox2">
                              <input type="checkbox" value="on" />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-322548436c2568fc.svg"
                                className="checkbox-check"
                              />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-7f92ddaa94cee376.svg"
                                className="checkbox-checked"
                              />
                            </div>
                          </div>{" "}
                          <div className="swiper-slide"></div>
                        </div>
                        <div
                          className="swiper-no-swiping swiper-slide"
                          style={{ width: "350px" }}
                        >
                          <div className="section-flex">
                            <div className="checkout-product">
                              <div className="product-picture">
                                <img
                                  alt="oraimo PowerCube 202 UK Type 20W Compatible Charger Kit"
                                  src="/images/oraimo-9810e04b954feb7d.webp"
                                />
                              </div>{" "}
                              <div className="product-detail">
                                <h1 className="product-title">
                                  oraimo PowerCube 202 UK Type 20W Compatible
                                  Charger Kit
                                </h1>{" "}
                                <p className="product-other">
                                  <span className="product-attr">
                                    Black/Type-C to Type-C
                                  </span>
                                </p>{" "}
                                <p className="product-price">
                                  <span>₦ 5,400</span> <del>₦ 6,670</del>
                                </p>
                              </div>
                            </div>{" "}
                            <div className="v-checkbox2">
                              <input type="checkbox" value="on" />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-322548436c2568fc.svg"
                                className="checkbox-check"
                              />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-7f92ddaa94cee376.svg"
                                className="checkbox-checked"
                              />
                            </div>
                          </div>{" "}
                          <div className="swiper-slide"></div>
                        </div>
                        <div
                          className="swiper-no-swiping swiper-slide"
                          style={{ width: "350px" }}
                        >
                          <div className="section-flex">
                            <div className="checkout-product">
                              <div className="product-picture">
                                <img
                                  alt="oraimo CONCH 2 Neo oraimo CONCH 2 Neo Wired Earphones"
                                  src="/images/oraimo-1d4e6614a3c8b386.webp"
                                />
                              </div>{" "}
                              <div className="product-detail">
                                <h1 className="product-title">
                                  oraimo CONCH 2 Neo oraimo CONCH 2 Neo Wired
                                  Earphones
                                </h1>{" "}
                                <p className="product-other">
                                  <span className="product-attr">Black</span>
                                </p>{" "}
                                <p className="product-price">
                                  <span>₦ 2,250</span> <del>₦ 2,780</del>
                                </p>
                              </div>
                            </div>{" "}
                            <div className="v-checkbox2">
                              <input type="checkbox" value="on" />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-322548436c2568fc.svg"
                                className="checkbox-check"
                              />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-7f92ddaa94cee376.svg"
                                className="checkbox-checked"
                              />
                            </div>
                          </div>{" "}
                          <div className="swiper-slide"></div>
                        </div>
                        <div
                          className="swiper-no-swiping swiper-slide"
                          style={{ width: "350px" }}
                        >
                          <div className="section-flex">
                            <div className="checkout-product">
                              <div className="product-picture">
                                <img
                                  alt="oraimo CONCH 2C oraimo CONCH 2C Type-C Wired Earphones"
                                  src="/images/oraimo-bfe8b1fd73cf5044.webp"
                                />
                              </div>{" "}
                              <div className="product-detail">
                                <h1 className="product-title">
                                  oraimo CONCH 2C oraimo CONCH 2C Type-C Wired
                                  Earphones
                                </h1>{" "}
                                <p className="product-other">
                                  <span className="product-attr">Black</span>
                                </p>{" "}
                                <p className="product-price">
                                  <span>₦ 3,330</span> <del>₦ 4,110</del>
                                </p>
                              </div>
                            </div>{" "}
                            <div className="v-checkbox2">
                              <input type="checkbox" value="on" />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-322548436c2568fc.svg"
                                className="checkbox-check"
                              />{" "}
                              <img
                                alt=""
                                src="/images/oraimo-7f92ddaa94cee376.svg"
                                className="checkbox-checked"
                              />
                            </div>
                          </div>{" "}
                          <div className="swiper-slide"></div>
                        </div>
                      </div>
                      <span
                        className="swiper-notification sf-hidden"
                        aria-live="assertive"
                        aria-atomic="true"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="checkout-summary">
                <p className="summary-item">
                  <span className="summary-key">Cart Subtotal</span>{" "}
                  <span className="summary-val">₦ 36,000</span>
                </p>{" "}
                <p className="summary-item">
                  <span className="summary-key">Shipping</span>{" "}
                  <span
                    className="summary-val"
                    style={{ color: "rgb(102,102,102)" }}
                  >
                    ₦ 0
                  </span>
                </p>{" "}
                <p className="summary-item">
                  <span className="summary-key">Total</span>{" "}
                  <span className="summary-val">₦ 36,000</span>
                </p>
              </div>{" "}
              <button type="button" disabled className="overview-btn">
                Place order
              </button>{" "}
              <span>
                <form>
                  <span>
                    <div className="checkout-agree">
                      <div className="v-checkbox2">
                        <input type="checkbox" value="on" />{" "}
                        <img
                          alt=""
                          src="/images/oraimo-322548436c2568fc.svg"
                          className="checkbox-check"
                        />{" "}
                        <img
                          alt=""
                          src="/images/oraimo-7f92ddaa94cee376.svg"
                          className="checkbox-checked"
                        />
                      </div>{" "}
                      <p className="agree-content">
                        I have read and agree to the oraimo Store{" "}
                        <a href="https://ng.oraimo.com/pages/terms-of-service">
                          Terms of use
                        </a>{" "}
                        and{" "}
                        <a href="https://ng.oraimo.com/pages/privacy-policy">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </span>
                </form>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="v-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer checkout-addr-form sf-hidden"> </div>{" "}
      <div className="v-drawer checkout-detail sf-hidden"> </div>{" "}
      <div className="v-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer checkout-summary-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer coupon-drawer sf-hidden"> </div>{" "}
      <div className="v-drawer self-shipping-modal sf-hidden"> </div>{" "}
      <div className="v-drawer self-business-hours-modal sf-hidden"> </div>{" "}
      <div className="v-drawer sf-hidden"> </div>{" "}
      <div className="module-common-ocean-payment">
        <div className="v-drawer sf-hidden"> </div>
      </div>{" "}
      <div className="v-loading"> </div>{" "}
      <div className="v-alert sf-hidden"></div>{" "}
      <div className="v-signin sf-hidden"> </div>{" "}
      <div className="v-confirm sf-hidden"></div>
    </>
  );
}
