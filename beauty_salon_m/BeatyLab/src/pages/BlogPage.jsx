import React, { useEffect, useState } from "react";
import ArticleCard from "../pages/ArticleCard";
import NavigationHeader from "../pages/NavigationHeader";
import BookingModal from "./BookingModal";
import api from "../api/axios";
import Footer from "./Footer";
import Layout from "./Layout";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [openBooking, setOpenBooking] = useState(false);

  useEffect(() => {
    api.get("posts/")
      .then((res) => {
        console.log("Ответ от API:", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.error("Ошибка загрузки постов:", err));
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col">
<Layout>

      <section className="flex-grow max-w-6xl mx-auto flex flex-col gap-16 mt-10 px-4">
        {posts.map((post) => (
          <ArticleCard
            key={post.id}
            id={post.id}
            imageSrc={post.image}
            imageAspect="0.75"
            category="Блог"
            title={post.title}
            description={post.text.slice(0, 200) + "..."}
            showReadMore={true}
          />
        ))}
      </section>
</Layout>

      <Footer />


      <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
    </div>
  );
};

export default BlogPage;
