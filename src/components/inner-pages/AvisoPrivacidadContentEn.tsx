import Link from "next/link";

const AvisoPrivacidadContentEn = () => {
   return (
      <div className="simple-privacy-section py-5">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="privacy-content bg-white p-5 rounded shadow-sm">
                     
                     <div className="text-center mb-5" style={{marginTop: '120px'}}>
                        <h2 className="text-primary mb-3">Privacy Policy</h2>
                        <p className="text-muted">Last updated: January 2025</p>
                     </div>

                     <hr className="my-4" />

                     {/* Legal Framework */}
                     <section className="mb-5">
                        <div className="alert alert-info">
                           <h6 className="mb-3">This policy complies with:</h6>
                           <ul className="mb-0">
                              <li>🇲🇽 Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP – Mexico)</li>
                              <li>🇪🇺 General Data Protection Regulation (GDPR – Europe)</li>
                              <li>🇺🇸 California Consumer Privacy Act (CCPA – California, USA)</li>
                           </ul>
                        </div>
                     </section>

                     {/* Data Controller */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Data Controller</h4>
                        <div className="card border-light">
                           <div className="card-body">
                              <p><strong>Name:</strong> FRANCISCO JAVIER CERVANTES COSTE</p>
                              <p><strong>RFC:</strong> CECF62091279A</p>
                              <p><strong>Address:</strong> Avenida Plutarcos Elias Calle No. 661, Interior 204-205<br />
                              Colonia Nueva Santa Anita, Iztacalco, C.P. 08210, Ciudad de México, México</p>
                              <p><strong>Phone:</strong> +52 55 8796 0451</p>
                              <p><strong>Email:</strong> info@cervantesbienesraices.com</p>
                           </div>
                        </div>
                     </section>

                     {/* Purpose */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Purpose of Personal Data Processing</h4>
                        <p>The personal data you provide will be used for the following primary purposes:</p>
                        <ul>
                           <li>Contact you regarding the real estate services offered</li>
                           <li>Prepare, manage, or execute lease, purchase, or intermediation contracts</li>
                           <li>Provide personalized advice on investment, purchase, or rental of properties</li>
                           <li>Fulfill legal, tax, or contractual obligations arising from operations</li>
                           <li>Maintain an updated database of clients, suppliers, and collaborators</li>
                        </ul>
                        
                        <div className="alert alert-warning">
                           <h6>Secondary purposes (optional):</h6>
                           <ul className="mb-0">
                              <li>Sending newsletters, promotions, or commercial information</li>
                              <li>Evaluate customer satisfaction and improve service quality</li>
                           </ul>
                           <small className="text-muted">If you do not wish your data to be used for these secondary purposes, you may express this by sending an email to <strong>privacidad@cervantesbienesraices.com</strong></small>
                        </div>
                     </section>

                     {/* Data Collected */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Personal Data Collected</h4>
                        <p>CERVANTES BIENES RAÍCES may collect the following personal data:</p>
                        <div className="row">
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Identification: name, surname, date of birth, nationality</li>
                                 <li className="list-group-item">Contact: phone, email, address</li>
                              </ul>
                           </div>
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Financial data: banking or tax information</li>
                                 <li className="list-group-item">Patrimonial data: information about properties, contracts, deeds</li>
                              </ul>
                           </div>
                        </div>
                     </section>

                     {/* Transfers */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Transfer and Storage of Data</h4>
                        <p>Your personal data <strong>will not be transferred to third parties</strong> without your express consent, except in the following cases:</p>
                        <ul>
                           <li>Competent authorities in compliance with Mexican legislation</li>
                           <li>Notaries, public brokers, or financial institutions participating in operations</li>
                           <li>Technology platforms contracted for customer management and information security</li>
                        </ul>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           All third parties with whom data is shared comply with confidentiality standards established by LFPDPPP and GDPR.
                        </div>
                     </section>

                     {/* ARCO Rights */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">ARCO Rights (Access, Rectification, Cancellation, and Opposition)</h4>
                        <p>You have the right to:</p>
                        
                        <div className="row">
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-eye fa-2x text-primary mb-2"></i>
                                    <h6>Access</h6>
                                    <small>Your personal data</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-edit fa-2x text-success mb-2"></i>
                                    <h6>Rectify</h6>
                                    <small>Inaccurate data</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-trash fa-2x text-danger mb-2"></i>
                                    <h6>Cancel</h6>
                                    <small>Your data</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-ban fa-2x text-warning mb-2"></i>
                                    <h6>Object</h6>
                                    <small>To processing</small>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card border-primary">
                           <div className="card-body">
                              <h6>To exercise these rights:</h6>
                              <p>Send a request to: <strong>privacidad@cervantesbienesraices.com</strong></p>
                              <p>Your request must contain:</p>
                              <ul>
                                 <li>Full name and contact information</li>
                                 <li>Documents proving your identity</li>
                                 <li>Clear description of the data on which you wish to exercise rights</li>
                              </ul>
                              <p className="mb-0"><strong>Response time:</strong> 20 business days. Effectiveness: 15 additional business days.</p>
                           </div>
                        </div>

                        <div className="text-center mt-3">
                           <Link href="/solicitud-arco" className="btn btn-primary btn-lg">
                              <i className="fa-solid fa-file-alt me-2"></i>
                              Exercise My ARCO Rights
                           </Link>
                        </div>
                     </section>

                     {/* Security */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Security Measures</h4>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           <strong>CERVANTES BIENES RAÍCES</strong> implements necessary administrative, technical, and physical measures to protect your personal data against damage, loss, alteration, destruction, or unauthorized use.
                        </div>
                        <p>Data is stored in systems protected by:</p>
                        <ul>
                           <li>Secure authentication</li>
                           <li>Data encryption</li>
                           <li>Certified HTTPS protocols</li>
                        </ul>
                     </section>

                     {/* Data Retention */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Data Retention</h4>
                        <p>Personal data will be retained for the time necessary to fulfill the purposes described above and in accordance with the periods provided by applicable legislation.</p>
                     </section>

                     {/* International Compliance */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">International Compliance (GDPR / CCPA)</h4>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="card border-primary h-100">
                                 <div className="card-header bg-primary text-white">
                                    🇪🇺 European Union (GDPR)
                                 </div>
                                 <div className="card-body">
                                    <p>If you reside in the EU, we will process your data in accordance with Article 6 of GDPR:</p>
                                    <ul className="small">
                                       <li>Explicit consent</li>
                                       <li>Contract execution</li>
                                       <li>Legal compliance</li>
                                       <li>Legitimate interest</li>
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
                                    <p>Users in California can exercise CCPA rights:</p>
                                    <ul className="small">
                                       <li>Right to know</li>
                                       <li>Right to delete</li>
                                       <li>Right to limit use</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* Changes */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Changes to the Privacy Policy</h4>
                        <div className="alert alert-warning">
                           <i className="fa-solid fa-exclamation-triangle me-2"></i>
                           This Policy may be modified or updated at any time. Any changes will be published at:
                           <br /><strong>www.cervantesbienesraices.com/aviso-privacidad</strong>
                        </div>
                     </section>

                     {/* Privacy Contact */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Privacy Contact</h4>
                        <div className="card bg-light">
                           <div className="card-body">
                              <p><strong>For any questions or requests related to this Policy:</strong></p>
                              <p>
                                 <i className="fa-solid fa-user me-2 text-primary"></i>
                                 <strong>Controller:</strong> Francisco Javier Cervantes Coste
                              </p>
                              <p>
                                 <i className="fa-solid fa-envelope me-2 text-primary"></i>
                                 <strong>Email:</strong> privacidad@cervantesbienesraices.com
                              </p>
                              <p>
                                 <i className="fa-solid fa-phone me-2 text-primary"></i>
                                 <strong>Phone:</strong> +52 55 8796 0451
                              </p>
                           </div>
                        </div>
                     </section>

                     <hr />
                     
                     <div className="text-center text-muted">
                        <small>
                           <strong>CERVANTES BIENES RAÍCES</strong> - Privacy Policy updated in October 2025
                           <br />Complies with LFPDPPP (Mexico), GDPR (Europe), and CCPA (California, USA)
                        </small>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AvisoPrivacidadContentEn;
