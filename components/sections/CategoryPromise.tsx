import type { CSSProperties } from "react";

export function CategoryPromise() {
  return (
    <>
      <section className="category-promise">
        <div
          data-v-593d81bf
          className="vue3-marquee horizontal"
          style={
            {
              "--duration": "20s",
              "--delay": "0s",
              "--direction": "normal",
              "--pauseOnHover": "paused",
              "--pauseOnClick": "paused",
              "--pauseAnimation": "paused",
              "--loops": "infinite",
              "--gradient-color": "rgba(255,255,255,1),rgba(255,255,255,0)",
              "--gradient-length": "200px",
              "--min-width": "0%",
              "--min-height": "0%",
              "--orientation": "scrollX",
              justifyContent: "center",
            } as CSSProperties
          }
        >
          <div className="transparent-overlay" aria-hidden="true"></div>
          <div className="marquee">
            <div data-v-593d81bf className="marquee-item">
              <img
                data-v-593d81bf
                className="marquee-item-icon"
                alt="Hassle-Free Warranty"
                src="/images/oraimo-ca9440ba1b485ba5.webp"
              />
              <span data-v-593d81bf className="marquee-item-name">
                Hassle-Free Warranty
              </span>
            </div>
            <div data-v-593d81bf className="marquee-item">
              <img
                data-v-593d81bf
                className="marquee-item-icon"
                alt="Cash on Delivery"
                src="/images/oraimo-dd93a0ddd79259ba.webp"
              />
              <span data-v-593d81bf className="marquee-item-name">
                Cash on Delivery
              </span>
            </div>
            <div data-v-593d81bf className="marquee-item">
              <img
                data-v-593d81bf
                className="marquee-item-icon"
                alt="Free Shipping over ₦30,000 in Lagos"
                src="/images/oraimo-6b1afd7cd3d9dbe9.webp"
              />
              <span data-v-593d81bf className="marquee-item-name">
                Free Shipping over ₦30,000 in Lagos
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
