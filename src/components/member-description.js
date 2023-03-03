import React from 'react'
import {Row, Col} from 'reactstrap'
import MemberCard from "./member-card"
import amber from "../images/members/amber.png";
import ben from "../images/members/ben.JPG";
import bk from "../images/members/bk.png";
import debby from "../images/members/debby.png";
import amy from "../images/members/amy.jpeg";
import joy from "../images/members/joy.png";
import nana from "../images/members/nana.png";
import pin_er from "../images/members/pin-er.jpg";
import yu_shiang from "../images/members/yu-shiang.png";
import yulin from "../images/members/yulin.png";

const MemberDescription = () => {
    return (
        <div style={{width:"90vw"}}>

            <h4 style={{marginBottom:"5vh", marginTop:"5vh"}}>專任研究助理＆博士後研究員</h4>
            <Row lg="5" md="4" sm="3" xs="2">

                <Col>
                    <MemberCard imgSrc={joy} name="江琼玉｜專任研究助理" 
                    text="計算語言學、語料庫語言學、文本分析、資料科學與量化分析" mail="mailto:sonnejoy@gmail.com" />          
                </Col>
                <Col >
                    <MemberCard imgSrc={yu_shiang} name="曾昱翔｜博士後研究員" 
                    text="心理學、文本分析、計算語言學、計算語意學、心理語言學" mail="mailto:seantyh@gmail.com"/>
                </Col>

            </Row>

            <h4 style={{marginBottom:"5vh",marginTop:"5vh"}}>博士生</h4>
            <Row lg="5" md="4" sm="3" xs="2">

                <Col >
                    <MemberCard imgSrc={amber} name="王伯雅｜博三" 
                    text="計算語言學、語料庫語言學、詞彙語意學、心理語言學、社會語言學、歷史語言學"
                    mail="mailto:diff@cmgsh.tp.edu.tw" link="https://www.instagram.com/differe94nt/"/>
                </Col>
                <Col >
                    <MemberCard imgSrc={bk} name="古貿昌｜博三" 
                    text="計算語言學、詞彙語意學、句法學" mail="mailto:d08142002@ntu.edu.tw" />
                </Col>
                <Col >
                    <MemberCard imgSrc={bk} name="陳韋伶｜博一" 
                    text="" mail="mailto:d10142007@ntu.edu.tw" />
                </Col>
                <Col >
                    <MemberCard imgSrc={pin_er} name="陳品而｜博一" 
                    text="計算語意學、認知語意學" mail="mailto:cckk2913@gmail.com" />
                </Col>

            </Row>

            <h4 style={{marginBottom:"5vh", marginTop:"5vh"}}>碩士生</h4>
            <Row lg="5" md="4" sm="3" xs="2" style={{marginBottom:"5vh"}}>
                
                <Col>
                    <MemberCard imgSrc={ben} name="許家誠｜碩四" text="計算語言學、南島語語言學、語料庫語言學、聲韻學"
                    mail = "mailto:r07142006@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={debby} name="Debby Chang｜碩四" text="計算語言、詞彙語意學、符號學"
                    mail = "mailto:r07142005@ntu.edu.tw" />          
                </Col>
                <Col>
                    <MemberCard imgSrc={yulin} name="張鈺琳｜碩二" text="計算語言學、句法學"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={amy} name="周昕妤｜碩二" text="計算語言學、語意學、認知語言學"
                    mail = "mailto:r10142008@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={pin_er} name="陳品而｜碩一" text="計算語意學、認知語意學"
                    mail = "mailto:cckk2913@gmail.com"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={pin_er} name="陳品而｜碩一" text="計算語意學、認知語意學"
                    mail = "mailto:cckk2913@gmail.com"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={pin_er} name="陳品而｜碩一" text="計算語意學、認知語意學"
                    mail = "mailto:cckk2913@gmail.com"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={pin_er} name="陳品而｜碩一" text="計算語意學、認知語意學"
                    mail = "mailto:cckk2913@gmail.com"/>
                </Col>
                <Col>
                    <MemberCard imgSrc={pin_er} name="陳品而｜碩一" text="計算語意學、認知語意學"
                    mail = "mailto:cckk2913@gmail.com"/>
                </Col>
            </Row>

            <h4 style={{marginBottom:"5vh", marginTop:"5vh"}}>研究助理</h4>
            <Row lg="5" md="4" sm="3" xs="2" style={{marginBottom:"5vh"}}>
                <Col>
                    <MemberCard imgSrc={nana} name="Nana" text="計算語言學、語料庫語言學、資料探勘"
                    mail = "mailto:b06102020@ntu.edu.tw"/>
                </Col>
            </Row>


        </div>
    )
}

export default MemberDescription
