export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>
          &copy; {year} <strong>DOH NIR CHD</strong>
        </span>
        <span>Information and Communication Technology Unit - MSD</span>
      </div>
    </footer>
  );
}
