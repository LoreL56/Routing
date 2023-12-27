import { Fragment } from "react";
import MainNavigation from "../components/MainMavigation";

function ErrorPage() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>An Error Occoured!</h1>
        <p>Could not find this page</p>
      </main>
    </Fragment>
  );
}

export default ErrorPage;
