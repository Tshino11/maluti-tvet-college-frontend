import { useState } from "react";
import {
  Menu, Search, Home, GraduationCap, Landmark, Trophy,
  CheckSquare, MapPin, ChevronRight
} from "lucide-react";

// ─── Navigation Data ───────────────────────────────────────────────────────────
const CAMPUSES = [
  { name: "Main Campus", id: "main" },
  { name: "Bethlehem Campus", id: "bethlehem" },
  { name: "Itemoheleng Campus", id: "itemoheleng" },
  { name: "Lere La Tshepe Campus", id: "lere" },
  { name: "Sefikeng Campus", id: "sefikeng" },
  { name: "Bonamelo Campus", id: "bonamelo" },
  { name: "Harrismith Campus", id: "harrismith" },
  { name: "Kwetlisong Campus", id: "kwetlisong" },
];

const CAMPUS_CONTACTS = [
  { name: "Main Cam", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Bethl ehem", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Harris mith", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Bona melo", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Lere Le Tshepe", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Itemoheleng", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Sefikeng", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
  { name: "Kwetlisong", address: "MAMPOI ROAD PHUTHADITJHABA 9866\nPrivate Bag X870\nWITSIESHOEK 9870\nTel. 058 713 6100\nemail. maluti@gmail.com" },
];

// ─── Shared Components ──────────────────────────────────────────────────────────
function CheckerHero({ title, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 min-h-[120px]">
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-white/50 bg-white/30 aspect-square" />
          ))}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto py-12 px-6 text-center">
        {title && <h1 className="text-3xl font-semibold">{title}</h1>}
        {children}
      </div>
    </section>
  );
}

function Subnav({ setActivePage, extras }) {
  return (
    <div className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto">
        <button onClick={() => setActivePage("home")} className="bg-gray-200 p-3 rounded-md shrink-0 hover:bg-gray-300 transition">
          <Home size={20} />
        </button>
        {extras}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>© 2026 Maluti TVET College. All Rights Reserved.</p>
    </footer>
  );
}

function CheckerBg({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-white/50 bg-white/30 aspect-square" />
          ))}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

// ─── Header ─────────────────────────────────────────────────────────────────────
function Header({ setActivePage }) {
  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <button onClick={() => setActivePage("home")} className="bg-gray-200 w-20 h-14 rounded-md flex items-center justify-center text-sm font-semibold text-center leading-tight hover:bg-gray-300 transition">
            Maluti<br />Logo
          </button>
          <nav className="hidden lg:flex items-center gap-2 text-sm">
            <button onClick={() => setActivePage("about")} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">About us</button>
            <button onClick={() => setActivePage("registration")} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Registration</button>
            <button onClick={() => setActivePage("campuses")} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Campuses</button>
            <button onClick={() => setActivePage("studentSupport")} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Student Support</button>
            <button onClick={() => setActivePage("contact")} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Contact us</button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition"><Search size={22} /></button>
          <button className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition"><Menu size={22} /></button>
        </div>
      </div>
    </header>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────────
function HomePage({ setActivePage }) {
  return (
    <div>
      <Header setActivePage={setActivePage} />
      <CheckerBg className="min-h-[420px]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="bg-gray-300/90 max-w-xl p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-3">Vision 2030 Finalist</h1>
            <p className="text-base leading-7 text-gray-700 mb-2">Short text about being the finalist</p>
            <p className="text-base leading-7 text-gray-700">(something positive the institute achieved)</p>
            <button onClick={() => setActivePage("about")} className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition text-sm">
              Learn More
            </button>
          </div>
        </div>
      </CheckerBg>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <GraduationCap className="mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Quality Education</h3>
            <p className="text-gray-600 leading-7 text-sm">Industry-focused programmes designed to prepare students for the modern workplace.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <Landmark className="mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Modern Campuses</h3>
            <p className="text-gray-600 leading-7 text-sm">Multiple campuses equipped with laboratories, workshops, and digital learning facilities.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <Trophy className="mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Student Success</h3>
            <p className="text-gray-600 leading-7 text-sm">Supporting academic excellence and career development through mentorship and student support.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ─── About Page ─────────────────────────────────────────────────────────────────
function AboutPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "overview", label: "College Overview" },
    { id: "history", label: "History" },
    { id: "governance", label: "College Governance" },
    { id: "vision", label: "Vision" },
    { id: "campuses", label: "Campuses" },
    { id: "achievements", label: "Achievements" },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "overview": return <CollegeOverviewTab setActivePage={setActivePage} />;
      case "history": return <HistoryTab setActivePage={setActivePage} />;
      case "vision": return <VisionTab setActivePage={setActivePage} />;
      case "campuses": return <CampusesPage setActivePage={setActivePage} embedded />;
      case "achievements": return <AchievementsTab setActivePage={setActivePage} />;
      default: return <AboutMain />;
    }
  };

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <CheckerHero title="About Maluti TVET College" />
      <div className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto">
          <button onClick={() => { setActiveTab("about"); setActivePage("home"); }} className="bg-gray-200 p-3 rounded-md shrink-0 hover:bg-gray-300 transition">
            <Home size={20} />
          </button>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md whitespace-nowrap text-sm transition ${activeTab === tab.id ? "bg-gray-400 font-semibold" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {activeTab === "about" ? <AboutMain /> : renderTab()}
      <Footer />
    </div>
  );
}

