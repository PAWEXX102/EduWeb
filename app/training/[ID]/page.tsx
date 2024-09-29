"use client";

import { ProgrammingTasks } from "@/app/tasks";
import { useSearchParams } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    section: string;
  };
}) {
  const searchParams = useSearchParams();
  const ID = searchParams.get("id");
  const Task = ProgrammingTasks[0];
  return (
    <main className=" flex text-white">
      {params.section}
        {ID}
    </main>
  );
}
