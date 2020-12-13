import Link from 'next/link';
import { NextSeo } from 'next-seo';

const Index = () => (
  <>
    <NextSeo
      title="Open-Webring"
      description="A free, open-source, MIT licensed webring community. Join a ring, create your own, or host your own."
    />
    <h1>Open-Webring</h1>
    <p>
      Learn about how to join or create a ring{' '}
      <Link
        href="https://github.com/mldangelo/open-webring"
        as="https://github.com/mldangelo/open-webring"
      >
        <a>here</a>
      </Link>
      .
    </p>
    <Link href="/about" as="/about">
      <a>About</a>
    </Link>
  </>
);

export default Index;