function AboutMain() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-start">
      <div className="bg-gray-300 rounded-xl min-h-[420px] p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Message from the Principal</h2>
        <p className="text-gray-700 leading-8 text-sm">Welcome to Maluti TVET College, where we are committed to providing students with quality technical and vocational education. Our goal is to equip learners with practical knowledge, professional values, and the confidence to succeed in their careers.</p>
        <p className="mt-5 text-gray-700 leading-8 text-sm">We continue to innovate and create opportunities that prepare our students for industry demands and future growth.</p>
      </div>
      <div className="bg-gray-200 rounded-xl min-h-[420px] flex items-center justify-center shadow-md overflow-hidden">
        <div className="w-full h-full min-h-[420px] flex items-center justify-center text-gray-500 text-sm">
          <CheckerBg className="w-full h-full min-h-[420px] flex items-center justify-center">
            <p className="text-gray-500 py-40">Image of the principal</p>
          </CheckerBg>
        </div>
      </div>
    </section>
  );
}

function CollegeOverviewTab({ setActivePage }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-start">
      <div className="bg-gray-300 rounded-xl min-h-[420px] p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">College overview</h3>
        <p className="text-gray-700 leading-8 text-sm">(Overview text)</p>
        <p className="mt-4 text-gray-700 leading-8 text-sm">Maluti TVET College is dedicated to providing accessible, high-quality vocational and occupational education that responds to the needs of the economy and society.</p>
        <p className="mt-4 text-gray-700 leading-8 text-sm">The college offers programmes in engineering, business studies, information technology, hospitality, and other technical fields.</p>
      </div>
      <div className="bg-gray-200 rounded-xl min-h-[420px] p-6 shadow-md flex flex-col items-center justify-center text-center">
        <CheckerBg className="w-full rounded-xl min-h-[200px] flex items-center justify-center mb-6">
          <p className="text-gray-500 py-16 text-sm">Image of the Logo</p>
        </CheckerBg>
        <div className="bg-gray-300 p-6 rounded-xl w-full">
          <p className="text-gray-800 leading-7 text-sm">Add text giving a description of the core elements of the college logo.</p>
        </div>
      </div>
    </section>
  );
}

function HistoryTab({ setActivePage }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex justify-center">
      <div className="bg-gray-300 rounded-xl p-8 shadow-md max-w-lg w-full min-h-[300px]">
        <h3 className="text-xl font-semibold mb-2">Where it all began...</h3>
        <p className="text-sm text-gray-600 mb-2">College history</p>
        <p className="text-sm text-gray-600">(add text about the college history)</p>
      </div>
    </section>
  );
}

function VisionTab({ setActivePage }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <CheckerBg className="rounded-xl min-h-[400px] p-8">
        <div className="space-y-8">
          <div>
            <span className="bg-gray-300 px-4 py-2 rounded-md text-sm font-semibold inline-block mb-3">Vision</span>
            <p className="text-gray-700 text-sm leading-7">Colleges vision</p>
          </div>
          <div>
            <span className="bg-gray-300 px-4 py-2 rounded-md text-sm font-semibold inline-block mb-3">Mission</span>
            <p className="text-gray-700 text-sm leading-7">Colleges mission and strategic goals</p>
          </div>
          <div>
            <span className="bg-gray-300 px-4 py-2 rounded-md text-sm font-semibold inline-block mb-3">Values</span>
            <p className="text-gray-700 text-sm leading-7">Colleges corporate values</p>
          </div>
        </div>
      </CheckerBg>
    </section>
  );
}

