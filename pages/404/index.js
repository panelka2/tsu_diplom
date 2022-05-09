import { MainLayout } from "../../components/MainLayout";
import classes from './error.module.scss'
import Link from "next/link";
export default function ErrorPage() {
    return (
    <MainLayout title={'Ошибка 404'}>
        <div className={classes.error}>
            <h1>Ошибка 404</h1>
            <Link href='/'>Вернуться на главную </Link> 
        </div>
    </MainLayout>
    )
}