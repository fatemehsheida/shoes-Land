export default function BackgroundWelcome() {
  return (
    <div>
      <div className="relative overfelow-hidden w-screen h-screen  flex flex-col justify-end z-30 after:absolute after:z-10 after:inset-0 after:bg-[url('/src/assets/shoes-wallpaper.png')]  after:bg-cover after:left-[-181px] after:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/0 before:to-black/80 before:z-20 before:pointer-events-none"></div>{" "}
      <div className="absolute text-white">
        <h3 className="">Welcome to 👋</h3>
        <h1>Shoea</h1>
        <p>
          The best sneakers & shoes e-commerse app of the century for your
          fashion needs
        </p>
      </div>
    </div>
  );
}
