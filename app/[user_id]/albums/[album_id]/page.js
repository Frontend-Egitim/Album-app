"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SingleAlbumPage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const getAlbumData = async () => {
      await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };

    getAlbumData();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>
        {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </h1>
    </div>
  );
}
