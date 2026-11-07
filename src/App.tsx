import { useEffect, useRef, useState, type ReactNode } from 'react'

const LINKS = {
  repo: 'https://github.com/matiasm0rales/tapo-tv',
  install: 'https://github.com/matiasm0rales/tapo-tv#instalación',
  portfolio: 'https://matiasmorales-dev.vercel.app',
  github: 'https://github.com/matiasm0rales',
  linkedin: 'https://www.linkedin.com/in/matiasm0rales/',
  topoTv: 'https://github.com/abdulmominsakib/tapo-android-tv',
  abdul: 'https://github.com/abdulmominsakib',
  topo: 'https://github.com/filirnd/topo',
  filirnd: 'https://github.com/filirnd',
  license: 'https://github.com/matiasm0rales/tapo-tv/blob/main/LICENSE',
}

/* ───────────── utilidades ───────────── */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SectionHead({
  n,
  label,
  title,
  lead,
  id,
}: {
  n: string
  label: string
  title: string
  lead?: string
  id: string
}) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-n">{n}</span>
        <span className="eyebrow-rule" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}

/* ───────────── íconos ───────────── */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" {...stroke}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.7 3.9 5.9 3.9 9.5s-1.3 6.8-3.9 9.5c-2.6-2.7-3.9-5.9-3.9-9.5S9.4 5.2 12 2.5Z" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  )
}

const featureIcons = {
  live: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
      <rect x="2.5" y="6" width="13" height="12" rx="3" />
      <path d="m15.5 10.5 6-3v9l-6-3" />
    </svg>
  ),
  ptz: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4M9.5 4.8 12 2.5l2.5 2.3M9.5 19.2 12 21.5l2.5-2.3" />
    </svg>
  ),
  local: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
      <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
      <path d="M8 21h8M12 17v4M6.5 12.5l2.5-3 3 4 2-2.5 3 3" />
    </svg>
  ),
  mac: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path d="M2 20h20M9.5 16.5 9 20M14.5 16.5l.5 3.5" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5" />
    </svg>
  ),
}

/* ───────────── piezas visuales ───────────── */

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bm-left" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#34D6F7" />
          <stop offset="1" stopColor="#1F86F2" />
        </linearGradient>
        <linearGradient id="bm-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3E9BFF" />
          <stop offset="1" stopColor="#1747D8" />
        </linearGradient>
      </defs>
      <path
        d="M276 800 V436 L398 312 L512 426"
        fill="none"
        stroke="url(#bm-left)"
        strokeWidth="156"
        strokeLinejoin="round"
      />
      <path
        d="M512 426 L626 312 L748 436 V800"
        fill="none"
        stroke="url(#bm-right)"
        strokeWidth="156"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Diseños de grilla que existen en la app. */
function GridGlyph({ kind, label }: { kind: '2' | '2x2' | '1+5' | '3x3'; label: string }) {
  const cells: Record<string, [number, number, number, number][]> = {
    '2': [
      [0, 0, 29, 40],
      [31, 0, 29, 40],
    ],
    '2x2': [
      [0, 0, 29, 19],
      [31, 0, 29, 19],
      [0, 21, 29, 19],
      [31, 21, 29, 19],
    ],
    '1+5': [
      [0, 0, 39, 26],
      [41, 0, 19, 12],
      [41, 14, 19, 12],
      [0, 28, 19, 12],
      [21, 28, 19, 12],
      [41, 28, 19, 12],
    ],
    '3x3': Array.from({ length: 9 }, (_, i) => [
      (i % 3) * 21,
      Math.floor(i / 3) * 14,
      18,
      12,
    ]) as [number, number, number, number][],
  }
  return (
    <figure className="glyph">
      <svg viewBox="0 0 60 40" width="60" height="40" role="img" aria-label={`Diseño ${label}`}>
        {cells[kind].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="2.5" />
        ))}
      </svg>
      <figcaption>{label}</figcaption>
    </figure>
  )
}

function Kbd({ children }: { children: ReactNode }) {
  return <kbd>{children}</kbd>
}

/* ───────────── secciones ───────────── */

