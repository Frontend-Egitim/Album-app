import { UserCard } from "@/components/UserCard";

export default async function Home() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    var data = await response.json();
    var filteredList = data;
  } catch (error) {
    console.log(error);
  }


  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
