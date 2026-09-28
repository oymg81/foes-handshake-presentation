import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Inbox,
  Megaphone,
  MessageSquareQuote,
  Sparkles,
  Star,
} from 'lucide-react'

const capabilities = [
  {
    number: '01',
    label: 'Reviews',
    title: 'Know what customers are saying.',
    description:
      'Keep customer feedback visible and easy to understand, so you can spot what is working and where a thoughtful response can help.',
    icon: Star,
    accent: 'sky',
    points: ['See feedback in one place', 'Stay close to customer sentiment'],
  },
  {
    number: '02',
    label: 'Leads',
    title: 'Keep every opportunity moving.',
    description:
      'Bring incoming enquiries together so small teams can follow up with more clarity and less time spent searching through scattered messages.',
    icon: Inbox,
    accent: 'violet',
    points: ['Keep enquiries organised', 'Make follow-up easier'],
  },
  {
    number: '03',
    label: 'Promotions',
    title: 'Make your next offer easier to manage.',
    description:
      'Keep promotions and customer conversations connected, giving you a clearer way to plan engagement without adding more complexity.',
    icon: Megaphone,
    accent: 'cyan',
    points: ['Keep campaign details together', 'Create a clearer customer journey'],
  },
]

export default function Page() {
  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="FOES Platform home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>FOES<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About FOES</a>
          <a className="nav-cta" href="https://codingsoft.tech/" target="_blank" rel="noreferrer">
            Meet CodingSoft <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Customer engagement, simplified</p>
          <h1>A simpler way to manage <span>customer engagement.</span></h1>
          <p className="hero-description">FOES brings reviews, incoming leads, and promotions into one clear workspace—so small businesses can spend less time piecing things together and more time looking after customers.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#capabilities">Explore the platform <ChevronRight size={16} aria-hidden="true" /></a>
            <a className="text-link" href="#about">Why FOES <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustration of the FOES workspace" role="img">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="dashboard-card">
            <div className="dashboard-top"><div className="mini-brand"><span className="mini-mark" /> FOES</div><span className="live-pill"><span /> Workspace</span></div>
            <div className="dashboard-heading"><div><p>Good morning</p><h2>Your engagement, at a glance.</h2></div><span className="date-pill">This week</span></div>
            <div className="dashboard-grid">
              <div className="metric metric-large"><div className="metric-icon blue"><MessageSquareQuote size={17} /></div><span>Reviews</span><strong>Everything in view</strong><div className="review-lines"><i /><i /><i /><i /></div></div>
              <div className="metric"><div className="metric-icon purple"><Inbox size={17} /></div><span>Leads</span><strong>Easy to follow up</strong><div className="bars"><i /><i /><i /><i /><i /></div></div>
              <div className="metric"><div className="metric-icon teal"><Megaphone size={17} /></div><span>Promotions</span><strong>Ready when you are</strong><div className="promotion-line"><span>Next campaign</span><b /></div></div>
            </div>
            <div className="dashboard-footer"><span><Sparkles size={14} /> One workspace. Less searching.</span><ArrowUpRight size={14} /></div>
          </div>
        </div>
      </section>

      <section className="intro-section" id="about">
        <p className="section-kicker">Built for the way small teams work</p>
        <div className="intro-grid"><h2>Good customer relationships shouldn&apos;t feel <em>scattered.</em></h2><div><p>FOES is for small businesses that want a simpler way to stay on top of customer interactions. It brings the details that matter into one calm, connected place.</p><p>Less switching between tools. Easier follow-up. A clearer picture of the conversations shaping your business.</p></div></div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-heading"><div><p className="section-kicker">One workspace, three essentials</p><h2>Everything you need to stay connected.</h2></div><p>FOES keeps the important parts of customer engagement close at hand, without adding noise to your day.</p></div>
        <div className="capability-list">{capabilities.map((item) => { const Icon = item.icon; return <article className={`capability-card ${item.accent}`} key={item.label}><div className="card-top"><span className="card-number">{item.number}</span><div className="capability-icon"><Icon size={22} strokeWidth={1.7} /></div></div><div className="card-content"><p className="card-label">{item.label}</p><h3>{item.title}</h3><p className="card-description">{item.description}</p><ul>{item.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul></div><div className="card-arrow"><ArrowUpRight size={18} /></div></article> })}</div>
      </section>

      <section className="company-section"><div className="company-mark" aria-hidden="true">C<span>.</span></div><div><p className="section-kicker">The team behind FOES</p><h2>Built by <span>CodingSoft Technology.</span></h2><p>FOES is a SaaS platform developed by CodingSoft Technology to help small businesses manage reviews, leads, and promotions in one workspace.</p><a className="text-link" href="https://codingsoft.tech/" target="_blank" rel="noreferrer">Visit CodingSoft Technology <ArrowUpRight size={15} /></a><p className="founder-credit">Created by <a href="https://oscarmochizaki-portfolio.vercel.app/" target="_blank" rel="noreferrer">Oscar Mochizaki</a>, Founder and Software Engineer.</p></div></section>

      <footer className="footer"><div><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /></span><span>FOES<span className="brand-dot">.</span></span></a><p>A clearer way to manage customer engagement.</p></div><div className="footer-cta"><p>Ready to simplify the scattered?</p><a className="primary-button" href="https://codingsoft.tech/" target="_blank" rel="noreferrer">Learn more at CodingSoft <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 FOES Platform</span><span>Built by CodingSoft Technology</span></div></footer>
    </main>
  )
}

const styles = ``

void styles
