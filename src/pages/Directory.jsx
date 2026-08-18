import { systems } from "../data/systems.js";
import SystemCard from "../components/SystemCard.jsx";

export default function Directory() {
  return (
    <section className="directory">
      <div className="container">

        <div className="directory__head">
          <p className="directory__desc">
            ONE ACCESS
          </p>

          <h1 className="directory__title">
            GATEWAY
          </h1>
        </div>

        <div className="directory__grid-wrap">
          <div className="directory__grid">
            {systems.map((system) => (
              <SystemCard
                key={system.acronym}
                system={system}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
