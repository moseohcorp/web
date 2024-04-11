import Link from "next/link";
import {Button} from "@/components/ui/button";
import {SIDE_MENU} from "@/utils/constant";
import {Bell, Package2} from "lucide-react";

function SideMenuItem() {
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
                SIDE_MENU.map((item) => {
                    return (
                        <Link
                            key={item.label}
                            href={item.to}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <item.icon className="h-4 w-4"/>
                            {item.label}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default function SideMenu() {
    return (
        <div className="border-r bg-muted/40 min-w-[250px]">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6"/>
                        <span className="">Acme Inc</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4"/>
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {
                            <SideMenuItem />
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}