import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav
        className=" flex justify-between items-center bg-slate-800 text-white
      px-8 py-3 font-semibold text-2xl"
      >
        <Link href={"/"}>StateRing</Link>
        <Link
          className=" bg-slate-300 p-2 rounded text-black"
          href={"/addTopic"}
        >
          Add Topic
        </Link>
      </nav>
      <h1
        className=" justify-center items-center flex
       text-white text-4xl mt-4 "
      >
        {" "}
        BASIC AUTHENTICATION NEXTJS
      </h1>
    </div>
  );
};

export default Navbar;
