import { Dialog, DialogPanel } from "@headlessui/react";

interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function NonTransitionDialog({ isOpen, setIsOpen }: Props) {
    return (
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4"
      >
        <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
          <button onClick={() => setIsOpen(false)}>Close</button>
        </DialogPanel>
      </Dialog>
    )
}