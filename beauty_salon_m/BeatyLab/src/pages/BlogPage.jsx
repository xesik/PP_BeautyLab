import React, { useEffect, useState } from "react";
import ArticleCard from "../pages/ArticleCard";
import NavigationHeader from "../pages/NavigationHeader";
import api from "../api/axios";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  api.get("posts/")
    .then((res) => {
      console.log("Ответ от API:", res.data); // ВАЖНО
      setPosts(res.data);
    })
    .catch((err) => console.error("Ошибка загрузки постов:", err));
}, []);

  return (
    <main className="min-h-screen w-full bg-orange-50 px-4 py-10">
      <NavigationHeader />
      <section className="max-w-6xl mx-auto flex flex-col gap-16 mt-12">
        {posts.map((post) => (
          <ArticleCard
            key={post.id}
            imageSrc={post.image} // если у тебя есть картинка
            imageAspect="0.75"
            category="Блог"
            title={post.title}
            description={post.text.slice(0, 200) + "..."}
            showReadMore={true}
          />
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
