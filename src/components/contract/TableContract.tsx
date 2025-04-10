import { Eye, Share2, Download } from "lucide-react"
import StatusBadge, { StatusType } from "./StatusBadge"

type Contract = {
    id: string
    titulo: string
    responsavel: {
        nome: string
        email: string
    }
    status: StatusType
    enviadoEm: string
    atualizadoEm: string
}

export default function TableContract() {
    const contratos: Contract[] = [
        {
            id: "#CON-2025-001",
            titulo: "Matrícula 2025 – Maria Silva",
            responsavel: { nome: "João Silva", email: "joao.silva@email.com" },
            status: "Em Assinatura",
            enviadoEm: "15/03/2025 14:30",
            atualizadoEm: "15/03/2025 Visualizado",
        },
        {
            id: "#CON-2025-002",
            titulo: "Matrícula 2025 – Pedro Santos",
            responsavel: { nome: "Ana Santos", email: "ana.santos@email.com" },
            status: "Concluído",
            enviadoEm: "14/03/2025 09:15",
            atualizadoEm: "14/03/2025 Assinado",
        },
    ]

    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-md shadow">
            <table className="w-full text-sm text-left text-gray-800 dark:text-gray-100">
                <thead className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
                    <tr>
                        <th className="p-3">Contrato</th>
                        <th className="p-3">Responsável</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Enviado em</th>
                        <th className="p-3">Última atualização</th>
                        <th className="p-3">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contratos.map((c, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <td className="p-3">
                                <div className="font-semibold">{c.titulo}</div>
                                <div className="text-gray-500 dark:text-gray-400">{c.id}</div>
                            </td>
                            <td className="p-3">
                                <div className="font-semibold">{c.responsavel.nome}</div>
                                <div className="text-gray-500 dark:text-gray-400">{c.responsavel.email}</div>
                            </td>
                            <td className="p-3"><StatusBadge status={c.status} /></td>
                            <td className="p-3">{c.enviadoEm}</td>
                            <td className="p-3">{c.atualizadoEm}</td>
                            <td className="p-3 space-x-2">
                                <button title="Visualizar" className="hover:text-blue-600">
                                    <Eye size={18} />
                                </button>
                                <button title="Compartilhar" className="hover:text-blue-600">
                                    <Share2 size={18} />
                                </button>
                                <button title="Baixar Contrato" className="hover:text-blue-600">
                                    <Download size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
