import React, {useEffect, useState} from "react"
import {useParams, useHistory} from "react-router-dom"
import {Spinner} from "react-bootstrap";
import {SimpleAreaChart} from "../../components/character/charter";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import styles from "./user.module.scss"

export const User = () => {
    const {id} = useParams()
    const name = id.split(" ")
    const history = useHistory()
    const [dataClicks, setDataClicks] = useState([])
    const [dataPages, setDataPages] = useState([])
    const [loading,setLoading] = useState(false)
    const someDate = {from: "2019-10-02", to: "2019-10-08", id: Number(name[2])}
    const send2 = JSON.stringify(someDate)
    const getDates = async () => {
            setLoading(true)
            const res = await fetch("/api/users/statistic/graph", {
                method: "POST",
                body: send2,
                headers: {'Content-Type': 'application/json'}
            })
            const body = await res.json()
            return body
    }

    const createDateArr = (from, to) => {
        const fromDate = new Date(from).getTime()
        const toDate = new Date(to).getTime()
        const len = (toDate - fromDate) / (86400 * 1000)
        const date = []
        for (let i = 0; i <= len; i++) {
            const dateInSec = fromDate + (i * (86400 * 1000))
            const valDeteInSec = new Date(dateInSec)
            const year = valDeteInSec.getFullYear().toString()
            const month = (valDeteInSec.getUTCMonth() + 1).toString().padStart(2, "0")
            const day = valDeteInSec.getDate().toString().padStart(2, "0")
            const value = `${year}-${month}-${day}`
            date.push({name: value, pv: null})
        }
        return date
    }

    const dataCreator = (data, mass, line) => {
        for (let i = 0; i < mass.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (mass[i].name === data[j].date)
                    mass[i].pv = data[j][line]
            }
            if (mass[i].pv === null) {
                mass[i].pv = 0
            }
        }
        return mass
    }

    useEffect(() => {
        getDates()
            .then(body => {
                const date1 = createDateArr(someDate.from, someDate.to)
                const date2 = createDateArr(someDate.from, someDate.to)
                setDataClicks(dataCreator(body.dates, date1, "clicks"))
                setDataPages(dataCreator(body.dates, date2, "page_views"))
                console.log(body)
                console.log(dataPages)
                console.log(dataClicks)
                setLoading(false)
            })
    }, [])
    return (
        <div className={`wrapper`}>
            <div className={`headerLine`}></div>
            <div className={`container`}>
                <Header/>
                <nav className={`${styles.navigation}`}><span className={`activeRoute`}
                                                              onClick={() => history.push("/main")}>Main page</span>
                    <span className={`${styles.arrow}`}></span><span className={`activeRoute`}
                                                                     onClick={() => history.push("/Users statistic")}>Users statistic</span>
                    <span className={`${styles.arrow}`}></span><span
                        className={`currentRoute`}>{name[0]} {name[1]}</span></nav>
                <p className={`${styles.personName} bold`}>{name[0]} {name[1]}</p>
                    <main className={`${styles.contentBox}`}>
                        { !loading && <>
                        <p className={`${styles.tableName} bold`}>Clicks</p>
                        <div className={`${styles.tableContainer}`}>
                            <SimpleAreaChart width={"100%"} height={"308px"} data={dataClicks}/>
                        </div>
                        <p className={`${styles.tableName} bold`}>Views</p>
                        <div className={`${styles.tableContainer}`}>
                            <SimpleAreaChart width={"100%"} height={"308px"} data={dataPages}/>
                        </div>
                        </>}
                        {
                            loading &&  <Spinner animation="border" variant="primary" />
                        }
                    </main>
                <Footer/>
            </div>
            <div className={`footerLine`}></div>
        </div>
    )
}