import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { useRouter } from 'next/router';

const renderSite = site => (
  <li>
    <Link href={site.link} as={site.link}>
      <a>{site.name}</a>
    </Link>{' '}
    - {site.title}
  </li>
);

const Ring = ({ data }) => {
  const router = useRouter();
  const { slug = [] } = router.query;
  const joinedSlug = slug.join('/');
  return (
    <>
      <div>
        Back to{' '}
        <Link href="/" as="/">
          <a>RingWorld</a>
        </Link>
      </div>
      <h1>{data?.name}</h1>
      <h3>{data?.description}</h3>
      {data?.sites ? ` - ${data?.sites?.length} sites - ` : undefined}
      <ul>{data?.sites && data.sites.map(renderSite)}</ul>
      <font size="-1">
        {' '}
        <Link href={`/ring/${joinedSlug}.json`}>
          <a>JSON</a>
        </Link>{' '}
        <Link href={`/ring/${joinedSlug}/random`}>
          <a>Random</a>
        </Link>
      </font>{' '}
      <Link href={`/ring/${joinedSlug}/search`}>
        <a>
          <font size="-1">Search Ring</font>
        </a>
      </Link>
    </>
  );
};
// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [
      { params: { slug: ['arthena'] } },
      { params: { slug: ['sample'] } },
      { params: { slug: ['space-potato'] } }
    ],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug = [] } = params;
  const joinedSlug = slug.join('/');
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`http://localhost:3000/ring/${path}.json`);
  // const data = await res.json();
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), `public/ring/${joinedSlug}.json`))
  );

  // Pass post data to the page via props
  return {
    props: { data },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}

export default Ring;
