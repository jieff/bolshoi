import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sparkles } from "lucide-react"

export function Header() {
    return (
        <header className="border-b bg-card">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="ml-8 rounded-md bg-blue-600 p-1">
                        <Sparkles className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-xl font-bold">Bolshoi</h1>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="/dashboard" className="font-medium text-muted-foreground hover:text-foreground">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/pre-registration" className="font-medium text-muted-foreground hover:text-foreground">
                                Pré-inscrições
                            </Link>
                        </li>
                        <li>
                            <Link href="/contract" className="font-medium text-muted-foreground hover:text-foreground">
                                Contratos
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}
