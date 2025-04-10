export type StatusType = "Em Assinatura" | "Concluído"

const styles: Record<StatusType, string> = {
    "Em Assinatura": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
    "Concluído": "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
}

export default function StatusBadge({ status }: { status: StatusType }) {
    return (
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${styles[status]}`}>
            {status}
        </span>
    )
}
