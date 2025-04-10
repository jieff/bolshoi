"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PencilIcon, CheckCircle } from "lucide-react"
import Link from "next/link"

interface FormStep3Props {
    formData: any
    onUpdate: (data: any) => void
    onSubmit: () => void
    onBack: () => void
}

export function Step3({ formData, onUpdate, onSubmit, onBack }: FormStep3Props) {
    const [aceitouTermos, setAceitouTermos] = useState(formData.aceitouTermos || false)

    const handleTermsChange = (checked: boolean) => {
        setAceitouTermos(checked)
        onUpdate({ aceitouTermos: checked })
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("pt-BR")
    }

    return (
        <div className="space-y-6">
            {/* Dados Pessoais */}
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Dados Pessoais</h2>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        <PencilIcon className="h-4 w-4" />
                        Editar
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-muted-foreground">Nome do Aluno</p>
                        <p className="font-medium">{formData.nomeAluno}</p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">Data de Nascimento</p>
                        <p className="font-medium">{formatDate(formData.dataNascimento)}</p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">Nome do Responsável</p>
                        <p className="font-medium">{formData.nomeResponsavel}</p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">E-mail</p>
                        <p className="font-medium">{formData.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">Telefone</p>
                        <p className="font-medium">{formData.telefone}</p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">Série Pretendida</p>
                        <p className="font-medium">2º Ano - Ensino Fundamental</p>
                    </div>
                </div>
            </div>

            {/* Documentos */}
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Documentos</h2>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        <PencilIcon className="h-4 w-4" />
                        Editar
                    </Button>
                </div>

                <div className="space-y-3">
                    {formData.documentos?.rgAluno && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="rounded-sm bg-red-100 p-1 dark:bg-red-900">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm">RG_Aluno.pdf</span>
                            </div>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                    )}

                    {formData.documentos?.comprovanteResidencia && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="rounded-sm bg-red-100 p-1 dark:bg-red-900">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm">Comprovante_Residencia.pdf</span>
                            </div>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                    )}

                    {formData.documentos?.historicoEscolar && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="rounded-sm bg-red-100 p-1 dark:bg-red-900">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm">Historico_Escolar.pdf</span>
                            </div>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                    )}

                    {formData.documentos?.carteiraVacinacao && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="rounded-sm bg-red-100 p-1 dark:bg-red-900">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm">Carteira_Vacinacao.pdf</span>
                            </div>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                    )}
                </div>
            </div>

            {/* Termos e Condições */}
            <div className="flex items-start space-x-2">
                <Checkbox id="terms" checked={aceitouTermos} onCheckedChange={handleTermsChange} />
                <div className="grid gap-1.5 leading-none">
                    <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Declaro que li e concordo com os{" "}
                        <Link href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                            Termos e Condições
                        </Link>{" "}
                        e{" "}
                        <Link href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                            Política de Privacidade
                        </Link>{" "}
                        da instituição.
                    </Label>
                </div>
            </div>

            <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={onBack} className="flex items-center gap-1">
                    ← Voltar
                </Button>

                <Button type="button" onClick={onSubmit} className="bg-green-600 hover:bg-green-700" disabled={!aceitouTermos}>
                    Finalizar Pré-inscrição
                </Button>
            </div>
        </div>
    )
}
