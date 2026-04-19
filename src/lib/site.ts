export const SITE = {
  name: "Bimla Devi Hospital",
  shortName: "Bimla Devi Hospital",
  tagline: "Affordable & Trusted Healthcare for Every Family",
  description:
    "Multi-speciality hospital in Mayur Vihar, Delhi with 24x7 Emergency, ICU, modular OT and cashless mediclaim. Trusted, affordable, patient-first care.",
  phone: "011 4188 7777",
  phoneTel: "01141887777",
  whatsapp: "919999999999", // generic WhatsApp link target — uses phone number
  email: "contact@bimladevi.hospital",
  address: {
    line1: "Pocket B, Plot No. 5, Ram Kumar Gautam Marg",
    line2: "Mayur Vihar Phase II, Patparganj, Delhi 110091",
    city: "Delhi",
    pincode: "110091",
    mapUrl: "https://maps.app.goo.gl/2yfaBnDfPj22Xkyo6",
  },
  hours: {
    opd: "Mon–Sat: 9:00 AM – 8:00 PM • Sun: 10:00 AM – 2:00 PM",
    emergency: "24 × 7 — Always Open",
  },
  origin: "https://bimladevi.hospital",
};

export const STATS = [
  { value: "40+", label: "Years of Trusted Care" },
  { value: "30+", label: "Expert Consultants" },
  { value: "100K+", label: "Patients Served" },
  { value: "4.8★", label: "Average Patient Rating" },
];

export type Speciality = {
  slug: string;
  name: string;
  short: string;
  description: string;
  conditions: string[];
  treatments: string[];
};

