export interface SidebarChild {
    title: string
    icon?: any
    to: string[]
}

export interface SidebarRoot {
    type: string
    title: string
    icon: string
    to: string[]
    children: SidebarChild[]
}