import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Award,
  Check,
  Code2,
  Database,
  ExternalLink,
  Facebook,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldAlert,
  Sparkles,
  Terminal,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import "./Home.css";

type Project = {
  number: string;
  type: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  color: string;
  icon: typeof Code2;
  repo?: string;
  repoPrivate?: boolean;
  visual: string;
  slides: string[];
  thumbnail?: string;
  thumbnailZoom?: number;
  images?: string[];
  mobileImage?: string;
  thumbnailIndex?: number;
  date?: string;
  highlights?: string[];
};

type Certificate = {
  year: string;
  name: string;
  issuer: string;
  description: string;
  skills: string[];
  verify: string;
  visual: string;
  asset: string;
};

const projects: Project[] = [
  {
    number: "07",
    type: "Individual Project",
    title: "ITEW1 - Responsiveness",
    description:
      "A responsive website layout built to provide a consistent experience across desktop and mobile screens.",
    details:
      "This project focused on adapting the page layout for desktop and mobile views while keeping the content clear and easy to use.",
    tags: ["HTML", "CSS"],
    color: "#2563eb",
    icon: Globe2,
    visual: "Responsive website",
    thumbnailZoom: 1.15,
    slides: [
      "Desktop Signup Page",
      "Desktop Dashboard",
      "Desktop Dashboard",
      "Mobile Dashboard",
      "Mobile Dashboard",
      "Mobile Signup Page",
    ],
    images: [
      "/asset/Projects/ITEW1%20-%20Responsiveness/DesktopSignUp.png",
      "/asset/Projects/ITEW1%20-%20Responsiveness/Desktop1.png",
      "/asset/Projects/ITEW1%20-%20Responsiveness/Desktop2.png",
      "/asset/Projects/ITEW1%20-%20Responsiveness/Mobile1.png",
      "/asset/Projects/ITEW1%20-%20Responsiveness/Mobile2.png",
      "/asset/Projects/ITEW1%20-%20Responsiveness/MobileSignUp.png",
    ],
    date: "Oct 2024",
    highlights: [
      "Built entirely with HTML and CSS, no frameworks",
      "Responsive layout adapts across desktop and mobile breakpoints",
      "Used media queries to adjust structure at different screen sizes",
    ],
  },
  {
    number: "06",
    type: "Individual Project",
    title: "ITEW1 - UI Components",
    description:
      "A collection of reusable interface components designed with a consistent visual system.",
    details:
      "This project explored how common interface sections can be structured and styled consistently using only HTML and CSS.",
    tags: ["HTML", "CSS"],
    color: "#b7791f",
    icon: Layers3,
    visual: "UI component collection",
    slides: [
      "Desktop Dashboard", 
      "Desktop Dashboard", 
      "Mobile Dashboard",
      "Mobile Dashboard",
      "Mobile Dashboard",
    ],
    images: [
      "/asset/Projects/ITEW1%20-%20UI%20Components/Screenshot%202024-11-03%20045045.png",
      "/asset/Projects/ITEW1%20-%20UI%20Components/Screenshot%202024-11-03%20045101.png",
      "/asset/Projects/ITEW1%20-%20UI%20Components/Screenshot%202024-11-03%20045130.png",
      "/asset/Projects/ITEW1%20-%20UI%20Components/Screenshot%202024-11-03%20045147.png",
      "/asset/Projects/ITEW1%20-%20UI%20Components/Screenshot%202024-11-03%20045154.png",
    ],
    date: "Nov 2024",
    highlights: [
      "Built entirely with semantic HTML and CSS, no frameworks",
      "Focused on reusable, consistent interface patterns",
      "Structured components for easy reuse across pages",
    ],
  },
  {
    number: "04",
    type: "Individual Project",
    title: "Student Attendance Tracker App",
    description:
      "An Android attendance tracker for managing classes, student lists, attendance records, and summaries.",
    details:
      "This Attendance Tracker App is built in Android Studio to help teachers manage class lists and student records. Teachers can mark students as present, absent, or late, then check attendance statistics and filter records by date.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    color: "#0f766e",
    icon: Check,
    repo: "https://github.com/Yubii72/Student-Attendance-Tracker-App/tree/main",
    visual: "Student Attendance Tracker",
    thumbnail: "/asset/Projects/Student%20Attendance%20Tracker%20App/thumbnail.png",
    slides: [
      "Class list",
      "Class options",
      "Students list",
      "Mark attendance",
      "Attendance summary",
    ],
    images: [
      "/asset/Projects/Student%20Attendance%20Tracker%20App/e4a50578-eb48-4e3e-a3e1-35abf923b56c.jpg",
      "/asset/Projects/Student%20Attendance%20Tracker%20App/6435687c-6613-4287-ba4e-a2395842fa01.jpg",
      "/asset/Projects/Student%20Attendance%20Tracker%20App/c92648ff-ec4a-47dd-8f90-b3b3bcf328b2.jpg",
      "/asset/Projects/Student%20Attendance%20Tracker%20App/4aa6044d-648b-4aa0-82e2-1fe95c15942a.jpg",
      "/asset/Projects/Student%20Attendance%20Tracker%20App/0ae4e405-ab2f-45ba-83f1-3bf3ae267c6d.jpg",
    ],
    date: "Jan 2026",
    highlights: [
      "Built with Kotlin and Jetpack Compose for a native Android experience",
      "Mark students present, absent, or late with a simple tap-based interface",
      "View attendance statistics and filter records by date",
      "Uses Room for local data persistence, so records are available offline",
    ],
  },
  {
    number: "05",
    type: "Individual Project",
    title: "JNP Car Rental",
    description:
      "A full-stack car rental reservation system for a fictional Laguna-based company.",
    details:
      "JNP Car Rental is a web application for managing car reservations and bookings. It has separate dashboards for guests, staff, and managers, with features based on their roles. The project uses PHP and MySQL with XAMPP for development.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
    color: "#b45309",
    icon: Globe2,
    repo: "https://github.com/Yubii72/JNP-Car-Rental",
    visual: "JNP Car Rental",
    thumbnailZoom: 1.15,
    slides: [
      "Sign In / Register Page",
      "Login",
      "Register",
      "User Dashboard",
      "Make Reservations",
      "Contact Us",
      "Manager / Staff Dashboard",
      "Add New Car",
      "Reservations",
      "Rental Reports",
      "Guest Messages",
      "Analytics Dashboard",
    ],
    images: [
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20134135.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20134613.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20134625.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20135610.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20135847.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20135914.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20140031.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20140202.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20140309.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20140400.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20140439.png",
      "/asset/Projects/JNP%20Car%20Rental/Screenshot%202025-05-12%20140503.png",
    ],
    date: "May 2025",
    highlights: [
      "Reservation & booking system",
      "Role-based dashboards (guest/staff/manager)",
      "Built with PHP & MySQL",
    ],
  },
  {
    number: "01",
    type: "Tech Lead",
    title: "Smart Campus Companion App",
    description:
      "A mobile campus companion that brings school information, tasks, announcements, and student tools into one app.",
    details:
      "Led a 5-member team to design and build the Smart Campus Companion, a mobile app for students and staff featuring dashboards, task tracking, campus information, and real-time announcements. The app also supports user profiles, admin controls, Firebase cloud sync, and background reminders.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Firebase", "AndroidX Biometric"],
    color: "#0f766e",
    icon: Layers3,
    repo: "https://github.com/Yubii72/Smart-Campus-Companion-App",
    visual: "Smart Campus Companion",
    thumbnail: "/asset/Projects/Smart%20Campus%20Companion%20App/thumbnail.png",
    slides: [
      "App Splash Screen",
      "Student Login",
      "Admin Login",
      "Create Account",
      "Student Dashboard",
      "Task and Schedule Manager",
      "Campus Information",
      "Student Profile",
      "Settings",
      "Announcement Feed",
      "Admin Dashboard",
      "Admin Announcement Management",
    ],
    images: [
      "/asset/Projects/Smart%20Campus%20Companion%20App/0bccb050-eb5e-4251-b04b-f4a6ac12d638.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/c8501847-151b-4ba2-97b1-b3b1dd316cea.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/001ca7b1-67dc-4171-a482-eedf8ddd492d.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/4f220552-d90b-47bd-87ed-70f8da2f2181.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/c6a5c13f-10c0-42de-877f-4145c5bd2d71.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/8f7967c8-1174-41cd-9cdc-6c789fb5752d.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/fa0aa565-ad21-42e4-8cf9-ceb752962394.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/3b0ebc44-a307-433d-9a1a-4cbb8e5357fa.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/65775668-98d4-446e-8c27-762323280bff.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/925a3a4e-5490-4c3c-aa09-d9f1c249e35b.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/1ddf8249-c684-45fd-91d2-4319bf3ebba8.jpg",
      "/asset/Projects/Smart%20Campus%20Companion%20App/7bad46f6-ebe1-4a65-885d-68fb28783b45.jpg",
    ],
    date: "Apr 2026",
    highlights: [
      "Built with Kotlin and Jetpack Compose for a modern, declarative UI",
      "Supports both student and admin workflows with role-based access",
      "Real-time announcement system delivers staff updates instantly to students",
      "Integrated Firebase for real-time cloud sync across devices",
      "Added AndroidX Biometric for secure, fingerprint-based authentication",
    ],
  },
  {
    number: "02",
    type: "Tech Lead",
    title: "HanapAral App",
    description:
      "A mobile study companion that keeps students and staff connected through announcements, profiles, and real-time study groups.",
    details:
      "Led a 5-member team to design and build HanapAral, a modern Android mobile application that helps students and staff stay informed, connected, and organized in campus life. The app brings together important updates, user profiles, study groups, and real-time communication in one place, with Firebase authentication, cloud sync, and optional biometric login.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "AndroidX Biometric"],
    color: "#7c3aed",
    icon: Users,
    repoPrivate: true,
    visual: "HanapAral App",
    thumbnail: "/asset/Projects/HanapAral%20App/thumbnail.png",
    thumbnailZoom: 1.15,
    slides: [
      "Login page",
      "My Groups",
      "Discover",
      "Group Info",
      "Superuser Controls",
      "Profile Page",
    ],
    images: [
      "/asset/Projects/HanapAral%20App/login%20page.jpg",
      "/asset/Projects/HanapAral%20App/my%20groups.jpg",
      "/asset/Projects/HanapAral%20App/discover%20groups.jpg",
      "/asset/Projects/HanapAral%20App/group%20info.jpg",
      "/asset/Projects/HanapAral%20App/superuser%20control.jpg",
      "/asset/Projects/HanapAral%20App/student%20profile.jpg",
    ],
    date: "Apr 2026",
    highlights: [
      "Built with Kotlin and Jetpack Compose for a modern, declarative UI",
      "Enables students to join or create study groups in real time",
      "Centralizes campus updates, announcements, and user profiles in one place",
      "Used Firebase Cloud Firestore for real-time data sync across devices",
      "Added AndroidX Biometric for secure, fingerprint-based authentication",
    ],
  },
  {
    number: "01",
    type: "Personal Project",
    title: "PhishLens Detector",
    description:
      "A phishing email detector that scans raw email source or .eml files and scores the risk before you click anything.",
    details:
      "PhishLens Detector is a web app to catch phishing emails before anything gets clicked. Paste raw email source or upload a .eml file, and it returns a risk score, a breakdown of the signals it found, and an annotated view of the suspicious parts in the message.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vitest"],
    color: "#0d9488",
    icon: ShieldAlert,
    repo: "https://github.com/Yubii72/PhishLens-Detector",
    visual: "PhishLens Detector",
    thumbnailZoom: 1.15,
    slides: [
      "Scan Dashboard",
      "Scan Results",
      "Scan History",
      "Scan Compare Results",
      "About Page",
    ],
    images: [
      "/asset/Projects/PhishLens/Dashboard.png",
      "/asset/Projects/PhishLens/Scan%20Results.png",
      "/asset/Projects/PhishLens/Scan%20History.png",
      "/asset/Projects/PhishLens/Scan%20Compare%20Results.png",
      "/asset/Projects/PhishLens/About.png",
    ],
    date: "Sep 2026",
    highlights: [
      "Paste raw email source or upload a .eml file for analysis",
      "0-100 risk score with Likely Safe / Suspicious / Likely Phishing verdicts",
      "Heuristic engine detects brand lookalikes, urgency wording, and risky links",
      "Annotated preview highlights suspicious parts before you click",
      "Scan history saved locally in the browser with side-by-side comparisons",
    ],
  },
];