function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="brand" href="#top" aria-label="Matapo, ir al inicio">
          <img src="/brand/matapo-icon.svg" alt="" width="36" height="36" />
          <span>
            Mata<b>po</b>
          </span>
        </a>
        <nav aria-label="Principal">
          <ul className="nav-list">
            <li>
              <a href="#funciones">Funciones</a>
            </li>
            <li>
              <a href="#capturas">Capturas</a>
            </li>
            <li>
              <a href="#plataformas">Plataformas</a>
            </li>
            <li>
              <a href="#creditos">Créditos</a>
            </li>
          </ul>
        </nav>
        <a className="btn btn-quiet header-cta" href={LINKS.repo} target="_blank" rel="noopener">
          <IconGitHub />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <BrandMark className="hero-mark" />
      <div className="wrap">
        <div className="hero-copy">
          <p className="chips" aria-label="Plataformas">
            <span className="chip">Android TV</span>
            <span className="chip">macOS</span>
            <span className="chip chip-soft">Experimental</span>
          </p>
          <h1 id="hero-title">
            Mirá y controlá tus cámaras <span className="grad">Tapo</span> en Android TV y en tu Mac.
          </h1>
          <p className="hero-lead">
            Video en vivo, grillas de varias cámaras, movimiento y modo privacidad. Desde la nube de Tapo o
            directo por tu red local.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={LINKS.repo} target="_blank" rel="noopener">
              <IconGitHub />
              Ver en GitHub
            </a>
            <a className="btn btn-ghost" href={LINKS.install} target="_blank" rel="noopener">
              <IconDownload />
              Descargar
            </a>
          </div>
          <p className="hero-note">
            Todavía no hay instaladores listos: por ahora se compila desde el código y la guía está en el
            README.
          </p>
        </div>

        <div className="hero-shot">
          <div className="shot-glow" aria-hidden="true" />
          <img
            className="shot"
            src="/screenshots/mac-cameras.webp"
            width="1600"
            height="940"
            alt="Matapo en la Mac: lista de cámaras con vista previa en vivo de Living y Puerta, y una cámara con el modo privacidad activado."
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section" aria-labelledby="funciones">
      <div className="wrap">
        <SectionHead
          id="funciones"
          n="01"
          label="Funciones"
          title="Todo lo que necesitás para tener las cámaras a la vista."
          lead="Matapo muestra tus cámaras Tapo con tu cuenta de siempre. Sin abrir puertos, sin VPN y sin estar en la misma red."
        />

        <div className="bento">
          <Reveal className="card card-wide">
            <span className="card-ico">{featureIcons.live}</span>
            <h3>Video en vivo</h3>
            <p>
              Vista previa de cada cámara, con la última imagen apareciendo al instante mientras conecta. La
              vista en grande tiene cerca de un segundo de demora y se reconecta sola si se corta.
            </p>
            <p className="source-tags">
              <span className="tag tag-live">
                <i aria-hidden="true" /> En vivo
              </span>
            </p>
          </Reveal>

          <Reveal className="card card-grids" delay={60}>
            <span className="card-ico">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" {...stroke}>
                <rect x="3" y="3" width="7.5" height="7.5" rx="1.8" />
                <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.8" />
                <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.8" />
                <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.8" />
              </svg>
            </span>
            <h3>Grillas</h3>
            <p>
              Varias cámaras a la vez. Creá, editá y duplicá las tuyas, o usá <em>Todas las cámaras</em>, que
              siempre las muestra a todas. Marcá una favorita para abrirla de una.
            </p>
            <div className="glyphs">
              <GridGlyph kind="2" label="2 lado a lado" />
              <GridGlyph kind="2x2" label="2 × 2" />
              <GridGlyph kind="1+5" label="1 + 5" />
              <GridGlyph kind="3x3" label="3 × 3" />
            </div>
          </Reveal>

          <Reveal className="card" delay={0}>
            <span className="card-ico">{featureIcons.ptz}</span>
            <h3>Movimiento y privacidad</h3>
            <p>
              Mové las cámaras que lo permiten, con pasos de 5°, 10° o 20°. El modo privacidad tapa el lente y
              corta el video.
            </p>
          </Reveal>

          <Reveal className="card" delay={0}>
            <span className="card-ico">{featureIcons.monitor}</span>
            <h3>Monitor desatendido</h3>
            <p>
              Para dejarla prendida todo el día: la pantalla no se apaga, las cámaras que dejan de responder
              vuelven a intentarlo solas y el video congelado se reconecta.
            </p>
          </Reveal>

          <Reveal className="card" delay={60}>
            <span className="card-ico">{featureIcons.mac}</span>
            <h3>Versión de escritorio para Mac</h3>
            <p>
              Una app de escritorio de verdad: barra lateral, menús de macOS, clic derecho, atajos de teclado y
              pantalla completa nativa. El video sigue aunque estés usando otra app.
            </p>
          </Reveal>

          <Reveal className="card card-local" delay={0}>
            <span className="card-ico">{featureIcons.local}</span>
            <h3>Local primero, nube de respaldo</h3>
            <p>
              En casa, el video llega directo desde la cámara por RTSP, con menos demora. Si no responde, o
              estás afuera, pasa solo a la nube de Tapo. Cada cámara te muestra de dónde viene.
            </p>
            <p className="source-tags" aria-label="Origen del video">
              <span className="tag tag-local">
                <i aria-hidden="true" /> Local
              </span>
              <span className="tag tag-cloud">
                <i aria-hidden="true" /> Nube
              </span>
            </p>
          </Reveal>

          <Reveal className="card card-half" delay={60}>
            <span className="card-ico">{featureIcons.lock}</span>
            <h3>Tus contraseñas, bien guardadas</h3>
            <p>
              La contraseña de tu cuenta de Tapo nunca se guarda. Las de las cámaras, si configurás la conexión
              local, van al Llavero de macOS o al almacenamiento cifrado de Android. La verificación TLS sigue
              activa.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const SHOTS = [
  {
    src: '/screenshots/mac-cameras.webp',
    title: 'Cámaras',
    caption: 'Vista previa de cada cámara, con su estado y el origen del video.',
    alt: 'Lista de cámaras en Matapo: Living y Puerta en vivo, y una cámara con el modo privacidad activado.',
  },
  {
    src: '/screenshots/mac-live.webp',
    title: 'Vista en vivo',
    caption: 'Una cámara en grande, con controles y movimiento.',
    alt: 'Vista en vivo de una cámara en grande en Matapo, con los controles de movimiento sobre el video.',
  },
  {
    src: '/screenshots/mac-grids.webp',
    title: 'Grillas',
    caption: 'Tus grillas guardadas y la automática, Todas las cámaras.',
    alt: 'Pantalla de grillas de Matapo con las grillas guardadas y la grilla automática.',
  },
  {
    src: '/screenshots/mac-grid-editor.webp',
    title: 'Editor de grillas',
    caption: 'Un diseño y una cámara para cada celda.',
    alt: 'Editor de grillas de Matapo: se elige un diseño y una cámara para cada celda.',
  },
]

