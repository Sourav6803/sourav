import React, { useState } from 'react'
import axios from "axios"
import "./homepage.css"
import UserData from '../Components/userData'
import { AiOutlineSearch } from "react-icons/ai"
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const logo = "./export.jpg"

const HomePage = () => {
    const [getImportData, setImportdata] = useState([])
    const [query, setQuery] = useState("")
    const [ivalue, setValue] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerpage] = useState(50)
    const [pagenumberlimit, setpageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    const navigate = useNavigate()

    const getTokenFromLocalstorage = JSON.parse(localStorage.getItem("customer"))

    let token = getTokenFromLocalstorage?.token
    console.log(token)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.get(`http://localhost:4002/api/filter/importData?${ivalue}=${query}`)
            .then((data) => setImportdata(data.data.responce))
            .catch(err => console.log(err))
    }

    const page = []
    for (let i = 1; i <= Math.ceil(getImportData.length / itemsPerPage); i++) {
        page.push(i)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    let currentItems = getImportData.slice(indexOfFirstItem, indexOfLastItem)

    let keys = []
    for (let key in currentItems[0]) {
        keys.push(key)
    }
    const newKey = keys.slice(1, -3)


    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    const handleNextBtn = () => {
        if (token == undefined) {
            navigate("/login")
        } else {
            setCurrentPage(currentPage + 1)
            if (currentPage + 1 > maxPageNumberLimit) {
                setMaxPageNumberLimit(maxPageNumberLimit + pagenumberlimit)
                setMinPageNumberLimit(minPageNumberLimit + pagenumberlimit)
            }
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pagenumberlimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pagenumberlimit)
            setMinPageNumberLimit(minPageNumberLimit - pagenumberlimit)
        }
    }

    let pageIncreamentBtn = null;
    if (page.length > maxPageNumberLimit) {
        pageIncreamentBtn = <li style={{ fontSize: "2.5rem", listStyle: "none", marginLeft: "10px" }} onClick={handleNextBtn}>&hellip;</li>
    }

    let pageDecreamentBtn = null;
    if (page.length > maxPageNumberLimit) {
        pageDecreamentBtn = <li style={{ fontSize: "2.5rem", listStyle: "none", marginLeft: "10px" }} onClick={handlePrevBtn}>&hellip;</li>
    }
    return (
        <>
            <div className='d-flex align-items-center justify-ontent-center flex-column  bg-warning ' style={{ height: "30vh", backgroundImage: new URL("https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-735.jpg?w=996&t=st=1691716989~exp=1691717589~hmac=979a18b03faffdfdee3aa46aad4267764212b4b662aa0d818c5a610b96123b3e") }}>
                <div className=' mt-3 d-flex align-items-center justify-ontent-center'>
                    <h2 className='mb-2 d-flex align-items-center justify-ontent-center'>Search Import  Data Of India</h2>
                </div>

                <div className='mt-5 d-flex align-items-center justify-ontent-center'>
                    <input className=" fs-1 " type="radio" value="HS_CODE" name="data" onChange={e => setValue(e.target.value)} />HS_CODE
                    <input className="fs-1 ms-3 " type="radio" value="EXPORTER_NAME" name="data" onChange={e => setValue(e.target.value)} />EXPORTER_NAME
                </div>

                <div className='mb-3 mt-5'>
                    <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center mb-3">
                        <input className="" style={{ display: "inline-block", height: "30px", width: "40vw", border: "none" }} type='text' placeholder='HS_CODE/EXPORTER_NAME' value={query} onChange={e => setQuery(e.target.value)} />
                        <button type="submit" value='search' className='ms-2 d-inline-block' style={{ height: "30px" }} ><AiOutlineSearch className='fs-3' /></button>
                    </form>
                </div>
            </div>

            {currentItems.length && <div className='container '>
                <div>
                    <h1 className='mt-3 d-flex align-items-start'>Detailed Import Data of match with {query} </h1>
                </div>

                <div className='row mt-3'>
                    <div className="col bg-primary" style={{ height: "20vh", borderRadius: "20px" }}>
                        <h1 className="d-flex justify-content-center  ">{getImportData.length}</h1>
                        <h4>Import Shipment Records found</h4>
                    </div>

                    <div className="col bg-primary" style={{ height: "20vh", borderRadius: "20px" }}>
                        <h1 className="d-flex justify-content-center  ">5,150</h1>
                        <h4>Import Shipment Records found</h4>
                    </div>

                    <div className="col bg-primary" style={{ height: "20vh", borderRadius: "20px" }}>
                        <h1 className="d-flex justify-content-center  ">5,150</h1>
                        <h4>Import Shipment Records found</h4>
                    </div>

                    <div className="col bg-primary" style={{ height: "20vh", borderRadius: "20px" }}>
                        <h1 className="d-flex justify-content-center  ">5,150</h1>
                        <h4>Import Shipment Records found</h4>
                    </div>

                </div>
            </div>}

            {
                currentItems.length && <div className="result">
                    <table>

                        <thead>
                            <tr>
                                {newKey.map((item, index) => {
                                    return (
                                        <th scope="col" key={index}>{item}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            <UserData data={currentItems} />
                        </tbody>
                    </table>

                </div>
            }

            <div className="d-flex align-items-center justify-content-center">
                {currentItems.length ? <button disabled={currentPage == page[0] ? true : false} onClick={handlePrevBtn}>Prev</button> : null}
                {pageDecreamentBtn}
                {
                    page?.map((number, i) => {
                        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
                            return (
                                <>
                                    <ul className="pageNumbers " key={i}>
                                        <li key={number} id={number}  className={currentPage == number ? 'active' : null}>
                                            {number}
                                        </li>
                                    </ul>
                                </>
                            )
                        } else {
                            return null
                        }
                    })
                }
                {pageIncreamentBtn}
                {currentItems.length ? <button disabled={currentPage == page[page.length - 1] ? true : false} className="ms-3" onClick={handleNextBtn}>Next</button> : null}
            </div>
        </>
    )
}

export default HomePage