import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFive from "@/layouts/headers/HeaderFive";
import { BlogPost } from "@/types/blog";
import BlogThreeArea from "./BlogThreeArea";

type Props = {
  posts: BlogPost[];
};

const BlogThree = ({ posts }: Props) => {
  return (
    <>
      <section className="blog-hero-shell">
        <HeaderFive />
        <div className="blog-hero-content text-center">
          <h1>Noticias</h1>
          <div className="blog-hero-breadcrumb">
            Home / Inicio / Artículos
          </div>
        </div>
      </section>
      <BlogThreeArea posts={posts} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogThree;
