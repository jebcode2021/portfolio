import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Pros = {
  name: string
  language: string
  html_url: string
  id: number
  default_branch: string
}

const Projeto = ({ name, html_url, language, default_branch }: Pros) => {
  return (
    <Card>
      <Titulo>{name}</Titulo>
      <div className="info">
        <Paragrafo tipo="secundario">{`Language: ${language}`}</Paragrafo>
        <Paragrafo tipo="secundario">{`Branch: ${default_branch}`}</Paragrafo>
      </div>
      <LinkBotao target="_blank" href={html_url}>
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto
