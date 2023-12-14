// import Image from 'next/image';

// import { Sponsors } from '@/components/Sponsors';
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'

import Cta from '@/components/cta'
import FeaturesBlocks from '@/components/features/blocks'
import FeaturesHome from '@/components/features/home'
import FeaturesWorld from '@/components/features/world'
import Hero from '@/components/hero/home'
import News from '@/components/news'

const Index = () => (
  <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
  >
    <Hero />
    <FeaturesHome />
    <FeaturesBlocks />
    <FeaturesWorld />
    <News />
    <Cta />
  </Main>
)

export default Index
