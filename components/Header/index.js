import Link from "next/link";
import {Sidebar} from "../Sidebar";
import styles from './header.module.scss'

export default function Header() {
    return (
        <header>
            <div className={styles.block_sidebar}>
                <Sidebar />
                <div className={styles.name}>
                    <Link href='/'><a className={styles.logo_name}>Сафронов А. И.</a></Link>
                </div>
            </div>
            <nav className={styles.main}>
                <Link href='/'>Главная</Link>
                <Link href='/projects'>Реализованные задачи</Link>
                <Link href='/inprogress'>Задачи в разработке</Link>
                <Link href='/contacts'>Контакты</Link>
            </nav>
        </header>
    )
}