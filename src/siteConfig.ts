// Stripe and Apple require accurate, working business contact details.
// `mailingAddress` is kept here for Stripe/Apple form submission but is
// intentionally NOT rendered on the public page.
export const siteConfig = {
  companyName: "Dziedzic Software Solutions LLC",
  shortName: "Dziedzic Software Solutions",
  tagline: "Custom software solutions and AI-powered products",
  about:
    "Dziedzic Software Solutions LLC is an independent software company building practical, AI-powered tools for service-driven businesses. We design, develop, and operate web, mobile, and backend systems end-to-end.",
  principal: "Christian Dziedzic",
  principalTitle: "Managing Member",
  supportEmail: "cdziedzic@gmail.com",
  supportPhone: "+1 (610) 937-3942",
  // Not displayed publicly — provided directly to Stripe / Apple on enrollment.
  mailingAddress: "157 Sagewood Drive, Malvern, PA 19355, US",
  products: [
    {
      name: "FieldResolve",
      url: "https://fieldresolve.com",
      logo: "fieldresolve-logo.png",
      description:
        "AI-powered field service platform connecting technicians, dealers, and manufacturers with intelligent support, document management, and live chat assistance.",
    },
  ],
};
