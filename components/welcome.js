import React from 'react';

export default function welcome() {
  return (
    <>
      <div className="bg-green-200 p-1 text-center">
        <div className="mt-8">
          <h1 className="text-2xl text-green-800">I'm Julian Aubrey Alonzo</h1>
          <h2 className="text-green-700">a web developer</h2>
        </div>
        <div className="mt-4">
          <img src="../static/web_developer.png" className="h-32 m-auto" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#c6f6d5"
          fillOpacity="1"
          d="M0,160L26.7,170.7C53.3,181,107,203,160,186.7C213.3,171,267,117,320,112C373.3,107,427,149,480,181.3C533.3,213,587,235,640,250.7C693.3,267,747,277,800,256C853.3,235,907,181,960,170.7C1013.3,160,1067,192,1120,181.3C1173.3,171,1227,117,1280,90.7C1333.3,64,1387,64,1413,64L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        />
      </svg>
    </>
  );
}
