import { ResultCard } from "./ResultCard";

interface ResultItem {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  address?: string;
  type: "attraction" | "restaurant" | "hotel";
  priceLevel?: string;
  openNow?: boolean;
}

interface ResultsGridProps {
  title: string;
  results: ResultItem[];
  icon: string;
}

export const ResultsGrid = ({ title, results, icon }: ResultsGridProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="h-px flex-1 bg-border"></div>
      </div>
      
      {results.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-50">🤷‍♂️</div>
          <p className="text-muted-foreground text-lg">No results found for this category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((result) => (
            <ResultCard key={result.id} {...result} />
          ))}
        </div>
      )}
    </section>
  );
};