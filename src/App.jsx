// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import RedeemPage from "./pages/RedeemPage";
// import SubmitPage from "./pages/SubmitPage";
// import SmoothScroll from "./components/SmoothScroll.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <SmoothScroll>
//       <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
//                    bg-gradient-to-r from-green-400/80 via-lime-200/60 to-yellow-100/50
//                    backdrop-blur-lg border border-green-200/30 rounded-full shadow-lg 
//                    px-8 py-3 flex justify-between items-center max-w-[1200px] w-full mx-auto">
//   <Link 
//     to="/" 
//     className="font-bold text-green-800 text-xl cursor-pointer hover:scale-105 transition-transform"
//   >
//     GREENLENS
//   </Link>
//   <nav className="flex gap-6">
//     <Link 
//       to="/" 
//       className="font-semibold text-green-700 hover:text-green-900 transition-colors"
//     >
//       Rewards
//     </Link>
//     <Link 
//       to="/submit" 
//       className="font-semibold text-green-700 hover:text-green-900 transition-colors"
//     >
//       Redeem
//     </Link>
//   </nav>
// </header>
//         <main className="pt-24 min-h-screen"
//   style={{ background: "linear-gradient(135deg, #a7f3d0 0%, #d9f99d 100%)" }}>
//           <Routes>
//             <Route path="/" element={<RedeemPage />} />
//             <Route path="/submit" element={<SubmitPage />} />
//           </Routes>
//         </main>
//       </SmoothScroll>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import DashboardPage from "./pages/DashboardPage";
import RecommendationPage from "./pages/RecommendationPage";
// import RedeemPage from "./pages/RedeemPage";
// import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A5D6A7] to-[#E8F5E9] p-8">
      <RecommendationPage />
    </div>
  );
}

export default App;
