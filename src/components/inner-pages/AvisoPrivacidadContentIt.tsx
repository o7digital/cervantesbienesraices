import Link from "next/link";

const AvisoPrivacidadContentIt = () => {
   return (
      <div className="simple-privacy-section py-5">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="privacy-content bg-white p-5 rounded shadow-sm">
                     
                     <div className="text-center mb-5" style={{marginTop: '120px'}}>
                        <h2 className="text-primary mb-3">Informativa sulla Privacy</h2>
                        <p className="text-muted">Ultimo aggiornamento: Gennaio 2025</p>
                     </div>

                     <hr className="my-4" />

                     {/* Marco Legal */}
                     <section className="mb-5">
                        <div className="alert alert-info">
                           <h6 className="mb-3">Questa informativa è conforme a:</h6>
                           <ul className="mb-0">
                              <li>🇲🇽 Legge Federale sulla Protezione dei Dati Personali in Possesso di Privati (LFPDPPP – Messico)</li>
                              <li>🇪🇺 Regolamento Generale sulla Protezione dei Dati (GDPR – Europa)</li>
                              <li>🇺🇸 California Consumer Privacy Act (CCPA – California, USA)</li>
                           </ul>
                        </div>
                     </section>

                     {/* Responsable */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Responsabile del trattamento dei dati</h4>
                        <div className="card border-light">
                           <div className="card-body">
                              <p><strong>Denominazione:</strong> FRANCISCO JAVIER CERVANTES COSTE</p>
                              <p><strong>RFC:</strong> CECF62091279A</p>
                              <p><strong>Indirizzo:</strong> Avenida Plutarcos Elias Calle No. 661, Interior 204-205<br />
                              Colonia Nueva Santa Anita, Iztacalco, C.P. 08210, Ciudad de México, México</p>
                              <p><strong>Telefono:</strong> +52 55 8796 0451</p>
                              <p><strong>Email:</strong> info@cervantesbienesraices.com</p>
                           </div>
                        </div>
                     </section>

                     {/* Finalidades */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Finalità del trattamento dei dati personali</h4>
                        <p>I dati personali da Lei forniti saranno utilizzati per le seguenti finalità primarie:</p>
                        <ul>
                           <li>Contattarla in relazione ai servizi immobiliari offerti</li>
                           <li>Elaborare, gestire o stipulare contratti di locazione, compravendita o intermediazione</li>
                           <li>Fornire consulenza personalizzata in materia di investimento, compravendita o affitto di immobili</li>
                           <li>Adempiere agli obblighi legali, fiscali o contrattuali derivanti dalle operazioni</li>
                           <li>Mantenere aggiornata la base dati di clienti, fornitori e collaboratori</li>
                        </ul>
                        
                        <div className="alert alert-warning">
                           <h6>Finalità secondarie (facoltative):</h6>
                           <ul className="mb-0">
                              <li>Invio di newsletter, promozioni o informazioni commerciali</li>
                              <li>Valutare la soddisfazione del cliente e migliorare la qualità del servizio</li>
                           </ul>
                           <small className="text-muted">Se non desidera che i Suoi dati siano utilizzati per queste finalità secondarie, può comunicarcelo inviando un&apos;email a <strong>privacidad@cervantesbienesraices.com</strong></small>
                        </div>
                     </section>

                     {/* Datos recabados */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Dati personali raccolti</h4>
                        <p>CERVANTES BIENES RAÍCES può raccogliere i seguenti dati personali:</p>
                        <div className="row">
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Identificazione: nome, cognomi, data di nascita, nazionalità</li>
                                 <li className="list-group-item">Contatto: telefono, email, indirizzo</li>
                              </ul>
                           </div>
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Dati finanziari: informazioni bancarie o fiscali</li>
                                 <li className="list-group-item">Dati patrimoniali: informazioni su immobili, contratti, atti</li>
                              </ul>
                           </div>
                        </div>
                     </section>

                     {/* Transferencias */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Trasferimento e archiviazione dei dati</h4>
                        <p>I Suoi dati personali <strong>non saranno trasferiti a terzi</strong> senza il Suo consenso esplicito, salvo nei seguenti casi:</p>
                        <ul>
                           <li>Autorità competenti in adempimento della legislazione messicana</li>
                           <li>Notai, mediatori pubblici o istituzioni finanziarie che partecipano alle operazioni</li>
                           <li>Piattaforme tecnologiche contrattate per la gestione dei clienti e la sicurezza delle informazioni</li>
                        </ul>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           Tutti i terzi con cui vengono condivisi i dati rispettano le norme di riservatezza stabilite dalla LFPDPPP e dal GDPR.
                        </div>
                     </section>

                     {/* Derechos ARCO */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Diritti ARCO (Accesso, Rettifica, Cancellazione e Opposizione)</h4>
                        <p>Lei ha il diritto di:</p>
                        
                        <div className="row">
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-eye fa-2x text-primary mb-2"></i>
                                    <h6>Accedere</h6>
                                    <small>Ai Suoi dati personali</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-edit fa-2x text-success mb-2"></i>
                                    <h6>Rettificare</h6>
                                    <small>Dati inesatti</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-trash fa-2x text-danger mb-2"></i>
                                    <h6>Cancellare</h6>
                                    <small>I Suoi dati</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-ban fa-2x text-warning mb-2"></i>
                                    <h6>Opporsi</h6>
                                    <small>Al trattamento</small>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card border-primary">
                           <div className="card-body">
                              <h6>Per esercitare questi diritti:</h6>
                              <p>Invii una richiesta a: <strong>privacidad@cervantesbienesraices.com</strong></p>
                              <p>La Sua richiesta deve contenere:</p>
                              <ul>
                                 <li>Nome completo e mezzo di contatto</li>
                                 <li>Documenti che attestino la Sua identità</li>
                                 <li>Descrizione chiara dei dati sui quali desidera esercitare i diritti</li>
                              </ul>
                              <p className="mb-0"><strong>Termine di risposta:</strong> 20 giorni lavorativi. Efficacia: 15 giorni lavorativi aggiuntivi.</p>
                           </div>
                        </div>

                        <div className="text-center mt-3">
                           <Link href="/solicitud-arco" className="btn btn-primary btn-lg">
                              <i className="fa-solid fa-file-alt me-2"></i>
                              Esercitare i miei Diritti ARCO
                           </Link>
                        </div>
                     </section>

                     {/* Seguridad */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Misure di sicurezza</h4>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           <strong>CERVANTES BIENES RAÍCES</strong> implementa le misure amministrative, tecniche e fisiche necessarie per proteggere i Suoi dati personali da danni, perdite, alterazioni, distruzioni o usi non autorizzati.
                        </div>
                        <p>I dati sono archiviati in sistemi protetti mediante:</p>
                        <ul>
                           <li>Autenticazione sicura</li>
                           <li>Crittografia dei dati</li>
                           <li>Protocolli HTTPS certificati</li>
                        </ul>
                     </section>

                     {/* Conservación */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Conservazione dei dati</h4>
                        <p>I dati personali saranno conservati per il tempo necessario a soddisfare le finalità sopra descritte e in conformità ai termini previsti dalla legislazione applicabile.</p>
                     </section>

                     {/* Cumplimiento Internacional */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Conformità internazionale (GDPR / CCPA)</h4>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="card border-primary h-100">
                                 <div className="card-header bg-primary text-white">
                                    🇪🇺 Unione Europea (GDPR)
                                 </div>
                                 <div className="card-body">
                                    <p>Se Lei risiede nell&apos;UE, tratteremo i Suoi dati conformemente all&apos;articolo 6 del GDPR:</p>
                                    <ul className="small">
                                       <li>Consenso esplicito</li>
                                       <li>Esecuzione di un contratto</li>
                                       <li>Adempimento di un obbligo legale</li>
                                       <li>Interesse legittimo</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="card border-success h-100">
                                 <div className="card-header bg-success text-white">
                                    🇺🇸 California (CCPA)
                                 </div>
                                 <div className="card-body">
                                    <p>Gli utenti in California possono esercitare i diritti CCPA:</p>
                                    <ul className="small">
                                       <li>Diritto di sapere</li>
                                       <li>Diritto di eliminare</li>
                                       <li>Diritto di limitare l&apos;uso</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* Cambios */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Modifiche all&apos;Informativa sulla Privacy</h4>
                        <div className="alert alert-warning">
                           <i className="fa-solid fa-exclamation-triangle me-2"></i>
                           Questa Informativa può essere modificata o aggiornata in qualsiasi momento. Qualsiasi modifica sarà pubblicata su:
                           <br /><strong>www.cervantesbienesraices.com/aviso-privacidad</strong>
                        </div>
                     </section>

                     {/* Contacto final */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Contatto privacy</h4>
                        <div className="card bg-light">
                           <div className="card-body">
                              <p><strong>Per qualsiasi domanda o richiesta relativa a questa Informativa:</strong></p>
                              <p>
                                 <i className="fa-solid fa-user me-2 text-primary"></i>
                                 <strong>Responsabile:</strong> Francisco Javier Cervantes Coste
                              </p>
                              <p>
                                 <i className="fa-solid fa-envelope me-2 text-primary"></i>
                                 <strong>Email:</strong> privacidad@cervantesbienesraices.com
                              </p>
                              <p>
                                 <i className="fa-solid fa-phone me-2 text-primary"></i>
                                 <strong>Telefono:</strong> +52 55 8796 0451
                              </p>
                           </div>
                        </div>
                     </section>

                     <hr />
                     
                     <div className="text-center text-muted">
                        <small>
                           <strong>CERVANTES BIENES RAÍCES</strong> - Informativa sulla Privacy aggiornata in Ottobre 2025
                           <br />Conforme a LFPDPPP (Messico), GDPR (Europa) e CCPA (California, USA)
                        </small>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AvisoPrivacidadContentIt;
