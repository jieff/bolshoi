"use client"

import { Header } from "@/components/Header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
    Eye,
    FileText,
    PenLine,
    Users,
    CheckCircle,
    Clock,
    FileSignature,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container py-8 px-8">
                <h2 className="mb-6 text-2xl font-bold">Dashboard de Acompanhamento</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Cards principais */}
                    <Card>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-sm text-muted-foreground">Total de Pré-inscrições</p>
                                <h3 className="text-2xl font-bold">247</h3>
                            </div>
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">
                                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-sm text-muted-foreground">Contratos Pendentes</p>
                                <h3 className="text-2xl font-bold">38</h3>
                            </div>
                            <div className="rounded-full bg-orange-100 p-3 dark:bg-orange-950">
                                <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-sm text-muted-foreground">Contratos Assinados</p>
                                <h3 className="text-2xl font-bold">189</h3>
                            </div>
                            <div className="rounded-full bg-green-100 p-3 dark:bg-green-950">
                                <FileSignature className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-sm text-muted-foreground">Em Processamento</p>
                                <h3 className="text-2xl font-bold">20</h3>
                            </div>
                            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-950">
                                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Lista de pré-inscrições recentes */}
                <div className="mt-8 grid gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="text-lg font-medium">Pré-inscrições Recentes</h3>
                                <Link href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                                    Ver todas
                                </Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b text-left text-sm text-muted-foreground">
                                            <th className="pb-2 font-medium">Aluno</th>
                                            <th className="pb-2 font-medium">Responsável</th>
                                            <th className="pb-2 font-medium">Status</th>
                                            <th className="pb-2 font-medium">Data</th>
                                            <th className="pb-2 font-medium">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3">Maria Silva</td>
                                            <td className="py-3">João Silva</td>
                                            <td className="py-3">
                                                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">
                                                    Pendente
                                                </span>
                                            </td>
                                            <td className="py-3">15/03/2025</td>
                                            <td className="py-3">
                                                <div className="flex gap-2">
                                                    <button className="text-muted-foreground hover:text-foreground">
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-muted-foreground hover:text-foreground">
                                                        <PenLine className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Pedro Santos</td>
                                            <td className="py-3">Ana Santos</td>
                                            <td className="py-3">
                                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-950 dark:text-green-300">
                                                    Aprovado
                                                </span>
                                            </td>
                                            <td className="py-3">14/03/2025</td>
                                            <td className="py-3">
                                                <div className="flex gap-2">
                                                    <button className="text-muted-foreground hover:text-foreground">
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-muted-foreground hover:text-foreground">
                                                        <PenLine className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Status e atividades */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="mb-4 text-lg font-medium">Status dos Contratos</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="mb-1 flex justify-between">
                                            <span className="text-sm">Enviados</span>
                                            <span className="text-sm">75%</span>
                                        </div>
                                        <Progress value={60} className="h-2 bg-gray-200 dark:bg-gray-700 [&>*]:bg-green-600 dark:[&>*]:bg-green-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 flex justify-between">
                                            <span className="text-sm">Assinados</span>
                                            <span className="text-sm">60%</span>
                                        </div>
                                        <Progress value={75} className="h-2 bg-gray-200 dark:bg-gray-700 [&>*]:bg-blue-600 dark:[&>*]:bg-blue-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 flex justify-between">
                                            <span className="text-sm">Pendentes</span>
                                            <span className="text-sm">15%</span>
                                        </div>
                                        <Progress value={15} className="h-2 bg-gray-200 dark:bg-gray-700 [&>*]:bg-yellow-500 dark:[&>*]:bg-yellow-300" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="mb-4 text-lg font-medium">Atividades Recentes</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-950">
                                            <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Novo contrato enviado para assinatura</p>
                                            <p className="text-sm text-muted-foreground">Há 5 minutos</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-green-100 p-2 dark:bg-green-950">
                                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Contrato assinado por responsável</p>
                                            <p className="text-sm text-muted-foreground">Há 30 minutos</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-950">
                                            <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Nova pré-inscrição recebida</p>
                                            <p className="text-sm text-muted-foreground">Há 1 hora</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
