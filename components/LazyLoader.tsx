// Route loading screen. It fades in after a short delay so fast loads never flash it.
const LazyLoader = () => {
  return (
    <section
      role="status"
      aria-live="polite"
      className="flex h-screen items-center justify-center bg-[#201e1d] [animation:loaderIn_.4s_ease_.25s_both]"
    >
      <span className="sr-only">Loading...</span>
      <div className="flex flex-col items-center gap-5">
        <span
          aria-hidden
          className="block h-4 w-4 [animation:loaderPulse_1.4s_ease-in-out_infinite]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.74 0.13 250), #f3f2f2 50%, oklch(0.76 0.15 62))",
          }}
        />
        <span aria-hidden className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3f2f2]/50">
          Ajesh S
        </span>
      </div>
      <style>{`
        @keyframes loaderIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes loaderPulse {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: .7 }
          50% { transform: rotate(90deg) scale(1.5); opacity: 1 }
        }
        @media (prefers-reduced-motion: reduce) { section[role="status"] * { animation: none !important } }
      `}</style>
    </section>
  );
};
export default LazyLoader;
