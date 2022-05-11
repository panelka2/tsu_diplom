import { MainLayout } from "../../../components/MainLayout"
import styles from './style.module.scss'
import Image from "next/image"
export default function About() {
    
    return (
        <MainLayout title={'Project|Stepanova'}>
            <main className={styles.main_page}>

                <section className={styles.name_vkr}>
                    <h1>
                        <span className={styles.first_word_name_project}>Разработка</span> программного обеспечения оценки знаний студентов (на примере ИП Кириченко И.В.)
                    </h1>
                </section>

                <section className={styles.first_section}>
                    <header>Разработчик</header>
                    <div className={styles.about_blocks}>
                        <div>
                            <h2>Студент</h2>
                            <span>Тольяттинского Государственного Университета </span>
                            <span>М.В.Степанова</span>
                        </div>
                        <div>
                            <h2>По направлению</h2>
                            <span>Институт математики, физики и информационных технологий</span><br/>
                            <span>Прикладная математика и информатика</span><br/>
                            <span>Бизнес-информатика</span>
                        </div>
                        <div>
                            <h2>Под руководством</h2>
                            <span>Доктора физико-математических наук, <br/>профессора Александра Ивановича Сафронова</span>
                        </div>
                    </div>
                </section>

                <section className={styles.second_section}>
                    <header>О проекте</header>
                    <h2>Основным достоинством любого современного специалиста являются знания. Однако, чтобы оценить уровень знаний необходимы специальные технологии, позволяющие выставлять оценку объективно и непредвзято. Автоматизированная система тестирования является одним из вариантов решения данной задачи.</h2>
                </section>

                <section className={styles.third_section}>
                    <header>Поставленные задачи</header>
                    <h1>
                        <span>- проанализировать литературу по заданной теме</span> <br/><br/>
                        <span>- изучить предметную область</span> <br/><br/>
                        <span>- обосновать необходимость разработки информационной системы </span><br/> <br/>
                        <span>- описать техническое, программное и технологическое обеспечение</span> <br/><br/>
                        <span>- провести тестирование разработанной системы </span><br/>
                    </h1>    
                </section>

                <section className={styles.fourth_section}>
                    <header>Моделирование</header>
                    <h2>
                        В настоящее время большинство преподавателей ИП Кириченко И.В. использует классический подход к оценке знаний студентов, который предполагает проведение экзамена при помощи билетов
                    </h2>

                    <div className={styles.block_photos_fourth_section}>
                        <div className={styles.solo_block}>
                            <h3>Схема</h3>
                            <ul className={styles.points_in_block}>
                                <li>Студент выюирает билет</li>
                                <li>Готовится к ответу,отвечает</li>
                                <li>Полученный разультат попадает в ведомость</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/stepanova_images/diagram.jpg"
                                    width="1009"
                                    height="530"
                                />
                            </div>
                            <p>Декомпозированная диаграмма процесса «КАК ЕСТЬ»</p>
                        </div>

                        <div className={styles.solo_block}>
                            <h3>Информационная модель</h3>
                            <ul className={styles.points_in_block}>
                                <li>«Студенты» - перечень зарегистрированных студентов </li>
                                <li>«Тесты» - набор загруженных тестов</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/stepanova_images/model.jpg"
                                    width="849"
                                    height="537"
                                />
                            </div>
                            <p>Логическая модель отображает схему движения входных, промежуточных и результативных потоков</p>
                        </div>

                        <div className={styles.solo_block}>
                        <div><h3>Диаграмма состояний</h3></div>
                            <ul className={styles.points_in_block}>
                                <li>Просмотр имеющихся в системе тестов</li>
                                <li>Редактирование тестов</li>
                                <li>Добавление и удаление тестов;</li>
                                <li>Назначение тестов студентам</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram1" 
                                    src="/stepanova_images/diagram1.jpg"
                                    width="691"
                                    height="489"
                                />
                            </div>
                            <p>Диаграмма возможных состояний программы, выполняющейся под учетной записью администратора</p>
                        </div>
                    </div>
                </section>

                <section className={styles.fifth_section}>
                    <header>Реализация проектных решений</header>
                    <h2>
                        В рамках разработки информационных систем под кодированием понимается «процесс присвоения объектам кодовых обозначений с целью однозначной идентификации объектов, а также для обеспечения требуемой достоверности кодируемой информации» 
                    </h2>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Структурная схема проекта</h3>
                            <div>
                                <Image 
                                    alt="scheme_of_project" 
                                    src="/stepanova_images/scheme_of_project.jpg"
                                    width="368"
                                    height="556"
                                />
                            </div>
                            <p>Модули, созданные при разработке продукта:DAO, FormLogin, Registration, AdminView, FormAddTest, ViewTest, StudentView, Test.</p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Диаграмма классов</h3>
                            <div>
                                <Image 
                                    alt="diagram_of_classes" 
                                    src="/stepanova_images/diagram_of_classes.jpg"
                                    width="1009"
                                    height="828"
                                />
                            </div>
                            <p>Схема взаимосвязи программных модулей и информационных файлов</p>
                        </div>
                    </div>

                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Форма авторизации</h3>
                            <div>
                                <Image 
                                    alt="form_auth" 
                                    src="/stepanova_images/form_auth.jpg"
                                    width="578"
                                    height="473"
                                />
                            </div>
                            <p>Первая форма приложения, которую видит пользователь – форма авторизации </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Диаграмма классов</h3>
                            <div>
                                <Image 
                                    alt="form_registr" 
                                    src="/stepanova_images/form_registr.jpg"
                                    width="684"
                                    height="614"
                                />
                            </div>
                            <p>Используя эту форму, пользователь может перейти на процесс регистрации в системе, либо на работу с системой</p>
                        </div>
                    </div>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Просмотр и редактирование теста</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/stepanova_images/text_editor.jpg"
                                    width="974"
                                    height="731"
                                />
                            </div>
                            <p>При выборе конкретной ячейки ее значение переносится в окно для редактирования, расположенное в нижней части экрана </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Интерфейс администратора «Статистика»</h3>
                            <div>
                                <Image 
                                    alt="admin_it" 
                                    src="/stepanova_images/admin_it.jpg"
                                    width="974"
                                    height="731"
                                />
                            </div>
                            <p>Вкладка отображает результаты студентов по пройденным тестам. </p>
                        </div>
                    </div>
                </section>
                <section className={styles.third_section}>
                    <header>Заключение</header>
                    <div className={styles.sixth_text}>
                        <h1>
                            В рамках выполнения данной выпускной квалификационной работы было создано программное обеспечение оценки знаний студентов.
                        </h1> 
                        <p>Затронутая тема является очень актуальной, т.к. на сегодняшний день высшее образование является одним из ключевых моментов при устройстве на работу в любой сфере человеческой деятельности. В большинстве случаев работодателю не столько важно наличие диплома, сколько наличие знаний. Автоматизированные системы тестирования существенно упрощают процесс проверки остаточных знаний – они способны за ограниченный промежуток времени провести опрос по многим областям знаний. Кроме того, одним из преимуществ подобных систем является адекватность и объективность их оценки – у компьютера отсутствует предвзятое отношение к тестируемому, он не способен завышать или занижать реально полученный балл.</p><br/>
                        <p>Недостатком систем оценки знаний является факт того, что, как и любые программные продукты, они могут быть взломаны и обмануты. В истории использования автоматизированных систем тестирования известно немало подобных случаев.</p><br/>
                        <p>Еще одним из недостатков является возможность «списывания» - в век информационных технологий и глобального распространения сети Интернет студенту очень просто воспользоваться возможностями поисковых систем, особенно в тех случаях, когда тестирование ведется через клиент-серверное приложение. Отсюда вытекает преимущество оффлайн систем – их использование возможно на компьютерах, не подключенных к сети, что сокращает возможность обмана системы.</p><br/>
                        <p>В рамках данной работы была разработана именно такая оффлайн-система, реализующая возможность тестирования студентов.</p>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}