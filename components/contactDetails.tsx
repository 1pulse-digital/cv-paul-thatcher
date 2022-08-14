import { Dialog } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

interface ContactDetailsProps {
  openState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const ContactDetails = (props: ContactDetailsProps) => {
  let [isOpen, setIsOpen] = props.openState;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-10"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-custom1 text-white text-3xl">
          <Dialog.Title>personemail@mail.com</Dialog.Title>
          <Dialog.Description>
            <span>+27 71 382 47824</span>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
