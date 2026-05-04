// App.jsx
import { useState } from "react";
import {
  Menu, Search, Home, GraduationCap, Landmark, Trophy,
  CheckSquare, MapPin, ChevronRight, Eye, EyeOff, CheckCircle
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
            <button onClick={() => setActivePage("studentPortal")} className="bg-gray-800 text-white hover:bg-gray-900 px-4 py-2 rounded-md transition">Student Portal</button>
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
            <p className="text-base leading-7 text-gray-700 mb-2"></p>
            <p className="text-base leading-7 text-gray-700">Maluti TVET College announced as a Vision 2030 Awards Finalist

The Inaugural Vision 2030 Awards has announced its 2017 awards category finalists – and Maluti has been designated a finalist for the Driver for Change Award.</p>
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
        <p className="text-gray-700 leading-8 text-sm"></p>
        <p className="mt-4 text-gray-700 leading-8 text-sm">Maluti TVET College is a Technical Vocational Education & Training Institution operating under the auspices of the Department of Higher Education and Training. The College is accredited by Umalusi and several Sector Education and Training Authorities (SETAs)

The Department of Higher Education and Training was formally established by law in terms of the Presidential Minute No.690 of 06 July 2009 and under Proclamation No.44 of 01 July 2009, the concurrent functions under the FET Colleges Act, 2008 were transferred to the Minister of Higher Education & Training.

The Department of Higher Education & Training comprises of Public TVET Colleges, Public Universities, National Institutes of Higher Education, Trade Testing Centres, Skills Development Institutes and SETAs.

The mandate of the 50 public TVET Colleges is to steadily increase the number of students enrolled and trained in priority and critical skills areas putting FET Colleges at the centre of skills development challenge in South Africa.

The specific focus of public TVET Colleges is to address the skills shortages in South Africa; by offering relevant and responsive vocational and occupational programmes</p>
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
        <p className="text-sm text-gray-600">Maluti Technical Vocational Education and Training College was established on the 1st of September 2002.
Maluti TVET College is a Technical Vocational Education & Training Institution operating under the auspices of the Department of Higher Education and Training. The College is accredited by Umalusi and several Sector Education and Training Authorities (SETAs)
Member of the Executive Council (MEC) for Free State Department of Education (FSDoE) merged the former Colleges of Education (Bonamelo, Sefikeng ) and Technical Colleges (Itemoheleng, Bethlehem, Kwetlisong and Lere la Tshepe) to form one Maluti Technical Vocational Education & Training College.</p>
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
            <p className="text-gray-700 text-sm leading-7">To provide excellence, innovation and success that inspires entrepreneurship and employability to transform lives.</p>
          </div>
          <div>
            <span className="bg-gray-300 px-4 py-2 rounded-md text-sm font-semibold inline-block mb-3">Mission</span>
            <p className="text-gray-700 text-sm leading-7">Offer relevant and responsive areas of learning, knowledge and skills
Provide world class programme in partnership with institutions of excellence nationally and internationally.
Sustain public confidence in Maluti TVET College.
Maintain a world class culture of teaching and learning.
Provide opportunities for lifelong learning.</p>
          </div>
          <div>
            <span className="bg-gray-300 px-4 py-2 rounded-md text-sm font-semibold inline-block mb-3">Values</span>
            <p className="text-gray-700 text-sm leading-7">At Maluti TVET College we are guided by the following Values which are important to us as an organisation
Integrity – Uprightness and sincere
Accountability – responsible for our actions
Innovation – in the forefront of developments
Professionalism – the way we conduct ourselves
Transparency – openness in all our operations
Redress – upliftment of previously disadvantaged individuals
Inclusiveness – no discrimination
Sustainability –  meet the needs of the present without diminishing future opportunities</p>
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

// ─── Student Portal Login Page ────────────────────────────────────────────────────
function StudentPortalPage({ setActivePage }) {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!studentNumber || !password) {
      setError("Please enter both student number and password");
      return;
    }
    setError("");
    // Handle login logic here
    alert("Login functionality would be implemented here");
  };

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <CheckerBg className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gray-800 text-white px-6 py-5">
              <h1 className="text-2xl font-bold">Maluti TVET College</h1>
              <p className="text-gray-300 text-sm mt-1">Student Portal</p>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Welcome back</h2>
                <p className="text-gray-500 text-sm mt-1">Sign in to access your student dashboard</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student Number</label>
                  <input
                    type="text"
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition"
                    placeholder="Enter your student number"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition pr-10"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-gray-300 text-gray-600 focus:ring-gray-400"
                    />
                    Remember me
                  </label>
                  <button type="button" className="text-sm text-gray-600 hover:text-gray-800 transition">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setActivePage("signUp")}
                    className="text-gray-800 font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  Need help?{" "}
                  <button onClick={() => setActivePage("contact")} className="text-gray-700 hover:underline">
                    Contact student support
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CheckerBg>
      <Footer />
    </div>
  );
}

// ─── Sign Up Page ────────────────────────────────────────────────────────────────
function SignUpPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    fullName: "",
    studentNumber: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.studentNumber.trim()) newErrors.studentNumber = "Student number is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!agreeTerms) newErrors.terms = "You must agree to the terms & conditions";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign up logic here
      alert("Account created successfully! Would navigate to portal login.");
      setActivePage("studentPortal");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <CheckerBg className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gray-800 text-white px-6 py-5">
              <h1 className="text-2xl font-bold">Maluti TVET College</h1>
              <p className="text-gray-300 text-sm mt-1">Create Student Account</p>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student Number</label>
                  <input
                    type="text"
                    name="studentNumber"
                    value={formData.studentNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition ${errors.studentNumber ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your student number"
                  />
                  {errors.studentNumber && <p className="text-red-500 text-xs mt-1">{errors.studentNumber}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition pr-10 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => {
                        setAgreeTerms(e.target.checked);
                        if (errors.terms) setErrors(prev => ({ ...prev, terms: "" }));
                      }}
                      className="rounded border-gray-300 text-gray-600 focus:ring-gray-400"
                    />
                    I agree to the{" "}
                    <button type="button" className="text-gray-800 font-semibold hover:underline">
                      terms & conditions
                    </button>
                  </label>
                  {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  Need help?{" "}
                  <button onClick={() => setActivePage("contact")} className="text-gray-700 hover:underline">
                    Contact student support
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CheckerBg>
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
      case "studentPortal": return <StudentPortalPage setActivePage={setActivePage} />;
      case "signUp":        return <SignUpPage setActivePage={setActivePage} />;
      default:              return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {renderPage()}
    </div>
  );
}