import StudentSidebar from "@/app/components/StudentSidebar";
import Link from "next/link";

export default function Learn() {


  return (
    <div className=" flex text-white w-full">
      <StudentSidebar />
      <nav className="flex flex-row justify-center w-full">
      <div className="flex flex-row gap-x-3 mt-7">
      <Link href="/learn/topic1" className="text-sky-300">1</Link>
      <Link href="/learn/topic2">2</Link>
      <Link href="/learn/topic3">3</Link>
      <Link href="/learn/topic2">4</Link>

      </div>
      </nav>
    </div>
  );
}