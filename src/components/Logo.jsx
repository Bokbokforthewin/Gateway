// Abstract, restrained logomark: a ring standing in for the region,
// a center cross for the Department of Health, and a single gold
// node marking Negros Island Region's seat within it. Not a
// reproduction of any official seal — a minimal, original wordmark
// companion suitable for a digital product.
export default function Logo({ size = 40 }) {
  return (
    <div className="brand">
      <img
        src="/assets/DOH_Logo.png"
        alt="DOH NIR CHD Logo"
        width={size}
        height={size}
        className="brand__mark"
      />

      <img
        src="/assets/Bagong_PilipinasTransparent.png"
        alt="Bagong Pilipinas Logo"
        width={size}
        height={size}
        className="brand__mark"
      />
    </div>
  );
}
