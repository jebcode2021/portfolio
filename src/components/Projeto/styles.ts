import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  border-radius: 4px;
  margin-top: 24px;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotaoHover};
    color: ${(props) => props.theme.corTexto};
  }
`
