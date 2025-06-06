import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // добавлен useNavigate
import api from '../api/axios';
import Footer from './Footer';
import BookingModal from "./BookingModal";
import NavigationHeader from "./NavigationHeader";
import Layout from "./Layout"

const FullBlogPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [openBooking, setOpenBooking] = useState(false);
  const navigate = useNavigate(); // хук навигации

  useEffect(() => {
    if (id) {
      api.get(`posts/${id}/`)
        .then((res) => setPost(res.data))
        .catch((err) => console.error('Ошибка загрузки поста:', err));
    }
  }, [id]);

  if (!post) return <div className="text-center mt-20 text-xl font-jost">Загрузка...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-orange-50 font-jost">
      <Layout>
        <article className="w-full max-w-7xl inline-block mx-auto bg-white p-10 rounded-medium shadow-lg text-black">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-purple-600 hover:text-purple-800 text-lg underline"
          >
            ← Назад
          </button>

          <h2 className="text-3xl font-medium mb-8">{post.title}</h2>
          <p className="text-xl whitespace-pre-line leading-relaxed">{post.text}</p>
        </article>
      </Layout>

      <Footer />
      <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
    </div>
  );
};

export default FullBlogPage;
