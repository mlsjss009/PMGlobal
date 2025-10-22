export function Statistics() {
  const stats = [
    { value: "$20B+", label: "Projects Managed" },
    { value: "150+", label: "Successful Deliveries" },
    { value: "17+", label: "Countries Served" },
    { value: "30+", label: "Years Experience" },
  ];

  return (
    <section className="py-8 md:py-10 bg-primary/5 border-y">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-2" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-primary mb-1 md:mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
