import Link from "next/link";

export const UserCard = ({ user }) => {
  return (
    <Link
      href={`/${user.id}`}
      className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-fit"
    >
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-500">
            {user.name?.charAt(0) || "?"}
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-blue-100">@{user.username}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-6 py-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-700">{user.email}</span>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-gray-700">{user.phone}</span>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
              />
            </svg>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="px-6 py-4 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Address
        </h3>
        <div className="text-gray-600 space-y-1">
          <p>
            {user.address?.street} {user.address?.suite}
          </p>
          <p>
            {user.address?.city}, {user.address?.zipcode}
          </p>
          {user.address?.geo && (
            <p className="text-sm text-gray-500">
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          )}
        </div>
      </div>

      {/* Company Section */}
      {user.company && (
        <div className="px-6 py-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Company
          </h3>
          <div className="text-gray-600">
            <p className="font-medium text-gray-800">{user.company.name}</p>
            <p className="text-sm italic">
              &quot;{user.company.catchPhrase}&quot;
            </p>
            <p className="text-sm text-gray-500">{user.company.bs}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">User ID: {user.id}</p>
      </div>
    </Link>
  );
};
