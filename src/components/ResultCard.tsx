import { Star, MapPin, Clock } from "lucide-react";

interface ResultCardProps {
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  address?: string;
  type: "attraction" | "restaurant" | "hotel";
  priceLevel?: string;
  openNow?: boolean;
}

export const ResultCard = ({
  name,
  rating,
  reviewCount,
  image,
  address,
  type,
  priceLevel,
  openNow,
}: ResultCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "restaurant":
        return "🍽️";
      case "hotel":
        return "🏨";
      default:
        return "📍";
    }
  };

  return (
    <div className="result-card group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="text-2xl">{getTypeIcon()}</span>
        </div>
        {openNow !== undefined && (
          <div className="absolute top-3 right-3">
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              openNow ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}>
              <Clock className="h-3 w-3" />
              {openNow ? "Open" : "Closed"}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
          {name}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="rating-display">
            <Star className="h-4 w-4 fill-current" />
            <span>{rating}</span>
            <span className="text-xs opacity-75">({reviewCount})</span>
          </div>
          
          {priceLevel && (
            <div className="text-muted-foreground text-sm font-medium">
              {priceLevel}
            </div>
          )}
        </div>
        
        {address && (
          <div className="flex items-start gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-2">{address}</span>
          </div>
        )}
      </div>
    </div>
  );
};