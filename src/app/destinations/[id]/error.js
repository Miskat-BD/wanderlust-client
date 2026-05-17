"use client"
const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_45%,_#000_100%)] px-4">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />

                <div className="relative z-10">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15 ring-1 ring-red-400/30">
                        <svg
                            className="h-8 w-8 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v4m0 4h.01M10.29 3.86l-7.2 12A2 2 0 004.8 19h14.4a2 2 0 001.71-3.14l-7.2-12a2 2 0 00-3.42 0z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Something went wrong
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-300 md:text-base">
                        An unexpected error occurred while loading this page. Please try again,
                        and if the problem continues, refresh the app.
                    </p>

                    {error?.message ? (
                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left text-xs text-slate-300">
                            <span className="mb-1 block font-semibold text-white/80">Error details</span>
                            <code className="break-words">{error.message}</code>
                        </div>
                    ) : null}

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            onClick={() => reset?.()}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-transform duration-300 hover:scale-105 hover:shadow-red-500/40"
                        >
                            Try Again
                        </button>

                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;