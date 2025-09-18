
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <form className="glass p-6 md:p-8 space-y-4" aria-label="Contact form">
          <h2 className="font-heading text-3xl md:text-4xl">Contact</h2>
          <p className="text-white/80">Email me directly or use the form to send a message.</p>
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded-lg bg-white/5 border-white/10" placeholder="Your name"/>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg bg-white/5 border-white/10" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full rounded-lg bg-white/5 border-white/10" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className="btn-gradient px-6 py-3 rounded-xl text-cinematic font-semibold">Send</button>
          <p className="text-xs text-white/60">To enable real submissions, connect Formspree and set form `action` + `method="POST"`.</p>
        </form>

        <div className="glass p-6 md:p-8">
          <h3 className="font-heading text-2xl">Contact Details</h3>
          <ul className="mt-4 space-y-2 text-white/80">
            <li><strong>Email:</strong> your.email@example.com</li>
            <li><strong>WhatsApp:</strong> +91 XXXXX XXXXX</li>
            <li><strong>Instagram:</strong> @yourhandle</li>
          </ul>
          <div className="mt-6 p-4 rounded-lg border border-white/10 bg-white/5">
            Available via <strong>Lume Productions</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
