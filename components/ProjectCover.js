export default function ProjectCover({ coverPhotoPath, mainProjectImagePath }) {
  return (
    <section>
      <div
        className="h-screen-1/4 bg-yellow-200 bg-cover bg-center md:h-screen-1/2 md:bg-fixed relative"
        style={{
          backgroundImage: `url("${coverPhotoPath}")`
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 210"
          className="absolute bottom-0 fill-current text-gray-100"
        >
          <path
            fillOpacity="1"
            d="M0,128L30,149.3C60,171,120,213,180,202.7C240,192,300,128,360,128C420,128,480,192,540,186.7C600,181,660,107,720,64C780,21,840,11,900,32C960,53,1020,107,1080,144C1140,181,1200,203,1260,192C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>
      <div className="relative z-10 pb-1/2 w-11/12 mx-auto shadow-xl rounded-lg -mt-1/6 sm:w-10/12 sm:pb-5/12 md:w-9/12 md:pb-2/5 lg:w-3/5 lg:pb:1/3 xl:w-1/2 xl:pb-1/4">
        <img
          className="absolute h-full w-full object-cover rounded-lg"
          src={mainProjectImagePath}
        />
      </div>
    </section>
  );
}
