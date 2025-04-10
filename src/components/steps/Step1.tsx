"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
    // Dados do Aluno
    nomeAluno: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    dataNascimento: z.string().min(1, { message: "Data de nascimento é obrigatória" }),
    areaPreferencial: z.string().min(1, { message: "Selecione uma área" }),
    turno: z.string().min(1, { message: "Selecione um turno" }),

    // Dados do Responsável
    nomeResponsavel: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    cpf: z.string().min(11, { message: "CPF inválido" }),
    email: z.string().email({ message: "Email inválido" }),
    telefone: z.string().min(10, { message: "Telefone inválido" }),

    // Endereço
    cep: z.string().min(8, { message: "CEP inválido" }),
    endereco: z.string().min(3, { message: "Endereço é obrigatório" }),
    numero: z.string().min(1, { message: "Número é obrigatório" }),
    complemento: z.string().optional(),
    bairro: z.string().min(1, { message: "Bairro é obrigatório" }),
    cidade: z.string().min(1, { message: "Cidade é obrigatória" }),
})

interface FormStep1Props {
    formData: any
    onUpdate: (data: any) => void
    onNext: () => void
}

export function Step1({ formData, onUpdate, onNext }: FormStep1Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nomeAluno: formData.nomeAluno || "",
            dataNascimento: formData.dataNascimento || "",
            areaPreferencial: formData.areaPreferencial || "",
            turno: formData.turno || "",
            nomeResponsavel: formData.nomeResponsavel || "",
            cpf: formData.cpf || "",
            email: formData.email || "",
            telefone: formData.telefone || "",
            cep: formData.cep || "",
            endereco: formData.endereco || "",
            numero: formData.numero || "",
            complemento: formData.complemento || "",
            bairro: formData.bairro || "",
            cidade: formData.cidade || "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        onUpdate(data)
        onNext()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Informações do Aluno */}
                <div>
                    <h2 className="text-lg font-semibold text-foreground mb-4">Informações do Aluno</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="nomeAluno"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dataNascimento"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="date" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="areaPreferencial"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Área Preferencial</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione a área" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="humanas">Humanas</SelectItem>
                                            <SelectItem value="exatas">Exatas</SelectItem>
                                            <SelectItem value="biologicas">Biológicas</SelectItem>
                                            <SelectItem value="artes">Artes</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="turno"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Turno</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o turno" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="matutino">Matutino</SelectItem>
                                            <SelectItem value="vespertino">Vespertino</SelectItem>
                                            <SelectItem value="noturno">Noturno</SelectItem>
                                            <SelectItem value="integral">Integral</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Informações do Responsável */}
                <div>
                    <h2 className="text-lg font-semibold text-foreground mb-4">Informações do Responsável</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="nomeResponsavel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CPF</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="000.000.000-00" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="telefone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="(00) 00000-0000" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Endereço */}
                <div>
                    <h2 className="text-lg font-semibold text-foreground mb-4">Endereço</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="cep"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CEP</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="00000-000" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="md:col-span-2">
                            <FormField
                                control={form.control}
                                name="endereco"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Endereço</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="numero"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Número</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="complemento"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Complemento</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="bairro"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bairro</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cidade"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cidade</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Próximo →
                    </Button>
                </div>
            </form>
        </Form>
    )
}
