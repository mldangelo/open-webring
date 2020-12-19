import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

/* If not found occurs on /ring/ - renders text about how to register this ring. Else - notfound */

const RingAvailable = () => {
  const router = useRouter();
  const slug = router.asPath.split('/ring/')[1];
  return (
    <>
      <NextSeo
        title={`Open-WebRing | ${slug} Ring Available`}
        description={`Learn how to create the ${slug} ring for free here`}
      />
      <div>
        <h1>Webring Available</h1>
      </div>
    </>
  );
};

const NotFound = () => (
  <>
    <NextSeo
      title="Open-WebRing! | Page Not Found"
      description="A free, open-source, MIT licensed WebRing Community. Join a ring, create your own, or host your own."
    />
    <div>
      <h1>404</h1>
      <h2>We cannot find the page you are looking for</h2>
    </div>
  </>
);

const Handler = () => {
  const router = useRouter();
  return router.asPath.includes('/ring/') ? (
    <RingAvailable slug={router.asPath.split('/ring/')[1]} />
  ) : (
    <NotFound />
  );
};

export default Handler;
