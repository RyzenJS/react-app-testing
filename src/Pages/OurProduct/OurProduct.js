import React from 'react';
import AppContainer from '../../utils/AppContainer';
import {Link} from 'react-router-dom';
import {
  BackTop,
  Button,
  Row,
  Col,
  Divider,
  Pagination,
  Image,
  Card,
  Typography
} from 'antd';
import {ProductData} from './Product/ProductData';
import '../Homepage/Home.css';
import './OurProduct.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;
const style = { background: '#446B40', padding: '8px 0' };

function OurProduct() {
  return (
    <AppContainer>
      <div className='OurProduct-body'>
        <header className='Picture-banner'>
          <img src='../Homepage/Banner/Leafy.jpg' />
          <Title level={2}>All Products</Title>
        </header>

        <div className='product-container'>
        <Divider orientation="left"><h2>Vegetables</h2></Divider>
        <Row>
        {
          ProductData.map((item, index) => {
            return(
              <Col>
              <Link to={item.path}>
              <Card
              hoverable
              style={{ width: 240}}
              cover={item.image}
              >
              <Meta title={item.title} description={item.description} />
              </Card>
              </Link>
              </Col>
            )
          })
        }
        </Row>

        <Pagination
        className='pagination'
        current='1'
        simple defaultCurrent={2}
        total={20}
        responsive={true}
        />
        </div>
      </div>
    </AppContainer>
  )
}

export default OurProduct;
