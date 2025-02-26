export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
         <div className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-2.png')" }}>
      {/* <div className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"> */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 w-full max-w-4xl px-4 text-left text-white">

          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            The impediment to action advances action,
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            what stands in the way becomes the way
          </h3>
          <div className="flex items-center mb-4">
            <hr className="w-[50px] border-t border-white mr-4" />
            <h1 className="text-md md:text-xl uppercase tracking-widest font-normal">
              Marcus Aurelius
            </h1>
          </div>

          {/* <p className="text-xs md:text-xs uppercase tracking-widest">
            scroll down
          </p> */}
        </div>
      </div>
    </div>
  );
}