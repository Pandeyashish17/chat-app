import "../styles/global.css";

import { ContextProvider } from "../context";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </ContextProvider>
  );
}
