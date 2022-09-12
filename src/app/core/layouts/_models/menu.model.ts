export interface MenuUser {
    title: string;
    icon: string;
    link: string;
    children?: MenuUser[];
    active?: boolean;
}