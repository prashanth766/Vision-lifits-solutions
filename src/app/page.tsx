import Image from "next/image";

const solutions = [
  {
    title: "Residential Elevators",
    description:
      "Bring effortless access and a refined finish to villas, apartments and private residences.",
    details: "Compact layouts · Custom cabin finishes · Home accessibility",
    image: "/images/residential.png",
    alt: "Glass elevator in a contemporary residence",
  },
  {
    title: "Commercial Elevators",
    description:
      "Confident everyday movement for offices, retail destinations and high-traffic buildings.",
    details: "Passenger-flow planning · Configurable capacity · Smart controls",
    image: "/images/commercial.png",
    alt: "Elevator lobby in a modern commercial building",
  },
  {
    title: "Hospital Elevators",
    description:
      "Thoughtfully planned access for patient movement, care teams and essential hospital operations.",
    details: "Stretcher-friendly layouts · Precise levelling · Priority controls",
    image: "/images/hospital.png",
    alt: "Bright lift lobby in a healthcare building",
  },
  {
    title: "Industrial / Goods Elevators",
    description:
      "Practical, robust vertical transport for goods, equipment and demanding working environments.",
    details: "Load-specific planning · Durable finishes · Wide-access options",
    image: "/images/industrial.png",
    alt: "Freight elevator serving an industrial facility",
  },
];

const values = [
  ["Advanced Engineering", "Considered design, precise planning and controls matched to your building."],
  ["Safety First", "Safety-led decisions, from system selection through installation and upkeep."],
  ["Premium Quality", "Carefully selected materials and finishes with attention to every detail."],
  ["Professional Installation", "A coordinated installation process with clear communication at every stage."],
  ["Reliable AMC Support", "Planned maintenance and practical support throughout the service lifecycle."],
  ["Customized Solutions", "Flexible configurations shaped by your space, users and architectural vision."],
];

const safetySystems = [
  ["Emergency Alarm", "A clear way to call for assistance."],
  ["Automatic Rescue Device", "A planned response to power interruption."],
  ["Overload Protection", "Monitors the permitted carrying load."],
  ["Door Obstruction Detection", "Senses obstacles in the door path."],
  ["Emergency Lighting", "Maintains visibility when power is lost."],
  ["Overspeed Protection", "Monitors travel speed for safe operation."],
  ["Safety Brake System", "Protective braking for critical conditions."],
  ["Precision Door Control", "Controlled, coordinated door movement."],
];

const projects = [
  {
    type: "Residential",
    name: "Courtyard Residence",
    description: "A home-access solution planned to complement a contemporary villa and its daily rhythm.",
    image: "/images/project-residence.png",
    alt: "Contemporary residence with an elevator",
  },
  {
    type: "Commercial",
    name: "Urban Business Centre",
    description: "Passenger movement considered around busy arrival periods and multi-floor office use.",
    image: "/images/project-commercial.png",
    alt: "Modern business centre entrance",
  },
  {
    type: "Hospital",
    name: "Care & Wellness Campus",
    description: "An accessible vertical-transport concept for patients, caregivers and clinical teams.",
    image: "/images/project-hospital.png",
    alt: "Healthcare campus exterior",
  },
  {
    type: "Industrial",
    name: "Industrial Logistics Hub",
    description: "Goods movement planned around the loading needs and workflow of a modern facility.",
    image: "/images/project-industrial.png",
    alt: "Industrial logistics building",
  },
];

const services = [
  ["Preventive Maintenance", "Scheduled checks and adjustments to help keep everyday performance consistent."],
  ["Breakdown Support", "Technical troubleshooting and a clear support process when operation is interrupted."],
  ["Modernization & Upgrades", "Thoughtful improvements to controls, finishes and ageing equipment."],
  ["Spare Parts", "Support for compatible replacement parts selected for the installed system."],
  ["Inspection & Support", "Technical inspections, practical guidance and documentation for your building team."],
  ["Annual Maintenance Contract", "A structured maintenance plan tailored to the system, usage and service requirements."],
];

const testimonials = [
  "The team helped us think through the right fit for our home, with clear guidance on space, finishes and everyday use.",
  "A well-coordinated process, from planning to handover. We valued the attention to detail and straightforward communication.",
  "Having a planned maintenance approach gives our building team greater confidence in day-to-day elevator operation.",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#top" aria-label="Vision Lifts & Solutions home">
      <Image
        className="brand__logo"
        src="/images/vision-lifts-logo.png"
        alt="Vision Lifts & Solutions"
        width={2160}
        height={1440}
        priority={!footer}
      />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__copy">{description}</p> : null}
    </div>
  );
}

