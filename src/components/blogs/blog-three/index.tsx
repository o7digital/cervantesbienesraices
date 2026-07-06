import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
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
      <HeaderFive style="dark" />
      <BreadcrumbOne
        title="Noticias"
        link="/"
        link_title="Inicio"
        sub_title="Artículos"
        style={true}
        backgroundImage="/oak-motion-7vYMAVS-cKo-unsplash.webp"
      />
      <BlogThreeArea posts={posts} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogThree;
