import React from 'react'
import styled from '@emotion/styled'
import { RangedHitCard as RangedHitCardProps } from './types'
import { Border, Footer, Title } from '../components'

interface Props {
  card: RangedHitCardProps
}

export const RangedHitCard: React.FC<Props> = ({ card }) => {
  const { title, footer, type } = card
  return (
    <Border>
      <Title>
        {title} {type}
      </Title>
      <CardArea>tussi</CardArea>
      <Footer>{footer}</Footer>
    </Border>
  )
}

const CardArea = styled.div`
  background-color: blue;
  height: 5em;
`
