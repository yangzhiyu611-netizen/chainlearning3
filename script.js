(function () {
  'use strict';

  // ========== 假数据 ==========
  var WORDS = [
    {
      term: 'innovation',
      image: 'https://word.bczcdn.com/r/c_i_6357_2_0_3_150731162830-gigapixel-scale.jpg',
      correctIndex: 0,
      meaning: 'n. 创新',
      meaningNote: '近5年8次',
      options: ['n. 创新', 'n. 探索', 'n. 改革'],
      hintText: ['比 new idea 更书面', 'technological innovation 技术创新', 'promote innovation 促进创新'],
      example: 'Real innovation does not always look flashy; sometimes it quietly changes how people live and work.',
      exampleZh: '真正的创新不一定看起来很炫目；有时它只是悄悄改变人们的生活和工作方式。',
      keyPoints: 'innovation 是六级写作里的高频正式词，比 new idea 更书面。常用于科技、教育、经济、产业升级。写翻译时可对应"创新""革新""技术创新"。',
      usage: 'technological innovation：技术创新；promote innovation：促进创新',
      wrongAnalysis: { 1: '若错选 B（发明）：invention 侧重新事物被造出来，innovation 侧重新方法、新思路的引入与改进。', 2: '若错选 C（改革）：reform 偏制度、政策层面，innovation 偏技术、模式、观念。' }
    },
    {
      term: 'technology',
      image: 'https://word.bczcdn.com/r/5db07733663c027485a413cae61a05b9_203418_1578569114.jpg',
      correctIndex: 0,
      meaning: 'n. 技术；科技',
      meaningNote: '近3年3次',
      options: ['n. 技术；科技', 'n. 科学；学科', 'n. 发明；创造'],
      hintText: ['比 tech 正式，适合写作和翻译', 'advanced technology 先进技术', 'apply technology 应用技术'],
      example: 'When technology works well, people notice convenience; when it crashes, they suddenly remember how much they rely on it.',
      exampleZh: '当技术运行良好时，人们感受到的是便利；一旦系统崩了，大家才会突然意识到自己有多依赖它。',
      keyPoints: 'technology 是六级最常见的科技主题核心词。比 tech 正式，适合写作和翻译。常和 progress, innovation, industry, society 连用。',
      usage: 'advanced technology：先进技术；apply technology：应用技术',
      wrongAnalysis: { 1: '若错选 B（科学）：science 侧重理论与研究，technology 侧重应用与工具。', 2: '若错选 C（发明）：invention 是具体产物，technology 是技术、手段的统称。' }
    },
    {
      term: 'development',
      image: 'https://word.bczcdn.com/r/1bd01bfa29eb3e20fe8c3f6abfdcaf77_96081_1587796085.jpeg',
      correctIndex: 0,
      meaning: 'n. 发展',
      meaningNote: '近3年3次',
      options: ['n. 发展', 'n. 进步；提高', 'n. 增长；扩大'],
      hintText: ['可对应"发展、开发、进步"', 'economic development 经济发展', 'social development 社会发展'],
      example: 'Good development is not just about building more things; it is also about improving people\'s lives.',
      exampleZh: '好的发展不只是建更多东西，也在于改善人们的生活。',
      keyPoints: 'development 是六级翻译和作文里的超级高频词。可对应"发展、开发、进步"，但中国发展语境里通常先译"发展"。搭配空间极大，非常适合做链式练习。',
      usage: 'economic development：经济发展；social development：社会发展',
      wrongAnalysis: { 1: '若错选 B（进步）：progress 偏过程与提升，development 偏整体发展与建设。', 2: '若错选 C（增长）：growth 多指数值、规模增长，development 含义更广。' }
    },
    {
      term: 'application',
      image: 'https://word.bczcdn.com/r/a1398338de017175ab9f1b171b0426d1_181360_1582269399.jpg',
      correctIndex: 0,
      meaning: 'n. 应用；运用',
      meaningNote: '近3年2次',
      options: ['n. 应用；运用', 'n. 申请；请求', 'n. 使用；利用'],
      hintText: ['科技主题里通常不是"申请"', 'wide application 广泛应用', 'practical application 实际应用'],
      example: 'A new technology becomes exciting only when its application actually makes daily life easier.',
      exampleZh: '一项新技术只有在真正让日常生活更方便时，它的应用才会令人兴奋。',
      keyPoints: 'application 在科技主题里通常不是"申请"，而是"应用"。这个词在六级里很容易一词多义，必须靠语境判断。AI、5G、医疗、教育都很适合搭配这个词。',
      usage: 'wide application：广泛应用；practical application：实际应用',
      wrongAnalysis: { 1: '若错选 B（申请）：apply for 才是"申请"，此处语境为技术的"应用"。', 2: '若错选 C（使用）：use 更口语，application 强调"把技术应用到某领域"。' }
    }
  ];

  var PHRASES = [
    {
      term: 'transformative innovation',
      image: 'https://word.bczcdn.com/r/3_0_20160720070529_96431_c-gigapixel-scale.jpg',
      correctIndex: 0,
      meaning: '变革性创新',
      options: ['phr. 变革性创新', 'phr. 负责任的创新', 'phr. 包容性创新'],
      hintText: ['transformative 强调带来深刻改变', 'drive transformative innovation 推动变革性创新'],
      example: 'Artificial intelligence is widely regarded as a form of transformative innovation because it is reshaping many industries.',
      exampleZh: '人工智能被广泛视为一种变革性创新，因为它正在重塑许多行业。',
      keyPoints: 'transformative 强调"带来深刻改变"。和普通 innovation 相比，它不是一般改进，而是"改写格局"的创新。很适合写 AI、航天、5G、数字经济。',
      usage: 'drive transformative innovation：推动变革性创新；a transformative force in innovation：创新中的变革力量',
      wrongAnalysis: { 1: '若错选 B（负责任的创新）：responsible 强调合规与伦理，此处强调"变革力度"。', 2: '若错选 C（包容性创新）：inclusive 强调惠及更多人，此处强调"深刻改变"。' }
    },
    {
      term: 'responsible innovation',
      image: 'https://vol-v6.bczcdn.com/r/pmwucxgykpqvl5sfyalvjtmukwdh7yss.png',
      correctIndex: 0,
      meaning: '负责任的创新',
      options: ['phr. 负责任的创新', 'phr. 变革性创新', 'phr. 包容性创新'],
      hintText: ['responsible 强调合规、可靠、可控', 'encourage responsible innovation 鼓励负责任的创新'],
      example: 'As AI develops rapidly, responsible innovation becomes essential to ensure safety, fairness and public trust.',
      exampleZh: '随着人工智能快速发展，负责任的创新对于确保安全、公平和公众信任变得至关重要。',
      keyPoints: 'responsible 强调"创新不能只求快，还要合规、可靠、可控"。很适合写 AI 治理、科技伦理、平台责任。这类表达在六级作文里很提分，体现"辩证思考"。',
      usage: 'encourage responsible innovation：鼓励负责任的创新；responsible innovation in AI：人工智能中的负责任创新',
      wrongAnalysis: { 1: '若错选 B（变革性创新）：transformative 强调改变力度，此处强调责任与规范。', 2: '若错选 C（包容性创新）：inclusive 强调惠及面，此处强调安全与伦理。' }
    },
    {
      term: 'inclusive innovation',
      image: 'https://vol-v6.bczcdn.com/r/25lvrjvg8kr9rybhw5425spbjpv2gtqp.png',
      correctIndex: 0,
      meaning: '包容性创新；普惠性创新',
      options: ['phr. 普惠性创新', 'phr. 变革性创新', 'phr. 负责任的创新'],
      hintText: ['inclusive 强调惠及更广泛人群', 'promote inclusive innovation 推动包容性创新'],
      example: 'Inclusive innovation helps make advanced technology available to more people, including those in less-developed areas.',
      exampleZh: '包容性创新有助于让更多人享受到先进技术，包括欠发达地区的人群。',
      keyPoints: 'inclusive 强调"惠及更广泛人群"，不是只让少数人受益。特别适合中国发展语境，如数字普惠、远程医疗、教育公平。六级翻译里可自然对应"普惠""包容""共享发展"。',
      usage: 'promote inclusive innovation：推动包容性创新；inclusive innovation model：包容性创新模式',
      wrongAnalysis: { 1: '若错选 B（变革性创新）：transformative 强调改变深度，inclusive 强调覆盖广度。', 2: '若错选 C（负责任的创新）：responsible 强调伦理与规范，inclusive 强调普惠与公平。' }
    },
    {
      term: 'transformative technology',
      image: 'https://word.bczcdn.com/r/BEC19_transformative.jpg',
      correctIndex: 0,
      meaning: '变革性技术',
      options: ['phr. 变革性技术', 'phr. 负责任的技术', 'phr. 包容性技术'],
      hintText: ['强调技术具有改造社会运行方式的能力', 'emerging transformative technology 新兴变革性技术'],
      example: '5G is considered a transformative technology because it supports faster communication and enables new forms of digital services.',
      exampleZh: '5G 被认为是一种变革性技术，因为它支持更快速的通信，并使新的数字服务形式成为可能。',
      keyPoints: 'transformative technology 强调技术本身具有"改造社会运行方式"的能力。很适合搭配 5G、AI、航天科技、远程医疗。六级翻译里可译为"具有变革意义的技术"或"变革性技术"。',
      usage: 'emerging transformative technology：新兴变革性技术；a transformative technology for society：对社会具有变革意义的技术',
      wrongAnalysis: { 1: '若错选 B（负责任的技术）：responsible 强调伦理与风险，此处强调变革能力。', 2: '若错选 C（包容性技术）：inclusive 强调可及性与普惠，此处强调变革性。' }
    },
    {
      term: 'responsible technology',
      image: 'https://vol-v6.bczcdn.com/r/r9cnabw84s354jdhqbu2d7u74am44qhd.png',
      correctIndex: 0,
      meaning: '负责任的技术',
      options: ['phr. 负责任的技术', 'phr. 变革性技术', 'phr. 包容性技术'],
      hintText: ['技术发展不能脱离伦理、法律和社会责任', 'develop responsible technology 发展负责任的技术'],
      example: 'Responsible technology should not only improve efficiency but also protect privacy and reduce potential risks.',
      exampleZh: '负责任的技术不仅应提高效率，还应保护隐私并降低潜在风险。',
      keyPoints: '这个表达强调：技术发展不能脱离伦理、法律和社会责任。很适合 AI、算法、数据安全类写作。写作中常和 privacy, fairness, safety 连用。',
      usage: 'develop responsible technology：发展负责任的技术；principles of responsible technology：负责任技术的原则',
      wrongAnalysis: { 1: '若错选 B（变革性技术）：transformative 强调改变能力，此处强调责任与约束。', 2: '若错选 C（包容性技术）：inclusive 强调普惠，此处强调伦理与安全。' }
    },
    {
      term: 'inclusive technology',
      image: 'https://word.bczcdn.com/r/83069067c57027cb0c607248319bd1c6_198845_1727680648.jpg',
      correctIndex: 0,
      meaning: '包容性技术；普惠技术',
      options: ['phr. 普惠性技术', 'phr. 变革性技术', 'phr. 负责任的技术'],
      hintText: ['重点在覆盖更广、门槛更低', 'inclusive technology for rural areas 面向农村地区的包容性技术'],
      example: 'Inclusive technology can narrow the digital divide by giving more people access to education, health care and information.',
      exampleZh: '包容性技术能够通过让更多人获得教育、医疗和信息资源来缩小数字鸿沟。',
      keyPoints: 'inclusive technology 的重点不在"技术多先进"，而在"覆盖更广、门槛更低"。特别适合联系 5G 覆盖、远程医疗、数字中国。是很典型的"科技服务社会"表达。',
      usage: 'accessible and inclusive technology：可及且包容的技术；inclusive technology for rural areas：面向农村地区的包容性技术',
      wrongAnalysis: { 1: '若错选 B（变革性技术）：transformative 强调变革力度，inclusive 强调可及与普惠。', 2: '若错选 C（负责任的技术）：responsible 强调伦理，inclusive 强调覆盖人群。' }
    },
    {
      term: 'transformative development',
      image: 'https://word.bczcdn.com/r/3_0_20160520172841_80246_c-gigapixel-scale.jpg',
      correctIndex: 0,
      meaning: '变革性发展',
      options: ['phr. 变革性发展', 'phr. 负责任的发展', 'phr. 普惠性发展'],
      hintText: ['发展不只是增长，而是结构性变化', 'achieve transformative development 实现变革性发展'],
      example: 'Digital infrastructure has supported transformative development in many regions by improving connectivity and public services.',
      exampleZh: '数字基础设施通过改善互联互通和公共服务，推动了许多地区的变革性发展。',
      keyPoints: '重点是"发展不只是增长，而是结构性变化"。很适合中国式现代化、科技驱动、区域升级。可用于描述"从传统模式走向新模式"。',
      usage: 'achieve transformative development：实现变革性发展；a path to transformative development：通向变革性发展的路径',
      wrongAnalysis: { 1: '若错选 B（负责任的发展）：responsible 强调约束与责任，此处强调结构性变革。', 2: '若错选 C（包容性发展）：inclusive 强调共享与普惠，此处强调变革深度。' }
    },
    {
      term: 'responsible development',
      image: 'https://vol-v6.bczcdn.com/r/j3mvakcu629ugdr5xtmu8weubn5qe8s4.png',
      correctIndex: 0,
      meaning: '负责任的发展',
      options: ['phr. 负责任的发展', 'phr. 变革性发展', 'phr. 包容性发展'],
      hintText: ['发展不能脱离约束和责任', 'promote responsible development 推动负责任的发展'],
      example: 'Responsible development of artificial intelligence requires a balance between innovation, regulation and public interest.',
      exampleZh: '人工智能的负责任发展要求在创新、监管和公共利益之间取得平衡。',
      keyPoints: '强调"发展"不能脱离约束和责任。六级写作里很适合用来体现双边讨论：既要发展，也要规范。很适合 AI、平台经济、科技伦理。',
      usage: 'promote responsible development：推动负责任的发展；responsible development of new technologies：新技术的负责任发展',
      wrongAnalysis: { 1: '若错选 B（变革性发展）：transformative 强调变革，responsible 强调规范与平衡。', 2: '若错选 C（包容性发展）：inclusive 强调普惠，responsible 强调责任与监管。' }
    },
    {
      term: 'inclusive development',
      image: 'https://vol-v6.bczcdn.com/r/9ml66n5jtghng23gbmu9xy585rr66u9g.png',
      correctIndex: 0,
      meaning: '普惠性发展',
      options: ['phr. 普惠性发展', 'phr. 变革性发展', 'phr. 负责任的发展'],
      hintText: ['中国发展语境里的高频高级表达', 'promote inclusive development 促进包容性发展'],
      example: 'Inclusive development ensures that the benefits of modernization are shared by people in both urban and rural areas.',
      exampleZh: '包容性发展确保现代化成果由城乡居民共同分享。',
      keyPoints: '这是中国发展语境里的高频高级表达。强调"不让一部分人掉队"，常和 education, health care, rural areas 连用。六级翻译里很适合对应"共享发展""普惠发展""包容性发展"。',
      usage: 'promote inclusive development：促进包容性发展；inclusive development strategy：包容性发展战略',
      wrongAnalysis: { 1: '若错选 B（变革性发展）：transformative 强调结构性变革，inclusive 强调共享与普惠。', 2: '若错选 C（负责任的发展）：responsible 强调规范，inclusive 强调惠及面。' }
    },
    {
      term: 'transformative application',
      image: 'https://vol-v6.bczcdn.com/r/szlabv36bw93dt4ql3grg4q39tn2afrr.png',
      correctIndex: 0,
      meaning: '具有变革意义的应用',
      options: ['phr. 具有变革意义的应用', 'phr. 负责任的应用', 'phr. 普惠性应用'],
      hintText: ['应用场景本身带来显著变化', 'transformative application of AI 人工智能的变革性应用'],
      example: 'The transformative application of AI in health care has made remote diagnosis and medical consultation more efficient.',
      exampleZh: '人工智能在医疗领域的变革性应用使远程诊断和医疗咨询更加高效。',
      keyPoints: '强调"应用场景本身带来了显著变化"。和 transformative technology 不同，这里重心在"怎么用"，不是"技术本体"。很适合远程医疗、智能制造、智慧城市。',
      usage: 'transformative application of AI：人工智能的变革性应用；enable transformative applications：促成具有变革意义的应用',
      wrongAnalysis: { 1: '若错选 B（负责任的应用）：responsible 强调规范使用，此处强调应用带来的变革。', 2: '若错选 C（普惠性应用）：inclusive 强调惠及面，此处强调变革性。' }
    },
    {
      term: 'responsible application',
      image: 'https://vol-v6.bczcdn.com/r/rgujnhstqcuwd8zsek9tvkazdz8c9fqm.png',
      correctIndex: 0,
      meaning: '负责任的应用',
      options: ['phr. 负责任的应用', 'phr. 具有变革意义的应用', 'phr. 普惠性应用'],
      hintText: ['不仅能用，还要用得对', 'ensure the responsible application of technology 确保技术的负责任应用'],
      example: 'The responsible application of AI should be guided by clear rules to prevent misuse and protect the public.',
      exampleZh: '人工智能的负责任应用应由明确规则加以引导，以防止滥用并保护公众。',
      keyPoints: '这个表达在 AI 写作里非常好用。核心意思是：不仅能用，还要"用得对"。和 misuse, ethics, regulation, safety 很容易连起来。',
      usage: 'ensure the responsible application of technology：确保技术的负责任应用；principles for responsible application：负责任应用的原则',
      wrongAnalysis: { 1: '若错选 B（具有变革意义的应用）：transformative 强调变革效果，responsible 强调规范与安全。', 2: '若错选 C（普惠性应用）：inclusive 强调惠及更多人，responsible 强调合规与伦理。' }
    },
    {
      term: 'inclusive application',
      image: 'https://word.bczcdn.com/r/3eb0fef960afb5d4648b4a17f0bac623_65555_1699430387.jpeg',
      correctIndex: 0,
      meaning: '普惠性应用；面向更广人群的应用',
      options: ['phr. 普惠性应用；面向更广人群的应用', 'phr. 具有变革意义的应用', 'phr. 负责任的应用'],
      hintText: ['应用结果惠及更多人', 'inclusive application of digital tools 数字工具的普惠性应用'],
      example: 'Inclusive application of digital technology can improve education and medical services in remote areas.',
      exampleZh: '数字技术的普惠性应用能够改善偏远地区的教育和医疗服务。',
      keyPoints: '重点是"应用结果是否惠及更多人"。和 inclusive innovation 一样，都适合写中国发展中的公平、普惠、共享。远程医疗、在线教育、5G 覆盖都能自然套进去。',
      usage: 'inclusive application of digital tools：数字工具的普惠性应用；support inclusive applications：支持普惠性应用',
      wrongAnalysis: { 1: '若错选 B（具有变革意义的应用）：transformative 强调变革，inclusive 强调普惠与覆盖。', 2: '若错选 C（负责任的应用）：responsible 强调规范，inclusive 强调惠及面。' }
    }
  ];

  var LETTERS = ['A', 'B', 'C'];

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function buildReviewOptions() {
    return CHAIN.map(function (item, idx) {
      var isPhrase = item.term.indexOf(' ') !== -1;
      // 复习选项同类抽取：短语题只出短语选项；单词题只出单词选项
      var pool = CHAIN
        .filter(function (x, i) {
          if (i === idx) return false;
          var xIsPhrase = x.term.indexOf(' ') !== -1;
          return xIsPhrase === isPhrase;
        })
        .map(function (x) { return x.term; });
      // 兜底：如果同类池不足（理论上不会），则退回全量池
      if (pool.length < 2) {
        pool = CHAIN.filter(function (_, i) { return i !== idx; }).map(function (x) { return x.term; });
      }
      var two = [pool[Math.floor(Math.random() * pool.length)], pool[Math.floor(Math.random() * pool.length)]];
      while (two[1] === two[0]) two[1] = pool[Math.floor(Math.random() * pool.length)];
      var opts = shuffleArray([item.term, two[0], two[1]]);
      var correctIndex = opts.indexOf(item.term);
      return { item: item, options: opts, correctIndex: correctIndex };
    });
  }

  function getChineseGloss(meaning) {
    if (!meaning) return '';
    var s = meaning.replace(/^[A-Za-z .；;]+/, '').trim();
    var first = s.split(/[；;，,]/)[0];
    return (first || s).trim();
  }

  // 复习题标红：例句中可能用与 meaning 不同的说法，生成多个候选短语，只要例句出现任一则标红
  function getReviewHighlightCandidates(item) {
    var meaning = item.meaning || '';
    var gloss = getChineseGloss(meaning);
    var candidates = [];
    if (gloss) candidates.push(gloss);
    // “X的应用” 在句中常为 “X应用”，去掉“的”
    if (gloss.indexOf('的') !== -1) {
      candidates.push(gloss.replace(/的/g, ''));
    }
    // “具有X意义的应用” → 句中多为 “X性应用”
    var match = gloss.match(/具有(.+?)意义的应用/);
    if (match) candidates.push(match[1] + '性应用');
    // inclusive 类：释义常为“普惠性”，例句可能用“包容性”
    if (gloss === '普惠性发展') candidates.push('包容性发展');
    if (gloss === '普惠性应用；面向更广人群的应用' || gloss === '普惠性应用') candidates.push('普惠性应用');
    if (gloss.indexOf('普惠性创新') !== -1 || (item.term === 'inclusive innovation' && gloss.indexOf('普惠') !== -1)) candidates.push('包容性创新');
    return candidates;
  }

  // 真题演练：句子与答案
  var PRACTICE = {
    sentenceZh: '创新推动着中国的进步。变革性创新能够重塑各个行业，而负责任的创新则确保安全与公平。只有当新的理念被转化为负责任的和普惠性的实践时，它们才能真正改善人们的生活。',
    parts: [
      '',
      'drives China’s progress.',
      ' can reshape industries, while',
      ' ensures safety and fairness. Only when new ideas are transformed into ',
      ' and ',' practice can they truly improve people’s lives.'
    ],
    answers: ['Innovation', 'Transformative innovation', 'responsible innovation', 'responsible', 'inclusive'],
    options: ['Innovation', 'Transformative innovation', 'responsible innovation', 'responsible', 'inclusive']
  };

  // 学习链顺序：innovation → 三个词组 → technology → 三个词组 → development → 三个词组 → application → 三个词组
  var CHAIN = [
    WORDS[0],   // innovation
    PHRASES[0], // transformative innovation
    PHRASES[1], // responsible innovation
    PHRASES[2], // inclusive innovation
    WORDS[1],   // technology
    PHRASES[3], // transformative technology
    PHRASES[4], // responsible technology
    PHRASES[5], // inclusive technology
    WORDS[2],   // development
    PHRASES[6], // transformative development
    PHRASES[7], // responsible development
    PHRASES[8], // inclusive development
    WORDS[3],   // application
    PHRASES[9], // transformative application
    PHRASES[10],// responsible application
    PHRASES[11] // inclusive application
  ];

  // ========== 状态 ==========
  var state = {
    phase: 'preview',
    chainIndex: 0,
    userChoice: null,
    showHint: false,
    autoPlayed: {},  // 记录每题是否已自动播放过
    reviewIndex: 0,
    reviewRevealed: {},  // 复习题中某题图片是否已点击显示 { 0: true, ... }
    reviewChoice: null,  // 当前复习题已选选项下标，用于正误反馈
    reviewOptions: null  // 进入复习时生成：每题的选项与正确下标
  };

  var root = document.getElementById('root');

  function getProgressText() {
    var total = 1 + CHAIN.length * 2 + 2 + 1; // preview + (question+wiki)*n + practice + review + summary
    var current = 0;
    if (state.phase === 'preview') current = 0;
    else if (state.phase === 'question') current = 1 + state.chainIndex * 2;
    else if (state.phase === 'wiki') current = 2 + state.chainIndex * 2;
    else if (state.phase === 'practice') current = total - 3;
    else if (state.phase === 'review') current = total - 2;
    else if (state.phase === 'summary') current = total;
    else current = total;
    var percent = total ? Math.round((current / total) * 100) : 0;
    var step = state.phase === 'summary' ? total : current + 1;
    return { current: current, total: total, percent: total ? (current / total * 100) : 0, step: step, pct: percent };
  }

  function renderProgress() {
    var p = getProgressText();
    var wrap = document.createElement('div');
    wrap.className = 'progress-wrap';
    wrap.innerHTML =
      '<div class="progress-label">' +
        '<span class="progress-label-text"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">trending_up</span> Progress</span>' +
        '<span class="progress-value">' + p.step + ' / ' + p.total + '</span>' +
      '</div>' +
      '<div class="progress-track"><div class="progress-fill" style="width:' + p.percent + '%"></div></div>' +
      '<div class="progress-pct">' + p.pct + '% Complete</div>';
    return wrap;
  }

  function renderPreview() {
    var list = CHAIN;
    var section = document.createElement('div');
    section.className = 'app-main preview-page';
    var cardIcons = ['menu_book', 'school', 'account_balance', 'gavel', 'temple_buddhist', 'celebration', 'auto_stories', 'museum'];
    var cardsHtml = list.map(function (item, i) {
      var icon = cardIcons[i % cardIcons.length];
      return '<div class="preview-card">' +
        '<span class="preview-card-icon material-symbols-outlined">' + icon + '</span>' +
        '<h2 class="preview-card-term">' + escapeHtml(item.term) + '</h2>' +
      '</div>';
    }).join('');
    section.innerHTML =
      '<div class="preview-topbar">' +
        '<h2 class="preview-topbar-title">Preview</h2>' +
      '</div>' +
      '<div class="preview-header">' +
        '<h3 class="preview-header-title">CET-6 主题：中国科技与发展</h3>' +
        '<div class="preview-header-sub">' +
          '<span class="preview-header-line"></span>' +
          '<h4 class="preview-header-label">六级写作&amp;翻译专题</h4>' +
          '<span class="preview-header-line"></span>' +
        '</div>' +
      '</div>' +
      '<div class="preview-grid">' + cardsHtml + '</div>' +
      '<div class="preview-bg-pattern" aria-hidden="true"></div>' +
      '<div class="preview-footer-wrap">' +
        '<button type="button" class="btn btn-primary preview-footer-btn" data-action="start">' +
          '<span>Start Learning</span>' +
          '<span class="material-symbols-outlined">arrow_forward</span>' +
        '</button>' +
      '</div>';
    section.querySelector('[data-action="start"]').onclick = function () {
      state.phase = 'question';
      state.chainIndex = 0;
      state.userChoice = null;
      state.showHint = false;
      render();
    };
    return section;
  }

  function getCurrentQuestion() {
    if (state.phase === 'question' && state.chainIndex < CHAIN.length) return CHAIN[state.chainIndex];
    return null;
  }

  function speakTerm(text) {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }

  function renderQuestion() {
    var q = getCurrentQuestion();
    if (!q) return document.createElement('div');
    var idx = state.chainIndex;
    var total = CHAIN.length;
    var section = document.createElement('div');
    section.className = 'app-main';
    var hints = q.hintText ? (Array.isArray(q.hintText) ? q.hintText : [q.hintText]) : [];
    var hintContent = '';
    if (state.showHint) {
      hintContent = '<div class="question-hint-content">';
      if (hints.length) {
        hintContent += '<p class="hint-label">Hint:</p><ul class="hint-list">';
        hints.forEach(function (h, i) {
          hintContent += '<li>' + escapeHtml(h) + '</li>';
        });
        hintContent += '</ul>';
      }
      hintContent += '</div>';
    }
    var termImg = (q.image) ? '<img src="' + escapeHtml(q.image) + '" alt="' + escapeHtml(q.term) + '"/>' : '';
    var imgHtml = '<div class="question-image-wrap">' + termImg + '</div>' + hintContent;
    var optionsHtml = q.options.map(function (opt, i) {
      return '<button type="button" class="option-btn" data-index="' + i + '">' +
        '<span class="option-letter">' + LETTERS[i] + '</span>' +
        '<span class="option-text">' + opt + '</span>' +
      '</button>';
    }).join('');
    section.innerHTML =
      imgHtml +
      '<div class="question-term-block">' +
        '<div class="question-term-row">' +
          '<h2 class="question-term">' + escapeHtml(q.term) + '</h2>' +
          '<button type="button" class="icon-btn" data-action="play-audio" title="播放发音"><span class="material-symbols-outlined">volume_up</span></button>' +
        '</div>' +
        '<div class="question-hint-row">' +
          '<button type="button" class="icon-btn icon-btn-hint" data-action="hint" title="Hint">' +
            '<span class="material-symbols-outlined">lightbulb</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="options">' + optionsHtml + '</div>' +
      '<div class="question-actions">' +
        '<span class="question-step">' + (idx + 1) + ' / ' + total + '</span>' +
      '</div>';
    section.querySelectorAll('[data-action="hint"]').forEach(function (btn) {
      btn.onclick = function () {
        state.showHint = true;
        render();
      };
    });
    section.querySelectorAll('[data-action="play-audio"]').forEach(function (btn) {
      btn.onclick = function () {
        var curr = getCurrentQuestion();
        if (curr && curr.term) speakTerm(curr.term);
      };
    });
    section.querySelectorAll('.option-btn').forEach(function (btn) {
      btn.onclick = function () {
        state.userChoice = parseInt(btn.getAttribute('data-index'), 10);
        state.phase = 'wiki';
        render();
      };
    });
    return section;
  }

  function getCurrentWiki() {
    if (state.phase === 'wiki' && state.chainIndex < CHAIN.length) return { item: CHAIN[state.chainIndex] };
    return null;
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightTermInExample(exampleText, term) {
    if (!term || !exampleText) return escapeHtml(exampleText);
    var re = new RegExp('(' + escapeRegex(term) + ')', 'gi');
    var parts = exampleText.split(re);
    return parts.map(function (p, i) {
      if (i % 2 === 1) return '<span class="wiki-term-highlight">' + escapeHtml(p) + '</span>';
      return escapeHtml(p);
    }).join('');
  }

  function formatUsage(usageStr, term) {
    if (!usageStr) return '';
    var parts = usageStr.split(/\s*[；;]\s*|\s{2,}/).filter(function (s) { return s.trim(); });
    return parts.map(function (s) {
      var segment = escapeHtml(s.trim());
      if (term) {
        var re = new RegExp(escapeRegex(term), 'gi');
        segment = segment.replace(re, function (match) {
          return '<span class="usage-term-highlight">' + match + '</span>';
        });
      }
      return segment;
    }).join('<br>');
  }

  function renderWiki() {
    var w = getCurrentWiki();
    if (!w) return document.createElement('div');
    var item = w.item;
    var isPhrase = item.term.indexOf(' ') !== -1;
    var correctIndex = item.correctIndex !== undefined ? item.correctIndex : item.options.indexOf(item.meaning);
    var isCorrect = state.userChoice === correctIndex;
    var keyPointsParts = item.keyPoints.split(/[；。]/).filter(function (s) { return s.trim(); });
    var keyPointsList = keyPointsParts.map(function (s) {
      return '<li><span class="material-symbols-outlined">check_circle</span><span>' + escapeHtml(s.trim()) + '</span></li>';
    }).join('');
    var section = document.createElement('div');
    section.className = 'app-main wiki-page';
    section.innerHTML =
      '<div class="wiki-page-content">' +
        '<div class="wiki-title-block">' +
          '<h1 class="wiki-term">' + escapeHtml(item.term) + '<br><span class="wiki-meaning">' + escapeHtml(item.meaning) + '</span></h1>' +
          (isPhrase ? '' : '<div class="wiki-badge-wrap">' +
            '<span class="wiki-tag">' + (item.meaningNote ? escapeHtml(item.meaningNote) : 'CET-6') + '</span>' +
          '</div>') +
        '</div>' +
        '<section class="wiki-example">' +
          '<h3 class="wiki-example-head">真题例句</h3>' +
          '<div class="wiki-example-inner">' +
            '<p class="wiki-en">' + highlightTermInExample(item.example, item.term) + '</p>' +
            '<p class="wiki-zh">' + escapeHtml(item.exampleZh) + '</p>' +
          '</div>' +
        '</section>' +
        '<div class="wiki-cards">' +
          '<div class="wiki-card wiki-card-tip">' +
            '<div class="wiki-card-head"><span class="material-symbols-outlined">lightbulb</span><h3>考点解析</h3></div>' +
            '<ul class="wiki-points">' + keyPointsList + '</ul>' +
          '</div>' +
          (!isCorrect && item.wrongAnalysis && item.wrongAnalysis[state.userChoice] ? '<div class="wiki-card wiki-card-error">' +
            '<div class="wiki-card-head"><span class="material-symbols-outlined">error</span><h3>错因分析</h3></div>' +
            '<div class="wrong-analysis-inner"><p>' + escapeHtml(item.wrongAnalysis[state.userChoice]) + '</p></div>' +
          '</div>' : '') +
          '<div class="wiki-card wiki-card-usage">' +
            '<div class="wiki-card-head"><span class="material-symbols-outlined">link</span><h3>用法搭配</h3></div>' +
            '<p class="wiki-usage-p">' + formatUsage(item.usage, item.term) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="wiki-page-footer">' +
        '<button type="button" class="btn btn-primary" data-action="next">' +
          '<span>下一题</span><span class="material-symbols-outlined">arrow_forward</span>' +
        '</button>' +
      '</div>';
    section.querySelector('[data-action="next"]').onclick = function () {
      state.userChoice = null;
      state.showHint = false;
      state.chainIndex++;
      if (state.chainIndex < CHAIN.length) {
        state.phase = 'question';
      } else {
        state.phase = 'practice';
        state.practiceBlanks = [null, null, null, null, null];
        state.practiceSelectedBlank = null;
      }
      render();
    };
    return section;
  }

  function getPracticeFullSentence(answers) {
    var a = answers || PRACTICE.answers;
    return PRACTICE.parts[0] + a[0] + PRACTICE.parts[1] + a[1] + PRACTICE.parts[2] + a[2] + PRACTICE.parts[3] + a[3] + PRACTICE.parts[4] + a[4] + PRACTICE.parts[5];
  }

  function renderPractice() {
    var section = document.createElement('div');
    section.className = 'app-main practice-page';
    var submitted = state.practiceSubmitted === true;
    var results = state.practiceResults;
    var blanks = state.practiceBlanks || [null, null, null, null, null];
    var selectedBlank = state.practiceSelectedBlank;

    var sentenceHtml = '';
    var i;
    var zhBlock = '<p class="practice-sentence-zh">' + escapeHtml(PRACTICE.sentenceZh) + '</p>';

    if (!submitted) {
      sentenceHtml = '<div class="practice-sentence">';
      for (i = 0; i < PRACTICE.parts.length; i++) {
        sentenceHtml += escapeHtml(PRACTICE.parts[i]);
        if (i < PRACTICE.answers.length) {
          var val = blanks[i];
          var slotClass = 'practice-slot' + (selectedBlank === i ? ' practice-slot-selected' : '');
          var content = val ? escapeHtml(val) : '&nbsp;';
          sentenceHtml += '<span class="' + slotClass + '" data-blank="' + i + '" data-filled="' + (val ? '1' : '0') + '">' + content + '</span>';
        }
      }
      sentenceHtml += '</div>';

      var used = {};
      blanks.forEach(function (v) { if (v) used[v] = true; });
      var availableCards = PRACTICE.options.filter(function (opt) { return !used[opt]; });
      sentenceHtml += '<div class="practice-cards-wrap"><p class="practice-cards-label">单词卡片（点击填入空格）</p><div class="practice-cards">';
      availableCards.forEach(function (opt) {
        sentenceHtml += '<button type="button" class="practice-card" data-word="' + escapeHtml(opt) + '">' + escapeHtml(opt) + '</button>';
      });
      sentenceHtml += '</div></div>' +
        '<div class="practice-actions">' +
        '<button type="button" class="btn btn-primary" data-action="practice-submit">提交</button>' +
        '</div>';
    } else {
      var userAnswers = state.practiceUserAnswers || blanks;
      sentenceHtml = '<div class="practice-sentence practice-sentence-result">';
      for (i = 0; i < PRACTICE.parts.length; i++) {
        sentenceHtml += escapeHtml(PRACTICE.parts[i]);
        if (i < PRACTICE.answers.length) {
          var val = userAnswers[i] || '';
          var isCorrect = results && results[i];
          var cls = isCorrect ? 'practice-blank-correct' : 'practice-blank-wrong';
          sentenceHtml += '<span class="practice-blank ' + cls + '">' + escapeHtml(val || '（未填）') + '</span>';
        }
      }
      sentenceHtml += '</div>' +
        '<div class="practice-actions">' +
        '<button type="button" class="btn btn-secondary" data-action="practice-speak"><span class="material-symbols-outlined" style="vertical-align:middle;font-size:18px">volume_up</span> 读句子</button>' +
        '<button type="button" class="btn btn-primary" data-action="practice-done">完成</button>' +
        '</div>';
    }

    section.innerHTML =
      '<div class="practice-header">' +
        '<h2 class="practice-title">真题演练</h2>' +
        '<p class="practice-desc">将本单元所学单词与词组填入下面句子。</p>' +
      '</div>' +
      '<div class="practice-body">' +
        zhBlock +
        sentenceHtml +
      '</div>';

    if (!submitted) {
      section.querySelectorAll('.practice-slot').forEach(function (el) {
        el.onclick = function () {
          var idx = parseInt(el.getAttribute('data-blank'), 10);
          var filled = el.getAttribute('data-filled') === '1';
          if (filled) {
            var word = blanks[idx];
            if (word) {
              blanks[idx] = null;
              state.practiceSelectedBlank = null;
              render();
            }
          } else {
            state.practiceSelectedBlank = state.practiceSelectedBlank === idx ? null : idx;
            render();
          }
        };
      });
      section.querySelectorAll('.practice-card').forEach(function (btn) {
        btn.onclick = function () {
          var word = btn.getAttribute('data-word');
          if (selectedBlank !== null && selectedBlank !== undefined) {
            blanks[selectedBlank] = word;
            state.practiceSelectedBlank = null;
            render();
          }
        };
      });
      section.querySelector('[data-action="practice-submit"]').onclick = function () {
        state.practiceUserAnswers = blanks.slice();
        state.practiceResults = blanks.map(function (a, idx) { return a === PRACTICE.answers[idx]; });
        state.practiceSubmitted = true;
        speakTerm(getPracticeFullSentence(PRACTICE.answers));
        render();
      };
    } else {
      section.querySelector('[data-action="practice-speak"]').onclick = function () {
        speakTerm(getPracticeFullSentence(PRACTICE.answers));
      };
      section.querySelector('[data-action="practice-done"]').onclick = function () {
        state.phase = 'review';
        state.reviewOptions = buildReviewOptions();
        state.reviewIndex = 0;
        state.reviewRevealed = {};
        state.reviewChoice = null;
        state.practiceSubmitted = false;
        state.practiceResults = null;
        state.practiceUserAnswers = null;
        state.practiceBlanks = null;
        state.practiceSelectedBlank = null;
        render();
      };
    }
    return section;
  }

  function renderReview() {
    var opts = state.reviewOptions;
    if (!opts || state.reviewIndex >= opts.length) {
      state.phase = 'summary';
      state.reviewOptions = null;
      state.reviewIndex = 0;
      state.reviewRevealed = {};
      state.reviewChoice = null;
      return render();
    }
    var r = opts[state.reviewIndex];
    var item = r.item;
    var totalReview = opts.length;
    var idx = state.reviewIndex;
    var isRevealed = state.reviewRevealed[idx] === true;
    var selected = state.reviewChoice;
    var hasFeedback = selected !== null && selected !== undefined;

    var imgHtml = '';
    if (item.image) {
      imgHtml = '<div class="review-image-wrap ' + (isRevealed ? 'review-image-revealed' : 'review-image-blocked') + '" data-review-reveal="' + idx + '" title="' + (isRevealed ? '' : '点击显示图片') + '">' +
        (isRevealed
          ? '<img src="' + escapeHtml(item.image) + '" alt=""/>'
          : '<span class="review-image-placeholder"><span class="material-symbols-outlined">image</span><span>点击显示图片</span></span>') +
        '</div>';
    } else {
      imgHtml = '<div class="review-image-wrap review-image-empty"><span class="material-symbols-outlined">image</span><span>暂无图片</span></div>';
    }

    var optionsHtml = r.options.map(function (opt, i) {
      var cls = 'option-btn review-option-btn';
      if (hasFeedback) {
        if (i === r.correctIndex) cls += ' option-correct';
        else if (i === selected) cls += ' option-wrong';
      }
      return '<button type="button" class="' + cls + '" data-index="' + i + '"' + (hasFeedback ? ' disabled' : '') + '>' +
        '<span class="option-letter">' + LETTERS[i] + '</span>' +
        '<span class="option-text">' + escapeHtml(opt) + '</span>' +
      '</button>';
    }).join('');

    var feedbackHtml = '';
    if (hasFeedback) {
      var isCorrect = selected === r.correctIndex;
      if (isCorrect) {
        feedbackHtml = '<div class="review-feedback review-feedback-correct"><span class="material-symbols-outlined">check_circle</span> 回答正确！</div>';
      } else {
        feedbackHtml = '<div class="review-feedback review-feedback-wrong"><span class="material-symbols-outlined">cancel</span> 回答错误。</div>';
      }
    }

    var zhSentence = item.exampleZh || '';
    var candidates = getReviewHighlightCandidates(item);
    var meaningHtml = escapeHtml(zhSentence);
    // 按长度从长到短试，优先标红最长匹配，避免短词把长词拆开
    candidates.sort(function (a, b) { return b.length - a.length; });
    for (var c = 0; c < candidates.length; c++) {
      var phrase = candidates[c];
      if (!phrase) continue;
      var safePhrase = escapeHtml(phrase);
      if (meaningHtml.indexOf(safePhrase) !== -1) {
        meaningHtml = meaningHtml.replace(safePhrase, '<span class="review-meaning-gloss">' + safePhrase + '</span>');
        break;
      }
    }

    var section = document.createElement('div');
    section.className = 'app-main review-page';
    section.innerHTML =
      '<div class="review-header">' +
        '<h2 class="review-title">真题复现</h2>' +
        '<p class="review-desc">结合句子语境，选出标红中文的英语释义</p>' +
      '</div>' +
      '<div class="review-body">' +
        imgHtml +
        '<p class="review-meaning">' + meaningHtml + '</p>' +
        '<div class="review-options">' + optionsHtml + '</div>' +
        feedbackHtml +
      '</div>' +
      '<div class="review-actions">' +
        '<span class="review-step">' + (idx + 1) + ' / ' + totalReview + '</span>' +
        (hasFeedback
          ? '<button type="button" class="btn btn-primary" data-action="review-next">' +
              (idx + 1 >= totalReview ? '完成' : '下一题') +
              '<span class="material-symbols-outlined">arrow_forward</span></button>'
          : '') +
      '</div>';
    section.querySelectorAll('[data-review-reveal]').forEach(function (el) {
      el.onclick = function () {
        var i = parseInt(el.getAttribute('data-review-reveal'), 10);
        state.reviewRevealed[i] = true;
        render();
      };
    });
    if (!hasFeedback) {
      section.querySelectorAll('.review-option-btn').forEach(function (btn) {
        btn.onclick = function () {
          state.reviewChoice = parseInt(btn.getAttribute('data-index'), 10);
          render();
        };
      });
    } else {
      section.querySelector('[data-action="review-next"]').onclick = function () {
        state.reviewIndex++;
        state.reviewChoice = null;
        if (state.reviewIndex >= opts.length) {
          state.phase = 'summary';
          state.reviewOptions = null;
          state.reviewIndex = 0;
          state.reviewRevealed = {};
        }
        render();
      };
    }
    return section;
  }

  function renderSummary() {
    var section = document.createElement('div');
    section.className = 'app-main';
    section.innerHTML =
      '<div class="summary-page">' +
        '<h1 class="summary-title">学习完成</h1>' +
        '<p class="summary-desc">你已完成本单元「AI, Technology, and China\'s Development」的单词与词组学习。</p>' +
        '<p class="summary-desc summary-chain">innovation → transformative innovation → responsible innovation → inclusive innovation → technology → transformative technology → responsible technology → inclusive technology → development → transformative development → responsible development → inclusive development → application → transformative application → responsible application → inclusive application</p>' +
        '<button type="button" class="btn btn-primary" data-action="restart">重新学习</button>' +
      '</div>';
    section.querySelector('[data-action="restart"]').onclick = function () {
      state.phase = 'preview';
      state.chainIndex = 0;
      state.userChoice = null;
      state.showHint = false;
      state.autoPlayed = {};
      state.practiceSubmitted = false;
      state.practiceResults = null;
      state.practiceUserAnswers = null;
      state.practiceBlanks = null;
      state.practiceSelectedBlank = null;
      state.reviewIndex = 0;
      state.reviewRevealed = {};
      state.reviewChoice = null;
      state.reviewOptions = null;
      render();
    };
    return section;
  }

  function render() {
    root.innerHTML = '';
    var app = document.createElement('div');
    app.className = 'app';
    app.appendChild(renderProgress());
    if (state.phase === 'preview') {
      app.appendChild(renderPreview());
    } else if (state.phase === 'question') {
      app.appendChild(renderQuestion());
      var q = getCurrentQuestion();
      if (q && q.term && !state.autoPlayed[state.chainIndex]) {
        speakTerm(q.term);
        state.autoPlayed[state.chainIndex] = true;
      }
    } else if (state.phase === 'wiki') {
      app.appendChild(renderWiki());
    } else if (state.phase === 'practice') {
      app.appendChild(renderPractice());
    } else if (state.phase === 'review') {
      app.appendChild(renderReview());
    } else if (state.phase === 'summary') {
      app.appendChild(renderSummary());
    }
    root.appendChild(app);
  }

  render();
})();
