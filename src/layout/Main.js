import React from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import TopCategory from '../Pages/Shared/TopCategory/TopCategory';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg='3' className='d-none d-lg-block'>
                <TopCategory></TopCategory>
                </Col>
                <Col lg='9'>
                <Outlet></Outlet>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;