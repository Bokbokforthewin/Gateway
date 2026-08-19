// Add a new system by appending another object to this array.
// icon must be a valid component name exported by lucide-react.
export const systems = [
  {
    name: "Daily Time Records",
    acronym: "DTR",
    description: "Employee attendance and daily time records.",
    category: "Human Resources",
    icon: "Clock5",
    url: "http://192.168.0.69/dtr/",
  },
  {
    name: "DOH NIR Website",
    acronym: "DOHNIR",
    description: "Official Website of the DOH NIR CHD.",
    category: "Website",
    icon: "Building2",
    url: "https://nir.doh.gov.ph/",
  },
  {
    name: "Inventory Management System",
    acronym: "IMS",
    description: "Supply, equipment, and stock management.",
    category: "Operations",
    icon: "PackageSearch",
    url: "https://www.youtube.com/",
  },
  {
    name: "Document Tracking System",
    acronym: "DTS",
    description: "Routing and monitoring of official documents.",
    category: "Records Management",
    icon: "FileStack",
    url: "https://sites.google.com/view/nir-intranet/home?authuser=0",
  },
  {
    name: "Procurement Management System",
    acronym: "PMS",
    description: "Purchase requests and procurement workflow.",
    category: "Operations",
    icon: "ClipboardList",
    url: "https://www.github.com/",
  },
  {
    name: "One Negros Health Facility System",
    acronym: "ONHFS",
    description: "Licensing and regulation of health facilities.",
    category: "Regulation",
    icon: "BadgeCheck",
    url: "https://www.adobe.com/",
  },
];

// Category accent is chosen from the approved secondary palette so new
// categories automatically stay on-brand without manual color picking.
export const categoryAccents = {
  "Human Resources": "#365175",
  Operations: "#4C6B75",
  "Records Management": "#344A51",
  Regulation: "#365175",
  Website: "#587CA5",
};

export const defaultAccent = "#365175";
