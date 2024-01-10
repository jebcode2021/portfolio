import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 4px;
    background-color: ${(props) => props.theme.corPrincipal};
    margin: 0 auto;
    margin-top: 8px;
  }
`