export const SPECIALITIES: Speciality[] = [
  {
    slug: "gynaecology-obstetrics",
    name: "Gynaecology & Obstetrics",
    short: "Complete women's health, pregnancy & maternity care.",
    description:
      "Personalised care across every stage of a woman's life — from routine screenings and infertility evaluation to safe normal deliveries, C-sections and laparoscopic gynaec surgery.",
    conditions: [
      "Pregnancy & high-risk obstetrics",
      "PCOS / PCOD & hormonal disorders",
      "Fibroids, cysts and endometriosis",
      "Infertility evaluation",
      "Menstrual & menopausal issues",
    ],
    treatments: [
      "Normal Delivery",
      "Painless Delivery (Epidural)",
      "Caesarean Section (LSCS)",
      "Laparoscopic Hysterectomy",
      "D&C and minor procedures",
    ],
  },
  {
    slug: "paediatrics",
    name: "Paediatrics & Newborn Care",
    short: "Compassionate care for infants, children & teens.",
    description:
      "Expert paediatric care covering preventive vaccination, growth and developmental milestones, neonatal care and treatment of acute & chronic childhood illness.",
    conditions: [
      "Newborn care & jaundice",
      "Vaccination (IAP schedule)",
      "Fever, cough, asthma, allergies",
      "Growth & nutrition concerns",
      "Childhood infections",
    ],
    treatments: [
      "Routine immunisation",
      "Newborn nursery care",
      "Nebulisation & inpatient care",
      "Developmental assessment",
    ],
  },
  {
    slug: "general-surgery",
    name: "General & Laparoscopic Surgery",
    short: "Modern keyhole surgery with faster recovery.",
    description:
      "Advanced general surgery using minimally invasive laparoscopic techniques wherever possible — smaller cuts, less pain, shorter hospital stay.",
    conditions: [
      "Gallstones",
      "Hernia (inguinal, umbilical)",
      "Appendicitis",
      "Piles, fissure, fistula",
      "Lumps, cysts, abscesses",
    ],
    treatments: [
      "Laparoscopic Cholecystectomy",
      "Laparoscopic Hernia Repair",
      "Laparoscopic Appendectomy",
      "Stapler / laser piles surgery",
    ],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics & Trauma",
    short: "Bone, joint and fracture care with rehab.",
    description:
      "Comprehensive musculoskeletal care for fractures, joint pain, sports injuries and arthritis — backed by in-house imaging and physiotherapy.",
    conditions: [
      "Fractures & trauma",
      "Knee & back pain",
      "Arthritis",
      "Ligament & sports injuries",
      "Frozen shoulder",
    ],
    treatments: [
      "Fracture fixation & casting",
      "Joint injections",
      "Arthroscopic procedures",
      "Physiotherapy & rehab",
    ],
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    short: "Primary care, diabetes, BP & infections.",
    description:
      "Trusted physicians for everyday illness, lifestyle disease management and long-term wellness — including diabetes, hypertension, thyroid and infections.",
    conditions: [
      "Diabetes & thyroid",
      "Hypertension & heart risk",
      "Fever, dengue, typhoid",
      "Respiratory infections",
      "Lifestyle disorders",
    ],
    treatments: [
      "OPD consultation",
      "Inpatient medical care",
      "Health check-ups",
      "Chronic disease management",
    ],
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose & Throat)",
    short: "Hearing, sinus, tonsils & voice care.",
    description:
      "Precise diagnosis and modern surgical & medical therapies for the ear, nose and throat — from chronic sinusitis to hearing loss and tonsils.",
    conditions: [
      "Sinusitis & nasal block",
      "Tonsillitis & sore throat",
      "Hearing loss & ear infection",
      "Vertigo",
      "Snoring",
    ],
    treatments: [
      "Tonsillectomy / Adenoidectomy",
      "FESS (sinus surgery)",
      "Septoplasty",
      "Microscopic ear surgery",
    ],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    short: "Kidney care, dialysis & long-term renal health.",
    description:
      "Specialised kidney care — early detection, medical management of chronic kidney disease and coordination for dialysis when needed.",
    conditions: [
      "Chronic Kidney Disease (CKD)",
      "Kidney stones",
      "UTI & proteinuria",
      "Hypertension-related kidney disease",
    ],
    treatments: [
      "CKD evaluation & care plan",
      "Dialysis coordination",
      "Renal nutrition counselling",
    ],
  },
  {
    slug: "psychiatry-psychology",
    name: "Psychiatry & Clinical Psychology",
    short: "Mental wellness, therapy & counselling.",
    description:
      "Confidential, evidence-based care for depression, anxiety, OCD, sleep and relationship concerns — combining medication and therapy.",
    conditions: [
      "Depression & anxiety",
      "OCD",
      "Sleep & stress disorders",
      "Adolescent counselling",
    ],
    treatments: [
      "Psychiatric consultation",
      "CBT & psychotherapy",
      "Family counselling",
    ],
  },
  {
    slug: "dental",
    name: "Dental & Maxillofacial",
    short: "Complete dental care, RCT, implants & oral surgery.",
    description:
      "From routine cleaning and fillings to root canals, implants and complex oral & maxillofacial surgery.",
    conditions: [
      "Cavities & toothache",
      "Gum disease",
      "Wisdom tooth",
      "Missing teeth",
      "Jaw / facial trauma",
    ],
    treatments: [
      "Scaling & polishing",
      "Root Canal (RCT)",
      "Dental Implants",
      "Wisdom tooth surgery",
    ],
  },
  {
    slug: "urology",
    name: "Urology",
    short: "Kidney stones, prostate & urinary care.",
    description:
      "Modern urology for stones, prostate conditions and urinary tract problems — using minimally invasive techniques wherever possible.",
    conditions: [
      "Kidney & ureteric stones",
      "Enlarged prostate (BPH)",
      "Recurrent UTI",
      "Hematuria",
    ],
    treatments: [
      "URS / RIRS for stones",
      "TURP for prostate",
      "Cystoscopy",
    ],
  },
];

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  body: string;
  benefits: string[];
  recovery: string;
  speciality: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "normal-delivery",
    name: "Normal Delivery & Painless Birth",
    short: "Safe, supported, mother-first childbirth.",
    body:
      "Our maternity team supports you through a safe normal delivery with optional epidural (painless) labour, continuous foetal monitoring and a clean, comfortable labour room. C-section is performed only when medically indicated — your safety and your baby's wellbeing always come first.",
    benefits: [
      "Senior gynaecologist on call 24×7",
      "Painless (epidural) option available",
      "Skin-to-skin and breastfeeding support",
      "Newborn nursery & paediatrician on standby",
    ],
    recovery: "Usually 1–2 days hospital stay; complete recovery in 2–4 weeks.",
    speciality: "gynaecology-obstetrics",
  },
  {
    slug: "c-section",
    name: "Caesarean Section (LSCS)",
    short: "Planned and emergency C-sections, safely.",
    body:
      "When a C-section is the safer choice, our experienced obstetric and anaesthesia team performs it in a sterile, modern OT — with mother-friendly techniques, gentle handling of the baby and structured pain management for a smooth recovery.",
    benefits: [
      "Modular operation theatre",
      "Senior anaesthesia team",
      "Cashless insurance accepted",
      "Lactation support after surgery",
    ],
    recovery: "Hospital stay of 3–4 days; light activity in 1–2 weeks; full recovery 6 weeks.",
    speciality: "gynaecology-obstetrics",
  },
  {
    slug: "laparoscopic-surgery",
    name: "Laparoscopic (Keyhole) Surgery",
    short: "Smaller cuts, less pain, faster recovery.",
    body:
      "Laparoscopic surgery uses tiny incisions and a high-definition camera so you go home faster, with less pain and smaller scars. We offer it for gallstones, hernia, appendicitis and selected gynaecological conditions.",
    benefits: [
      "Hospital stay often just 1–2 days",
      "Reduced post-op pain",
      "Quicker return to work",
      "Lower risk of wound infection",
    ],
    recovery: "Most patients return to normal activity in 1–2 weeks.",
    speciality: "general-surgery",
  },
  {
    slug: "fracture-treatment",
    name: "Fracture & Trauma Care",
    short: "Casting, surgical fixation and rehabilitation.",
    body:
      "From simple fractures needing a cast to complex trauma requiring plate-and-screw fixation, our orthopaedic team delivers prompt diagnosis (in-house X-ray), surgical care and structured physiotherapy under one roof.",
    benefits: [
      "In-house digital X-ray",
      "Modern fixation implants",
      "Physiotherapy from day one",
      "Cashless mediclaim accepted",
    ],
    recovery: "Varies by fracture; typically 4–12 weeks with guided rehab.",
    speciality: "orthopaedics",
  },
  {
    slug: "icu-critical-care",
    name: "ICU & Critical Care",
    short: "Round-the-clock intensive monitoring & support.",
    body:
      "Our intensive care unit is staffed 24×7 with trained intensivists and nurses, equipped with multi-para monitors, ventilators and emergency response protocols for medical and post-surgical critical care.",
    benefits: [
      "24×7 intensivist cover",
      "Ventilator & monitoring support",
      "Infection-controlled environment",
      "Family counselling daily",
    ],
    recovery: "Stay depends on condition; structured step-down to ward when stable.",
    speciality: "general-medicine",
  },
  {
    slug: "emergency-trauma",
    name: "24×7 Emergency & Trauma Care",
    short: "Rapid response when every minute matters.",
    body:
      "A dedicated emergency room is staffed round the clock with doctors and nurses trained in advanced life support — backed by ICU, OT, lab and imaging on the same campus for immediate intervention.",
    benefits: [
      "Doctor-led triage in minutes",
      "ECG, X-ray & lab on-site",
      "Direct ICU / OT escalation",
      "Cashless emergency admission",
    ],
    recovery: "Stabilisation first, then admission or discharge as appropriate.",
    speciality: "general-medicine",
  },
];

