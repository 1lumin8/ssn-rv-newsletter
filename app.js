const quotePool = [
  {
    source: "260517 주일예배(계22장) 생명나무와 예수님의 사자",
    date: "260517",
    quote: "정말 이러한 이 말씀에 대해서 정말 참으로 알고자 하는 마음, 정말 우리가 관심을 가지고 듣고 보고 해야 하는 것입니다. 그래야지, 아무 의미도 없이 그냥 왔다 갔다 아무 소용없는 그런 존재가 된다면 하나님의 안타까운 그 마음을 모르는 사람이고 자기가 어떤 처지에 있는 것도 모르는 사람이지요."
  },
  {
    source: "260517 주일예배(계22장) 생명나무와 예수님의 사자",
    date: "260517",
    quote: "오늘도 우리가 하나님의 씨로 났다면 우리도 말씀체가 돼야 하겠다, 그 말입니다. 걸어 다니는 성경이 됩시다. 그래서 우리는 참으로 말씀체가 된다는 말은 생명체가 되지요."
  },
  {
    source: "260510 주일예배 계21장(2) 새 하늘 새 땅과 거룩한 성",
    date: "260510",
    quote: "그러나 우리는 헛된 신앙을 한다든가 말씀을 잘못 알고 있다든가 잘못 이해를 하고 있다든가 그래서는 아니되겠죠? 우리는 이 말씀 안에서 하나의 희망 소망을 가진다 할 것 같으면 이 말씀을 깊이있게 생각해야 합니다."
  },
  {
    source: "260510 주일예배 계21장(2) 새 하늘 새 땅과 거룩한 성",
    date: "260510",
    quote: "이래서 이제는 마지막 종점이기 때문에 더 갈 곳이 없는 것이죠? 그래서 한 세상이 끝나고 새로운 한 세상이 창조되는 것입니다. 그러면 우리 모두가 다 자아완성, 자아완성은 이 말씀 통달하기 위해서 노력을 해야 합니다."
  },
  {
    source: "260503 주일예배(계21장) 새 하늘 새 땅과 거룩한 성",
    date: "260503",
    quote: "정말 하나님이 함께 하셔야 된다, 그것 맞지요? 어떤 권세도 재산도 일장춘몽에 지나지 못합니다. 우리에게 가장 필요한 것은 하나님이십니다. 편안한 자세로 앉아서 이제 하나님 말씀 한 구절 읽고 우리 그 뜻을 새겨보는 시간되기 바랍니다."
  },
  {
    source: "260503 주일예배(계21장) 새 하늘 새 땅과 거룩한 성",
    date: "260503",
    quote: "여기에서 우리 종교인이 해야 할 일이 무엇인가, 종교는 무엇을 말하고 있는가, 종교가 말하고 있는 것은 한마디로 하면 영생이지요. 종교에 영생을 빼고 나면 종교의 가치가 하나도 없다, 그 말입니다."
  },
  {
    source: "260429 수요예배(계20장) 천년 성 첫째 부활과 천년 후의 심판",
    date: "260429",
    quote: "그렇다면 성경 몰라도 되겠습니까? 알아야 되겠지요. 성경에 대해서 등한히 여기는 사람은 참 신앙인이 아니에요. 형식적인 신앙한다는 형식적인 것에 불과하지, 참으로 천국이 어떤 곳이며 영생이 어떤 것인지 안다면 흐지부지한 그런 신앙은 하지 않을 것입니다."
  },
  {
    source: "260429 수요예배(계20장) 천년 성 첫째 부활과 천년 후의 심판",
    date: "260429",
    quote: "그럼 이 말씀을 믿어야 되고 또 이 말씀대로 되어 졌나 안 되어 졌나를 확인해야 되고, 확인해서 맞으면 믿어야 되지요. 굳게 잡고 믿어야 되는 것입니다. 이 말씀을 아무리 읽으면 뭐합니까? 이 말씀대로 이루어진 실체가 나타나야 하는 것 아니겠습니까?"
  },
  {
    source: "260419 주일예배(계19장) 어린양의 혼인 잔치와 백마 탄 자",
    date: "260419",
    quote: "지금 19장에서는 하늘에 허다한 무리라는 것은 14장 15장의 현장이라는 것을 아셔야 하겠다 그 말입니다. 분명히 사건이 언제냐, 어디냐, 누구냐 이런 마음을 가져주시기 바랍니다. 지구촌 어디에 가도 이렇게 가르치거나 말하는 사람이 없지만 오늘의 우리는 예언이 육신이 되어 실상으로 이루어진 것을 증거하는 때인고로 이와 같이 육하원칙에 입각한 말을 하고 있음을 여러분 아셔야 하겠습니다."
  },
  {
    source: "260419 주일예배(계19장) 어린양의 혼인 잔치와 백마 탄 자",
    date: "260419",
    quote: "알아야 되겠지요. 그리고 계시록의 이 사건을 보고 증거하는 사람은 누구냐, 알아야하겠지요. 여러분들 우리 진짜 똑똑한 사람이 됩시다. 똑똑한 사람 말입니다. 허황되고 가증되고 아주 공갈이나 치는 그러한 신앙에서는 이제는 떠나야합니다."
  },
  {
    source: "260415 수요예배(계18장) 음녀의 진노의 포도주와 바벨론에 대한 심판",
    date: "260415",
    quote: "참으로 이 말씀이 꼭 우리가 알아야 할 말씀이요, 필요한 말씀이라면 내 마음에 새겨둬야 되겠지요. 새겨두고 깨달음이 돼야 되겠습니다. 지금 이 18장의 내용은 17장을 이어서 바벨론에 대한 심판에 관한 내용을 하였는데 그 다음에는 19장 내용과 18장 내용의 결혼했다는 것이 다릅니다."
  },
  {
    source: "260415 수요예배(계18장) 음녀의 진노의 포도주와 바벨론에 대한 심판",
    date: "260415",
    quote: "이러한 것들이 돌을 바다에 던져 없어지는 것처럼 저 세상에서 없어진다는 말이 된다는 것이지요. 성경이 뭘 말하고 뭘 깨달아라고 주셨는가를 우리는 분명히 아셔야 합니다."
  },
  {
    source: "260329 주일예배(계14장) 처음 익은 열매 시온산 14만 4천",
    date: "260329",
    quote: "그렇다면 이 계시록 하나를 분석을 해 보면 이 안에는 선민의 배도도 있고 또 이 선민의 배도로 인해서 멸망자에게 멸망 받는 것도 있고 또 이 멸망자와 싸워서 하나님의 나라와 제사장을 창조하는 열두지파가 있는 것이지요. 그럼 하나님이 계획한 그 모든 것이 반드시 이루어진다는 이사야의 말 그대로 오늘날 이 계시록 때는 이루어지고 있음을 오늘날 우리는 증거하고 있는 것입니다."
  },
  {
    source: "260329 주일예배(계14장) 처음 익은 열매 시온산 14만 4천",
    date: "260329",
    quote: "이런 데도 세상이 좋고 세상 적으로 발버둥치기보다도 먼저 그의 나라와 그의 의를 구해야 한다, 그 말인 것입니다. 마태 6장 33절에 그의 나라와 그의 의를 구하라 하였으니 바로 열두지파 14장의 이 말씀이 그의 나라와 그의 의 맞지요. 그러나 분명히 우리는 이 말씀을 믿고 행하는 자가 되기를 바랍니다."
  },
  {
    source: "260412 주일예배(계17장) 음녀의 음행과 포도주",
    date: "260412",
    quote: "그러면 언제라는 “때”가 나오고 어디라는 “곳”이 나오고 이것이 누구라는 “것”이 나와야 하지 않겠습니까? 그래서 무엇을 어떻게 했는가, 이런 순리 안에서 이 말씀을 들으셔야 되겠지요."
  },
  {
    source: "260412 주일예배(계17장) 음녀의 음행과 포도주",
    date: "260412",
    quote: "지금까지의 신앙은 교회에 가서 예수님 믿는다 하는 그 말로 신앙을 해왔지만 지금은 그 예수님이 약속하신 이 예언이 이루어지는 실상시대이기 때문에 이 말씀의 실상을 우리가 알아야 되겠다는 것이지요."
  },
  {
    source: "260405 주일예배(계16장) 진노의 일곱 대접과 진노를 받는 자들",
    date: "260405",
    quote: "우리가 배웠다는 가치가 뭐가 있겠습니까? 말씀이 이루어졌을 때 이것보고 믿어 깨달아라는 뜻 아니겠습니까? 그래서 오늘은 어떠한 것이냐, 이제 둘째 장막 여기는 하나님 보좌 앞에 여기에서 나온 이긴 자들이 모여 있는 곳이지요."
  },
  {
    source: "260405 주일예배(계16장) 진노의 일곱 대접과 진노를 받는 자들",
    date: "260405",
    quote: "그러면 우리에게는 이 말씀이 우리의 무기가 되는 것이지요. 또 힘이 되지요. 믿음의 힘이 되는 것입니다. 우리는 그냥 믿는다, 어쩐다, 끄떡대는 것이 아니라는 것입니다."
  },
  {
    source: "260401 수요예배(계15장) 만민이 와서 경배할 곳 증거장막성전",
    date: "260401",
    quote: "그럼 우리는 이 성경을 보고도 이해를 못한다면 성경을 배웠다, 성경을 알았다 하는 가치가 없을 것입니다. 그래서 하늘이라고 하는 개념 땅이라고 하는 이 개념을 분명히 아시기 바랍니다."
  },
  {
    source: "260401 수요예배(계15장) 만민이 와서 경배할 곳 증거장막성전",
    date: "260401",
    quote: "우리 신천지는 악인이나 선인이나 구별 없이 누구든지 와서 다시 나게 되면 하나님의 새로운 피조물로 하나님의 자녀가 될 것입니다. 그래서 깨닫게 하기 위해서 하는 말이었지, 이런 사람은 막아버리고 저런 사람만 오너라, 그것이 아니라 누구든지 이 말씀으로 거듭나게 되면 하나님의 자녀로 다시 나게 된다는 말이 되겠습니다."
  },
  {
    source: "260322 주일예배(계13장) 짐승에게 표 받고 경배하는 선민",
    date: "260322",
    quote: "언제든지 듣는 사람이나 말하는 사람이 육하원칙에 입각해서 생각했으면 좋겠습니다. 언제냐, 어디냐, 누구냐, 무엇이냐, 왜 그렇게 했는가, 알아야하지 않겠습니까?"
  },
  {
    source: "260322 주일예배(계13장) 짐승에게 표 받고 경배하는 선민",
    date: "260322",
    quote: "그러나 이 말씀의 실체는 이 말씀이 이루어지는 오늘날이 되겠지요. 그럼 이 말씀이 어디에서 이루어지는가를 본다면 하늘 장막에서 일어나는 사건입니다."
  },
  {
    source: "260318 수요예배(계12장) 아들과 용과의 전쟁",
    date: "260318",
    quote: "신약성경에서 예수님이 피로 새 언약한 그 언약은 바로 어떠한 것이지요? 새 언약 말입니다. 아담 이후 많은 사람들하고 하나님께서는 언약을 했지만 이 사람들이 언약을 지키지 아니해서 소망에 이르지 못했다고 성경은 기록이 되어 있습니다."
  },
  {
    source: "260318 수요예배(계12장) 아들과 용과의 전쟁",
    date: "260318",
    quote: "이기면 머리가 되고 지면 꼬리가 된다는 것입니다. 이래서 이기는 자가 필요하다는 것 아니겠습니까? 이기는 자가 하나님 보좌 앞에 유리바다에 가서 있게 되는 것이고 예수님의 보좌에 함께 앉게 되는 것이지요."
  },
  {
    source: "260315 주일예배(계11장) 두 증인의 죽음과 일곱째 나팔",
    date: "260315",
    quote: "그러면 예수님을 통해서 계시 말씀을 받아야만이 소망인 영생에 들어갈 수가 있다는 말이 아니겠습니까? 그와 같이 오늘날 이 계시록 시대에도 예수 그리스도의 계시를, 예수가 열어주신 이 그리스도의 계시를 요한을 통해서 받아야만이 하나님도 예수님도 알게 되고 하나님과 예수님을 알므로 영생에 들어 갈 수가 있다, 그 말이거든요."
  },
  {
    source: "260315 주일예배(계11장) 두 증인의 죽음과 일곱째 나팔",
    date: "260315",
    quote: "오늘날은 이 예언이 이루어진 실상을 보고 증거 하는 때라는 것을 아셔야 하겠습니다. 그렇다면 예수님이 예언을 이루고 그 실상을 증거 했듯이 오늘날도 이 계시록 예언의 실상을 증거 하는 때라는 것을 아셔야 하겠지요."
  },
  {
    source: "260301 주일예배(계10장) 하늘에서 온 계시의 책",
    date: "260301",
    quote: "하나님의 역사, 정말 오랜 하나님의 역사였는데 언제 시작하고 언제 끝이 나는가가 우리가 궁금한 일이었는데 이제는 알만 하시지요? 하나님께서 천지를 창조하시고 아담을 창조해서 창조한 모든 것을 아담에게 유업으로 맡긴 것이었습니다."
  },
  {
    source: "260301 주일예배(계10장) 하늘에서 온 계시의 책",
    date: "260301",
    quote: "우리에겐 직결되는 것은 신약이라는 이 약속, 이 말씀과 이 말씀대로 이루어진 실상이 우리에게 직결되는 내용이다, 그 말인 것입니다."
  },
  {
    source: "260222 주일예배(계9장) 무저갱의 황충과 범죄한 천사",
    date: "260222",
    quote: "항시 생각해야 할 것은 예수님께서 무엇인가 하나 이루시는 것인데 그것을 이룰 때에는 천국비밀인지라 비유를 베풀어 말씀하셨다는 것을 잊어서는 아니 되겠습니다."
  },
  {
    source: "260222 주일예배(계9장) 무저갱의 황충과 범죄한 천사",
    date: "260222",
    quote: "지금은 빙자한 비유의 때가 아니라 실상의 때를 말합니다. 실상이 이루어져야 하지 않겠습니까? 그러면 그 실상을 증거 하는 자가 있어야 되겠지요."
  },
  {
    source: "260215 주일예배(계8장) 마지막 인과 일곱 나팔",
    date: "260215",
    quote: "오늘 8장의 내용을 귀담아 잘 들으시고 여러분들도 전할 줄 알아야하겠습니다. 먼저 읽도록 하겠습니다. 5절까지를 먼저 읽겠습니다. 계시록 8장 1절부터 5절까지입니다."
  },
  {
    source: "260215 주일예배(계8장) 마지막 인과 일곱 나팔",
    date: "260215",
    quote: "여러분들, 이 말씀을 마음에 새겨서 그렇게 원하는 소망에 들어가는 여러분 다 되기를 축원합니다. 감사합니다. 말씀 마치고 잠깐 기도드리겠습니다."
  },
  {
    source: "260211 수요성회(계7장) 인 맞은 영적 새 이스라엘 12지파",
    date: "260211",
    quote: "그래서 이 말씀 우리가 하나하나 들을 때에 마음에 새겨야 되겠지요. 왜 새겨야 하느냐고 묻는다면 그것이 예수님과 우리와 피로 맺은 새 언약이기 때문에 그런 것입니다."
  },
  {
    source: "260211 수요성회(계7장) 인 맞은 영적 새 이스라엘 12지파",
    date: "260211",
    quote: "잘 들으시고 하나님도 인류세계도 하나님의 이 뜻이 이루어지기를 간절히 소원하고 6천년 동안에 찾아온 것이거든요. 하나님도 찾아오시고 우리도 찾아왔고 6천년이라는 오늘날 이 성경이 지적한 그 현장으로 온 것입니다."
  },
  {
    source: "260204 수요예배(계6장) 배도한 선민 해, 달, 별에 대한 심판",
    date: "260204",
    quote: "이 말씀을 내가 안다 할지라도 내가 전할 때에 상대의 그 수준에 맞도록 육하원칙에 입각해서 순리대로 알려줘야 되겠지요. 이 또한 노력해야 되겠습니다."
  },
  {
    source: "260204 수요예배(계6장) 배도한 선민 해, 달, 별에 대한 심판",
    date: "260204",
    quote: "내가 형식적인 신앙이냐, 진짜 깨달아 믿는 신앙이냐, 판가름이 돼야 될 줄 압니다. 오늘 이 말은 이 사분의 일 이것 때문에 말했지요. 사분의 일이라 하지만 결국 다 죽는 것이거든요."
  },
  {
    source: "260125 주일예배(계5장) 일곱 인으로 봉한 책",
    date: "260125",
    quote: "우리는 정말 이 책 한 권에서 깨달을 것을 이제는 다 깨달아야 합니다. 그리고 이 인을 떼고 책을 펼친 분도 한 분이지요. 그 책을 전달하는 사람도 한 분이지요."
  },
  {
    source: "260125 주일예배(계5장) 일곱 인으로 봉한 책",
    date: "260125",
    quote: "오늘날 우리 계시의 이 말씀이 적은 것이 아니지요. 그러면 이 말씀을 예수님이 펼쳐가지고 어떻게 하느냐, 계시록 10장에 가보니까 천사에게 주지요."
  },
  {
    source: "260104 주일예배(계4장) 하나님의 영계 보좌",
    date: "260104",
    quote: "우리는 실천으로 지금 하고 있는 것이지요. 예언을 전하는 것이 아니라 예언이 이루어진 실상을 전하는 시대라는 것을 여러분 명심해 주기 바라는 것입니다."
  },
  {
    source: "260104 주일예배(계4장) 하나님의 영계 보좌",
    date: "260104",
    quote: "오늘날 우리는 그러지 말고 이 말씀에 대한 정립을 하자는 것입니다. 사건의 현장, 그때, 누가, 무엇을, 왜, 이렇게 일을 좀 생각을 제대로 해야 된다는 것입니다."
  },
  {
    source: "251228 주일예배(계2-3장) 일곱 교회 사자에게 보낸 편지",
    date: "251228",
    quote: "그리고 오늘날은 여기에 기록된 이대로 이것이 청사진이니까 이대로 이루어지고 있는 것이 오늘 우리 신천지라는 것을 여러분들 믿으시면서 이 본문 말씀 읽도록 합니다."
  },
  {
    source: "251228 주일예배(계2-3장) 일곱 교회 사자에게 보낸 편지",
    date: "251228",
    quote: "이 말씀은 온 세계에 퍼져 나갈 것입니다. 그 다음에 3장입니다. 계 3:1 사데 교회 사자에게 편지하기를 하나님의 일곱 영과 일곱 별을 가진 이가 가라사대"
  },
  {
    source: "251221 주일예배(계1:9-20) 계시록 전장 결론과 시작",
    date: "251221",
    quote: "오늘날은 영적 일곱 교회에 편지를 해야 되겠지요. 영적인 일곱 교회입니다. 물론 이러한 것을 말하게 되면 너무나 의아스럽기도 하고 이해하기도 힘들겠습니다마는 우리가 계시록 11장이든 13장이든 17장이든 볼 것 같으면 바벨론이 나옵니다."
  },
  {
    source: "251221 주일예배(계1:9-20) 계시록 전장 결론과 시작",
    date: "251221",
    quote: "이 계시록이 이루어지는 이 때에는 만국이 마귀에게 무너지게 되고 파괴되게 되어 있고 만국이 마귀의 음행의 포도주를 먹게 되어 있고 만국이 마귀와 결혼한다는 말이 계시록 18장에 나와 있습니다."
  },
  {
    source: "251217 수요예배(계1:1-8) 계시록 전장 결론과 시작",
    date: "251217",
    quote: "그럼 이 계시는 언제 기록했는가, 지금으로부터 예수님 승천이후 약 2천년 전에 예수님의 제자 요한이 예수의 계시를 기록한 것입니다. 2천년이나 된 것 맞지요."
  },
  {
    source: "251217 수요예배(계1:1-8) 계시록 전장 결론과 시작",
    date: "251217",
    quote: "그렇다면 오늘날 우리는 이 계시의 말씀, 예수 그리스도의 계시를 받아야만 된다는 것입니다. 문제는 그것입니다."
  },
  {
    source: "260318 수요예배(계12장) 아들과 용과의 전쟁",
    date: "260318",
    quote: "이것이 하나님의 약속하신 새 언약이라는 것입니다. 이날 저녁도 주시는 말씀 마음에 명백히 새겨지기를 바랍니다."
  },
  {
    source: "260318 수요예배(계12장) 아들과 용과의 전쟁",
    date: "260318",
    quote: "우리는 모두가 다 우리 하나님의 것이고 우리 것인데 조그마한 것 가지고 내 호주머니나 채운다는 이것은 아직까지 하나님의 이 은혜의 경지에 이르지 못한 태도인 것입니다."
  },
  {
    source: "260315 주일예배(계11장) 두 증인의 죽음과 일곱째 나팔",
    date: "260315",
    quote: "세상 사람은 이것을 어찌 알겠느냐, 그런 말이에요. 세상하지, 어찌 하(何), 알 지(知) 어찌 알겠느냐, 이것처럼 우리 신천지 인은 이것을 알아야 되겠지요."
  },
  {
    source: "260315 주일예배(계11장) 두 증인의 죽음과 일곱째 나팔",
    date: "260315",
    quote: "성경말씀을 믿어야 되겠지요. 오늘날 계시록이 이루어지는 이 때에 정말 정신 차리지 못하고 거듭나고자 하지 아니하거나 말씀을 믿지 않거나 순종하지 않거나 이러면 안 되지요."
  },
  {
    source: "260301 주일예배(계10장) 하늘에서 온 계시의 책",
    date: "260301",
    quote: "시대마다 한 목자를 선택해서 역사를 했다는 것 또한 알아야 되겠지요. 보고 듣고 대화를 해온 것도 오직 한 사람이었지요."
  },
  {
    source: "260301 주일예배(계10장) 하늘에서 온 계시의 책",
    date: "260301",
    quote: "온 인류의 세계가 계시록에 대해서는 캄캄합니다. 그런데 계시록이 말씀의 뜻과 이루어진 실상을 증거 하는 곳은 어디에 가도 없습니다. 오직 우리 신천지뿐이지요."
  },
  {
    source: "260222 주일예배(계9장) 무저갱의 황충과 범죄한 천사",
    date: "260222",
    quote: "기록되어 있는 말씀을 보면 황충이다, 연기다, 무저갱이다, 전갈이다, 아주 이상한 말을 하였는데 정말 이러한 곤충이 나와서 사람을 이렇게 괴롭게 하고 죽일까, 그렇게 생각이 되지 않습니까?"
  },
  {
    source: "260222 주일예배(계9장) 무저갱의 황충과 범죄한 천사",
    date: "260222",
    quote: "사실대로 증거 해주면, 하늘에 올라가도 알지 못한 일을 오늘날 알려준다면 얼마나 감사해서 깨달아 믿기 위해서 노력해야 되겠지요."
  },
  {
    source: "260215 주일예배(계8장) 마지막 인과 일곱 나팔",
    date: "260215",
    quote: "이 계시록에 지금까지 읽은 이 사건이 있을 때에 이 사건에 대해서 하나님 앞에 기도했을 때에 그 기도가 상달 되겠지요."
  },
  {
    source: "260215 주일예배(계8장) 마지막 인과 일곱 나팔",
    date: "260215",
    quote: "사실대로 말해야 하지 않겠습니까? 보고들은 대로 말입니다. 그래야 맞지요. 아무리 이 내용이 좋고 이 내용을 이 말은 이런 것이다, 한다 할지라도 실물이 없으면 안 되지요."
  },
  {
    source: "260211 수요성회(계7장) 인 맞은 영적 새 이스라엘 12지파",
    date: "260211",
    quote: "그럼 인 맞는다는 것은 그 말씀을 받아주는 사람이 인 맞은 것이지요. 그래서 다시 말하면 그 말씀을 받아서 마음에 기록되는 것이 인 맞는 것입니다."
  },
  {
    source: "260211 수요성회(계7장) 인 맞은 영적 새 이스라엘 12지파",
    date: "260211",
    quote: "듣고도 모르면 또 물어봐야 됩니다. 머리 되게 나쁘네, 그럴까 싶어서 안 물어보면 안 되지요. 깨달을 때까지 물어봐야 되는 것입니다."
  },
  {
    source: "260204 수요예배(계6장) 배도한 선민 해, 달, 별에 대한 심판",
    date: "260204",
    quote: "그럼 지금 이 말은 여러분들이 겉으로 들어서 내어버리면 안 됩니다. 6천년 만에 처음으로 하나님이 여러분에게 하시는 말씀이지요."
  },
  {
    source: "260204 수요예배(계6장) 배도한 선민 해, 달, 별에 대한 심판",
    date: "260204",
    quote: "세상 이야기 듣듯이 그렇게 흐지부지하게 듣고 오시면 안 됩니다. 명백하게 듣고 생각에 두고 마음에 새겨야 되지요."
  },
  {
    source: "260125 주일예배(계5장) 일곱 인으로 봉한 책",
    date: "260125",
    quote: "자기 짐작으로 자기 생각으로 말하는 것을 말해서 자의적 해설이라 그러지요. 보지도 듣지도 지시도 받지 아니하고 자기 생각대로 말하는 것을 자의적인 판단이라는 것입니다."
  },
  {
    source: "260125 주일예배(계5장) 일곱 인으로 봉한 책",
    date: "260125",
    quote: "누구든지 이 말씀, 예수님의 계시를 받아야만 하나님을 안다고 하지요. 하나님을 알아야 영생한다는 것이 맞지요."
  },
  {
    source: "260104 주일예배(계4장) 하나님의 영계 보좌",
    date: "260104",
    quote: "절대로 이러한 것을 잊어서는 안 됩니다. 다만 선, 후의 사건만이 ‘이 일 후’ 하며 했지, 장소는 항상 여기입니다."
  },
  {
    source: "260104 주일예배(계4장) 하나님의 영계 보좌",
    date: "260104",
    quote: "하나님의 모양과 형상대로 하나님의 씨로 창조하기 위해서 여러분 택했습니다. 아셔야 되겠습니다. 세상의 어떤 권세도 어떤 물질도 이런 것이 우리에게 해당되는 것이 아닙니다."
  },
  {
    source: "251228 주일예배(계2-3장) 일곱 교회 사자에게 보낸 편지",
    date: "251228",
    quote: "여러분들, 우리가 모르는 사람에게 전하려면 사실대로 똑바로 전해야 하는 것 맞지요. 그럼 알아야 똑바로 전할 것 아니겠습니까?"
  },
  {
    source: "251228 주일예배(계2-3장) 일곱 교회 사자에게 보낸 편지",
    date: "251228",
    quote: "이루어진 과정 말입니다. 그래서 오늘 본문에서 일곱별이 나오고 일곱 금 촛대가 나왔는데 이 일곱별은 일곱 사자라는 것이지요."
  },
  {
    source: "251221 주일예배(계1:9-20) 계시록 전장 결론과 시작",
    date: "251221",
    quote: "오늘날 우리는 이 말씀을 통달하는 것은 물론이요, 이 말씀대로 이루어진 실체까지 증거하고 있지요. 세계에서 이런 곳은 없습니다."
  },
  {
    source: "251221 주일예배(계1:9-20) 계시록 전장 결론과 시작",
    date: "251221",
    quote: "우리가 자부심을 가져야 되겠지요. 문제는 그것입니다. 이 모두가 피로 된 것이라는 것이지요. 예수의 피가 아니면 있을 수 없는 것 아닙니까?"
  },
  {
    source: "251217 수요예배(계1:1-8) 계시록 전장 결론과 시작",
    date: "251217",
    quote: "시험을 친다는 것은 인 맞았느냐, 안 맞았느냐, 검열을 하는 것 맞지요. 인 맞아야 하나님의 나라와 제사장이 된다 하셨기에 꼭 인 맞아야 되겠고 오늘 이 말씀 또한 마음에 인 맞으시기 바랍니다."
  },
  {
    source: "251217 수요예배(계1:1-8) 계시록 전장 결론과 시작",
    date: "251217",
    quote: "이 세상은 마음에 잠이 들어서 어둠 속에서 듣지도 못하고 깨닫지도 못하고 써보지도 못합니다. 하지만 우리는 알아야한다는 것입니다."
  },
  {
    source: "260517 주일예배(계22장) 생명나무와 예수님의 사자",
    date: "260517",
    quote: "우리가 정말 하나님을 믿는다고 한다면 하나님이 말씀하신 것은 믿어야 되지 않겠습니까? 믿지 아니한다면 하나님을 믿는다는 말이 맞지 않는 것입니다."
  },
  {
    source: "260510 주일예배 계21장(2) 새 하늘 새 땅과 거룩한 성",
    date: "260510",
    quote: "이제는 마지막 종점이기 때문에 더 갈 곳이 없는 것이죠? 그래서 한 세상이 끝나고 새로운 한 세상이 창조되는 것입니다."
  },
  {
    source: "260503 주일예배(계21장) 새 하늘 새 땅과 거룩한 성",
    date: "260503",
    quote: "우리에게 가장 필요한 것은 하나님이십니다. 편안한 자세로 앉아서 이제 하나님 말씀 한 구절 읽고 우리 그 뜻을 새겨보는 시간되기 바랍니다."
  },
  {
    source: "260429 수요예배(계20장) 천년 성 첫째 부활과 천년 후의 심판",
    date: "260429",
    quote: "성경에 대해서 등한히 여기는 사람은 참 신앙인이 아니에요. 형식적인 신앙한다는 형식적인 것에 불과하지, 참으로 천국이 어떤 곳이며 영생이 어떤 것인지 안다면 흐지부지한 그런 신앙은 하지 않을 것입니다."
  },
  {
    source: "260419 주일예배(계19장) 어린양의 혼인 잔치와 백마 탄 자",
    date: "260419",
    quote: "여러분들 우리 진짜 똑똑한 사람이 됩시다. 똑똑한 사람 말입니다. 허황되고 가증되고 아주 공갈이나 치는 그러한 신앙에서는 이제는 떠나야합니다."
  },
  {
    source: "260329 주일예배(계14장) 처음 익은 열매 시온산 14만 4천",
    date: "260329",
    quote: "이런 데도 세상이 좋고 세상 적으로 발버둥치기보다도 먼저 그의 나라와 그의 의를 구해야 한다, 그 말인 것입니다."
  },
  {
    source: "260318 수요예배(계12장) 아들과 용과의 전쟁",
    date: "260318",
    quote: "이기면 머리가 되고 지면 꼬리가 된다는 것입니다. 이래서 이기는 자가 필요하다는 것 아니겠습니까?"
  },
  {
    source: "260315 주일예배(계11장) 두 증인의 죽음과 일곱째 나팔",
    date: "260315",
    quote: "오늘날은 이 예언이 이루어진 실상을 보고 증거 하는 때라는 것을 아셔야 하겠습니다."
  },
  {
    source: "260215 주일예배(계8장) 마지막 인과 일곱 나팔",
    date: "260215",
    quote: "문제는 여기의 이 나팔 소리는 하나님의 소속에 있는 이러한 입을 통해 가지고 소리를 외치는 것을 나팔이라고 하는 것입니다."
  },
  {
    source: "260211 수요성회(계7장) 인 맞은 영적 새 이스라엘 12지파",
    date: "260211",
    quote: "그럼 이 성경 말씀이 바로 도장입니다. 어디에 새겨야 하면 마음에 새겨야하는 것이지요. 이것이 새 언약이지요."
  },
  {
    source: "260204 수요예배(계6장) 배도한 선민 해, 달, 별에 대한 심판",
    date: "260204",
    quote: "영적 이스라엘 사람들 한번쯤 정신 좀 차려 봐도 되겠습니다. 교만도 버리고 잘난 체도 하지 말고 그래야 되겠습니까? 안 그래야 되겠습니까?"
  },
  {
    source: "260125 주일예배(계5장) 일곱 인으로 봉한 책",
    date: "260125",
    quote: "그럼 이겼기 때문에 인을 떼고 펼친다는 말은 무슨 말이냐, 마귀하고 싸워서 이겼기 때문에 마귀에게 지장을 안 받겠지요."
  },
  {
    source: "260104 주일예배(계4장) 하나님의 영계 보좌",
    date: "260104",
    quote: "하늘에서 이룬 것과 같이 이 땅에서 이룬다는 말을 이렇게 두고 하고 있다는 것을 여러분들 아셔야 하겠습니다."
  },
  {
    source: "251228 주일예배(계2-3장) 일곱 교회 사자에게 보낸 편지",
    date: "251228",
    quote: "그러면 이긴 자가 받는 것이 무엇인가, 이 말들은 이기므로 장차 될 일이지요."
  },
  {
    source: "251221 주일예배(계1:9-20) 계시록 전장 결론과 시작",
    date: "251221",
    quote: "그럼 이러한 일이 이루어져야 되겠지요. 구약성경에 있는 것처럼 신약에 예수님이 그대로 이루어진 것처럼 이렇게 예언된 대로 오늘날 있어야만이 믿을 수 있지 않겠습니까?"
  },
  {
    source: "251217 수요예배(계1:1-8) 계시록 전장 결론과 시작",
    date: "251217",
    quote: "오늘날 우리는 이 말씀을 통달하는 것은 물론이요, 이 말씀대로 이루어진 실체까지 증거하고 있지요. 세계에서 이런 곳은 없습니다."
  }
];

