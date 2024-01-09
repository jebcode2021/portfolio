import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  border: 1px solid #282a35;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #282a35;
  }
`

export const SidebarConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 80px;
  left: 0;
  margin-left: -150px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 24px;
  }
`
