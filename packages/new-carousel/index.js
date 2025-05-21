import NewCarousel from './src/main';

/* istanbul ignore next */
NewCarousel.install = function(Vue) {
  Vue.component(NewCarousel.name, NewCarousel);
};

export default NewCarousel;