export type Doctor = {
  slug: string;
  name: string;
  qualification: string;
  designation: string;
  speciality: string;
  experience: string;
  bio: string;
  treatments: string[];
  image?: string;
};

import drJasjot from "@/assets/doctor-jasjot.jpg";
import drPalak from "@/assets/doctor-palak.jpg";
import drPriyanka from "@/assets/doctor-priyanka.jpg";
import drSanjeev from "@/assets/doctor-sanjeev.jpg";
import drMeera from "@/assets/doctor-meera.jpg";
import drManish from "@/assets/doctor-manish.jpg";

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-priyanka-jha",
    name: "Dr. Priyanka Jha",
    qualification: "MBBS, DGO",
    designation: "Obstetrician & Gynaecologist",
    speciality: "Gynaecology & Obstetrics",
    experience: "15+ years",
    bio: "A skilled obstetrician and gynaecologist dedicated to women's health and maternity care. Dr. Priyanka provides expert guidance through pregnancy, childbirth and the diagnosis & treatment of a wide range of gynaecological conditions.",
    treatments: ["Normal Delivery", "C-Section", "High-risk pregnancy", "PCOD care"],
    image: drPriyanka,
  },
  {
    slug: "dr-meera-gaur",
    name: "Dr. Meera Gaur",
    qualification: "M.B.B.S., M.S. (Obs & Gyn)",
    designation: "Senior Consultant — Gynaecology",
    speciality: "Gynaecology & Obstetrics",
    experience: "42 years",
    bio: "Practising for over four decades, Dr. Meera Gaur is also a visiting consultant at Max and Cloud 9 Hospitals. Her experience spans complex obstetrics, gynaecological surgery and lifelong women's care.",
    treatments: ["Complex deliveries", "Hysterectomy", "Menopause care"],
    image: drMeera,
  },
  {
    slug: "dr-jasjot-kaur",
    name: "Dr. Jasjot Kaur",
    qualification: "MBBS, DNB",
    designation: "ENT Surgeon",
    speciality: "ENT (Ear, Nose & Throat)",
    experience: "10+ years",
    bio: "A proficient ENT surgeon offering accurate diagnosis, modern medical and surgical therapies and a kind, patient-centred approach for long-lasting relief from ear, nose and throat disorders.",
    treatments: ["FESS", "Tonsillectomy", "Septoplasty", "Microscopic ear surgery"],
    image: drJasjot,
  },
  {
    slug: "dr-sanjeev-tomar",
    name: "Dr. Sanjeev Tomar",
    qualification: "BDS, MDS, MBA (Hosp. Admn.)",
    designation: "Consultant — Oral & Maxillofacial Surgery",
    speciality: "Dental & Maxillofacial",
    experience: "18+ years",
    bio: "Consultant maxillofacial surgeon with special interest in maxillofacial trauma, pathology, dental implants and minor oral surgeries (including wisdom-tooth removal). Also expertly handles all routine dental procedures.",
    treatments: ["Dental implants", "Wisdom tooth surgery", "Maxillofacial trauma"],
    image: drSanjeev,
  },
  {
    slug: "dr-manish-s-kansal",
    name: "Dr. Manish S Kansal",
    qualification: "MBBS, DPM",
    designation: "Director & Medical Superintendent",
    speciality: "Psychiatry & Hospital Administration",
    experience: "25+ years",
    bio: "As Director and Medical Superintendent, Dr. Manish leads clinical governance, patient safety and the day-to-day medical leadership of Bimla Devi Hospital — with a clinical background in psychiatry.",
    treatments: ["Psychiatric consultation", "Hospital leadership"],
    image: drManish,
  },
  {
    slug: "dr-palak-maheshwari",
    name: "Dr. Palak Maheshwari",
    qualification: "Licensed Clinical Psychologist (RCI)",
    designation: "Clinical Psychologist",
    speciality: "Psychiatry & Clinical Psychology",
    experience: "8 years",
    bio: "Licensed Clinical Psychologist with the Rehabilitation Council of India, specialising in OCD. Her approach combines evidence-based techniques with deep empathy to make a lasting impact on each patient's journey.",
    treatments: ["CBT", "OCD therapy", "Anxiety & stress counselling"],
    image: drPalak,
  },
  {
    slug: "dr-ranju-kumari",
    name: "Dr. Ranju Kumari",
    qualification: "MBBS, MS",
    designation: "Obstetrician & Gynaecologist",
    speciality: "Gynaecology & Obstetrics",
    experience: "18 years",
    bio: "A dedicated professional, utterly passionate about her work and always ready to serve patients with attentive, compassionate care.",
    treatments: ["Normal Delivery", "Gynaec surgery"],
  },
  {
    slug: "dr-seema-sinha",
    name: "Dr. Seema Sinha",
    qualification: "MBBS, MD",
    designation: "Senior Consultant",
    speciality: "General Medicine",
    experience: "27 years",
    bio: "27 years of experience — undergraduate and postgraduate from the Institute of Medical Sciences, BHU; trained as resident at GTB Hospital, Delhi.",
    treatments: ["Diabetes", "Hypertension", "General medicine"],
  },
  {
    slug: "dr-j-madhavi",
    name: "Dr. J Madhavi",
    qualification: "MS (Obs & Gyn)",
    designation: "Consultant Obstetrician, Gynaecologist & Laparoscopic Surgeon",
    speciality: "Gynaecology & Obstetrics",
    experience: "15+ years",
    bio: "Consultant in obstetrics, gynaecology and laparoscopic gynaec surgery — combining clinical depth with minimally invasive surgical expertise.",
    treatments: ["Laparoscopic gynaec surgery", "Obstetrics"],
  },
  {
    slug: "dr-shalu-wadhawan",
    name: "Dr. Shalu Wadhawan",
    qualification: "MBBS, MS",
    designation: "Gynaecologist",
    speciality: "Gynaecology & Obstetrics",
    experience: "12+ years",
    bio: "Visiting gynaecologist providing routine antenatal, gynaec OPD and surgical care.",
    treatments: ["Antenatal care", "Gynaec OPD"],
  },
  {
    slug: "dr-ak-sinha",
    name: "Dr. A.K. Sinha",
    qualification: "MBBS, MS",
    designation: "Gynaecologist",
    speciality: "Gynaecology & Obstetrics",
    experience: "20+ years",
    bio: "Senior gynaecologist with extensive surgical experience.",
    treatments: ["Gynaec surgery"],
  },
  {
    slug: "dr-vr-sood",
    name: "Dr. V.R. Sood",
    qualification: "MBBS, MS",
    designation: "Gynaecologist",
    speciality: "Gynaecology & Obstetrics",
    experience: "20+ years",
    bio: "Visiting gynaecology consultant with deep experience in obstetrics and gynaec surgery.",
    treatments: ["Obstetrics", "Gynaec surgery"],
  },
  {
    slug: "dr-g-bhargava",
    name: "Dr. G. Bhargava",
    qualification: "MBBS, MD (Paediatrics)",
    designation: "Paediatrician",
    speciality: "Paediatrics & Newborn Care",
    experience: "20+ years",
    bio: "Senior paediatrician with broad experience in newborn care, vaccination and childhood illness.",
    treatments: ["Newborn care", "Vaccination", "Paediatric OPD"],
  },
  {
    slug: "dr-sp-singh",
    name: "Dr. SP Singh",
    qualification: "MBBS, MS (Ortho)",
    designation: "Orthopaedic Surgeon",
    speciality: "Orthopaedics & Trauma",
    experience: "20+ years",
    bio: "Orthopaedic surgeon for fractures, joint pain, sports injuries and trauma.",
    treatments: ["Fracture fixation", "Joint care"],
  },
  {
    slug: "dr-rashi-manocha",
    name: "Dr. Rashi Manocha",
    qualification: "MBBS, MD (Psychiatry)",
    designation: "Psychiatrist",
    speciality: "Psychiatry & Clinical Psychology",
    experience: "10+ years",
    bio: "Psychiatrist with focus on mood, anxiety and adolescent mental health.",
    treatments: ["Psychiatric consultation"],
  },
  {
    slug: "dr-ishita-agarwal",
    name: "Dr. Ishita Agarwal",
    qualification: "M.A., M.Phil (Clinical Psychology)",
    designation: "Psychologist",
    speciality: "Psychiatry & Clinical Psychology",
    experience: "8+ years",
    bio: "Clinical psychologist offering CBT, counselling and psychometric assessments.",
    treatments: ["CBT", "Counselling"],
  },
  {
    slug: "dr-garima-kapoor",
    name: "Dr. Garima Kapoor",
    qualification: "M.A. (Clinical Psychology)",
    designation: "Psychologist",
    speciality: "Psychiatry & Clinical Psychology",
    experience: "7+ years",
    bio: "Psychologist providing therapy and family counselling.",
    treatments: ["Family counselling", "Therapy"],
  },
  {
    slug: "dr-ritesh-gupta",
    name: "Dr. Ritesh Gupta",
    qualification: "MBBS, MS, MCh (Urology)",
    designation: "Urologist",
    speciality: "Urology",
    experience: "15+ years",
    bio: "Urologist treating stones, prostate and urinary tract conditions, with experience in endourology.",
    treatments: ["URS", "TURP"],
  },
  {
    slug: "dr-arvind-tiwari",
    name: "Dr. Arvind Tiwari",
    qualification: "MBBS, MS, MCh (Urology)",
    designation: "Urologist",
    speciality: "Urology",
    experience: "15+ years",
    bio: "Urology consultant for stones, BPH and urinary tract care.",
    treatments: ["Stone treatment", "Prostate surgery"],
  },
  {
    slug: "dr-biswas",
    name: "Dr. Biswas",
    qualification: "MBBS, MD, DM (Nephrology)",
    designation: "Nephrologist",
    speciality: "Nephrology",
    experience: "15+ years",
    bio: "Nephrologist focused on early detection of kidney disease, CKD management and dialysis coordination.",
    treatments: ["CKD care", "Dialysis coordination"],
  },
  {
    slug: "dr-virender",
    name: "Dr. Virender",
    qualification: "MBBS, MD, DM (Neurology)",
    designation: "Neurologist",
    speciality: "Neurology",
    experience: "15+ years",
    bio: "Neurologist for stroke, headache, epilepsy and movement disorders.",
    treatments: ["Stroke care", "Headache & epilepsy"],
  },
  {
    slug: "dr-ranvir-singh",
    name: "Dr. Ranvir Singh",
    qualification: "MBBS, MS",
    designation: "General & Laparoscopic Surgeon",
    speciality: "General & Laparoscopic Surgery",
    experience: "20+ years",
    bio: "General surgeon offering open and laparoscopic procedures including hernia, gallstone and appendix surgery.",
    treatments: ["Laparoscopic surgery", "Hernia", "Appendix"],
  },
];

