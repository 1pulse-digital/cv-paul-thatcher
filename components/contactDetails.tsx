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

      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <Dialog.Panel className="w-full max-w-md p-20 text-3xl text-white rounded bg-custom1">
          <Dialog.Title>paul@jerusalema.co.za</Dialog.Title>
          <Dialog.Description>
            <span><br/>+27 83 411 3922</span>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
