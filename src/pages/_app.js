import '../style.css'; // one global style sheet

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
