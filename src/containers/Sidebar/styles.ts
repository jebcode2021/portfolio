import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corDeFundoBotao2};
  border: 1px solid: ${(props) => props.theme.corDeFundoBotao2};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotaoHover2};
    color: ${(props) => props.theme.corDaBorda};
  }
`

export const SidebarConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 24px;
  background-color: ${(props) => props.theme.corFundo};
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px ${(props) => props.theme.corDeFundoBoxShadow};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  position: sticky;
  top: 80px;
  left: 0;
  margin-left: -150px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    top: -8px;
    display: flex;
    position: relative;
  }

  .followers-following {
    display: flex;
    align-items: left;
    justify-content: space-between;
    width: 100%;
    margin-top: -40px;
    margin-bottom: -24px;
    padding: 0 24px;

    @media (max-width: 768px) {
      padding: 0 24px;
      margin-top: -24px;
      margin-bottom: -20px;
    }
  }
`
