import { MenuUser } from '../_models/menu.model';

export const ListMenuUser: MenuUser | any = [
    {
        title: 'Home',
        icon: 'dashboard',
        link: '/home',
        children: [
            {
                title: 'Default',
                link: '/dashboard/default'
            }
        ],
        active: check(),
    },
    {
        title: 'About',
        icon: 'appstore',
        link: '/about',
        children: [
            {
                title: 'Button',
                link: '/ui-element/button'
            },
            {
                title: 'Icon',
                link: '/ui-element/icon'
            },
            {
                title: 'Typography',
                link: '/ui-element/typography'
            },
        ],
        active: false,
    },
];

function check() {
    return true;
}
