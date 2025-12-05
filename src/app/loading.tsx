export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-20 right-8 h-64 w-64 rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-background/80 px-8 py-10 shadow-lg shadow-primary/10 backdrop-blur-xl">
        <div
          className="h-14 w-14 animate-spin rounded-full border-4 border-primary/30 border-t-primary"
          aria-hidden="true"
        />
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/50 font-space-grotesk">
            Loading
          </p>
          <p className="text-lg font-semibold text-foreground font-outfit">
            Preparing your page...
          </p>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
            <div className="h-full w-[45%] animate-[shimmer_1.6s_ease_infinite] bg-linear-to-r from-primary/60 via-primary/30 to-primary/60" />
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
            <div className="h-full w-[65%] animate-[shimmer_1.6s_ease_infinite] bg-linear-to-r from-primary/60 via-primary/30 to-primary/60" />
          </div>
        </div>
      </div>

      <style>{`@keyframes shimmer { 0% { transform: translateX(-60%); } 50% { transform: translateX(10%); } 100% { transform: translateX(110%); } }`}</style>
    </div>
  );
}
