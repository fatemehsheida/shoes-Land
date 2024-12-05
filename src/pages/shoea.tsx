import { useState } from "react";
import LoadingPage from "./pageLoading"
import WelcomePage from "./pageWelcom";
// import Boarding from "../../modules/onboarding/boarding";

const Shoea = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <LoadingPage setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
      {/* {page === 2 && <Boarding />} */}
    </>
  );
};

export default Shoea;