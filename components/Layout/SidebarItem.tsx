import { IconType } from 'react-icons';

interface SidebarItemProps {
    label: string,
    href: string,
    icon: IconType
    onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
    label, 
    href, 
    icon: Icon, 
    onClick
}) => {
  return (
    <div className='flex flex-row items-center'>
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
        lg-hidden
        '
        >
            <Icon size={28} color="white" />
        </div>
    </div>
  );
};

export default SidebarItem;