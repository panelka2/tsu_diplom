import { MainLayout } from "../components/MainLayout"
import Link from "next/link";
import Image from "next/dist/client/image";
import styles from '../styles/index.module.scss'
export default function Index() {
    return (
        <MainLayout title={'Главная страница'}> 
            <header className={styles.name_page}>Научная тематика кафедры ПМИ. Баллистическое направление.</header>
            <div className={styles.block_with_logo}>
                <h2>Разработка выпускных квалификационных работ.<br/>Тематика баллистических исследований.<br/>Ведется студентами Тольяттинского Государственного Университета.</h2>
                <a href="https://www.tltsu.ru/">
                    <Image 
                        alt="logo_tsu"  
                        src="/index_images/logo_tsu.png"
                        width="640"
                        height="148"
                    />    
                </a>
            </div>
            
            <div className={styles.block_with_logo}>
                <h2>Александр Иванович Сафронов</h2>
                <div>
                    Узнать подробнее о преподавателе можно на сайте Тольяттинского Государственного Университета - <a href="https://www.tltsu.ru/sveden/employees/safronov-aleksandr-ivanovich/">перейти</a>
                </div>
            </div>
            
            <div className={styles.block_with_logo}>
                <h2>Реализованные задачи</h2>
                <div>
                    Ознакомиться с выпускными квалификационными работами можно в шапке сайта, либо по <Link href='/projects'> ссылке </Link>
                </div>
            </div>

            <div className={styles.block_with_logo}>
                <h2>Задачи в разработке</h2>
                <div>
                    Для ознакомления с выпускными квалификационными работами, находящимися в настоящее время в разработке,  можно в шапке сайта, либо по <Link href='/inprogress'> ссылке </Link>
                </div>
            </div>

            <div className={styles.block_with_logo}>
                <h2>Контакты</h2>
                <div>
                    Данные для связи с профессором Сафроновым или разработчиком ресурса доступны в шапке сайта, либо по <Link href='/contacts'> ссылке </Link>
                </div>
            </div>
            <div className={styles.block_with_logo}>
                <h2>Работы профессора Сафронова</h2>
                <div>
                    <iframe src="https://drive.google.com/file/d/1QEDFJTzKoc1izFj5iVaUezRLo0kSr1dC/preview" className={styles.block_docs} allow="autoplay"></iframe>
                </div>
            </div>
            <div className={styles.block_with_logo}>
                <div>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQfY3XF72E1l7y4Z80l2wj6SN9ys56mExRID8aETQw0j7JETpD_98XD0wzmuPDpnA/pub?embedded=true" className={styles.block_docs} allow="autoplay"></iframe>
                </div>
                <div>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ_-d_GLEUDIQK_fsyn0g1i4GCLCjjkaSap3QCgusEI7HZEF47d15ndGBnVW8Z9Jw/pub?embedded=true" className={styles.block_docs} allow="autoplay"></iframe>
                </div>
            </div>
            <div className={styles.block_with_logo}>
                <div>
                    <iframe src="https://drive.google.com/file/d/1qy3z7-qP-JnNG44ap_Y0L8gkMxRMbuiB/preview"  className={styles.block_docs} allow="autoplay"></iframe>
                </div>
            </div>
            
        </MainLayout> 
    )
}