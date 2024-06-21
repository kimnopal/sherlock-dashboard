import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MapOne from "@/components/Maps/MapOne";
import Map from "@/components/Maps/Map";
import CardDataStats from "@/components/CardDataStats";
import Card from "@/components/Card/Card";
import AppContainer from "@/components/AppContainer/AppContainer";
import EngineSwitcher from "@/components/Switchers/EngineSwitcher";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  return (
    <>
      {/* <h1>{message}</h1> */}
      <DefaultLayout>
        <AppContainer />
      </DefaultLayout>
    </>
  );
}
