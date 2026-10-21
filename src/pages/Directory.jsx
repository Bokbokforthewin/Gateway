import { useState } from "react";
import { systems } from "../data/systems.js";
import "./Directory.css";
import SystemCard from "../components/SystemCard.jsx";
import IctSystemsModal from "./IctSystemsModal.jsx";

export default function Directory() {
  const [ictModalOpen, setIctModalOpen] = useState(false);

  return (
    <section className="directory">
      <div className="directory__head">
        <p className="directory__desc">ONE ACCESS</p>
        <h1 className="directory__title">GATEWAY</h1>
      </div>

      <div className="directory__grid-wrap">
        <div className="directory__grid">
          {systems.map((system) => (
            <SystemCard
              key={system.acronym}
              system={system}
            />
          ))}

          <SystemCard
            system={{
              name: "ICT Systems",
              // acronym: "ICT",
              description:
                "IT support, inventory, repairs, and records.",
              category: "IT Services",
              icon: "MonitorCog",
            }}
            actionLabel="View Systems"
            onClick={() => setIctModalOpen(true)}
          />
        </div>
      </div>

      <IctSystemsModal
        open={ictModalOpen}
        onClose={() => setIctModalOpen(false)}
      />
    </section>
  );
}