const technologies = [
  {
    label: "Frontend Development",
    detail: "HTML5 · CSS3 · Tailwind CSS · JavaScript · TypeScript · React",
    icon: Code2,
  },
  {
    label: "Backend Development",
    detail: "Java · PHP · Node.js · Socket.io",
    icon: Terminal,
  },
  {
    label: "Databases & Backend Services",
    detail: "MySQL · PostgreSQL · Firebase · Supabase",
    icon: Database,
  },
  { label: "Deployment & Hosting", detail: "Vercel · Render", icon: Globe2 },
  { label: "Mobile Development", detail: "Android · Kotlin", icon: Layers3 },
  { label: "Tools & Version Control", detail: "Git · GitHub", icon: Github },
];

const certificates: Certificate[] = [
  {
    year: "Apr 2026",
    name: "Certificate of Content Completion",
    issuer: "Wadhwani Foundation",
    description:
      "Completed the Ignite Philippines program focused on entrepreneurial foundations.",
    skills: ["Entrepreneurship", "Business Modeling", "Financial Planning"],
    verify:
      "https://web.certificate.wfglobal.org/en/certificate?certificateId=69e66c381b3257329ac3ff19",
    visual: "Wadhwani Foundation certificate",
    asset: "/asset/Certificates/wadwhani.png",
  },
  {
    year: "Aug 2026",
    name: "Java Intermediate",
    issuer: "Sololearn",
    description:
      "Completed an intermediate Java course covering practical programming concepts.",
    skills: ["Java"],
    verify: "https://www.sololearn.com/certificates/CC-ZRLRFDSM",
    visual: "Sololearn Java certificate",
    asset: "/asset/Certificates/java-int.png",
  },
  {
    year: "Aug 2026",
    name: "Web Development",
    issuer: "Sololearn",
    description:
      "Completed a practical web development course covering frontend fundamentals.",
    skills: [
      "HTML5",
      "Web Design",
      "Web Development",
      "Cascading Style Sheets (CSS)",
      "JavaScript",
    ],
    verify: "https://www.sololearn.com/certificates/CC-URL8PMQ3",
    visual: "Sololearn Web Development certificate",
    asset: "/asset/Certificates/webdev.png",
  },
  {
    year: "Aug 2026",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    description:
      "Completed foundational cybersecurity training through Cisco Networking Academy offered by DICT.",
    skills: ["Cybersecurity", "Threat Detection"],
    verify:
      "https://www.credly.com/badges/ab4d5572-82bb-4002-96e9-e0ffb85edb7f",
    visual: "Introduction to Cybersecurity certificate",
    asset: "/asset/Certificates/intro%20to%20cyber.png",
  },
  {
    year: "Aug 2026",
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    description:
      "Completed training in assessing and responding to cybersecurity threats offered by DICT.",
    skills: [
      "Disaster Recovery",
      "Incident Response",
      "Penetration Testing",
      "Risk Assessment",
      "Risk Management",
      "Security Controls",
    ],
    verify:
      "https://www.credly.com/badges/6807ee44-c969-487f-ba69-d5f95d186e02",
    visual: "Cyber Threat Management certificate",
    asset: "/asset/Certificates/cyber%20threat.png",
  },
  {
    year: "Aug 2026",
    name: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    description:
      "Completed foundational training for customer-focused technical support.",
    skills: ["Customer Service", "Communication", "Remote Troubleshooting"],
    verify:
      "https://www.credly.com/badges/c6ff76bc-37a0-4d03-a109-85a0fed3ca77",
    visual: "IT Customer Support Basics certificate",
    asset: "/asset/Certificates/it%20support.png",
  },
  {
    year: "Aug 2026",
    name: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    description:
      "Completed training in supporting common operating system environments.",
    skills: ["Customer Service", "Software Installation"],
    verify:
      "https://www.credly.com/badges/08924061-985e-4ffd-ae53-831d6b77bc1b",
    visual: "Operating Systems Support certificate",
    asset: "/asset/Certificates/os%20support.png",
  },
  {
    year: "Aug 2026",
    name: "Hacker Holidays Participation Certificate",
    issuer: "TryHackMe",
    description:
      "Participated in the Hacker Holidays cybersecurity learning event.",
    skills: ["CTF", "OSINT"],
    verify:
      "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XBJ4ZX4LFP.pdf",
    visual: "Hacker Holidays certificate",
    asset: "/asset/Certificates/tryhackme.png",
  },
  {
    year: "Aug 2026",
    name: "BlackStride Cyber Webinar Series",
    issuer: "BlackStride Cyber",
    description:
      "Attended a cybersecurity webinar focused on Azure and artificial intelligence.",
    skills: ["Microsoft Azure", "Artificial Intelligence (AI)"],
    verify:
      "https://credsverse.com/credentials/37198e3c-a07b-49a0-b8d6-b3360e25cd14?preview=1",
    visual: "BlackStride Cyber certificate",
    asset: "/asset/Certificates/ai%20azure.png",
  },
  {
    year: "Aug 2026",
    name: "Cybersecurity Fundamentals",
    issuer: "IBM",
    description:
      "Completed IBM's Cybersecurity Fundamentals training covering core security principles, threat detection, and incident response.",
    skills: ["Cryptography", "Cybersecurity", "Incident Response", "Threat Detection", "Social Engineering", "Vulnerability Management"],
    verify:
      "https://www.credly.com/badges/ebde17fc-c472-480f-bea4-dfa4b905ac6f",
    visual: "IBM Cybersecurity Fundamentals certificate",
    asset: "/asset/Certificates/cybersecurity fundamentals.png",
  },
  {
    year: "Sep 2026",
    name: "Concepts of Cybersecurity",
    issuer: "Microsoft Learning",
    description:
      "Completed Microsoft Learning content covering core cybersecurity concepts.",
    skills: ["Cybersecurity"],
    verify:
      "https://learn.microsoft.com/api/achievements/share/en-us/KurtXanderImperial-9089/WM528XXN?sharingId=68D95773A3F5557F",
    visual: "Microsoft cybersecurity certificate",
    asset: "/asset/Certificates/certificate-microsoft-cybersecurity.png",
  },
];

