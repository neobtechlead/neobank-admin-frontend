import Home from "@/assets/icons/home.svg";
import StoreFront from "@/assets/svgs/StoreFront.svg";
import User from "@/assets/svgs/UserCircle.svg";
import UserThree from "@/assets/svgs/UserThree.svg";
import Report from "@/assets/svgs/Report.svg";

export const CEDIS_CONVERTER = 0.01

export const navBarItems = [
    {
        label: "Overview",
        icon: Home,
        href: "/dashboard",
        description: ""
    },

    {
        label: "Merchants",
        icon: StoreFront,
        href: "/dashboard/merchants",
        description: "Welcome to your dashboard"
    },

    {
        label: "Users",
        icon: User,
        href: "/dashboard/users",
        description: "Welcome to your dashboard"
    },

    {
        label: "Customers",
        icon: UserThree,
        href: "/dashboard/customers",
        description: "Welcome to your dashboard"
    },

    {
        label: "Reports",
        icon: Report,
        href: "/dashboard/reports",
        description: "Welcome to your dashboard"
    },


]


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



