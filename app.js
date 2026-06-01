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
  }
];

const button = document.querySelector("#generateButton");
const quoteGrid = document.querySelector("#quoteGrid");
const template = document.querySelector("#quoteTemplate");
const editionDate = document.querySelector("#editionDate");
const sourceCount = document.querySelector("#sourceCount");

const formatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
});

editionDate.textContent = formatter.format(new Date());
sourceCount.textContent = `${new Set(quotePool.map((item) => item.source)).size} sources`;

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function pickFiveDifferentSources() {
  const grouped = quotePool.reduce((sources, quote) => {
    if (!sources.has(quote.source)) {
      sources.set(quote.source, []);
    }
    sources.get(quote.source).push(quote);
    return sources;
  }, new Map());

  return shuffle([...grouped.values()])
    .slice(0, 5)
    .map((quotes) => shuffle(quotes)[0]);
}

function renderQuotes(quotes) {
  quoteGrid.replaceChildren();

  quotes.forEach((item) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".source-title").textContent = item.source;
    node.querySelector("blockquote").textContent = item.quote;
    quoteGrid.append(node);
  });
}

button.addEventListener("click", () => {
  renderQuotes(pickFiveDifferentSources());
});

renderQuotes(pickFiveDifferentSources());
