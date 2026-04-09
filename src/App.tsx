import { siteConfig } from "./siteConfig";

export default function App() {
  const year = new Date().getFullYear();
  const product = siteConfig.products[0];

  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span>Dziedzic / Software</span>
        </div>
        <div className="brand-meta">Independent Studio · Est. MMXXV</div>
        <nav className="nav" aria-label="Primary">
          <a href="#index" data-num="01">Index</a>
          <a href="#work" data-num="02">Work</a>
          <a href="#contact" data-num="03">Contact</a>
        </nav>
      </header>

      <main>
        {/* ───── HERO ───── */}
        <section className="hero" aria-label="Introduction">
          <div className="hero-meta">
            <span className="rule" aria-hidden="true" />
            <span>
              <span className="accent">●</span>&nbsp;&nbsp;A Software Practice
            </span>
            <span>—</span>
            <span>Building Quietly, Shipping Loudly</span>
          </div>

          <h1>
            Dziedzic<br />
            <span className="it">Software</span><br />
            Solutions.
          </h1>

          <div className="hero-foot">
            <p className="hero-lede">
              An independent studio designing, building, and operating
              <strong> AI-powered software </strong>
              for service-driven businesses — end to end, from interface
              to infrastructure.
            </p>
            <div className="hero-coords">
              <span>N 00.0000°</span>
              <span className="v">United States</span>
              <span>—</span>
              <span className="v">{year}</span>
            </div>
          </div>
        </section>

        {/* ───── INDEX / ABOUT ───── */}
        <section id="index" className="section">
          <div className="section-head">
            <div className="section-num">
              <strong>01</strong>
              <span>The Practice</span>
            </div>
            <h2 className="section-title">
              A studio for the <span className="it">unromantic</span> middle —
              where software meets the field.
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-spacer" aria-hidden="true" />
            <div className="about-body">
              <p>
                Dziedzic Software Solutions is an independent software company
                building practical, AI-powered tools for the businesses that
                keep the physical world running — <em>technicians, dealers,
                service operators, and the manufacturers behind them.</em>
              </p>
              <p>
                We design, develop, and operate web, mobile, and backend
                systems end-to-end. No outsourced ceremony, no agency
                middlemen — just engineers shipping software that gets used
                on Monday morning.
              </p>
            </div>
          </div>
        </section>

        {/* ───── WORK / PRODUCTS ───── */}
        <section id="work" className="section">
          <div className="section-head">
            <div className="section-num">
              <strong>02</strong>
              <span>In the Wild</span>
            </div>
            <h2 className="section-title">
              Currently <span className="it">shipping</span>.
            </h2>
          </div>

          <a
            className="product-card"
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${product.name}`}
          >
            <div className="product-visual">
              <span className="corner tl" aria-hidden="true" />
              <span className="corner tr" aria-hidden="true" />
              <span className="corner bl" aria-hidden="true" />
              <span className="corner br" aria-hidden="true" />
              <img
                src={`${import.meta.env.BASE_URL}${product.logo}`}
                alt={`${product.name} logo`}
              />
            </div>

            <div className="product-body">
              <div>
                <div className="product-eyebrow">
                  <span className="dot" aria-hidden="true" />
                  <span>Product №01 · Live</span>
                </div>
                <h3 className="product-name">
                  Field<span className="it">Resolve</span>
                </h3>
                <p className="product-desc">
                  An AI-powered field service platform connecting technicians,
                  dealers, and manufacturers — with intelligent support, document
                  management, and live chat assistance built in from the ground up.
                </p>
              </div>

              <div className="product-cta">
                <span>Visit fieldresolve.com</span>
                <span className="arrow" aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        </section>

        {/* ───── CONTACT ───── */}
        <section id="contact" className="section">
          <div className="section-head">
            <div className="section-num">
              <strong>03</strong>
              <span>Correspondence</span>
            </div>
            <h2 className="section-title">
              Get in <span className="it">touch</span>.
            </h2>
          </div>

          <dl className="contact-list">
            <div className="contact-row">
              <dt className="contact-label">Entity</dt>
              <dd className="contact-value">{siteConfig.companyName}</dd>
              <span className="contact-index">i. — legal name</span>
            </div>
            <div className="contact-row">
              <dt className="contact-label">Principal</dt>
              <dd className="contact-value">
                {siteConfig.principal}
                <span className="contact-sub"> — {siteConfig.principalTitle}</span>
              </dd>
              <span className="contact-index">ii. — point of contact</span>
            </div>
            <div className="contact-row">
              <dt className="contact-label">Email</dt>
              <dd className="contact-value">
                <a href={`mailto:${siteConfig.supportEmail}`}>
                  {siteConfig.supportEmail}
                </a>
              </dd>
              <span className="contact-index">iii. — support</span>
            </div>
            <div className="contact-row">
              <dt className="contact-label">Telephone</dt>
              <dd className="contact-value">
                <a href={`tel:${siteConfig.supportPhone.replace(/[^+\d]/g, "")}`}>
                  {siteConfig.supportPhone}
                </a>
              </dd>
              <span className="contact-index">iv. — direct</span>
            </div>
          </dl>
        </section>
      </main>

      <footer className="footer">
        <div className="col-l">
          <span className="stamp">Dziedzic.</span>
          © {year} · All rights reserved
        </div>
        <div className="col-c">
          A Software Studio<br />
          Shipping Since {year}
        </div>
        <div className="col-r">
          Built in-house<br />
          With intention
        </div>
      </footer>
    </div>
  );
}
