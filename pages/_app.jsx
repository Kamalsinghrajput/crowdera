import '../styles/globals.css';

import CursorBubble from '../src/components/CursorBubble';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CursorBubble />
      <Component {...pageProps} />
    </>);

}

export default MyApp;