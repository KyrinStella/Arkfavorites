dataSetVersion = "2024-04-24"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
   {
    name: "按稀有度筛选",
    key: "rarity",
    tooltip: "如果您只想选择特定稀有度的角色进行测试，请勾选此项。",
    checked: false,
    sub: [ { name: "★1", key: "st1" }, { name: "★2", key: "st2" }, { name: "★3", key: "st3" }, { name: "★4", key: "st4" }, { name: "★5", key: "st5" }, { name: "★6", key: "st6" }
    ]
  },
   {
    name: "按性别筛选",
    key: "gender",
    tooltip: "如果您只想选择特定性别的角色进行测试，请勾选此项。",
    checked: false,
    sub: [ { name: "男", key: "M" }, { name: "女", key: "F" }, { name: "其他", tooltip: "The characters whose gender is unknown or uncertain", key: "EX" }
    ]
  },
 {
    name: "按职业筛选",
    key: "job",
    tooltip: "如果您只想选择特定职业的角色进行测试，请勾选此项。",
    checked: false,
    sub: [
      { name: "先锋", key: "xf" },
      { name: "近卫", key: "jw" },
      { name: "重装", key: "zz" },
      { name: "狙击", key: "jj" },
      { name: "术师", key: "ss" },
      { name: "医疗", key: "yl" },
      { name: "辅助", key: "fz" },
      { name: "特种", key: "tz" },
    ]
  },
   {
    name: "按势力筛选",
    key: "faction",
    tooltip: "如果您只想选择特定势力的角色进行测试，请勾选此项。",
    checked: false,
    sub: [
      { name: "S.W.E.E.P.", key: "sweep" },
      { name: "阿戈尔", key: "agr" },
      { name: "巴别塔", key: "bbt" },
      { name: "玻利瓦尔", key: "blwr" },
      { name: "彩虹小队", key: "chxd" },
      { name: "东国", key: "dg" },
      { name: "哥伦比亚", key: "glby" },
      { name: "格拉斯哥帮", key: "glsgb" },
      { name: "黑钢国际", key: "hggj" },
      { name: "红松骑士团", key: "hsqst" },
      { name: "贾维团伙", key: "jwth" },
      { name: "喀兰贸易", key: "klmy" },
      { name: "卡西米尔", key: "kxmr" },
      { name: "拉特兰", key: "ltl" },
      { name: "莱塔尼亚", key: "ltny" },
      { name: "莱茵生命", key: "lysm" },
      { name: "雷姆必拓", key: "lmbt" },
      { name: "鲤氏侦探事务所", key: "lsztsws" },
      { name: "龙门近卫局", key: "lmjwj" },
      { name: "罗德岛", key: "ldd" },
      { name: "罗德岛-精英干员", key: "jygy" },
      { name: "米诺斯", key: "mns" },
      { name: "企鹅物流", key: "qewl" },
      { name: "萨尔贡", key: "srg" },
      { name: "萨米", key: "sm" },
      { name: "深池", key: "sc" },
      { name: "深海猎人", key: "shlr" },
      { name: "使徒", key: "st" },
      { name: "维多利亚", key: "wdly" },
      { name: "乌萨斯", key: "wss" },
      { name: "乌萨斯学生自治团", key: "wssxszzt" },
      { name: "汐斯塔", key: "xst" },
      { name: "谢拉格", key: "xlge" },
      { name: "行动预备组A1", key: "ybza1" },
      { name: "行动预备组A4", key: "ybza4" },
      { name: "行动预备组A6", key: "ybza6" },
      { name: "行动组A4", key: "xdza4" },
      { name: "叙拉古", key: "xlgu" },
      { name: "炎国", key: "yan" },
      { name: "炎国-龙门", key: "lm" },
      { name: "炎国-岁", key: "sui" },
      { name: "伊比利亚", key: "ybly" },
    ]
  },
   {
    name: "按出身地筛选",
    key: "place",
    tooltip: "如果您只想选择特定出身地的角色进行测试，请勾选此项。",
    checked: false,
    sub: [
      { name: "阿戈尔", key: "agr" },
      { name: "玻利瓦尔", key: "blwr" },
      { name: "东国", key: "dg" },
      { name: "哥伦比亚", key: "glby" },
      { name: "卡西米尔", key: "kxmr" },
      { name: "卡兹戴尔", key: "kzdr" },
      { name: "拉特兰", key: "ltl" },
      { name: "莱塔尼亚", key: "ltny" },
      { name: "雷姆必拓", key: "lmbt" },
      { name: "龙门", key: "lm" },
      { name: "罗德岛", key: "ldd" },
      { name: "萨尔贡", key: "srg" },
      { name: "萨米", key: "sm" },
      { name: "瓦伊凡", key: "wyf" },
      { name: "维多利亚", key: "wdly" },
      { name: "乌萨斯", key: "wss" },
      { name: "汐斯塔", key: "xst" },
      { name: "谢拉格", key: "xlge" },
      { name: "叙拉古", key: "xlgu" },
      { name: "炎国", key: "yan" },
      { name: "伊比利亚", key: "ybly" },
	  { name: "杜林", key: "dl" },
	  { name: "未知/其他", key: "unk" },
    ]
  },
   {
    name: "按种族筛选",
    key: "race",
    tooltip: "如果您只想选择特定种族的角色进行测试，请勾选此项。",
    checked: false,
    sub: [
      { name: "阿达克利斯", key: "adkls" },
      { name: "阿戈尔", key: "agr" },
      { name: "阿纳萨", key: "ans" },
      { name: "阿纳缇", key: "ant" },
      { name: "阿斯兰", key: "asl" },
      { name: "埃拉菲亚", key: "alfy" },
      { name: "安努拉", key: "anl" },
      { name: "德拉克", key: "dlk" },
      { name: "杜林", key: "dl" },
      { name: "菲林", key: "fl" },
      { name: "斐迪亚", key: "fdy" },
      { name: "丰蹄", key: "ft" },
      { name: "鬼", key: "gui" },
      { name: "海嗣", key: "hs" },
      { name: "机械", key: "jx" },
      { name: "精灵", key: "jl" },
      { name: "巨兽", key: "js" },
      { name: "卡普里尼", key: "kpln" },
      { name: "卡特斯", key: "kts" },
      { name: "库兰塔", key: "klt" },
      { name: "黎博利", key: "lbl" },
      { name: "龙", key: "lung" },
      { name: "鲁珀", key: "lp" },
      { name: "曼提柯", key: "mtk" },
      { name: "佩洛", key: "pl" },
      { name: "皮洛萨", key: "pls" },
      { name: "匹特拉姆", key: "ptlm" },
      { name: "奇美拉", key: "qml" },
      { name: "麒麟", key: "ql" },
      { name: "人类", key: "rl" },
      { name: "瑞柏巴", key: "rbb" },
      { name: "萨弗拉", key: "sfl" },
      { name: "萨科塔", key: "skt" },
      { name: "塞拉托", key: "slt" },
      { name: "瓦伊凡", key: "wyf" },
      { name: "沃尔珀", key: "wrp" },
      { name: "乌萨斯", key: "wss" },
      { name: "依特拉", key: "ytl" },
      { name: "札拉克", key: "zlk" },
      { name: "未知/未公开", key: "unk" },
    ]
  },
  {
    name: "排除异格角色",
    key: "alter",
    tooltip: "如果您不想让异格角色参与进测试中，请勾选此项。",
	checked: true
  },
  {
    name: "排除非人类角色",
    key: "nonhuman",
    tooltip: "如果您不想让非人类角色(如支援机械、艾露猫等)参与进测试中，请勾选此项。",
    checked: true
  },
  {
    name: "排除NPC角色和未实装干员(当前版本测试尚未加入)",
    key: "npc",
    tooltip: "如果您不想让NPC角色和未实装干员参与进测试中，请勾选此项。",
    checked: true
  },
  {
    name: "排除联动角色",
    key: "collab",
    tooltip: "如果您不想让联动角色参与进测试中，请勾选此项。",
	checked: false
  },
  {
    name: "排除兽人角色",
    key: "furry",
    tooltip: "如果您不想让兽人角色(如山、槐琥等)参与进测试中，请勾选此项。",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "阿斯卡纶",
    img: "Ascalon.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["ldd", "sweep"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "阿罗玛",
    img: "Aroma.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "奥达",
    img: "Odda.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["fz"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "露托",
    img: "Lutonada.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["zz"],
      faction: ["blwr"],
      place: ["blwr"],
      race: ["zlk"]
    }
  },
  {
    name: "艾拉",
    img: "Ela.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "医生",
    img: "Doc.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "双月",
    img: "Iana.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "导火索",
    img: "Fuze.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "红隼",
    img: "Kestrel.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["srg"],
      place: ["srg"],
      race: ["lbl"]
    }
  },
  {
    name: "黍",
    img: "Shu.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["yan", "sui"],
      place: ["yan"],
      race: ["unk", "js"]
    }
  },
  {
    name: "左乐",
    img: "Zuo_Le.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["yan"],
      place: ["yan"],
      race: ["fdy"]
    }
  },
  {
    name: "小满",
    img: "Grain_Buds.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["yan"],
      place: ["yan"],
      race: ["lbl"]
    }
  },
  {
    name: "万顷",
    img: "Wanqing.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["xf"],
      faction: ["yan"],
      place: ["yan"],
      race: ["ft"]
    }
  },
  {
    name: "莱伊",
    img: "Ray.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "温米",
    img: "Warmy.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "锏",
    img: "Degenbrecher.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["klmy"],
      place: ["ltny"],
      race: ["kpln"]
    }
  },
  {
    name: "烈夏",
    img: "Leto.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["wssxszzt"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "哈洛德",
    img: "Harold.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["yl"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "塑心",
    img: "Virtuosa.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "薇薇安娜",
    img: "Viviana.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["alfy"]
    }
  },
  {
    name: "止颂",
    img: "Lessing.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["kpln"]
    }
  },
  {
    name: "深律",
    img: "Bassline.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["zz"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["lp"]
    }
  },
  {
    name: "折光",
    img: "Diamante.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["ss"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["kpln"]
    }
  },
  {
    name: "跃跃",
    img: "Caper.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["blwr"],
      place: ["blwr"],
      race: ["kts"]
    }
  },
  {
    name: "赫德雷",
    img: "Hoederer.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "刺玫",
    img: "Vendela.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "戴菲恩",
    img: "Delphine.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "维荻",
    img: "Verdant.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["tz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fdy"]
    }
  },
  {
    name: "涤火杰西卡",
    img: "Jessica_the_Liberated.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["glby", "hggj"],
      place: ["wdly"],
      race: ["fl"],
      alter: true
    }
  },
  {
    name: "杏仁",
    img: "Almond.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["glby", "hggj"],
      place: ["glby"],
      race: ["pl"]
    }
  },
  {
    name: "冰酿",
    img: "Coldshot.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["glby"],
      place: ["glby"],
      race: ["alfy"]
    }
  },
  {
    name: "纯烬艾雅法拉",
    img: "Eyjafjalla_the_Hvit_Aska.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["kpln"],
      alter: true
    }
  },
  {
    name: "琳琅诗怀雅",
    img: "Swire_the_Elegant_Wit.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm"],
      place: ["lm"],
      race: ["fl"],
      alter: true
    }
  },
  {
    name: "青枳",
    img: "Poncirus.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["glby", "xst"],
      place: ["xst"],
      race: ["lbl"]
    }
  },
  {
    name: "苍苔",
    img: "Bryophyta.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["glby", "xst"],
      place: ["xst"],
      race: ["lbl"]
    }
  },
  {
    name: "凛视",
    img: "Valarqvin.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["sm"],
      place: ["sm"],
      race: ["skz"]
    }
  },
  {
    name: "提丰",
    img: "Typhon.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["sm"],
      place: ["sm"],
      race: ["skz"]
    }
  },
  {
    name: "寒檀",
    img: "Santalla.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["sm"],
      place: ["sm"],
      race: ["fl"]
    }
  },
  {
    name: "圣约送葬人",
    img: "Executor_the_Ex_Foedere.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"],
      alter: true
    }
  },
  {
    name: "空构",
    img: "Spuria.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "隐现",
    img: "Insider.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jj"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "Friston-3",
    img: "Friston-3.png",
    opts: {
      rarity: ["st1"],
      gender: ["M"],
      job: ["zz"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["jx"],
      nonhuman: true
    }
  },
  {
    name: "缪尔赛思",
    img: "Muelsyse.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["glby", "lysm"],
      place: ["unk"],
      race: ["jl"]
    }
  },
  {
    name: "霍尔海雅",
    img: "Hoolheyak.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["glby"],
      place: ["glby"],
      race: ["unk", "lbl", "fdy"]
    }
  },
  {
    name: "淬羽赫默",
    img: "Silence_the_Paradigmatic.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["lbl"],
      alter: true
    }
  },
  {
    name: "玫拉",
    img: "Melanite.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["glby"],
      place: ["glby"],
      race: ["fdy"]
    }
  },
  {
    name: "伊内丝",
    img: "Ines.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["unk", "kpln"]
    }
  },
  {
    name: "洋灰",
    img: "Cement.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["zlk"]
    }
  },
  {
    name: "摩根",
    img: "Morgan.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["wdly", "glsgb"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "休谟斯",
    img: "Humus.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["glby"],
      race: ["ft"]
    }
  },
  {
    name: "U-Official<br>(尤里卡)",
    img: "U-Official.png",
    opts: {
      rarity: ["st1"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["zlk"]
    }
  },
  {
    name: "麒麟R夜刀",
    img: "Kirin_R_Yato.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["ldd", "xdza4"],
      place: ["dg"],
      race: ["gui"],
      alter: true,
      collab: true
    }
  },
  {
    name: "火龙S黑角",
    img: "Rathalos_S_Noir_Corne.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ldd", "xdza4"],
      place: ["dg"],
      race: ["gui"],
      alter: true,
      collab: true
    }
  },
  {
    name: "泰拉大陆调查团",
    img: "Terra_Research_Commission.png",
    opts: {
      rarity: ["st1"],
      gender: ["EX"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["unk"],
      collab: true,
      nonhuman: true
    }
  },
  {
    name: "仇白",
    img: "Qiubai.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["yan"],
      place: ["yan"],
      race: ["alfy"]
    }
  },
  {
    name: "铎铃",
    img: "Wind_Chimes.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["yan"],
      place: ["yan"],
      race: ["ft"]
    }
  },
  {
    name: "重岳",
    img: "Chongyue.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["yan", "sui"],
      place: ["yan"],
      race: ["unk", "js"]
    }
  },
  {
    name: "林",
    img: "Lin.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["lm"],
      place: ["lm"],
      race: ["zlk"]
    }
  },
  {
    name: "火哨",
    img: "Firewhistle.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["lbl"]
    }
  },
  {
    name: "截云",
    img: "Jieyun.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["yan"],
      place: ["yan"],
      race: ["ans"]
    }
  },
  {
    name: "缄默德克萨斯",
    img: "Reed_The_Flame_Shadow.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["yl"],
      faction: ["wdly", "sc"],
      place: ["wdly"],
      race: ["dlk"],
      alter: true
    }
  },
  {
    name: "和弦",
    img: "Harmonie.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly", "sc"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "谜图",
    img: "Puzzle.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["xf"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["wyf"]
    }
  },
  {
    name: "缄默德克萨斯",
    img: "Texas_the_Omertosa.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm", "qewl"],
      place: ["glby"],
      race: ["lp"],
      alter: true
    }
  },
  {
    name: "斥罪",
    img: "Penance.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "伺夜",
    img: "Vigil.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["xf"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "子月",
    img: "Lunacub.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "雪绒",
    img: "Qanipalaat.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["ss"],
      faction: ["sm"],
      place: ["sm"],
      race: ["wrp"]
    }
  },
  {
    name: "石英",
    img: "Quartz.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["glby"],
      place: ["glby"],
      race: ["lp"]
    }
  },
  {
    name: "白铁",
    img: "Stainless.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["fz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "明椒",
    img: "Paprika.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["glby"],
      race: ["skz"]
    }
  },
  {
    name: "达格达",
    img: "Dagda.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["wdly", "glsgb"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "铅踝",
    img: "Totter.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["jj"],
      faction: ["srg"],
      place: ["srg"],
      race: ["lbl"]
    }
  },
  {
    name: "海沫",
    img: "Highmore.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ybly"],
      place: ["ybly"],
      race: ["agr"]
    }
  },
  {
    name: "罗小黑",
    img: "Luo_Xiaohei.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["jw"],
      faction: ["yan"],
      place: ["unk"],
      race: ["fl"],
      collab: true,
      nonhuman: true
    }
  },
  {
    name: "玛恩纳",
    img: "Mlynar.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "但书",
    img: "Proviso.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "百炼嘉维尔",
    img: "Gavial_the_Invincible.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["srg"],
      race: ["adkls"],
      alter: true
    }
  },
  {
    name: "鸿雪",
    img: "Pozemka.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["wss"],
      race: ["lp"]
    }
  },
  {
    name: "晓歌",
    img: "Cantabile.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ldd"],
      place: ["blwr"],
      race: ["lbl"]
    }
  },
  {
    name: "至简",
    img: "Minimalist.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["ss"],
      faction: ["srg"],
      place: ["dl"],
      race: ["dl"]
    }
  },
  {
    name: "多萝西",
    img: "Dorothy.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["zlk"]
    }
  },
  {
    name: "承曦格雷伊",
    img: "Greyy_the_Lightningbearer.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["blwr"],
      race: ["pl"],
      alter: true
    }
  },
  {
    name: "星源",
    img: "Astgenne.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "黑键",
    img: "Ebenholz.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["ss"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["kpln"]
    }
  },
  {
    name: "濯尘芙蓉",
    img: "Hibiscus_the_Purifier.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["wdly"],
      race: ["skz"],
      alter: true
    }
  },
  {
    name: "车尔尼",
    img: "Czerny.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["zz"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["alfy"]
    }
  },
  {
    name: "埃拉托",
    img: "Erato.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["mns"],
      place: ["mns"],
      race: ["lbl"]
    }
  },
  {
    name: "归溟幽灵鲨",
    img: "Specter_the_Unchained.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["agr", "shlr"],
      place: ["agr"],
      race: ["agr"],
      alter: true
    }
  },
  {
    name: "艾丽妮",
    img: "Irene.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ybly"],
      place: ["ybly"],
      race: ["lbl"]
    }
  },
  {
    name: "流明",
    img: "Lumen.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["yl"],
      faction: ["ybly"],
      place: ["ybly"],
      race: ["agr"]
    }
  },
  {
    name: "掠风",
    img: "Windflit.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["fz"],
      faction: ["glby"],
      place: ["glby"],
      race: ["pl"]
    }
  },
  {
    name: "号角",
    img: "Horn.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["lp"]
    }
  },
  {
    name: "洛洛",
    img: "Rockrock.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "海蒂",
    img: "Heidi.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "褐果",
    img: "Chestnut.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["dl"]
    }
  },
  {
    name: "菲亚梅塔",
    img: "Fiammetta.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["lbl"]
    }
  },
  {
    name: "风丸",
    img: "Kazemaru.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["dg"],
      place: ["dg"],
      race: ["fl"]
    }
  },
  {
    name: "见行者",
    img: "Enforcer.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["tz"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "澄闪",
    img: "Goldenglow.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "夏栎",
    img: "Quercus.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ldd"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "令",
    img: "Ling.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["yan", "sui"],
      place: ["yan"],
      race: ["unk", "js"]
    }
  },
  {
    name: "老鲤",
    img: "Lee.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["tz"],
      faction: ["lm", "lsztsws"],
      place: ["yan"],
      race: ["lung"]
    }
  },
  {
    name: "夜半",
    img: "Blacknight.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["sfl"]
    }
  },
  {
    name: "寒芒克洛丝",
    img: "Kroos_the_Keen_Glint.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["lmbt"],
      race: ["kts"],
      alter: true,
    }
  },
  {
    name: "九色鹿",
    img: "Nine-Colored_Deer.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["yan"],
      place: ["yan"],
      race: ["alfy"],
      collab: true,
    }
  },
  {
    name: "暮落",
    img: "Shalem.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["zz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fdy"]
    }
  },
  {
    name: "灵知",
    img: "Gnosis.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["fz"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["lbl"]
    }
  },
  {
    name: "极光",
    img: "Aurora.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["wss"]
    }
  },
  {
    name: "耶拉",
    img: "Kjera.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["unk", "js"]
    }
  },
  {
    name: "耀骑士临光",
    img: "Nearl_the_Radiant_Knight.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"],
      alter: true
    }
  },
  {
    name: "焰尾",
    img: "Flametail.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["kxmr", "hsqst"],
      place: ["kxmr"],
      race: ["zlk"]
    }
  },
  {
    name: "蚀清",
    img: "Corroserum.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["ss"],
      faction: ["glby"],
      place: ["glby"],
      race: ["fdy"]
    }
  },
  {
    name: "野鬃",
    img: "Wild_Mane.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["kxmr", "hsqst"],
      place: ["kxmr"],
      race: ["fdy"]
    }
  },
  {
    name: "蜜莓",
    img: "Honeyberry.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["zlk"]
    }
  },
  {
    name: "布丁",
    img: "Pudding.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["ss"],
      faction: ["glby"],
      place: ["glby"],
      race: ["agr"]
    }
  },
  {
    name: "正义骑士号",
    img: "Justice_Knight.png",
    opts: {
      rarity: ["st1"],
      gender: ["F"],
      job: ["jj"],
      faction: ["kxmr", "hsqst"],
      place: ["unk"],
      race: ["jx"],
      nonhuman: true
    }
  },
  {
    name: "远牙",
    img: "Fartooth.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["kxmr", "hsqst"],
      place: ["kxmr"],
      race: ["lbl"]
    }
  },
  {
    name: "灰毫",
    img: "Ashlock.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["kxmr", "hsqst"],
      place: ["kxmr"],
      race: ["zlk"]
    }
  },
  {
    name: "琴柳",
    img: "Saileach.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["wyf"]
    }
  },
  {
    name: "桑葚",
    img: "Mulberry.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["yan"],
      place: ["yan"],
      race: ["lbl"]
    }
  },
  {
    name: "罗比菈塔",
    img: "Roberta.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["fz"],
      faction: ["glby"],
      place: ["glby"],
      race: ["ant"]
    }
  },
  {
    name: "假日威龙陈",
    img: "Chen_the_Holungday.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["lm"],
      race: ["lung"],
      alter: true
    }
  },
  {
    name: "水月",
    img: "Mizuki.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["tz"],
      faction: ["dg"],
      place: ["dg"],
      race: ["agr"]
    }
  },
  {
    name: "羽毛笔",
    img: "La_Pluma.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["blwr"],
      place: ["blwr"],
      race: ["lbl"]
    }
  },
  {
    name: "龙舌兰",
    img: "Tequila.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["blwr"],
      place: ["blwr"],
      race: ["pl"]
    }
  },
  {
    name: "帕拉斯",
    img: "Pallas.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["mns"],
      place: ["mns"],
      race: ["ft"]
    }
  },
  {
    name: "卡涅利安",
    img: "Carnelian.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ltny"],
      place: ["srg"],
      race: ["kpln"]
    }
  },
  {
    name: "绮良",
    img: "Kirara.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["dg"],
      place: ["dg"],
      race: ["agr"]
    }
  },
  {
    name: "贝娜",
    img: "Bena.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["kpln"]
    }
  },
  {
    name: "深靛",
    img: "Indigo.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ybly"],
      place: ["ybly"],
      race: ["fdy"]
    }
  },
  {
    name: "浊心斯卡蒂",
    img: "Skadi_the_Corrupting_Heart.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["agr"],
      place: ["agr"],
      race: ["unk", "hs"],
      alter: true
    }
  },
  {
    name: "凯尔希",
    img: "Kaltsit.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["ldd"],
      race: ["fl"]
    }
  },
  {
    name: "歌蕾蒂娅",
    img: "Gladiia.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["agr", "shlr"],
      place: ["agr"],
      race: ["unk", "agr"]
    }
  },
  {
    name: "赤冬",
    img: "Akafuyu.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["dg"],
      place: ["dg"],
      race: ["agr"]
    }
  },
  {
    name: "异客",
    img: "Passenger.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["ss"],
      faction: ["srg"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "熔泉",
    img: "Toddifons.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["wyf"]
    }
  },
  {
    name: "暴雨",
    img: "Heavyrain.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["ldd"],
      place: ["srg"],
      race: ["klt"]
    }
  },
  {
    name: "灰烬",
    img: "Ash.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "霜华",
    img: "Frost.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "闪击",
    img: "Blitz.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["zz"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "战车",
    img: "Tachanka.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["chxd"],
      place: ["unk"],
      race: ["unk", "rl"],
      collab: true
    }
  },
  {
    name: "夕",
    img: "Dusk.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["yan", "sui"],
      place: ["yan"],
      race: ["unk", "js"]
    }
  },
  {
    name: "嵯峨",
    img: "Saga.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["dg"],
      place: ["dg"],
      race: ["pl"]
    }
  },
  {
    name: "乌有",
    img: "Mr.Nothing.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["tz"],
      faction: ["yan"],
      place: ["yan"],
      race: ["lbl"]
    }
  },
  {
    name: "炎狱炎熔",
    img: "Lava_the_Purgatory.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ldd"],
      place: ["wdly"],
      race: ["skz"],
      alter: true
    }
  },
  {
    name: "图耶",
    img: "Tuye.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["srg"],
      place: ["srg"],
      race: ["ft"]
    }
  },
  {
    name: "空弦",
    img: "Archetto.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["lbl"]
    }
  },
  {
    name: "爱丽丝",
    img: "Iris.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "豆苗",
    img: "Beanstalk.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["xf"],
      faction: ["glby"],
      place: ["glby"],
      race: ["rbb"]
    }
  },
  {
    name: "山",
    img: "Mountain.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["glby"],
      place: ["glby"],
      race: ["fl"],
      furry: true
    }
  },
  {
    name: "卡夫卡",
    img: "Kafka.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["glby"],
      place: ["glby"],
      race: ["lbl"],
      furry: true
    }
  },
  {
    name: "罗宾",
    img: "Robin.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["glby"],
      place: ["glby"],
      race: ["ant"]
    }
  },
  {
    name: "松果",
    img: "Pinecone.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["glby"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "阿米娅",
    img: "Amiya.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss", "jw"],
      faction: ["ldd"],
      place: ["lmbt"],
      race: ["kts", "qml"]
    }
  },
  {
    name: "迷迭香",
    img: "Rosmontis.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd", "jygy"],
      place: ["glby"],
      race: ["fl"]
    }
  },
  {
    name: "泥岩",
    img: "Mudrock.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "絮雨",
    img: "Whisperain.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ybly"],
      place: ["ybly"],
      race: ["agr"]
    }
  },
  {
    name: "杰克",
    img: "Jackie.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["glby"],
      place: ["glby"],
      race: ["pl"]
    }
  },
  {
    name: "瑕光",
    img: "Blemishine.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "奥斯塔",
    img: "Aosta.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jj"],
      faction: ["xlgu", "jwth"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "鞭刃",
    img: "Whislash.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "泡泡",
    img: "Bubble.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["zz"],
      faction: ["srg"],
      place: ["srg"],
      race: ["slt"]
    }
  },
  {
    name: "史尔特尔",
    img: "Surtr.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["skz"]
    }
  },
  {
    name: "四月",
    img: "April.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "薄绿",
    img: "Mint.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "芳汀",
    img: "Arene.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "森蚺",
    img: "Eunectes.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["srg"],
      place: ["srg"],
      race: ["fdy"]
    }
  },
  {
    name: "燧石",
    img: "Flint.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["srg"],
      place: ["srg"],
      race: ["lbl"]
    }
  },
  {
    name: "特米米",
    img: "Tomimi.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["srg"],
      place: ["srg"],
      race: ["adkls"]
    }
  },
  {
    name: "酸糖",
    img: "Aciddrop.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["glby"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "棘刺",
    img: "Thorns.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ybly"],
      place: ["ybly"],
      race: ["agr"]
    }
  },
  {
    name: "安哲拉",
    img: "Andreana.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["agr", "shlr"],
      place: ["ybly"],
      race: ["agr"]
    }
  },
  {
    name: "孑",
    img: "Jaye.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["tz"],
      faction: ["lm"],
      place: ["lm"],
      race: ["wss"]
    }
  },
  {
    name: "贾维",
    img: "Chiave.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["xf"],
      faction: ["xlgu", "jwth"],
      place: ["xlgu"],
      race: ["wrp"]
    }
  },
  {
    name: "蜜蜡",
    img: "Beeswax.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["srg"],
      place: ["srg"],
      race: ["pls"]
    }
  },
  {
    name: "铃兰",
    img: "Suzuran.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["xlgu"],
      place: ["dg"],
      race: ["wrp"]
    }
  },
  {
    name: "断崖",
    img: "Ayerscarpe.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "亚叶",
    img: "Folinic.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["wss"],
      race: ["fl"]
    }
  },
  {
    name: "卡达",
    img: "Click.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["zlk"]
    }
  },
  {
    name: "早露",
    img: "Rosa.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["wss", "wssxszzt"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "苦艾",
    img: "Absinthe.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wss"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "波登可",
    img: "Podenco.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ldd"],
      place: ["blwr"],
      race: ["pl"]
    }
  },
  {
    name: "月禾",
    img: "Tsukinogi.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["dg"],
      place: ["dg"],
      race: ["alfy"]
    }
  },
  {
    name: "石棉",
    img: "Asbestos.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["sfl"]
    }
  },
  {
    name: "W",
    img: "W.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["bbt"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "温蒂",
    img: "Weedy.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["tz"],
      faction: ["ldd"],
      place: ["ybly"],
      race: ["agr"]
    }
  },
  {
    name: "极境",
    img: "Elysium.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["xf"],
      faction: ["ldd"],
      place: ["ybly"],
      race: ["lbl"]
    }
  },
  {
    name: "THRM-EX",
    img: "THRM-EX.png",
    opts: {
      rarity: ["st1"],
      gender: ["M"],
      job: ["tz"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["jx"],
      nonhuman: true
    }
  },
  {
    name: "傀影",
    img: "Phantom.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["tz"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "巫恋",
    img: "Shamare.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["wrp"]
    }
  },
  {
    name: "铸铁",
    img: "Sideroca.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["mns"],
      place: ["mns"],
      race: ["ft"]
    }
  },
  {
    name: "刻刀",
    img: "Cutter.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["glby"],
      place: ["glby"],
      race: ["wrp"]
    }
  },
  {
    name: "断罪者",
    img: "Conviction.png",
    opts: {
      rarity: ["st4"],
      gender: ["EX"],
      job: ["jw"],
      faction: ["mns"],
      place: ["mns"],
      race: ["unk", "lbl"]
    }
  },
  {
    name: "风笛",
    img: "Bagpipe.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["wyf"]
    }
  },
  {
    name: "慑砂",
    img: "Sesa.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jj"],
      faction: ["srg"],
      place: ["srg"],
      race: ["wyf"]
    }
  },
  {
    name: "柏喙",
    img: "Bibeak.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["sm"],
      place: ["sm"],
      race: ["lbl"]
    }
  },
  {
    name: "宴",
    img: "Utage.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["dg"],
      place: ["dg"],
      race: ["unk"]
    }
  },
  {
    name: "清流",
    img: "Purestream.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["yl"],
      faction: ["yan"],
      place: ["yan"],
      race: ["agr"]
    }
  },
  {
    name: "刻俄柏",
    img: "Ceobe.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ldd"],
      place: ["blwr"],
      race: ["pl"]
    }
  },
  {
    name: "惊蛰",
    img: "Leizi.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["yan"],
      place: ["yan"],
      race: ["ql"]
    }
  },
  {
    name: "年",
    img: "Nian.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["yan", "sui"],
      place: ["yan"],
      race: ["unk", "js"]
    }
  },
  {
    name: "阿",
    img: "Aak.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["tz"],
      faction: ["lm", "lsztsws"],
      place: ["lm"],
      race: ["fl"],
      furry: true
    }
  },
  {
    name: "吽",
    img: "Hung.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["zz"],
      faction: ["lm", "lsztsws"],
      place: ["lm"],
      race: ["pl"],
      furry: true
    }
  },
  {
    name: "雪雉",
    img: "Snowsant.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm"],
      place: ["lm"],
      race: ["lbl"]
    }
  },
  {
    name: "煌",
    img: "Blaze.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd", "jygy"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "灰喉",
    img: "GreyThroat.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["lbl"]
    }
  },
  {
    name: "安比尔",
    img: "Ambriel.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "布洛卡",
    img: "Broca.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["xlgu", "jwth"],
      place: ["xlgu"],
      race: ["fl"]
    }
  },
  {
    name: "苇草",
    img: "Reed.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["dlk"]
    }
  },
  {
    name: "莫斯提马",
    img: "Mostima.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["unk", "skt"]
    }
  },
  {
    name: "槐琥",
    img: "Waai_Fu.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm", "lsztsws"],
      place: ["yan"],
      race: ["fl"],
      furry: true
    }
  },
  {
    name: "拜松",
    img: "Bison.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["zz"],
      faction: ["lm"],
      place: ["lm"],
      race: ["ft"]
    }
  },
  {
    name: "梅",
    img: "May.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["lbl"]
    }
  },
  {
    name: "微风",
    img: "Breeze.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["wrp"]
    }
  },
  {
    name: "伊桑",
    img: "Ethan.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["tz"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["sfl"]
    }
  },
  {
    name: "麦哲伦",
    img: "Magallan.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "送葬人",
    img: "Executor.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jj"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "炎客",
    img: "Flamebringer.png",
    opts: {
      rarity: ["st5"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "红云",
    img: "Vermeil.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["xlgu"],
      place: ["unk"],
      race: ["wrp"]
    }
  },
  {
    name: "坚雷",
    img: "Dur-nar.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["zz"],
      faction: ["ldd"],
      place: ["glby"],
      race: ["wrp"]
    }
  },
  {
    name: "赫拉格",
    img: "Hellagur.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["wss"],
      place: ["wss"],
      race: ["lbl"]
    }
  },
  {
    name: "星极",
    img: "Astesia.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["glby"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "桃金娘",
    img: "Myrtle.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["dl"]
    }
  },
  {
    name: "黑",
    img: "Schwarz.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["glby", "xst"],
      place: ["lmbt"],
      race: ["fl"]
    }
  },
  {
    name: "格劳克斯",
    img: "Glaucus.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ybly"],
      place: ["agr"],
      race: ["unk", "agr"]
    }
  },
  {
    name: "锡兰",
    img: "Ceylon.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["glby", "xst"],
      place: ["xst"],
      race: ["lbl"]
    }
  },
  {
    name: "苏苏洛",
    img: "Sussurro.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["xlgu"],
      race: ["wrp"]
    }
  },
  {
    name: "陈",
    img: "Chen.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["lm", "lmjwj"],
      place: ["lm"],
      race: ["lung"]
    }
  },
  {
    name: "诗怀雅",
    img: "Swire.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["lm", "lmjwj"],
      place: ["lm"],
      race: ["fl"]
    }
  },
  {
    name: "格雷伊",
    img: "Greyy.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["ss"],
      faction: ["blwr"],
      place: ["blwr"],
      race: ["pl"]
    }
  },
  {
    name: "斑点",
    img: "Spot.png",
    opts: {
      rarity: ["st3"],
      gender: ["M"],
      job: ["zz"],
      faction: ["ldd", "ybza6"],
      place: ["srg"],
      race: ["rbb"],
      furry: true
    }
  },
  {
    name: "泡普卡",
    img: "Popukar.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd", "ybza6"],
      place: ["srg"],
      race: ["rbb"],
      furry: true
    }
  },
  {
    name: "斯卡蒂",
    img: "Skadi.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jw"],
      faction: ["agr", "shlr"],
      place: ["agt"],
      race: ["unk", "agr"]
    }
  },
  {
    name: "格拉尼",
    img: "Grani.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["klt"]
    }
  },
  {
    name: "夜魔",
    img: "Nightmare.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "猎蜂",
    img: "Beehunter.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["wss"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "月见夜",
    img: "Midnight.png",
    opts: {
      rarity: ["st3"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ldd", "xdza6"],
      place: ["dg"],
      race: ["skz"]
    }
  },
  {
    name: "空爆",
    img: "Catapult.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd", "xdza6"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "暴行",
    img: "Savage.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["lmbt"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "银灰",
    img: "SilverAsh.png",
    opts: {
      rarity: ["st6"],
      gender: ["M"],
      job: ["jw"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["fl"]
    }
  },
  {
    name: "塞雷娅",
    img: "Saria.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["wyf"]
    }
  },
  {
    name: "星熊",
    img: "Hoshiguma.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["zz"],
      faction: ["lm", "lmjwj"],
      place: ["dg"],
      race: ["gui"]
    }
  },
  {
    name: "夜莺",
    img: "Nightingale.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["yl"],
      faction: ["st"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "闪灵",
    img: "Shining.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["yl"],
      faction: ["st"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "安洁莉娜",
    img: "Angelina.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["fz"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["wrp"]
    }
  },
  {
    name: "艾雅法拉",
    img: "Eyjafjalla.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["kpln"]
    }
  },
  {
    name: "伊芙利特",
    img: "Ifrit.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["ss"],
      faction: ["glby", "lysm"],
      place: ["unk"],
      race: ["skz"]
    }
  },
  {
    name: "推进之王",
    img: "Siege.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["xf"],
      faction: ["wdly", "glsgb"],
      place: ["wdly"],
      race: ["asl"]
    }
  },
  {
    name: "能天使",
    img: "Exusiai.png",
    opts: {
      rarity: ["st6"],
      gender: ["F"],
      job: ["jj"],
      faction: ["lm", "qewl"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "食铁兽",
    img: "FEater.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm"],
      place: ["yan"],
      race: ["wss"]
    }
  },
  {
    name: "狮蝎",
    img: "Manticore.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["srg"],
      place: ["srg"],
      race: ["mtk"]
    }
  },
  {
    name: "空",
    img: "Sora.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["lm", "qewl"],
      place: ["unk"],
      race: ["unk", "kts"]
    }
  },
  {
    name: "真理",
    img: "Istina.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["wss", "wssxszzt"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "初雪",
    img: "Pramanix.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["fl"]
    }
  },
  {
    name: "崖心",
    img: "Cliffheart.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["fl"]
    }
  },
  {
    name: "守林人",
    img: "Firewatch.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["alfy"]
    }
  },
  {
    name: "普罗旺斯",
    img: "Provence.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "火神",
    img: "Vulcan.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["mns"],
      place: ["mns"],
      race: ["ft"]
    }
  },
  {
    name: "可颂",
    img: "Croissant.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["lm", "qewl"],
      place: ["mns"],
      race: ["ft"]
    }
  },
  {
    name: "雷蛇",
    img: "Liskarm.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["glby", "hggj"],
      place: ["wyf"],
      race: ["wyf"]
    }
  },
  {
    name: "红",
    img: "Projekt_Red.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["tz"],
      faction: ["ldd", "sweep"],
      place: ["unk"],
      race: ["lp"]
    }
  },
  {
    name: "临光",
    img: "Nearl.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["zz"],
      faction: ["st"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "华法琳",
    img: "Warfarin.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "赫默",
    img: "Silence.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "梅尔",
    img: "Mayer.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["fz"],
      faction: ["glby", "lysm"],
      place: ["glby"],
      race: ["ant"]
    }
  },
  {
    name: "天火",
    img: "Skyfire.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "陨星",
    img: "Meteorite.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "白金",
    img: "Platinum.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "蓝毒",
    img: "Blue_Poison.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ybly"],
      place: ["unk", "srg"],
      race: ["anl"]
    }
  },
  {
    name: "幽灵鲨",
    img: "Specter.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["agr", "shlr"],
      place: ["agr"],
      race: ["unk", "agr"]
    }
  },
  {
    name: "拉普兰德",
    img: "Lappland.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["xlgu"],
      place: ["xlgu"],
      race: ["lp"]
    }
  },
  {
    name: "因陀罗",
    img: "Indra.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["wdly", "glsgb"],
      place: ["unk"],
      race: ["fl"]
    }
  },
  {
    name: "芙兰卡",
    img: "Franka.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["jw"],
      faction: ["glby", "hggj"],
      place: ["glby"],
      race: ["wrp"]
    }
  },
  {
    name: "德克萨斯",
    img: "Texas.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["lm", "qewl"],
      place: ["glby"],
      race: ["lp"]
    }
  },
  {
    name: "凛冬",
    img: "Zima.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["xf"],
      faction: ["wss", "wssxszzt"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "白面鸮",
    img: "Ptilopsis.png",
    opts: {
      rarity: ["st5"],
      gender: ["F"],
      job: ["yl"],
      faction: ["gbly", "lysm"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "阿消",
    img: "Shaw.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm"],
      place: ["lm"],
      race: ["zlk"]
    }
  },
  {
    name: "地灵",
    img: "Earthspirit.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ltny"],
      place: ["ltny"],
      race: ["kpln"]
    }
  },
  {
    name: "深海色",
    img: "Deepcolor.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["fz"],
      faction: ["agr"],
      place: ["unk"],
      race: ["unk", "agr"]
    }
  },
  {
    name: "古米",
    img: "Gummy.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["zz"],
      faction: ["wss", "wssxszzt"],
      place: ["wss"],
      race: ["wss"]
    }
  },
  {
    name: "蛇屠箱",
    img: "Cuora.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["zz"],
      faction: ["glby"],
      place: ["unk"],
      race: ["ptlm"]
    }
  },
  {
    name: "角峰",
    img: "Matterhorn.png",
    opts: {
      rarity: ["st4"],
      gender: ["M"],
      job: ["zz"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["ft"]
    }
  },
  {
    name: "调香师",
    img: "Perfumer.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["mns"],
      race: ["wrp"]
    }
  },
  {
    name: "嘉维尔",
    img: "Gavial.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["adkls"]
    }
  },
  {
    name: "末药",
    img: "Myrrh.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["wrp"]
    }
  },
  {
    name: "暗索",
    img: "Rope.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["tz"],
      faction: ["lm"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "砾",
    img: "Gravel.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["tz"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["zlk"]
    }
  },
  {
    name: "慕斯",
    img: "Mousse.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "艾丝黛尔",
    img: "Estelle.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["srg"],
      place: ["unk"],
      race: ["adkls"]
    }
  },
  {
    name: "霜叶",
    img: "Frostleaf.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["glby"],
      race: ["wrp"]
    }
  },
  {
    name: "缠丸",
    img: "Matoimaru.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["dg"],
      place: ["dg"],
      race: ["gui"]
    }
  },
  {
    name: "杜宾",
    img: "Dobermann.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["blwr"],
      race: ["pl"]
    }
  },
  {
    name: "红豆",
    img: "Vigna.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["xf"],
      faction: ["glby"],
      place: ["kzdr"],
      race: ["skz"]
    }
  },
  {
    name: "清道夫",
    img: "Scavenger.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ldd", "sweep"],
      place: ["unk"],
      race: ["zlk"]
    }
  },
  {
    name: "讯使",
    img: "Courier.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["xf"],
      faction: ["xlge", "klmy"],
      place: ["xlge"],
      race: ["ytl"]
    }
  },
  {
    name: "白雪",
    img: "ShiraYuki.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["dg"],
      place: ["dg"],
      race: ["ant"]
    }
  },
  {
    name: "流星",
    img: "Meteor.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["kxmr"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "杰西卡",
    img: "Jessica.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["jj"],
      faction: ["glby", "hggj"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "远山",
    img: "Gitano.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["ss"],
      faction: ["sm"],
      place: ["sm"],
      race: ["alfy"]
    }
  },
  {
    name: "夜烟",
    img: "Haze.png",
    opts: {
      rarity: ["st4"],
      gender: ["F"],
      job: ["ss"],
      faction: ["wdly"],
      place: ["wdly"],
      race: ["wdly"]
    }
  },
  {
    name: "梓兰",
    img: "Orchid.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["fz"],
      faction: ["ldd", "ybza6"],
      place: ["glby"],
      race: ["lbl"]
    }
  },
  {
    name: "史都华德",
    img: "Steward.png",
    opts: {
      rarity: ["st3"],
      gender: ["M"],
      job: ["ss"],
      faction: ["ldd", "ybza4"],
      place: ["xlge"],
      race: ["wrp"]
    }
  },
  {
    name: "安塞尔",
    img: "Ansel.png",
    opts: {
      rarity: ["st3"],
      gender: ["M"],
      job: ["yl"],
      faction: ["ldd", "ybza4"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "芙蓉",
    img: "Hibiscus.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd", "ybza1"],
      place: ["wdly"],
      race: ["skz"]
    }
  },
  {
    name: "炎熔",
    img: "Lava.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ldd", "ybza1"],
      place: ["wdly"],
      race: ["skz"]
    }
  },
  {
    name: "安德切尔",
    img: "Adnachiel.png",
    opts: {
      rarity: ["st3"],
      gender: ["M"],
      job: ["jj"],
      faction: ["ldd", "ybza4"],
      place: ["ltl"],
      race: ["skt"]
    }
  },
  {
    name: "克洛丝",
    img: "Kroos.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["jj"],
      faction: ["ldd", "ybza1"],
      place: ["lmbt"],
      race: ["kts"]
    }
  },
  {
    name: "米格鲁",
    img: "Beagle.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["zz"],
      faction: ["ldd", "ybza1"],
      place: ["blwr"],
      race: ["pl"]
    }
  },
  {
    name: "卡缇",
    img: "Cardigan.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["zz"],
      faction: ["ldd", "ybza4"],
      place: ["ltny"],
      race: ["pl"]
    }
  },
  {
    name: "玫兰莎",
    img: "Melantha.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["jw"],
      faction: ["ldd", "ybza4"],
      place: ["wdly"],
      race: ["fl"]
    }
  },
  {
    name: "翎羽",
    img: "Plume.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ltl"],
      place: ["ltl"],
      race: ["lbl"]
    }
  },
  {
    name: "香草",
    img: "Vanilla.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["xf"],
      faction: ["glby", "hggj"],
      place: ["wyf"],
      race: ["wyf"]
    }
  },
  {
    name: "芬",
    img: "Fang.png",
    opts: {
      rarity: ["st3"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ldd", "ybza1"],
      place: ["kxmr"],
      race: ["klt"]
    }
  },
  {
    name: "12F",
    img: "12F.png",
    opts: {
      rarity: ["st2"],
      gender: ["M"],
      job: ["ss"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["sfl"],
      furry: true
    }
  },
  {
    name: "杜林",
    img: "Durin.png",
    opts: {
      rarity: ["st2"],
      gender: ["F"],
      job: ["ss"],
      faction: ["ldd", "xdza4"],
      place: ["unk"],
      race: ["dl"]
    }
  },
  {
    name: "巡林者",
    img: "Rangers.png",
    opts: {
      rarity: ["st2"],
      gender: ["M"],
      job: ["jj"],
      faction: ["ldd", "xdza4"],
      place: ["unk"],
      race: ["sfl"],
      furry: true
    }
  },
  {
    name: "黑角",
    img: "Noir_Corne.png",
    opts: {
      rarity: ["st2"],
      gender: ["M"],
      job: ["zz"],
      faction: ["ldd", "xdza4"],
      place: ["dg"],
      race: ["gui"]
    }
  },
  {
    name: "夜刀",
    img: "Yato.png",
    opts: {
      rarity: ["st2"],
      gender: ["F"],
      job: ["xf"],
      faction: ["ldd", "xdza4"],
      place: ["dg"],
      race: ["gui"]
    }
  },
  {
    name: "Castle-3",
    img: "Castle-3.png",
    opts: {
      rarity: ["st1"],
      gender: ["M"],
      job: ["jw"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["jx"],
      nonhuman: true
    }
  },
  {
    name: "Lancet-2",
    img: "Lancet-2.png",
    opts: {
      rarity: ["st1"],
      gender: ["F"],
      job: ["yl"],
      faction: ["ldd"],
      place: ["unk"],
      race: ["jx"],
      nonhuman: true
    }
  }
];
