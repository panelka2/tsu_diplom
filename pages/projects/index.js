import { MainLayout } from "../../components/MainLayout"
import StepanovaCard from "../../components/Cards/StepanovaCard"
import styles from "./projects.module.scss"
import OsinCard from "../../components/Cards/OsinCard"
import TokarevCard from "../../components/Cards/TokarevCard"
import MorozovCard from "../../components/Cards/MorozovCard"

export default function About() {

    return (
        <MainLayout title={'Реализованные задачи'}>
            <div className={styles.block_text}>
                <div className={styles.name_page}>Реализованные задачи</div>
                <div className={styles.description}>Ознакомьтесь с завершенными проектами,<br/> <a>которые нашли,</a> <br/><a>либо найдут себе применение в будущем.</a></div>
            </div>
            <OsinCard />
            <TokarevCard/>
            <MorozovCard/>
            <StepanovaCard/>
        </MainLayout>
    )
}