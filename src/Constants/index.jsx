const info = {
  one: "Welcome to Q-Blink! We are a team of passionate developers who specialize in creating beautiful and functional frontend websites for businesses of all sizes. Our mission is to help our clients establish a strong online presence and achieve their digital goals through effective website development.",
  two: "At Q-Blink, we understand that your website is often the first impression customers have of your business. That's why we take great care in designing and developing websites that not only look stunning, but also provide a seamless user experience. From the initial design concept to the final product, we work closely with our clients to ensure that every detail is just right.",
  three:
    "Our team has years of experience in web development, and we pride ourselves on staying up-to-date with the latest trends and technologies in the industry. We use cutting-edge tools and techniques to create websites that are fast, responsive, and optimized for search engines. Our expertise in frontend development includes HTML, CSS, JavaScript, and experience using the React framework.",
  four: "At Q-Blink, we believe that building strong relationships with our clients is key to our success. We take the time to understand your business and your goals, and we work collaboratively with you to create a website that meets your specific needs. Whether you are looking to launch a brand new website or update an existing one or fix any bugs in your website, we are here to help.",
};

export { info };

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
  {
    name: "Team",
    path: "team",
  },
  {
    name: "Testimonials",
    path: "testimonials",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Contact",
    path: "contact",
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
