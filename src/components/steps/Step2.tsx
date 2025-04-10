"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/FileUpload"

interface FormStep2Props {
    formData: any
    onUpdate: (data: any) => void
    onNext: () => void
    onBack: () => void
}

export function Step2({ formData, onUpdate, onNext, onBack }: FormStep2Props) {
    const [documentos, setDocumentos] = useState({
        rgAluno: formData.documentos?.rgAluno || null,
        comprovanteResidencia: formData.documentos?.comprovanteResidencia || null,
        historicoEscolar: formData.documentos?.historicoEscolar || null,
        carteiraVacinacao: formData.documentos?.carteiraVacinacao || null,
    })

    const handleFileUpload = (type: string, file: File | null) => {
        setDocumentos((prev) => ({
            ...prev,
            [type]: file,
        }))
    }

    const handleNext = () => {
        onUpdate({ documentos })
        onNext()
    }

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-semibold text-foreground">Documentos Necessários</h2>

            <div className="space-y-6">
                <FileUpload
                    label="RG ou CPF do Aluno"
                    file={documentos.rgAluno}
                    onFileChange={(file) => handleFileUpload("rgAluno", file)}
                    required
                />

                <FileUpload
                    label="Comprovante de Residência"
                    file={documentos.comprovanteResidencia}
                    onFileChange={(file) => handleFileUpload("comprovanteResidencia", file)}
                    required
                />

                <FileUpload
                    label="Histórico Escolar"
                    file={documentos.historicoEscolar}
                    onFileChange={(file) => handleFileUpload("historicoEscolar", file)}
                    required
                />

                <FileUpload
                    label="Carteira de Vacinação"
                    file={documentos.carteiraVacinacao}
                    onFileChange={(file) => handleFileUpload("carteiraVacinacao", file)}
                    required
                />
            </div>

            <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={onBack} className="flex items-center gap-1">
                    ← Voltar
                </Button>

                <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={
                        !documentos.rgAluno ||
                        !documentos.comprovanteResidencia ||
                        !documentos.historicoEscolar ||
                        !documentos.carteiraVacinacao
                    }
                >
                    Próximo →
                </Button>
            </div>
        </div>
    )
}
