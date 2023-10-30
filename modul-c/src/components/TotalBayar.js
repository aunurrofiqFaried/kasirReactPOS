import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';
import axios from 'axios';
import { API_URL } from '../utils/constants'

export default class TotalBayar extends Component {

    submitTotalBayar = (totalbayar) => {
        const pesanan = {
            total_bayar: totalbayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL + "pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses')
        })
    };

    render() {
        const totalbayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <>
                {/* Web */}
                <div className='fixed-bottom d-none d-md-block'>
                    <Row>
                        <Col md={{ span: 3, offset: 9 }} className="px-4 d-grid gap-2">
                            <h4>Total Harga : <strong className='float-end me-2'>{numberWithCommas(totalbayar)}</strong></h4>
                            <Button variant='primary' className='mb-3' size='lg' onClick={() => this.submitTotalBayar(totalbayar)}>
                                <FontAwesomeIcon icon={faShoppingCart} /><strong className='ms-2'>BAYAR</strong>
                            </Button>
                        </Col>
                    </Row>
                </div>

                {/* Mobile  */}
                <div className='d-sm-block d-md-none'>
                    <Row>
                        <Col md={{ span: 3, offset: 9 }} className="px-4 d-grid gap-2">
                            <h4>Total Harga : <strong className='float-end me-2'>{numberWithCommas(totalbayar)}</strong></h4>
                            <Button variant='primary' className='mb-3' size='lg' onClick={() => this.submitTotalBayar(totalbayar)}>
                                <FontAwesomeIcon icon={faShoppingCart} /><strong className='ms-2'>BAYAR</strong>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
