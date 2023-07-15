import Project1 from "../assets/image/project 1.png";
import Project2 from "../assets/image/project 2.png";
// import Project3 from "./assets/project3.jpeg";
// import Project4 from "./assets/project4.jpeg";
// import Project5 from "./assets/project5.jpg";
// import Project6 from "./assets/project6.jpg";

export const info = {
  one: "Welcome to Q-Blink! We are a team of passionate developers who specialize in creating beautiful and functional frontend websites for businesses of all sizes. Our mission is to help our clients establish a strong online presence and achieve their digital goals through effective website development.",
  two: "At Q-Blink, we understand that your website is often the first impression customers have of your business. That's why we take great care in designing and developing websites that not only look stunning, but also provide a seamless user experience. From the initial design concept to the final product, we work closely with our clients to ensure that every detail is just right.",
  three:
    "Our team has years of experience in web development, and we pride ourselves on staying up-to-date with the latest trends and technologies in the industry. We use cutting-edge tools and techniques to create websites that are fast, responsive, and optimized for search engines. Our expertise in frontend development includes HTML, CSS, JavaScript, and experience using the React framework.",
  four: "At Q-Blink, we believe that building strong relationships with our clients is key to our success. We take the time to understand your business and your goals, and we work collaboratively with you to create a website that meets your specific needs. Whether you are looking to launch a brand new website or update an existing one or fix any bugs in your website, we are here to help.",
};

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Works",
    path: "works",
  },
  // {
  //   name: "Team",
  //   path: "team",
  // },
  // {
  //   name: "Testimonials",
  //   path: "testimonials",
  // },
  // {
  //   name: "Pricing",
  //   path: "pricing",
  // },
  {
    name: "Contacts",
    path: "contacts",
  },
];
export const Shape = (className) => {
  return (
    <svg
      className={className.className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="var(--primary-color)"
      viewBox="0 0 200 200">
      <path
        fillRule="evenodd"
        d="M200 98.523A41.9 41.9 0 0 1 188.941 100h-44.708c-23.116 0-41.855 18.739-41.855 41.854v49.465c0 2.976-.311 5.88-.901 8.681A41.888 41.888 0 0 1 100 188.941v-44.708c0-23.116-18.739-41.855-41.854-41.855H8.68a42.08 42.08 0 0 1-8.68-.901A41.888 41.888 0 0 1 11.06 100h44.707c23.116 0 41.855-18.739 41.855-41.854V8.68c0-2.976.31-5.88.901-8.681A41.9 41.9 0 0 1 100 11.06v44.707c0 23.116 18.739 41.855 41.855 41.855h49.464c2.976 0 5.88.31 8.681.901Z"
        clipRule="evenodd"></path>
      <defs>
        {/* <linearGradient
              id="paint0_linear_105_296"
              x1="100"
              x2="100"
              y1="0"
              y2="200"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#DF99F7"></stop>
              <stop offset="1" stopColor="#FFDBB0"></stop>
            </linearGradient> */}
      </defs>
    </svg>
  );
};

// export const Avatar1 = () => {
//   return (
//     <svg
//       width="100px"
//       height="100px"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink">
//       <title>avatar</title>
//       <desc>Created with Sketch.</desc>
//       <defs>
//         <circle id="path-1" cx="54" cy="54" r="54"></circle>
//       </defs>
//       <g
//         id="Personal-1-mixed"
//         stroke="none"
//         strokeWidth="1"
//         fill="none"
//         fillRule="evenodd">
//         <g transform="translate(-811.000000, -274.000000)" id="hero">
//           <g transform="translate(290.000000, 0.000000)">
//             <g id="bio" transform="translate(470.000000, 274.000000)">
//               <g id="avatar" transform="translate(51.000000, 0.000000)">
//                 <mask id="mask-2" fill="white">
//                   <use xlinkHref="#path-1"></use>
//                 </mask>
//                 <use id="Oval" fill="#FFD15C" xlinkHref="#path-1"></use>
//                 <g mask="url(#mask-2)">
//                   <g transform="translate(20.000000, 17.000000)">
//                     <path
//                       d="M55.6356295,80.7525616 C43.853241,75.8516712 39.9729692,69.7628082 40.9789174,61 L28.0210826,61 C29.0270308,69.7628082 25.1474084,75.8516712 13.3637211,80.7525616 C1.58068311,85.6534521 0,91 0,91 L69,91 C69,91 67.4193169,85.6534521 55.6356295,80.7525616"
//                       id="Fill-31"
//                       fill="#6C6CE5"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M34.9996781,83 C39.903661,83 44.2430131,79.8316742 46,75.0533937 C45.6433233,74.7085973 45.3117556,74.3570136 44.9982149,74.0006787 L44.9988587,74.0006787 C43.6204384,78.4361991 39.6680226,81.6425339 34.9996781,81.6425339 C30.3319774,81.6425339 26.3789178,78.4361991 25.0011413,74.0006787 L25.0017851,74 C24.6888882,74.3563348 24.3560329,74.7085973 24,75.0533937 C25.7576307,79.8316742 30.0956952,83 34.9996781,83"
//                       id="Fill-32"
//                       fill="#FFFFFE"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M45,73.5226631 C41.8642349,70.0260667 40.8546087,65.9443799 41.4238112,61 L28.5761888,61 C29.1447474,65.9443799 28.1351212,70.0260667 25,73.5226631 C26.3785776,77.862693 30.3314446,81 34.9996781,81 C39.6685554,81 43.6214224,77.862693 45,73.5226631"
//                       id="Fill-33"
//                       fill="#E46B6A"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M45,73.6207095 C41.873067,70.0967495 40.8666237,65.981665 41.4349227,61 L28.5786082,61 C29.1475515,65.9897075 28.1372423,70.1088133 25,73.6374647 L25.0386598,73.747379 C27.7158505,74.5536407 30.8885309,75 34.6643041,75 C38.7835052,75 42.1849227,74.5073962 45,73.6207095"
//                       id="Fill-34"
//                       fill="#E05A5B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M10.8128935,51 C10.8128935,51 9.71814547,36.6818855 22.8518444,31.6782819 C35.9855433,26.6746784 43.646813,22.8677874 44.194187,12.9696098 C44.194187,12.9696098 48.2985089,21.5986061 44.194187,27.435926 C44.194187,27.435926 49.1192421,27.6898928 49.9399754,24.3902827 C49.9399754,24.3902827 51.8554567,29.8293512 51.0347235,31.6782819 C51.0347235,31.6782819 53.4969233,31.4967838 53.770938,27.9438597 L55.4124046,46.7250005 L56.5071526,51 L60.5190437,37.706893 C60.5190437,37.706893 71.0155142,12.9696098 48.8281834,6.5016165 C48.8281834,6.5016165 30.1945227,-9.61907492 10.7906052,8.90809911 C10.7906052,8.90809911 -4.86953616,21.3570439 5.61382359,40.8876807 L10.8128935,51"
//                       id="Fill-35"
//                       fill="#302C3F"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M11.1316592,8.79117329 C11.1316592,8.79117329 4.99310492,13.6318111 3,22 C5.01594666,18.6567191 11.9206782,8.44196183 22.7248209,5.23527286 C35.7100234,1.3797722 49,6.41627766 49,6.41627766 C49,6.41627766 30.4492445,-9.49281698 11.1316592,8.79117329"
//                       id="Fill-36"
//                       fill="#4F4B67"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M62.8454272,28 L62.8460748,27.9980974 C63.6128905,20.525413 61.8901458,10.6948026 49,7 C49,7 63.2359591,15.8006825 62.8454272,28"
//                       id="Fill-37"
//                       fill="#4F4B67"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M15.6785752,43.5536186 C18.1100236,48.1440448 17.0910869,53.4084026 13.4023116,55.3115752 C9.71419659,57.2147478 4.75290603,55.0365277 2.32145762,50.4461015 C-0.10999078,45.8563271 0.908945908,40.5919692 4.59706088,38.6887966 C8.28583622,36.7849723 13.2471268,38.9631924 15.6785752,43.5536186"
//                       id="Fill-38"
//                       fill="#E5726D"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M14,52 C13.9850218,51.8145157 13.9475763,51.6536761 13.9271514,51.4740287 C13.9557462,51.603738 13.9734477,51.7120453 13.9836601,51.798302 C13.9598312,50.8689346 13.8175381,50.1075408 13.5697168,49.5108779 C11.5891885,41.7795531 4,41 4,41 C7.84463508,43.2115441 10.2445534,45.649431 11.7314815,47.670951 C9.00272331,46.6118743 4.78431373,48.8539001 4.78431373,48.8539001 C9.78907952,47.5898827 12.065768,48.636637 13.1108388,49.8507163 C13.7998366,51.1594835 14,52 14,52"
//                       id="Fill-39"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M12.2992369,54 C12.2992369,54 6.63750329,38.0305999 13.0830072,29 L17,40.8483731 L12.2992369,54"
//                       id="Fill-40"
//                       fill="#302C3F"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M52.3213868,43.5536186 C49.8900084,48.1440448 50.9089157,53.4084026 54.5975849,55.3115752 C58.2855937,57.2147478 63.2467414,55.0365277 65.6781199,50.4461015 C68.1101586,45.8563271 67.0912513,40.5919692 63.4025821,38.6887966 C59.7139129,36.7849723 54.7527652,38.9631924 52.3213868,43.5536186"
//                       id="Fill-41"
//                       fill="#E5726D"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M54,52 C54.0149782,51.8145157 54.0517429,51.6536761 54.0721678,51.4740287 C54.043573,51.603738 54.0265523,51.7120453 54.0163399,51.798302 C54.0401688,50.8689346 54.1824619,50.1075408 54.4302832,49.5108779 C56.4108115,41.7795531 64,41 64,41 C60.1553649,43.2115441 57.7554466,45.649431 56.2685185,47.670951 C58.9972767,46.6118743 63.2150054,48.8539001 63.2150054,48.8539001 C58.2102397,47.5898827 55.9349129,48.636637 54.889842,49.8507163 C54.2008442,51.1594835 54,52 54,52"
//                       id="Fill-42"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M54.8043108,56 C54.8043108,56 61.8446476,51.6958491 57.6855875,32 L49,34.7561608 L54.8043108,56"
//                       id="Fill-43"
//                       fill="#302C3F"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M55.3578746,47.1331207 L53.7238844,28.1418149 C53.4511177,31.734497 51.0001324,31.9180262 51.0001324,31.9180262 C51.8171275,30.0484055 49.9103706,24.5484726 49.9103706,24.5484726 C49.0933755,27.8850062 44.1907523,27.6281974 44.1907523,27.6281974 C48.2757278,21.7255567 44.1907523,13 44.1907523,13 C43.6458714,23.0089404 36.0194962,26.8584312 22.9456169,31.9180262 C13.1840915,35.6955578 11.3197505,44.7221551 11,49.0542352 C11.3523781,61.0014546 14.8702859,72 33.5998334,72 C49.9195063,72 54.6172281,64.2376413 55.8375004,54.7931521 C56.1676917,52.234967 55.9882399,49.6332102 55.3578746,47.1331207"
//                       id="Fill-44"
//                       fill="#EE9F79"
//                       fillRule="evenodd"></path>
//                     <image
//                       id="Image-46"
//                       // fill="none"
//                       x="27"
//                       y="57"
//                       width="12"
//                       height="4"
//                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAAEGWlDQ1BrQ0dDb2xvclNwYWNlR2VuZXJpY1JHQgAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VQNcC+8AAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAACagAwAEAAAAAQAAAAwAAAAALEs1xAAAADBJREFUOBFjfJAf9J9hEAKmQegmsJNGHUZqzIyG2GiIkRoCpKofTWOjIUZqCJCqHgArKQK41rouBgAAAABJRU5ErkJggg=="></image>
//                     <path
//                       d="M46,41.9996913 C46,43.6569929 45.3279152,45 44.5003534,45 C43.6720848,45 43.0007067,43.6569929 43,41.9996913 C43.0007067,40.3430071 43.6720848,39 44.5003534,39 C45.3279152,39 46,40.3430071 46,41.9996913"
//                       id="Fill-47"
//                       fill="#150E18"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M22,42 C21.9992937,43.6574722 22.6715367,45 23.5,45 C24.3284638,45 25,43.6574722 25,42 C25,40.3425278 24.3284638,39 23.5,39 C22.6715367,39 21.9992937,40.3425278 22,42"
//                       id="Fill-48"
//                       fill="#150E18"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M18,38 C18,38 26.0006797,35.4583515 30,35.6851182 C30,35.6851182 29.3250637,31.3173664 24.548853,32.092097 C18.8856415,33.0104687 18,38 18,38"
//                       id="Fill-49"
//                       fill="#302C3F"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M50,36 C50,36 41.8791864,34.4470675 38,35.1258241 C38,35.1258241 38.1330733,30.8024964 42.892282,31.0070353 C48.5335191,31.2493553 50,36 50,36"
//                       id="Fill-50"
//                       fill="#302C3F"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M22.5817824,52 C22.4969447,52 22.4102492,51.9810822 22.3297463,51.9412897 C22.0393165,51.800385 21.9179428,51.4500803 22.0585133,51.1584859 L23.8939802,47.330575 C24.0339314,47.0396329 24.3813326,46.9182983 24.6705239,47.0578983 C24.9609537,47.198803 25.0817081,47.5491077 24.9417568,47.8400498 L23.10629,51.6679607 C23.0053517,51.8786654 22.7979018,52 22.5817824,52"
//                       id="Fill-51"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M18.581705,52 C18.4968726,52 18.4108018,51.9817294 18.3296847,51.9419314 C18.0392731,51.8010072 17.9185263,51.4506541 18.0578495,51.1590193 L19.8932012,47.330579 C20.0331436,47.0395966 20.3817614,46.9188977 20.6703153,47.0572122 C20.9607269,47.1987888 21.0814737,47.5491419 20.9421505,47.8401243 L19.1067988,51.6685646 C19.0058669,51.878646 18.79843,52.0006498 18.581705,52"
//                       id="Fill-52"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M46.418407,52 C46.2016382,52 45.9941596,51.8786581 45.8932073,51.6679408 L44.0574855,47.8404535 C43.9187535,47.5494941 44.0395247,47.198516 44.3293755,47.0576029 C44.6198456,46.9186469 44.9666756,47.0393364 45.1066463,47.3309483 L46.9417487,51.1590879 C47.0817194,51.4506998 46.9609482,51.8010255 46.6704781,51.9419386 C46.5893447,51.9817335 46.5032565,52 46.418407,52"
//                       id="Fill-53"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M49.41796,52 C49.2012107,52 48.9937506,51.878012 48.8928074,51.6686103 L47.0578698,47.8406675 C46.918531,47.5490706 47.0392913,47.1987629 47.3291161,47.0572047 C47.6195601,46.9189082 47.966359,47.0395915 48.1063171,47.330536 L49.941874,51.1591312 C50.0818321,51.450728 49.9604525,51.8010357 49.6700084,51.9419416 C49.5888823,51.9810821 49.5028018,52 49.41796,52"
//                       id="Fill-54"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M37,47.8796809 C37,49.602351 35.8809174,51 34.5002825,51 C33.1190826,51 32,49.602351 32,47.8796809 C32,46.1552477 33.1190826,44 34.5002825,44 C35.8809174,44 37,46.1552477 37,47.8796809"
//                       id="Fill-55"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <path
//                       d="M35.3428024,56 C29.243527,56 25.450036,53.2580713 25.2527462,53.1114086 C24.9654871,52.8995625 24.9153613,52.5084619 25.1422125,52.2374679 C25.368421,51.9676809 25.7854929,51.9212076 26.072752,52.1318466 C26.1286615,52.1734916 31.7678083,56.2208994 40.1683696,54.1537399 C40.5211778,54.0692428 40.8849108,54.2660002 40.9780933,54.5991599 C41.0712758,54.9323196 40.8585626,55.272722 40.5038266,55.3596332 C38.6446754,55.8171243 36.9166223,56 35.3428024,56"
//                       id="Fill-56"
//                       fill="#DF4F4B"
//                       fillRule="evenodd"></path>
//                     <polyline
//                       id="Fill-57"
//                       fill="#F0AC8A"
//                       fillRule="evenodd"
//                       points="44.511 13.4885 44.496 13.4565 44.489 13.5435 44.511 13.4885"></polyline>
//                     <path
//                       d="M33.96999,67.4124218 C22.2769315,67.4124218 16.150415,63.5921134 13,58 C15.0694153,65.9868239 20.4954848,72 33.9604123,72 C47.7094773,72 53.0250844,66.1719578 55,58.4491335 C51.8961963,63.778584 45.7977743,67.4124218 33.96999,67.4124218"
//                       id="Fill-58"
//                       fill="#F0AA87"
//                       fillRule="evenodd"></path>
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </svg>
//   );
// };
// export const Avatar2 = () => {
//   return (
//     <>
//       <svg
//         width="150px"
//         height="150px"
//         version="1.1"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink">
//         <title>avatar</title>
//         <desc>Created with Sketch.</desc>
//         <defs>
//           <circle id="path-1" cx="75" cy="75" r="75"></circle>
//         </defs>
//         <g
//           id="Personal-1-mixed"
//           stroke="none"
//           strokeWidth="1"
//           fill="none"
//           fillRule="evenodd">
//           <g transform="translate(-360.000000, -1101.000000)" id="about">
//             <g transform="translate(350.000000, 990.000000)">
//               <g id="bio" transform="translate(10.000000, 109.000000)">
//                 <g id="avatar" transform="translate(0.000000, 2.000000)">
//                   <mask id="mask-2" fill="white">
//                     <use xlinkHref="#path-1"></use>
//                   </mask>
//                   <use id="Oval" fill="#454360" xlinkHref="#path-1"></use>
//                   <g mask="url(#mask-2)">
//                     <g transform="translate(8.500000, 3)">
//                       <path
//                         d="M77.4060932,111.811239 C61.0132048,105.025391 55.6145658,96.5946575 57.014146,84.4615385 L38.985854,84.4615385 C40.3854342,96.5946575 34.9876987,105.025391 18.5930032,111.811239 C2.19921129,118.597087 0,126 0,126 L96,126 C96,126 93.8007887,118.597087 77.4060932,111.811239"
//                         id="Fill-31"
//                         fill="#6C6CE5"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M48.6952043,114.923077 C55.518137,114.923077 61.5554965,110.536164 64,103.920084 C63.5037541,103.442673 63.0424425,102.955865 62.606212,102.462478 L62.6071077,102.462478 C60.6893056,108.603968 55.1902923,113.043509 48.6952043,113.043509 C42.201012,113.043509 36.701103,108.603968 34.7841966,102.462478 L34.7850924,102.461538 C34.3497575,102.954925 33.8866545,103.442673 33.3913043,103.920084 C35.8367036,110.536164 41.8722716,114.923077 48.6952043,114.923077"
//                         id="Fill-32"
//                         fill="#FFFFFE"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M62.6086957,101.80061 C58.245892,96.9591693 56.8411947,91.3076029 57.6331286,84.4615385 L39.7581757,84.4615385 C40.5492138,91.3076029 39.1445165,96.9591693 34.7826087,101.80061 C36.7006298,107.809883 42.2002707,112.153846 48.6952042,112.153846 C55.1910336,112.153846 60.6906746,107.809883 62.6086957,101.80061"
//                         id="Fill-33"
//                         fill="#E46B6A"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M62.6086957,101.936367 C58.2581802,97.0570377 56.8579113,91.3592284 57.6485881,84.4615385 L39.7615419,84.4615385 C40.5531152,91.3703642 39.1474675,97.0737414 34.7826087,101.959566 L34.8363962,102.111756 C38.5611833,103.228118 42.9753474,103.846154 48.228597,103.846154 C53.9596593,103.846154 58.6920663,103.164087 62.6086957,101.936367"
//                         id="Fill-34"
//                         fill="#E05A5B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M15.0440258,70.6153846 C15.0440258,70.6153846 13.520898,50.790303 31.7938704,43.8622365 C50.0668428,36.9341701 60.7260007,31.6630903 61.4875645,17.9579212 C61.4875645,17.9579212 67.1979254,29.9057623 61.4875645,37.9882052 C61.4875645,37.9882052 68.3398152,38.3398516 69.4817049,33.7711606 C69.4817049,33.7711606 72.1467224,41.3021786 71.0048326,43.8622365 C71.0048326,43.8622365 74.4305019,43.6109314 74.8117399,38.691498 L77.0955194,64.6961546 L78.6186471,70.6153846 L84.2004086,52.2095442 C84.2004086,52.2095442 98.8041937,17.9579212 67.9348638,9.00223823 C67.9348638,9.00223823 42.0097708,-13.3187191 15.013016,12.3342911 C15.013016,12.3342911 -6.77500684,29.5712915 7.81053717,56.6137117 L15.0440258,70.6153846"
//                         id="Fill-35"
//                         fill="#302C3F"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M15.4875259,12.1723938 C15.4875259,12.1723938 6.94692858,18.8748153 4.17391304,30.4615385 C6.97870839,25.8323803 16.5852914,11.6888702 31.6171421,7.24883935 C49.6835108,1.91045382 68.173913,8.88407676 68.173913,8.88407676 C68.173913,8.88407676 42.3641663,-13.1439004 15.4875259,12.1723938"
//                         id="Fill-36"
//                         fill="#4F4B67"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M87.437116,38.7692308 L87.4380171,38.7665964 C88.5048911,28.4198026 86.1080289,14.8081883 68.173913,9.69230769 C68.173913,9.69230769 87.9804649,21.8778681 87.437116,38.7692308"
//                         id="Fill-37"
//                         fill="#4F4B67"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M21.8136698,60.3050103 C25.1965546,66.6609851 23.7789035,73.9500959 18.6466944,76.585258 C13.515404,79.22042 6.61273882,76.2044229 3.22985409,69.8484482 C-0.153030651,63.4933759 1.26462039,56.2042651 6.39591079,53.569103 C11.52812,50.9330385 18.4307851,53.9490356 21.8136698,60.3050103"
//                         id="Fill-38"
//                         fill="#E5726D"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M19.4782609,72 C19.4574216,71.7431755 19.4053235,71.5204746 19.3769063,71.271732 C19.4166903,71.4513295 19.4413186,71.6012935 19.4555271,71.7207258 C19.4223738,70.4339095 19.2244009,69.3796719 18.8796059,68.5535232 C16.1240883,57.848612 5.56521739,56.7692308 5.56521739,56.7692308 C10.9142749,59.8313688 14.2532917,63.2069045 16.3220612,66.0059322 C12.5255281,64.5395183 6.65643649,67.6438617 6.65643649,67.6438617 C13.6195889,65.8936837 16.7871554,67.3430358 18.241167,69.0240688 C19.1997727,70.836208 19.4782609,72 19.4782609,72"
//                         id="Fill-39"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M17.1119818,74.7692308 C17.1119818,74.7692308 9.23478718,52.6577537 18.2024448,40.1538462 L23.6521739,56.5592859 L17.1119818,74.7692308"
//                         id="Fill-40"
//                         fill="#302C3F"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M72.7949729,60.3050103 C69.4121855,66.6609851 70.8297958,73.9500959 75.9618572,76.585258 C81.0929999,79.22042 87.9954663,76.2044229 91.3782537,69.8484482 C94.7619598,63.4933759 93.3443496,56.2042651 88.2122881,53.569103 C83.0802267,50.9330385 76.1777603,53.9490356 72.7949729,60.3050103"
//                         id="Fill-41"
//                         fill="#E5726D"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M75.1304348,72 C75.151274,71.7431755 75.2024249,71.5204746 75.2308421,71.271732 C75.1910581,71.4513295 75.1673771,71.6012935 75.1531685,71.7207258 C75.1863219,70.4339095 75.3842948,69.3796719 75.7290897,68.5535232 C78.4846074,57.848612 89.0434783,56.7692308 89.0434783,56.7692308 C83.6944208,59.8313688 80.355404,63.2069045 78.2866345,66.0059322 C82.0831676,64.5395183 87.9513119,67.6438617 87.9513119,67.6438617 C80.9881595,65.8936837 77.8224874,67.3430358 76.3684759,69.0240688 C75.4098702,70.836208 75.1304348,72 75.1304348,72"
//                         id="Fill-42"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M76.249476,77.5384615 C76.249476,77.5384615 86.0447271,71.578868 80.2582086,44.3076923 L68.173913,48.1239149 L76.249476,77.5384615"
//                         id="Fill-43"
//                         fill="#302C3F"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M77.0196517,65.2612441 L74.746274,38.9655899 C74.3667725,43.9400728 70.9567059,44.1941901 70.9567059,44.1941901 C72.0933948,41.6054845 69.4405156,33.9901929 69.4405156,33.9901929 C68.3038267,38.6100085 61.4827858,38.2544271 61.4827858,38.2544271 C67.16623,30.08154 61.4827858,18 61.4827858,18 C60.7246906,31.8585328 50.1140816,37.1885971 31.9243365,44.1941901 C18.3430839,49.4246185 15.7492181,61.922984 15.3043478,67.9212487 C15.794613,84.4635526 20.6890934,99.6923077 46.7475942,99.6923077 C69.4532261,99.6923077 75.989187,88.9444264 77.686957,75.8674413 C78.1463536,72.3253389 77.8966816,68.7229065 77.0196517,65.2612441"
//                         id="Fill-44"
//                         fill="#EE9F79"
//                         fillRule="evenodd"></path>
//                       <image
//                         id="Image-46"
//                         // fill="none"
//                         x="37.5652174"
//                         y="78.9230769"
//                         width="16.6956522"
//                         height="5.53846154"
//                         xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAAEGWlDQ1BrQ0dDb2xvclNwYWNlR2VuZXJpY1JHQgAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VQNcC+8AAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAACagAwAEAAAAAQAAAAwAAAAALEs1xAAAADBJREFUOBFjfJAf9J9hEAKmQegmsJNGHUZqzIyG2GiIkRoCpKofTWOjIUZqCJCqHgArKQK41rouBgAAAABJRU5ErkJggg=="></image>
//                       <path
//                         d="M64,58.1534187 C64,60.448144 63.0649255,62.3076923 61.9135351,62.3076923 C60.7611615,62.3076923 59.8270702,60.448144 59.826087,58.1534187 C59.8270702,55.8595483 60.7611615,54 61.9135351,54 C63.0649255,54 64,55.8595483 64,58.1534187"
//                         id="Fill-47"
//                         fill="#150E18"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M30.6086957,58.1538462 C30.6077129,60.4488077 31.5430076,62.3076923 32.6956526,62.3076923 C33.8482975,62.3076923 34.7826087,60.4488077 34.7826087,58.1538462 C34.7826087,55.8588846 33.8482975,54 32.6956526,54 C31.5430076,54 30.6077129,55.8588846 30.6086957,58.1538462"
//                         id="Fill-48"
//                         fill="#150E18"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M25.0434783,52.6153846 C25.0434783,52.6153846 36.1748587,49.096179 41.7391304,49.4101636 C41.7391304,49.4101636 40.8000887,43.3625073 34.1549259,44.4352112 C26.2756751,45.7068028 25.0434783,52.6153846 25.0434783,52.6153846"
//                         id="Fill-49"
//                         fill="#302C3F"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M69.5652174,49.8461538 C69.5652174,49.8461538 58.2666941,47.6959396 52.8695652,48.6357564 C52.8695652,48.6357564 53.0547106,42.6496104 59.6762184,42.9328181 C67.5248961,43.2683381 69.5652174,49.8461538 69.5652174,49.8461538"
//                         id="Fill-50"
//                         fill="#302C3F"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M31.418132,72 C31.300097,72 31.1794772,71.9738062 31.0674731,71.9187088 C30.6633969,71.72361 30.4945292,71.2385727 30.6901055,70.8348266 L33.2437985,65.5346423 C33.4385133,65.1317994 33.921854,64.9637976 34.3242071,65.15709 C34.7282834,65.3521888 34.8962895,65.8372261 34.7015747,66.240069 L32.1478817,71.5402533 C32.0074458,71.8319982 31.7188199,72 31.418132,72"
//                         id="Fill-51"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M25.8528069,72 C25.7347792,72 25.6150286,71.9747023 25.50217,71.9195973 C25.0981191,71.7244716 24.9301235,71.2393672 25.1239646,70.8355652 L27.6774973,65.5346478 C27.8721999,65.1317492 28.3572332,64.9646276 28.7586996,65.1561399 C29.1627505,65.3521691 29.330746,65.8372735 29.136905,66.2401721 L26.5833723,71.5410894 C26.4429452,71.8319714 26.1543374,72.0008998 25.8528069,72"
//                         id="Fill-52"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M64.5821315,72 C64.2805402,72 63.9918742,71.8319882 63.8514188,71.5402258 L61.2973712,66.240628 C61.1043527,65.837761 61.2723822,65.3517914 61.6756528,65.1566809 C62.0797852,64.9642803 62.5623313,65.1313888 62.7570731,65.5351591 L65.3102591,70.8356602 C65.5050009,71.2394305 65.3369715,71.7244968 64.9328391,71.9196073 C64.8199578,71.9747079 64.7001829,72 64.5821315,72"
//                         id="Fill-53"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M68.7554226,72 C68.4538583,72 68.1652183,71.8310936 68.0247755,71.5411527 L65.4718189,66.2409242 C65.2779562,65.8371747 65.4459705,65.3521333 65.849205,65.1561296 C66.2533011,64.9646422 66.7358038,65.1317421 66.9305282,65.5345883 L69.4843464,70.8357201 C69.6790707,71.2394696 69.5101948,71.724511 69.1060987,71.9196114 C68.9932275,71.973806 68.8734634,72 68.7554226,72"
//                         id="Fill-54"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M51.4782609,66.2949428 C51.4782609,68.6801783 49.9212764,70.6153846 48.000393,70.6153846 C46.0787236,70.6153846 44.5217391,68.6801783 44.5217391,66.2949428 C44.5217391,63.907266 46.0787236,60.9230769 48.000393,60.9230769 C49.9212764,60.9230769 51.4782609,63.907266 51.4782609,66.2949428"
//                         id="Fill-55"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <path
//                         d="M49.1725946,77.5384615 C40.6866462,77.5384615 35.4087457,73.7419449 35.1342556,73.5388735 C34.7345907,73.2455481 34.6648506,72.7040242 34.9804695,72.3288017 C35.2951944,71.9552505 35.8754684,71.8909028 36.2751333,72.1825568 C36.3529204,72.2402191 44.1986897,77.8443222 55.8864273,74.9821013 C56.3772908,74.8651054 56.8833541,75.1375387 57.0129993,75.5988368 C57.1426445,76.0601349 56.8466958,76.5314612 56.35315,76.6517998 C53.7665049,77.285249 51.3622572,77.5384615 49.1725946,77.5384615"
//                         id="Fill-56"
//                         fill="#DF4F4B"
//                         fillRule="evenodd"></path>
//                       <polyline
//                         id="Fill-57"
//                         fill="#F0AC8A"
//                         fillRule="evenodd"
//                         points="61.9283478 18.6763846 61.9074783 18.6320769 61.8977391 18.7525385 61.9283478 18.6763846"></polyline>
//                       <path
//                         d="M47.2625947,93.3402764 C30.9939916,93.3402764 22.4701427,88.0506186 18.0869565,80.3076923 C20.966143,91.3663715 28.5154571,99.6923077 47.2492693,99.6923077 C66.3784032,99.6923077 73.7740304,91.6227108 76.5217391,80.9295695 C72.2034035,88.3088087 63.7186425,93.3402764 47.2625947,93.3402764"
//                         id="Fill-58"
//                         fill="#F0AA87"
//                         fillRule="evenodd"></path>
//                     </g>
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </g>
//         </g>
//       </svg>
//     </>
//   );
// };

export const projects = [
  {
    id: 1,
    img: Project1,
    title: "zoe portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    link: "https://zoemillerportfolio.netlify.app/",
  },
  {
    id: 2,
    img: Project2,
    title: "elnaira",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    link: "https://zoemillerportfolio.netlify.app/",
  },
  // {
  //   id: 3,
  //   img: Project3,
  //   title: "Ro portfolio",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // link: "https://zoemillerportfolio.netlify.app/",
  // },

  // {
  //   id: 4,
  //   img: Project4,
  //   title: "john smith",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
  // {
  //   id: 5,
  //   img: Project5,
  //   title: "esp university",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
  // {
  //   id: 6,
  //   img: Project6,
  //   title: "Kana",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
];
