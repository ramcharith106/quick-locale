import { useState } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ResultsGrid } from "@/components/ResultsGrid";
import { CityData } from "@/data/predefinedCities";

interface ResultsProps {
  cityData: CityData;
  onSearch: (destination: string) => void;
  onBack: () => void;
}

export const Results = ({ cityData, onSearch, onBack }: ResultsProps) => {
  const [loading] = useState(false);
  const { name, attractions, restaurants, hotels } = cityData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="text-primary-foreground hover:bg-primary-light/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">L</span>
                </div>
                <h1 className="text-xl font-bold">Local Lens</h1>
              </div>
            </div>
            
            <SearchBar 
              onSearch={onSearch} 
              className="hidden md:block max-w-md"
            />
          </div>
        </div>
      </header>

      {/* Destination Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="h-6 w-6" />
            <h2 className="text-3xl font-bold">Exploring {name}</h2>
          </div>
          <p className="text-primary-foreground/90 text-lg">
            Discover the best attractions, restaurants, and hotels
          </p>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-6 py-4 bg-secondary">
        <SearchBar onSearch={onSearch} />
      </div>

      {/* Results */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Finding the best places for you...</p>
          </div>
        ) : (
          <div>
            <ResultsGrid
              title="Top Tourist Places"
              results={attractions}
              icon="🎯"
            />
            
            <ResultsGrid
              title="Best Restaurants"
              results={restaurants}
              icon="🍽️"
            />
            
            <ResultsGrid
              title="Hotel Stays"
              results={hotels}
              icon="🏨"
            />
          </div>
        )}
      </main>
    </div>
  );
};