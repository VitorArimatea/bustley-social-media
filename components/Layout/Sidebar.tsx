import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'next-auth/react';

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarPostButton from './SidebarPostButton';

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    const items = [
        {
            label: "Início",
            href: "/home",
            icon: BsHouseFill,
        },
        {
            label: "Notificações",
            href: "/notifications",
            icon: BsBellFill,
        },
        {
            label: "Perfil",
            href: "/users/123",
            icon: FaUser,
        },
    ]

    return ( 
    <div className="col-span-1 h-full pt-2 pr-4 md:pr-6">
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]'>
                <SidebarLogo />
                {items.map((item) => (
                    <SidebarItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                    />
                ))}
                {currentUser && (
                    <SidebarItem onClick={() => signOut} label="Logout" icon={BiLogOut} href="/" />
                )}
                <SidebarPostButton />
            </div>
        </div>
    </div>
    );
};

export default Sidebar;