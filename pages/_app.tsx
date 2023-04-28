import "@/styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Alert from "@/components/Alert";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Alert />
    </Provider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(context.ctx);
  }
  return {
    pageProps,
  };
};

export default MyApp;
