import styled from 'styled-components'

export const TitleWrapper = styled.div`
  text-align: center;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const InformationWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  text-align: center;

  span.data-name {
    margin-bottom: 20px;
  }
`

export const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  span:first-child {
    flex: 1;
  }
  span:nth-child(2) {
    flex: 3;
    color: ${({ theme }) => theme.pallete.blue[500]};
  }
`
