import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    title: string;
    description: string;
}

export default function ModalDialog({ title, description, isOpen, setIsOpen }: Props) {
    return (
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
          <DialogTitle className="font-bold">{title}</DialogTitle>
          <Description>{description}</Description>
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </DialogPanel>
      </Dialog>
    )
}