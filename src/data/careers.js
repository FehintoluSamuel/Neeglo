import { brand } from "./content.js";

export const careersHero = {
  eyebrow: "Careers",
  title: "Build software people rely on.",
  subtitle:
    "We're a software company building products and client software. The Academy opens first, in February 2027. General applications are open now.",
};

export const openRoles = [];

export const academy = {
  kicker: "Neeglo Academy · School of Software Engineering",
  title: "Learn by building real products.",
  intro:
    "The academy is a practical route into software engineering, built around the same standards we use on Neeglo products and client work. It begins with a two-week foundation sprint and continues into a longer programme for selected participants.",
  status: "Launching February 2027",
  facts: [
    { label: "Launch", value: "February 2027" },
    { label: "Cohort", value: "Up to 50 students" },
    { label: "Foundation", value: "2 weeks" },
    { label: "Live sessions", value: "3 × 2 hours weekly" },
    { label: "Format", value: "Remote-first" },
    { label: "Assessment", value: "Test, project, interview" },
    { label: "Scholarships", value: "Details to be announced" },
    { label: "Certificate", value: "On successful completion" },
  ],
  steps: [
    {
      title: "Apply and tell us where you are starting from",
      text: "Applications will open ahead of the February 2027 cohort. We will ask about your background, availability and why software engineering interests you.",
    },
    {
      title: "Join the two-week foundation sprint",
      text: "Three live sessions a week, two hours each, plus guided practice and project work. The pace is deliberate: enough structure to learn, enough room to build.",
    },
    {
      title: "Complete the assessment",
      text: "A proctored fundamentals test, a project and a short interview help us decide who continues, who receives a scholarship and who is ready for the longer programme.",
    },
    {
      title: "Continue with a scholarship or a paid place",
      text: "A limited number of scholarships will be awarded after the assessment. Fee and scholarship details will be published once the HR and talents team finalises them.",
    },
    {
      title: "Finish with a certificate and a body of work",
      text: "Participants who meet the completion requirements receive a Neeglo certificate. Top performers may be invited to join Neeglo, subject to performance and open roles.",
    },
  ],
  notes: [
    "A place in the academy is not a job offer. Retention at Neeglo is a separate decision based on performance, readiness and the roles available at the time.",
    "You will need a laptop and reliable internet access. The programme is remote-first, with live sessions scheduled around work and study.",
    "Scholarship, pricing and cohort dates will be published before applications open. Register your interest now and we will send the details when they are confirmed.",
  ],
  cta: {
    label: "Register interest",
    subject: "Neeglo Academy interest",
  },
};

export const generalApplication = {
  eyebrow: "General application",
  title: "No role open? Send a note anyway.",
  text: "Send your CV and a short note about the work you want to do. We keep it on file and get in touch when something opens up.",
  includes: [
    "Your CV or a link to your profile",
    "A portfolio, GitHub or examples of your work",
    "The kind of role you are looking for",
    "Where you are based and your availability",
  ],
  subject: "General application — Neeglo",
};

export const hiringProcess = [
  {
    title: "Apply",
    text: "Send your CV and a short note by email. If you are applying to the academy, tell us that as well.",
  },
  {
    title: "Review",
    text: "We read applications against the work we have now and the work we expect next.",
  },
  {
    title: "Conversation",
    text: "If there is a fit, we arrange a conversation about your experience, your interests and how you work.",
  },
  {
    title: "Decision",
    text: "We tell you where things stand. For academy applicants, the foundation assessment is part of the selection process.",
  },
];

export const careersFaqs = [
  {
    q: "Does the academy guarantee a job at Neeglo?",
    a: "No. The academy is a training programme, not a job offer. Top performers may be invited to join Neeglo, but retention depends on performance, readiness and the roles open at the time.",
  },
  {
    q: "When can I apply to the academy?",
    a: "The first cohort launches in February 2027. Applications will open ahead of the cohort, and scholarship and pricing details will be published before then. You can register interest by email now.",
  },
  {
    q: "What does the two-week foundation include?",
    a: "Three live classes a week, two hours each, plus guided practice and project work. It is designed to give you a real feel for the programme and to help us assess how you learn and build.",
  },
  {
    q: "How are scholarships decided?",
    a: "Scholarships are awarded after the foundation assessment, which includes a proctored test, a project and an interview. The final scholarship policy and fees are being set by the HR and talents team.",
  },
  {
    q: "Can I apply if there is no open role?",
    a: "Yes. Use the general application route. We keep CVs on file for future roles, and you can ask us to remove yours at any time.",
  },
  {
    q: "Are Neeglo roles remote?",
    a: "Neeglo works remote-first across Lagos, Abakaliki and Enugu. Each role will state its location and working pattern when it is posted.",
  },
];

export const careersMailto = (subject) =>
  `mailto:${brand.emailCareers}?subject=${encodeURIComponent(subject)}`;
