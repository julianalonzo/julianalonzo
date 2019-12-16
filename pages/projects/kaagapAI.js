import '../../styles/main.css';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ProjectCover from '../../components/ProjectCover';

export default function KaagapAI() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Navbar />
      <ProjectCover
        coverPhotoPath="/static/kaagapai-bg.svg"
        mainProjectImagePath="/static/kaagapai-demo.png"
      />
      <div className="container mx-auto mt-12 mb-64 w-11/12 sm:4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <div className="mb-8 md:inline-flex items-center">
          <div className="flex items-center mr-4">
            <img className="w-10 mr-4" src="../../static/kaagapai-logo.svg" />
            <h1 className="text-4xl font-sans font-bold mb-2">kaagapAI</h1>
          </div>
          <a
            href="https://kaagapai.herokuapp.com/"
            target="_blank"
            className="focus:outline-none"
          >
            <button className="py-2 px-4 mr-2 uppercase inline-flex items-center bg-green-400 font-sans text-xs tracking-widest text-green-900 rounded-full outline-none focus:outline-none focus:outline-green-500 shadow-md hover:shadow-lg hover:bg-green-500">
              <svg
                className="fill-current w-4 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
                />
              </svg>
              Visit
            </button>
          </a>
          <a
            href="https://github.com/prometheus-tech/kaagapAI"
            target="_blank"
            className="focus:outline-none"
          >
            <button className="py-2 px-4 inline-flex items-center bg-yellow-400 font-sans text-xs tracking-widest text-yellow-900 rounded-full outline-none focus:outline-none focus:outline-yellow-300 shadow-md hover:shadow-lg hover:bg-yellow-500 uppercase">
              <svg
                className="fill-current w-4 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"
                />
              </svg>
              Code
            </button>
          </a>
        </div>
        <div className="mb-4 inline-flex items-start">
          <div>
            <svg
              className="h-6 fill-current mr-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M3.135,6.89c0.933-0.725,1.707-0.225,2.74,0.971c0.116,0.135,0.272-0.023,0.361-0.1c0.088-0.078,1.451-1.305,1.518-1.361
	C7.82,6.341,7.9,6.231,7.795,6.108C7.688,5.985,7.301,5.483,7.052,5.157c-1.808-2.365,4.946-3.969,3.909-3.994
	c-0.528-0.014-2.646-0.039-2.963-0.004C6.715,1.294,5.104,2.493,4.293,3.052C3.232,3.778,2.836,4.204,2.771,4.263
	c-0.3,0.262-0.048,0.867-0.592,1.344C1.604,6.11,1.245,5.729,0.912,6.021C0.747,6.167,0.285,6.513,0.153,6.628
	C0.02,6.745-0.004,6.942,0.132,7.099c0,0,1.264,1.396,1.37,1.52C1.607,8.741,1.893,8.847,2.069,8.69
	c0.177-0.156,0.632-0.553,0.708-0.623C2.855,8.001,2.727,7.206,3.135,6.89z M8.843,7.407c-0.12-0.139-0.269-0.143-0.397-0.029
	L7.012,8.63c-0.113,0.1-0.129,0.283-0.027,0.4l8.294,9.439c0.194,0.223,0.53,0.246,0.751,0.053L17,17.709
	c0.222-0.195,0.245-0.533,0.052-0.758L8.843,7.407z M19.902,3.39c-0.074-0.494-0.33-0.391-0.463-0.182
	c-0.133,0.211-0.721,1.102-0.963,1.506c-0.24,0.4-0.832,1.191-1.934,0.41c-1.148-0.811-0.749-1.377-0.549-1.758
	c0.201-0.383,0.818-1.457,0.907-1.59c0.089-0.135-0.015-0.527-0.371-0.363c-0.357,0.164-2.523,1.025-2.823,2.26
	c-0.307,1.256,0.257,2.379-0.85,3.494l-1.343,1.4l1.349,1.566l1.654-1.57c0.394-0.396,1.236-0.781,1.998-0.607
	c1.633,0.369,2.524-0.244,3.061-1.258C20.057,5.792,19.977,3.884,19.902,3.39z M2.739,17.053c-0.208,0.209-0.208,0.549,0,0.758
	l0.951,0.93c0.208,0.209,0.538,0.121,0.746-0.088l4.907-4.824L7.84,12.115L2.739,17.053z"
              />
            </svg>
          </div>
          <p className="font-sans leading-relaxed">
            ReactJS, Node.js, Apollo GraphQL, MySQL (with Sequelize)
          </p>
        </div>
        <div className="inline-flex items-start">
          <div>
            <svg
              className="h-6 fill-current mr-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
          <p className="font-sans leading-relaxed mb-6">
            kaagapAI is an online automated psychotherapy text analysis tool for
            mental health practitioners. It uses IBM Watson  services in order
            to extract insights such as keywords, categories, entities,
            sentiments, and emotions from session   documents. It also uses
            Google services in order to preprocess and extract text from various
            forms of files such as   text documents, images, and audio.
          </p>
        </div>
      </div>
    </div>
  );
}