function ActionLink({
  children,
  href,
  secondary = false,
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
}) {
  return (
    <a className={`action${secondary ? " action--secondary" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-link nav-link--active" href="#top">Home</a>
            <a className="nav-link" href="#why-vision">About Us</a>
            <a className="nav-link" href="#solutions">Products</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#safety">Safety &amp; Technology</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <span className="header-region">South India</span>
            <ActionLink href="#contact">Get a Quote</ActionLink>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#why-vision">About Us</a>
              <a href="#solutions">Products</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#safety">Safety &amp; Technology</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </header>
        <div className="brand-rule" />
        <div className="hero__body">
          <div className="hero__copy">
            <p className="eyebrow">Vision Lifts &amp; Solutions / South India</p>
            <h1 id="hero-title">Elevating Spaces.<br />Moving People.<br />Building Trust.</h1>
            <p className="hero__description">
              Reliable elevator solutions engineered for homes, commercial buildings, hospitals and industrial applications.
            </p>
            <div className="hero__actions">
              <ActionLink href="#contact">Get a Free Consultation</ActionLink>
              <ActionLink href="#solutions" secondary>Explore Elevators</ActionLink>
            </div>
            <div className="trust-promise">
              <span className="brand-rule__short" />
              <p>Designed for safety. Built for performance. Supported for the long run.</p>
            </div>
          </div>
          <figure className="hero__image">
            <Image
              src="/images/hero-lobby.png"
              alt="Modern elevator lobby with warm architectural finishes"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <figcaption>
              <span>Engineering × Architecture</span>
              <strong>Designed to belong. Built to perform.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company information">
        <div className="trust-strip__stats">
          {[["10+", "Years of Experience"], ["500+", "Installations"], ["24/7", "Service Support"], ["100%", "Safety Focus"]].map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="trust-strip__network">
          <span className="pin-mark" aria-hidden="true">+</span>
          <span>South India<br />Service Network</span>
        </div>
        <p className="editorial-note">Experience, installation and service figures are illustrative placeholders pending confirmation.</p>
      </section>

      <section className="section solutions" id="solutions">
        <SectionHeading
          eyebrow="01 / Our solutions"
          title="Elevator Solutions for Every Need"
          description="From a private residence to a complex public building, the right elevator starts with the way your space is used."
        />
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-card__image">
                <Image src={solution.image} alt={solution.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 44vw" />
              </div>
              <div className="solution-card__body">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <p className="solution-card__details">{solution.details}</p>
                <a className="text-link" href="#contact">Explore Solution <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="editorial-note">Features are indicative and configurable. Final capacity, dimensions, performance and specifications depend on the building assessment.</p>
      </section>

      <section className="engineering section" id="engineering">
        <figure className="engineering__image">
          <Image src="/images/cabin-study.png" alt="Contemporary elevator cabin with warm wood and metal details" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <figcaption>Materials, movement and detail — in harmony.</figcaption>
        </figure>
        <div className="engineering__copy">
          <SectionHeading eyebrow="02 / A considered fit" title="Engineered Around Your Building" />
          <p className="body-copy">No two buildings move the same way. We plan each configuration around building height, passenger requirements, shaft dimensions, usage and architecture — balancing practical engineering with the character of your space.</p>
          <ul className="feature-list">
            {["Smooth and quiet travel", "Energy-efficient operation", "Advanced control systems", "Precision floor levelling", "Modern cabin finishes", "Safety-focused design"].map((item) => (
              <li key={item}><span aria-hidden="true">✓</span>{item}</li>
            ))}
          </ul>
          <ActionLink href="#contact">Talk to Our Experts</ActionLink>
        </div>
      </section>

      <section className="section why" id="why-vision">
        <SectionHeading
          eyebrow="03 / Why Vision"
          title="The Details Make the Difference."
          description="Engineering discipline. Thoughtful service. A solution you can feel confident in, every day."
        />
        <div className="value-grid">
          {values.map(([title, description], index) => (
            <article className="value-item" key={title}>
              <span className="value-item__number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="safety section" id="safety">
        <span className="safety__rule" />
        <div className="safety__intro">
          <SectionHeading
            eyebrow="04 / Safety & technology"
            title="Safety Is Built Into Every Journey"
            description="Protection is not an afterthought. We consider the complete journey — from controlled movement and reliable doors to a prepared response when it matters."
          />
          <div className="safety__image">
            <Image src="/images/safety-panel.png" alt="Elevator control panel and safety controls" fill sizes="(max-width: 900px) 100vw, 34vw" />
          </div>
        </div>
        <div className="safety-grid">
          {safetySystems.map(([title, description], index) => (
            <article className="safety-item" key={title}>
              <span className="safety-item__index">0{index + 1}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
        <p className="editorial-note editorial-note--dark">Safety-system availability and configuration are confirmed during technical assessment and final specification.</p>
      </section>

      <section className="section projects" id="projects">
        <SectionHeading
          eyebrow="05 / Spaces in motion"
          title="Projects That Move People"
          description="A look at the kinds of spaces our solutions can serve — from intimate homes to ambitious commercial environments."
        />
        <div className="project-filters" aria-label="Project categories">
          <span className="filter-chip filter-chip--active">All</span>
          <span className="filter-chip">Residential</span>
          <span className="filter-chip">Commercial</span>
          <span className="filter-chip">Hospital</span>
          <span className="filter-chip">Industrial</span>
        </div>
        <p className="editorial-note">Illustrative project placeholders, not a verified portfolio. Names, locations, imagery and descriptions await confirmation.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card__image">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 720px) 100vw, 45vw" />
              </div>
              <div className="project-card__meta"><span>{project.type}</span><span>Illustrative</span></div>
              <h3>{project.name}</h3>
              <p className="project-card__location">City, State — editable location</p>
              <p className="body-copy">{project.description}</p>
            </article>
          ))}
        </div>
        <div className="section-action"><ActionLink href="#contact" secondary>View All Projects</ActionLink></div>
      </section>

      <section className="section services" id="services">
        <SectionHeading
          eyebrow="06 / Service & AMC"
          title="Beyond Installation. We Keep You Moving."
          description="The relationship does not end at handover. We help you care for your elevator throughout its working life, with service options planned around your building."
        />
        <div className="service-grid">
          {services.map(([title, description], index) => (
            <article className="service-card" key={title}>
              <span className="service-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="section-action"><ActionLink href="#contact">Request Service</ActionLink></div>
      </section>

      <section className="section voices" id="voices">
        <SectionHeading eyebrow="07 / The customer experience" title="Trusted by Customers" />
        <p className="editorial-note">Editable sample testimonials awaiting approval. Quotes, customer names, companies and project details are placeholders, not published endorsements.</p>
        <div className="testimonial-grid">
          {testimonials.map((quote, index) => (
            <blockquote className="testimonial" key={quote}>
              <span className="testimonial__quote" aria-hidden="true">“</span>
              <p>{quote}</p>
              <span className="testimonial__rule" />
              <footer>
                <strong>[Customer name]</strong>
                <span>{index === 0 ? "Residential project / company" : index === 1 ? "Commercial project / company" : "AMC customer / company"}</span>
                <span>[City, State]</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="consultation" id="contact">
        <span className="consultation__rule" />
        <div className="consultation__content">
          <div>
            <p className="eyebrow">Let’s plan your next level</p>
            <h2>Looking for the Right Elevator for Your Building?</h2>
            <p>Tell us about your project and our team will help you choose the right elevator solution.</p>
          </div>
          <div className="consultation__actions">
            <ActionLink href="#contact-details">Request a Quote</ActionLink>
            <a className="action action--light" href="#contact-details">Contact Details <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact-details">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand footer />
            <p>Thoughtfully engineered elevator solutions for homes, businesses, healthcare and industry. From the first conversation to long-term care.</p>
          </div>
          <div className="footer-column">
            <h2>Quick Links</h2>
            <a href="#top">Home</a><a href="#why-vision">About Us</a><a href="#solutions">Products</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#safety">Safety &amp; Technology</a><a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h2>Solutions</h2>
            {solutions.map((solution) => <a href="#solutions" key={solution.title}>{solution.title}</a>)}
            <a href="#services">Service &amp; AMC</a>
          </div>
          <div className="footer-column footer-contact">
            <h2>Contact</h2>
            <p><span>Phone</span>[Add phone number]</p>
            <p><span>Email</span>[Add email address]</p>
            <p><span>Address</span>[Add registered office address]</p>
            <small>Contact details are placeholders and must be confirmed before launch.</small>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 Vision Lifts &amp; Solutions. All Rights Reserved.</span>
          <span>Engineered for every journey.</span>
        </div>
      </footer>
    </main>
  );
}
