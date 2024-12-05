import { useState } from "react";
import LoadingPage from "../pages/pageLoading"
import WelcomePage from "../pages/pageWelcom";
// import Boarding from "../../modules/onboarding/boarding";

const Onboarding = () => {
  const [page, setPage] = useState(2);

  return (
    <>
      {page === 0 && <LoadingPage setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
      {/* {page === 2 && <Boarding />} */}
    </>
  );
};

export default Onboarding;