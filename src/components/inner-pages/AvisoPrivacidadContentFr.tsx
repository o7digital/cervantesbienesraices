import Link from "next/link";

const AvisoPrivacidadContentFr = () => {
   return (
      <div className="simple-privacy-section py-5">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="privacy-content bg-white p-5 rounded shadow-sm">
                     
                     <div className="text-center mb-5" style={{marginTop: '120px'}}>
                        <h2 className="text-primary mb-3">Politique de Confidentialité</h2>
                        <p className="text-muted">Dernière mise à jour : Janvier 2025</p>
                     </div>

                     <hr className="my-4" />

                     {/* Marco Legal */}
                     <section className="mb-5">
                        <div className="alert alert-info">
                           <h6 className="mb-3">Cette politique respecte :</h6>
                           <ul className="mb-0">
                              <li>🇲🇽 Loi fédérale sur la protection des données personnelles détenues par des particuliers (LFPDPPP – Mexique)</li>
                              <li>🇪🇺 Règlement Général sur la Protection des Données (RGPD – Europe)</li>
                              <li>🇺🇸 California Consumer Privacy Act (CCPA – Californie, USA)</li>
                           </ul>
                        </div>
                     </section>

                     {/* Responsable */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Responsable du traitement des données</h4>
                        <div className="card border-light">
                           <div className="card-body">
                              <p><strong>Dénomination :</strong> FRANCISCO JAVIER CERVANTES COSTE</p>
                              <p><strong>RFC :</strong> CECF62091279A</p>
                              <p><strong>Adresse :</strong> Avenida Plutarcos Elias Calle No. 661, Interior 204-205<br />
                              Colonia Nueva Santa Anita, Iztacalco, C.P. 08210, Ciudad de México, México</p>
                              <p><strong>Téléphone :</strong> +52 55 8796 0451</p>
                              <p><strong>Email :</strong> info@cervantesbienesraices.com</p>
                           </div>
                        </div>
                     </section>

                     {/* Finalidades */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Finalité du traitement des données personnelles</h4>
                        <p>Les données personnelles que vous fournissez seront utilisées aux fins principales suivantes :</p>
                        <ul>
                           <li>Vous contacter concernant les services immobiliers proposés</li>
                           <li>Élaborer, gérer ou conclure des contrats de location, de vente ou d&apos;intermédiation</li>
                           <li>Fournir des conseils personnalisés en matière d&apos;investissement, d&apos;achat ou de location de biens immobiliers</li>
                           <li>Respecter les obligations légales, fiscales ou contractuelles découlant des opérations</li>
                           <li>Maintenir à jour la base de données des clients, fournisseurs et collaborateurs</li>
                        </ul>
                        
                        <div className="alert alert-warning">
                           <h6>Finalités secondaires (facultatives) :</h6>
                           <ul className="mb-0">
                              <li>Envoi de bulletins d&apos;information, promotions ou informations commerciales</li>
                              <li>Évaluer la satisfaction client et améliorer la qualité du service</li>
                           </ul>
                           <small className="text-muted">Si vous ne souhaitez pas que vos données soient utilisées à ces fins secondaires, vous pouvez l&apos;indiquer en envoyant un e-mail à <strong>privacidad@cervantesbienesraices.com</strong></small>
                        </div>
                     </section>

                     {/* Datos recabados */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Données personnelles collectées</h4>
                        <p>CERVANTES BIENES RAÍCES peut collecter les données personnelles suivantes :</p>
                        <div className="row">
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Identification : nom, prénoms, date de naissance, nationalité</li>
                                 <li className="list-group-item">Contact : téléphone, adresse e-mail, adresse postale</li>
                              </ul>
                           </div>
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Données financières : informations bancaires ou fiscales</li>
                                 <li className="list-group-item">Données patrimoniales : informations sur les biens immobiliers, contrats, actes</li>
                              </ul>
                           </div>
                        </div>
                     </section>

                     {/* Transferencias */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Transfert et stockage des données</h4>
                        <p>Vos données personnelles <strong>ne seront pas transférées à des tiers</strong> sans votre consentement explicite, sauf dans les cas suivants :</p>
                        <ul>
                           <li>Autorités compétentes en application de la législation mexicaine</li>
                           <li>Notaires, courtiers publics ou institutions financières participant aux opérations</li>
                           <li>Plateformes technologiques contractées pour la gestion des clients et la sécurité de l&apos;information</li>
                        </ul>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           Tous les tiers avec lesquels les données sont partagées respectent les normes de confidentialité établies par la LFPDPPP et le RGPD.
                        </div>
                     </section>

                     {/* Derechos ARCO */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Droits ARCO (Accès, Rectification, Annulation et Opposition)</h4>
                        <p>Vous avez le droit de :</p>
                        
                        <div className="row">
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-eye fa-2x text-primary mb-2"></i>
                                    <h6>Accéder</h6>
                                    <small>À vos données personnelles</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-edit fa-2x text-success mb-2"></i>
                                    <h6>Rectifier</h6>
                                    <small>Données inexactes</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-trash fa-2x text-danger mb-2"></i>
                                    <h6>Annuler</h6>
                                    <small>Vos données</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-ban fa-2x text-warning mb-2"></i>
                                    <h6>S&apos;opposer</h6>
                                    <small>Au traitement</small>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card border-primary">
                           <div className="card-body">
                              <h6>Pour exercer ces droits :</h6>
                              <p>Envoyez une demande à : <strong>privacidad@cervantesbienesraices.com</strong></p>
                              <p>Votre demande doit contenir :</p>
                              <ul>
                                 <li>Nom complet et moyen de contact</li>
                                 <li>Documents attestant votre identité</li>
                                 <li>Description claire des données sur lesquelles vous souhaitez exercer vos droits</li>
                              </ul>
                              <p className="mb-0"><strong>Délai de réponse :</strong> 20 jours ouvrables. Efficacité : 15 jours ouvrables supplémentaires.</p>
                           </div>
                        </div>

                        <div className="text-center mt-3">
                           <Link href="/solicitud-arco" className="btn btn-primary btn-lg">
                              <i className="fa-solid fa-file-alt me-2"></i>
                              Exercer mes Droits ARCO
                           </Link>
                        </div>
                     </section>

                     {/* Seguridad */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Mesures de sécurité</h4>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           <strong>CERVANTES BIENES RAÍCES</strong> met en œuvre les mesures administratives, techniques et physiques nécessaires pour protéger vos données personnelles contre les dommages, pertes, altérations, destructions ou utilisations non autorisées.
                        </div>
                        <p>Les données sont stockées dans des systèmes protégés par :</p>
                        <ul>
                           <li>Authentification sécurisée</li>
                           <li>Chiffrement des données</li>
                           <li>Protocoles HTTPS certifiés</li>
                        </ul>
                     </section>

                     {/* Conservación */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Conservation des données</h4>
                        <p>Les données personnelles seront conservées le temps nécessaire pour réaliser les finalités décrites ci-dessus et conformément aux délais prévus par la législation applicable.</p>
                     </section>

                     {/* Cumplimiento Internacional */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Conformité internationale (RGPD / CCPA)</h4>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="card border-primary h-100">
                                 <div className="card-header bg-primary text-white">
                                    🇪🇺 Union Européenne (RGPD)
                                 </div>
                                 <div className="card-body">
                                    <p>Si vous résidez dans l&apos;UE, nous traiterons vos données conformément à l&apos;article 6 du RGPD :</p>
                                    <ul className="small">
                                       <li>Consentement explicite</li>
                                       <li>Exécution d&apos;un contrat</li>
                                       <li>Respect d&apos;une obligation légale</li>
                                       <li>Intérêt légitime</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="card border-success h-100">
                                 <div className="card-header bg-success text-white">
                                    🇺🇸 Californie (CCPA)
                                 </div>
                                 <div className="card-body">
                                    <p>Les utilisateurs en Californie peuvent exercer leurs droits CCPA :</p>
                                    <ul className="small">
                                       <li>Droit de savoir</li>
                                       <li>Droit de supprimer</li>
                                       <li>Droit de limiter l&apos;utilisation</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* Cambios */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Modifications de la Politique de Confidentialité</h4>
                        <div className="alert alert-warning">
                           <i className="fa-solid fa-exclamation-triangle me-2"></i>
                           Cette Politique peut être modifiée ou mise à jour à tout moment. Toute modification sera publiée sur :
                           <br /><strong>www.cervantesbienesraices.com/aviso-privacidad</strong>
                        </div>
                     </section>

                     {/* Contacto final */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Contact confidentialité</h4>
                        <div className="card bg-light">
                           <div className="card-body">
                              <p><strong>Pour toute question ou demande liée à cette Politique :</strong></p>
                              <p>
                                 <i className="fa-solid fa-user me-2 text-primary"></i>
                                 <strong>Responsable :</strong> Francisco Javier Cervantes Coste
                              </p>
                              <p>
                                 <i className="fa-solid fa-envelope me-2 text-primary"></i>
                                 <strong>Email :</strong> privacidad@cervantesbienesraices.com
                              </p>
                              <p>
                                 <i className="fa-solid fa-phone me-2 text-primary"></i>
                                 <strong>Téléphone :</strong> +52 55 8796 0451
                              </p>
                           </div>
                        </div>
                     </section>

                     <hr />
                     
                     <div className="text-center text-muted">
                        <small>
                           <strong>CERVANTES BIENES RAÍCES</strong> - Politique de Confidentialité mise à jour en Octobre 2025
                           <br />Conforme à LFPDPPP (Mexique), RGPD (Europe) et CCPA (Californie, USA)
                        </small>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AvisoPrivacidadContentFr;
