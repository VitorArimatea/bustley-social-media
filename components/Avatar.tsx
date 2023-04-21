import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/router";

import useUser from "@/hooks/useUser";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean; 
}

const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const router = useRouter();
    
    const { data: fetchedUser } = useUser(userId);

    const onClick = useCallback((event: any) => {
        event.stopPropagation();

        const url = `/users/${userId}`;

        router.push(url);
    }, [router, userId]);
  return (
    <div className={` 
        ${hasBorder ? 'border-2 border-neutral-700' : ''}
        ${isLarge ? 'h-32' : 'h-12' }
        ${isLarge ? 'w-32' : 'w-12' }
        relative
        rounded-full
        cursor-pointer
        transition
    `}>
        <Image 
            fill
            style={{
                objectFit: 'cover',
                borderRadius: '100%'
            }}
            alt="Avatar"
            onClick={onClick}
            src={fetchedUser?.profileImage || '/images/profile-default.png'}
        />
    </div>
  );
}

export default Avatar;