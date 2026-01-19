import { redirect } from "next/navigation";

export const metadata = {
  title: "Blog | Cervantes Bienes Raíces"
};
const index = () => {
  redirect("/blog");
};

export default index;
