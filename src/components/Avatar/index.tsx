import { FotoPerfil } from './styles'

type ProjetosProps = {
  nomeUsuario?: string
}

const Avatar = ({ nomeUsuario }: ProjetosProps) => {
  return <FotoPerfil src={`https://github.com/${nomeUsuario}.png`} />
}

export default Avatar
