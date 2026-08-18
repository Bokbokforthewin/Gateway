import { ShieldCheck } from "lucide-react";
import Logo from "../components/Logo.jsx";

export default function About() {
  return (
    <section className="about">
      <div className="container about__grid">
        <div>
          <div className="about__org">DOH NIR CHD</div>
          <h1 className="about__title">
            Department of Health — Negros Island Region Center for Health
            Development
          </h1>
        </div>

        <div className="about__body">
          <p>
            The Digital Systems Gateway is the central entry point to DOH NIR
            CHD's digital applications. Instead of tracking separate links,
            staff can find every system in one directory and open the one
            they need.
          </p>
          <p>
            The gateway itself does not store accounts or data. It simply
            points to each system, which is built, secured, and maintained on
            its own.
          </p>

          <div className="about__note">
            <ShieldCheck size={18} />
            <p>
              Each application maintains its own authentication and access
              controls. Sign in is handled entirely by the system you open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
