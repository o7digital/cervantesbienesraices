import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { BlogPost } from "@/types/blog";
import BlogThreeArea from "./BlogThreeArea";
import FeaturedProperties from "./FeaturedProperties";

type Props = {
  posts: BlogPost[];
};

const BlogThree = ({ posts }: Props) => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title="Noticias y Propiedades destacadas"
        link="/"
        link_title="Inicio"
        sub_title="Artículos"
        style={true}
        backgroundImage="/oak-motion-7vYMAVS-cKo-unsplash.webp"
      />
      <FeaturedProperties />
      <BlogThreeArea posts={posts} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogThree;
