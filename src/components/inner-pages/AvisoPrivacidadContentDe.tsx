import Link from "next/link";

const AvisoPrivacidadContentDe = () => {
  return (
    <div className="simple-privacy-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="privacy-content bg-white p-5 rounded shadow-sm">
              <div className="text-center mb-5" style={{ marginTop: "120px" }}>
                <h2 className="text-primary mb-3">Datenschutzerklärung</h2>
                <p className="text-muted">Zuletzt aktualisiert: Januar 2025</p>
              </div>

              <hr className="my-4" />

              <section className="mb-5">
                <div className="alert alert-info">
                  <h6 className="mb-3">Rechtliche Grundlage</h6>
                  <ul className="mb-0">
                    <li>🇲🇽 Bundesgesetz zum Schutz personenbezogener Daten im Besitz Privater (Mexiko)</li>
                    <li>🇪🇺 Datenschutz-Grundverordnung (DSGVO – EU)</li>
                    <li>🇺🇸 California Consumer Privacy Act (CCPA – Kalifornien, USA)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Verantwortliche Stelle</h4>
                <div className="card border-light">
                  <div className="card-body">
                    <p><strong>Name:</strong> FRANCISCO JAVIER CERVANTES COSTE</p>
                    <p><strong>RFC:</strong> CECF62091279A</p>
                    <p><strong>Adresse:</strong> Avenida Plutarcos Elias Calle No. 661, Interior 204-205<br />
                      Colonia Nueva Santa Anita, Iztacalco, C.P. 08210, Ciudad de México, México</p>
                    <p><strong>Telefon:</strong> +52 55 8796 0451</p>
                    <p><strong>E-Mail:</strong> info@cervantesbienesraices.com</p>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Zwecke der Datenverarbeitung</h4>
                <p>Wir verwenden Ihre personenbezogenen Daten, um:</p>
                <ul>
                  <li>Kontakt zu unseren Immobilienleistungen aufzunehmen</li>
                  <li>Verträge (Kauf, Miete, Vermittlung) zu erstellen oder abzuwickeln</li>
                  <li>Individuelle Beratung für Kauf, Miete oder Investment zu bieten</li>
                  <li>Gesetzliche und steuerliche Pflichten zu erfüllen</li>
                  <li>Eine aktuelle Kunden- und Lieferantendatenbank zu pflegen</li>
                </ul>
                <div className="alert alert-warning">
                  <h6>Sekundäre Zwecke (optional):</h6>
                  <ul className="mb-0">
                    <li>Newsletter, Angebote oder relevante Informationen zusenden</li>
                    <li>Kundenzufriedenheit messen und Servicequalität verbessern</li>
                  </ul>
                  <small className="text-muted">
                    Wenn Sie diese sekundären Zwecke ablehnen möchten, schreiben Sie an <strong>privacidad@cervantesbienesraices.com</strong>.
                  </small>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Welche Daten erheben wir?</h4>
                <p>Wir können folgende Daten verarbeiten:</p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Identifikation: Name, Geburtsdatum, Staatsangehörigkeit</li>
                      <li className="list-group-item">Kontakt: Telefon, E-Mail, Anschrift</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Finanzen: Bank- oder Steuerangaben</li>
                      <li className="list-group-item">Vermögen: Informationen zu Immobilien, Verträgen, Urkunden</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Weitergabe & Speicherung</h4>
                <p>Ihre Daten werden <strong>nicht</strong> ohne Ihre Zustimmung an Dritte weitergegeben, außer:</p>
                <ul>
                  <li>Behörden, wenn dies gesetzlich erforderlich ist</li>
                  <li>Notare, Finanzinstitute oder Makler, die am Vorgang teilnehmen</li>
                  <li>Technologiedienstleister zur sicheren Datenverarbeitung</li>
                </ul>
                <div className="alert alert-success">
                  Alle Empfänger verpflichten sich zur Vertraulichkeit gemäß LFPDPPP und DSGVO.
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">ARCO-Rechte</h4>
                <p>Sie können jederzeit auf Ihre Daten zugreifen, sie berichtigen, löschen oder der Verarbeitung widersprechen.</p>
                <div className="card border-primary">
                  <div className="card-body">
                    <h6>So üben Sie Ihre Rechte aus:</h6>
                    <p>Senden Sie eine Anfrage an <strong>privacidad@cervantesbienesraices.com</strong> mit:</p>
                    <ul>
                      <li>Vollständigem Namen und Kontaktinformationen</li>
                      <li>Nachweis Ihrer Identität</li>
                      <li>Klarer Beschreibung, welche Daten betroffen sind</li>
                    </ul>
                    <p className="mb-0"><strong>Antwortzeit:</strong> 20 Werktage, Umsetzung innerhalb von weiteren 15 Werktagen.</p>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link href="/solicitud-arco" className="btn btn-primary btn-lg">
                    Rechte ausüben
                  </Link>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Sicherheitsmaßnahmen</h4>
                <p>Wir schützen Ihre Daten mit administrativen, technischen und physischen Maßnahmen wie sichere Authentifizierung, Verschlüsselung und HTTPS.</p>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Aufbewahrung</h4>
                <p>Wir speichern personenbezogene Daten nur so lange, wie es für die oben genannten Zwecke und gesetzliche Fristen erforderlich ist.</p>
              </section>

              <section>
                <h4 className="text-primary mb-3">Aktualisierungen</h4>
                <p>Änderungen dieser Datenschutzerklärung veröffentlichen wir auf <strong>cervantesbienesraices.com</strong>. Bitte prüfen Sie sie regelmäßig.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisoPrivacidadContentDe;
