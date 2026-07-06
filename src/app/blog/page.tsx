import BlogThree from "@/components/blogs/blog-three";
import Wrapper from "@/layouts/Wrapper";
import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Noticias | Cervantes Bienes Raíces",
  description:
    "Consejos inmobiliarios, tendencias de mercado y guías prácticas para comprar, vender o rentar en México.",
  openGraph: {
    title: "Noticias inmobiliarias | Cervantes Bienes Raíces",
    description:
      "Consejos inmobiliarios, tendencias de mercado y guías prácticas para comprar, vender o rentar en México.",
    url: "https://www.cervantesbienesraices.com/blog",
    siteName: "Cervantes Bienes Raíces",
    locale: "es_MX",
    type: "website",
    images: ["/images/assets/ogg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias inmobiliarias | Cervantes Bienes Raíces",
    description:
      "Consejos inmobiliarios y guías prácticas para comprar, vender o rentar en México.",
    images: ["/images/assets/ogg.png"],
  },
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/blog"
  }
};

const BlogPage = async () => {
  const blogEnabled = process.env.NEXT_PUBLIC_BLOG_ENABLED !== "off";
  if (!blogEnabled) redirect("/");

  const posts = await getBlogPosts(18);
  if (!posts.length) redirect("/");

  return (
    <Wrapper>
      <BlogThree posts={posts} />
    </Wrapper>
  );
};

export default BlogPage;
