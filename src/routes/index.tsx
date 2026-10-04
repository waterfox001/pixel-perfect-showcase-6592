import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, type CSSProperties, type ReactNode } from "react";
import logo from "@/assets/els-logo.png.asset.json";
import googleReview from "@/assets/google-review.png.asset.json";
import googleMaps from "@/assets/google-maps.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELS MODAS — Estilo e conforto para todas as idades" },
      { name: "description", content: "ELS MODAS: moda feminina, masculina, infantil, pijamas e moda íntima. Fale pelo WhatsApp, siga no Instagram e venha nos visitar." },
      { property: "og:title", content: "ELS MODAS — Estilo e conforto para todas as idades" },
      { property: "og:description", content: "Moda feminina, masculina, infantil, pijamas e moda íntima em Caucaia-CE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINKS = {
  whatsapp: "https://wa.me/5585997616191?text=Oi%2C+vim+pelo+Google+e+gostaria+de+ver+o+cat%C3%A1logo+de+produtos.",
  instagram: "https://www.instagram.com/elsmodasoficial",
  review: "https://g.page/r/CVXlb93DArF0EBM/review",
  maps: "https://www.google.com/maps/dir//Els+Modas+Roupas+Infantil+%26+Adulto+%7C+Caucaia-Fortaleza,+R.+Estados+Unidos,+1002+-+Parque+das+Nacoes,+Caucaia+-+CE,+61642-140/@-3.7724916,-38.5460262,31424m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x7c74bf77e37b411:0x74b102c3dd6fe555!2m2!1d-38.6092362!2d-3.7448108!3e0?hl=pt-BR",
  post: "https://www.instagram.com/p/DZXj-1NRwlm/",
  localway: "[LINK_LOCALWAY]",
};

const PARTICLE_COLORS = ["bg-lilac", "bg-violet/60", "bg-primary/40", "bg-gold/70", "bg-lilac/70"];

function Particles() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const r = (n: number) => ((Math.sin(i * 9301 + n * 49297) + 1) / 2);
        const size = 4 + Math.round(r(1) * 22);
        return {
          size,
          left: `${Math.round(r(2) * 100)}%`,
          color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
          blur: size > 16,
          style: {
            "--dur": `${18 + r(3) * 18}s`,
            "--delay": `-${r(4) * 30}s`,
            "--o": `${0.25 + r(5) * 0.35}`,
            "--dx": `${(r(6) - 0.5) * 80}px`,
          } as CSSProperties,
        };
      }),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className={`particle ${p.color} ${p.blur ? "blur-[2px]" : ""}`}
          style={{ ...p.style, width: p.size, height: p.size, left: p.left, bottom: -40 }}
        />
      ))}
    </div>
  );
}

const ORBS = [
  { s: 18, t: "8%", l: "6%", c: "bg-lilac", d: 6 },
  { s: 10, t: "20%", l: "92%", c: "bg-gold", d: 8 },
  { s: 28, t: "70%", l: "0%", c: "bg-violet/40 blur-[1px]", d: 9 },
  { s: 14, t: "86%", l: "88%", c: "bg-lilac", d: 7 },
  { s: 8, t: "48%", l: "-4%", c: "bg-gold/80", d: 5 },
  { s: 22, t: "-2%", l: "70%", c: "bg-primary/30 blur-[1px]", d: 10 },
  { s: 6, t: "96%", l: "40%", c: "bg-gold", d: 6 },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden fill="currentColor">
      <path d="M16.04 3C9.4 3 4 8.38 4 15c0 2.12.56 4.18 1.62 6L4 29l8.2-1.6A12 12 0 0 0 16.04 27C22.66 27 28 21.62 28 15S22.66 3 16.04 3Zm0 21.8c-1.8 0-3.56-.48-5.1-1.4l-.36-.22-4.86.96.98-4.72-.24-.38A9.7 9.7 0 0 1 6.3 15c0-5.38 4.38-9.76 9.74-9.76 5.38 0 9.74 4.38 9.74 9.76s-4.36 9.8-9.74 9.8Zm5.34-7.3c-.3-.14-1.74-.86-2-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.64.08-.3-.14-1.24-.46-2.36-1.46-.88-.78-1.46-1.74-1.64-2.04-.16-.3-.02-.44.14-.6.12-.12.3-.34.44-.5.14-.18.2-.3.3-.5.1-.2.04-.36-.02-.5-.08-.14-.68-1.62-.92-2.22-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.36-.26.3-1.04 1.02-1.04 2.48s1.06 2.88 1.22 3.08c.14.2 2.1 3.2 5.08 4.48.7.3 1.26.48 1.7.62.7.22 1.36.2 1.86.12.58-.08 1.74-.7 2-1.4.24-.68.24-1.28.16-1.4-.06-.12-.26-.2-.56-.34Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <radialGradient id="ig" cx="30%" cy="107%" r="150%">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset=".05" stopColor="#fdf497" />
          <stop offset=".45" stopColor="#fd5949" />
          <stop offset=".6" stopColor="#d6249f" />
          <stop offset=".9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig)" />
      <rect x="6" y="6" width="12" height="12" rx="6" fill="none" stroke="#fff" strokeWidth="1.8" />
      <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4" fill="none" stroke="#fff" strokeWidth="0" />
      <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.8" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
    </svg>
  );
}