const NAV_OFFSET = 80;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: Math.max(el.offsetTop - NAV_OFFSET, 0),
    behavior: "smooth",
  });
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
      {children}
    </p>
  );
}

function VisualPlaceholder({
  label,
  className = "",
  certificate = false,
}: {
  label: string;
  className?: string;
  certificate?: boolean;
}) {
  return (
    <div
      className={`visual-placeholder ${certificate ? "certificate-placeholder" : ""} ${className}`}
    >
      <div className="visual-placeholder-shape visual-placeholder-shape-one" />
      <div className="visual-placeholder-shape visual-placeholder-shape-two" />
      {certificate ? (
        <Award
          size={32}
          className="relative z-10 text-orange-600/80 dark:text-orange-300/80"
        />
      ) : (
        <Sparkles
          size={28}
          className="relative z-10 text-orange-600/80 dark:text-orange-300/80"
        />
      )}
      <span className="relative z-10 mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">
        {label} · image placeholder
      </span>
    </div>
  );
}

function ProjectVisual({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const image = project.thumbnail ?? project.images?.[project.thumbnailIndex ?? 0];

  if (!image) {
    return <VisualPlaceholder label={project.visual} className={className} />;
  }

  const source = project.mobileImage ? (
    <source media="(max-width: 767px)" srcSet={project.mobileImage} />
  ) : null;

  if (project.thumbnailZoom) {
    return (
      <picture>
        {source}
        <span className={`project-visual-zoom ${className}`}>
          <img
            src={image}
            alt={project.visual}
            style={{ transform: `scale(${project.thumbnailZoom})` }}
          />
        </span>
      </picture>
    );
  }

  return (
    <picture>
      {source}
      <img
        src={image}
        alt={project.visual}
        className={`project-visual ${className}`}
      />
    </picture>
  );
}

function CertificateVisual({
  certificate,
  className = "",
}: {
  certificate: Certificate;
  className?: string;
}) {
  return (
    <a
      href={certificate.asset}
      target="_blank"
      rel="noreferrer"
      className="certificate-preview-link"
      aria-label={`Open ${certificate.visual} at full size`}
    >
      <img
        src={certificate.asset}
        alt={certificate.visual}
        className={`certificate-visual ${className}`}
      />
    </a>
  );
}

function ProfileVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`profile-visual ${className}`}>
      <img src="/asset/profile1.jpg" alt="Kurt Xander Francois Imperial" />
    </div>
  );
}

