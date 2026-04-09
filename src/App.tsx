import { siteConfig } from "./siteConfig";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="site">
      <header className="header">
        <div className="brand">{siteConfig.shortName}</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-label="Introduction">
          <h1>{siteConfig.shortName}</h1>
          <p>{siteConfig.tagline}</p>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>{siteConfig.about}</p>
        </section>

        <section id="products">
          <h2>Products</h2>
          <div className="products-grid">
            {siteConfig.products.map((product) => (
              <a
                key={product.name}
                className="product-card"
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${product.name}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${product.logo}`}
                  alt={`${product.name} logo`}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="visit">Visit {product.name} &rarr;</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="label">Business</span>
              <span className="value">{siteConfig.companyName}</span>
            </div>
            <div className="contact-item">
              <span className="label">Email</span>
              <a className="value" href={`mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>
            </div>
            <div className="contact-item">
              <span className="label">Phone</span>
              <span className="value">{siteConfig.supportPhone}</span>
            </div>
            <div className="contact-item">
              <span className="label">Mailing Address</span>
              <span className="value">{siteConfig.mailingAddress}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        &copy; {year} {siteConfig.companyName}. All rights reserved.
      </footer>
    </div>
  );
}
