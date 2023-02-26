import { RD } from '@/core'
import { SFIcon } from '@/views/shared/SFIcon'
import { ActionIcon, Box, Center, Flex, Navbar as MNavBar } from '@mantine/core'
import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IconItemProps {
  to?: string
  children: ReactNode
}
export const NavBar: FC = () => {
  const { W } = RD.STYLE.NAV_BAR

  const { TAG_VISUAL, TAG_EDITOR, INTRO } = RD.PAGE_LINK

  const { GITHUB_WHITE } = RD.IMG

  const { GITHUB_URL } = RD.AUTHOR

  const IconBox: FC = () => (
    <Box className='text-center'>
      <IconWrapper to={INTRO}>
        <SFIcon icon='faInfo' />
      </IconWrapper>
      <IconWrapper>
        <SFIcon icon='faTag' />
      </IconWrapper>
      <IconWrapper to={TAG_VISUAL}>
        <SFIcon icon='faChartSimple' />
      </IconWrapper>
      <IconWrapper to={TAG_EDITOR}>
        <SFIcon icon='faCode' />
      </IconWrapper>
      <IconWrapper>
        <SFIcon icon='faGear' />
      </IconWrapper>
    </Box>
  )

  const GithubBox: FC = () => (
    <Box mt='auto'>
      <IconWrapper to={GITHUB_URL}>
        <img width='100%' src={GITHUB_WHITE} alt='github-icon' />
      </IconWrapper>
    </Box>
  )
  return (
    <MNavBar width={{ base: W }} height='100%' py='md' px='md'>
      <Flex direction='column' gap='md'>
        <IconBox />
      </Flex>
      <GithubBox />
    </MNavBar>
  )
}

const IconWrapper: FC<IconItemProps> = ({ to, children }) => {
  const LinkWrapper: FC<IconItemProps> = ({ to, children }) => {
    return (
      <>
        {to && <Link to={to}>{children}</Link>}
        {!to && children}
      </>
    )
  }
  return (
    <Center mt='lg'>
      <LinkWrapper to={to}>
        <ActionIcon size='lg' variant='transparent'>
          {children}
        </ActionIcon>
      </LinkWrapper>
    </Center>
  )
}
