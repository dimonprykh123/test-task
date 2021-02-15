import React from "react"
import {useMedia} from "react-use";
import Pagination from "react-js-pagination";
import activeArrow from "../../assets/img/active-arrow.png"
import inactiveArrow from "../../assets/img/pag-arrow.svg"
const Active = () =>{
    return(
        <img src={activeArrow} alt=""/>
    )
}
const InActive = () =>{
    return(
        <img src={inactiveArrow} alt="" style={{"transform":"rotate(180deg)"}}/>
    )
}


const  Paginator = ({pagination,setData,setPage,setPagination,page,count}) => {
    const handlePageChange =(pageNumber)=> {
        console.log(pageNumber)
        const skip = (pageNumber - 1) * pagination.limit
        setData([])
        setPagination({...pagination,skip})
        setPage(pageNumber)
    }
        const isWide = useMedia('(max-width: 450px)')
        let range = 0
        if(isWide)
            range = 3
        if(!isWide)
            range = 5
        if(page===1) {
            return (
                <div>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={pagination.limit}
                        totalItemsCount={count}
                        pageRangeDisplayed={range}
                        onChange={handlePageChange}
                        hideFirstLastPages={true}
                        prevPageText={<InActive/>}
                        nextPageText={<Active/>}
                    />
                </div>
            )
        }
        if(page === count/pagination.limit){
            return (
                <div>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={pagination.limit}
                        totalItemsCount={count}
                        pageRangeDisplayed={range}
                        onChange={handlePageChange}
                        hideFirstLastPages={true}
                        prevPageText={<Active/>}
                        nextPageText={<InActive/>}
                    />
                </div>
            )
        }
        return (
            <div>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={pagination.limit}
                    totalItemsCount={count}
                    pageRangeDisplayed={range}
                    onChange={handlePageChange}
                    hideFirstLastPages={true}
                    prevPageText={<Active/>}
                    nextPageText={<Active/>}
                />
            </div>
        )
}
export default Paginator