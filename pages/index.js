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
                <span>
                    Узнать подробнее о преподавателе можно на сайте Тольяттинского Государственного Университета - <a href="https://www.tltsu.ru/sveden/employees/safronov-aleksandr-ivanovich/">перейти</a>
                </span>
            </div>
            
            <div className={styles.block_with_logo}>
                <h2>Реализованные задачи</h2>
                <span>
                    Ознакомиться с выпускными квалификационными работами можно в шапке сайта, либо по <Link href='/projects'> ссылке </Link>
                </span>
            </div>

            <div className={styles.block_with_logo}>
                <h2>Задачи в разработке</h2>
                <span>
                    Для ознакомления с выпускными квалификационными работами, находящимися в настоящее время в разработке,  можно в шапке сайта, либо по <Link href='/inprogress'> ссылке </Link>
                </span>
            </div>

            <div className={styles.block_with_logo}>
                <h2>Контакты</h2>
                <span>
                    Данные для связи с профессором Сафроновым или разработчиком ресурса доступны в шапке сайта, либо по <Link href='/contacts'> ссылке </Link>
                </span>
            </div>
            <div className={styles.block_with_logo}>
                <h2>Работы профессора Сафронова</h2>
                <span>
                    <iframe src="https://drive.google.com/file/d/1QEDFJTzKoc1izFj5iVaUezRLo0kSr1dC/preview" width="640" height="480" allow="autoplay"></iframe>
                </span>
            </div>
            
        </MainLayout> 
    )
}