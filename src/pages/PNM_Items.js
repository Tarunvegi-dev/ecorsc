import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Form, Button, Row, Col, Pagination, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { Events } from './homepage/Circulars'
import { firestore } from '../firebase/firebase-utils';
import { Helmet } from 'react-helmet'
import { ImPointRight } from 'react-icons/im'

const Circulars = () => {
    const [pnmMinutes, setpnmMinutes] = useState([]);
    const [keyword, setkeyword] = useState('');
    const [filteredPnmMinutes, setfilteredPnmMinutes] = useState([]);

    useEffect(() => {
        firestore.collection('railway-board').where("category", "==", "pnm-minutes").get()
            .then((querySnapshot) => {
                let data = querySnapshot.docs.map((doc) => {
                    return { ...doc.data() }
                })
                setpnmMinutes(data)
                setfilteredPnmMinutes(data)
            })
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    let items = [];
    const pages = Math.round(filteredPnmMinutes.length / 10);
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage}>
                {number}
            </Pagination.Item>,
        );
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * 10 - 10;
        const endIndex = startIndex + 10;
        return filteredPnmMinutes.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 5) * 5;
        return new Array(5).fill().map((_, idx) => start + idx + 1);
    };

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const searchItems = () => {
        setfilteredPnmMinutes(pnmMinutes.filter((circular) => circular.title.toUpperCase().includes(keyword.toUpperCase())))
    }

    useEffect(() => {
        if (keyword === '') {
            setfilteredPnmMinutes(pnmMinutes)
        }
    }, [keyword, pnmMinutes]);

    let dept = ["All", "Achievements", "Accounts", "Personnel", "Engineering", "Mechanical", "Electrical", "Medical", "Stores", "Running Staff", "Commercial", "Signal and Telecom", "Operating"]

    const applyFilter = (filter) => {
        if (filter === 'All') {
            setfilteredPnmMinutes(pnmMinutes)
            return;
        }
        setfilteredPnmMinutes(pnmMinutes.filter((circular) => circular.department === filter))
    }

    return (
        <div className="Cirsulars">
            <Helmet>
                <title>ECoRSC - PNM Items</title>
            </Helmet>
            <Container>
                <Navbar />
                <br />
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                onChange={(e) => setkeyword(e.target.value)}
                                value={keyword}
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <Button onClick={searchItems} style={{ backgroundColor: '#000080' }} id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <h3 className="title">Railway PNM Items</h3>
                <Row>
                    <Col sm={8}>
                        {filteredPnmMinutes.length > 0 ? <Events items={getPaginatedData()} /> : <div style={{ fontFamily: 'poppins', fontSize: '20px', marginTop: '50px' }}><center>No Results Found!</center></div>}
                    </Col>
                    <Col sm={4}>
                        <Card style={{ padding: '10px' }}>
                            {dept.map((dept, i) =>
                                <div key={i} onClick={() => applyFilter(dept)} style={{ display: 'flex', fontFamily: 'poppins', fontSize: '20px', margin: '5px 20px', color: '#000080', cursor: 'pointer' }}>
                                    <ImPointRight style={{ marginTop: '4px' }} size={24} />&nbsp; <span>{dept}</span>
                                </div>)}
                        </Card>
                    </Col>
                </Row>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {filteredPnmMinutes.length > 0 ? <Pagination>
                        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                        {getPaginationGroup().map((item, index) => (
                            <Pagination.Item key={index} active={item === currentPage} onClick={changePage}>
                                {item}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pages} />
                    </Pagination> : null}
                </div>
            </Container>
        </div>
    )
}

export default Circulars