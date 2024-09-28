import SideBar from "../components/TeacherSidebar";
import { MyButton } from "../components/buttons";


export default function Home() {
  return <main className=" text-white flex w-full h-full">
    <SideBar />
    <MyButton>Witaj</MyButton>
    <MyButton color="secondary">Witaj</MyButton>
    <MyButton color='active'>Witaj</MyButton>
  </main>;
}
