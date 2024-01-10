import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarConatiner } from './styles'
import { useEffect, useState } from 'react'

type Props = {
  trocarTema: () => void
  nomeUsuario: () => string
  name: string
  id: number
  bio: string
  followers: number
  following: number
}

function Sidebar({ nomeUsuario, trocarTema }: Props) {
  const [res, setRes] = useState({
    id: '',
    name: '',
    bio: '',
    followers: '',
    following: ''
  })

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario()}`)
      .then((res) => res.json())
      .then((data) => setRes(data))
  }, [nomeUsuario])

  return (
    <aside>
      <SidebarConatiner>
        <Avatar nomeUsuario={nomeUsuario()} />
        <Titulo fontSize={20}>{(res.id, res.name)}</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          {nomeUsuario()}
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          {res.bio}
        </Descricao>
        <div className="followers-following">
          <Descricao tipo="principal" fontSize={16}>
            {`${res.followers} Seguidores`}
          </Descricao>
          <Descricao tipo="principal" fontSize={16}>
            {`${res.following} Seguindo`}
          </Descricao>
        </div>
        <BotaoTema onClick={trocarTema}>Trocar mudar</BotaoTema>
      </SidebarConatiner>
    </aside>
  )
}

export default Sidebar
