import Home from "@/assets/icons/home.svg";
import StoreFront from "@/assets/svgs/StoreFront.svg";
import User from "@/assets/svgs/UserCircle.svg";
import UserThree from "@/assets/svgs/UserThree.svg";
import Report from "@/assets/svgs/Report.svg";

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