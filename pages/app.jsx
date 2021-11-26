import Head from 'next/head';

import Header from '/src/components/header/Header';
import LibraryComponent from '/src/components/library/LibraryComponent';


export default function LibraryPage() {
  return (
    <div className="contariner">
      <Head>
        <title>Personal Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <LibraryComponent />
      </main>
    </div>
  );
}
