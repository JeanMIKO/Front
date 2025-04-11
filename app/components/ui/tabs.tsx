import React from "react";

export function Tabs({ value, onValueChange, children }: { value: string, onValueChange: (value: string) => void, children: React.ReactNode }) {
  return <div className="flex space-x-4 border-b">{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function TabsTrigger({
  value,
  onClick,
  isActive,
  children,
}: {
  value: string;
  onClick: (value: string) => void;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => onClick(value)} // Changer la valeur de l'onglet sélectionné
      className={`px-4 py-2 text-gray-600 hover:text-black ${isActive ? 'border-b-2 border-blue-500' : ''}`}
    >
      {children}
    </button>
  );
}
