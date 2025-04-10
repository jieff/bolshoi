export default function FilterContract() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <select className="border p-2 rounded-md col-span-1">
                <option>Todos os status</option>
                <option>Em Assinatura</option>
                <option>Concluído</option>
            </select>
            <input type="date" className="border p-2 rounded-md col-span-1" />
            <input type="text" placeholder="Nome do responsável" className="border p-2 rounded-md col-span-1" />
            <input type="text" placeholder="Nome do aluno" className="border p-2 rounded-md col-span-1" />
        </div>
    )
}
