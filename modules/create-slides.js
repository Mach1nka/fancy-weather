export default function createSlide(title, posterSrc, year, link, rating) {
  const SLIDE = `<div class="swiper-slide">
    <a href=https://www.imdb.com/title/${link} class=title_movie>${title}</a>
    <img src="${posterSrc === "N/A" ? "" : posterSrc}" alt="poster" class=poster>
    <p class="year_movie">${year}</p>
    <div class=rating>
      <div class="rating-star">
        <i class="fas fa-star"></i>
      </div>
      <p class="rating-val">${rating}</p>
    </div>
  </div>`;
  return SLIDE;
}

 //module.exports = createSlide;
