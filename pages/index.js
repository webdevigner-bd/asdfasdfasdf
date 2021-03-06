import Head from 'next/head';
import LayoutHome from '../src/components/layout/layout-home';

export default function Home() {
  return (
    <LayoutHome>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </LayoutHome>
  );
}
