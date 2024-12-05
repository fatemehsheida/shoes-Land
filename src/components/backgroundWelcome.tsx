export default function BackgroundWelcome() {
  return (
    <div className="w-[428px] h-[908px] ">
<div className="background-wallpaper opacity-90 w-full h-full bg-[url(/src/assets/shoes-wallpaper.png)] bg-no-repeat mx-auto">
</div>
      <div className="absolute top-[650px] left-7 gap-5 text-white w-full  flex flex-col">
        <h3 className="font-bold text-2xl">Welcome to 👋</h3>
        <h1 className="font-bold text-4xl">Shoea</h1>
        <p className="font-semibold">
          The best sneakers & shoes e-commerse app of the century for your
          fashion needs
        </p>
      </div>
    </div>
  );
}
