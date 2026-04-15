import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import { useNewsContext } from "../../context/NewsContext";
import Loader from "../common/Loader";

export default function NewsPage({ className }) {
  const { news, setNews, fetchNews, loading } = useNewsContext();
  console.log(news);

  //? load data on intial render
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data?.articles);
    })();
  }, []);

  if (loading) return <Loader className="m-auto w-fit py-32" />;
  if (news.length === 0)
    return <h1 className="m-auto w-fit py-10 text-2xl">No items found</h1>;

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {news.map((newsDetails, idx) => {
          if (newsDetails?.url === null) return null;
          return <Newscard key={idx} details={newsDetails} />;
        })}
      </div>
    </Wrapper>
  );
}

function Newscard({ details }) {
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure>
        <img
          className="w-full aspect-video object-cover"
          src={details?.urlToImage}
          alt="img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className="line-clamp-3">{details?.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => window.open(details?.url)}
            className="btn badge-outline"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
