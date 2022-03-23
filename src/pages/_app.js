import Footer from "../layouts/Footer";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-body font-primary">
      <main className="max-w-6xl p-6 mx-auto w-90w">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
