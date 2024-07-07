import { useState } from "react"
import TransitionDialog from "./TransitionDialog"
import NonTransitionDialog from "./NonTransitionDialog"

function App() {
  const [isTransitionDialogOpen, setTransitionDialogOpen] = useState(false)
  const [isNonTransitionDialogOpen, setNonTransitionDialogOpen] = useState(false)
    
  return (
    <main className="container p-10">
      <button className="bg-gray-200 rounded-md border p-2" type="button" onClick={() => setTransitionDialogOpen(true)}>Open w/ Transition</button>
      <button className="bg-gray-200 rounded-md border p-2" type="button" onClick={() => setNonTransitionDialogOpen(true)}>Open w/o Transition</button>
      <TransitionDialog isOpen={isTransitionDialogOpen} setIsOpen={setTransitionDialogOpen} />
      <NonTransitionDialog isOpen={isNonTransitionDialogOpen} setIsOpen={setNonTransitionDialogOpen} />
    </main>
  )
}

export default App
