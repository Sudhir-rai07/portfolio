import { Clock3, Mail, MapPin, PhoneCall, Sparkles } from "lucide-react";

const services = [
  "Landing Page",
  "Portfolio Website",
  "Business Website",
  "Web App (Dashboard / SaaS)",
  "API + Backend Integration",
  "Performance Optimization",
  "Maintenance and Support",
  "Something Custom",
];

const budgetOptions = [
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000 - $7,000",
  "$7,000+",
];

const timelineOptions = [
  "ASAP (1-2 weeks)",
  "2-4 weeks",
  "1-2 months",
  "Flexible timeline",
];

export default function ContactPage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_20%_20%,oklch(0.36_0.08_170/0.35),transparent_45%),radial-gradient(circle_at_80%_0%,oklch(0.35_0.07_70/0.26),transparent_35%)]" />

      <section className="container w-full lg:max-w-[90%] px-4 md:px-24 py-12 md:py-16">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Sparkles size={16} className="text-accent" />
          <p>Tell me what you need. I build reliable and modern web experiences.</p>
        </div>

        <div className="mt-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Let&apos;s Build Your Next <span className="text-accent">Project</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            I work with founders, creators, and businesses to design and develop
            high-quality digital products. Share your project details and I&apos;ll get
            back to you with a clear scope, timeline, and estimate.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <div className="rounded-3xl border border-border/90 bg-card/40 backdrop-blur-sm p-5 md:p-8 shadow-[0_1px_0_oklch(1_0_0/0.05)_inset,0_30px_80px_oklch(0_0_0/0.25)]">
            <h2 className="text-2xl font-semibold">Project Inquiry Form</h2>
            <p className="mt-2 text-sm text-foreground/70">
              The more context you share, the more accurate my response will be.
            </p>

            <form className="mt-8 space-y-6" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Full name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                    required
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Company / Brand</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company or personal brand"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Phone / WhatsApp</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Optional"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Service needed</span>
                  <select
                    name="service"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/70"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Preferred contact method</span>
                  <select
                    name="contactMethod"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/70"
                    defaultValue="Email"
                  >
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                    <option>Google Meet</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Estimated budget</span>
                  <select
                    name="budget"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/70"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose budget range
                    </option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Timeline</span>
                  <select
                    name="timeline"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/70"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select expected timeline
                    </option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground/90">Project brief</span>
                <textarea
                  name="brief"
                  rows={6}
                  placeholder="Tell me about your goals, target audience, must-have features, and any references you like."
                  className="w-full rounded-xl border border-border/90 bg-background/80 px-3 py-2 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                  required
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Website / Reference links</span>
                  <input
                    type="url"
                    name="references"
                    placeholder="https://"
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">How did you find me?</span>
                  <input
                    type="text"
                    name="source"
                    placeholder="LinkedIn, referral, etc."
                    className="h-11 w-full rounded-xl border border-border/90 bg-background/80 px-3 text-sm placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                  />
                </label>
              </div>

              <label className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-3">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-1 h-4 w-4 rounded border-border"
                  required
                />
                <span className="text-sm text-foreground/75">
                  I agree to be contacted regarding this project inquiry.
                </span>
              </label>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/70"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-border/80 bg-card/40 p-5 md:p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <div className="mt-5 space-y-4 text-sm text-foreground/80">
                <div className="flex items-start gap-3">
                  <Mail size={17} className="mt-0.5 text-accent" />
                  <a className="hover:text-accent transition-colors" href="mailto:sudhirrai128@gmail.com">
                    sudhirrai128@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneCall size={17} className="mt-0.5 text-accent" />
                  <a className="hover:text-accent transition-colors" href="tel:+919999999999">
                    +91 99999 99999
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 text-accent" />
                  <p>Bengaluru, India</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 size={17} className="mt-0.5 text-accent" />
                  <p>Response time: within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-card/40 p-5 md:p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">What happens next?</h3>
              <ol className="mt-5 space-y-3 text-sm text-foreground/80">
                <li className="rounded-lg border border-border/60 p-3 bg-background/40">
                  1. I review your goals and requirements.
                </li>
                <li className="rounded-lg border border-border/60 p-3 bg-background/40">
                  2. I send a tailored proposal with timeline and pricing.
                </li>
                <li className="rounded-lg border border-border/60 p-3 bg-background/40">
                  3. We start with a kickoff call and build plan.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}