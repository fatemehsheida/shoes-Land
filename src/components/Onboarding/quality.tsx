interface Quality {
  setPage: (value: number) => void;
}
const Page1: React.FC<Quality> = ({ setPage }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-centerp">
      <div className="w-full h-[60%]">
        <img src="/src/assets/obsp1-img2.png" className="w-full h-full" />
      </div>
      <div className="relative w-full h-full flex flex-col items-center gap-16 pt-8 px-6">

        <p className="text-2xl leading-relaxed font-bold text-center">
          We provide high quality products just for you
        </p>
        <div className="felx flex-col">
          <div className=" flex gap-2 absolute bottom-32 left-[40%]">

            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black opacity-50"></div>
            <div className="w-8 h-1 bg-black opacity-50"></div>
          </div>
          <button
            onClick={() => setPage(1)}

            className="bg-black hover:bg-gray-800 rounded-full text-white w-[90%] py-3 fixed bottom-8 left-[5%]"

          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
