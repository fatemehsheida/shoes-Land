import { useState } from "react";
import Quality from "../components/Onboarding/quality";


const Onboarding = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {page === 0 && <Quality setPage={setPage} />}

    </div>
  );
};

export default Onboarding;