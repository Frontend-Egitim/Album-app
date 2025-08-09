"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getUserData = async () => {
      await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${parseInt(
          params.user_id
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };

    getUserData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>
        {data.map((item) => (
          <Link href={`/${params.user_id}/albums/${item.id}`} key={item.id}>
            {item.title}
          </Link>
        ))}
      </h1>
    </div>
  );
}
