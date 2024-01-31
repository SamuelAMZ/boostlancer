import Link from "next/link";

const NotFound = () => {
  return (
    <div className="centerer notfound">
      <h1>404</h1>
      <Link href={"/home"}>
        <button className="btn ">Go back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
