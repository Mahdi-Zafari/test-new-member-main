export interface SearchFilterFormProps {
    filters: {
        name: string;
        age: number;
        height: number;
        weight: number;
        maritalStatus: string[];
        children: string[];
    };
    handleFilterChange: (key: string, value: any) => void;
}

export type ApplyFiltersFunction = (filters: {
    name: string;
    age: number;
    height: number;
    weight: number;
    maritalStatus: string[];
    children: string[];
}) => void;

export interface Friend {
    id: number;
    name: string;
    lastMessage: string;
    image: string;
}

export interface ChatFriendsListProps {
    isOpen: boolean;
    onClose: () => void;
    friends: Friend[];
    onDeleteFriend: (id: number) => void;
}

export interface ChatFriendsListItemProps {
    friend: Friend;
    onClose: () => void;
    onDelete: () => void;
}

export interface ChatBodyProps {
    friend: Friend | undefined;
}
