// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import HostFleet from "./pages/HostFleet.tsx";
import FAQ from "./pages/FAQ.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/ukrooze/" element={<Home />} />
      <Route path="/ukrooze/host-fleet" element={<HostFleet />} />
      <Route path="/ukrooze/faq" element={<FAQ />} />

      {/* <Route path="/ukrooze/contact" element={<Contact />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
