import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
import { useState, useEffect } from 'react'

type Props = {
  corGithubStats: string
  corPrincipal: string
  corIcone: string
  nomeUsuario: string
  bio: string
}

const Sobre = (pros: Props) => {
  const [res, setRes] = useState({ bio: '' })

  useEffect(() => {
    fetch(`https://api.github.com/users/${pros.nomeUsuario}`)
      .then((res) => res.json())
      .then((data) => setRes(data))
  }, [pros.nomeUsuario])

  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo tipo="principal">{res.bio}</Paragrafo>
      <GithubSecao>
        <Titulo fontSize={16}>Github Stats</Titulo>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${pros.nomeUsuario}&show_icons=true&theme=${pros.corGithubStats}&include_all_commits=true&count_private=true&border_radius=20px&icon_color=${pros.corIcone}&border_color=${pros.corIcone}&title_color=${pros.corIcone}`}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${pros.nomeUsuario}&theme=${pros.corGithubStats}&border_radius=20px&title_color=${pros.corIcone}&border_color=${pros.corIcone}&layout=compact&langs_count=7`}
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