const button = document.querySelector("#generateButton");
const quoteGrid = document.querySelector("#quoteGrid");
const template = document.querySelector("#quoteTemplate");
const editionDate = document.querySelector("#editionDate");
const sourceCount = document.querySelector("#sourceCount");
const savedSection = document.querySelector("#savedSection");
const savedList = document.querySelector("#savedList");
const savedCount = document.querySelector("#savedCount");
const usedQuoteStorageKey = "ssn-rv-used-quotes-v1";
const savedQuoteStorageKey = "ssn-rv-saved-quotes-v1";

const formatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
});

editionDate.textContent = formatter.format(new Date());
sourceCount.textContent = `${quotePool.length} excerpts · ${new Set(quotePool.map((item) => item.source)).size} sources`;

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function quoteId(quote) {
  return `${quote.source}::${quote.quote}`;
}

function getUsedQuoteIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(usedQuoteStorageKey)) || []);
  } catch {
    return new Set();
  }
}

function saveUsedQuoteIds(usedQuoteIds) {
  localStorage.setItem(usedQuoteStorageKey, JSON.stringify([...usedQuoteIds]));
}

function getSavedQuotes() {
  try {
    return JSON.parse(localStorage.getItem(savedQuoteStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveSavedQuotes(savedQuotes) {
  localStorage.setItem(savedQuoteStorageKey, JSON.stringify(savedQuotes));
}

function isQuoteSaved(quote) {
  return getSavedQuotes().some((savedQuote) => quoteId(savedQuote) === quoteId(quote));
}

function toggleSavedQuote(quote) {
  const savedQuotes = getSavedQuotes();
  const id = quoteId(quote);
  const nextSavedQuotes = savedQuotes.some((savedQuote) => quoteId(savedQuote) === id)
    ? savedQuotes.filter((savedQuote) => quoteId(savedQuote) !== id)
    : [quote, ...savedQuotes];

  saveSavedQuotes(nextSavedQuotes);
  renderSavedQuotes();
  renderQuotes(currentQuotes);
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-999px";
  document.body.append(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  return copied;
}

function showCopiedState(buttonElement) {
  buttonElement.textContent = "Copied";
  buttonElement.classList.add("is-copied");

  window.setTimeout(() => {
    buttonElement.textContent = "Copy";
    buttonElement.classList.remove("is-copied");
  }, 1400);
}

async function copyQuoteText(quote, buttonElement) {
  const copiedText = `${quote.quote}\n\n${quote.source}`;

  try {
    await navigator.clipboard.writeText(copiedText);
    showCopiedState(buttonElement);
  } catch {
    if (fallbackCopyText(copiedText)) {
      showCopiedState(buttonElement);
    } else {
      buttonElement.textContent = "Copy failed";
    }
  }
}

function pickFiveDifferentSourcesFrom(pool) {
  const grouped = pool.reduce((sources, quote) => {
    if (!sources.has(quote.source)) {
      sources.set(quote.source, []);
    }
    sources.get(quote.source).push(quote);
    return sources;
  }, new Map());

  const selectedQuotes = shuffle([...grouped.values()])
    .slice(0, 5)
    .map((quotes) => shuffle(quotes)[0]);

  if (selectedQuotes.length === 5) {
    return selectedQuotes;
  }

  const selectedQuoteIds = new Set(selectedQuotes.map(quoteId));
  const remainingQuotes = shuffle(pool).filter((quote) => !selectedQuoteIds.has(quoteId(quote)));

  return [...selectedQuotes, ...remainingQuotes].slice(0, 5);
}

function pickFiveDifferentSources() {
  let usedQuoteIds = getUsedQuoteIds();
  let availableQuotes = quotePool.filter((quote) => !usedQuoteIds.has(quoteId(quote)));

  if (availableQuotes.length < 5) {
    usedQuoteIds = new Set();
    availableQuotes = quotePool;
  }

  const selectedQuotes = pickFiveDifferentSourcesFrom(availableQuotes);
  selectedQuotes.forEach((quote) => usedQuoteIds.add(quoteId(quote)));
  saveUsedQuoteIds(usedQuoteIds);

  return selectedQuotes;
}

function renderQuotes(quotes) {
  currentQuotes = quotes;
  quoteGrid.replaceChildren();

  quotes.forEach((item) => {
    const node = template.content.cloneNode(true);
    const copyButton = node.querySelector(".copy-button");
    const saveButton = node.querySelector(".save-button");
    const saved = isQuoteSaved(item);

    node.querySelector(".source-title").textContent = item.source;
    node.querySelector("blockquote").textContent = item.quote;
    copyButton.addEventListener("click", () => copyQuoteText(item, copyButton));
    saveButton.textContent = saved ? "Saved" : "Save";
    saveButton.classList.toggle("is-saved", saved);
    saveButton.setAttribute("aria-pressed", String(saved));
    saveButton.addEventListener("click", () => toggleSavedQuote(item));
    quoteGrid.append(node);
  });
}

function renderSavedQuotes() {
  const savedQuotes = getSavedQuotes();
  savedList.replaceChildren();
  savedCount.textContent = `${savedQuotes.length} saved`;
  savedSection.hidden = false;

  if (savedQuotes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "saved-empty";
    empty.textContent = "No saved quotes yet.";
    savedList.append(empty);
    return;
  }

  savedQuotes.forEach((item) => {
    const article = document.createElement("article");
    const actions = document.createElement("div");
    const buttonGroup = document.createElement("div");
    const source = document.createElement("span");
    const copyButton = document.createElement("button");
    const removeButton = document.createElement("button");
    const quote = document.createElement("blockquote");

    article.className = "saved-item";
    actions.className = "saved-actions source-row";
    buttonGroup.className = "quote-actions";
    source.className = "source-title";
    copyButton.className = "copy-button";
    removeButton.className = "remove-button";
    copyButton.type = "button";
    removeButton.type = "button";

    source.textContent = item.source;
    copyButton.textContent = "Copy";
    removeButton.textContent = "Remove";
    quote.textContent = item.quote;
    copyButton.addEventListener("click", () => copyQuoteText(item, copyButton));
    removeButton.addEventListener("click", () => toggleSavedQuote(item));

    buttonGroup.append(copyButton, removeButton);
    actions.append(source, buttonGroup);
    article.append(actions, quote);
    savedList.append(article);
  });
}

button.addEventListener("click", () => {
  renderQuotes(pickFiveDifferentSources());
});

let currentQuotes = [];
renderSavedQuotes();
renderQuotes(pickFiveDifferentSources());
