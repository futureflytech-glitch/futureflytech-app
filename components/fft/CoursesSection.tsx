import Link from "next/link";
import { COURSES } from "@/lib/fft-data";
import { ArrowRight, Clock, Star, Users } from "lucide-react";

export default function CoursesSection() {
  const tech = COURSES.filter(c => c.category === "technology").slice(0, 3);
  const voc = COURSES.filter(c => c.category === "vocational").slice(0, 3);

  return (
    <section id="courses" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Two Divisions, <span className="gradient-text">Infinite Opportunities</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Master technology or ace aviation — both paths lead to thriving careers.
          </p>
        </div>

        {/* Technology Division */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                Technology Division
              </h3>
              <p className="text-slate-500 text-sm mt-0.5">AI, ML, Data Science, Web Dev &amp; More</p>
            </div>
            <Link href="/courses?cat=technology" className="text-cyan-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">View All <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tech.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Vocational Division */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                Vocational Division
              </h3>
              <p className="text-slate-500 text-sm mt-0.5">Cabin Crew, Ground Staff, Personality Dev &amp; More</p>
            </div>
            <Link href="/courses?cat=vocational" className="text-indigo-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">View All <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {voc.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            View All 11 Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: (typeof COURSES)[0] }) {
  return (
    <Link href={`/courses/${course.id}`} className="group glass-card rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 block">
      {course.badge && (
        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          {course.badge}
        </span>
      )}
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl flex-shrink-0`}>
          {course.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-cyan-300 transition-colors">{course.title}</h4>
          <p className="text-slate-500 text-xs line-clamp-2">{course.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-3">
        <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</div>
        <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{course.rating}</div>
        <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.students.toLocaleString()}</div>
        <div className="text-cyan-400 font-semibold">{course.fee}</div>
      </div>
    </Link>
  );
}
