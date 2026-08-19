import type { Metadata } from "next";

const Arrow = () => <span aria-hidden="true">↗</span>;

export const metadata: Metadata = {
  title: "Connect with Xannah Moniq | Bajans Pun De ’Net",
  description: "Connect with Xannah Moniq for speaking, media, research and values-aligned collaborations.",
  alternates: { canonical: "/connect" },
  openGraph: {
    title: "Connect with Xannah Moniq | Bajans Pun De ’Net",
    description: "Speaking, media, research and values-aligned collaborations.",
    url: "/connect",
    images: [{ url: "/bpdn-social-card.png", width: 1200, height: 630 }],
  },
};

export default function ConnectPage() {
  return (
    <main className="connect-page">
      <div className="connect-shell">
        <a className="connect-back" href="/">← Back to Bajans Pun De ’Net</a>
        <article className="digital-card">
          <div className="digital-card-visual">
            <img className="digital-card-logo" src="/bpdn-logo.png" alt="Bajans Pun De ’Net" />
            <img className="digital-card-portrait" src="/xannah-portrait.jpeg" alt="Xannah Moniq" />
          </div>
          <div className="digital-card-copy">
            <p className="eyebrow">Digital storyteller · Author · Presenter</p>
            <h1>Xannah <em>Moniq</em></h1>
            <p className="connect-role">Creator and presenter of Bajans Pun De ’Net</p>
            <p className="connect-summary">Bajan history, culture and current affairs with context—alongside thoughtful conversations about Caribbean identity, neurodivergence, chronic illness and lived experience.</p>
            <div className="connect-actions">
              <a className="contact-save" href="/xannah-moniq.vcf" download>Save Xannah to contacts <span aria-hidden="true">↓</span></a>
              <a href="mailto:bajanspundenet@gmail.com?subject=Professional%20enquiry%20for%20Xannah%20Moniq">Email <Arrow /></a>
              <a href="https://www.linkedin.com/in/xannahmoniq" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://www.youtube.com/@BajansPunDeNet" target="_blank" rel="noreferrer">YouTube <Arrow /></a>
              <a href="https://www.instagram.com/bajanspundenet" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
            </div>
            <div className="connect-qr-row">
              <img src="/connect-qr.png" alt="QR code for bajanspundenet.com/connect" />
              <p><strong>Scan to connect</strong>Speaking, media interviews, panels, research, storytelling and values-aligned collaborations.</p>
            </div>
            <p className="connect-note">Written approaches are preferred. Invitations are considered after the details have been reviewed.</p>
          </div>
        </article>
        <p className="connect-footer">bajanspundenet.com · Independent Caribbean media with context</p>
      </div>
    </main>
  );
}
