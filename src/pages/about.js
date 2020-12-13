import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{' '}
        <Link href="/" as="/about">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
