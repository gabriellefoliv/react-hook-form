import "./styles/global.css";

import { useState } from "react";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório").email("Formato de email inválido"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function App() {
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  function createUser(data: unknown) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className="h-screen bg-zinc-50 flex justify-center items-center flex-col gap-10">
      <form
        onSubmit={handleSubmit(createUser)} 
        className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input 
            type="email" 
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Senha</label>
          <input 
            type="password"  
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button 
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
        >
          Salvar
        </button>
      </form>
      
      <pre>{output}</pre>
    </main>
  )
}

