import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes";
// import LayoutUI from "./components/Layout/Layout";

import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import { NavMenu } from "@shopify/app-bridge-react";


export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");


  return (

    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <NavMenu>
        <Link to="/" rel="home">Home</Link>
        <Link to="/Features">Features</Link>
          {/* <Link to="/Features">Features</Link>
          <Link to="/PincodeChecker">Pincode Checker</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/coupledWith">Coupled With</Link>
          <Link to="/sizeChartupgrade">Size Chart</Link>
          <Link to="/customProductLabel">Custom Product Label</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/support">Support</Link> */}

        </NavMenu>
        {/* <LayoutUI title={"Product Obtimizer"} pages={pages}> */}
          <Routes pages={pages} />
        {/* </LayoutUI> */}
      </AppProvider>
    </BrowserRouter>

  );
}
