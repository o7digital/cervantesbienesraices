import BlogThree from "@/components/blogs/blog-three";
import Wrapper from "@/layouts/Wrapper";
import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cervantes Bienes Raíces",
  description:
    "Consejos inmobiliarios, tendencias de mercado y guías prácticas para comprar, vender o rentar en México.",
  alternates: {
    canonical: "https://cervantesbienesraices.vercel.app/blog"
  }
};

const BlogPage = async () => {
  const posts = await getBlogPosts(18);

  return (
    <Wrapper>
      <BlogThree posts={posts} />
    </Wrapper>
  );
};

export default BlogPage;
