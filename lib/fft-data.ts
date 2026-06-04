// Future Fly Tech – Shared Data & Types

export interface Course {
  id: string;
  title: string;
  category: "technology" | "vocational";
  icon: string;
  description: string;
  duration: string;
  fee: string;
  rating: number;
  students: number;
  badge?: string;
  color: string;
}

export interface Batch {
  id: string;
  courseId: string;
  name: string;
  startDate: string;
  timing: string;
  seats: number;
  filled: number;
}

export const COURSES: Course[] = [
  { id: "ai-ml", title: "Artificial Intelligence & ML", category: "technology", icon: "🤖", description: "Master cutting-edge AI/ML techniques with hands-on projects.", duration: "6 months", fee: "₹45,000", rating: 4.9, students: 1240, badge: "Most Popular", color: "from-cyan-500 to-blue-600" },
  { id: "data-science", title: "Data Science & Analytics", category: "technology", icon: "📊", description: "Transform raw data into powerful business insights.", duration: "5 months", fee: "₹38,000", rating: 4.8, students: 980, color: "from-purple-500 to-indigo-600" },
  { id: "web-dev", title: "Full Stack Web Development", category: "technology", icon: "💻", description: "Build production-ready web apps from scratch.", duration: "4 months", fee: "₹32,000", rating: 4.7, students: 1560, badge: "High Demand", color: "from-emerald-500 to-teal-600" },
  { id: "python", title: "Python & Automation", category: "technology", icon: "🐍", description: "Python for automation, scripting, and backend systems.", duration: "3 months", fee: "₹22,000", rating: 4.8, students: 2100, color: "from-yellow-500 to-orange-500" },
  { id: "prompt-eng", title: "Prompt Engineering & GenAI", category: "technology", icon: "✨", description: "Master the art of working with large language models.", duration: "2 months", fee: "₹18,000", rating: 4.9, students: 780, badge: "New", color: "from-pink-500 to-rose-600" },
  { id: "nlp", title: "NLP & Language AI", category: "technology", icon: "🗣️", description: "Build language-aware applications and chatbots.", duration: "4 months", fee: "₹35,000", rating: 4.7, students: 560, color: "from-blue-500 to-violet-600" },
  { id: "cabin-crew", title: "Cabin Crew Training", category: "vocational", icon: "✈️", description: "Comprehensive airline cabin crew certification program.", duration: "3 months", fee: "₹28,000", rating: 4.9, students: 890, badge: "Top Rated", color: "from-sky-500 to-cyan-600" },
  { id: "ground-staff", title: "Ground Staff & Airport Ops", category: "vocational", icon: "🛫", description: "Airport ground operations and passenger handling.", duration: "2 months", fee: "₹20,000", rating: 4.8, students: 640, color: "from-teal-500 to-emerald-600" },
  { id: "personality-dev", title: "Personality Development", category: "vocational", icon: "🌟", description: "Build confidence, leadership, and professional presence.", duration: "2 months", fee: "₹15,000", rating: 4.8, students: 1200, color: "from-amber-500 to-yellow-600" },
  { id: "spoken-english", title: "Spoken English Mastery", category: "vocational", icon: "🎙️", description: "Fluency, accent, and professional communication skills.", duration: "2 months", fee: "₹12,000", rating: 4.7, students: 1800, badge: "Beginner Friendly", color: "from-indigo-500 to-blue-600" },
  { id: "interview-prep", title: "Interview Preparation Pro", category: "vocational", icon: "🎯", description: "Crack any interview with structured preparation.", duration: "1 month", fee: "₹8,000", rating: 4.9, students: 2200, color: "from-rose-500 to-pink-600" },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma", course: "AI & ML", avatar: "PS", rating: 5, text: "Future Fly Tech transformed my career. Got placed at a top MNC within 2 weeks of completing my AI course!", company: "Google" },
  { name: "Rahul Mehta", course: "Cabin Crew", avatar: "RM", rating: 5, text: "The cabin crew training was world-class. The faculty's industry experience made all the difference.", company: "IndiGo Airlines" },
  { name: "Ananya Patel", course: "Data Science", avatar: "AP", rating: 5, text: "From zero to Data Scientist in 5 months! The hands-on projects and placement support are incredible.", company: "Amazon" },
  { name: "Karthik Rajan", course: "Web Dev", avatar: "KR", rating: 5, text: "Built 3 real projects during the course. Joined a startup as full-stack engineer before even completing!", company: "Razorpay" },
  { name: "Sneha Gupta", course: "Spoken English", avatar: "SG", rating: 5, text: "My confidence level has completely changed. I can now speak fluently in any professional setting.", company: "Infosys" },
];

export const STATS = [
  { value: "15,000+", label: "Students Trained" },
  { value: "94%", label: "Placement Rate" },
  { value: "50+", label: "Hiring Partners" },
  { value: "4.9★", label: "Average Rating" },
];

export const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "About", href: "#about" },
  { label: "Placements", href: "/placement" },
  { label: "Contact", href: "#contact" },
];
