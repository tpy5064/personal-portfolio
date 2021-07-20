import React from "react";
import { BsArrowsExpand } from "react-icons/bs";

const HeroSection = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let wrapper = document.getElementById("hero-wrapper");
    let topLayer = wrapper.querySelector(".hero-top");
    let handle = wrapper.querySelector(".hero-handle");
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf("hero-skewed") != -1) {
      skew = 990;
    }

    wrapper.addEventListener("mousemove", function (e) {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;

      handle.style.left = e.clientX + delta + "px";

      topLayer.style.width = e.clientX + skew + delta + "px";
    });
  });


  return (
    <section id="hero-wrapper" className="hero-skewed">
      <div className="hero-layer hero-bottom">
        <div className="hero-content-wrap">
          <div className="hero-content-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maiores dolore fugiat eos eligendi aliquam atque in ipsum
              accusantium sunt?
            </p>
          </div>
          <svg className="english-name" viewBox="0 0 1791 304">
            <g>
              <path
                class="st0"
                d="M64.67,24.67v1.8c-7.6,1-14.65,3.25-21.15,6.75c-6.5,3.5-12.45,9.35-17.85,17.55c-5.4,8.2-9.4,20.5-12,36.9
		h-2.1v-63H64.67z M121.07,210.97c0,10.6,7.5,15.9,22.5,15.9v1.8h-85.8v-1.8c15,0,22.5-5.3,22.5-15.9V24.67h40.8V210.97z
		 M136.97,24.67h53.1v63h-2.1c-2-11.6-4.8-21.5-8.4-29.7c-3.6-8.2-8.75-15.1-15.45-20.7c-6.7-5.6-15.75-9.2-27.15-10.8V24.67z"
              />
              <path
                class="st0"
                d="M209.87,88.27v-1.5c23.2,0,43.3-3.8,60.3-11.4v137.7c0,9.4,7,14.1,21,14.1v1.5h-81.6v-1.5c14,0,21-4.7,21-14.1
		v-110.4c0-5-1.6-8.65-4.8-10.95C222.56,89.42,217.26,88.27,209.87,88.27z M249.17,54.37c-7.6,0-13.85-2.1-18.75-6.3
		c-4.9-4.2-7.35-9.6-7.35-16.2c0-6.4,2.45-11.7,7.35-15.9c4.9-4.2,11.15-6.3,18.75-6.3c7.6,0,13.85,2.1,18.75,6.3
		c4.9,4.2,7.35,9.5,7.35,15.9c0,6.6-2.45,12-7.35,16.2C263.01,52.27,256.76,54.37,249.17,54.37z"
              />
              <path
                class="st0"
                d="M350.86,231.67c-12.6,0-22.7-3.45-30.3-10.35c-7.6-6.9-11.3-16.05-11.1-27.45c0.2-13.4,5.45-23.65,15.75-30.75
		c10.3-7.1,24.15-10.65,41.55-10.65h34.5v1.8l-15.9,0.3c-11.8,0.2-20.8,3.35-27,9.45c-6.2,6.1-9.3,14.25-9.3,24.45
		c0,6.6,1.05,12.4,3.15,17.4c2.1,5,5.05,8.45,8.85,10.35c3.8,1.9,7.6,2.85,11.4,2.85c10,0,19.6-4.8,28.8-14.4v1.8
		c-4.2,4.8-9.2,9.3-15,13.5c-5.8,4.2-11.85,7.2-18.15,9C361.81,230.77,356.06,231.67,350.86,231.67z M344.86,129.97
		c-7.2,0-12.95-2.2-17.25-6.6c-4.3-4.4-6.45-9.7-6.45-15.9c0-5.2,1.6-9.95,4.8-14.25c3.2-4.3,8.65-8.15,16.35-11.55
		c7.7-3.4,18.15-5.4,31.35-6v1.5c-7.2,0.8-12.95,3.4-17.25,7.8c-4.3,4.4-6.45,9.4-6.45,15c0,5.2,1.7,9.4,5.1,12.6
		c3.4,3.2,8.1,5,14.1,5.4c-1.8,3.4-5,6.25-9.6,8.55C354.96,128.82,350.06,129.97,344.86,129.97z M441.16,231.67
		c-10.4,0-18.05-2.35-22.95-7.05c-4.9-4.7-7.35-12.45-7.35-23.25v-93.9c0-4-0.7-8.3-2.1-12.9c-1.4-4.6-4.15-8.5-8.25-11.7
		c-4.1-3.2-9.05-5.1-14.85-5.7v-1.5c22.8,0.8,39.3,5.75,49.5,14.85c10.2,9.1,15.3,22.85,15.3,41.25v77.4c0,9,2.9,13.5,8.7,13.5
		c5.4,0,10.3-4.8,14.7-14.4h1.5c-2,7.4-6.15,13.15-12.45,17.25S449.36,231.67,441.16,231.67z"
              />
              <path
                class="st0"
                d="M487.96,228.67v-1.5c14,0,21-4.7,21-14.1v-110.1c0-5-1.55-8.65-4.65-10.95c-3.1-2.3-8.45-3.45-16.05-3.45v-1.5
		c23.2,0,43.3-3.8,60.3-11.4v137.4c0,9.4,7,14.1,21,14.1v1.5H487.96z M595.96,228.67v-1.5c13.8,0,20.7-4.7,20.7-14.1v-91.8
		c0-5.8-0.95-11.2-2.85-16.2c-1.9-5-5.1-8.85-9.6-11.55c-4.5-2.7-9.95-4.05-16.35-4.05c-11.2,0-21.2,4.1-30,12.3v-1.5
		c5-7,12.2-12.85,21.6-17.55c9.4-4.7,19.3-7.05,29.7-7.05c5,0,10.15,0.55,15.45,1.65c5.3,1.1,10.3,3.2,15,6.3
		c4.7,3.1,8.65,7.65,11.85,13.65c3.2,6,4.8,13.9,4.8,23.7v92.1c0,9.4,7,14.1,21,14.1v1.5H595.96z"
              />
              <path
                class="st0"
                d="M761.56,75.67c9.2,0,18.15,2.4,26.85,7.2c8.7,4.8,15.05,10.5,19.05,17.1v2.1c-8-9.2-18.5-13.8-31.5-13.8
		c-25,0-37.5,21.4-37.5,64.2c0,21.4,3.15,37.85,9.45,49.35c6.3,11.5,15.65,17.25,28.05,17.25c11.4,0,21.9-4.5,31.5-13.5v1.5
		c-4,6.8-10.35,12.6-19.05,17.4c-8.7,4.8-17.65,7.2-26.85,7.2c-12.6,0-23.65-3-33.15-9c-9.5-6-17-14.8-22.5-26.4
		c-5.5-11.6-8.25-26.2-8.25-43.8c0-13.6,1.85-25.45,5.55-35.55c3.7-10.1,8.65-18.15,14.85-24.15c6.2-6,13.05-10.35,20.55-13.05
		C746.11,77.02,753.76,75.67,761.56,75.67z M856.06,75.37v201c0,5,1.55,8.65,4.65,10.95c3.1,2.3,8.45,3.45,16.05,3.45v1.5
		c-8.8,0-17.8,0.65-27,1.95c-9.2,1.3-20.3,4.45-33.3,9.45V85.27c6.2-0.8,13.15-2.1,20.85-3.9
		C845.01,79.57,851.26,77.57,856.06,75.37z"
              />
              <path
                class="st0"
                d="M891.46,88.27v-1.5c23.2,0,43.3-3.8,60.3-11.4v137.7c0,9.4,7,14.1,21,14.1v1.5h-81.6v-1.5c14,0,21-4.7,21-14.1
		v-110.4c0-5-1.6-8.65-4.8-10.95C904.16,89.42,898.85,88.27,891.46,88.27z M930.76,54.37c-7.6,0-13.85-2.1-18.75-6.3
		c-4.9-4.2-7.35-9.6-7.35-16.2c0-6.4,2.45-11.7,7.35-15.9c4.9-4.2,11.15-6.3,18.75-6.3c7.6,0,13.85,2.1,18.75,6.3
		c4.9,4.2,7.35,9.5,7.35,15.9c0,6.6-2.45,12-7.35,16.2C944.6,52.27,938.36,54.37,930.76,54.37z"
              />
              <path
                class="st0"
                d="M1170.75,211.27c0,5,1.65,8.85,4.95,11.55c3.3,2.7,9.15,4.05,17.55,4.05v1.8h-85.5v-1.8
		c6.2,0,11.45-1.05,15.75-3.15c4.3-2.1,6.45-6.25,6.45-12.45v-55.2l-62.1-114.9c-2.6-5-5.5-8.7-8.7-11.1c-3.2-2.4-7.7-3.6-13.5-3.6
		v-1.8h84v1.8c-4.2,0-7.6,0.9-10.2,2.7c-2.6,1.8-3.9,4.4-3.9,7.8c0,2.2,0.9,5.3,2.7,9.3c1.8,4,9.05,17.7,21.75,41.1
		c12.7,23.4,22.95,42.2,30.75,56.4V211.27z M1174.35,24.67h79.5v1.8c-3.4,0-6.8,0.85-10.2,2.55c-3.4,1.7-6.8,5.25-10.2,10.65
		l-47.1,80.1l-1.2-2.1c0.2-0.4,0.6-1.15,1.2-2.25c0.6-1.1,3.35-6.3,8.25-15.6c4.9-9.3,8.65-17.65,11.25-25.05
		c2.6-7.4,3.9-13.9,3.9-19.5c0-4.2-1.2-8.55-3.6-13.05c-2.4-4.5-6.55-8.25-12.45-11.25c-5.9-3-12.35-4.5-19.35-4.5V24.67z"
              />
              <path
                class="st0"
                d="M1282.05,231.67c-12.6,0-22.7-3.45-30.3-10.35c-7.6-6.9-11.3-16.05-11.1-27.45
		c0.2-13.4,5.45-23.65,15.75-30.75c10.3-7.1,24.15-10.65,41.55-10.65h34.5v1.8l-15.9,0.3c-11.8,0.2-20.8,3.35-27,9.45
		c-6.2,6.1-9.3,14.25-9.3,24.45c0,6.6,1.05,12.4,3.15,17.4c2.1,5,5.05,8.45,8.85,10.35c3.8,1.9,7.6,2.85,11.4,2.85
		c10,0,19.6-4.8,28.8-14.4v1.8c-4.2,4.8-9.2,9.3-15,13.5c-5.8,4.2-11.85,7.2-18.15,9C1293,230.77,1287.25,231.67,1282.05,231.67z
		 M1276.05,129.97c-7.2,0-12.95-2.2-17.25-6.6c-4.3-4.4-6.45-9.7-6.45-15.9c0-5.2,1.6-9.95,4.8-14.25c3.2-4.3,8.65-8.15,16.35-11.55
		c7.7-3.4,18.15-5.4,31.35-6v1.5c-7.2,0.8-12.95,3.4-17.25,7.8c-4.3,4.4-6.45,9.4-6.45,15c0,5.2,1.7,9.4,5.1,12.6
		c3.4,3.2,8.1,5,14.1,5.4c-1.8,3.4-5,6.25-9.6,8.55C1286.15,128.82,1281.25,129.97,1276.05,129.97z M1372.35,231.67
		c-10.4,0-18.05-2.35-22.95-7.05c-4.9-4.7-7.35-12.45-7.35-23.25v-93.9c0-4-0.7-8.3-2.1-12.9c-1.4-4.6-4.15-8.5-8.25-11.7
		c-4.1-3.2-9.05-5.1-14.85-5.7v-1.5c22.8,0.8,39.3,5.75,49.5,14.85c10.2,9.1,15.3,22.85,15.3,41.25v77.4c0,9,2.9,13.5,8.7,13.5
		c5.4,0,10.3-4.8,14.7-14.4h1.5c-2,7.4-6.15,13.15-12.45,17.25S1380.55,231.67,1372.35,231.67z"
              />
              <path
                class="st0"
                d="M1419.15,228.67v-1.5c14,0,21-4.7,21-14.1v-110.1c0-5-1.55-8.65-4.65-10.95c-3.1-2.3-8.45-3.45-16.05-3.45
		v-1.5c23.2,0,43.3-3.8,60.3-11.4v137.4c0,9.4,7,14.1,21,14.1v1.5H1419.15z M1527.15,228.67v-1.5c13.8,0,20.7-4.7,20.7-14.1v-91.8
		c0-5.8-0.95-11.2-2.85-16.2c-1.9-5-5.1-8.85-9.6-11.55c-4.5-2.7-9.95-4.05-16.35-4.05c-11.2,0-21.2,4.1-30,12.3v-1.5
		c5-7,12.2-12.85,21.6-17.55c9.4-4.7,19.3-7.05,29.7-7.05c5,0,10.15,0.55,15.45,1.65c5.3,1.1,10.3,3.2,15,6.3
		c4.7,3.1,8.65,7.65,11.85,13.65c3.2,6,4.8,13.9,4.8,23.7v92.1c0,9.4,7,14.1,21,14.1v1.5H1527.15z"
              />
              <path
                class="st0"
                d="M1693.95,183.07c-6.8-0.2-14.15-1.3-22.05-3.3c-7.9-2-15.1-5.15-21.6-9.45c-6.5-4.3-11.65-9.85-15.45-16.65
		c-3.8-6.8-5.7-14.7-5.7-23.7c0-11.2,2.85-20.75,8.55-28.65c5.7-7.9,13.5-14.1,23.4-18.6c9.9-4.5,20.85-6.85,32.85-7.05v1.5
		c-4.6,0.4-8.95,2.5-13.05,6.3c-4.1,3.8-7.25,9.7-9.45,17.7c-2.2,8-3.3,17.3-3.3,27.9c0,13,1.3,23.2,3.9,30.6
		c2.6,7.4,5.75,12.75,9.45,16.05c3.7,3.3,7.85,5.15,12.45,5.55V183.07z M1694.55,303.67c-8.2-0.2-17.3-1.05-27.3-2.55
		c-10-1.5-18.5-4.35-25.5-8.55c-7-4.2-10.5-9.6-10.5-16.2c0-8,4.2-14,12.6-18c8.4-4,19-6,31.8-6c-5,1.2-9.2,3.95-12.6,8.25
		c-3.4,4.3-5.1,9.05-5.1,14.25c0,3.2,1.2,6.75,3.6,10.65c2.4,3.9,6.65,7.45,12.75,10.65c6.1,3.2,12.85,5.2,20.25,6V303.67z
		 M1706.55,303.67v-1.5c10.2-1.2,18.85-3.8,25.95-7.8c7.1-4,11.9-8.25,14.4-12.75c2.5-4.5,3.75-8.35,3.75-11.55
		c0-3.8-1.1-7.3-3.3-10.5c-2.2-3.2-6.4-6.15-12.6-8.85c-6.2-2.7-19.85-5.15-40.95-7.35c-21.1-2.2-35.1-4.65-42-7.35
		c-6.9-2.7-12-6-15.3-9.9c-3.3-3.9-4.95-8.75-4.95-14.55c0-11.2,6.7-20.8,20.1-28.8l0.9,1.2c-1.8,1-3.15,2.35-4.05,4.05
		c-0.9,1.7-1.35,3.35-1.35,4.95c0,2.8,1.1,5.25,3.3,7.35c2.2,2.1,5.15,3.8,8.85,5.1c3.7,1.3,8.25,2.3,13.65,3
		c5.4,0.7,13,1.45,22.8,2.25c9.8,0.8,16,1.3,18.6,1.5c14.2,1.4,26.15,3.5,35.85,6.3c9.7,2.8,17.35,7,22.95,12.6
		c5.6,5.6,8.4,12.9,8.4,21.9c0,14.6-6.55,26.35-19.65,35.25C1748.8,297.11,1730.35,302.27,1706.55,303.67z M1706.25,183.07v-1.8
		c8.6-0.6,15.35-5.1,20.25-13.5c4.9-8.4,7.35-21.3,7.35-38.7c0-6.4-0.45-12.65-1.35-18.75c-0.9-6.1-2.6-11.85-5.1-17.25
		c-2.5-5.4-5.7-9.3-9.6-11.7c-3.9-2.4-7.75-3.8-11.55-4.2v-1.5c12.6,0.2,23.9,2.55,33.9,7.05c10,4.5,17.9,10.7,23.7,18.6
		c5.8,7.9,8.7,17.45,8.7,28.65c0,11.2-3.15,20.95-9.45,29.25c-6.3,8.3-14.8,14.3-25.5,18
		C1726.9,180.92,1716.45,182.87,1706.25,183.07z M1723.05,71.17l-1.2-0.9c2-6.2,5.05-12.1,9.15-17.7c4.1-5.6,8.75-9.65,13.95-12.15
		c5.2-2.5,10-3.75,14.4-3.75c7.2,0,13.05,1.85,17.55,5.55c4.5,3.7,6.75,8.65,6.75,14.85c0,5.8-2.1,10.55-6.3,14.25
		c-4.2,3.7-8.9,5.55-14.1,5.55c0-5.8-1.6-10.45-4.8-13.95c-3.2-3.5-7.1-5.25-11.7-5.25c-4.8,0-9.4,1.3-13.8,3.9
		C1728.55,64.17,1725.25,67.37,1723.05,71.17z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="hero-layer hero-top">
        <div className="hero-content-wrap">
          <div className="hero-content-body">
            <p>
              My name, with 3 Chinese characters: <br /> The willow tree, the
              sky and the mythical Chinese beast, the Qilin.
            </p>
          </div>
          <svg className="chinese-name" viewBox="0 0 865 258">
            <g>
              <path
                class="st0"
                d="M105.2,105.48c1.6,3.4,3.2,5.1,4.8,5.1c1.6,0,4.15-1.4,7.65-4.2c3.5-2.8,5.65-4.2,6.45-4.2
		c0.8,0,1.2,0.35,1.2,1.05c0,0.7-0.7,2.25-2.1,4.65c-5.8,9.2-14,26.8-24.6,52.8c-0.4,3.2-0.6,10.1-0.6,20.7
		c0,10.6,0.4,17.2,1.2,19.8c3.4,12.8,5.1,25.5,5.1,38.1c0,3-0.85,4.5-2.55,4.5c-1.7,0-5.65-3.8-11.85-11.4
		c-6.2-7.6-9.3-19.1-9.3-34.5c0-5.4,0.3-12.2,0.9-20.4c-6,11.6-11.8,18.45-17.4,20.55c-5.6,2.1-9.35,3.15-11.25,3.15
		c-1.9,0-3.4-1.45-4.5-4.35c-1.1-2.9-2.25-7.5-3.45-13.8c-1.2-6.3-1.8-10.2-1.8-11.7s0.4-2.65,1.2-3.45c0.8-0.8,2.6-1.7,5.4-2.7
		c2.8-1,7.85-5.6,15.15-13.8c7.3-8.2,13.05-16.6,17.25-25.2c-0.2-2.2-0.3-6.1-0.3-11.7c-17.4,14.6-29.9,21.9-37.5,21.9
		c-2.4,0-5.35-1.1-8.85-3.3c-3.5-2.2-7.25-5.3-11.25-9.3c-4-4-7.35-8.1-10.05-12.3c-2.7-4.2-4.05-6.9-4.05-8.1
		c0-1.8,0.85-2.7,2.55-2.7c1.7,0,3.65,0.4,5.85,1.2c2.2,0.8,4.3,1.2,6.3,1.2c4.6,0,11-2.6,19.2-7.8c8.2-5.2,21.4-15.3,39.6-30.3
		c0.2-5.4,0.3-10.5,0.3-15.3c0-4.8-0.25-8.3-0.75-10.5c-0.5-2.2-1.5-3.9-3-5.1c-1.5-1.2-2.75-3-3.75-5.4c-1-2.4-1.5-4.1-1.5-5.1
		c0-1,0.4-1.9,1.2-2.7c0.8-0.8,1.8-1.2,3-1.2c0.6,0,2.65,0.95,6.15,2.85c3.5,1.9,6.45,3.3,8.85,4.2c2.4,0.9,5.35,1.55,8.85,1.95
		c3.5,0.4,6.45,2.1,8.85,5.1s3.6,6.55,3.6,10.65c0,4.1-0.5,8.05-1.5,11.85c6.2,3,9.3,7.6,9.3,13.8c0,7.4-4.2,13.5-12.6,18.3
		C108,94.59,106.2,100.29,105.2,105.48z M183.5,99.78c5-0.6,10.55-0.9,16.65-0.9c6.1,0,12.05,1.1,17.85,3.3
		c5.8,2.2,11.65,6.05,17.55,11.55c5.9,5.5,10.35,10.5,13.35,15s4.5,8.65,4.5,12.45c0,2.4-2.35,11.2-7.05,26.4
		c-4.7,15.2-8.85,26.65-12.45,34.35c-3.6,7.7-7.85,14.2-12.75,19.5c-4.9,5.3-9.7,9.4-14.4,12.3c-4.7,2.9-8.95,4.35-12.75,4.35
		c-9.8,0-19.1-6.5-27.9-19.5c-12.4,13-21.1,19.5-26.1,19.5c-1.2,0-2.3-0.4-3.3-1.2c-1-0.8-1.5-1.8-1.5-3s0.6-2.2,1.8-3
		c3.8-2.4,7.8-6.1,12-11.1c4.2-5,7.1-9.7,8.7-14.1c-3.8-3.8-7-8.6-9.6-14.4c-9.4,11.8-15,17.7-16.8,17.7c-0.8,0-1.2-0.9-1.2-2.7
		c0-11.6,0.4-19.25,1.2-22.95c0.8-3.7,2.9-6.95,6.3-9.75c1.4-1.2,3.05-4.45,4.95-9.75c1.9-5.3,2.85-8.75,2.85-10.35
		c0-1.6-2.1-3.1-6.3-4.5c-1.6-0.6-2.4-1.85-2.4-3.75c0-1.9,1.2-3.6,3.6-5.1s5.05-2.25,7.95-2.25c2.9,0,5.8,0.65,8.7,1.95
		c2.9,1.3,4.95,2.95,6.15,4.95c4.6-6.8,9.6-12.1,15-15.9c5.4-3.8,9.95-5.7,13.65-5.7c3.7,0,7.1,1.8,10.2,5.4
		c3.1,3.6,4.65,6.4,4.65,8.4c0,2-0.3,3.95-0.9,5.85c-0.6,1.9-3.85,9.25-9.75,22.05c-5.9,12.8-13.35,27.3-22.35,43.5
		c7.4,2.8,13.35,4.2,17.85,4.2s8.6-1.6,12.3-4.8c3.7-3.2,7.55-8.8,11.55-16.8c4-8,7.3-16.6,9.9-25.8c2.6-9.2,3.9-17.05,3.9-23.55
		c0-6.5-2.9-11.7-8.7-15.6c-5.8-3.9-12.2-5.85-19.2-5.85c-7,0-20.9,4.9-41.7,14.7c-1.8,0.8-3.8,1.2-6,1.2
		c-2.2,0-3.85-0.95-4.95-2.85c-1.1-1.9-1.65-6.5-1.65-13.8c0-7.3,0.85-11.8,2.55-13.5c1.7-1.7,4.65-2.85,8.85-3.45
		c11.4-13.4,19.55-24.3,24.45-32.7c4.9-8.4,7.35-13.8,7.35-16.2c0-2.4-0.75-3.6-2.25-3.6s-2.75,0.9-3.75,2.7
		c-3.4,7-6.3,11.95-8.7,14.85c-2.4,2.9-5.4,4.35-9,4.35l-6.9-0.6c-4.2,0-8,0.85-11.4,2.55c-3.4,1.7-7.3,4.75-11.7,9.15
		c-4.4,4.4-6.9,6.6-7.5,6.6s-0.9-0.4-0.9-1.2c0-2.6,1.2-7,3.6-13.2c2.4-6.2,6.2-12.7,11.4-19.5c5.2-6.8,8.95-10.25,11.25-10.35
		c2.3-0.1,7.55-3.05,15.75-8.85c7.4-5.2,13-7.8,16.8-7.8c3.8,0,9.7,2.25,17.7,6.75c8,4.5,12.9,7.95,14.7,10.35
		c1.8,2.4,2.7,5.4,2.7,9s-0.75,6.75-2.25,9.45c-1.5,2.7-3.45,4.65-5.85,5.85C209.6,72.29,199.5,82.19,183.5,99.78z M161.6,199.98
		c6.6-14.6,12.2-28.5,16.8-41.7c4.6-13.2,6.9-21.05,6.9-23.55c0-2.5-0.95-3.75-2.85-3.75c-1.9,0-4.6,2.35-8.1,7.05
		c-3.5,4.7-6.05,8.95-7.65,12.75c-0.8,7.4-6.5,19.8-17.1,37.2C150.6,189.99,154.6,193.98,161.6,199.98z"
              />
              <path
                class="st0"
                d="M439.1,135.18c7.8,3.8,16.5,9.4,26.1,16.8c9.6,7.4,16.25,13.2,19.95,17.4c3.7,4.2,9.45,9.05,17.25,14.55
		c7.8,5.5,14.2,9.15,19.2,10.95c29.8,10.4,47.5,18.65,53.1,24.75c5.6,6.1,8.4,10.25,8.4,12.45c0,2.2-2.8,4-8.4,5.4
		c-5.6,1.4-13.5,2.1-23.7,2.1c-10.2,0-18.95-1.45-26.25-4.35c-7.3-2.9-15.2-8.25-23.7-16.05c-8.5-7.8-17.35-18-26.55-30.6
		c-9.2-12.6-17-20.8-23.4-24.6c-6.4-3.8-14.9-6.9-25.5-9.3c-2.4,11-3.8,22.6-4.2,34.8c-0.4,12.2-7.05,21.85-19.95,28.95
		c-12.9,7.1-25.15,10.65-36.75,10.65c-5.2,0-9.95-0.75-14.25-2.25c-4.3-1.5-6.45-2.75-6.45-3.75c0-1,2.25-1.6,6.75-1.8
		c4.5-0.2,10-1.95,16.5-5.25c6.5-3.3,12.55-7.75,18.15-13.35c5.6-5.6,9.65-11.15,12.15-16.65c2.5-5.5,5.05-15.15,7.65-28.95
		c-5.8,2.4-11.65,3.6-17.55,3.6c-5.9,0-11.55-0.95-16.95-2.85c-5.4-1.9-8.1-6.95-8.1-15.15c0-3.2,0.7-5.95,2.1-8.25
		c1.4-2.3,2.55-3.45,3.45-3.45s1.35,0.6,1.35,1.8l-0.3,2.1c0,0.6,0.5,0.9,1.5,0.9c4.6,0,18.7-6.3,42.3-18.9c1.8-6.4,2.7-12.4,2.7-18
		c-4.2,3.4-7.45,5.1-9.75,5.1c-2.3,0-3.45-0.7-3.45-2.1c0-1.4,1.15-3.7,3.45-6.9c2.3-3.2,6.15-7.9,11.55-14.1
		c-0.6-2.2-0.9-3.95-0.9-5.25c0-1.3,0.5-1.95,1.5-1.95c1,0,2.6,0.5,4.8,1.5c2-2.4,3.5-4.1,4.5-5.1c-5.8-1-12.2-5-19.2-12
		c-7-7-10.5-12.5-10.5-16.5c0-1.6,0.5-2.6,1.5-3c1-0.4,3.2-0.6,6.6-0.6c7.6,0,16.8-2.6,27.6-7.8c10.8-5.2,16.4-9.2,16.8-12
		c0.2-1.8,2.5-2.7,6.9-2.7c7.4,0,14.85,2.1,22.35,6.3c7.5,4.2,11.25,9.1,11.25,14.7c0,4.8-2.6,7.9-7.8,9.3
		c-1.8,0.6-8.7,5.35-20.7,14.25c-12,8.9-22.3,17.15-30.9,24.75c4.8,6.2,7.7,12.3,8.7,18.3c11.6-4.8,21.4-9.5,29.4-14.1
		c1.8-1,4.55-1.5,8.25-1.5c3.7,0,8.6,1.95,14.7,5.85c6.1,3.9,9.15,7.25,9.15,10.05c0,2.8-3.1,5.2-9.3,7.2
		C472.6,116.58,454.9,124.79,439.1,135.18z"
              />
              <path
                class="st0"
                d="M818.6,146.88c4.4-0.6,8.5-0.9,12.3-0.9c10.4,0,17.95,1.85,22.65,5.55c4.7,3.7,7.05,7.35,7.05,10.95
		c0,4.4-3.3,6.6-9.9,6.6c-2.2,0-5.7-0.55-10.5-1.65c-4.8-1.1-12.3-2.45-22.5-4.05c-0.4,4.6-0.85,8.85-1.35,12.75
		c-0.5,3.9-0.65,7.25-0.45,10.05l8.4,1.8c4,0.6,7.4,2.4,10.2,5.4c2.8,3,4.95,6,6.45,9s2.25,5.7,2.25,8.1c0,6.8-1,12.4-3,16.8
		c-2,4.4-4.1,6.6-6.3,6.6c-2.2,0-4.5-1.15-6.9-3.45c-2.4-2.3-4.25-5-5.55-8.1c-1.3-3.1-2.65-5.35-4.05-6.75
		c-1.4-1.4-2.85-2.4-4.35-3s-2.25-1.3-2.25-2.1c0-1.6,1.95-2.4,5.85-2.4c3.9,0,5.85-1.65,5.85-4.95s-0.75-6.35-2.25-9.15
		c-1.5-2.8-3.45-5-5.85-6.6c-2,0.6-3.4,0.9-4.2,0.9c-2.6,0-5.3-2.65-8.1-7.95c-2.8-5.3-4.1-10.55-3.9-15.75
		c-5.2,1.4-10.6,3.3-16.2,5.7c-1.4,5-3.05,7.5-4.95,7.5c-1.9,0-4.15-0.5-6.75-1.5c-1.4,0.6-4.55,2.3-9.45,5.1
		c-4.9,2.8-8.45,4.2-10.65,4.2c-2.2,0-4.7-0.6-7.5-1.8c-5.2-2.2-9.6-3.3-13.2-3.3c-3,3.2-7.2,5.7-12.6,7.5c-0.8,2-1.2,5.7-1.2,11.1
		s1.3,8.1,3.9,8.1c2.6,0,7.8-3.1,15.6-9.3c0.4-0.4,0.85-0.6,1.35-0.6c0.5,0,0.75,0.9,0.75,2.7c0,5.2-2.05,11.55-6.15,19.05
		c-4.1,7.5-7.75,11.25-10.95,11.25c-1.8,0-4.85-1.05-9.15-3.15c-4.3-2.1-8.85-8.75-13.65-19.95c-1.8,2.2-5.1,5.95-9.9,11.25
		s-7.75,9.25-8.85,11.85c-1.1,2.6-2.15,4.35-3.15,5.25c-1,0.9-2.2,1.35-3.6,1.35c-3.2,0-7.3-3.6-12.3-10.8c-5-7.2-7.5-14.7-7.5-22.5
		c0-2.6,0.5-8,1.5-16.2c1-8.2,2.15-13.7,3.45-16.5c1.3-2.8,3.35-4.9,6.15-6.3c0-0.8-0.9-1.9-2.7-3.3c-4-3.4-6-6.3-6-8.7
		c0-1.6,0.65-2.95,1.95-4.05c1.3-1.1,2.9-1.65,4.8-1.65c1.9,0,4.1-0.45,6.6-1.35c2.5-0.9,4.25-1.95,5.25-3.15
		c-1.8-6.4-2.6-12.5-2.4-18.3c-3,1.8-6,2.9-9,3.3c-6.2,12.2-13.4,27.95-21.6,47.25c-8.2,19.3-13.35,32.55-15.45,39.75
		c-2.1,7.2-5.25,15.1-9.45,23.7c-4.2,8.6-6.9,12.9-8.1,12.9s-2.45-1.6-3.75-4.8c-1.3-3.2-1.95-6-1.95-8.4c0-2.4,0.75-5.8,2.25-10.2
		c1.5-4.4,3.55-6.9,6.15-7.5c2.2-0.6,4.3-5.2,6.3-13.8l13.5-36c8.6-22.4,14.5-36.8,17.7-43.2c-4.8-2.2-7.2-4.45-7.2-6.75
		c0-2.3,4.6-4.85,13.8-7.65c4.4-8.8,8.75-16.55,13.05-23.25c4.3-6.7,7.15-10.45,8.55-11.25c4.8-3,7.3-6.8,7.5-11.4
		c-10.4,4-23,11.1-37.8,21.3c-4.8,3.2-10.2,4.8-16.2,4.8s-10.7-1.95-14.1-5.85c-3.4-3.9-5.1-7.5-5.1-10.8c0-3.3,1.2-4.95,3.6-4.95
		c1,0,2.25,0.4,3.75,1.2c1.5,0.8,3.55,1.2,6.15,1.2c12,0,40.6-10,85.8-30c0-2.2-1.3-3.3-3.9-3.3c-1.6,0-5.7,1.1-12.3,3.3
		c-2.4,0.8-4.8,1.2-7.2,1.2c-2.4,0-4.6-1-6.6-3l-8.7,0.6c-1,0-1.5-0.15-1.5-0.45c0-0.3,0.6-0.75,1.8-1.35
		c9.4-4.8,14.1-9.2,14.1-13.2c0-2.2-1.9-4.85-5.7-7.95c-3.8-3.1-5.7-5.65-5.7-7.65c0-2,1-3,3-3c0.6,0,1.3,0.2,2.1,0.6
		c2.4,1,7.9,1.7,16.5,2.1c5,0.2,9.5,1.45,13.5,3.75c4,2.3,6.9,4.75,8.7,7.35c1.8,2.6,2.7,5.15,2.7,7.65c0,2.5,0.3,4.65,0.9,6.45
		c11.8,2.6,17.7,6.2,17.7,10.8c0,1.2-0.9,2.95-2.7,5.25c-1.8,2.3-5.6,4.05-11.4,5.25c-2.2,0.4-6.35,2.65-12.45,6.75
		c-6.1,4.1-11.25,8.35-15.45,12.75c6.2,1.8,11,4.3,14.4,7.5c8-5.2,15.7-7.8,23.1-7.8c2,0,5.6,1.4,10.8,4.2c0.8-2.6,6.7-5.7,17.7-9.3
		c-0.2-3-0.3-5.85-0.3-8.55s0.8-6.1,2.4-10.2c1.6-4.1,3.1-6.9,4.5-8.4c1.4-1.5,3.15-2.25,5.25-2.25c2.1,0,4.4,0.75,6.9,2.25
		c2.5,1.5,3.95,3.05,4.35,4.65c6.2,3,10.3,4.5,12.3,4.5c2,0,3.9-0.3,5.7-0.9c-1.4-4.8-2.1-9.6-2.1-14.4v-3.3c0-6.4-1.7-9.6-5.1-9.6
		c-3.4,0-5.1-0.65-5.1-1.95c0-1.3,1.05-3.45,3.15-6.45c2.1-3,5.15-4.5,9.15-4.5c14,0,21,6.7,21,20.1c0,4.4-0.8,9.6-2.4,15.6
		c9.2,3.6,13.8,8.2,13.8,13.8c0,2-1,3.35-3,4.05c-2,0.7-6,0.85-12,0.45C820,85.29,819.2,111.89,818.6,146.88z M701.9,177.18
		c-9.8,4.6-16.4,6.9-19.8,6.9c-3.4,0-7.1-1.4-11.1-4.2c1,2.2,1.5,5.65,1.5,10.35c0,4.7-0.45,8.9-1.35,12.6
		c-0.9,3.7-1.35,6.35-1.35,7.95c0,1.6,1.1,2.4,3.3,2.4c2.2,0,6.2-2.6,12-7.8c5.8-5.2,8.9-8.4,9.3-9.6c2-5,3.45-7.5,4.35-7.5
		c0.9,0,1.75,0.6,2.55,1.8C701.7,189.09,701.9,184.79,701.9,177.18z M716.3,173.28c1.8-1.4,3.45-3.45,4.95-6.15s2.25-4.75,2.25-6.15
		c0-5.2-1.8-8.9-5.4-11.1c-3,1.2-5.35,1.8-7.05,1.8c-1.7,0-3.15-1-4.35-3c-0.4-0.8-1.55-1.2-3.45-1.2c-1.9,0-6.15,1.6-12.75,4.8
		c-6.6,3.2-11.2,5.55-13.8,7.05c-2.6,1.5-3.9,3.35-3.9,5.55c6-1.2,10.4-1.8,13.2-1.8c2.8,0,4.9,0.9,6.3,2.7c3.2-1,6.2-1.5,9-1.5
		C708.1,164.28,713.1,167.28,716.3,173.28z M696.5,92.28c0-2.2-0.7-3.9-2.1-5.1c-1.4-1.2-2.95-1.8-4.65-1.8
		c-1.7,0-5.05,4.1-10.05,12.3c0.4,1,1.2,1.5,2.4,1.5C684.7,99.18,689.5,96.89,696.5,92.28z M696.5,106.98c-3.6,2.4-7.4,5.5-11.4,9.3
		c0,4.8,0.4,11.2,1.2,19.2C694.3,127.89,697.7,118.38,696.5,106.98z M713.6,129.78c8.6-15.4,12.9-26.5,12.9-33.3
		c0-1.2-0.35-1.8-1.05-1.8c-0.7,0-2.15,0.65-4.35,1.95c-2.2,1.3-4.5,2.05-6.9,2.25c0,3.6-2.2,8.7-6.6,15.3c-0.8,1.2-1.2,3.6-1.2,7.2
		s0.1,6.3,0.3,8.1C708.7,129.29,711,129.39,713.6,129.78z M762.8,162.48c-0.6-3.6-0.9-8.2-0.9-13.8c0-5.6,0.25-9.45,0.75-11.55
		c0.5-2.1,0.75-5.25,0.75-9.45c0-4.2-0.5-9.05-1.5-14.55c-1-5.5-1.5-9.85-1.5-13.05c0-3.2,0.2-6.1,0.6-8.7c-1.6-0.4-3.2-0.6-4.8-0.6
		c-1.6,0-2.9,0.1-3.9,0.3c0.6,4,0.9,7.05,0.9,9.15s-0.4,4.05-1.2,5.85c-0.8,1.8-3,4.6-6.6,8.4c-5.8,6.2-13.7,17.4-23.7,33.6
		c4.6,0,9.1,1.75,13.5,5.25c4.4,3.5,6.6,6.9,6.6,10.2c0,3.3-1.2,5.55-3.6,6.75c-1,0.6-1.7,2.2-2.1,4.8c3.8,0,7.75-1.5,11.85-4.5
		C752.05,167.58,757,164.88,762.8,162.48z M788.6,196.08c0,1.2-0.7,3.05-2.1,5.55c-1.4,2.5-5.05,5.95-10.95,10.35
		c-5.9,4.4-9.6,7.45-11.1,9.15s-2.35,4.05-2.55,7.05c-0.2,3-1.65,4.5-4.35,4.5s-5.8-2.15-9.3-6.45c-3.5-4.3-5.25-8.4-5.25-12.3
		s0.95-8.1,2.85-12.6c1.9-4.5,3.45-6.75,4.65-6.75c0.6,0,1.35,1.7,2.25,5.1c0.9,3.4,2.65,5.1,5.25,5.1c2.6,0,6.65-1.1,12.15-3.3
		c5.5-2.2,9.25-4,11.25-5.4c2-1.4,3.7-2.1,5.1-2.1C787.9,193.98,788.6,194.69,788.6,196.08z M803.9,124.68c0.4-9,0.3-15.8-0.3-20.4
		c-15,5.8-23.9,9.4-26.7,10.8c-0.2,0.8-0.3,3.1-0.3,6.9c8.2-1.8,13.3-2.7,15.3-2.7c2,0,4.1,0.95,6.3,2.85
		C800.4,124.04,802.3,124.89,803.9,124.68z M804.5,69.48c-10.6,3.8-18.8,7.8-24.6,12c-1.4,2.8-2.3,6.7-2.7,11.7
		c5.4-2.6,9.55-3.9,12.45-3.9c2.9,0,5.4,1.15,7.5,3.45c2.1,2.3,4.25,4.15,6.45,5.55C804.8,88.49,805.1,78.89,804.5,69.48z
		 M804.2,134.88c-1-0.4-2.55-0.6-4.65-0.6s-4.95,0.6-8.55,1.8c-3.6,1.2-6.2,1.8-7.8,1.8c-1.6,0-3.6-0.4-6-1.2c0,6.8,1,13,3,18.6
		c5.2-2.2,12.9-4.4,23.1-6.6C803.9,146.49,804.2,141.89,804.2,134.88z M792.5,57.48c-2.4-2.2-4.9-3.5-7.5-3.9
		c-2.8,1.8-4.2,3.4-4.2,4.8c0,1.4,0.2,2.7,0.6,3.9C785.2,60.48,788.9,58.89,792.5,57.48z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="hero-drag">
        <BsArrowsExpand className="hero-drag-icon" />
      </div>
      <div className="hero-handle"></div>
    </section>
  );
};

export default HeroSection;
