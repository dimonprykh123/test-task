import React from "react"
import {useHistory} from "react-router-dom"
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import AdvantagesItem from "../../components/AdvantagesItem/AdvantagesItem";
import {Row,Col} from "react-bootstrap";
import mobileImg from "../../assets/img/mobile.png"
import fLabel from "../../assets/img/Group 13.png"
import sLabel from "../../assets/img/Group 15.png"
import tLabel from "../../assets/img/Group 14.png"
import styles from "./main.module.scss"
export const Main = () =>{
    const history = useHistory()
    return(
        <div className={`wrapper`}>
            <div className={`${styles.headerBg}`}></div>
            <div className={`container`}>
                <Header/>
                <main className={`${styles.mainBox}`}>
                    <Row>
                        <Col xl={6}>
                            <div className={`${styles.greatings}`}>
                                <h1 className={`mt-4 mb-4`}>
                                    <span className="bold">Brainstorming</span> for desired
                                    perfect Usability
                                </h1>
                                <p className={`${styles.greatingsTxt} mt-4 mb-4`}>
                                    Our design projects are fresh and simple and will benefit your
                                    business greatly. Learn more about our work!
                                </p>
                                <a onClick={()=>history.push("/Users statistic")} className={`${styles.linkBox}`}>
                                    <span className={`${styles.link}`}>Views Stats</span>
                                </a>
                            </div>
                        </Col>
                        <Col xl={6} className={`mt-4`}>
                            <img className={styles.mobile} src={mobileImg} alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <p className={`${styles.aboutSection} mt-4`}>Why <span className={`bold`}>small business owners <br className="d-none d-xl-block"/>  love</span> AppCo?</p>
                            <p className={`${styles.aboutDesc} mt-4`}>Our design projects are fresh and simple and will benefit your business <br className="d-none d-xl-block" /> greatly. Learn more about our work!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pl-xl-0 pr-xl-0">
                            <div className={`${styles.advantagesList}`}>
                                <AdvantagesItem
                                    icon={fLabel}
                                    title="Clean Design"
                                    description="Increase sales by showing true dynamics of your website."
                                />
                                <AdvantagesItem
                                    icon={sLabel}
                                    title="Secure Data"
                                    description="Build your online store’s trust using Social Proof & Urgency."
                                />
                                <AdvantagesItem
                                    icon={tLabel}
                                    title="Retina Ready"
                                    description="Realize importance of social proof in customer’s purchase decision."
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.feedBackSection} mb-4`}>
                        <Col className={`${styles.feedBackContainer} d-flex jc-center`}>
                            <div className={`${styles.inputContainer}`}>
                            <input type="text" placeholder="Enter your email"/>
                            <button className={`${styles.subscribeButton}`}>Subscribe</button>
                            </div>
                        </Col>
                    </Row>
                </main>
                <Footer/>
            </div>
            <div className={`${styles.footerBg}`}></div>
        </div>
    )
}