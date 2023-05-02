import Header from "@/components/header.component";

export default async function Home() {
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Welcome to NextAuth with Prisma ORM and Next.js 13
          </p>
        </div>
      </section>
    </>
  );
}