function AchievementsTab({ setActivePage }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-end gap-3 mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">International Partnerships</button>
        <button className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">Staff Awards</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-200 rounded-xl overflow-hidden shadow-md min-h-[280px]">
          <div className="bg-gray-300 px-4 py-3">
            <h3 className="font-semibold text-sm">Top Empowerment Award</h3>
          </div>
          <CheckerBg className="min-h-[230px] flex items-center justify-center">
            <p className="text-gray-500 text-sm py-20">insert certificate image</p>
          </CheckerBg>
        </div>
        <div className="bg-gray-200 rounded-xl overflow-hidden shadow-md min-h-[280px]">
          <div className="px-4 py-3">
            <h3 className="font-semibold text-sm">Finalist in Vision 2030 Competition</h3>
          </div>
          <CheckerBg className="min-h-[230px] flex items-center justify-center">
            <p className="text-gray-500 text-sm py-20">insert certificate image</p>
          </CheckerBg>
        </div>
        <div className="bg-gray-200 rounded-xl overflow-hidden shadow-md min-h-[280px]">
          <div className="px-4 py-3">
            <h3 className="font-semibold text-xl font-bold">Academic Achievement</h3>
          </div>
          <CheckerBg className="min-h-[230px] flex items-center justify-center">
            <p className="text-gray-500 text-sm py-20">insert certificate image</p>
          </CheckerBg>
        </div>
      </div>
    </section>
  );
}

// ─── Campuses Page ───────────────────────────────────────────────────────────────
function CampusesPage({ setActivePage, embedded = false }) {
  const left = CAMPUSES.slice(0, 4);
  const right = CAMPUSES.slice(4);

  const content = (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
        {left.map((c, i) => (
          <div key={c.id}>
            <div className="flex items-center gap-3 mb-1">
              <MapPin size={20} />
              <span className="font-semibold text-sm">{c.name}</span>
            </div>
            <button className="ml-8 bg-gray-200 hover:bg-gray-300 px-4 py-1.5 rounded-md text-xs transition">Courses offered</button>
          </div>
        ))}
        {right.map((c, i) => (
          <div key={c.id} className="md:col-start-2" style={{ gridRow: i + 1 }}>
            <div className="flex items-center gap-3 mb-1">
              <MapPin size={20} />
              <span className="font-semibold text-sm">{c.name}</span>
            </div>
            <button className="ml-8 bg-gray-200 hover:bg-gray-300 px-4 py-1.5 rounded-md text-xs transition">Courses offered</button>
          </div>
        ))}
      </div>
    </section>
  );

  if (embedded) return content;

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <CheckerHero>
        <div className="flex items-start">
          <button onClick={() => setActivePage("home")} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition absolute left-6 top-8">
            <Home size={20} />
          </button>
          <h1 className="text-4xl font-bold w-full text-center">Our Campuses</h1>
        </div>
      </CheckerHero>
      <Subnav setActivePage={setActivePage} />
      {content}
      <Footer />
    </div>
  );
}

