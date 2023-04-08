import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarPostButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
        <div
          className="
            flex
            items-center
            justify-center
            h-14
            w-14
            p-4
            mt-6
            lg:hidden
            rounded-full
            bg-blue-800
            hover:bg-opacity-80
            cursor-pointer
            transition
          "
        >
          <FaFeather size={24} color="white" />
        </div>
        <div
          className="
            mt-6
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-blue-800
            hover:bg-opacity-90
            cursor-pointer
            transition
          "
        >
          <p 
            className="
              hidden
              lg:block
              text-center
              font-semibold
              text-white
              text-[20px]
          "> 
            Publicar
          </p>
        </div>
    </div>
  )
}

export default SidebarPostButton;