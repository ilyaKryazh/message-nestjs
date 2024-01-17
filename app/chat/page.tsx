import Container from "./components/container";
import Sidebar from "./components/sidebar";

export default function Chat() {

  return (
    <main className="flex flex-row h-screen">
      <Sidebar />
      <Container />
    </main>
  )
}
