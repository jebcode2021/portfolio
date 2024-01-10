import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { List } from './styles'

type ProjetosProps = {
  nomeUsuario: string
  fontSize?: number
  id: number
  name: string
  language: string
  html_url: string
  default_branch: string
}

const Projetos = ({ nomeUsuario }: ProjetosProps) => {
  const [repos, setRepos] = useState<ProjetosProps[]>([])

  const numeroRepos: string = (repos && repos.length.toString()) || '0'

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [nomeUsuario])

  return (
    <section>
      <Titulo fontSize={16}>{'Repositórios públicos ' + numeroRepos}</Titulo>
      <List>
        {repos.map(
          ({ id, name, language, html_url, default_branch }: ProjetosProps) => (
            <li key={id}>
              <Projeto
                name={name}
                language={language}
                html_url={html_url}
                id={id}
                default_branch={default_branch}
              />
            </li>
          )
        )}
      </List>
    </section>
  )
}

export default Projetos
