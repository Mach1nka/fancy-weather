const createSlide = require('../modules/create-slides');

test('must return slide', () => {
  expect(createSlide('Transformers',
   'some-img.jpg',
   '2020',
   'https://some-link.html', '8.5'))
  .toBe(`<div class="swiper-slide">
    <a href=https://www.imdb.com/title/https://some-link.html class=title_movie>Transformers</a>
    <img src="some-img.jpg" alt="poster" class=poster>
    <p class="year_movie">2020</p>
    <div class=rating>
      <div class="rating-star">
        <i class="fas fa-star"></i>
      </div>
      <p class="rating-val">8.5</p>
    </div>
  </div>`);
});