function Screenshots() {
  return (
    <section className="section section-tint" aria-labelledby="capturas">
      <div className="wrap">
        <SectionHead
          id="capturas"
          n="02"
          label="Capturas"
          title="Así se ve en la Mac."
          lead="Las capturas son del modo de prueba, por eso las cámaras muestran una imagen de prueba."
        />
        <div className="shots">
          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={(i % 2) * 80}>
              <figure className="shot-fig">
                <div className="shot-frame">
                  <img src={s.src} width="1600" height="940" alt={s.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption>
                  <strong>{s.title}</strong>
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Platforms() {
  return (
    <section className="section" aria-labelledby="plataformas">
      <div className="wrap">
        <SectionHead
          id="plataformas"
          n="03"
          label="Plataformas"
          title="Una app, dos formas de usarla."
          lead="Las dos pantallas comparten el mismo estado y la misma conexión, pero cada una está pensada para su equipo."
        />
        <div className="platforms">
          <Reveal className="platform platform-tv">
            <div className="platform-top">
              <h3>Android TV</h3>
              <span className="platform-tag">Control remoto</span>
            </div>
            <p>
              Todo se maneja con el control: flechas, <Kbd>OK</Kbd> y <Kbd>Atrás</Kbd>. Un recuadro azul siempre
              muestra dónde estás, y la guía del control aparece en el primer uso.
            </p>
            <ul>
              <li>Mantené OK en una cámara para acciones rápidas.</li>
              <li>CH+ y CH− cambian de cámara o de grilla.</li>
              <li>Los números del 1 al 9 abren esa cámara.</li>
            </ul>
            <p className="req">Android 7.0 (API 24) o posterior.</p>
          </Reveal>

          <Reveal className="platform platform-mac" delay={80}>
            <div className="platform-top">
              <h3>macOS</h3>
              <span className="platform-tag">Mouse y teclado</span>
            </div>
            <p>
              Clic para ver en grande, clic derecho para todas las acciones y botones al pasar el mouse. Las
              flechas del teclado mueven la cámara.
            </p>
            <ul>
              <li>
                <Kbd>⌘1</Kbd> <Kbd>⌘2</Kbd> <Kbd>⌘3</Kbd> para Cámaras, Grillas y Ajustes.
              </li>
              <li>
                <Kbd>F</Kbd> o doble clic para pantalla completa.
              </li>
              <li>
                <Kbd>1</Kbd> a <Kbd>9</Kbd> abren esa cámara.
              </li>
            </ul>
            <p className="req">Apple Silicon o Intel, con macOS 12 o posterior.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Credits() {
  return (
    <section className="section section-tint" aria-labelledby="creditos">
      <div className="wrap">
        <SectionHead id="creditos" n="04" label="Créditos" title="Hecha sobre el trabajo de otros." />
        <div className="credits">
          <Reveal className="credits-main">
            <p className="credit-big">
              Matapo se basa en{' '}
              <a href={LINKS.topoTv} target="_blank" rel="noopener">
                Topo TV
              </a>{' '}
              de{' '}
              <a href={LINKS.abdul} target="_blank" rel="noopener">
                Abdul Momin Sakib
              </a>
              , que a su vez se basa en{' '}
              <a href={LINKS.topo} target="_blank" rel="noopener">
                Topo
              </a>{' '}
              de{' '}
              <a href={LINKS.filirnd} target="_blank" rel="noopener">
                filirnd
              </a>
              .
            </p>
            <p>
              Todo el mérito de la app original es suyo: Matapo parte de su código, con su historial de commits,
              y la investigación de la nube de Tapo viene de Topo. Se distribuye bajo la{' '}
              <a href={LINKS.license} target="_blank" rel="noopener">
                licencia MIT
              </a>
              .
            </p>
          </Reveal>
          <Reveal className="credits-adds" delay={80}>
            <h3>Lo que agrega Matapo</h3>
            <ul>
              <li>Una versión de escritorio para macOS.</li>
              <li>La interfaz completa en español.</li>
              <li>Uso como monitor desatendido.</li>
              <li>Grillas en baja resolución, para que entren más cámaras.</li>
              <li>Conexión local por RTSP, con la nube como respaldo.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Notice() {
  return (
    <section className="section section-notice" aria-labelledby="aviso">
      <div className="wrap">
        <Reveal className="notice">
          <div className="notice-badge" aria-hidden="true">
            !
          </div>
          <div>
            <h2 id="aviso">App no oficial y experimental.</h2>
            <p>
              Matapo no está afiliada a TP-Link. Usa los mismos servicios no documentados de la nube de Tapo que
              la app de escritorio Topo, así que puede dejar de funcionar si Tapo los cambia. Tapo y TP-Link son
              marcas de TP-Link; este proyecto no tiene relación con ellas ni cuenta con su aval.
            </p>
            <p className="notice-limits">
              Hoy es solo video, sin audio ni grabaciones, y necesita conexión a internet y una cuenta de Tapo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div className="footer-brand">
          <img src="/brand/matapo-icon.svg" alt="" width="40" height="40" />
          <div>
            <p className="footer-made">
              Hecha por{' '}
              <a href={LINKS.portfolio} target="_blank" rel="noopener">
                Matías Morales
              </a>
            </p>
            <p className="footer-small">Matapo es un proyecto personal, de código abierto bajo licencia MIT.</p>
          </div>
        </div>
        <ul className="social" aria-label="Links de Matías Morales">
          <li>
            <a href={LINKS.portfolio} target="_blank" rel="noopener">
              <IconGlobe />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener">
              <IconGitHub />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noopener">
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <span id="top" />
        <Hero />
        <Features />
        <Screenshots />
        <Platforms />
        <Credits />
        <Notice />
      </main>
      <Footer />
    </>
  )
}

