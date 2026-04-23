import {Mail } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="relative isolate flex-1 overflow-hidden py-10 md:py-14">
      <section className="mx-auto w-full md:max-w-4xl px-4 md:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-semibold tracking-wide text-foreground md:text-4xl">
            Get In Touch
          </h1>
          <p className="mt-3 text-lg text-foreground/60 md:leading-none">
            Have a project in mind? Let&apos;s work together
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="border rounded-2xl p-4 glass-card">
            <div className="flex items-center gap-4">
              <Mail className="h-4 w-4 text-accent" />
              <div>
                <h2 className="text-sm leading-none font-semibold text-foreground">Email</h2>
                <p className="mt-2 text-xs text-foreground/60">sudhirrai128@gmail.com</p>
              </div>
            </div>
          </article>

          <article className="border rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <FaLocationDot className="h-4 w-4 text-accent" />
              <div>
                <h2 className="text-sm leading-none font-semibold text-foreground">Location</h2>
                <p className="mt-2 text-xs text-foreground/60">Coimbatore, India</p>
              </div>
            </div>
          </article>
        </div>

        <section className="mt-6 rounded-3xl border md:p-7">
          <form className="space-y-4" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground/90">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-10 w-full rounded-md border mt-2 border-white/10 bg-[oklch(0.2_0.03_260/0.4)] px-4 text-xs   text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground/90">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="h-10 w-full rounded-md border mt-2 border-white/10 bg-[oklch(0.2_0.03_260/0.4)] px-4 text-xs   text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-foreground/90">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="What&apos;s this about?"
                 className="h-10 w-full rounded-md border mt-2 border-white/10 bg-[oklch(0.2_0.03_260/0.4)] px-4 text-xs   text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
              />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-foreground/90">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="h-40 w-full rounded-md border mt-2 border-white/10 bg-[oklch(0.2_0.03_260/0.4)] px-4 py-2 text-xs text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-accent/70"
              />
            </label>

            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-accent text-2xl font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-[oklch(0.74_0.18_77)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/70"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}