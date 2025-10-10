import Link from "next/link";

const AvisoPrivacidadContent = () => {
   return (
      <div className="simple-privacy-section py-5">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="privacy-content bg-white p-5 rounded shadow-sm">
                     
                     <div className="text-center mb-5" style={{marginTop: '120px'}}>
                        <h2 className="text-primary mb-3">Aviso de Privacidad</h2>
                        <p className="text-muted">Última actualización: Enero 2025</p>
                     </div>

                     <hr className="my-4" />

                     {/* Marco Legal */}
                     <section className="mb-5">
                        <div className="alert alert-info">
                           <h6 className="mb-3">Este aviso cumple con:</h6>
                           <ul className="mb-0">
                              <li>🇲🇽 Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP – México)</li>
                              <li>🇪🇺 Règlement Général sur la Protection des Données (RGPD – Europe)</li>
                              <li>🇺🇸 California Consumer Privacy Act (CCPA – Californie, USA)</li>
                           </ul>
                        </div>
                     </section>

                     {/* Responsable */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Responsable del tratamiento de datos</h4>
                        <div className="card border-light">
                           <div className="card-body">
                              <p><strong>Denominación:</strong> FRANCISCO JAVIER CERVANTES COSTE</p>
                              <p><strong>RFC:</strong> CECF62091279A</p>
                              <p><strong>Dirección:</strong> Avenida Plutarcos Elias Calle No. 661, Interior 204-205<br />
                              Colonia Nueva Santa Anita, Iztacalco, C.P. 08210, Ciudad de México, México</p>
                              <p><strong>Teléfono:</strong> +52 55 8796 0451</p>
                              <p><strong>Email:</strong> info@cervantesbienesraices.com</p>
                           </div>
                        </div>
                     </section>

                     {/* Finalidades */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Finalidad del tratamiento de los datos personales</h4>
                        <p>Los datos personales que usted proporcione serán utilizados para las siguientes finalidades primarias:</p>
                        <ul>
                           <li>Contactarlo en relación con los servicios inmobiliarios ofrecidos</li>
                           <li>Elaborar, gestionar o celebrar contratos de arrendamiento, compraventa o intermediación</li>
                           <li>Brindar asesoría personalizada en materia de inversión, compraventa o renta de inmuebles</li>
                           <li>Cumplir con obligaciones legales, fiscales o contractuales derivadas de las operaciones</li>
                           <li>Mantener actualizada la base de datos de clientes, proveedores y colaboradores</li>
                        </ul>
                        
                        <div className="alert alert-warning">
                           <h6>Finalidades secundarias (opcionales):</h6>
                           <ul className="mb-0">
                              <li>Envío de boletines, promociones o información comercial</li>
                              <li>Evaluar la satisfacción del cliente y mejorar la calidad del servicio</li>
                           </ul>
                           <small className="text-muted">Si no desea que sus datos sean utilizados para estas finalidades secundarias, puede manifestarlo enviando un correo a <strong>privacidad@cervantesbienesraices.com</strong></small>
                        </div>
                     </section>

                     {/* Datos recabados */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Datos personales recabados</h4>
                        <p>CERVANTES BIENES RAÍCES podrá recopilar los siguientes datos personales:</p>
                        <div className="row">
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Identificación: nombre, apellidos, fecha de nacimiento, nacionalidad</li>
                                 <li className="list-group-item">Contacto: teléfono, correo electrónico, dirección</li>
                              </ul>
                           </div>
                           <div className="col-md-6">
                              <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Datos financieros: información bancaria o fiscal</li>
                                 <li className="list-group-item">Datos patrimoniales: información sobre inmuebles, contratos, escrituras</li>
                              </ul>
                           </div>
                        </div>
                     </section>

                     {/* Transferencias */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Transferencia y almacenamiento de datos</h4>
                        <p>Sus datos personales <strong>no serán transferidos a terceros</strong> sin su consentimiento expreso, salvo en los siguientes casos:</p>
                        <ul>
                           <li>Autoridades competentes en cumplimiento de la legislación mexicana</li>
                           <li>Notarios, corredores públicos o instituciones financieras que participen en las operaciones</li>
                           <li>Plataformas tecnológicas contratadas para la gestión de clientes y seguridad de información</li>
                        </ul>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           Todos los terceros con los que se comparten datos cumplen con las normas de confidencialidad establecidas por la LFPDPPP y el RGPD.
                        </div>
                     </section>

                     {/* Derechos ARCO */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h4>
                        <p>Usted tiene derecho a:</p>
                        
                        <div className="row">
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-eye fa-2x text-primary mb-2"></i>
                                    <h6>Acceder</h6>
                                    <small>A sus datos personales</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-edit fa-2x text-success mb-2"></i>
                                    <h6>Rectificar</h6>
                                    <small>Datos inexactos</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-trash fa-2x text-danger mb-2"></i>
                                    <h6>Cancelar</h6>
                                    <small>Sus datos</small>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 mb-3">
                              <div className="card text-center h-100">
                                 <div className="card-body">
                                    <i className="fa-solid fa-ban fa-2x text-warning mb-2"></i>
                                    <h6>Oponerse</h6>
                                    <small>Al tratamiento</small>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card border-primary">
                           <div className="card-body">
                              <h6>Para ejercer estos derechos:</h6>
                              <p>Envíe una solicitud a: <strong>privacidad@cervantesbienesraices.com</strong></p>
                              <p>Su solicitud debe contener:</p>
                              <ul>
                                 <li>Nombre completo y medio de contacto</li>
                                 <li>Documentos que acrediten su identidad</li>
                                 <li>Descripción clara de los datos sobre los que desea ejercer derechos</li>
                              </ul>
                              <p className="mb-0"><strong>Plazo de respuesta:</strong> 20 días hábiles. Efectividad: 15 días hábiles adicionales.</p>
                           </div>
                        </div>

                        <div className="text-center mt-3">
                           <Link href="/solicitud-arco" className="btn btn-primary btn-lg">
                              <i className="fa-solid fa-file-alt me-2"></i>
                              Ejercer mis Derechos ARCO
                           </Link>
                        </div>
                     </section>

                     {/* Seguridad */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Medidas de seguridad</h4>
                        <div className="alert alert-success">
                           <i className="fa-solid fa-shield-alt me-2"></i>
                           <strong>CERVANTES BIENES RAÍCES</strong> implementa medidas administrativas, técnicas y físicas necesarias para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
                        </div>
                        <p>Los datos se almacenan en sistemas protegidos mediante:</p>
                        <ul>
                           <li>Autenticación segura</li>
                           <li>Encriptación de datos</li>
                           <li>Protocolos HTTPS certificados</li>
                        </ul>
                     </section>

                     {/* Conservación */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Conservación de los datos</h4>
                        <p>Los datos personales se conservarán por el tiempo que sea necesario para cumplir con las finalidades antes descritas y conforme a los plazos previstos por la legislación aplicable.</p>
                     </section>

                     {/* Cumplimiento Internacional */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Cumplimiento internacional (RGPD / CCPA)</h4>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="card border-primary h-100">
                                 <div className="card-header bg-primary text-white">
                                    🇪🇺 Unión Europea (RGPD)
                                 </div>
                                 <div className="card-body">
                                    <p>Si usted reside en la UE, trataremos sus datos conforme al artículo 6 del RGPD:</p>
                                    <ul className="small">
                                       <li>Consentimiento explícito</li>
                                       <li>Ejecución de contrato</li>
                                       <li>Cumplimiento legal</li>
                                       <li>Interés legítimo</li>
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
                                    <p>Los usuarios en California pueden ejercer derechos CCPA:</p>
                                    <ul className="small">
                                       <li>Derecho a conocer</li>
                                       <li>Derecho a eliminar</li>
                                       <li>Derecho a limitar uso</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* Cambios */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Cambios en el Aviso de Privacidad</h4>
                        <div className="alert alert-warning">
                           <i className="fa-solid fa-exclamation-triangle me-2"></i>
                           Este Aviso puede ser modificado o actualizado en cualquier momento. Cualquier cambio será publicado en:
                           <br /><strong>www.cervantesbienesraices.com/aviso-privacidad</strong>
                        </div>
                     </section>

                     {/* Contacto final */}
                     <section className="mb-5">
                        <h4 className="text-primary mb-3">Contacto de privacidad</h4>
                        <div className="card bg-light">
                           <div className="card-body">
                              <p><strong>Para cualquier duda o solicitud relacionada con este Aviso:</strong></p>
                              <p>
                                 <i className="fa-solid fa-user me-2 text-primary"></i>
                                 <strong>Responsable:</strong> Francisco Javier Cervantes Coste
                              </p>
                              <p>
                                 <i className="fa-solid fa-envelope me-2 text-primary"></i>
                                 <strong>Email:</strong> privacidad@cervantesbienesraices.com
                              </p>
                              <p>
                                 <i className="fa-solid fa-phone me-2 text-primary"></i>
                                 <strong>Teléfono:</strong> +52 55 8796 0451
                              </p>
                           </div>
                        </div>
                     </section>

                     <hr />
                     
                     <div className="text-center text-muted">
                        <small>
                           <strong>CERVANTES BIENES RAÍCES</strong> - Aviso de Privacidad actualizado en Octubre 2025
                           <br />Cumple con LFPDPPP (México), RGPD (Europa) y CCPA (California, USA)
                        </small>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AvisoPrivacidadContent;
