// ============================================================
// Public & Enterprise Digital Systems Gateway
// ============================================================
// Add a new system by appending another object to this array.
// icon must be a valid component name exported by lucide-react.

export const systems = [
  {
    name: "Daily Time Records",
    // acronym: "DTR",
    description: "Employee time and attendance records.",
    category: "Human Resources",
    icon: "CalendarClock", // Upgraded from Clock5 for clearer shift & timekeeping context
    url: "http://192.168.0.69/dtr/",
  },

  {
    name: "DOH NIR Website",
    // acronym: "DOH NIR",
    description: "Official Website of the DOH NIR CHD.",
    category: "Information & Public Services",
    icon: "Building2",
    url: "https://nir.doh.gov.ph/",
  },

  {
    name: "RLED System",
    // acronym: "RLED",
    description: "Health Facility Permits, Accreditations, & Audits.",
    category: "Regulatory Compliance & Licensing",
    icon: "PackageSearch",
    url: "https://www.youtube.com/",
  },

  {
    name: "DOH NIR CHD Intranet",
    // acronym: "INTRANET",
    description: "Routing and monitoring of official documents.",
    category: "Records Management",
    icon: "FileStack",
    url: "https://sites.google.com/view/nir-intranet/home?authuser=0",
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
  // Human Resources & Personnel Attendance (Corporate Steel Navy)
  "Human Resources": DOH_PALETTE.slateBlue,

  // Public Engagement & Institutional Website (Official Health Teal)
  "Information & Public Services": DOH_PALETTE.tealCorporate,

  // Health Facility Licensing & Compliance (Administrative Steel)
  "Regulatory Compliance & Licensing": DOH_PALETTE.steelGray,

  // Document Archival & File Records (Dark Health Emerald)
  "Records Management": DOH_PALETTE.emeraldDark,

  // ICT Services & Systems Desk (Deep Government Navy)
  "ICT Services": DOH_PALETTE.navyDeep,

  // Supply & Materials Logistics (Enterprise Emerald Green)
  "Supply and Materials Management": DOH_PALETTE.emeraldPrimary,

  // Maintenance & Hardware Repairs (Administrative Steel)
  "Maintenance Services": DOH_PALETTE.steelGray,

  // Fleet & Transport Dispatch (Institutional Deep Navy)
  "Fleet and Logistics Management": DOH_PALETTE.navyDeep,

  // Website Management (Dark Health Emerald)
  "Website Management": DOH_PALETTE.emeraldDark,
};

// Default fallback accent mapped to official DOH Emerald Green
export const defaultAccent = DOH_PALETTE.emeraldPrimary;