// ─── Registration Page ───────────────────────────────────────────────────────────
function RegistrationPage({ setActivePage }) {
  return (
    <div>
      <Header setActivePage={setActivePage} />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setActivePage("home")} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition"><Home size={20} /></button>
          </div>

          <div className="bg-gray-300 rounded-xl px-6 py-4 mb-5">
            <h2 className="text-lg font-semibold">New Students</h2>
          </div>

          <div className="flex gap-4 mb-2">
            <div className="flex flex-col gap-3 w-48">
              <button className="bg-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-300 transition text-sm text-left">Prospectus</button>
              <button onClick={() => setActivePage("applyHere")} className="bg-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-300 transition text-sm text-left">Apply here</button>
              <button className="bg-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-300 transition text-sm text-left">Application Status</button>
              <button onClick={() => setActivePage("studentFinance")} className="bg-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-300 transition text-sm text-left">Student Finance</button>
            </div>
            <CheckerBg className="flex-1 rounded-xl min-h-[220px]">
              <div className="flex items-center justify-end p-4">
                <button className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">Chat with a consultant</button>
              </div>
            </CheckerBg>
          </div>

          <button className="mt-6 bg-gray-200 px-5 py-3 rounded-lg hover:bg-gray-300 transition text-sm">Closing dates</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── Apply Here Page ─────────────────────────────────────────────────────────────
function ApplyHerePage({ setActivePage }) {
  return (
    <div>
      <Header setActivePage={setActivePage} />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setActivePage("registration")} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition"><Home size={20} /></button>
          <button onClick={() => setActivePage("studentFinance")} className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">Student Finance</button>
        </div>

        <div className="bg-gray-300 rounded-xl px-6 py-4 mb-5">
          <h2 className="text-lg font-semibold">Apply here</h2>
        </div>

        <div className="space-y-3 mb-8">
          <button className="bg-gray-200 px-5 py-3 rounded-lg hover:bg-gray-300 transition text-sm block">College Prospectus</button>
          <button className="bg-gray-200 px-5 py-3 rounded-lg hover:bg-gray-300 transition text-sm block">Important Information before Applying</button>
        </div>

        <CheckerBg className="rounded-xl p-10 mb-8 min-h-[160px]">
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium text-sm">New Applicant →</span>
              <button onClick={() => setActivePage("application")} className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg font-semibold transition text-sm">Apply</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium text-sm">Returning/Internal Applicant →</span>
              <button className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg font-semibold transition text-sm">Apply</button>
            </div>
          </div>
        </CheckerBg>

        <button className="bg-gray-200 px-5 py-3 rounded-lg hover:bg-gray-300 transition text-sm">Closing dates</button>
      </div>
      <Footer />
    </div>
  );
}

// ─── Student Finance Page ────────────────────────────────────────────────────────
function StudentFinancePage({ setActivePage }) {
  const items = [
    "NSFAS", "SRC-Inclusivity fund", "Banking Details", "International Students",
    "Bursaries", "Fees", "Contact details", "", "Student Loans", "Refund Application", "Financial Statements",
  ];

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button onClick={() => setActivePage("registration")} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition mb-6"><Home size={20} /></button>
        <div className="bg-gray-300 rounded-xl px-6 py-4 mb-6">
          <h2 className="text-lg font-semibold">Student Finance</h2>
        </div>
        <CheckerBg className="rounded-xl p-8 min-h-[280px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["NSFAS", "SRC-Inclusivity fund", "Banking Details", "International Students"].map(i => (
              <button key={i} className="bg-gray-200 hover:bg-gray-300 px-3 py-2.5 rounded-lg text-sm transition text-center">{i}</button>
            ))}
            {["Bursaries", "Fees", "Contact details", ""].map((i, idx) => i ? (
              <button key={i} className="bg-gray-200 hover:bg-gray-300 px-3 py-2.5 rounded-lg text-sm transition text-center">{i}</button>
            ) : <div key={idx} />)}
            {["Student Loans", "Refund Application", "Financial Statements"].map(i => (
              <button key={i} className="bg-gray-200 hover:bg-gray-300 px-3 py-2.5 rounded-lg text-sm transition text-center">{i}</button>
            ))}
          </div>
        </CheckerBg>
      </div>
      <Footer />
    </div>
  );
}

