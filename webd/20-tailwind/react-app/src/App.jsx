import "./App.css";
import EnterOtp from "./pages/EnterOtp";
import Landing from "./pages/Landing";
import VerifyAge from "./pages/VerifyAge";

function App() {
  return (
    <div className="bg-cblue-700 h-screen">
      {/* <Landing /> */}
      {/* <VerifyAge/> */}
      <EnterOtp />
    </div>
  );
}

// function App() {
//   return (
//     <div className="2xl:bg-cyan-300 xl:bg-yellow-300 lg:bg-red-300 md:bg-violet-300 sm:bg-purple-300 bg-pink-300 h-screen">
//       <div className="flex justify-around *:text-xl">
//         <div className="bg-blue-300 ">child 1</div>
//         <div className="bg-[#00ff00] ">child 2</div>
//         <div className="bg-orange-300 ">child 3</div>
//       </div>

//       <div className="sm:grid sm:grid-cols-12">
//         <div className="bg-blue-500 col-span-4 rounded-sm">
//           Hi there from the first div
//         </div>
//         <div className="bg-green-500 col-span-6 rounded-lg">
//           Hi there from the second div
//         </div>
//         <div className="bg-orange-500 col-span-2 rounded-full">
//           Hi there from the third
//         </div>
//       </div>
//     </div>

//   );
// }

export default App;
