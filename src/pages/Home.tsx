import { SearchBar } from "@/components/SearchBar";
import heroBackground from "@/assets/hero-background.jpg";

interface HomeProps {
  onSearch: (destination: string) => void;
}

export const Home = ({ onSearch }: HomeProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="pt-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-hero">
                  <span className="text-white text-xl font-bold">L</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Local Lens</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Discover Your Next
                <span className="block text-accent">Adventure</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Find the best attractions, restaurants, and hotels for any destination in seconds
              </p>
            </div>

            <SearchBar onSearch={onSearch} className="max-w-2xl mx-auto" />

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Top Attractions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                <span className="text-sm font-medium">Best Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏨</span>
                <span className="text-sm font-medium">Hotel Stays</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="pb-8 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/70 text-sm">
              Your minimalist portal for travel discovery
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};