import React from 'react'
import { Link } from 'react-router-dom'

const Payments = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='nav-b'>
                    <div className="4" style={{ width: 1563, height: 1293, position: 'relative' }}>
                        <div className="Rectangle18" style={{ width: 1481, height: 1220, left: 41, top: 42, position: 'absolute', background: 'white', boxShadow: '0px 1px 5px 5px rgba(0, 0, 0, 0.10)', borderRadius: 30 }} />
                        <div className="Line13" style={{ width: 1442, height: 0, left: 56, top: 125, position: 'absolute', border: '1px black solid' }}></div>
                        <div style={{ left: 66, top: 69, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>예매하기</div>
                        <div className="MingcuteCloseFill" style={{ width: 49, height: 49, left: 1449, top: 62, position: 'absolute' }}>
                            <div className="Group" style={{ width: 49, height: 49, left: 0, top: 0, position: 'absolute' }}>
                                <div className="Vector" style={{ width: 49, height: 49, left: 0, top: 0, position: 'absolute' }}></div>
                                <div className="Vector" style={{ width: 32.15, height: 32.19, left: 8.41, top: 8.41, position: 'absolute', background: 'black' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='payment'>결제방식</div>
                <div className="Rectangle75" />
                <div style={{ width: 1406, height: 130, left: 81, top: 146, position: 'absolute' }}>
                    <div className="Vector13"></div>
                    <div className="Vector14" ></div>
                    <div className="Vector15" ></div>
                    <div className="Vector16" ></div>
                    <div className="Rectangle135" style={{ width: 66, height: 103, left: 1323, top: 12, position: 'absolute', background: '#7D3EF7' }} />
                    <div className='menu1'>등급/좌석 선택</div>
                    <div className='menu2'>가격/할인 선택</div>
                    <div className='menu3'>배송선택/예매확인</div>
                    <div className='menu4'>결제하기</div>
                    <div className="Rectangle134" style={{ width: 66, height: 103, left: 9, top: 12, position: 'absolute', background: '#D9D9D9' }} />
                </div>
                <div className="Rectangle136" style={{ width: 601, height: 489, left: 862, top: 481, position: 'absolute', background: 'white', border: '1px #777777 solid' }} />
                <div className="Rectangle138" style={{ width: 285, height: 50, left: 1164, top: 371, position: 'absolute', background: '#D9D9D9', borderRadius: 10 }} />
                <div className="Rectangle139" style={{ width: 601, height: 93, left: 862, top: 1039, position: 'absolute', background: '#7D3EF7', borderRadius: 10 }} />
                <div style={{ left: 1118, top: 1071, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>결제하기</div>
                <div className='box2-label'>예매정보</div>
                <div className="24" style={{ left: 862, top: 983, position: 'absolute', color: '#5604B5', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>취소기한 : 연극 24시간 이전까지의 날짜 노출 </div>
                <div className="10221" style={{ left: 1199, top: 385, position: 'absolute', color: '#888888', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>2024-10-22  1회차</div>
                <div className="Line37" ></div>
                <div className="Line42" ></div>
                <div className="Line38" ></div>
                <div className="Line39" ></div>
                <div className="Line40" ></div>
                <div className="Line41" ></div>
                <div className='box2-label2'>좌석<br />일시 <br />티켓금액<br />배송료<br />쿠폰할인<br />포인트사용<br />총 금액<br /></div>
                <div className="box2-label3" ><span style="color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'">P열 38번<br /></span><span style="color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'">2024.03.30 (토) 14:00<br />46,000<br />0<br />-1000<br />0<br /></span><span style="color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'">45,000</span></div>
                <div className="box2-label3" ><span style="color: '#5604B5', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'">P열 38번<br /></span><span style="color: '#3D3A35', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'">2024.03.30 (토) 14:00<br />46,000<br />0<br />-1000<br />0<br /></span><span style="color: '#5604B5', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'">45,000</span></div>
                <div className='box3-label'>무통장입금 </div>
                <input type='radio' className="radio-button" />

                <div className="Rectangle152" />
                <div className="Rectangle153" />
                <select name='bank' id='bank-select' >
                    <option value="">기업은행</option>
                    <option value="">국민은행</option>
                    <option value="">하나은행</option>
                    <option value="">농협</option>
                    <option value="">신한은행</option>
                </select>
                <div className="box1-label" >45,000<br /><br />2024년 02월 28일 오후 23시 59분<br />(주)티켓윈도<br /></div>
                <div className="box1-label2" >입금액<br />입금은행<br />입금마감시간<br />예금주명<br /></div>
                <Link to="/Payments" className='button' type='submit' value="post" />
                <div className='button-text' >다음단계</div>

            </div>
        </div>
    )
}

export default Payments