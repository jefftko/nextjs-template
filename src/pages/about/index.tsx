import Career from '@/components/career'
import Cta from '@/components/cta-02'
import Process from '@/components/process'
import Stats from '@/components/stats'
import Team from '@/components/team'
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'

import Intro from './intro'
import Story from './story'

export default function About() {
  return (
    <Main meta={<Meta title="About-Simple" description="Page description" />}>
      <Intro />
      <Story />
      <Stats />
      <Team />
      <Career />
      <Process />
      <Cta />
    </Main>
  )
}
