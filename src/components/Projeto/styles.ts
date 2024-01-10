import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
  }
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: block;
  border-radius: 4px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotaoHover};
    color: ${(props) => props.theme.corTexto};
  }
`
