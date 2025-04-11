"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables, ChartTypeRegistry } from "chart.js";

Chart.register(...registerables);

interface MonthlyUsersChartProps {
  type: "bar" | "line";  // Limité aux types valides pour le graphique
  period: "weekly" | "monthly";  // Propriété pour gérer la période
}

export function MonthlyUsersChart({ type, period }: MonthlyUsersChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Détruire l'ancienne instance du graphique si elle existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Choisir les bonnes données en fonction de la période
    const data = period === "weekly"
      ? [60, 75, 60, 85, 70, 75, 58, 70, 42, 8, 10, 12]  // Pour "hebdomadaire"
      : [30, 40, 55, 70, 50, 65, 58, 60, 40, 30, 35, 45];  // Pour "mensuel"

    // Création du graphique
    chartInstance.current = new Chart(ctx, {
      type: type,  // Utiliser le type du graphique (bar ou line)
      data: {
        labels: period === "weekly"
          ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]  // Labels hebdomadaires
          : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],  // Labels mensuels
        datasets: [
          {
            data: data,
            backgroundColor: [
              "#3b82f6", "#22c55e", "#ef4444", "#eab308",
              "#3b82f6", "#22c55e", "#ef4444", "#eab308",
              "#3b82f6", "#22c55e", "#ef4444", "#eab308"
            ],
            borderWidth: 0,
            borderRadius: 5,
            barPercentage: 0.6,
            categoryPercentage: 0.8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 10 },
            grid: {
              color: "rgba(0,0,0,0.1)",
            },
          },
          x: {
            grid: { display: false },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [type, period]);  // Ajout de 'period' comme dépendance

  return <canvas ref={chartRef} className="w-full h-[300px]" />;
}
