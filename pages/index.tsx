import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../utils/layouts/main'
import { useTestStore } from '../utils/zustand/testStore'

const Home: NextPage = () => {
  const incr = useTestStore((x => x.inc(1)))
  return (
      <MainLayout>
        <Button onClick={incr}>Click me!</Button>
      </MainLayout>
  )
}

export default Home
