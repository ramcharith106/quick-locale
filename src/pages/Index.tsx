import { useState } from "react";
import { Home } from "./Home";
import { Results } from "./Results";
import { predefinedCities, CityData } from "@/data/predefinedCities";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "results">("home");
  const [selectedCityData, setSelectedCityData] = useState<CityData | null>(null);

  const handleSearch = (searchDestination: string) => {
    const foundCity = predefinedCities.find(
      (city) => city.name.toLowerCase() === searchDestination.toLowerCase()
    );

    if (foundCity) {
      setSelectedCityData(foundCity);
      setCurrentView("results");
    } else {
      // Handle case where city is not found in predefined list
      // For now, we can show results page with empty data
      setSelectedCityData({
        name: searchDestination,
        attractions: [],
        restaurants: [],
        hotels: [],
      });
      setCurrentView("results");
    }
  };

  const handleBack = () => {
    setCurrentView("home");
    setSelectedCityData(null);
  };

  if (currentView === "results" && selectedCityData) {
    return (
      <Results
        cityData={selectedCityData}
        onSearch={handleSearch}
        onBack={handleBack}
      />
    );
  }

  return <Home onSearch={handleSearch} />;
};

export default Index;
