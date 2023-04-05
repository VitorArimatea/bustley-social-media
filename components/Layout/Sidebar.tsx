import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarPostButton from './SidebarPostButton';

const Sidebar = () => {
    const items = [
        {
            label: "Início",
            href: "https://github.com/VitorArimatea",
            icon: BsHouseFill,
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill,
        },
        {
            label: "Profile",
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
                <SidebarItem onClick={() => {}} label="Logout" icon={BiLogOut} />
                <SidebarPostButton />
            </div>
        </div>
    </div>
    );
};

export default Sidebar;