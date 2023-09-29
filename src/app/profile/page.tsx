import Header from "@/components/header.component";
import { authOptions } from "@/lib/auth";

export default async function Profile() {

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos. Accusamus ad ducimus dicta sint esse fugiat harum? Odit odio voluptate quia! Repellat aut totam officia reprehenderit cum non deleniti.
          </div>
        </div>
      </section>
    </>
  );
}
