import { redirect } from "next/navigation"

export default function Home() {

  redirect('/chat')
  return (
    <main className="flex flex-row h-screen justify-center">
      <h1>Main page</h1>
    </main>
  )
}
