import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import HeaderTitle from '../Components/HeaderTitle';
import Searchbar from '../Components/SearchSection';

const ProductListStyle = styled.ul`
    list-style: none;
    li{
        .list-wrap{
            cursor: pointer;
            min-height: 90px;
            position: relative;
            padding: 15px 15px 15px 90px;
            background-color: #f3f5f6;
            margin-bottom: 15px;
            color: #363537;
            @media (min-width: 992px){
                margin-bottom: 0;
            }
        }
        p{
            margin: 0;
            font-size: 14px;
            &.model{
                font-weight: bold;
            }
        }
        .product-image{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 2px solid #000;
            position: absolute;
            left: 15px;
            top: 15px;
        }

    }
`;

export default function ProductList(){
    return (
        <>
            <HeaderTitle name="Dashboard"/>
            <Searchbar/>
            <Container className='my-3'>
                <ProductListStyle className='p-0 row'>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className='list-wrap'>
                            <img className='product-image'src="https://placehold.co/100x100"/>
                            <p className='model'>IPhone 14</p>
                            <p className='brand'>Apple</p>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className='list-wrap'>
                            <img className='product-image' src="https://placehold.co/100x100"/>
                            <p className='model'>Galaxy s10</p>
                            <p className='brand'>Samsung</p>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className='list-wrap'>
                            <img className='product-image'src="https://placehold.co/100x100"/>
                            <p className='model'>Xiaomi 13 pro</p>
                            <p className='brand'>Xiaomi</p>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className='list-wrap'>
                            <img className='product-image' src="https://placehold.co/100x100"/>
                            <p className='model'>IPhone 11</p>
                            <p className='brand'>Apple</p>
                        </div>
                    </li>
                    
                </ProductListStyle>
            </Container>
        </>
    )
};