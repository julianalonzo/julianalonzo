import '../styles/main.css';

import Head from 'next/head';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julian Alonzo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900|Playfair+Display:400,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Welcome />
      <Projects />
    </div>
  );
}