export const INSURERS = [
  "MediAssist", "Star Health", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz",
  "Care Health (Religare)", "FHPL", "Vidal Health", "Paramount Health",
  "Heritage Health", "Health India TPA", "Raksha TPA", "MD India",
  "ECHS", "CGHS", "Delhi Govt. Employees",
];

export const TESTIMONIALS = [
  {
    name: "Anita S.",
    relation: "Mother of newborn",
    quote:
      "From my first OPD visit till delivery, the team was patient and reassuring. The room was clean and the nurses were so kind to my baby.",
    rating: 5,
  },
  {
    name: "Rakesh K.",
    relation: "Gallstone surgery patient",
    quote:
      "Got my laparoscopic gallbladder surgery done here. Cashless went through smoothly and I was back home in two days. Honestly affordable.",
    rating: 5,
  },
  {
    name: "Sunita D.",
    relation: "Patient's daughter",
    quote:
      "We rushed my father to the emergency at midnight. The doctor saw him within minutes and shifted him to ICU. We are forever grateful.",
    rating: 5,
  },
];

export const FAQS_HOME = [
  {
    q: "Do you accept cashless mediclaim?",
    a: "Yes. We are empanelled with all leading TPAs and major insurance companies including Star Health, HDFC ERGO, ICICI Lombard, Care Health, MediAssist, FHPL, Vidal Health, Paramount and many more. CGHS and ECHS beneficiaries are also welcome.",
  },
  {
    q: "Is the emergency open 24×7?",
    a: "Yes. Our emergency department is staffed by doctors and nurses round the clock, with ICU, OT, lab and imaging on the same campus for immediate care.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call us at 011 4188 7777, send a WhatsApp message, or use the booking form on our website. Walk-in OPD is also available during clinic hours.",
  },
  {
    q: "Where is Bimla Devi Hospital located?",
    a: "Pocket B, Plot No. 5, Ram Kumar Gautam Marg, Mayur Vihar Phase II, Patparganj, Delhi 110091 — easily accessible from East Delhi, Noida and nearby areas.",
  },
];
