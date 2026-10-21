import * as Icons from "lucide-react";
import { X, Boxes, ArrowUpRight } from "lucide-react";
import "../pages/IctSystemsModal.css";
import { ict_systems, categoryAccents, defaultAccent } from "../data/ictSystems.js";

export default function IctSystemsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="ict-modal__overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ict-modal-title"
      onClick={onClose}
    >
      <div
        className="ict-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ict-modal__header">
          <div>
            <p className="ict-modal__eyebrow">
              Information & Communications Technology Unit
            </p>

            <h2
              id="ict-modal-title"
              className="ict-modal__title"
            >
              SYSTEMS
            </h2>
          </div>

          <button
            type="button"
            className="ict-modal__close"
            aria-label="Close ICT Systems"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="ict-modal__grid">
          {ict_systems.map((system) => {
            const Icon = Icons[system.icon] || Boxes;
            const accent =
              categoryAccents[system.category] || defaultAccent;

            return (
              <a
                key={system.acronym}
                href={system.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ict-modal__card"
              >
                <div className="ict-modal__card-top">
                  <span
                    className="ict-modal__icon"
                    style={{ backgroundColor: accent }}
                  >
                    <Icon size={17} strokeWidth={2} />
                  </span>

                  <span className="ict-modal__category">
                    {system.category}
                  </span>
                </div>

                <div className="ict-modal__card-body">
                  <span className="ict-modal__acronym">
                    {system.acronym}
                  </span>

                  <h3>
                    {system.name}
                  </h3>

                  <p>
                    {system.description}
                  </p>
                </div>

                {/* <div className="ict-modal__open">
                  <span>Open System</span>
                  <ArrowUpRight size={15} />
                </div> */}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}