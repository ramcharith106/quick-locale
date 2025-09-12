import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (destination: string) => void;
  className?: string;
}

export const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      onSearch(destination.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Where do you want to explore?"
          className="search-input pr-16"
        />
        <Button
          type="submit"
          size="lg"
          className="absolute right-2 px-6 bg-accent hover:bg-accent-light text-accent-foreground shadow-hero"
        >
          <Search className="h-5 w-5 mr-2" />
          Explore
        </Button>
      </div>
    </form>
  );
};