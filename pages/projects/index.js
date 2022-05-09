import { MainLayout } from "../../components/MainLayout"
import IvanovCard from "../../components/Cards/IvanovCard"
import StepanovaCard from "../../components/Cards/StepanovaCard"
import styles from "./projects.module.scss"
import SteninCard from "../../components/Cards/SteninCard"

export default function About() {

    return (
        <MainLayout title={'Реализованные задачи'}>
            <div className={styles.block_text}>
                <div className={styles.name_page}>Реализованные задачи</div>
                <div className={styles.description}>Ознакомьтесь с завершенными проектами,<br/> <a>которые нашли,</a> <br/><a>либо найдут себе применение в будущем.</a></div>
            </div>
            <StepanovaCard/>
            <SteninCard />
        </MainLayout>
    )
}