import Link from "next/link";

export default async function AlbumPhotosPage({ params }) {
  const { albumId } = params;
  let photos = null;
  let album = null;

  try {
    const [photosResponse, albumResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`),
      fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    ]);
    
    if (photosResponse.ok) {
      photos = await photosResponse.json();
    }
    if (albumResponse.ok) {
      album = await albumResponse.json();
    }
  } catch (error) {
    console.error('API Hatası:', error);
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Fotoğraflar yüklenirken bir hata oluştu.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                📸
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {album?.title || 'Albüm Fotoğrafları'}
                </h1>
                <p className="text-gray-600">Toplam {photos?.length || 0} fotoğraf</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link 
                href={`/users/${album?.userId}/albums`}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Albümlere Dön</span>
              </Link>
              <Link 
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Ana Sayfa</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {photos?.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {photo.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">ID: {photo.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!photos || photos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Fotoğraf bulunamadı</h3>
            <p className="text-gray-600">Bu albümde henüz fotoğraf yok.</p>
          </div>
        )}
      </div>
    </div>
  );
}
