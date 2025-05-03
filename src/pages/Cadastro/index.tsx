import { HomeContainer, BoxContainer } from "./styles"
import ctLogo from '../../assets/ct-logo.svg'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { useMutation } from "@tanstack/react-query"
import { RegisterAPI } from "../../api/register"

const registerForm = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type registerForm = z.infer<typeof registerForm>


export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<registerForm>()

  const { mutateAsync: registerFn } = useMutation({
    mutationFn: RegisterAPI,
  })

  async function handleRegister(data: registerForm) {

    try {
      await registerFn({ email: data.email,name: data.name, password: data.password})
    }catch(err){
      console.log(err)
    }
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <HomeContainer>
      <BoxContainer>
        <img src={ctLogo} alt="CT Junior" className="logo" />

        <text>Realizar Cadastro</text>
        <form onSubmit={handleSubmit(handleRegister)}>
        <input type="text" placeholder="Email" {...register('email')} />
        <input type="password" placeholder="Usuário(obs max = 15 caracteres)" {...register('name')}/>
        <input type="password" placeholder="Senha(obs min = 4 letras)" {...register('password')}/>
        <input type="password" placeholder="Confirmar senha" />
        <button disabled={isSubmitting} >Cadastrar</button>
        </form>
      </BoxContainer>
    </HomeContainer>)
}