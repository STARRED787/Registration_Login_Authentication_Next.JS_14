export default function UserProfilePage({ params }: any) {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <h1>Profile</h1>
      <p className=" text-4xl">This is the user profile page.</p>
      <span className=" p-2 rounded bg-orange-600 text-black">{params.id}</span>
    </div>
  );
}
