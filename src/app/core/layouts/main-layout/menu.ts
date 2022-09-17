import { MenuUser } from '../_models/menu.model';

export const ListMenuUser: MenuUser | any = [
    {
        title: 'Menu',
        icon: 'appstore',
        link: '/home',
        children: [
            {
                title: 'Home',
                icon: 'user',
                link: '/home',
            },
        ],
        active: check(),
    },
    {
        title: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard',
        children: [
            {
                title: 'User',
                icon: 'user',
                link: '/dashboard',
            }
        ],
        active: check(),
    },
    {
        title: 'Account',
        icon: 'user',
        link: '/account',
        children: [
            {
                title: 'Calendar',
                link: '/account/calendar',
            },
            {
                title: 'In / Out',
                link: '/account/income',
            }
        ],
        active: check(),
    },
    {
        title: 'Alert',
        icon: 'notification',
        link: '/artist',
        children: [
            {
                title: 'User',
                icon: 'user',
                link: '/home',
            },
        ],
    },
    {
        title: 'Setting',
        icon: 'setting',
        link: '/artist',
        children: [
            {
                title: 'User',
                icon: 'user',
                link: '/home',
            },
        ],
    },
    {
        title: 'Mail',
        icon: 'mail',
        link: '/artist',
        children: [
            {
                title: 'User',
                icon: 'user',
                link: '/home',
            },
        ],
    },
];

function check() {
    return true;
}
