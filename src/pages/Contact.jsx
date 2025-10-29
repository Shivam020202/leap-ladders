import React from "react";

export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-slate-700">
        Email us at{" "}
        <a className="text-sky-600" href="mailto:hello@leapladders.example">
          hello@leapladders.example
        </a>
      </p>
    </section>
  );
}
