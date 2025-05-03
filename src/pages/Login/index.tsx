import { HomeContainer, BoxContainer } from "./styles"
import { useForm } from "react-hook-form"
import ctLogo from '../../assets/ct-logo.svg'
import { z } from 'zod'
import { useMutation } from "@tanstack/react-query"
import { LoginAPI } from "../../api/login"
import { useNavigate } from "react-router-dom" // Importa o hook useNavigate

const signInForm = z.object({
  email: z.string().email(),
  password: z.string()
})

type signInForm = z.infer<typeof signInForm>

export function Login() {

  const navigate = useNavigate() // Inicializa o hook useNavigate

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInForm>()

  const { mutateAsync: authenticate} = useMutation({
    mutationFn: LoginAPI,
  })

  async function handleSignIn(data: signInForm) {

    try {
      await authenticate({ email: data.email, password: data.password})
      navigate('/home') // Redireciona para a página inicial após o login
    }catch(err){
      console.log(err)
    }
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <HomeContainer>
      <BoxContainer>
        <img src={ctLogo} alt="CT Junior" className="logo" />

        <form onSubmit={handleSubmit(handleSignIn)}>
          <input type="text" placeholder="Login" {...register('email')} />
          <input type="password" placeholder="Senha"  {...register('password')} />

          <button disabled={isSubmitting} >Entrar</button>
        </form>
        
        <p>
          <a href="/cadastro">Não possui senha? <br />Clique aqui para se cadastrar</a>
        </p>
      </BoxContainer>
    </HomeContainer>)
}