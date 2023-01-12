import Main from "../layouts/Main";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Main>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </Main>
    </>
  );
}
