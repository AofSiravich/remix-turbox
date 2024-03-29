import React, { useEffect, useState } from "react";
import { Separator } from "~/components/ui/separator";
import { SidebarNav } from "./SidebarNav";
import FormsProfile from "./FormsProfile";
import { useLocation } from "@remix-run/react";
import FormsAccount from "./FormsAccount";
import FormsAppearance from "./FormsAppearance";
import FormsNotifications from "./FormsNotifications";
import FormsDisplay from "./FormsDisplay";

type Props = {};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/forms",
  },
  {
    title: "Account",
    href: "/forms/account",
  },
  {
    title: "Appearance",
    href: "/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/forms/notifications",
  },
  {
    title: "Display",
    href: "/forms/display",
  },
];

interface FormsProps {}

const Forms = (props: FormsProps) => {
  const [children, setChildren] = useState<React.ReactNode>(<FormsProfile />);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/forms":
        setChildren(<FormsProfile />);
        break;
      case "/forms/account":
        setChildren(<FormsAccount />);
        break;
      case "/forms/appearance":
        setChildren(<FormsAppearance />);
        break;
      case "/forms/notifications":
        setChildren(<FormsNotifications />);
        break;
      case "/forms/display":
        setChildren(<FormsDisplay />);
        break;
      default:
        setChildren(<div>404</div>);
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Forms;
