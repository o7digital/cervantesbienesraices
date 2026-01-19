import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";

const BlogSection = async () => {
  const posts = await getBlogPosts(3);

  return (
    <section className="blog-section-three mt-130 xl-mt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="title-one mb-40">
              <div className="sub-title">Blog</div>
              <h2 className="fw-600">Novedades inmobiliarias</h2>
              <p className="fs-18">
                Tendencias de mercado, guías prácticas y tips para comprar,
                vender o rentar con tranquilidad.
              </p>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link href="/blog" className="btn-five">
              Ver todos los artículos
            </Link>
          </div>
        </div>

        <div className="row pt-20">
          {posts.map((item) => {
            const detailHref = item.slug ? `/blog/${item.slug}` : "/blog";
            const date = new Date(item.date);
            const displayDate = new Intl.DateTimeFormat("es-MX", {
              day: "2-digit",
              month: "short"
            }).format(date);
            const readingTime = item.readTimeMinutes
              ? `${item.readTimeMinutes} min`
              : "3 min";

            return (
              <div key={item.id} className="col-lg-4 col-md-6">
                <article className="blog-meta-one mb-70 lg-mb-40">
                  <figure
                    className="post-img border-25 position-relative m0"
                    style={{ backgroundImage: `url(${item.coverImage})`, height: 320 }}
                  >
                    <Link
                      href={detailHref}
                      className="stretched-link date tran3s"
                    >
                      {displayDate}
                    </Link>
                  </figure>
                  <div className="post-data">
                    <div className="post-info">
                      <Link href={detailHref}>
                        {item.author ?? "Cervantes Bienes Raíces"}
                      </Link>{" "}
                      {readingTime}
                    </div>
                    <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                      <Link href={detailHref} className="blog-title">
                        <h4>{item.title}</h4>
                      </Link>
                      <Link
                        href={detailHref}
                        className="read-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                        aria-label="Leer artículo"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                    {item.excerpt && (
                      <p
                        className="m0 pt-2"
                        style={{ color: "rgba(0,0,0,0.6)" }}
                      >
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                </article>
              </div>
            );
          })}

          {!posts.length && (
            <div className="col-12">
              <p className="fs-18">Muy pronto compartiremos contenido nuevo.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
