import React from 'react';
import { Link } from "react-router-dom";

const ArticleCard = ({
    id,
  imageSrc,
  imageAspect,
  category,
  title,
  description,
  showReadMore = false
}) => {
  return (
    <article className="px-16 shadow-lg py-12 bg-white rounded-sm max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[26%] max-md:ml-0 max-md:w-full">
          <img
            src={imageSrc}
            alt=""
            className={`object-contain grow shrink-0 max-w-full w-[234px] max-md:mt-10`}
            style={{ aspectRatio: imageAspect }}
          />
        </div>
        <div className="ml-5 w-[74%] max-md:ml-0  max-md:w-full">
          <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
            <span className="self-start text-sm text-center">
              {category}
            </span>
            <h2 className="mt-2.5 mr-10 text-3xl font-medium max-md:mr-2.5 max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-6 text-2xl max-md:max-w-full">
              {description}
            </p>
            {showReadMore && (
              <Link to={`/post/${id}`}
              className="self-end mt-14 mr-6 text-lg text-purple-500 underline max-md:mt-10 max-md:mr-2.5 hover:text-purple-600"
            >
              Читать полностью
            </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
