import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaDark from './themes/dark'
import { useState } from 'react'
import temaLight from './themes/light'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)
  const [repos] = useState({ name: '' })

  function trocarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  function nomeUsuario() {
    return 'jebcode2021'
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar
          trocarTema={trocarTema}
          nomeUsuario={function (): string {
            return nomeUsuario()
          }}
          name={repos.name}
          id={0}
          bio={''}
          followers={0}
          following={0}
        />
        <main>
          <Sobre
            corGithubStats={
              estaUsandoTemaDark
                ? temaDark.corGithubStats
                : temaLight.corGithubStats
            }
            corPrincipal={
              estaUsandoTemaDark
                ? temaDark.corPrincipal
                : temaLight.corPrincipal
            }
            corIcone={
              estaUsandoTemaDark ? temaDark.corIcone : temaLight.corIcone
            }
            nomeUsuario={nomeUsuario()}
            bio={''}
          />
          <Projetos
            nomeUsuario={nomeUsuario()}
            id={0}
            name={''}
            language={''}
            html_url={''}
            default_branch={''}
          />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
