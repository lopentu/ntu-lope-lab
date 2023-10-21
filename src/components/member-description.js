import React from "react";
import { Row, Col } from "reactstrap";
import MemberCard from "./member-card";
import amber from "../images/members/amber.png";
import ben from "../images/members/ben.JPG";
import bk from "../images/members/bk.png";
import richard from "../images/members/richard.jpg";
import debby from "../images/members/debby.png";
import amy from "../images/members/amy.jpeg";
import pin_er from "../images/members/pin-er.jpg";
import yulin from "../images/members/yulin.png";
import mia from "../images/members/mia.jpg";
import deborah from "../images/members/deborah.jpg";
import irene from "../images/members/Irene.jpg";
import joanne from "../images/members/joanne.png";
import micah from "../images/members/micah2.jpeg";
import linda from "../images/members/linda.jpg";
import andy from "../images/members/andy.jpg";

const MemberDescription = () => {
  return (
    <div style={{ width: "90vw" }}>
      {/* <h4 style={{ marginBottom: "5vh", marginTop: "5vh" }}>
        博士後研究員(專任研究助理＆博士後研究員)

      </h4> */}
      {/* <Row lg="5" md="4" sm="3" xs="2">
        <Col>
          <MemberCard
            imgSrc={yu_shiang}
            name="曾昱翔｜博士後研究員"
            text="心理學、文本分析、計算語言學、計算語意學、心理語言學"
            mail="mailto:seantyh@gmail.com"
          />
        </Col>
      </Row> */}

      <h4 style={{ marginBottom: "5vh", marginTop: "5vh" }}>博士生</h4>
      <Row lg="5" md="4" sm="3" xs="2">
        <Col>
          <MemberCard
            imgSrc={amber}
            name="王伯雅｜博五"
            text="計算語言學、語料庫語言學、詞彙語意學、心理語言學、社會語言學、歷史語言學"
            mail="mailto:diff@cmgsh.tp.edu.tw;differe94nt@gmail.com"
            link="https://www.instagram.com/differe94nt/"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={bk}
            name="古貿昌｜博四"
            text="計算語言學、詞彙語意學、句法學"
            mail="mailto:d08142002@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={richard}
            name="連大成｜博四"
            text="計算語言學、大型語言模型、模型壓縮"
            mail="mailto:d08944019@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={linda}
            name="陳韋伶｜博三"
            text="計算語言學、語意學、語言習得"
            mail="mailto:d10142007@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={pin_er}
            name="陳品而｜博一"
            text="計算語意學、認知語意學"
            mail="mailto:cckk2913@gmail.com"
          />
        </Col>
      </Row>

      <h4 style={{ marginBottom: "5vh", marginTop: "5vh" }}>碩士生</h4>
      <Row lg="5" md="4" sm="3" xs="2" style={{ marginBottom: "5vh" }}>
        <Col>
          <MemberCard
            imgSrc={ben}
            name="許家誠｜碩五"
            text="計算語言學、南島語語言學、語料庫語言學、聲韻學"
            mail="mailto:r07142006@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={debby}
            name="Debby Chang｜碩五"
            text="計算語言、詞彙語意學、符號學"
            mail="mailto:r07142005@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={yulin}
            name="張鈺琳｜碩三"
            text="計算語言學"
            mail="mailto:r10142006@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={amy}
            name="周昕妤｜碩三"
            text="計算語言學、語意學、認知語言學"
            mail="mailto:r10142008@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={joanne}
            name="紀柔安｜碩二"
            text="計算語意學、認知語意學、資料科學"
            mail="jajoanne.chi88@gmail.com"
            link="https://github.com/lowannann"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={mia}
            name="葉凱晴｜碩二"
            text="計算語言學、句法學、語料庫語言學、資料科學"
            mail="mailto:ykcmia@gmail.com"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={irene}
            name="顏巧函｜碩二"
            text="計算語意學、認知語意學、社會語言學、隱喻"
            mail="mailto:r11142008@ntu.edu.tw"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={micah}
            name="橘内每歌 ｜碩二"
            text="計算語言學、語料庫語言學、大型語言模型、"
            mail="mailto:r11142010@ntu.edu.tw"
            link="https://github.com/muoegu"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={deborah}
            name="Deborah Watty｜碩二"
            text="計算語意學"
            mail="mailto:r11142012@ntu.edu.tw"
            link="https://github.com/deborahwatty"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={andy}
            name="林欣安｜碩一"
            text="計算語言學"
            mail="mailto:r12142007@ntu.edu.tw"
          />
        </Col>
      </Row>

      <h4 style={{ marginBottom: "5vh", marginTop: "5vh" }}>研究助理</h4>
      <Row lg="5" md="4" sm="3" xs="2" style={{ marginBottom: "5vh" }}>
        {/* <Col>
          <MemberCard imgSrc={micah} name="Cindy 欣誼｜" text="??" mail="" />
        </Col>
        <Col>
          <MemberCard imgSrc={micah} name="蔡雨璇｜" text="??" mail="w" />
        </Col>
        <Col>
          <MemberCard
            imgSrc={micah}
            name="楊力行｜"
            text="軟體工程、領域驅動設計"
            mail="retr0327@gmail.com"
            link="https://retr0327.github.io/"
          />
        </Col>
        <Col>
          <MemberCard
            imgSrc={micah}
            name="陳博煒｜"
            text="軟體工程、計算機科學"
            mail="bwchen.dev@gmail.com"
          />
        </Col> */}
      </Row>
    </div>
  );
};

export default MemberDescription;
