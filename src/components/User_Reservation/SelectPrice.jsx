import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/pages/User_Reservation/SelectPrice.css'
import { Link } from 'react-router-dom';
// import SelectPrices from './TicketOptions';

const SelectPrice = () => {





    return (
        <body className='body'>
            <div className='container'>
                <div className='main'>
                    <div className='nav-b'>
                        <div className="Vector5"></div>
                        <div className="Vector6"></div>
                        <div className="Vector7"></div>
                        <div className="Vector8"></div>
                    </div>
                    <div className='menu1'>등급/좌석 선택</div>
                    <div className='menu2'>가격/할인 선택</div>
                    <div className='menu3' >배송선택/예매확인</div>
                    <div className='menu4' >결제하기</div>
                </div>
                <div className='price'>가격/할인 선택</div>
                <div className='box1'>
                    <div className='box3' />
                    <div className='box3-head'>
                        <div className='box-line1' />
                        <div className='box-line2' />
                        <div className='box-line3' />
                        <div className='box-line4' />
                        <div className='box-line5' />
                        <div className='box-left' />
                        <div className='box-line6'></div>
                        <div className='box-line7'></div>
                        <div className='default-price'>기본가</div>
                        <div className='default-seal'>기본할인</div >
                        <div className='price1'>45,000<br />25,000<br />25,000<br />25,000<br />25,000<br />25,000<br />20,000</div>

                        {/* <SelectPrices /> */}

                        {/* <div style={{ width: 72, height: 45, left: 632, top: 128, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 657, top: 136, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>0</div>
                        <div style={{ width: 72, height: 45, left: 632, top: 66, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 660, top: 74, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>1</div>
                        <div style={{ width: 72, height: 45, left: 632, top: 190, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 657, top: 198, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>0</div>
                        <div style={{ width: 72, height: 45, left: 632, top: 384, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 657, top: 392, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>0</div>
                        <div style={{ width: 72, height: 45, left: 632, top: 322, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 657, top: 330, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>0</div>
                        <div style={{ width: 72, height: 45, left: 632, top: 447, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 657, top: 455, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>0</div>
                        <div style={{ width: 72, height: 45, left: 632, top: 256, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                        <div style={{ left: 657, top: 264, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>0</div> */}
                        <div className='box-line8' />
                        <div className='seal-menu'>일반<br />직장인 할인<br />조기예매<br />국가유공자<br />장애인 중증<br />장애인 경증<br />어린이/청소년<br /></div>
                        <div style={{ left: 626, top: 15, position: 'absolute' }}>
                            <span style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>매수 </span>
                            <span style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>1</span>
                            <span style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>매</span>
                        </div>
                    </div>
                        
                    <div style={{ left: 49, top: 609, position: 'absolute', color: '#3D3A35', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>쿠폰할인</div>
                    <div style={{ width: 692, height: 0, left: 27, top: 562, position: 'absolute', border: '1px #DDDDDD solid' }}></div>
                    <div style={{ width: 692, height: 0, left: 27, top: 685, position: 'absolute', border: '1px #DDDDDD solid' }}></div>
                    <div style={{ width: 524, height: 50, left: 188, top: 599, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #777777 solid' }} />
                    <div style={{ left: 223, top: 613, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>첫 가입 환영 5,000원 쿠폰 ...</div>
                </div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ position: 'absolute', float: 'right', width: 300, top: 480, left: 1500, right: 1200 }}>
                    <option selected>****-**-** 1회차</option>
                    <option value="1">****-**-** 2회차</option>
                    <option value="2">****-**-** 3회차</option>
                    <option value="3">****-**-** 4회차</option>
                </select>
                <div style={{ color: '#3D3A35', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>예매정보</div>
                <div style={{ width: 601, height: 489, background: 'white', border: '1px #777777 solid' }} />
                <div style={{ color: '#3D3A35', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>좌석<br />일시 <br />티켓금액<br />배송료<br />쿠폰할인<br />포인트사용<br />총 금액<br /></div>
                <div style={{ textAlign: 'right' }}><span style={{ color: '#5604B5', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>P열 38번<br /></span>
                    <span style={{ color: '#3D3A35', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>2024.03.30 (토) 14:00<br />46,000<br />0<br />-1000<br />0<br /></span>
                    <span style={{ color: '#5604B5', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>45,000</span></div>
                <div style={{ color: '#5604B5', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>취소기한 : 연극 24시간 이전까지의 날짜 노출 </div>
                <Link to="" className='button' type='submit' value="post" />
                <div className='button-text' >다음단계</div>
            </div>
        </body >
    );
}

export default SelectPrice;
