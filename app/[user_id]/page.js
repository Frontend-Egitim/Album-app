"use client";

import Link from "next/link";
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

        console.log(response);
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
    return <div>Yükleniyor....</div>;
  }
  if (!loading && data != undefined) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Profil Başlığı */}
        <div className="text-center mb-6 pb-4 border-b-2 border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h1>
          <p className="text-lg text-gray-600">@{data.username}</p>
        </div>

        {/* İletişim Bilgileri */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-blue-500 pl-3">
            İletişim Bilgileri
          </h3>
          <div className="ml-4 space-y-2">
            <p className="flex items-center">
              <span className="font-medium text-gray-700">📧 Email:</span>
              <span className="ml-2 text-gray-600">{data.email}</span>
            </p>
            <p className="flex items-center">
              <span className="font-medium text-gray-700">📞 Telefon:</span>
              <span className="ml-2 text-gray-600">{data.phone}</span>
            </p>
            <p className="flex items-center">
              <span className="font-medium text-gray-700">🌐 Website:</span>
              <a
                href={`http://${data.website}`}
                target="_blank"
                className="ml-2 text-blue-600 hover:text-blue-800 underline"
              >
                {data.website}
              </a>
            </p>
          </div>
        </div>

        {/* Adres Bilgileri */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-green-500 pl-3">
            Adres
          </h3>
          <div className="ml-4 bg-gray-50 p-4 rounded-lg">
            <p className="mb-1">
              <span className="font-medium text-gray-700">📍 Sokak:</span>
              <span className="ml-2 text-gray-600">
                {data.address.street}, {data.address.suite}
              </span>
            </p>
            <p className="mb-1">
              <span className="font-medium text-gray-700">🏙️ Şehir:</span>
              <span className="ml-2 text-gray-600">{data.address.city}</span>
            </p>
            <p>
              <span className="font-medium text-gray-700">📮 Posta Kodu:</span>
              <span className="ml-2 text-gray-600">{data.address.zipcode}</span>
            </p>
          </div>
        </div>

        {/* Şirket Bilgileri */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-yellow-500 pl-3">
            Şirket
          </h3>
          <div className="ml-4 bg-yellow-50 p-4 rounded-lg">
            <p className="mb-2">
              <span className="font-medium text-gray-700">🏢 Şirket:</span>
              <span className="ml-2 text-gray-800 font-semibold">
                {data.company.name}
              </span>
            </p>
            <p className="mb-2 italic text-yellow-800">
              💡 Slogan: "{data.company.catchPhrase}"
            </p>
            <p className="text-sm text-gray-600">🎯 Odak: {data.company.bs}</p>
          </div>
        </div>

        <Link
          href={`${user_id}/albums`}
          className="bg-blue-500 text-white p-6 rounded-md"
        >
          Albümler
        </Link>
      </div>
    );
  }
}
