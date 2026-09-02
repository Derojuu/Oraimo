export function CategorySort() {
  return (
    <>
      <section className="category-sort">
        <div className="category-sort-dropdown">
          <a href="javascript:void(0)" className="category-sort-unit">
            <span className="category-sort-dropdown-name active">
              Recommend
            </span>
            <span
              className="category-sort-dropdown-name mounted"
              style={{ display: "none" }}
            >
              Top Sale
            </span>
            <span
              className="category-sort-dropdown-name mounted"
              style={{ display: "none" }}
            >
              Most Reviews
            </span>
            <svg
              data-v-d7ac4637
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-d7ac4637
                d="M10.7573 3.75684L5.99996 8.5142L1.24261 3.75684"
                stroke="#222222"
                strokeWidth="1.5"
              ></path>
            </svg>
          </a>
          <div className="category-sort-dropdown-body sf-hidden"></div>
        </div>
        <div className="category-sort-slide">
          <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px,0px,0px)" }}
            >
              <div className="swiper-slide swiper-slide-active">
                <a href="javascript:void(0)" className="category-sort-unit">
                  <span>Newest</span>
                </a>
              </div>
              <div className="swiper-slide swiper-slide-next">
                <a href="javascript:void(0)" className="category-sort-unit">
                  <span>Price</span>
                  <svg
                    data-v-a0690bf9
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      data-v-a0690bf9
                      d="M9.75732 7L5.99996 10.7574L2.2426 7"
                      stroke="#999999"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      data-v-a0690bf9
                      d="M2.24268 5L6.00004 1.24264L7.37872 2.62132L9.7574 5"
                      stroke="#999999"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:void(0)" className="category-sort-filter">
          <span className="category-sort-unit">
            <span>Filter</span>
            <svg
              data-v-c60f1094
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-c60f1094
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.25 2.8125C12.1939 2.8125 12.9876 3.44711 13.2327 4.3125H15.75V5.4375H13.2327C12.9876 6.30289 12.1939 6.9375 11.25 6.9375C10.3061 6.9375 9.51237 6.30289 9.26733 5.4375H2.25V4.3125H9.26733C9.51237 3.44711 10.3061 2.8125 11.25 2.8125ZM11.25 3.9375C10.7322 3.9375 10.3125 4.35723 10.3125 4.875C10.3125 5.39277 10.7322 5.8125 11.25 5.8125C11.7678 5.8125 12.1875 5.39277 12.1875 4.875C12.1875 4.35723 11.7678 3.9375 11.25 3.9375Z"
                fill="#222222"
              ></path>
              <path
                data-v-c60f1094
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 6.9375C6.94387 6.9375 7.73763 7.57211 7.98267 8.4375H15.75V9.5625H7.98267C7.73763 10.4279 6.94387 11.0625 6 11.0625C5.05613 11.0625 4.26237 10.4279 4.01733 9.5625H2.25V8.4375H4.01733C4.26237 7.57211 5.05613 6.9375 6 6.9375ZM6 8.0625C5.48223 8.0625 5.0625 8.48223 5.0625 9C5.0625 9.51777 5.48223 9.9375 6 9.9375C6.51777 9.9375 6.9375 9.51777 6.9375 9C6.9375 8.48223 6.51777 8.0625 6 8.0625Z"
                fill="#222222"
              ></path>
              <path
                data-v-c60f1094
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.25 11.0625C12.1939 11.0625 12.9876 11.6971 13.2327 12.5625H15.75V13.6875H13.2327C12.9876 14.5529 12.1939 15.1875 11.25 15.1875C10.3061 15.1875 9.51237 14.5529 9.26733 13.6875H2.25V12.5625H9.26733C9.51237 11.6971 10.3061 11.0625 11.25 11.0625ZM11.25 12.1875C10.7322 12.1875 10.3125 12.6072 10.3125 13.125C10.3125 13.6428 10.7322 14.0625 11.25 14.0625C11.7678 14.0625 12.1875 13.6428 12.1875 13.125C12.1875 12.6072 11.7678 12.1875 11.25 12.1875Z"
                fill="#222222"
              ></path>
            </svg>
          </span>
        </a>
      </section>
    </>
  );
}
