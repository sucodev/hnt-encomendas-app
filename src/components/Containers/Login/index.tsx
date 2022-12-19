import Image from 'next/image';

import { fonts, imageProps } from './constants';
import { LoginForm } from './Form';

export function LoginContainer() {

    return (
        <div className={`min-h-screen w-full flex justify-center items-center`}>
            <div className='flex flex-col justify-between gap-14 bg-white w-full min-h-screen sm:min-h-[200px] sm:w-[500px] p-4 sm:p-10 rounded-lg'>
                <Image src={imageProps.dir} width={imageProps.width} height={imageProps.height} alt={imageProps.alt} />
                <LoginForm />
                <p className={`${fonts.openSans} text-gray-300 text-center text-sm`}>Versão: {process.env.NEXT_PUBLIC_VERSION_APP}</p>
            </div>
        </div>
    )
}