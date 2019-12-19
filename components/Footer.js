import ScrollAnimation from 'react-animate-on-scroll';

export default function Footer() {
  return (
    <footer id="contacts">
      <svg
        className="fill-current text-green-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 275"
      >
        <path
          fillOpacity="1"
          d="M0,160L80,154.7C160,149,320,139,480,117.3C640,96,800,64,960,85.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
      <div className="bg-green-300 pb-8 -mt-1">
        <div className="container mx-auto px-4 pt-4 text-center md:px-12 md:text-left">
          <div className="mb-16">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <h1 className="text-green-900 text-3xl font-sans font-extrabold md:text-4xl mb-4">
                Let's work together
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce>
              <p className="text-green-900 font-sans mb-6 leading-loose lg:w-1/2">
                If you have a job opportunity for me, a project you want to
                start, or just want to say hi, then feel free to reach out to
                me.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce>
              <a
                href="mailto:julianaubreya@gmail.com"
                target="_blank"
                className="inline-flex items-center px-8 py-2 bg-yellow-400 text-yellow-900 rounded-full uppercase font-sans tracking-widest  shadow-md focus:outline-none hover:shadow-lg hover:bg-yellow-500 focus:shadow-lg focus:bg-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current h-6 mr-4 inline"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z" />
                </svg>
                Message me
              </a>
            </ScrollAnimation>
          </div>
          <div className="w-full text-center md:text-left">
            <ScrollAnimation
              animateIn="fadeInUp"
              offset={0}
              animateOnce
              delay={700}
            >
              <ul className="py-4 inline-flex items-center">
                <li className="mr-24 text-green-900 font-sans">
                  <a
                    href="https://linkedin.com/in/julianalonzo"
                    target="_blank"
                    className="inline-flex items-center focus:outline-none p-2 focus:bg-green-400 rounded-lg"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current h-6 mr-2"
                    >
                      <title>LinkedIn icon</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li className="text-green-900 font-sans">
                  <a
                    href="https://github.com/julianalonzo"
                    target="_blank"
                    className="inline-flex items-center focus:outline-none p-2 focus:bg-green-400 rounded-lg"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current h-6 mr-2"
                    >
                      <title>GitHub icon</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Github
                  </a>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </footer>
  );
}
