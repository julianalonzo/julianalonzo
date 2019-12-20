export default function Introduction() {
  return (
    <div
      className="h-screen-3/4 h-full bg-green-200 bg-cover bg-bottom relative pb-4 md:h-screen md:bg-fixed"
      style={{ backgroundImage: `url("/static/flat-mountains.svg")` }}
    >
      <div className="container mx-auto text-center pt-24 px-4 md:text-left md:px-12">
        <h1 className="animated fadeInDown text-4xl font-extrabold text-green-900 font-serif md:text-6xl">
          I'm Julian Alonzo
        </h1>
        <p className="animated fadeInDown text-lg text-yellow-900 font-sans mb-6 md:text-3xl md:-mt-2 md:font-light">
          a web developer.
        </p>
        <div className="animated fadeInDown">
          <a
            href="#projects"
            className="py-2 px-4 bg-yellow-400 font-sans text-yellow-900 uppercase text-sm tracking-widest rounded-full outline-none shadow-md hover:shadow-lg hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
          >
            View Projects
          </a>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 260"
        className="absolute bottom-0 fill-current text-gray-100"
        id="projects"
      >
        <path
          fillOpacity="1"
          d="M0,256L21.8,250.7C43.6,245,87,235,131,240C174.5,245,218,267,262,256C305.5,245,349,203,393,181.3C436.4,160,480,160,524,144C567.3,128,611,96,655,90.7C698.2,85,742,107,785,122.7C829.1,139,873,149,916,149.3C960,149,1004,139,1047,149.3C1090.9,160,1135,192,1178,192C1221.8,192,1265,160,1309,133.3C1352.7,107,1396,85,1418,74.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        />
      </svg>
    </div>
  );
}
