import { useState } from "react";
import Quality from "../components/Onboarding/quality";
import SatisFaction from "../components/Onboarding/satisfaction"


const Onboarding = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {page === 0 && <Quality setPage={setPage} />}
      {page === 1 && <SatisFaction setPage={setPage} />}

    </div>
  );
};

export default Onboarding;