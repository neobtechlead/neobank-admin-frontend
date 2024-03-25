import Home from "@/assets/icons/home.svg";
import StoreFront from "@/assets/svgs/StoreFront.svg";
import User from "@/assets/svgs/UserCircle.svg";
import UserCircle from "@/assets/svgs/UserCircle.svg";
import UserThree from "@/assets/svgs/UserThree.svg";
import Report from "@/assets/svgs/Report.svg";
import Settings from "@/assets/svgs/Settings.svg";
import LogOut from "@/assets/svgs/Logout.svg";
import ActivityLog from "@/assets/svgs/ActivityLog.svg"

export const CEDIS_CONVERTER = 0.01

export const navBarItems = [
    {
        label: "Overview",
        icon: Home,
        href: "/overview",
        description: ""
    },

    {
        label: "Merchants",
        icon: StoreFront,
        href: "/merchants",
        description: "Welcome to your dashboard"
    },

    {
        label: "Users",
        icon: User,
        href: "/users",
        description: "Welcome to your dashboard"
    },

    {
        label: "Customers",
        icon: UserThree,
        href: "/customers",
        description: "Welcome to your dashboard"
    },

    {
        label: "Reports",
        icon: Report,
        href: "/reports",
        description: "Welcome to your dashboard"
    },

    {
        label: "Activity Logs",
        icon: ActivityLog,
        href: "/activity-logs",
        description: "Welcome to your dashboard"
    },


]


export const profileMenuItems = [
    {
        icon: UserCircle,
        label: 'Profile',
        color: '',
        name: 'profile',
        title: 'Account Information',
        description: 'Put content for account information here. Put content for account information here. Put content for account information here'
    },
    {
        icon: Settings,
        label: 'Settings',
        color: '',
        name: 'settings',
        title: 'Account Information',
        description: 'Put content for account information here. Put content for account information here. Put content for account information here'
    },
    {
        icon: LogOut,
        label: 'Logout',
        color: 'brown',
        name: 'logout',
        title: 'Account Information',
        description: 'Put content for account information here. Put content for account information here. Put content for account information here'
    },
];


export const color = {
    darkGray: "#211F26",
    darkPurple: "#652D90",
    neutralGrey900: "#4F4F4F",
    neutralGrey: "#808191",
    "chartGreen": "#0CCE6B",
    "chartRed": "#EB2F2F",
    "white": "#fff"
}


export const TRANSACTION_STATUS = [
    {label: "Successful", value: "COMPLETED"},
    {label: "Failed", value: "FAILED"},
    {label: "Cancelled", value: "CANCELLED"},
    {label: "Pending", value: "QUEUED"},
    {label: "Initiated", value: "INITIATED"},
    {label: "Suspended", value: "SUSPENDED"},
]


export const TRANSACTION_TYPES = [
    {label: "Disbursement", value: "DISBURSEMENT"},
    {label: "Collection", value: "COLLECTION"},

]



