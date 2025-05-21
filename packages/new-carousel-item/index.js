import ElNewCarouselItem from '../new-carousel/src/item';

/* istanbul ignore next */
ElNewCarouselItem.install = function(Vue) {
  Vue.component(ElNewCarouselItem.name, ElNewCarouselItem);
};

export default ElNewCarouselItem;
