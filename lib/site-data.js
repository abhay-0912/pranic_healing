export const publicNav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Courses", "/courses"],
  ["Healers", "/healers"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export const stats = [
  { value: 120, suffix: "+", label: "Countries Worldwide", description: "A global healing network." },
  { value: 30, suffix: "+", label: "Years of Research", description: "Modern Pranic Healing lineage." },
  { value: 11, suffix: "", label: "Major Chakras Addressed", description: "Structured energetic work." },
  { value: 5000, suffix: "+", label: "Sessions Completed", description: "Personal, distance, and group." }
];

export const chakraItems = [
  ["Root", "#d9534f"],
  ["Sacral", "#f39c38"],
  ["Solar Plexus", "#f1c40f"],
  ["Heart", "#2ecc71"],
  ["Throat", "#3498db"],
  ["Third Eye", "#8e44ad"],
  ["Crown", "#f8f3ff"]
];

export const services = [
  {
    number: "01",
    slug: "personal-healing",
    title: "Personal Healing Sessions",
    description:
      "A one-on-one session with a certified Pranic Healer. Energy is scanned, cleansed, and replenished to support physical ease, emotional balance, and clearer thinking.",
    longDescription: [
      "The healer works on your energy body to identify congestion, depletion, and stress patterns that may be affecting how you feel.",
      "Each session is non-touch, structured, and designed to help the body's own healing processes work more efficiently.",
      "It is a practical option for fatigue, discomfort, emotional heaviness, or general energetic maintenance."
    ],
    bullets: ["Energy scan", "Aura cleansing", "Chakra energising", "Post-session guidance"],
    duration: "45-60 minutes",
    price: "₹2,500"
  },
  {
    number: "02",
    slug: "pranic-psychotherapy",
    title: "Pranic Psychotherapy",
    description:
      "Targeted energetic work for fear, grief, anger, trauma, and mental congestion. The focus is on clearing emotional imprints from the subtle body.",
    longDescription: [
      "This work supports emotional release by cleansing specific chakras associated with stored emotional stress.",
      "It can be useful when patterns are repetitive, overwhelming, or difficult to shift through ordinary insight alone.",
      "The process is calm, confidential, and respectful of the pace at which the system can soften and reorganize."
    ],
    bullets: ["Emotional release", "Mental clarity", "Reduced triggers", "Grounded follow-up"],
    duration: "60 minutes",
    price: "₹3,000"
  },
  {
    number: "03",
    slug: "relationship-healing",
    title: "Relationship Healing",
    description:
      "Energetic work around the cords and patterns that affect relationships, communication, boundaries, and dependency.",
    longDescription: [
      "Relationships create energetic exchanges. When these become dense or tangled, friction and emotional fatigue are common.",
      "This session clears those patterns while strengthening the chakras involved in healthy connection and self-possession.",
      "It is suitable for family, partnership, workplace, and friendship dynamics."
    ],
    bullets: ["Cord cleansing", "Boundary support", "Communication clarity", "Pattern release"],
    duration: "60 minutes",
    price: "₹3,000"
  },
  {
    number: "04",
    slug: "distance-healing",
    title: "Distance Healing",
    description:
      "Healing performed remotely for clients who are unwell, far away, or unable to attend in person. The session follows the same energetic protocol.",
    longDescription: [
      "Pranic Healing is not limited by physical distance. The healer works with the energy body through intention and established method.",
      "It is often chosen by clients recovering at home, traveling, or seeking convenient support across time zones.",
      "Results may be experienced similarly to in-person sessions, with appropriate aftercare."
    ],
    bullets: ["Remote session", "Same protocol", "Flexible scheduling", "Aftercare included"],
    duration: "45 minutes",
    price: "₹2,500"
  },
  {
    number: "05",
    slug: "prosperity-healing",
    title: "Prosperity & Abundance Healing",
    description:
      "Energetic support for will, drive, stability, and manifestation when life, work, or finances feel blocked.",
    longDescription: [
      "Blockages in the lower chakras often show up as hesitation, lack of focus, or difficulty sustaining momentum.",
      "This session works to clear those energetic patterns and strengthen the centers linked with confidence and execution.",
      "It pairs well with practical action and structured planning."
    ],
    bullets: ["Willpower support", "Focus and clarity", "Energy block release", "Manifestation support"],
    duration: "60 minutes",
    price: "₹3,500"
  },
  {
    number: "06",
    slug: "twin-hearts-meditation",
    title: "Meditation on Twin Hearts",
    description:
      "A weekly group practice activating the crown and heart chakras to cultivate peace, illumination, and collective blessing.",
    longDescription: [
      "This meditation is suitable for all levels and is one of the center's core community practices.",
      "Participants are guided through a simple, repeatable process that supports inner stillness and expanded awareness.",
      "It is offered free for the community every week."
    ],
    bullets: ["Weekly group practice", "Open to all", "Peace and clarity", "Free session"],
    duration: "45 minutes",
    price: "Free"
  }
];

export const courses = [
  {
    slug: "basic-pranic-healing",
    level: "Level 01",
    title: "Basic Pranic Healing",
    price: 6500,
    duration: "2 days",
    featured: false,
    excerpt: "Foundations of scanning, cleansing, and energising the energy body.",
    topics: ["Aura and chakras", "Scanning", "Cleansing", "Energising", "Self-healing"],
    nextDate: "2026-05-18",
    seatsRemaining: 12,
    image: "",
    description:
      "Start here if you are new to energetic healing. This course builds the practical foundation for personal care and future study."
  },
  {
    slug: "advanced-pranic-healing",
    level: "Level 02",
    title: "Advanced Pranic Healing",
    price: 8900,
    duration: "2 days",
    featured: true,
    excerpt: "Advanced techniques including colour pranas and deeper cleansing protocols.",
    topics: ["Color pranas", "Advanced scanning", "Deeper cleansing", "Healing acceleration", "Application practice"],
    nextDate: "2026-06-02",
    seatsRemaining: 8,
    image: "",
    description:
      "Expand your healing toolkit with more precise energetic methods and stronger projective techniques."
  },
  {
    slug: "pranic-psychotherapy-course",
    level: "Specialised",
    title: "Pranic Psychotherapy",
    price: 9600,
    duration: "2 days",
    featured: false,
    excerpt: "Working with emotional patterns, thoughts, and subconscious imprints.",
    topics: ["Emotional cleansing", "Thought forms", "Trauma support", "Inner calm", "Case practice"],
    nextDate: "2026-06-21",
    seatsRemaining: 10,
    image: "",
    description:
      "Learn structured methods for emotional balancing and psychological energetic hygiene."
  }
];

export const healers = [
  {
    slug: "anita-rai",
    name: "Anita Rai",
    title: "Senior Pranic Healer",
    speciality: "Emotional healing, relationship work",
    experience: "12 years",
    rating: 4.9,
    certifications: ["Basic", "Advanced", "Psychotherapy"],
    bio: "Anita blends disciplined healing technique with gentle communication and strong client care.",
    availability: ["Mon", "Wed", "Sat"],
    photo: ""
  },
  {
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    title: "Certified Pranic Healer",
    speciality: "Distance healing, prosperity work",
    experience: "8 years",
    rating: 4.8,
    certifications: ["Basic", "Advanced", "Crystal"],
    bio: "Arjun focuses on practical, results-oriented healing sessions supported by clear aftercare.",
    availability: ["Tue", "Thu", "Sun"],
    photo: ""
  },
  {
    slug: "meenakshi-sharma",
    name: "Meenakshi Sharma",
    title: "Meditation Facilitator",
    speciality: "Twin Hearts, beginner support",
    experience: "10 years",
    rating: 5,
    certifications: ["Basic", "Meditation", "Arhatic prep"],
    bio: "Meenakshi supports new students and groups with warmth, clarity, and grounded pacing.",
    availability: ["Fri", "Sat", "Sun"],
    photo: ""
  }
];

export const testimonials = [
  {
    name: "Rohit Verma",
    title: "Business Owner",
    quote: "The sessions brought a calm I had not felt in years. I left with clarity and better sleep.",
    rating: 5,
    avatar: ""
  },
  {
    name: "Sana Khan",
    title: "Student",
    quote: "Twin Hearts meditation became a weekly reset. The atmosphere is disciplined and compassionate.",
    rating: 5,
    avatar: ""
  },
  {
    name: "Amit Joshi",
    title: "Engineer",
    quote: "The process is practical, respectful, and surprisingly structured. It helped me stay centered.",
    rating: 4,
    avatar: ""
  }
];

export const timeline = [
  [1987, "Began systematic documentation of energy healing experiments"],
  [1990, 'Published "The Ancient Science and Art of Pranic Healing"'],
  [1992, "Established first Pranic Healing centers internationally"],
  [1995, "Developed Advanced Pranic Healing with colour techniques"],
  [1998, "Introduced Pranic Psychotherapy protocols"],
  [2000, "Arhatic Yoga launched - advanced spiritual development system"],
  [2004, "Pranic Healing reaches 50+ countries worldwide"],
  [2007, "GMCKS passes away, legacy continues through 120+ countries"]
];

export const values = [
  ["Compassion", "We heal with love and without judgment"],
  ["Integrity", "We follow the ethics taught by GMCKS faithfully"],
  ["Service", "Healing is a service, not just a profession"],
  ["Transformation", "We seek deep change, not just symptom relief"]
];

export const faqItems = [
  ["Does Pranic Healing replace conventional medicine?", "No. Pranic Healing is complementary and works alongside medical treatment."],
  ["Is there any physical contact during a session?", "No. The healer works on the energy body, not through physical contact."],
  ["How many sessions do I need?", "Mild concerns may respond in 1-3 sessions; chronic issues often need more."],
  ["Can children receive Pranic Healing?", "Yes. It is gentle and suitable for all ages."],
  ["Does distance healing really work?", "Yes. The method is designed to work across space when applied correctly."],
  ["What should I do after a session?", "Drink water, rest, and follow the aftercare guidance provided."]
];

export const blogPosts = [
  {
    slug: "what-is-pranic-healing",
    title: "What is Pranic Healing?",
    category: "Pranic Healing",
    readTime: "6 min read",
    date: "2026-04-01",
    excerpt: "A practical introduction to the science, process, and philosophy behind the healing system.",
    content: [
      "Pranic Healing is a structured energy-based system that works on the subtle body before physical symptoms are addressed.",
      "It is designed to be practical, repeatable, and accessible to people from many backgrounds.",
      "The method focuses on cleansing and energising the energy system so the body can recover more efficiently."
    ]
  },
  {
    slug: "meditation-on-twin-hearts",
    title: "Meditation on Twin Hearts and Daily Stability",
    category: "Meditation",
    readTime: "8 min read",
    date: "2026-03-20",
    excerpt: "How a simple weekly practice can improve peace, clarity, and inner steadiness.",
    content: [
      "Twin Hearts meditation works with the crown and heart chakras to generate a cleaner and more coherent field.",
      "Students often report a quieter mind, steadier emotions, and a sense of spaciousness after practice.",
      "The benefits deepen when the practice is repeated consistently in a disciplined environment."
    ]
  },
  {
    slug: "energy-hygiene-for-modern-life",
    title: "Energy Hygiene for Modern Life",
    category: "Health",
    readTime: "7 min read",
    date: "2026-03-05",
    excerpt: "Small energetic habits that support resilience, focus, and recovery.",
    content: [
      "Energy hygiene is the subtle equivalent of physical hygiene: regular, simple, and preventive.",
      "This includes rest, breathing, clean habits, and support when the system feels overloaded.",
      "The best healing work is usually paired with a steady, realistic lifestyle."
    ]
  }
];

export const contactChannels = [
  ["Email", "info@pranichealing.center", "We reply within 24 hours"],
  ["Phone", "+91 12345 67890", "Mon-Sat, 9AM-6PM IST"],
  ["Location", "Lucknow, Uttar Pradesh, India", "In-person available"]
];
