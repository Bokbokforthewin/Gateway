import * as Icons from "lucide-react";
import { ArrowUpRight, Boxes } from "lucide-react";
import { categoryAccents, defaultAccent } from "../data/systems.js";

export default function SystemCard({
  system,
  onClick,
  actionLabel = "Open",
}) {
  const Icon = Icons[system.icon] || Boxes;
  const accent = categoryAccents[system.category] || defaultAccent;

  const content = (
    <>
      <div className="card__top">
        <span
          className="card__icon"
          style={{ backgroundColor: accent }}
        >          <Icon size={18} strokeWidth={2} />
        </span>
        <span className="card__category">
          {system.category}
        </span>
      </div>
      <div className="card__body">
        <div className="card__acronym">
          {system.acronym}
        </div>
        <h3 className="card__name">
          {system.name}
        </h3>
        <p className="card__desc">
          {system.description}
        </p>
      </div>
      {/* <div className="card__open">
        <span>{actionLabel}</span>
        <ArrowUpRight size={15} />
      </div> */}
    </>
  );
  if (onClick) {
    return (
      <button
        type="button"
        className="card card--button"
        onClick={onClick}
      >
        {content}
      </button>
    );
  }
  return (
    <a
      className="card"
      href={system.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}