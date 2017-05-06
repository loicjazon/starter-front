$(function() {

  let Menu = {
    init: function () {
      console.log("init menu")
    }
  }

  let Carousel = {
    init: function () {
      this.singleItem()
      this.mutipleItems()
    },
    singleItem: function () {
      console.log("lancement des carousels simples")
      $('.carousel-single-item').slick()
    },
    mutipleItems: function () {
      console.log("lancement des carousels multiple")
      $('.carousel-multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    }
  }

  Menu.init()
  Carousel.init()

}())