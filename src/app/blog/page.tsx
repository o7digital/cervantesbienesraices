import BlogThree from "@/components/blogs/blog-three";
import Wrapper from "@/layouts/Wrapper";
import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog | Cervantes Bienes Raíces",
  description:
    "Consejos inmobiliarios, tendencias de mercado y guías prácticas para comprar, vender o rentar en México.",
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
