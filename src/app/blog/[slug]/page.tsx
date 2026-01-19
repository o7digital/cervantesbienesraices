import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import { getBlogPosts } from "@/lib/blog";
import { BlogPost } from "@/types/blog";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

async function getPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts(30);
  return posts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Blog | Cervantes Bienes Raíces"
    };
  }

  return {
    title: `${post.title} | Cervantes Bienes Raíces`,
    description: post.excerpt,
    alternates: {
      canonical: `https://cervantesbienesraices.vercel.app/blog/${post.slug}`
    }
  };
}

const BlogArticlePage = async ({ params }: PageProps) => {
  const post = await getPost(params.slug);

  if (!post) notFound();

  const displayDate = new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(post.date));

  const readingTime = post.readTimeMinutes
    ? `${post.readTimeMinutes} min de lectura`
    : "Lectura breve";

  return (
    <Wrapper>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title={post.title}
        link="/blog"
        link_title="Blog"
        sub_title="Detalle"
        style={true}
      />

      <div className="blog-details border-top mt-130 xl-mt-100 pt-100 xl-pt-80 mb-150 xl-mb-100">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-8">
              <div className="blog-post-meta mb-60 lg-mb-40">
                <div className="post-info">
                  <span className="me-2">{post.author ?? "Cervantes Bienes Raíces"}</span>
                  <span className="me-2">• {readingTime}</span>
                  <span className="badge bg-light text-dark text-uppercase">
                    {post.category}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
              </div>
            </div>
          </div>

          <div className="row gx-xl-5">
            <div className="col-lg-8">
              <article className="blog-post-meta">
                <figure
                  className="post-img position-relative m0"
                  style={{ backgroundImage: `url(${post.coverImage})` }}
                >
                  <div className="fw-500 date d-inline-block">{displayDate}</div>
                </figure>
                <div className="post-data pt-50 md-pt-30">
                  <p>{post.excerpt}</p>
                  {post.content?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {post.tags && (
                  <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                    <ul className="d-flex align-items-center tags style-none pt-20">
                      <li>Tags:</li>
                      {post.tags.map((tag) => (
                        <li key={tag}>
                          <span className="me-1">{tag}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-20">
                      <Link className="btn-five" href="/contact">
                        Agendar una llamada
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            </div>

            <div className="col-lg-4">
              <div className="p-4 rounded-4 bg-light">
                <p className="fw-600 mb-1">¿Quieres vender o rentar tu propiedad?</p>
                <p className="m0">
                  Escríbenos y te compartimos un plan a la medida con comparables reales de tu zona.
                </p>
                <div className="pt-3">
                  <Link href="/contact" className="btn-one w-100 text-center">
                    Hablemos
                  </Link>
                </div>
                <div className="pt-3">
                  <Link href="/servicios" className="btn-two w-100 text-center">
                    Ver servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FancyBanner />
      <FooterFour />
    </Wrapper>
  );
};

export default BlogArticlePage;
