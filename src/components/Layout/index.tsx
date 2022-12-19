import Head from "next/head";
import { ReactNode } from "react";

interface ILayoutProps { 
    title: string;
    description: string;
    children: ReactNode;
    className?: string;
}

function Layout({ title, description , children, className }: ILayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={className}>
                {children}
            </main>
        </>
    )
}

export default Layout;