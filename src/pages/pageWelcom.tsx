import BackgroundWelcome from "../components/backgroundWelcome";
interface WelcomePageProps {
  setPage: (value: number) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(2);
  }, 2000);

  return (
    <div>
      <BackgroundWelcome />
    </div>
  );
};
export default WelcomePage;
