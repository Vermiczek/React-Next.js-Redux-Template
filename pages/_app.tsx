import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NavBar } from "./components/NavBar";
import store from "./store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [screen, setScreenState] = useState(0);

  useEffect(() => {
    if (screen === 1) router.push("pokemonList");
  }, [screen]);

  return (
    <Provider store={store}>
      <div>
        <NavBar screenSetter={setScreenState} />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
