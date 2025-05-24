import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./RoutesWithAnimations";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Styles
import "./styles/globals.css";
import PageNavigator from "./components/PageNavigator";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <PageNavigator />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
