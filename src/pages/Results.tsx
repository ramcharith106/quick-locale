import { useState } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ResultsGrid } from "@/components/ResultsGrid";

interface ResultsProps {
  destination: string;
  onSearch: (destination: string) => void;
  onBack: () => void;
}

// Mock data for demonstration
const generateMockResults = (destination: string) => {
  const attractions = [
    {
      id: "1",
      name: `${destination} Central Park`,
      rating: 4.5,
      reviewCount: 1234,
      image: "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?w=500&h=300&fit=crop",
      address: `Central ${destination}`,
      type: "attraction" as const,
    },
    {
      id: "2",
      name: `Historic ${destination} Museum`,
      rating: 4.7,
      reviewCount: 892,
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?w=500&h=300&fit=crop",
      address: `Museum District, ${destination}`,
      type: "attraction" as const,
    },
    {
      id: "3",
      name: `${destination} Observatory`,
      rating: 4.3,
      reviewCount: 567,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      address: `Observatory Hill, ${destination}`,
      type: "attraction" as const,
    },
    {
      id: "4",
      name: `${destination} Waterfront`,
      rating: 4.6,
      reviewCount: 2103,
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=300&fit=crop",
      address: `Waterfront District, ${destination}`,
      type: "attraction" as const,
    },
  ];

  const restaurants = [
    {
      id: "5",
      name: `The Local Table`,
      rating: 4.8,
      reviewCount: 456,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
      address: `Downtown ${destination}`,
      type: "restaurant" as const,
      priceLevel: "$$$$",
      openNow: true,
    },
    {
      id: "6",
      name: `${destination} Bistro`,
      rating: 4.4,
      reviewCount: 789,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      address: `Arts Quarter, ${destination}`,
      type: "restaurant" as const,
      priceLevel: "$$$",
      openNow: true,
    },
    {
      id: "7",
      name: `Street Food Paradise`,
      rating: 4.2,
      reviewCount: 1234,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop",
      address: `Market Street, ${destination}`,
      type: "restaurant" as const,
      priceLevel: "$",
      openNow: false,
    },
    {
      id: "8",
      name: `Rooftop Dining`,
      rating: 4.7,
      reviewCount: 345,
      image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=500&h=300&fit=crop",
      address: `Skyline District, ${destination}`,
      type: "restaurant" as const,
      priceLevel: "$$$",
      openNow: true,
    },
  ];

  const hotels = [
    {
      id: "9",
      name: `Grand ${destination} Hotel`,
      rating: 4.6,
      reviewCount: 2134,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop",
      address: `Luxury District, ${destination}`,
      type: "hotel" as const,
      priceLevel: "$$$$",
    },
    {
      id: "10",
      name: `Boutique Stay`,
      rating: 4.5,
      reviewCount: 687,
      image: "https://images.unsplash.com/photo-1522798514-97ceb8c4ea0d?w=500&h=300&fit=crop",
      address: `Historic Quarter, ${destination}`,
      type: "hotel" as const,
      priceLevel: "$$$",
    },
    {
      id: "11",
      name: `Budget Comfort Inn`,
      rating: 4.1,
      reviewCount: 1456,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
      address: `Transit Hub, ${destination}`,
      type: "hotel" as const,
      priceLevel: "$$",
    },
    {
      id: "12",
      name: `Luxury Resort & Spa`,
      rating: 4.9,
      reviewCount: 523,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
      address: `Resort Area, ${destination}`,
      type: "hotel" as const,
      priceLevel: "$$$$$",
    },
  ];

  return { attractions, restaurants, hotels };
};

export const Results = ({ destination, onSearch, onBack }: ResultsProps) => {
  const [loading] = useState(false);
  const results = generateMockResults(destination);

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
            <h2 className="text-3xl font-bold">Exploring {destination}</h2>
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
              results={results.attractions}
              icon="🎯"
            />
            
            <ResultsGrid
              title="Best Restaurants"
              results={results.restaurants}
              icon="🍽️"
            />
            
            <ResultsGrid
              title="Hotel Stays"
              results={results.hotels}
              icon="🏨"
            />
          </div>
        )}
      </main>
    </div>
  );
};