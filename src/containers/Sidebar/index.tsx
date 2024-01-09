import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarConatiner } from './styles'

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarConatiner>
      <Avatar />
      <Titulo fontSize={20}>Jonathan - JebCode</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        jebcode2021
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar mudar</BotaoTema>
    </SidebarConatiner>
  </aside>
)

export default Sidebar
