import Login from "./login/Login";
import { cookies } from "next/headers";
export default async function Admin() {
  const cookieStore = cookies();
  const jwt = (await cookieStore).get("jwt");

  if (!jwt) {
    return <Login />;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
    </div>
  );
}
