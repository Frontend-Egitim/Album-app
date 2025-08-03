export default async function UserPage({ params }) {
  const { user_id } = await params;

  try {
    var response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    ).then((data) => data.json());
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>{response.name}</h1>
      <h1>{response.email}</h1>
    </div>
  );
}
