import React from 'react';

import '../styles/main.css';

import Head from 'next/head';
import Welcome from '../components/welcome';

export default function index() {
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
      </Head>
      <Welcome />
    </div>
  );
}
