import Link from 'next/link';

const HowTo = () => (
  <div className="center">
    <h1>How to Join a Webring</h1>
    <p>
      All WebRings are defined{' '}
      <a href="https://github.com/mldangelo/open-webring/tree/main/public/ring">
        here
      </a>
      . To join, simply add an entry to the ring you wish to join and add one of
      the following to your site.
    </p>

    <blockquote>
      <pre>
        <code>My pre-formatted "quoted" code here.</code>
      </pre>
    </blockquote>

    <div>
      Back to{' '}
      <Link href="/" as="/about">
        <a>Home</a>
      </Link>
      .
    </div>
  </div>
);
export default HowTo;
