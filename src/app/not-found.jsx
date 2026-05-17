'use client'
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#1e3a8a,_#0f172a_45%,_#020617_100%)] px-4">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                        <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></span>
                        Page not found
                    </div>

                    <h1 className="text-7xl font-black tracking-tight text-white md:text-9xl">
                        404
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
                        Oops! This page doesexist.
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
                        The page y get you back to a working page.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                        >
                            Go Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;