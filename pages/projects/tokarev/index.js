import { MainLayout } from "../../../components/MainLayout"
import styles from './style.module.scss'
import Image from "next/image"
export default function About() {
    
    return (
        <MainLayout title={'Project|Tokarev'}>
            <main className={styles.main_page}>

                <section className={styles.name_vkr}>
                    <h1>
                        <span className={styles.first_word_name_project}>Математическое </span>моделирование высокоэнергетических систем
                    </h1>
                </section>

                <section className={styles.first_section}>
                    <header>Разработчик</header>
                    <div className={styles.about_blocks}>
                        <div>
                            <h2>Студент</h2>
                            <span>Тольяттинского Государственного Университета </span>
                            <span>Д.Н.Токарев</span>
                        </div>
                        <div>
                            <h2>По направлению</h2>
                            <span>Институт математики, физики и информационных технологий</span><br/>
                            <span>Прикладная математика и информатика</span><br/>
                            <span>Информатика и вычислительная техника</span>
                        </div>
                        <div>
                            <h2>Под руководством</h2>
                            <span>Доктора физико-математических наук, <br/>профессора Александра Ивановича Сафронова</span>
                        </div>
                    </div>
                </section>

                <section className={styles.second_section}>
                    <header>О проекте</header>
                    <h2>
                        В основе проектирования ствольных систем, в частности баллистического проектирования метательных зарядов (МЗ), лежит решение основной задачи внутренней баллистики (ОЗВБ). В настоящее время существуют два направления ее решения: термодинамическое (классическое) и газодинамическое.
                    </h2>
                </section>

                <section className={styles.third_section}>
                    <header>Поставленные задачи</header>
                    <h1>
                        <span>- анализ термодинамических моделей ствольных систем.</span> <br/><br/>
                        <span>- разработка математической модели некоторой схемы метания.</span> <br/><br/>
                        <span>- разработка модели газ-топливной смеси для перспективной схемы метания.</span><br/> <br/>
                    </h1>    
                </section>

                <section className={styles.fourth_section}>
                    <header>Схема камеры подгона</header>
                    <h2>
                        В отличие от данного газодинамического подхода в работах используется термодинамический подход.
                    </h2>

                    <div className={styles.block_photos_fourth_section}>
                        <div className={styles.solo_block}>
                            <h3>Выстрел с присоединенной камерой подгона</h3>
                            <ul className={styles.points_in_block}>
                                <li>В начальный момент времени воспламеняется основной заряд, расположенный в первой расчетной области. Контейнер приходит в движение как единое целое. До момента воспламенения заряда контейнера расчет проводится в области основного заряда.</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/tokarev_images/preview.jpg"
                                    width="681"
                                    height="287"
                                />
                            </div>
                        </div>

                        <div className={styles.solo_block}>
                            <h3>Расчётная схема с присоединенной камерой подгона</h3>
                            <ul className={styles.points_in_block}>
                                <li>С момента времени, равного времени задержки зажигания, начинается работа дополнительного заряда и в расчетную схему включается вторая область, расположенная между движущимися поршнем и МЭ. Для удобства проведения расчетов используются индивидуальные для каждой из областей системы координат.</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/tokarev_images/preview_1.jpg"
                                    width="718"
                                    height="295"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.fifth_section}>
                    <header>Оценка подходов балл. процессов</header>
                    <h2>
                        В связи с применением метода решения ПЗВБ пороховых установок с ускоряемым контейнером в лабораторной системе координат представляется целесообразным провести сравнение двух математических подходов к решению ПЗВБ подобных систем.
                    </h2>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Зависимость скорости поршня от величины шага разностной сетки</h3>
                            <div>
                                <Image 
                                    alt="scheme_of_project" 
                                    src="/tokarev_images/model_1.jpg"
                                    width="412"
                                    height="238"
                                />
                            </div>
                            <p>По пространству при различных числах Куранта: 1 – r = 0,3; 2 – r = 0,2; 3 – r = 0,1;
                            </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Зависимость скорости модели от величины шага разностной сетки</h3>
                            <div>
                                <Image 
                                    alt="diagram_of_classes" 
                                    src="/tokarev_images/model_2.jpg"
                                    width="417"
                                    height="242"
                                />
                            </div>
                            <p>
                                По пространству при различных числах Куранта: 1 – r = 0,3; 2 – r = 0,2; 3 – r = 0,1;
                            </p>
                        </div>
                    </div>

                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Зависимость  давления на поршень от величины шага разностной сетки</h3>
                            <div>
                                <Image 
                                    alt="form_auth" 
                                    src="/tokarev_images/model_3.jpg"
                                    width="410"
                                    height="234"
                                />
                            </div>
                            <p>
                                По пространству при различных числах Куранта: 1 – r = 0,3; 2 – r = 0,2; 3 – r = 0,
                            </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Зависимость давления перед поршнем от величины шага разностной сетки</h3>
                            <div>
                                <Image 
                                    alt="form_registr" 
                                    src="/tokarev_images/model_15.jpg"
                                    width="409"
                                    height="226"
                                />
                            </div>
                            <p>
                                По пространству при различных числах Куранта: 1 – r = 0,3; 2 – r = 0,2; 3 – r = 0,1; 
                            </p>
                        </div>
                    </div>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Зависимость давления на модели от величины шага разностной сетки</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/tokarev_images/model_4.jpg"
                                    width="314"
                                    height="254"
                                />
                            </div>
                            <p>
                                по пространству при различных числах Куранта: 1 – r = 0,3; 2 – r = 0,2; 3 – r = 0,1;
                            </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Сравнение зависимости функционала U3 от шага разностной сетки по пространству для различных подходов к решению ПЗВБ СПК</h3>
                            <div>
                                <Image 
                                    alt="admin_it" 
                                    src="/tokarev_images/model_5.jpg"
                                    width="307"
                                    height="255"
                                />
                            </div>
                            <p>1 – в комбинированной системе координат; 2 – в инерциальной системе координат; </p>
                        </div>
                    </div>
                    </section>

                    <section className={styles.fourth_section}>
                    <header>Схемы с двумя камерами подгона</header>
                    <h2>
                        Результаты расчётов для метаемого элемента с коэффициентом относительного веса Cq=3 кГ/дм^3,
                    </h2>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Зависимость параметров для II-й области</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/tokarev_images/model_6.jpg"
                                    width="544"
                                    height="402"
                                />
                            </div>
                            <p>3-давление на правой границе первого поршня; 4-давление на левой границе второго поршня; 7- скорость первого поршня; 8- скорость второго поршня;</p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Зависимости параметров для III -й области</h3>
                            <div>
                                <Image 
                                    alt="admin_it" 
                                    src="/tokarev_images/model_7.jpg"
                                    width="448"
                                    height="368"
                                />
                            </div>
                            <p>5-давление на правой границе второго поршня; 6- давление на метаемом элементе; 8- скорость второго поршня; 9- скорость метаемого элемента.</p>
                        </div>
                    </div>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Баллистика модельной системы: 1,2,3,4,5,6 - давления в системе</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/tokarev_images/model_8.jpg"
                                    width="664"
                                    height="377"
                                />
                            </div>
                            <p>7,8 - скорости поршней; 9 - скорость метаемого элемента.</p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Зависимость скорости МЭ от координаты задержки зажигания заряда второй камеры подгона.</h3>
                            <div>
                                <Image 
                                    alt="admin_it" 
                                    src="/tokarev_images/model_9.jpg"
                                    width="588"
                                    height="473"
                                />
                            </div>
                            <p>1 – масса второго поршня 20 г; 2 – масса второго поршня 30 г; 3 – масса  второго поршня 45 г;</p>
                        </div>
                    </div>
                </section>
                <section className={styles.third_section}>
                    <header>Заключение</header>
                    <div className={styles.sixth_text}>
                        <p>1.Проведен обзор литературы для выбора схемы высокоскоростного метания.</p><br/>
                        <p>2.Для исследования выбрана схема с разделением снаряда и организацией задержки зажигания дополнительного заряда с присоединённой камерой подгона.</p><br/>
                        <p>3.Поставлена и решена ПЗВБ систем СПК в газодинамической постановке. </p><br/>
                        <p>4.Обоснована нетрадиционная схема метания с присоединёнными камерами подгона или схема метания СПК. </p><br/>
                        <p>5.Решена ПЗВБ систем СПК с двумя камерами подгона в газодинамической постановке. </p><br/>
                        <p>6.Проведенное тестирование прямой задачи внутренней баллистики СПК с одной и двумя камерами подгона на точном решении задачи Лагранжа, полученном методом характеристик с заданной точностью решения, показало согласование результатов по скорости до 0,5 %.</p><br/>
                        <p>7.Выигрыш в начальной скорости модели с Cq = 1 системой СПК по сравнения с классической схемой метания получается примерно на 20%</p><br/>
                        <p>8.Проведенный анализ баллистики СПК с двумя камерами подгона на модельной системе калибра 42 мм, показал возможность существенного повышения скоростей метания тел по сравнению со скоростями, реализуемыми  при использовании одной камеры подгона. </p>
                    </div>
                </section>
                <section className={styles.third_section}>
                    <header>Контакты</header>
                    <div className={styles.sixth_text}>
                        
                            <div>
                                <h1>
                                Почта
                                </h1> 
                                <p><a href="mailto:tokarev@mail.ru" className={styles.link}>tokarev@mail.ru</a></p><br/>
                            </div>
                            <div>
                                <h1>
                                    Телеграм
                                </h1>
                                <p><a href="https://t.me/tokarev" className={styles.link}>@tokarev</a></p><br/>
                            </div>
                          
                            <div>
                                <h1>
                                    Вконтакте
                                </h1>
                                <p><a href="https://vk.com/tokarev" className={styles.link}>vk.com/tokarev</a></p><br/>
                            </div>
                        </div>
                </section>
            </main>
        </MainLayout>
    )
}