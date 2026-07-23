import Link from "next/link";

const AvisoPrivacidadContentRu = () => {
  return (
    <div className="simple-privacy-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="privacy-content bg-white p-5 rounded shadow-sm">
              <div className="text-center mb-5" style={{ marginTop: "120px" }}>
                <h2 className="text-primary mb-3">Политика конфиденциальности</h2>
                <p className="text-muted">Последнее обновление: январь 2025 года</p>
              </div>

              <hr className="my-4" />

              <section className="mb-5">
                <div className="alert alert-info">
                  <h6 className="mb-3">Настоящая политика соответствует требованиям:</h6>
                  <ul className="mb-0">
                    <li>Федерального закона Мексики о защите персональных данных, находящихся во владении частных лиц (LFPDPPP)</li>
                    <li>Общего регламента Европейского союза по защите данных (GDPR)</li>
                    <li>Закона штата Калифорния о защите конфиденциальности потребителей (CCPA)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Оператор персональных данных</h4>
                <div className="card border-light">
                  <div className="card-body">
                    <p><strong>Имя:</strong> FRANCISCO JAVIER CERVANTES COSTE</p>
                    <p><strong>RFC:</strong> CECF62091279A</p>
                    <p>
                      <strong>Адрес:</strong> Avenida Plutarcos Elias Calle No. 661, Interior 204-205<br />
                      Colonia Nueva Santa Anita, Iztacalco, C.P. 08210, Ciudad de México, México
                    </p>
                    <p><strong>Телефон:</strong> +52 55 8796 0451</p>
                    <p><strong>Электронная почта:</strong> info@cervantesbienesraices.com</p>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Цели обработки персональных данных</h4>
                <p>Предоставленные вами персональные данные используются для следующих основных целей:</p>
                <ul>
                  <li>Связь с вами по вопросам предлагаемых услуг в сфере недвижимости</li>
                  <li>Подготовка, ведение и исполнение договоров аренды, купли-продажи или посредничества</li>
                  <li>Персональные консультации по инвестициям, покупке или аренде недвижимости</li>
                  <li>Выполнение юридических, налоговых и договорных обязательств, связанных со сделками</li>
                  <li>Ведение актуальной базы данных клиентов, поставщиков и партнеров</li>
                </ul>
                <div className="alert alert-warning">
                  <h6>Дополнительные цели (по желанию):</h6>
                  <ul className="mb-0">
                    <li>Отправка новостей, предложений и коммерческой информации</li>
                    <li>Оценка удовлетворенности клиентов и улучшение качества услуг</li>
                  </ul>
                  <small className="text-muted">
                    Если вы не хотите, чтобы ваши данные использовались для этих целей, напишите на адрес{" "}
                    <strong>privacidad@cervantesbienesraices.com</strong>.
                  </small>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Какие персональные данные мы собираем</h4>
                <p>CERVANTES BIENES RAÍCES может собирать следующие данные:</p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Идентификационные данные: имя, фамилия, дата рождения, гражданство</li>
                      <li className="list-group-item">Контактные данные: телефон, электронная почта, адрес</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Финансовые данные: банковская или налоговая информация</li>
                      <li className="list-group-item">Имущественные данные: сведения об объектах, договорах и документах о собственности</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Передача и хранение данных</h4>
                <p>
                  Ваши персональные данные <strong>не передаются третьим лицам</strong> без вашего прямого согласия,
                  кроме следующих случаев:
                </p>
                <ul>
                  <li>Передача компетентным органам в соответствии с законодательством Мексики</li>
                  <li>Передача нотариусам, государственным брокерам или финансовым организациям, участвующим в сделке</li>
                  <li>Передача поставщикам технологических платформ для управления клиентами и защиты информации</li>
                </ul>
                <div className="alert alert-success">
                  <i className="fa-solid fa-shield-alt me-2"></i>
                  Все третьи лица, которым передаются данные, обязаны соблюдать стандарты конфиденциальности LFPDPPP и GDPR.
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Права ARCO: доступ, исправление, удаление и возражение</h4>
                <p>Вы вправе получить доступ к своим данным, исправить неточные данные, потребовать их удаления или возразить против обработки.</p>
                <div className="card border-primary">
                  <div className="card-body">
                    <h6>Чтобы воспользоваться этими правами:</h6>
                    <p>Отправьте запрос на адрес: <strong>privacidad@cervantesbienesraices.com</strong></p>
                    <p>В запросе необходимо указать:</p>
                    <ul>
                      <li>Полное имя и контактные данные</li>
                      <li>Документы, удостоверяющие личность</li>
                      <li>Четкое описание данных и права, которым вы хотите воспользоваться</li>
                    </ul>
                    <p className="mb-0"><strong>Срок ответа:</strong> 20 рабочих дней. Срок исполнения: еще 15 рабочих дней.</p>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link href="/solicitud-arco" className="btn btn-primary btn-lg">
                    <i className="fa-solid fa-file-alt me-2"></i>
                    Подать запрос ARCO
                  </Link>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Меры безопасности</h4>
                <div className="alert alert-success">
                  <i className="fa-solid fa-shield-alt me-2"></i>
                  <strong>CERVANTES BIENES RAÍCES</strong> применяет необходимые административные, технические и физические меры для защиты данных от повреждения, утраты, изменения, уничтожения и несанкционированного использования.
                </div>
                <p>Данные хранятся в системах, защищенных безопасной аутентификацией, шифрованием и сертифицированными протоколами HTTPS.</p>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Срок хранения</h4>
                <p>Персональные данные хранятся в течение срока, необходимого для достижения описанных целей, и в соответствии со сроками, установленными применимым законодательством.</p>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Международные требования GDPR и CCPA</h4>
                <p>Для резидентов Европейского союза обработка осуществляется на основаниях, предусмотренных статьей 6 GDPR. Пользователи из Калифорнии могут воспользоваться правами на получение информации, удаление данных и ограничение их использования в соответствии с CCPA.</p>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Изменения политики</h4>
                <div className="alert alert-warning">
                  <i className="fa-solid fa-exclamation-triangle me-2"></i>
                  Настоящая политика может быть изменена или обновлена. Все изменения публикуются по адресу:
                  <br /><strong>www.cervantesbienesraices.com/ru/politika-konfidencialnosti</strong>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="text-primary mb-3">Контакты по вопросам конфиденциальности</h4>
                <div className="card bg-light">
                  <div className="card-body">
                    <p><strong>По любым вопросам и запросам, связанным с настоящей политикой:</strong></p>
                    <p><strong>Ответственное лицо:</strong> Francisco Javier Cervantes Coste</p>
                    <p><strong>Электронная почта:</strong> privacidad@cervantesbienesraices.com</p>
                    <p><strong>Телефон:</strong> +52 55 8796 0451</p>
                  </div>
                </div>
              </section>

              <hr />
              <div className="text-center text-muted">
                <small>
                  <strong>CERVANTES BIENES RAÍCES</strong> — политика конфиденциальности обновлена в октябре 2025 года
                  <br />Соответствует LFPDPPP (Мексика), GDPR (Европа) и CCPA (Калифорния, США)
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisoPrivacidadContentRu;
