import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tag from '../utils/components/blog/Tag'
import TagList from '../utils/components/blog/TagList'
import MainLayout from '../utils/layouts/main'
import { useTestStore } from '../utils/zustand/testStore'

const Home: NextPage = () => {
  const value = useTestStore((x => x.value))
  const Tlist : string[] = ["ae2","appliedenergistics2"]
  //const incr = useTestStore((x => x.inc(value + 1)))
  return (
    <MainLayout>
      <div className='w-full h-full rounded-xl shadow-xl p-4 bg-cyan-50'>


        <Button onClick={() => { }}>Click me!</Button>
        <TagList tags={Tlist}/>
      </div>

    </MainLayout>
  )
}
export default Home