function DetailModal({
  title,
  eyebrow,
  onClose,
  children,
  actionLabel,
  actionHref,
}: {
  title: string;
  eyebrow: string;
  onClose: () => void;
  children: ReactNode;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="h-[100vh] w-full max-w-5xl overflow-y-auto border-0 bg-white p-6 pb-10 shadow-2xl dark:border-[#4a3b34] dark:bg-[#1c1816] sm:h-auto sm:max-h-[92vh] sm:rounded-2xl sm:border sm:border-slate-200 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4 sm:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
            {eyebrow.split(" · ").map((part, i) => (
              <span key={i} className="block">
                {part}
              </span>
            ))}
          </p>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:border-[#4a3b34] dark:hover:border-orange-700 dark:hover:bg-[#29221f] dark:hover:text-orange-300"
          >
            <X size={17} />
          </button>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="w-full">
            <p className="mb-2 hidden text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400 sm:block">
              {eyebrow.split(" · ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                </span>
              ))}
            </p>
            <h2 className="break-words text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {title}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:ml-auto">
            {actionLabel ? (
              actionHref ? (
                <a
                  href={actionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-orange-600 px-3.5 py-2 text-xs font-semibold text-orange-600 transition-colors hover:border-orange-700 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:border-orange-500 dark:text-orange-400 dark:hover:border-orange-400 dark:hover:bg-orange-900/30 dark:hover:text-orange-300"
                >
                  {actionLabel}
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-500 dark:border-[#4a3b34] dark:text-slate-400">
                  {actionLabel}
                </span>
              )
            ) : null}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:border-[#4a3b34] dark:hover:border-orange-700 dark:hover:bg-[#29221f] dark:hover:text-orange-300 sm:flex"
            >
              <X size={17} />
            </button>
          </div>
        </div>
        <div className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectSlide, setProjectSlide] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showHeroArrow, setShowHeroArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowHeroArrow(entry.isIntersecting),
      { threshold: 0.8 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };
  const notify = (label: string) =>
    toast(`${label} link is ready to customize.`, {
      description: "Replace this placeholder with your real link.",
    });

  const orderedProjects = [
    projects[6],
    projects[4],
    projects[5],
    projects[2],
    projects[3],
    projects[1],
    projects[0],
  ];
  const visibleProjects = showAllProjects
    ? orderedProjects
    : orderedProjects.slice(0, 3);
  const orderedCertificates = [...certificates].reverse();
  const visibleCertificates = showAllCertificates
    ? orderedCertificates
    : orderedCertificates.slice(0, 3);

  return (
    <main className="dark min-h-screen">
      <div className="site-shell min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-[#12100f] dark:text-slate-100">
        <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur dark:border-[#3a302b] dark:bg-[#12100f]/90">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-2.5 text-left"
              aria-label="Back to home"
            >
              {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                KXI
              </span> */}
              <span className="text-sm font-semibold tracking-tight">
                Kurt Xander Francois Imperial
              </span>
            </button>
            <div className="hidden items-center gap-7 md:flex">
              {[
                ["About", "about"],
                ["Education", "education"],
                ["Projects", "work"],
                ["Tools", "stack"],
                ["Certificates", "certificates"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => navigate(id)}
                  className="text-sm text-slate-500 transition-colors hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
                >
                  {label}
                </button>
              ))}
              {/* <button
                onClick={() => notify("Resume")}
                className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-400"
              >
                Download CV
              </button> */}
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMenuOpen(value => !value)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-[#4a3b34]"
              >
                {menuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 top-16 z-40 md:hidden"
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="absolute inset-0 h-full w-full bg-slate-950/40 backdrop-blur-[2px]"
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative border-b border-slate-200 bg-slate-50 px-5 py-4 shadow-lg dark:border-[#3a302b] dark:bg-[#12100f]"
                >
                  <div className="mx-auto flex max-w-6xl flex-col gap-3">
                    <button
                      onClick={() => navigate("about")}
                      className="py-2 text-left text-sm transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                    >
                      About
                    </button>
                    <button
                      onClick={() => navigate("education")}
                      className="py-2 text-left text-sm transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                    >
                      Education
                    </button>
                    <button
                      onClick={() => navigate("work")}
                      className="py-2 text-left text-sm transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => navigate("stack")}
                      className="py-2 text-left text-sm transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                    >
                      Stack
                    </button>
                    <button
                      onClick={() => navigate("certificates")}
                      className="py-2 text-left text-sm transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                    >
                      Certificates
                    </button>
                    <button
                      onClick={() => navigate("contact")}
                      className="py-2 text-left text-sm transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                    >
                      Contact
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <section
          id="home"
          className="relative flex min-h-[calc(100svh-65px)] items-center border-b border-slate-200 dark:border-[#3a302b]"
        >
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hero-copy"
            >
              <div className="mb-8 flex justify-center lg:hidden">
                <ProfileVisual className="h-52 w-52" />
              </div>
              <span className="hero-kicker">Hello, I'm</span>
              <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-7xl">
                Kurt Xander Francois Imperial
                <span className="text-orange-600 dark:text-orange-400">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                IT student building web and mobile apps, with cybersecurity as the newest thing I'm into.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("work")}
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
                >
                  View my projects <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("contact")}
                  className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-700 dark:hover:bg-[#29221f] dark:hover:text-orange-300"
                >
                  Get in touch
                </motion.button>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-slate-200 pt-6 dark:border-[#3a302b] sm:grid-cols-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Based in
                  </p>
                  <p className="mt-1 text-sm font-medium">Laguna, Philippines</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Studying at
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Pamantasan ng Cabuyao
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-medium">IT · Cybersecurity</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 break-all text-sm font-medium">
                    imperialkurtxander@gmail.com
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Socials
                </span>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kurtxanderimperial/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip"
                >
                  <Linkedin size={14} /> LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/xander.imperial.3/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip"
                >
                  <Facebook size={14} /> Facebook
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/kx.imp/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip"
                >
                  <Instagram size={14} /> Instagram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Yubii72"
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip"
                >
                  <Github size={14} /> GitHub
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="hidden justify-end lg:flex"
            >
              <ProfileVisual className="h-96 w-full max-w-lg" />
            </motion.div>
          </div>
          <AnimatePresence>
            {showHeroArrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2"
              >
                <motion.button
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  onClick={() => navigate("about")}
                  aria-label="Scroll down to about section"
                  className="text-slate-400 transition-colors hover:text-orange-500 dark:text-slate-500 dark:hover:text-orange-400"
                >
                  <ChevronDown size={28} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-slate-200 dark:border-[#3a302b]"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <SectionLabel>About me</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Learning, exploring, and improving.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">
                I'm an IT student at Pamantasan ng Cabuyao focused on web and mobile application development while exploring different areas of cybersecurity.
                I enjoy turning ideas into projects, exploring new tools and technologies, and continuously improving my skills along the way.
              </p>

              <div className="mt-10 border-t border-slate-200 pt-6 dark:border-[#3a302b]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Some things about me
                </p>
                <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] text-slate-600 dark:text-slate-300 marker:text-orange-600 dark:marker:text-orange-400">
                  <li>Daily driving Fedora Linux and Windows 11 in a dual-boot setup.</li>
                  <li>Running crDroid 11.2 on a rooted Xiaomi phone with an unlocked bootloader.</li>
                  <li>Messing around with systems, networks, and vulnerabilities.</li>
                  <li>I keep a bootable Kali Linux USB around for troubleshooting and experimenting.</li>
                  <li>I enjoy solving CTF rooms on TryHackMe and figuring out how things work.</li>
                  {/* <li>I also play osu!, League of Legends, and Mobile Legends when I have nothing better to do.</li> */}
                </ul>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-6 dark:border-[#3a302b]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  What I'm Into
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Web Development", "Mobile Application Development", "Cybersecurity", "CTF", "OSINT"].map(interest => (
                    <motion.span
                      key={interest}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="interest-tag cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-slate-200 dark:border-[#3a302b]"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <SectionLabel>Education</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Academic history.
              </h2>
            </div>
            <div className="education-list">
              {[
                { year: "2023 — present", title: "Pamantasan ng Cabuyao", desc: "BS Information Technology" },
                { year: "2021 — 2023", title: "IFL Christian Academy, Inc.", desc: "STEM · Senior High School" },
                { year: "2016 — 2021", title: "Holy Redeemer School of San Isidro", desc: "Junior High School" },
              ].map(item => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="education-row cursor-default"
                >
                  <span className="education-year">{item.year}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <LayoutGroup id="projects-and-toolkit">
        <motion.section
          id="work"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-6xl px-5 py-20 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects I&apos;ve worked on.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              Some class projects, experiments, and other things I've worked on.
            </p>
          </div>
          <LayoutGroup id="projects">
            <motion.div layout transition={{ type: "spring", stiffness: 220, damping: 26 }} className="mt-10 grid gap-5 md:grid-cols-3">
              <AnimatePresence>
                {visibleProjects.map(project => (
                  <motion.article
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
                    whileHover={{ y: -6 }}
                    transition={{ layout: { type: "spring", stiffness: 220, damping: 26 }, opacity: { duration: 0.25 } }}
                    className="group flex min-h-[430px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-[#3a302b] dark:bg-[#1c1816]"
                  >
                    <ProjectVisual
                      project={project}
                      className="h-56 rounded-none border-0 border-b"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400">
                          {project.number}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                          {project.type}
                        </p>
                        {project.date ? (
                          <p className="mt-2 text-xs font-medium text-orange-600 dark:text-orange-400">
                            {project.date}
                          </p>
                        ) : null}
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-[#29221f] dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setProjectSlide(0);
                          }}
                          className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 text-sm font-semibold text-orange-600 transition-colors hover:border-orange-600 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 dark:text-orange-400 dark:hover:border-orange-400 dark:hover:bg-orange-900/30"
                        >
                          <span>View more</span>
                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
              <AnimatePresence>
                {showAllProjects && (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
                    transition={{ layout: { type: "spring", stiffness: 220, damping: 26 }, opacity: { duration: 0.25 } }}
                    className="flex min-h-[430px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-[#4a3b34] dark:bg-[#1c1816]"
                  >
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      More projects in progress
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Currently building my next project. Check back soon to see what's new.
                    </p>
                  </motion.article>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div layout transition={{ type: "spring", stiffness: 220, damping: 26 }} className="mt-9 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (showAllProjects) {
                    document.getElementById("work")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }

                  setShowAllProjects(value => !value);
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
              >
                {showAllProjects ? "View less" : "View all projects"}
                <ArrowRight
                  size={15}
                  className={showAllProjects ? "rotate-[-90deg]" : "rotate-90"}
                />
              </motion.button>
            </motion.div>
          </LayoutGroup>
        </motion.section>

        <motion.section
          id="stack"
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            layout: { type: "spring", stiffness: 220, damping: 26 },
          }}
          className="border-y border-slate-200 dark:border-[#3a302b]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <SectionLabel>My tools</SectionLabel>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  What I build with.
                </h2>
              </div>
<p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                The languages, tools, and technologies I use for coursework and personal projects.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {technologies.map(({ label, detail }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="tech-group"
                >
                  <span className="text-sm font-semibold">{label}</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {detail.split(" · ").map(tool => (
                      <motion.span
                        key={tool}
                        whileHover={{ scale: 1.05 }}
                        className="tool-chip"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        </LayoutGroup>

        <motion.section
          id="certificates"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-6xl px-5 py-20 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Certificates</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Learning in progress.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              A growing list of credentials and structured learning.
            </p>
          </div>
          <LayoutGroup id="certificates">
            <motion.div layout transition={{ type: "spring", stiffness: 220, damping: 26 }} className="mt-10 space-y-2 border-y border-slate-200 py-2 dark:border-[#3a302b]">
              <AnimatePresence>
                {visibleCertificates.map(certificate => (
                  <motion.button
                    key={certificate.name}
                    layout
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15, transition: { duration: 0.18 } }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    transition={{ layout: { type: "spring", stiffness: 220, damping: 26 }, opacity: { duration: 0.25 } }}
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mx-1 grid w-[calc(100%-0.5rem)] gap-3 rounded-xl border border-transparent px-4 py-5 text-left transition-colors hover:border-orange-200 hover:bg-orange-50/60 hover:shadow-sm dark:hover:border-orange-900 dark:hover:bg-orange-950/20 sm:grid-cols-[90px_1fr_auto] sm:items-center"
                  >
                    <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {certificate.year}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold tracking-tight">
                        {certificate.name}
                      </span>
                      <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                        {certificate.issuer}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      View more <ArrowRight size={15} />
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
            <motion.div layout transition={{ type: "spring", stiffness: 220, damping: 26 }} className="mt-9 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (showAllCertificates) {
                    document.getElementById("certificates")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }

                  setShowAllCertificates(value => !value);
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
              >
                {showAllCertificates ? "View less" : "View all certificates"}
                <ArrowRight
                  size={15}
                  className={
                    showAllCertificates ? "rotate-[-90deg]" : "rotate-90"
                  }
                />
              </motion.button>
            </motion.div>
          </LayoutGroup>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-t border-slate-200 dark:border-[#3a302b]"
        >
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-5 py-20 sm:flex-row sm:items-center lg:px-8">
            <div className="max-w-md">
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Open to internships, collaborations, and conversations about
                technology.
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin
                  size={16}
                  className="shrink-0 text-orange-600 dark:text-orange-400"
                />
                Cabuyao, Laguna, Philippines
              </p>
            </div>
            <div className="w-full sm:w-72">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:imperialkurtxander@gmail.com"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 sm:py-2.5"
              >
                Say hello <Mail size={16} />
              </motion.a>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:w-72 sm:gap-2.5">
                <a
                  href="https://github.com/Yubii72"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-orange-500 hover:text-orange-600 sm:py-2 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kurtxanderimperial/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-orange-500 hover:text-orange-600 sm:py-2 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/xander.imperial.3/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-orange-500 hover:text-orange-600 sm:py-2 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
                >
                  <Facebook size={16} /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/kx.imp/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-orange-500 hover:text-orange-600 sm:py-2 dark:border-[#4a3b34] dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="border-t border-slate-200 bg-slate-100 dark:border-[#7c513b] dark:bg-[#1c1816]/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-7 sm:flex-row lg:px-8">
            <span className="text-center text-xs text-slate-500 dark:text-slate-400 sm:text-left">
              © {new Date().getFullYear()} Kurt Xander Francois Imperial · All rights reserved.
            </span>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 sm:text-right">
              Built with TypeScript, React, HTML, and CSS.
            </p>
          </div>
        </footer>
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="back-to-top back-to-top-visible"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <DetailModal
            title={selectedProject.title}
            eyebrow={`${selectedProject.type} · ${selectedProject.date ?? `project ${selectedProject.number}`}`}
            onClose={() => setSelectedProject(null)}
            actionLabel={
              selectedProject.repo
                ? "Open repository"
                : selectedProject.repoPrivate
                  ? "Private repository"
                  : undefined
            }
            actionHref={selectedProject.repo}
          >
            {selectedProject.images ? (
              <a
                href={selectedProject.images[projectSlide]}
                target="_blank"
                rel="noreferrer"
                className="project-preview-link"
                aria-label={`Open ${selectedProject.slides[projectSlide]} at full size`}
              >
                <img
                  src={selectedProject.images[projectSlide]}
                  alt={`${selectedProject.visual} · ${selectedProject.slides[projectSlide]}`}
                  className="project-modal-visual h-[68vh]"
                />
              </a>
            ) : (
              <VisualPlaceholder
                label={`${selectedProject.visual} · ${selectedProject.slides[projectSlide]}`}
                className="h-52"
              />
            )}
            {selectedProject.slides[projectSlide] && (
              <p className="mt-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                {selectedProject.slides[projectSlide]}
              </p>
            )}
            <div className="relative mt-4 flex items-center justify-between gap-3">
              <button
                onClick={() =>
                  setProjectSlide(
                    slide =>
                      (slide -
                        1 +
                        (selectedProject.images ?? selectedProject.slides)
                          .length) %
                      (selectedProject.images ?? selectedProject.slides).length
                  )
                }
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-[#4a3b34] dark:hover:border-orange-700 dark:hover:text-orange-400"
              >
                <ChevronLeft size={15} /> Previous image
              </button>
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                {projectSlide + 1} /{" "}
                {(selectedProject.images ?? selectedProject.slides).length}
              </span>
              <button
                onClick={() =>
                  setProjectSlide(
                    slide =>
                      (slide + 1) %
                      (selectedProject.images ?? selectedProject.slides).length
                  )
                }
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-[#4a3b34] dark:hover:border-orange-700 dark:hover:text-orange-400"
              >
                Next image <ChevronRight size={15} />
              </button>
            </div>
            <p className="mt-6">{selectedProject.details}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-[#29221f] dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {(
                selectedProject.highlights ?? ["Built as a learning project"]
              ).map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </DetailModal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCertificate && (
          <DetailModal
            title={selectedCertificate.name}
            eyebrow={`${selectedCertificate.issuer} · ${selectedCertificate.year}`}
            onClose={() => setSelectedCertificate(null)}
            actionLabel="Verify certificate"
            actionHref={selectedCertificate.verify}
          >
            <CertificateVisual
              certificate={selectedCertificate}
              className="h-[50vh]"
            />
            <p className="mt-6">{selectedCertificate.description}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">
              Skills
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-orange-600 dark:marker:text-orange-400">
              {selectedCertificate.skills.map(skill => (
                <li key={skill} className="text-sm font-medium">
                  {skill}
                </li>
              ))}
            </ul>
          </DetailModal>
        )}
      </AnimatePresence>
    </main>
  );
}
