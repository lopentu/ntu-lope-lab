const newsInfo = [
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

  // {
  //   date: "2023.9.26 | 賀",
  //   title: "本實驗室近期研究發表",
  //   content:
  //     "Pacific Asia Conference on Language, Information and Computation (PACLIC37). ",
  // },

  {
    date: "2023.9.16 | 賀",
    title:
      "本實驗室謝舒凱教授與連大成同學穫法律法遵黑客松競賽銀牌獎與AIGC特別獎！",
    content:
      "本實驗室謝舒凱教授與連大成同學得到了2023法律法遵黑客松競賽(https://hackathon.lawsnote.com/)銀牌獎與AIGC特別獎(比賽團隊成員：臺大語言所謝舒凱教授 and 連大成; 臺大新聞所謝吉隆老師，以及成功大學敏求智慧運算學院李韶曼老師)。",
    link: "https://www.youtube.com/watch?v=pLWOkad6AJQ",
    linkName: "總決賽線上直播",
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
    content: "https://multimoco.linguistics.ntu.edu.tw/#workshop",
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
