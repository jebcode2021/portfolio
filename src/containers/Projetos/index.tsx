import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { List } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <List>
      <li>
        <Projeto />
      </li>
    </List>
  </section>
)

export default Projetos
