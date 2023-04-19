import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import LoginModal from '../modals/LoginModal';

interface SidebarItemProps {
    label: string,
    href: string,
    icon: IconType
    onClick?: () => void;
    auth?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
    label, 
    href, 
    icon: Icon, 
    onClick,
    auth
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();  
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href)
    }
    
  }, [router, onClick, href, currentUser, auth, loginModal]);

  return (
    <div onClick={handleClick} className='flex flex-row items-center'>
        <div
        className='
          flex
          items-center
          justify-center
          relative
          h-14
          w-14
          p-4
          rounded-full
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
          lg:hidden
        '
        >
            <Icon size={28} color="white" />
        </div>
        <div 
        className='
          items-center
          gap-4
          relative
          hidden
          lg:flex
          p-4
          rounded-full
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
        '>
          <Icon size={24} color="white" />
          <a href={href}><p className='hidden lg:block text-white text-xl'>
            {label}
          </p></a>
        </div>
    </div>
  );
};

export default SidebarItem;