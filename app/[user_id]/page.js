"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserPage() {
  const { user_id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user_id}`
        ).then((data) => data.json());
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);
  if (loading) {
    return <div>Yükleniyor..</div>;
  }

  if (!loading && data != undefined) {
    return (
      <div>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
      </div>
    );
  }
}
