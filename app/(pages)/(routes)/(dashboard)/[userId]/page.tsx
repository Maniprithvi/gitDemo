import { auth } from "@/auth";
import OrganiserPage from "./pages/organiserPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

const page = async () => {
  const session: any = await auth();
  const role = session?.user.role;
  console.log(role, "role from page");

  if (role === "ADMIN") {
    return (
      <>
        <AdminPage />
      </>
    );
  }

  if (role === "ORGANISER") {
    return (
      <>
        <OrganiserPage />
      </>
    );
  }

  return (
    <>
      <UserPage />
    </>
  );
};

export default page;
