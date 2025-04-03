import "./App.css";

function App() {
  return (
    <div className="h-screen bg-white dark:bg-[#242424] text-black dark:text-white">
      <div className="bg-violet-200 w-full border-y-2 border-violet-600 p-2 mb-4">
        <h1 className="font-mono font-extrabold text-center text-[20px] text-black">
          saicharith.com
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2 mx-2">
        <div className="h-16 rounded-full bg-blue-500"></div>
        <div className="h-16 rounded-full bg-orange-500"></div>
        <div className="h-16 rounded-full bg-green-500"></div>
      </div>

      <p className="bg-white sm:bg-yellow-500 md:bg-amber-500 lg:bg-green-500 xl:bg-orange-500 2xl:bg-blue-500 text-center my-2">I appear on screen wider</p>
    </div>
  );
}

export default App;
