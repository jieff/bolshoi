import FilterContract from "@/components/contract/FilterContract"
import TableContract from "@/components/contract/TableContract"
import { Header } from "@/components/Header"

export default function ContratosPage() {
    return (
        <>
            <Header />
            <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Gestão de Contratos</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        + Novo Contrato
                    </button>
                </div>

                <FilterContract />
                <TableContract />
            </div>
        </>

    )
}
