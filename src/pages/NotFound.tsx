
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-minecraft-darker flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-minecraft-blue mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            Sorry, we couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          <Button 
            className="minecraft-button bg-minecraft-blue hover:bg-minecraft-dark-blue text-white border-none"
            onClick={() => window.location.href = '/'}
          >
            RETURN HOME
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
