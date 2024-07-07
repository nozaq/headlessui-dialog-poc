import { useState } from "react"
import ModalDialog from "./Dialog"

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
    
  return (
    <main className="container p-10">
      <button className="bg-gray-200 rounded-md border p-2" type="button" onClick={() => setIsDialogOpen(true)}>Open</button>
      <ModalDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} title="Dialog" description="Dialog description" />
    </main>
  )
}

export default App
