import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { BlogPost } from "@/types/blog";
import BlogThreeArea from "./BlogThreeArea";
import heroBlog from "@/assets/images/blog/blog_img_03.jpg";

type Props = {
  posts: BlogPost[];
};

const BlogThree = ({ posts }: Props) => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title="Blog"
        link="/"
        link_title="Inicio"
        sub_title="Artículos"
        style={true}
        bgImage={heroBlog.src}
      />
      <BlogThreeArea posts={posts} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogThree;
