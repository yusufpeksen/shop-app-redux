import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComp() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-[40px] px-20">
      <Slider {...settings}>
        <div className="!flex items-center justify-between">
          <div className="pl-10">
            <p className="w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor vitae leo quis convallis. Proin ac molestie ipsum. Morbi
              vitae commodo mi. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Ut eros mauris,
              aliquam vitae elit eu, viverra ultrices orci. Vestibulum a ornare
              massa. Quisque fringilla elementum interdum. Maecenas sit amet
              massa lacinia, mattis odio et, tristique nulla. Morbi dictum,
              purus ac efficitur facilisis, odio turpis dignissim nulla, a
              pellentesque mauris risus in ex. Duis et ullamcorper magna. Ut
              accumsan ornare posuere.
            </p>
            <button className="mt-6 px-8 py-2 bg-gray-400 rounded-full">
                Show Item
            </button>
          </div>
          <img
            className="h-[400px]"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/440deb6f-e486-4c08-9d3b-538be9b7591b/court-vision-mid-next-nature-ayakkab%C4%B1s%C4%B1-QLllQ9.png"
          ></img>
        </div>
        <div className="!flex items-center justify-between">
          <div className="pl-10">
            <p className="w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor vitae leo quis convallis. Proin ac molestie ipsum. Morbi
              vitae commodo mi. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Ut eros mauris,
              aliquam vitae elit eu, viverra ultrices orci. Vestibulum a ornare
              massa. Quisque fringilla elementum interdum. Maecenas sit amet
              massa lacinia, mattis odio et, tristique nulla. Morbi dictum,
              purus ac efficitur facilisis, odio turpis dignissim nulla, a
              pellentesque mauris risus in ex. Duis et ullamcorper magna. Ut
              accumsan ornare posuere.
            </p>
            <button className="mt-6 px-8 py-2 bg-gray-400 rounded-full">
                Show Item
            </button>
          </div>
          <img
            className="h-[400px]"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/80fc3cbf-e3fc-42ea-9c41-5c4665029b74/jordan-one-take-4-basketbol-ayakkab%C4%B1s%C4%B1-x7Fvkp.png"
          ></img>
        </div>
        <div className="!flex items-center justify-between">
          <div className="pl-10">
            <p className="w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor vitae leo quis convallis. Proin ac molestie ipsum. Morbi
              vitae commodo mi. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Ut eros mauris,
              aliquam vitae elit eu, viverra ultrices orci. Vestibulum a ornare
              massa. Quisque fringilla elementum interdum. Maecenas sit amet
              massa lacinia, mattis odio et, tristique nulla. Morbi dictum,
              purus ac efficitur facilisis, odio turpis dignissim nulla, a
              pellentesque mauris risus in ex. Duis et ullamcorper magna. Ut
              accumsan ornare posuere.
            </p>
            <button className="mt-6 px-8 py-2 bg-gray-400 rounded-full">
                Show Item
            </button>
          </div>
          <img
            className="h-[400px]"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fabe3ef1-263d-42ee-b24b-09a9a47a61ee/air-jordan-1-mid-ayakkab%C4%B1s%C4%B1-f8W9ns.png"
          ></img>
        </div>
      </Slider>
    </div>
  );
}
<img ></img>

export default SliderComp;
