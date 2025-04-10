"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Check, type File } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
    label: string
    file: File | null
    onFileChange: (file: File | null) => void
    required?: boolean
}

export function FileUpload({ label, file, onFileChange, required = false }: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const uploadedFile = e.dataTransfer.files[0]
            onFileChange(uploadedFile)
        }
    }

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const uploadedFile = e.target.files[0]
            onFileChange(uploadedFile)
        }
    }

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <span className="font-medium">{label}</span>
                {required && <span className="text-xs text-red-500">*Obrigatório</span>}
            </div>

            {file ? (
                <div className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">{file.name}</p>
                            <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => onFileChange(null)}>
                        Remover
                    </Button>
                </div>
            ) : (
                <div
                    className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="mb-3 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                        <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="mb-1 text-sm font-medium">Arraste e solte ou</p>
                    <p className="text-xs text-muted-foreground">PDF, JPG ou PNG (máx. 5MB)</p>

                    <label htmlFor={`file-${label}`} className="mt-4 cursor-pointer">
                        <span className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
                            Escolha o arquivo
                        </span>
                        <input
                            id={`file-${label}`}
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileInput}
                        />
                    </label>
                </div>
            )}
        </div>
    )
}
