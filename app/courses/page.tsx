"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/fft/Navbar";
import { COURSES } from "@/lib/fft-data";
import { Search, Filter, Clock, Star, Users, ArrowRight } from "lucide-react";

type Cat = "all" | "technology" | "vocational";

export default function CoursesPage() {
  const [cat, setCat] = useState<Cat>("all");
  const [query, setQuery] = useState("");

  const filtered = COURSES.filter(c => {
    const matchCat = cat === "all" || c.category === cat;
    const matchQ = c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen mesh-bg">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            11 Programs Available
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore All <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Technology or Aviation — choose your path to a thriving career.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search courses…"
              className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
            />
          </div>
          <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
            {(["all", "technology", "vocational"] as Cat[]).map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${cat === c ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                {c === "all" ? "All" : c === "technology" ? "Technology" : "Vocational"}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 mb-6 text-slate-500 text-sm">
          <Filter className="w-4 h-4" />
          Showing {filtered.length} program{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(course => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="glass-card rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Banner */}
              <div className={`h-36 bg-gradient-to-br ${course.color} relative flex items-center justify-center`}>
                <div className="text-6xl">{course.icon}</div>
                {course.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur text-white text-xs font-semibold">
                    {course.badge}
                  </span>
                )}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-medium ${course.category === "technology" ? "bg-cyan-500/30 text-cyan-200" : "bg-indigo-500/30 text-indigo-200"}`}>
                  {course.category === "technology" ? "Tech" : "Vocational"}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{course.title}</h3>
                <p className="text-slate-500 text-xs mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</div>
                  <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{course.rating}</div>
                  <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.students.toLocaleString()}</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold text-lg">{course.fee}</span>
                  <span className="flex items-center gap-1 text-sm text-white font-medium group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <div className="text-4xl mb-4">🔍</div>
            <div className="text-lg font-medium text-slate-400">No courses found</div>
            <div className="text-sm mt-1">Try a different search term</div>
          </div>
        )}
      </div>
    </div>
  );
}
