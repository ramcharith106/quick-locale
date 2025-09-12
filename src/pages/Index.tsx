import { useState } from "react";
import { Home } from "./Home";
import { Results } from "./Results";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "results">("home");
  const [destination, setDestination] = useState("");

  const handleSearch = (searchDestination: string) => {
    setDestination(searchDestination);
    setCurrentView("results");
  };

  const handleBack = () => {
    setCurrentView("home");
  };

  if (currentView === "results") {
    return (
      <Results
        destination={destination}
        onSearch={handleSearch}
        onBack={handleBack}
      />
    );
  }

  return <Home onSearch={handleSearch} />;
};

export default Index;
