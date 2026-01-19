"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { BlogPost } from "@/types/blog";

type Props = {
  posts: BlogPost[];
};

const BlogThreeArea = ({ posts }: Props) => {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((item) => {
      if (item.category) set.add(item.category.toLowerCase());
    });
    return ["todas", ...Array.from(set)];
  }, [posts]);

  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const filteredBlog =
    selectedCategory === "todas"
      ? posts
      : posts.filter(
          (item) => item.category?.toLowerCase() === selectedCategory
        );

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredBlog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredBlog.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredBlog.length;
    setItemOffset(newOffset);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setItemOffset(0);
  };

  if (!posts.length) {
    return (
      <div className="blog-section-three mt-130 xl-mt-100 mb-150 xl-mb-100">
        <div className="container text-center">
          <p className="fs-20">Aún no hay artículos publicados. Próximamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-section-three mt-130 xl-mt-100 mb-150 xl-mb-100">
      <div className="container">
        <div className="blog-filter-nav">
          <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "is-checked" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category === "todas"
                  ? "Todas"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className=" row isotop-gallery-2-wrapper pt-60 lg-pt-40">
          {currentItems.map((item) => {
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
              <div key={item.id} className="col-lg-6">
                <div className="isotop-item villa sale">
                  <article className="blog-meta-one mb-70 lg-mb-40">
                    <figure
                      className="post-img border-25 position-relative m0"
                      style={{
                        backgroundImage: `url(${item.coverImage})`
                      }}
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
                        <p className="m0 pt-2" style={{ color: "rgba(0,0,0,0.6)" }}>
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>

        {pageCount > 1 && (
          <div className="pt-20 text-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<i className="fa-regular fa-chevron-right"></i>}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<i className="fa-regular fa-chevron-left"></i>}
              renderOnZeroPageCount={null}
              className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogThreeArea;
