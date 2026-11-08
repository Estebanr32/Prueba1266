import { useState, type ReactNode } from "react"

type View = "store" | "donate" | "receipt" | "admin"

const products = [
  {
    name: 'Hoodie "Capacidad Infinita"',
    price: "$125.000",
    image: "29c85.png",
    tag: "Edición especial",
  },
  {
    name: 'Camiseta "Semana Down 2025"',
    price: "$65.000",
    image: "016dc.png",
    tag: "100% solidario",
  },
  {
    name: "Camiseta Edición Arte Puro",
    price: "$78.000",
    image: "4febf.png",
    tag: "Nueva edición",
  },
  {
    name: 'Mug "Buenos Días con Amor"',
    price: "$38.000",
    image: "b944d.png",
    tag: "Más vendido",
  },
  {
    name: 'Termo Barista "Café Up"',
    price: "$55.000",
    image: "3d029.png",
    tag: "Acero inoxidable",
  },
  {
    name: "Café Especial Asisco Seleccionado",
    price: "$32.000",
    image: "41351.png",
    tag: "Origen Colombia",
  },
]

function Button({
  children,
  onClick,
  kind = "primary",
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  kind?: "primary" | "dark" | "ghost"
  className?: string
}) {
  return (
    <button className={`btn btn-${kind} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <button
      className={`logo ${light ? "logo-light" : ""}`}
      onClick={() => location.reload()}
      aria-label="ASISCO inicio"
    >
      <span>a</span>
      <span>s</span>
      <span>i</span>
      <span>s</span>
      <b>c</b>
      <b>o</b>
    </button>
  )
}

function Header({
  view,
  setView,
  dark = false,
}: {
  view: View
  setView: (view: View) => void
  dark?: boolean
}) {
  return (
    <header className={dark ? "header header-dark" : "header"}>
      <Logo light={dark} />
      <nav aria-label="Navegación principal">
        <button
          onClick={() => setView("store")}
          className={view === "store" ? "active" : ""}
        >
          Tienda solidaria
        </button>
        <button
          onClick={() => setView("donate")}
          className={view === "donate" ? "active" : ""}
        >
          Donaciones
        </button>
        <button
          onClick={() => setView("receipt")}
          className={view === "receipt" ? "active" : ""}
        >
          Certificados
        </button>
        <button
          onClick={() => setView("admin")}
          className={view === "admin" ? "active" : ""}
        >
          Portal administrativo
        </button>
      </nav>
      <Button onClick={() => setView("donate")}>Donar ahora</Button>
    </header>
  )
}

function Store({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="page">
      <Header view="store" setView={setView} />
      <div className="impact-bar">
        100% de los beneficios financian programas de autonomía, formación y
        empleo de ASISCO
      </div>
      <main>
        <section className="store-hero">
          <div>
            <p className="eyebrow">TIENDA OFICIAL Y SOLIDARIA</p>
            <h1>
              Moda, Café y Arte con <span>Propósito Inclusivo</span>
            </h1>
            <p>
              Cada producto cuenta una historia única creada en nuestros
              talleres de arte y barismo vocacional.
            </p>
          </div>
          <div className="stats">
            <b>
              148<small>Jóvenes becados</small>
            </b>
            <b>
              3<small>Cafeterías activas</small>
            </b>
          </div>
        </section>
        <section className="donation-banner">
          <div>
            <strong>SEMANA DOWN 2025 · TU APORTE TRANSFORMA VIDAS</strong>
            <br />
            ¿Prefieres hacer una donación monetaria directa a las becas?
          </div>
          <Button onClick={() => setView("donate")}>
            Hacer donación directa →
          </Button>
        </section>
        <section className="catalog">
          <p className="eyebrow">COLECCIÓN TEXTIL CONMEMORATIVA</p>
          <h2>Ropa Solidaria “Capacidad Infinita”</h2>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img
                    src={`/assets/store/${product.image}`}
                    alt={product.name}
                  />
                  <span>{product.tag}</span>
                </div>
                <div className="product-body">
                  <small>PRODUCTO ARTESANAL ASISCO</small>
                  <h3>{product.name}</h3>
                  <p>
                    Creado con talento, dedicación y propósito por nuestra
                    comunidad.
                  </p>
                  <div>
                    <strong>
                      {product.price} <small>COP</small>
                    </strong>
                    <Button>＋ Añadir</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Button className="floating-donate" onClick={() => setView("donate")}>
        ♡ Donar a la causa
      </Button>
    </div>
  )
}

function Donate({ setView }: { setView: (view: View) => void }) {
  const [amount, setAmount] = useState("70.000")
  const [monthly, setMonthly] = useState(true)
  return (
    <div className="donate-page">
      <Header view="donate" setView={setView} dark />
      <main className="donate-main">
        <p className="campaign">CAMPAÑA OFICIAL SEMANA DEL SÍNDROME DE DOWN</p>
        <h1>
          CADA APORTE TRANSFORMA VIDAS:
          <br />
          CONSTRUYAMOS INCLUSIÓN HOY
        </h1>
        <p className="lead">
          Con tu donación te sumas a los programas de formación laboral, arte,
          barismo inclusivo y autonomía integral de ASISCO en Colombia.
        </p>
        <div className="toggle-row">
          <button
            className={monthly ? "selected" : ""}
            onClick={() => setMonthly(true)}
          >
            Mensual
          </button>
          <button
            className={!monthly ? "selected" : ""}
            onClick={() => setMonthly(false)}
          >
            Una sola vez
          </button>
        </div>
        <div className="amounts">
          {["50.000", "70.000", "90.000"].map((value) => (
            <button
              key={value}
              className={amount === value ? "selected" : ""}
              onClick={() => setAmount(value)}
            >
              ${value}
            </button>
          ))}
        </div>
        <label>
          <input type="checkbox" /> Quiero ingresar otro monto
        </label>
        <label>
          <input type="checkbox" /> Donar como regalo o en homenaje
        </label>
        <Button className="donate-cta" onClick={() => setView("receipt")}>
          DONAR ${amount} AHORA →
        </Button>
        <div className="secure">
          <b>◈ DONACIÓN 100% SEGURA</b>
          <span>
            Utilizamos tecnología SSL estándar de la industria y pasarelas
            certificadas.
          </span>
        </div>
      </main>
    </div>
  )
}

function CertificateDocument({ onClose }: { onClose: () => void }) {
  return (
    <div className="certificate-overlay" role="dialog" aria-modal="true">
      <div className="certificate-toolbar">
        <Button kind="ghost" onClick={onClose}>
          ← Volver al comprobante
        </Button>
        <Button onClick={() => window.print()}>Descargar / imprimir PDF</Button>
      </div>
      <article className="certificate-paper">
        <header className="certificate-letterhead">
          <div>
            <Logo />
            <strong>UP</strong>
            <small>¡No somos Down, somos UP!</small>
          </div>
          <time>24-02-2025</time>
        </header>
        <p>
          El suscrito Contador Público de la{" "}
          <b>ASOCIACIÓN DE INTERÉS SOCIAL COMUNITARIO ASISCO</b>, entidad sin
          ánimo de lucro identificada con NIT 830.582.114-8, debidamente
          registrada y vigilada por los organismos competentes,
        </p>
        <h1>CERTIFICA</h1>
        <p>
          Que la Asociación de Interés Social Comunitario ASISCO ha recibido del
          señor <b>GONZALO MEJÍA SAINT</b>, identificado con cédula de
          ciudadanía terminada en <b>4812</b>, la suma de{" "}
          <b>SETENTA MIL PESOS M/CTE ($70.000 COP)</b>, mediante donación
          realizada y consignada el día 24 de febrero de 2025.
        </p>
        <p>
          Que ASISCO maneja los ingresos por donaciones mediante
          establecimientos financieros autorizados y cuenta con mecanismos de
          control que garantizan su trazabilidad y destinación.
        </p>
        <p>
          Que los recursos de esta donación serán destinados a programas
          sociales de la <b>ASOCIACIÓN DE INTERÉS SOCIAL COMUNITARIO ASISCO</b>,
          orientados a la formación laboral, arte, barismo inclusivo,
          acompañamiento psicosocial y autonomía de jóvenes con síndrome de Down
          y sus familias.
        </p>
        <p>
          De conformidad con la legislación tributaria vigente, esta
          certificación se expide como constancia de la donación recibida. Su
          aplicación fiscal deberá ser validada por el donante de acuerdo con su
          situación tributaria.
        </p>
        <p>Se expide a solicitud del interesado el 24 de febrero de 2025.</p>
        <div className="certificate-signatures">
          <div>
            <span className="signature">Juan Guillermo Osorio G.</span>
            <b>JUAN GUILLERMO OSORIO G.</b>
            <small>Revisor Fiscal · T.P. 106626-T</small>
          </div>
          <div>
            <span className="signature">Consuelo Giraldo</span>
            <b>CONSUELO GIRALDO ZULUAGA</b>
            <small>Representante Legal</small>
          </div>
        </div>
        <footer className="certificate-footer">
          <b>Calle 58 #23-30 · Manizales, Caldas, Colombia</b>
          <span>300 267 50 41 · contacto@asisco.org.co · asisco.org.co</span>
        </footer>
      </article>
    </div>
  )
}

function Receipt({ setView }: { setView: (view: View) => void }) {
  const [showCertificate, setShowCertificate] = useState(false)

  return (
    <div className="page receipt-page">
      <Header view="receipt" setView={setView} />
      <main>
        <section className="thanks">
          <div className="heart">
            ♥<i>✓</i>
          </div>
          <p className="badge">Aporte confirmado · impacto inmediato</p>
          <h1>
            ¡Gracias de corazón por
            <br />
            transformar vidas!
          </h1>
          <p>
            Tu aporte impulsa la autonomía, formación artística y empleo digno
            de jóvenes con síndrome de Down Colombia.
          </p>
        </section>
        <section className="receipt-layout">
          <article className="receipt-card">
            <div className="receipt-title">
              <div>
                <small>COMPROBANTE OFICIAL ELECTRÓNICO</small>
                <h2>Recibo de Donación</h2>
              </div>
              <span>Aprobado y confirmado</span>
            </div>
            <dl>
              <div>
                <dt>Modalidad del aporte</dt>
                <dd>Donación Mensual Recurrente</dd>
              </div>
              <div>
                <dt>Monto aportado</dt>
                <dd className="amount">$70.000 COP</dd>
              </div>
              <div>
                <dt>Fecha y hora</dt>
                <dd>24 de febrero, 2025 · 10:42 AM</dd>
              </div>
              <div>
                <dt>Método de pago</dt>
                <dd>Tarjeta Débito/Crédito •••• 4812</dd>
              </div>
              <div>
                <dt>Seguridad</dt>
                <dd>✓ Cifrado seguro SSL de 256 bits</dd>
              </div>
            </dl>
            <div className="receipt-actions">
              <Button onClick={() => setShowCertificate(true)}>
                ▣ Ver certificado de donación
              </Button>
              <Button kind="ghost">Enviar copia a mi correo</Button>
            </div>
          </article>
          <aside className="impact-card">
            <p className="eyebrow">TRANSPARENCIA TOTAL</p>
            <h2>¿A dónde va tu aporte?</h2>
            <p>
              Con tu cuota de $70.000 COP aseguras directamente estos tres
              módulos de desarrollo:
            </p>
            {[
              "3 Semanas de Formación Barista",
              "Materiales Adaptados de Pintura",
              "Acompañamiento Psicosocial",
            ].map((item, index) => (
              <div className="impact-item" key={item}>
                <b>{index + 1}</b>
                <span>{item}</span>
              </div>
            ))}
          </aside>
        </section>
        <blockquote>
          <img
            src="/assets/receipt/809f8.png"
            alt="Mateo Gómez, aprendiz barista"
          />
          <div>
            “Gracias por creer en mis capacidades. Cada día que aprendo en la
            cafetería estoy más cerca de mi sueño.”
            <cite>Mateo Gómez · Aprendiz Barista</cite>
          </div>
        </blockquote>
      </main>
      <Footer />
      {showCertificate && (
        <CertificateDocument onClose={() => setShowCertificate(false)} />
      )}
    </div>
  )
}

function Field({ label, children }: { label: string children: ReactNode }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  )
}

function Admin({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="admin-page">
      <aside className="sidebar">
        <Logo />
        <small>ADMINISTRACIÓN</small>
        {[
          "Panel general",
          "Donaciones & padrinos",
          "Semana Down 2025",
          "Tienda solidaria",
          "Familias & beneficiarios",
        ].map((item) => (
          <button
            className={item === "Tienda solidaria" ? "active" : ""}
            key={item}
          >
            {item}
          </button>
        ))}
      </aside>
      <main>
        <section className="admin-head">
          <div>
            <p>Tienda Solidaria › Nuevo artículo</p>
            <h1>
              Agregar nuevo producto a<br />
              la Tienda Solidaria
            </h1>
            <span>
              Cada producto publicado impulsa directamente los talleres
              formativos.
            </span>
          </div>
          <div>
            <Button kind="ghost" onClick={() => setView("store")}>
              ← Volver al catálogo
            </Button>
            <Button>Publicar producto</Button>
          </div>
        </section>
        <div className="admin-grid">
          <div>
            <section className="panel">
              <h2>Identificación del producto</h2>
              <Field label="Nombre del producto">
                <input defaultValue="Camiseta Ilustrada - Taller de Arte 2025" />
              </Field>
              <Field label="Categoría de tienda">
                <select defaultValue="Ropa & Hoodies">
                  <option>Ropa & Hoodies</option>
                  <option>Mugs & Cafetería</option>
                </select>
              </Field>
              <Field label="Historia detrás del producto">
                <textarea defaultValue="Ilustración original creada por los jóvenes del Taller de Expresión Artística ASISCO. Una historia de autonomía, amistad y orgullo Down." />
              </Field>
            </section>
            <section className="panel">
              <h2>Estructura de aporte solidario</h2>
              <div className="three-fields">
                <Field label="Precio al público">
                  <input defaultValue="$ 65.000" />
                </Field>
                <Field label="Costo de producción">
                  <input defaultValue="$ 22.500" />
                </Field>
                <Field label="Aporte social neto">
                  <input defaultValue="$42.500" />
                </Field>
              </div>
              <p className="notice">
                El 100% del margen neto se destina al programa de becas.
              </p>
            </section>
          </div>
          <div>
            <section className="panel">
              <h2>Fotografías de producto</h2>
              <div className="upload">
                ☁<br />
                <b>Arrastra hasta 4 imágenes</b>
                <small>JPG, PNG o WebP · Máx. 5MB</small>
              </div>
            </section>
            <section className="panel preview">
              <p className="eyebrow">VISTA PREVIA EN VIVO</p>
              <img
                src="/assets/admin/ecf18.png"
                alt="Vista previa del producto"
              />
              <h3>Camiseta Ilustrada – Taller</h3>
              <strong>$65.000 COP</strong>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <Logo />
      <div>
        <b>Líneas de ayuda y contacto</b>
        <span>Línea familiar 24/7: 900 555 321</span>
        <span>contacto@asisco.org.co</span>
      </div>
      <div>
        <b>Accesibilidad e inclusión</b>
        <span>WCAG AAA · Documentación en lectura fácil</span>
      </div>
      <div>
        <b>Boletín informativo</b>
        <span>Recibe novedades e historias de impacto.</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [view, setView] = useState<View>("store")
  return view === "donate" ? (
    <Donate setView={setView} />
  ) : view === "receipt" ? (
    <Receipt setView={setView} />
  ) : view === "admin" ? (
    <Admin setView={setView} />
  ) : (
    <Store setView={setView} />
  )
}
