import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
export function MainLayout({ children,title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="university,
                    Сафронов,
                    tsu,ТГУ,
                    Тольятти,
                    Баллистика,
                    Государственный Университет
                    "/>
                <meta name="description" content="Разработка выпускных квалификационных работ.
                    Тематика баллистических исследований.
                    Ведется студентами Тольяттинского Государственного Университета."/>
                <meta charSet="utf-8"/>
            </Head>
            <Header/>
            <main>
                {children}
            </main> 
            <style jsx global>{`
               main{ 
                    margin-top:100px;
                }
            `}</style>
        </>
    )
}