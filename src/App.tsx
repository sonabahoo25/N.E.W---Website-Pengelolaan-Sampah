import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recycling from "./pages/services/Recycling";
import Transport from "./pages/services/Transport";
import Cleaning from "./pages/services/Cleaning";
import ThreeRConcept from "./pages/articles/ThreeRConcept";
import WasteTypes from "./pages/articles/WasteTypes";
import PlasticProblem from "./pages/articles/PlasticProblem";
import Career from "./pages/Career";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Services Routes */}
          <Route path="/services/recycling" element={<Recycling />} />
          <Route path="/services/transport" element={<Transport />} />
          <Route path="/services/cleaning" element={<Cleaning />} />
          
          {/* Articles Routes */}
          <Route path="/articles/3r-concept" element={<ThreeRConcept />} />
          <Route path="/articles/waste-types" element={<WasteTypes />} />
          <Route path="/articles/plastic-problem" element={<PlasticProblem />} />
          
          {/* Other Pages */}
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* 404 - MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
