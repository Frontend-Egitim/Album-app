import Link from "next/link";

export default async function UserPage({ params }) {
  const { id } = params;

  let user = null;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    user = await response.json();
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Kullanıcı bilgileri yüklenemedi.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-left">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.username}</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600">Email</h3>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Telefon</h3>
            <p className="text-gray-800">{user.phone}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Adres</h3>
            <p className="text-gray-800">
              {user.address.street}, {user.address.suite}<br />
              {user.address.city} - {user.address.zipcode}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Website</h3>
            <p className="text-blue-600 underline">{user.website}</p>
          </div>
          <div className="flex space-x-3 mt-6">
            <Link href={`/users/${user.id}/albums`} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md transition-colors">
              Albümleri Gör
            </Link>
            <Link href="/" className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-md transition-colors">
              Ana Sayfa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
