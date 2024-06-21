"use client";

import Buttons from "@/app/ui/buttons/page";
import Card from "../Card/Card";
import Map from "../Maps/Map";
import EngineSwitcher from "../Switchers/EngineSwitcher";
import TrackerSwitcher from "../Switchers/TrackerSwitcher";
import Link from "next/link";
import { createSupabase } from "@/utils/supabase/client";

export default function AppContainer() {
  const resetHandler = async () => {
    const ok = confirm("Yakin ingin menghapus?");
    if (!ok) return;

    const supabase = createSupabase();

    const { error } = await supabase.from("coords").delete().gte("id", 0);
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-4 grid w-full grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Card title="Lock Engine">
          <EngineSwitcher />
        </Card>
        <Card title="Tracking Status">
          <TrackerSwitcher />
        </Card>
        <Card title="Reset Track">
          <button
            className="inline-flex items-center justify-center rounded-full bg-danger px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            onClick={resetHandler}
          >
            Reset
          </button>
        </Card>
      </div>
      <div className="mt-4 grid w-full grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Map position={[-7.42877, 109.336538]} zoom={13} />
      </div>
    </>
  );
}
