import fs from 'fs';
import path from 'path';
import glob from 'glob';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const renderSite = site => (
  <li key={site.link}>
    <Link href={site.link} as={site.link}>
      <a>{site.name}</a>
    </Link>{' '}
    - {site.title}
  </li>
);

const Ring = ({ data }) => {
  const router = useRouter();
  const { slug = [], index } = router.query;

  useEffect(() => {
    // TODO revisit this logic. Directs users to the ?index page, but in a janky way
    router.replace(router.asPath.split('?')[0], undefined, { shallow: true });
    if (index && data?.sites)
      return router.push(data.sites[parseInt(index, 10)].link);
  }, []);

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
  const files = glob.sync(path.join(process.cwd(), 'public/ring/**/*.json'));
  // less stable than regex. couldn't get regex to work
  const matches = files.map(
    file => file.replace('.json', '').split('public/ring/')[1]
  );
  // const pattern = /\/public\/ring\/(.+).json$/g; // extracts file name from ring directory - json extension
  // const matches = files.map((file) => pattern.exec(file));
  return {
    paths: matches.map(slug => {
      return { params: { slug: [slug] } };
    }),
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
