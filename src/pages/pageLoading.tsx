import Loading from "../components/loadingLogo";
import SiteTitle from "../components/siteTitle";
import SiteLogo from "../components/siteLogo";

interface LoadingProps {
  setPage: (value: number) => void;
}

const LoadingPage: React.FC<LoadingProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(1);
  }, 3000);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center mt-72">
        <SiteLogo />
        <SiteTitle />
      </div>

      <Loading />
    </div>
  );
};
export default LoadingPage;
