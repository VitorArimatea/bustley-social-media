import { useRouter } from "next/router";

import { IoIosRocket } from "react-icons/io"

const SidebarLogo = () => {
    const router = useRouter();

  return (

    <div 
        onClick={() => router.push('/')}
        className="
        flex
        items-center
        justify-center
        h-18
        w-18
        p-4
        rounded-full
        hover:bg-gray-400
        hover:bg-opacity-10
        cursor-pointer
        transition    
    ">
        <IoIosRocket size={35} color="white" />        
    </div>  
  );
};

export default SidebarLogo;