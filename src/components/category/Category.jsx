import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import { useNewsContext } from "../../context/NewsContext";

export default function ({ className }) {
  const categories = [
    "Business",
    "Entertenment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const { setNews, fetchNews } = useNewsContext();

  const handleClick = async (e) => {
    const category = e.target.value;
      const res = await fetchNews(`/everything?q=${category}`);
      console.log(res);
      setNews(res?.articles);
    };

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className="max-w-full w-fit m-auto overflow-x-auto flex gap-5 px-4 scrollbar-none whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              className="btn btn-primary"
              value={category}
              onClick={handleClick}
            >
              {category}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
