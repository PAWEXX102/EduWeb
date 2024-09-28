import StudentSideBar from "../components/StudentSidebar";

export default function Page() {
  return (
    <main className=" flex text-white">
      <StudentSideBar />
      <nav className="flex flex-col mt-10 mx-10 gap-y-2">
        <p className=" font-extrabold text-5xl ">Witaj <span className="text-green-500">Przemek!</span></p>
        <p className="text-gray-50 font-bold ml-5">W aplikacji od 09 września 2024</p>
      </nav>
    </main>
  );
}
