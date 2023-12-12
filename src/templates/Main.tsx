'use client'
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


import { AppConfig } from '@/utils/AppConfig';
import Header from '@/components/ui/header/default';


type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
     useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  return (
  <>
    {props.meta}
    <Header />
      <main>{props.children}</main>
  </>
)};

export { Main };