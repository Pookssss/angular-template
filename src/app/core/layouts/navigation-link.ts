export interface NavLink {
    display: string;
    link: string;
    icon: string;
    sub: Array<SubNavLink>;
}

export interface SubNavLink {
    display: string;
    link: string;
}

// Normal user
export const NavLinks: NavLink[] = [
    {
        display: 'แดชบอร์ด',
        link: '/dashboard',
        icon: 'area-chart',
        sub: [],
    },
    {
        display: 'ทะเบียนบุคคล',
        link: '/family',
        icon: 'team',
        sub: [],
    },
    {
        display: 'ปฏิทินลงพื้นที่',
        link: '/schedule',
        icon: 'calendar',
        sub: [],
    },
];
