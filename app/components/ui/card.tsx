interface CardProps {
  children: React.ReactNode;
  className?: string; // Pour ajouter des classes supplémentaires
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
}
