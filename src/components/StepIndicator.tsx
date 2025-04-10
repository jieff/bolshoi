import { Check } from "lucide-react"

interface StepIndicatorProps {
    currentStep: number
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
    return (
        <div className="mb-8">
            <div className="relative flex justify-between">
                <div className="flex w-full items-center">
                    <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
                            }`}
                    >
                        {currentStep > 1 ? (
                            <Check className="h-5 w-5 text-white" />
                        ) : (
                            <span
                                className={`text-sm font-medium ${currentStep === 1 ? "text-white" : "text-gray-500 dark:text-gray-400"}`}
                            >
                                1
                            </span>
                        )}
                    </div>
                    <div className={`h-1 w-full ${currentStep > 1 ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`}></div>
                </div>

                <div className="flex w-full items-center">
                    <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
                            }`}
                    >
                        {currentStep > 2 ? (
                            <Check className="h-5 w-5 text-white" />
                        ) : (
                            <span
                                className={`text-sm font-medium ${currentStep === 2 ? "text-white" : "text-gray-500 dark:text-gray-400"}`}
                            >
                                2
                            </span>
                        )}
                    </div>
                    <div className={`h-1 w-full ${currentStep > 2 ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`}></div>
                </div>

                <div className="flex items-center">
                    <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
                            }`}
                    >
                        <span
                            className={`text-sm font-medium ${currentStep === 3 ? "text-white" : "text-gray-500 dark:text-gray-400"}`}
                        >
                            3
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-2 flex justify-between text-xs">
                <div className="text-center">
                    <span className="font-medium">Dados Pessoais</span>
                </div>
                <div className="text-center">
                    <span className="font-medium">Documentação</span>
                </div>
                <div className="text-center">
                    <span className="font-medium">Revisão</span>
                </div>
            </div>
        </div>
    )
}
