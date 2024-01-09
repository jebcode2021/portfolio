import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarConatiner } from './styles'

const Sidebar = () => (
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
      <BotaoTema type="button">Trocar mudar</BotaoTema>
    </SidebarConatiner>
  </aside>
)

export default Sidebar
