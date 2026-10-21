// ============================================================
// ICT Systems
// ============================================================
// Add a new system by appending another object to this array.
// icon must be a valid component name exported by lucide-react.

export const ict_systems = [
  {
    name: "Daily Time Record System",
    // acronym: "DTR",
    description: "Employee attendance records, and daily timekeeping.",
    category: "Human Resources",
    icon: "CalendarClock",
    url: "http://192.168.0.69/dtr/",
  },

  {
    name: "Inventory Management System",
    // acronym: "IMS",
    description: "Inventory supplies, equipment, and accountability.",
    category: "Supply and Materials Management",
    icon: "Boxes",
    url: "http://192.168.10.17:5173/",
  },

  {
    name: "Technical Assistance Request System",
    // acronym: "TARS",
    description: "Submit, track, and monitor requests.",
    category: "ICT Services",
    icon: "LifeBuoy",
    url: "https://www.youtube.com/",
  },

  {
    name: "Repair Assistance Request System",
    // acronym: "RARS",
    description: "Repair requests, service tracking, and monitoring of equipments.",
    category: "Maintenance Services",
    icon: "Wrench",
    url: "https://sites.google.com/view/nir-intranet/home?authuser=0",
  },

  {
    name: "Vehicle Management System",
    // acronym: "VMS",
    description: "Vehicle requests, trip schedules, assignments, and records.",
    category: "Fleet and Logistics Management",
    icon: "Truck",
    url: "https://www.github.com/",
  },

  {
    name: "Repository Management System",
    // acronym: "RMS",
    description: "Repository of official documents, records, and files.",
    category: "Records Management",
    icon: "FolderArchive",
    url: "https://www.adobe.com/",
  },
];

// ============================================================
// DOH Enterprise Palette & Category Accents
// ============================================================

/**
 * Department of Health (DOH) Enterprise Accent System
 * Color tokens strictly adhere to official brand guidelines, providing distinct visual taxonomy.
 */
export const DOH_PALETTE = {
  emeraldPrimary: "#006B3F", // Official DOH Deep Emerald Green
  emeraldDark:    "#004D2D", // Core Operations & Infrastructure
  navyDeep:       "#1B365D", // Institutional Governance & Tech
  tealCorporate:  "#007A87", // Public Engagement & Information
  slateBlue:      "#2C4A6F", // Enterprise Systems & Regulatory
  steelGray:      "#4A5568", // Administrative Operations
};

export const categoryAccents = {
  // Human Resources & Staff Management (Corporate Steel Navy)
  "Human Resources": DOH_PALETTE.slateBlue,

  // Supply & Materials Logistics (Enterprise Emerald Green)
  "Supply and Materials Management": DOH_PALETTE.emeraldPrimary,

  // ICT Services & Tech Helpdesk (Deep Government Navy)
  "ICT Services": DOH_PALETTE.navyDeep,

  // Maintenance & Physical Hardware Repairs (Administrative Steel)
  "Maintenance Services": DOH_PALETTE.steelGray,

  // Fleet & Transport Dispatch (Institutional Deep Navy)
  "Fleet and Logistics Management": DOH_PALETTE.navyDeep,

  // Document Archival & File Records (Dark Health Emerald)
  "Records Management": DOH_PALETTE.emeraldDark,

  // Public Engagement & Portal Services (Official Health Teal)
  "Information & Public Services": DOH_PALETTE.tealCorporate,

  // Regulatory Compliance & Licensing (Administrative Steel)
  "Regulatory Compliance & Licensing": DOH_PALETTE.steelGray,

  // Website Management (Dark Health Emerald)
  "Website Management": DOH_PALETTE.emeraldDark,
};

// Default fallback accent mapped to official DOH Emerald Green
export const defaultAccent = DOH_PALETTE.emeraldPrimary;