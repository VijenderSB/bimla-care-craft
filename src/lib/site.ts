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
  /** Conditions / symptoms that indicate this treatment */
  whoNeedsIt?: string[];
  /** Step-by-step what happens at the hospital */
  procedure?: string[];
  /** What the patient should do before the procedure */
  preparation?: string[];
  /** Recovery milestones over time */
  recoveryTimeline?: { time: string; milestone: string }[];
  /** Realistic risks discussed for informed consent */
  risks?: string[];
  /** Approximate hospital stay */
  stay?: string;
  /** Type of anaesthesia */
  anaesthesia?: string;
  /** Approximate duration of the procedure */
  duration?: string;
  /** Indicative starting price band — for reference only */
  costFrom?: string;
  /** Frequently asked questions specific to this treatment */
  faqs?: { q: string; a: string }[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "normal-delivery",
    name: "Normal Delivery & Painless Birth",
    short: "Safe, supported, mother-first childbirth with optional painless (epidural) labour.",
    body:
      "Our maternity team supports you through a safe normal delivery with optional epidural (painless) labour, continuous foetal monitoring and a clean, comfortable labour room. C-section is performed only when medically indicated — your safety and your baby's wellbeing always come first.",
    benefits: [
      "Senior gynaecologist on call 24×7",
      "Painless (epidural) option available",
      "Skin-to-skin and breastfeeding support",
      "Newborn nursery & paediatrician on standby",
      "Private & semi-private labour rooms",
      "Cashless mediclaim accepted",
    ],
    whoNeedsIt: [
      "Expectant mothers with uncomplicated pregnancy",
      "Mothers preferring a low-intervention birth",
      "Patients seeking painless (epidural) childbirth",
    ],
    procedure: [
      "Admission, baseline vitals and CTG monitoring",
      "Continuous labour support by trained nurses",
      "Optional epidural by senior anaesthesia team",
      "Assisted vaginal delivery in modern labour room",
      "Immediate skin-to-skin contact and breastfeeding initiation",
      "Newborn check by paediatrician within first hour",
    ],
    preparation: [
      "Complete antenatal check-ups & scans on schedule",
      "Carry pregnancy file, ID and insurance card",
      "Pack a maternity bag from week 36",
      "Light meal allowed in early labour",
    ],
    recoveryTimeline: [
      { time: "Day 0", milestone: "Delivery, observation, breastfeeding initiation" },
      { time: "Day 1–2", milestone: "Mobilisation, lactation guidance, discharge" },
      { time: "Week 1", milestone: "First postnatal review & newborn check" },
      { time: "Week 6", milestone: "Postnatal review, contraception counselling" },
    ],
    risks: ["Need for emergency C-section", "Postpartum bleeding", "Perineal tear"],
    stay: "1–2 days",
    anaesthesia: "Optional epidural",
    duration: "Variable (labour-dependent)",
    costFrom: "Affordable packages available — call for estimate",
    faqs: [
      { q: "Is painless delivery safe?", a: "Yes. Epidural analgesia is administered by our senior anaesthesia team and is a globally accepted, safe option for labour pain relief." },
      { q: "Will my husband be allowed inside?", a: "One birth partner is permitted in the labour room subject to clinical and infection-control conditions." },
      { q: "Do you accept cashless maternity?", a: "Yes — most insurers cover maternity after a waiting period. We verify and process cashless approval for you." },
    ],
    recovery: "Usually 1–2 days hospital stay; complete recovery in 2–4 weeks.",
    speciality: "gynaecology-obstetrics",
  },
  {
    slug: "c-section",
    name: "Caesarean Section (LSCS)",
    short: "Planned and emergency C-sections in a modern modular OT.",
    body:
      "When a C-section is the safer choice, our experienced obstetric and anaesthesia team performs it in a sterile, modern OT — with mother-friendly techniques, gentle handling of the baby and structured pain management for a smooth recovery.",
    benefits: [
      "Modular operation theatre",
      "Senior anaesthesia team",
      "Cashless insurance accepted",
      "Lactation support after surgery",
      "Single-room recovery options",
    ],
    whoNeedsIt: [
      "Previous C-section (with recurrent indication)",
      "Breech / transverse presentation",
      "Foetal distress or failure to progress",
      "Placenta praevia & high-risk pregnancy",
    ],
    procedure: [
      "Pre-op consultation & anaesthesia assessment",
      "Spinal / epidural anaesthesia in OT",
      "Lower-segment caesarean section",
      "Baby handed to paediatrician for newborn care",
      "Mother shifted to recovery & then private room",
    ],
    preparation: [
      "6 hours fasting before planned surgery",
      "Pre-op blood work & cross-match",
      "Bath & remove jewellery, nail polish",
      "Arrange caregiver for first 48 hours",
    ],
    recoveryTimeline: [
      { time: "Day 0", milestone: "Surgery, observation, breastfeeding support" },
      { time: "Day 1", milestone: "Mobilisation with help, oral fluids & diet" },
      { time: "Day 3–4", milestone: "Discharge with wound care plan" },
      { time: "Week 2", milestone: "Suture review, light activity" },
      { time: "Week 6", milestone: "Postnatal review, normal activity resumed" },
    ],
    risks: ["Wound infection", "Bleeding", "Anaesthetic reactions", "DVT"],
    stay: "3–4 days",
    anaesthesia: "Spinal / epidural",
    duration: "45–60 minutes",
    costFrom: "Cashless packages — call for tailored estimate",
    faqs: [
      { q: "Can I breastfeed immediately after C-section?", a: "Yes. We support breastfeeding within the first hour wherever clinically possible." },
      { q: "How soon can I walk after C-section?", a: "Most mothers walk with assistance within 12–24 hours, which speeds up recovery." },
    ],
    recovery: "Hospital stay of 3–4 days; light activity in 1–2 weeks; full recovery 6 weeks.",
    speciality: "gynaecology-obstetrics",
  },
  {
    slug: "laparoscopic-hysterectomy",
    name: "Laparoscopic Hysterectomy",
    short: "Keyhole removal of the uterus for fibroids, prolapse or heavy bleeding.",
    body:
      "Laparoscopic hysterectomy uses small abdominal incisions and a high-definition camera to remove the uterus with minimal blood loss, smaller scars and a much faster return to normal life compared with open surgery.",
    benefits: [
      "Tiny incisions & minimal scarring",
      "Less blood loss & lower infection risk",
      "Hospital stay of just 2–3 days",
      "Faster return to normal activity",
    ],
    whoNeedsIt: [
      "Symptomatic fibroids unresponsive to medication",
      "Adenomyosis with heavy painful periods",
      "Uterine prolapse",
      "Pre-cancerous endometrial conditions",
    ],
    procedure: [
      "Pre-op evaluation, scans & anaesthesia review",
      "General anaesthesia in modular OT",
      "3–4 small (5–10mm) abdominal incisions",
      "Uterus removed via laparoscope",
      "Closure with absorbable sutures",
    ],
    preparation: [
      "Stop blood-thinners as advised (5–7 days prior)",
      "Overnight fasting before surgery",
      "Pre-op investigations & physician fitness",
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Mobilisation, light diet" },
      { time: "Day 2–3", milestone: "Discharge with pain control" },
      { time: "Week 2", milestone: "Resume desk work" },
      { time: "Week 6", milestone: "Resume exercise, lifting & travel" },
    ],
    risks: ["Bleeding", "Bladder / ureter injury (rare)", "Conversion to open surgery"],
    stay: "2–3 days",
    anaesthesia: "General",
    duration: "1.5–2.5 hours",
    costFrom: "Insurance covered — request a written estimate",
    faqs: [
      { q: "Will I go into menopause after hysterectomy?", a: "Only if the ovaries are also removed. We preserve ovaries wherever clinically appropriate." },
    ],
    recovery: "Most patients return to normal activity in 3–4 weeks.",
    speciality: "gynaecology-obstetrics",
  },
  {
    slug: "high-risk-pregnancy",
    name: "High-Risk Pregnancy Care",
    short: "Specialised antenatal care for diabetes, BP, twins & previous loss.",
    body:
      "A structured high-risk pregnancy programme combining senior obstetricians, dedicated foetal monitoring and on-call paediatrics & ICU back-up — giving expectant mothers and families confidence at every stage.",
    benefits: [
      "Senior obstetrician-led care plan",
      "Detailed foetal monitoring & growth scans",
      "Diabetes & BP co-management",
      "On-site neonatal back-up at delivery",
    ],
    whoNeedsIt: [
      "Gestational or pre-existing diabetes",
      "Hypertension or pre-eclampsia",
      "Twin / multiple pregnancy",
      "Previous miscarriage or preterm birth",
      "Mothers above 35 years",
    ],
    procedure: [
      "Detailed booking visit & risk assessment",
      "Customised antenatal schedule",
      "Serial growth and Doppler scans",
      "Planned delivery with multidisciplinary team",
    ],
    preparation: [
      "Maintain antenatal visit schedule",
      "Daily glucose / BP monitoring as advised",
      "Iron, calcium & folic acid as prescribed",
    ],
    stay: "As per delivery plan",
    anaesthesia: "Per delivery method",
    duration: "Programme across pregnancy",
    faqs: [
      { q: "Can I still aim for normal delivery?", a: "Often yes — many high-risk mothers deliver vaginally with the right monitoring. Mode of delivery is decided based on real-time clinical findings." },
    ],
    recovery: "Delivery-specific. Postnatal review at 1 and 6 weeks.",
    speciality: "gynaecology-obstetrics",
  },
  {
    slug: "laparoscopic-cholecystectomy",
    name: "Laparoscopic Gallbladder Surgery (Cholecystectomy)",
    short: "Day-care keyhole removal of a stone-bearing gallbladder.",
    body:
      "The most modern way to treat gallstones — four tiny incisions, a high-definition camera and a hospital stay of just one to two days. Most patients return to office work within a week.",
    benefits: [
      "Day-care / next-day discharge",
      "Tiny scars (5–10mm)",
      "Minimal post-op pain",
      "Cashless insurance accepted",
    ],
    whoNeedsIt: [
      "Symptomatic gallstones",
      "Recurrent biliary colic",
      "Acute or chronic cholecystitis",
      "Gallbladder polyps > 1cm",
    ],
    procedure: [
      "Pre-op assessment & ultrasound review",
      "General anaesthesia in modular OT",
      "4 small incisions, gallbladder removed laparoscopically",
      "Skin closed with absorbable sutures or glue",
    ],
    preparation: [
      "Overnight fasting (8 hours)",
      "Stop blood-thinners as advised",
      "Pre-op blood work, ECG & physician fitness",
    ],
    recoveryTimeline: [
      { time: "Day 0", milestone: "Surgery, oral sips after 4–6 hrs" },
      { time: "Day 1", milestone: "Discharge with diet plan" },
      { time: "Week 1", milestone: "Return to office work" },
      { time: "Week 4", milestone: "Resume gym & heavy lifting" },
    ],
    risks: ["Bile leak (rare)", "Wound infection", "Conversion to open surgery"],
    stay: "1–2 days",
    anaesthesia: "General",
    duration: "45–75 minutes",
    costFrom: "Cashless packages from leading TPAs",
    faqs: [
      { q: "Will I have to follow a strict diet for life?", a: "No. Most patients return to a normal diet within a few weeks; only initial low-fat caution is advised." },
    ],
    recovery: "Office work in 7 days; full activity in 3–4 weeks.",
    speciality: "general-surgery",
  },
  {
    slug: "hernia-repair",
    name: "Laparoscopic Hernia Repair",
    short: "Mesh repair for inguinal, umbilical & incisional hernia.",
    body:
      "Modern hernia repair using laparoscopic techniques and a strong mesh — giving you a lower chance of recurrence and a much faster return to daily life than the traditional open approach.",
    benefits: [
      "Smaller scars, less pain",
      "Lower recurrence with mesh",
      "Discharge in 1–2 days",
      "Bilateral repair in single sitting",
    ],
    whoNeedsIt: [
      "Inguinal (groin) hernia",
      "Umbilical hernia",
      "Incisional hernia after past surgery",
    ],
    procedure: [
      "Pre-op evaluation & anaesthesia review",
      "General anaesthesia, 3 small incisions",
      "Hernia content reduced; mesh placed and fixed",
      "Wound closure with absorbable sutures",
    ],
    preparation: [
      "Overnight fasting",
      "Stop blood-thinners as advised",
      "Pre-op investigations",
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Mobilisation & discharge" },
      { time: "Week 1", milestone: "Light desk work" },
      { time: "Week 4–6", milestone: "Resume heavy lifting & gym" },
    ],
    risks: ["Seroma", "Wound infection", "Recurrence (low with mesh)"],
    stay: "1–2 days",
    anaesthesia: "General",
    duration: "60–90 minutes",
    recovery: "Office in 1 week; full activity in 4–6 weeks.",
    speciality: "general-surgery",
  },
  {
    slug: "appendectomy",
    name: "Laparoscopic Appendix Surgery",
    short: "Emergency keyhole removal of an inflamed appendix.",
    body:
      "Acute appendicitis is a common surgical emergency. Our team performs laparoscopic appendectomy round the clock — a faster recovery, less pain and just three tiny scars.",
    benefits: [
      "24×7 emergency surgical team",
      "Tiny scars",
      "Discharge within 2 days",
      "Cashless emergency admission",
    ],
    whoNeedsIt: [
      "Acute appendicitis (severe right lower abdomen pain)",
      "Recurrent appendicular pain",
    ],
    procedure: [
      "Emergency assessment, scan & blood work",
      "Surgery within hours of admission",
      "3 small incisions, appendix removed laparoscopically",
    ],
    preparation: ["Emergency — fasting from time of diagnosis"],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Light diet, mobilisation" },
      { time: "Day 2", milestone: "Discharge" },
      { time: "Week 2", milestone: "Resume normal routine" },
    ],
    risks: ["Wound infection", "Intra-abdominal collection (rare)"],
    stay: "1–2 days",
    anaesthesia: "General",
    duration: "30–60 minutes",
    recovery: "Most patients fully recover in 2 weeks.",
    speciality: "general-surgery",
  },
  {
    slug: "piles-fissure-fistula",
    name: "Piles, Fissure & Fistula Surgery",
    short: "Modern stapler & laser options for ano-rectal problems.",
    body:
      "Painless modern treatment for piles, anal fissure and fistula — with options including laser, stapler haemorrhoidopexy and conventional surgery, chosen based on your grade and lifestyle.",
    benefits: [
      "Day-care / short-stay procedures",
      "Less post-op pain",
      "Quick return to work",
      "Discreet, dignified care",
    ],
    whoNeedsIt: [
      "Bleeding or prolapsing piles",
      "Chronic anal fissure",
      "Anal fistula / abscess",
    ],
    procedure: [
      "Per-rectal exam & proctoscopy in OPD",
      "Day-care surgery under spinal / short GA",
      "Stapler, laser or conventional excision",
    ],
    preparation: [
      "Overnight fasting",
      "Bowel prep as advised",
    ],
    recoveryTimeline: [
      { time: "Day 0", milestone: "Surgery & same-day / next-day discharge" },
      { time: "Week 1", milestone: "Sitz baths, soft diet, return to office" },
      { time: "Week 4", milestone: "Full recovery" },
    ],
    risks: ["Mild bleeding", "Recurrence (low)"],
    stay: "Day-care to 1 day",
    anaesthesia: "Spinal or short GA",
    duration: "30–45 minutes",
    recovery: "Back to work in 3–7 days.",
    speciality: "general-surgery",
  },
  {
    slug: "fracture-treatment",
    name: "Fracture & Trauma Care",
    short: "Casting, surgical fixation and rehabilitation under one roof.",
    body:
      "From simple fractures needing a cast to complex trauma requiring plate-and-screw fixation, our orthopaedic team delivers prompt diagnosis (in-house X-ray), surgical care and structured physiotherapy under one roof.",
    benefits: [
      "In-house digital X-ray",
      "Modern fixation implants",
      "Physiotherapy from day one",
      "Cashless mediclaim accepted",
    ],
    whoNeedsIt: [
      "Bone fractures from fall / accident",
      "Sports injuries",
      "Crush & poly-trauma",
    ],
    procedure: [
      "Emergency triage & X-ray",
      "Casting / closed reduction OR surgical fixation",
      "Pain management and early mobilisation",
      "Structured physiotherapy plan",
    ],
    preparation: ["Emergency — fasting if surgery likely"],
    recoveryTimeline: [
      { time: "Week 1–2", milestone: "Pain control, wound care" },
      { time: "Week 4–6", milestone: "Partial weight-bearing / mobility" },
      { time: "Week 8–12", milestone: "Return to full activity (case-dependent)" },
    ],
    risks: ["Implant-related discomfort", "Delayed union (uncommon)", "Infection (rare)"],
    stay: "1–5 days based on fracture",
    anaesthesia: "Regional / general (if surgery)",
    duration: "Varies",
    recovery: "Typically 4–12 weeks with guided rehab.",
    speciality: "orthopaedics",
  },
  {
    slug: "joint-pain-arthritis",
    name: "Joint Pain & Arthritis Care",
    short: "Knee, shoulder & back pain — non-surgical and surgical options.",
    body:
      "From physiotherapy and joint injections to advanced surgical referral when needed, we offer a stepwise plan for arthritis and chronic joint pain — focused on getting you moving comfortably again.",
    benefits: [
      "Senior orthopaedic consultation",
      "In-house physiotherapy",
      "Image-guided joint injections",
      "Lifestyle & weight guidance",
    ],
    whoNeedsIt: [
      "Knee osteoarthritis",
      "Frozen shoulder",
      "Chronic back pain",
      "Sports overuse injuries",
    ],
    procedure: [
      "Clinical examination & X-ray",
      "Conservative care: medication, physio, lifestyle",
      "Joint injection if indicated",
      "Surgical referral for advanced cases",
    ],
    stay: "OPD-based",
    anaesthesia: "Local (for injections)",
    duration: "OPD visit",
    recovery: "Symptom relief over 2–6 weeks of structured care.",
    speciality: "orthopaedics",
  },
  {
    slug: "icu-critical-care",
    name: "ICU & Critical Care",
    short: "24×7 intensivist-led intensive care with ventilator support.",
    body:
      "Our intensive care unit is staffed 24×7 with trained intensivists and nurses, equipped with multi-para monitors, ventilators and emergency response protocols for medical and post-surgical critical care.",
    benefits: [
      "24×7 intensivist cover",
      "Ventilator & monitoring support",
      "Infection-controlled environment",
      "Daily family counselling",
    ],
    whoNeedsIt: [
      "Severe infections / sepsis",
      "Respiratory failure",
      "Post-major-surgery monitoring",
      "Cardiac & neuro emergencies",
    ],
    procedure: [
      "Continuous monitoring of all vitals",
      "Ventilator / oxygen support as needed",
      "IV medication, nutrition & infection control",
      "Structured step-down to ward when stable",
    ],
    stay: "Condition-dependent",
    anaesthesia: "N/A",
    duration: "Continuous care",
    recovery: "Step-down to ward when stable; total stay varies.",
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
    whoNeedsIt: [
      "Chest pain, breathlessness",
      "Accident & trauma",
      "Stroke symptoms",
      "Severe abdominal pain",
      "High fever with confusion",
    ],
    procedure: [
      "Rapid doctor-led triage",
      "Stabilisation: oxygen, IV access, monitoring",
      "Investigations: ECG, X-ray, blood work",
      "Admission to ICU / ward or surgery as required",
    ],
    stay: "Stabilisation, then admission or discharge",
    anaesthesia: "If surgery required",
    duration: "Immediate response 24×7",
    faqs: [
      { q: "Should I call before coming for an emergency?", a: "If possible yes, so our team is ready — but never delay. Walk into the ER directly at any hour." },
    ],
    recovery: "Stabilisation first, then admission or discharge as appropriate.",
    speciality: "general-medicine",
  },
  {
    slug: "fess-sinus-surgery",
    name: "FESS — Sinus Surgery",
    short: "Endoscopic surgery for chronic sinusitis & nasal block.",
    body:
      "Functional Endoscopic Sinus Surgery (FESS) clears blocked sinuses through the nostril — no external cuts. It gives long-term relief for chronic sinusitis, polyps and recurrent infection.",
    benefits: [
      "No external scar",
      "Day-care / overnight stay",
      "Long-term symptom relief",
    ],
    whoNeedsIt: [
      "Chronic sinusitis not responding to medication",
      "Nasal polyps",
      "Recurrent sinus infection",
    ],
    procedure: [
      "Pre-op CT scan of sinuses",
      "General anaesthesia, endoscopic clearance via nostril",
      "Nasal pack for 24 hours",
    ],
    preparation: ["Overnight fasting", "Stop blood-thinners as advised"],
    stay: "1 day",
    anaesthesia: "General",
    duration: "60–90 minutes",
    recovery: "Office in 1 week; full healing in 4–6 weeks.",
    speciality: "ent",
  },
  {
    slug: "tonsillectomy",
    name: "Tonsillectomy / Adenoidectomy",
    short: "Removal of recurrently inflamed tonsils & adenoids.",
    body:
      "Recommended for children and adults with repeated tonsillitis, sleep-disordered breathing or snoring. We perform it as a short, day-care procedure with modern coblation / cautery techniques.",
    benefits: [
      "Short day-care procedure",
      "Modern coblation option",
      "Excellent long-term results",
    ],
    whoNeedsIt: [
      "Recurrent tonsillitis (>5 episodes/year)",
      "Sleep apnoea / mouth breathing in children",
      "Snoring with adenoid hypertrophy",
    ],
    procedure: [
      "Pre-op physician fitness",
      "General anaesthesia, oral approach",
      "Tonsils / adenoids removed; haemostasis ensured",
    ],
    preparation: ["6 hours fasting"],
    stay: "Day-care to 1 day",
    anaesthesia: "General",
    duration: "30–45 minutes",
    recovery: "Soft diet for 7–10 days; back to school/office in 1 week.",
    speciality: "ent",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants & Smile Restoration",
    short: "Permanent replacement for missing teeth.",
    body:
      "A titanium implant integrated with the jawbone supports a natural-looking crown — restoring chewing, speech and confidence without disturbing neighbouring teeth.",
    benefits: [
      "Long-term, fixed solution",
      "Looks & feels natural",
      "Preserves adjacent teeth",
    ],
    whoNeedsIt: [
      "One or more missing teeth",
      "Difficulty chewing on dentures",
      "Aesthetic concerns",
    ],
    procedure: [
      "OPG / CBCT imaging & treatment plan",
      "Implant placement under local anaesthesia",
      "Healing period of 3–6 months",
      "Crown placement on osseointegrated implant",
    ],
    stay: "OPD",
    anaesthesia: "Local",
    duration: "60–90 minutes per implant",
    recovery: "Soft diet for 1 week; final crown after osseointegration.",
    speciality: "dental",
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment (RCT)",
    short: "Save a decayed or infected tooth — painlessly.",
    body:
      "Single or multi-sitting root canal treatment for deep cavities and dental infections — preserving your natural tooth and ending the pain.",
    benefits: [
      "Saves the natural tooth",
      "Painless under modern anaesthesia",
      "Single-sitting option for many cases",
    ],
    whoNeedsIt: [
      "Severe toothache",
      "Deep cavity / abscess",
      "Cracked tooth with pulp exposure",
    ],
    procedure: [
      "Diagnosis & X-ray",
      "Cleaning & shaping of root canals",
      "Filling and crown placement",
    ],
    stay: "OPD",
    anaesthesia: "Local",
    duration: "45–90 minutes",
    recovery: "Immediate; crown advised within 2 weeks.",
    speciality: "dental",
  },
  {
    slug: "kidney-stone-urs",
    name: "Kidney & Ureteric Stone Removal (URS / RIRS)",
    short: "Stone-free in a day — without external cuts.",
    body:
      "Endoscopic stone removal using ureteroscopy (URS) or retrograde intrarenal surgery (RIRS) with laser fragmentation — a scarless, highly effective approach for ureteric and small kidney stones.",
    benefits: [
      "No external incision",
      "Stone-free in single sitting (most cases)",
      "Short hospital stay",
    ],
    whoNeedsIt: [
      "Ureteric stones causing colic",
      "Small to medium kidney stones",
      "Stones obstructing urine flow",
    ],
    procedure: [
      "Pre-op urine culture, scan & blood work",
      "Spinal / general anaesthesia",
      "Endoscopic laser fragmentation & stone removal",
      "DJ stent placement, removed after 2 weeks",
    ],
    preparation: ["Treat any UTI before surgery", "Overnight fasting"],
    stay: "1–2 days",
    anaesthesia: "Spinal / general",
    duration: "45–90 minutes",
    recovery: "Office in 3–5 days; stent removal at 2 weeks.",
    speciality: "urology",
  },
  {
    slug: "turp-prostate",
    name: "TURP — Prostate Surgery",
    short: "Endoscopic relief for an enlarged prostate (BPH).",
    body:
      "Transurethral Resection of the Prostate (TURP) is the gold-standard endoscopic surgery for symptomatic prostate enlargement — restoring smooth urine flow without external cuts.",
    benefits: [
      "No external scar",
      "Strong long-term symptom relief",
      "Short hospital stay",
    ],
    whoNeedsIt: [
      "Difficulty passing urine",
      "Recurrent UTI due to BPH",
      "Failed medical management of BPH",
    ],
    procedure: [
      "Pre-op urine culture & cardiac fitness",
      "Spinal anaesthesia, endoscopic resection",
      "Catheter for 2–3 days post-op",
    ],
    stay: "2–3 days",
    anaesthesia: "Spinal",
    duration: "60–90 minutes",
    recovery: "Office in 2 weeks; full activity in 4 weeks.",
    speciality: "urology",
  },
  {
    slug: "dialysis-ckd",
    name: "Dialysis & CKD Care",
    short: "Coordinated kidney care including dialysis support.",
    body:
      "Comprehensive chronic kidney disease (CKD) management with regular nephrology review, lab monitoring, diet counselling and coordinated access to maintenance haemodialysis.",
    benefits: [
      "Senior nephrology team",
      "Coordinated dialysis scheduling",
      "Renal nutrition counselling",
    ],
    whoNeedsIt: [
      "Stage 4–5 chronic kidney disease",
      "Acute kidney injury",
      "Fluid overload / uraemic symptoms",
    ],
    procedure: [
      "Detailed nephrology evaluation",
      "Vascular access planning (fistula)",
      "Maintenance haemodialysis sessions",
      "Diet & medication optimisation",
    ],
    stay: "Outpatient sessions",
    anaesthesia: "N/A",
    duration: "4 hours per session, typically 2–3 times/week",
    recovery: "Ongoing programme — quality of life focused.",
    speciality: "nephrology",
  },
  {
    slug: "newborn-care",
    name: "Newborn & NICU-Ready Care",
    short: "Paediatrician-led care from the very first breath.",
    body:
      "Every baby born at our hospital is examined by a paediatrician within the first hour and supported through breastfeeding, jaundice screening and immunisation. Sicker newborns are stabilised by our team with rapid escalation pathways.",
    benefits: [
      "Paediatrician at every delivery",
      "Jaundice screening & phototherapy",
      "Lactation support",
      "Vaccination from birth",
    ],
    whoNeedsIt: [
      "All newborns",
      "Babies needing observation for jaundice / feeding",
    ],
    procedure: [
      "First-hour newborn examination",
      "Vitamin K, BCG, Hep-B, OPV birth doses",
      "Breastfeeding & weight-gain monitoring",
      "Discharge with growth chart & vaccine schedule",
    ],
    stay: "With mother",
    anaesthesia: "N/A",
    duration: "Continuous newborn care",
    recovery: "First review at 1 week, then per vaccination schedule.",
    speciality: "paediatrics",
  },
  {
    slug: "child-vaccination",
    name: "Child Vaccination (IAP Schedule)",
    short: "Complete IAP-recommended immunisation in a child-friendly setting.",
    body:
      "We follow the Indian Academy of Paediatrics (IAP) immunisation schedule — with reminders, gentle administration and a calm, child-friendly clinic.",
    benefits: [
      "IAP-recommended schedule",
      "Vaccine reminders",
      "Child-friendly OPD",
    ],
    whoNeedsIt: [
      "All children from birth to 18 years",
    ],
    procedure: [
      "Growth & developmental check",
      "Vaccine administration",
      "Updated immunisation card",
    ],
    stay: "OPD",
    anaesthesia: "N/A",
    duration: "15–20 minutes",
    recovery: "Mild fever / soreness for 24 hours possible.",
    speciality: "paediatrics",
  },
  {
    slug: "diabetes-bp-care",
    name: "Diabetes & Hypertension Management",
    short: "Long-term control with structured follow-up & lifestyle care.",
    body:
      "Personalised plans for diabetes and hypertension — combining medication, monitoring, dietary guidance and periodic complications screening (eye, kidney, heart).",
    benefits: [
      "Senior physician-led",
      "Structured follow-up",
      "Diet & lifestyle counselling",
      "Linked specialist referrals",
    ],
    whoNeedsIt: [
      "Type 1 / Type 2 diabetes",
      "Hypertension",
      "Metabolic syndrome",
    ],
    procedure: [
      "Detailed medical evaluation & investigations",
      "Customised medication & lifestyle plan",
      "Periodic HbA1c, lipid, kidney & eye screening",
    ],
    stay: "OPD",
    anaesthesia: "N/A",
    duration: "Long-term programme",
    recovery: "Ongoing — sustainable improvements over months.",
    speciality: "general-medicine",
  },
  {
    slug: "psychiatry-counselling",
    name: "Psychiatric Care & Therapy",
    short: "Confidential help for depression, anxiety, OCD & sleep.",
    body:
      "Evidence-based psychiatric and psychological care — from medication for depression and anxiety to CBT, family counselling and adolescent support, in a confidential and respectful setting.",
    benefits: [
      "Confidential consultation",
      "Combined medicine + therapy",
      "Family & adolescent support",
    ],
    whoNeedsIt: [
      "Persistent low mood / anxiety",
      "Sleep disturbance",
      "OCD, panic attacks",
      "Adolescent emotional concerns",
    ],
    procedure: [
      "Detailed psychiatric assessment",
      "Personalised treatment plan",
      "CBT / counselling sessions",
      "Periodic review",
    ],
    stay: "OPD",
    anaesthesia: "N/A",
    duration: "45–60 minutes per session",
    recovery: "Improvement typically over 6–12 weeks of structured care.",
    speciality: "psychiatry-psychology",
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
