/* eslint-disable no-extra-parens */
import styled from 'styled-components'

export const ImageWrapper = styled.div`
  display: none;

  overflow: hidden;
  border-radius: 50%;

  @media (min-width: 1280px) {
    display: flex;
  }
`

export const TableWrapper = styled.div`
  display: flex;
`

export const Action = styled.div`
  width: 250px;
  max-height: ${({ theme }) => theme.rawSizes.try};

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  --hgo-grad-min: ${({ theme }) => theme.pallete.blue[500]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.blue[800]};

  border-radius: ${({ theme }) => theme.rawSizes.sm};
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(125deg, var(--hgo-grad-max), var(--hgo-grad-min), var(--hgo-grad-max));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 1400px) {
    margin-top: ${({ theme }) => theme.rawSizes.xs};
  }
`

export const Table = styled.table`
  padding: 1rem;
  width: 40vw;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`

export const TableHeader = styled.thead``

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.rawSizes.xs};

  @media (min-width: 1280px) {
    display: table-row;
  }
`

export const TableHead = styled.th.attrs((props) => ({
  colSpan: props.colspan || '1'
}))`
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: 700;
  font-size: ${({ theme }) => theme.rawSizes.xl};
  line-height: ${({ theme }) => theme.rawSizes.try};
  color: ${({ theme }) => theme.pallete.grey[800]};
`

export const TableData = styled.td.attrs((props) => ({
  colSpan: props.colspan || '1'
}))`
  background-color: ${({ theme }) => theme.pallete.grey[200]};
  background-color: ${(props) =>
    props.bold ? `${props.theme.pallete.grey[500]}` : `${props.theme.pallete.grey[200]}`};
  border-top-left-radius: ${(props) => (props.bold ? `${props.theme.rawSizes.md}` : '0')};
  border-top-right-radius: ${(props) => (props.bold ? `${props.theme.rawSizes.md}` : '0')};
  border-bottom-right-radius: ${(props) => (props.bold ? '0' : `${props.theme.rawSizes.md}`)};
  border-bottom-left-radius: ${(props) => (props.bold ? '0' : `${props.theme.rawSizes.md}`)};
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: ${(props) => (props.bold ? '800' : '600')};
  font-size: ${({ theme }) => theme.rawSizes.md};
  padding: ${({ theme }) => theme.rawSizes.xs};
  padding-left: ${(props) =>
    props.bold ? `${props.theme.rawSizes.xs}` : `${props.theme.rawSizes.md}`};
  text-align: center;
  color: ${(props) =>
    props.bold ? `${props.theme.pallete.light[100]}` : `${props.theme.pallete.grey[700]}`};
  display: ${(props) => (props.flex ? 'flex' : 'table-cell')};
  /*  */

  @media (min-width: 1280px) {
    text-align: ${(props) => (props.bold ? 'center' : 'left')};
    border-radius: ${({ theme }) => theme.rawSizes.md};
  }
`
