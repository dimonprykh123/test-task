import React, {useState, useEffect} from "react"
import Paginator from "../../components/pagination/pagination";
import {useHistory, useLocation} from "react-router-dom"
import {Table} from "../../components/table/table";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import styles from "./list.module.scss"
import {Spinner} from "react-bootstrap";

export const List = () => {
    const history = useHistory()
    const location = useLocation()
    const [loading,setLoading] = useState(false)
    const [pagination, setPagination] = useState({limit: 50, skip: 0})
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const getCount = async () => {
        try {
            setLoading(true)
            const res = await fetch("/api/users/people_count")
            const body = await res.json()
            console.log(res)
            return body
        }catch (e) {
            throw new Error()
        }
    }
    const getLS = async () => {
        setLoading(true)
        const send = JSON.stringify(pagination)
        const res = await fetch("/api/users/limit_skip", {
            method: "POST",
            body: send,
            headers: {'Content-Type': 'application/json'}
        })
        const body = await res.json()
        return body
    }
    useEffect(() => {
        getCount().then(body =>{
            setCount(body.count[0])
        setLoading(false)
        })
        getLS().then(body =>{
            setData(body.row)
          setLoading(false)
        })
    }, [page])
    return (
        <div className={`wrapper`}>
            <div className={`headerLine`}></div>
            <div className={`container`}>
                <Header/>
                <nav className={`${styles.navigation}`}><span className={`activeRoute`}
                                                              onClick={() => history.push("/main")}>Main page</span><span
                    className={`${styles.arrow}`}></span><span className={`currentRoute`}>Users statistic</span></nav>
                <main className={`${styles.contentBox}`}>
                { !loading &&
                    <Table data={data} location={location}/>
                }
                {
                    loading && <Spinner animation="border" variant="primary" />
                }
                </main>
                <div className={`${styles.paginationContainer}`}>
                    <Paginator pagination={pagination} page={page} count={count} setPage={setPage}
                               setPagination={setPagination} setData={setData}/>
                </div>
                <Footer/>
            </div>
            <div className={`footerLine`}></div>
        </div>
    )
}