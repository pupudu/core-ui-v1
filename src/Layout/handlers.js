const toggler = className => () => document.body.classList.toggle(className);

export const sidebarToggle = toggler('sidebar-hidden');
export const mobileSidebarToggle = toggler('sidebar-mobile-show');
export const asideToggle = toggler('aside-menu-hidden');
export const sidebarMinimize = toggler('sidebar-minimized');
export const hideMobile = toggler('sidebar-mobile-show');
