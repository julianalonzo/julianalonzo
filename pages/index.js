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
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:400,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Welcome />
    </div>
  );
}