// ─── Student Support Page ────────────────────────────────────────────────────────
function StudentSupportPage({ setActivePage }) {
  const [activeItem, setActiveItem] = useState("Student finance");
  const menuItems = ["Student finance", "NSFAS", "Academic Calendar", "Graduation Info", "Health & Wellness"];

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <button onClick={() => setActivePage("home")} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition mb-6"><Home size={20} /></button>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            {menuItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition ${activeItem === item ? "bg-gray-400 font-semibold" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:col-span-2">
            <CheckerBg className="rounded-xl min-h-[340px]">
              <div className="p-6">
                <div className="bg-gray-300/80 rounded-lg p-5 max-w-sm">
                  <h3 className="font-semibold mb-2">Student Achievement</h3>
                  <p className="text-sm text-gray-700">a positive text about something the students achieved (and image)</p>
                </div>
              </div>
            </CheckerBg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── Contact Us Page ─────────────────────────────────────────────────────────────
function ContactPage({ setActivePage }) {
  return (
    <div>
      <Header setActivePage={setActivePage} />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setActivePage("home")} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition"><Home size={20} /></button>
          <span className="text-sm font-semibold">Hotline: 0000000000</span>
<div className="flex items-center gap-3">
  <a href="#" className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-semibold transition">f</a>
  <a href="#" className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-semibold transition">𝕏</a>
  <a href="#" className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-semibold transition">ig</a>
</div>
        </div>

        <h2 className="text-lg font-semibold mb-4">Maluti TVET College Campuses Contact Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-xs">
            <tbody>
              {[
                CAMPUS_CONTACTS.slice(0, 4),
                CAMPUS_CONTACTS.slice(4),
              ].map((row, ri) => (
                <tr key={ri}>
                  {row.map((c, ci) => (
                    <td key={ci} className="border border-gray-300 p-3 align-top">
                      <p className="font-bold mb-2">{c.name}</p>
                      {c.address.split("\n").map((line, li) => (
                        <p key={li} className="text-gray-700 leading-5">{line}</p>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── Application Form ────────────────────────────────────────────────────────────
function ApplicationPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", dob: "", gender: "", nationality: "", idNumber: "",
    email: "", phone: "", address: "", postalCode: "",
    school: "", matricYear: "", apsScore: "", course1: "", course2: "",
    matric: null, idDoc: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const tabs = ["Personal Info", "Contact Info", "Education", "Documents"];

  const Field = ({ label, name, type = "text" }) => (
    <div className="grid grid-cols-3 items-center gap-4">
      <label className="bg-gray-200 px-3 py-2 rounded text-sm">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        className="col-span-2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
      />
    </div>
  );

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-gray-300 flex items-center justify-between px-6 py-4">
            <button onClick={() => setActivePage("applyHere")} className="bg-gray-200 p-2 rounded-md hover:bg-gray-400 transition"><Home size={18} /></button>
            <h1 className="text-base font-bold">Maluti TVET College Application form</h1>
            <div className="w-8" />
          </div>
          <div className="flex border-b border-gray-300 bg-white overflow-x-auto">
            {tabs.map(tab => (
              <div key={tab} className="flex items-center gap-2 px-4 py-3 text-sm border-r border-gray-200 last:border-r-0 whitespace-nowrap">
                <span>{tab}</span>
                <CheckSquare size={15} className="text-gray-500" />
              </div>
            ))}
          </div>
          <div className="p-6 bg-white space-y-8">
            <div>
              <h2 className="text-base font-semibold mb-4">Personal Information</h2>
              <div className="space-y-3">
                <Field label="First Name" name="firstName" />
                <Field label="Last Name" name="lastName" />
                <Field label="Date of Birth" name="dob" type="date" />
                <Field label="Gender" name="gender" />
                <Field label="Nationality" name="nationality" />
                <Field label="ID/Passport no." name="idNumber" />
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <Field label="Email address" name="email" type="email" />
                <Field label="Phone number" name="phone" type="tel" />
                <Field label="Home address" name="address" />
                <Field label="Postal code" name="postalCode" />
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-4">Education</h2>
              <div className="space-y-3">
                <Field label="Secondary School" name="school" />
                <Field label="Matric Year" name="matricYear" />
                <Field label="APS Score" name="apsScore" />
                <Field label="1st choice course" name="course1" />
                <Field label="2nd choice course" name="course2" />
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-4">Upload Documents</h2>
              <div className="space-y-3">
                {[{ label: "Certified Matric Certificate", name: "matric" }, { label: "Certified ID", name: "idDoc" }].map(f => (
                  <div key={f.name} className="grid grid-cols-3 items-center gap-4">
                    <label className="bg-gray-200 px-3 py-2 rounded text-sm">{f.label}</label>
                    <input type="file" name={f.name} onChange={handleChange}
                      className="col-span-2 text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-4">
              <button className="bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-lg font-medium transition text-sm">Save</button>
              <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition text-sm">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── App Root ────────────────────────────────────────────────────────────────────
export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "about":         return <AboutPage setActivePage={setActivePage} />;
      case "registration":  return <RegistrationPage setActivePage={setActivePage} />;
      case "applyHere":     return <ApplyHerePage setActivePage={setActivePage} />;
      case "application":   return <ApplicationPage setActivePage={setActivePage} />;
      case "campuses":      return <CampusesPage setActivePage={setActivePage} />;
      case "studentSupport":return <StudentSupportPage setActivePage={setActivePage} />;
      case "studentFinance":return <StudentFinancePage setActivePage={setActivePage} />;
      case "contact":       return <ContactPage setActivePage={setActivePage} />;
      default:              return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {renderPage()}
    </div>
  );
}
