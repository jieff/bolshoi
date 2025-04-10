"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { StepIndicator } from "@/components/StepIndicator"
import { Step1 } from "@/components/steps/Step1"
import { Step2 } from "@/components/steps/Step2"
import { Step3 } from "@/components/steps/Step3"
import { Button } from "@/components/ui/button"

export default function PreInscricao() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState<any>({})

    const updateFormData = (data: any) => {
        setFormData((prev: any) => ({ ...prev, ...data }))
    }

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

    const handleSubmit = () => {
        console.log("Dados enviados:", formData)
    }

    return (
        <>
            <Header />

            <div className="flex min-h-screen items-center justify-center bg-muted">
                <div className="container max-w-3xl py-10">
                    <h2 className="mb-6 text-xl font-bold">Formulário de Pré-inscrição</h2>
                    <StepIndicator currentStep={currentStep} />

                    <div className="bg-white dark:bg-background rounded-lg border p-6 shadow-sm">
                        {currentStep === 1 && (
                            <Step1 formData={formData} onUpdate={updateFormData} onNext={nextStep} />
                        )}
                        {currentStep === 2 && (
                            <Step2 formData={formData} onUpdate={updateFormData} onNext={nextStep} onBack={prevStep} />
                        )}
                        {currentStep === 3 && (
                            <Step3 formData={formData} onUpdate={updateFormData} onSubmit={handleSubmit} onBack={prevStep} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