function ActionCard({
  href, icon, title, subtitle, primary, delay, label,
}: { href: string; icon: ReactNode; title: string; subtitle?: string; primary?: boolean; delay: number; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`reveal group flex min-h-[76px] items-center gap-4 rounded-2xl px-5 py-4 ${primary ? "action-primary" : "action-card"}`}
      style={{ "--delay": `${delay}s` } as CSSProperties}
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${primary ? "bg-primary-foreground/15" : "bg-background"}`}>
        {icon}
      </span>
      <span className="flex flex-col text-left">
        <span className="text-[1.05rem] font-medium leading-tight">{title}</span>
        {subtitle && (
          <span className={`mt-1 text-sm ${primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{subtitle}</span>
        )}
      </span>
      <span className={`ml-auto text-lg transition-transform group-hover:translate-x-1 ${primary ? "text-gold-soft" : "text-gold"}`} aria-hidden>→</span>
    </a>
  );
}

function InstagramEmbed() {
  useEffect(() => {
    const w = window as unknown as { instgrm?: { Embeds: { process: () => void } } };
    if (w.instgrm) { w.instgrm.Embeds.process(); return; }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return (
    <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${LINKS.post}?utm_source=ig_embed`}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%", minWidth: 0, maxWidth: "100%", border: 0, borderRadius: 16 }}
      >
        <a href={LINKS.post} target="_blank" rel="noopener noreferrer" className="action-card flex flex-col items-center gap-3 rounded-2xl p-8 text-center">
          <InstagramIcon className="h-10 w-10" />
          <span className="font-medium">@elsmodasoficial</span>
          <span className="text-sm text-muted-foreground">Carregando publicação…</span>
        </a>
      </blockquote>
    </div>
  );
}

function Index() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <Particles />
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-16 pt-14 sm:pt-20">
        {/* Logo */}
        <div className="reveal relative" style={{ "--delay": "0s" } as CSSProperties}>
          <div aria-hidden className="absolute inset-[-30%] rounded-full bg-lilac/40 blur-3xl" />
          {ORBS.map((o, i) => (
            <span
              key={i}
              aria-hidden
              className={`orb ${o.c}`}
              style={{ width: o.s, height: o.s, top: o.t, left: o.l, "--dur": `${o.d}s`, "--delay": `-${i}s`, "--dx": `${i % 2 ? 6 : -6}px` } as CSSProperties}
            />
          ))}
          <img
            src={logo.url}
            alt="Logo ELS MODAS"
            width={788}
            height={795}
            className="relative h-auto w-48 rounded-full drop-shadow-[0_20px_35px_color-mix(in_oklab,var(--primary)_35%,transparent)] sm:w-56"
          />
        </div>

        <h1 className="reveal mt-8 font-display text-5xl font-semibold tracking-[0.12em] text-primary sm:text-6xl" style={{ "--delay": ".15s" } as CSSProperties}>
          ELS MODAS
        </h1>
        <div className="reveal gold-line mt-4 w-40" style={{ "--delay": ".25s" } as CSSProperties} />
        <p className="reveal mt-4 font-display text-xl italic text-muted-foreground sm:text-2xl" style={{ "--delay": ".3s" } as CSSProperties}>
          Estilo e conforto para todas as idades
        </p>

        {/* Ações */}
        <section aria-label="Canais oficiais" className="mt-12 grid w-full gap-4 sm:grid-cols-2 sm:gap-5">
          <ActionCard primary href={LINKS.whatsapp} label="Falar pelo WhatsApp" delay={0.4} title="Falar pelo WhatsApp" subtitle="Atendimento e catálogo" icon={<WhatsAppIcon />} />
          <ActionCard href={LINKS.instagram} label="Abrir Instagram da ELS MODAS" delay={0.5} title="Instagram" subtitle="@elsmodasoficial" icon={<InstagramIcon />} />
          <ActionCard href={LINKS.review} label="Avaliar a ELS MODAS no Google" delay={0.6} title="Avalie a ELS MODAS no Google" subtitle="Sua avaliação ajuda muito a nossa loja 💜" icon={<img src={googleReview.url} alt="" className="h-10 w-10 object-contain" />} />
          <ActionCard href={LINKS.maps} label="Como chegar pelo Google Maps" delay={0.7} title="Como chegar" subtitle="Rua Estados Unidos, 1002 — Caucaia" icon={<img src={googleMaps.url} alt="" className="h-8 w-8 object-contain" />} />
        </section>

        {/* Instagram */}
        <section className="mt-20 w-full text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Instagram</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Acompanhe a ELS MODAS no Instagram
          </h2>
          <div className="gold-line mx-auto mb-8 mt-4 w-24" />
          <InstagramEmbed />
          <a
            href={LINKS.post}
            target="_blank"
            rel="noopener noreferrer"
            className="action-primary mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-medium"
          >
            <InstagramIcon className="h-5 w-5" /> Ver no Instagram
          </a>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/60 px-6 py-10 text-center backdrop-blur">
        <p className="font-display text-2xl font-semibold tracking-[0.12em] text-primary">ELS MODAS</p>
        <p className="mt-1 font-display italic text-muted-foreground">Estilo e conforto para todas as idades</p>
        <div className="gold-line mx-auto my-5 w-20" />
        <p className="text-xs text-muted-foreground">© 2026 ELS MODAS — Todos os direitos reservados.</p>
        <p className="mt-2 text-[11px] tracking-wider text-muted-foreground/80">
          by{" "}
          <a href={LINKS.localway} target="_blank" rel="noopener noreferrer" className="text-gold transition-colors hover:text-primary">
            Localway
          </a>
        </p>
      </footer>
    </div>
  );
}
