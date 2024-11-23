import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="home-app">
      <Navbar />
      <SummaryCards />
    </div>
  );
};

export default Home;
