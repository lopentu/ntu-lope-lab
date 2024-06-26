import newsPic from '../images/6.25news.png'

const newsInfo = [
  {
    date: "2023.6.26 | 活動",
    title: "謝舒凱教授在生成式人工智慧技術 與應用論壇演講",
    content: (
      <div>
        <p>時間:2023年6月26日（四）14:00~17:10 </p>
        <p>歡迎師生蒞臨參加。</p>
        <img src={newsPic} style={{ width: '340px', height: 'auto' }} />
      </div>
    ),
  },
  {
    date: "2023.12.26 | 活動",
    title: "本實驗室將邀請曾昱翔博士後研究員蒞臨演講",
    content: (
      <div>
        <p>講者:Yu-Hsiang Tseng | 曾昱翔 Post-doc researcher, Universität Tübingen</p>
        <p>時間:2023年12月26日（三）16:00~17:00 </p>
        <p>地點:樂學館304室</p>
        <p>講題 :Decoding linguistic representations from large language models: case studies of text and speech embeddings</p>
        <p>摘要 :Large language models, such as GPTs, learn to generate human-interpretable content through exposure to a large amount of linguistic inputs. The practical success of such models is unequivocal, positioning them as the best natural language processing implementations at scale. From another perspective, these models are also the computational instantiation of a linguistic-form process theory, although the theory remains underspecified. By reverse-engineering the models, we may glean insights into their processing mechanism and reveal the possible underlying properties of our language.
In this talk, I discuss two case studies of studying the model with their representations. The first examines the Chinese diachronic semantic change modeled by fined-tuning a language model with historical texts across different dynasties. The analyses of the model's hidden representations reveal the usage shifts of the same word types over time. The second study looks into the multilingual text and speech translation model representations, revealing the token-level correlations between the speech and text embeddings of identical word types. Both studies demonstrate the possible use of studying language with the help of large language models.</p>
        <p>歡迎師生蒞臨參加。</p>
      </div>
    ),
  },
  {
    date: "2023.12.18 | 活動",
    title: "本實驗室將邀請 UCLA 陶紅印老師來訪本實驗室",
    content: (
      <div>
        <p>12月18日(一)下午4:30 ，地點：樂學館305室</p>
        <p>地點:陽明交通大學浩然圖書館B1國際會議廳</p>
        <p><a href="http://ht37.bol.ucla.edu/">UCLA的陶老師</a>將來參訪本實驗室的多模態語料庫，觀迎有興趣多模態言談分析的同學一起參加。</p>
      </div>
    ),
  },
  {
    date: "2023.12.08 | 活動",
    title: "本實驗室邀請牛津大學研究團隊參與學術交流活動",
    content: (
      <div>
        <p>12/8(五)下午 2:30 ，地點：樂學館304室</p>
        <p>地點:陽明交通大學浩然圖書館B1國際會議廳</p>
        <p>本實驗室非常榮幸邀請牛津大學國際多模態溝通研究中心（International Multimodal Communication Centre）的主持人Anna Wilson博士，以及三位資深協同研究員，來訪本實驗室，參觀謝舒凱教授所領導的研究計畫。</p>
      </div>
    ),
  },
  {
    date: "2023.12.13 | 活動",
    title: "謝舒凱教授在陽明交通大學演講",
    content: (
      <div>
        <p>講題:語言與科技相遇的地方</p>
        <p>地點:陽明交通大學浩然圖書館B1國際會議廳</p>
        <p>時間:2023/12/13 (三) 13:20~15:10</p>
        <a
            href="https://liberalarts.nycu.edu.tw/book/12_13(%E4%B8%89)+-+%E8%AC%9D%E8%88%92%E5%87%B1%E3%80%8C%E8%AA%9E%E8%A8%80%E8%88%87%E7%A7%91%E6%8A%80%E7%9B%B8%E9%81%87%E7%9A%84%E5%9C%B0%E6%96%B9%E3%80%8D/"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看更多              
          </a>
      </div>
    ),
  },
  {
    date: "2023.10.06 | 活動",
    title: "本實驗室邀請 Laurent Prévot 教授蒞臨演講",
    content: (
      <div>
        <p>講者 : Prof. Laurent Prévot, CNRS, CEFC, Taipei.</p>
        <p>
          講題 : Comparing Fine-Tuning and Data Programming Approaches for
          Linguistic Segmentation Tasks.
        </p>
        <p>
          摘要 : In this talk, I will extend a recent study on French discourse
          segmentation comparing fine-tuning LLMs in a supervised way vs.
          crafting labelling rules to develop a weakly supervised segmenter. The
          results show that both approaches yield similar performance in terms
          of f-score while weak supervision requires less manual annotation
          work. I will also show how to combine a state-of-the-art data curation
          platform (argilla), a weak supervision environment (e.g snorkel,
          skweak) and a standard NLP pipeline (spacy) to implement efficiently
          data programming approach for linguistic segmentation tasks such as
          chunking and discourse segmentat.
        </p>
      </div>
    ),
  },

  {
    date: "2023.9.26 | 賀",
    title: "本實驗室近期研究發表",
    content: (
      <div>
        <div>
          <strong>
            Pacific Asia Conference on Language, Information and
            Computation(PACLIC37).
          </strong>
          <li>
            Yu-Hsiang Tseng, Mao-Chang Ku, Wei-Ling Chen, Yu-Lin Chang, Hsieh,
            Shu-Kai. (2023). Vec2Gloss: definition modeling leveraging
            contextualized vectors with Wordnet gloss.{" "}
          </li>
          <li>
            Pin-Er Chen, Hsin-Yu Chou, Po-Ya Angela Wang, Yu-Hsiang
            Tseng, Hsieh, Shu-Kai. (2023). Exploring affordance and situated
            meaning in image captions: a multimodal analysis.
          </li>
          <br></br>
        </div>

        <div>
          <b>
            The 35th annual Conference on Computational Linguistics and Speech
            Processing (ROCLING).
          </b>
          <li>
            Zheng-Lin Lin, Chiao-Han Yen, Jia-Cheng Xu, Deborah Watty
            and Shu-Kai Hsieh. (2023). Solving Linguistic Olympiad Problems with
            Tree-of-Thought Prompting.
          </li>
          <li>
            Kai-Ching Yeh, Jou-An Chi and Da-Chen Lian, Shu-Kai Hsieh. (2023).
            Evaluating Interfaced LLM's Bias.
          </li>
          <br></br>
        </div>

        <div>
          <b>
            2023 International Conference on Asian Language Processing(IALP
            2023).
          </b>
          <li>
            Deborah Watty, Micah Kitsunai, Shu-Kai Hsieh. (2023). Prompt-based
            translation of Chinese into Taiwan Braille.
          </li>
          <br></br>
        </div>

        <div>
          <b>
            Discourse studies and linguistic data science: Addressing challenges
            in interoperability, multilinguality and linguistic data processing,
            Vienna, Austria(DiSLiDaS 2023).
          </b>
          <li>
            Po-Ya Angela Wang, Pin-Er Chen, Hsin-Yu Chou, Yu-Hsiang Tseng, and
            Shu-Kai Hsieh. (2023). Lexical Retrieval Hypothesis in Multimodal
            Context.
          </li>
        </div>
      </div>
    ),
  },

  {
    date: "2023.9.16 | 賀",
    title:
      "本實驗室謝舒凱教授與連大成同學穫法律法遵黑客松競賽銀牌獎與AIGC特別獎！",
    content: (
      <div>
        <div>
          本實驗室謝舒凱教授與連大成同學得到了
          <a
            href="https://hackathon.lawsnote.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023法律法遵黑客松競賽
          </a>
          銀牌獎與AIGC特別獎！(比賽團隊成員：臺大語言所謝舒凱教授與連大成;
          臺大新聞所謝吉隆老師，以及成功大學敏求智慧運算學院李韶曼老師)。
        </div>
        <div>
          <a
            href="https://hackathon.lawsnote.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            總決賽線上直播
          </a>
        </div>
      </div>
    ),
  },

  {
    date: "2023.04.07 | 活動",
    title:
      "本實驗室邀請 Pierre Zweigenbaum 教授 (法國巴黎 Saclay 大學) 蒞臨演講",
    time: "將於當日下午舉辦",
    content:
      "講題: 「Knowledge-Based Information Extraction: Applications to the Biomedical Domain」",
  },

  {
    date: "2022.11.12-14 | 活動",
    title: "本實驗室舉辦 2022 台大多模態語料分析工作坊",
    content: (
      <div>
        <a
          href="https://multimoco.linguistics.ntu.edu.tw/index.html#workshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          看網站
        </a>
      </div>
    ),
  },

  {
    date: "2021.05.20 | 活動",
    title: "5/22舉辦兩場活動",
    content: "中文AI知識庫與自然語言處理核心套件研討會、第四屆語言分析黑客松",
  },

  {
    date: "2021.01.21 | 活動",
    title: "曾昱翔博士受邀演講:「深度學習的超級分類器：Bert實作工作坊」",
    content: "2021.01.21於台大國發所302室舉辦",
    link: "https://docs.google.com/presentation/d/1aGdG7OcAc-kIGxYqgBOtGeT83avWOA7pAqord7wrlhA/edit#slide=id.p",
    linkName: "Hello Bert!",
  },

  {
    date: "2020.11.22 | 活動",
    title: "NLP業界學長姊分享會",
    content: "2020.11.24 於台大樂學館305室舉辦",
  },

  {
    date: "2020.11.19 | 活動",
    title: "歡迎參加「第二屆語料庫程式實務工作坊」",
    content:
      "我們介紹中文自動化標記、創建語料庫索引、建立自有語料庫、分享語料庫研究相關專案與應用",
    link: "https://lopentu.github.io/Hands-on_Corpus_Linguistics/#registration",
    linkName: "HOCOR 2020工作坊網頁",
  },

  {
    date: "2020.11.06 | 賀",
    title: "林宜儒同學獲得最佳論文！",
    content:
      "恭喜本實驗室畢業生林宜儒獲得 2020 台灣語言學學會最佳碩士論文獎，並即將在 11/14 的 NCL 頒獎後發表演講！",
  },
];

export default newsInfo;
