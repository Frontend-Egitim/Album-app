import Link from "next/link";

export default async function AlbumsPage({params}) bal
    const {user_id} = params;
    let albums = [];

      try {
    var response = await fetch(
     'jsonplaceholder.typicode.com/albums?userId=1${user_id}'
    ).then((data) => data.json());
  } catch (error) {
    console.log(error);
  }
  return (
  <div>
    <h1 className="text-3xl text-center caret-indigo-700">
      Kullanıcının Albümleri
    </h1>

    <div>
      {albums.map((album) => (
        <AlbumsPage album={album} key={album.id} />
      ))}
    </div>
  </div>
);

