import { Oswald, Open_Sans } from '@next/font/google'

const oswald = Oswald({ style: 'normal', display: 'fallback', preload: true, subsets: ['latin'] })
const openSans = Open_Sans({ style: 'normal', display: 'fallback', preload: true, subsets: ['latin'] })

export const fonts = { 
    oswald: oswald.className,
    openSans: openSans.className
}

export const imageProps = { 
    dir: '/logo-hortifruti.svg',
    alt: 'Hortifruti Natural da Terra',
    width: 80,
    height: 80
}

export const heading = 'Acesse para rastrear suas encomendas'
export const label = 'Para começar digite seu CPF'
export const placeholder = 'CPF'
