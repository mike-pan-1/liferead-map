const defaultFeishuMap = 'https://my.feishu.cn/docx/ROPcdHg2CoOkawx4oaEcR89jngd?openbrd=1&doc_app_id=501&blockId=FB71dfb9hoftmmx6RZEcqnewnlb&blockType=whiteboard&blockToken=WvHTwpN8hhxAazbDUzUcgzysnfg#FB71dfb9hoftmmx6RZEcqnewnlb';

const stages = [
  { id: 'high-school', name: '高中', desc: '在标准答案之外，保留一点好奇心。建立自己的坐标，也建立与世界相处的底气。' },
  { id: 'after-exam', name: '高考后', desc: '短暂地离开熟悉的轨道，去看看更大的世界，再决定自己要驶向哪里。' },
  { id: 'university', name: '大学', desc: '把四年过成一座开放的图书馆。广泛探索，再认真选择值得长期投入的方向。' },
  { id: 'freshman', name: '大一', desc: '第一次拥有完整的自我时间。先扩大感知，再找到真正让你着迷的问题。' },
  { id: 'senior', name: '大四', desc: '站在校园与社会的交界处，重新审视选择、能力和你想成为的人。' },
  { id: 'career', name: '工作后', desc: '在复杂的现实里保持清醒。让阅读成为恢复判断力、更新自己的方式。' },
  { id: 'data', name: '数据分析', desc: '从数字里看见模式，在不确定性中做出更好的判断与表达。' },
  { id: 'ai', name: 'AI 相关', desc: '理解正在改变世界的技术，也重新思考人的创造力与边界。' },
  { id: 'psychology', name: '心理学', desc: '理解情绪、能量与行为模式，在照顾自己的同时，建立更有韧性的生活。' }
];

const books = [
  { id:'mindset', stages:['high-school','after-exam'], title:'终身成长', coverTitle:'终身\n成长', author:'卡罗尔·德韦克', tag:'MINDSET / 心智', color:'red', intro:'能力不是固定的，真正重要的是你如何看待自己的可能性。', nodes:['固定型思维 vs. 成长型思维','失败：一次关于策略的反馈','把“还不会”留在句子里'] },
  { id:'sapiens', stages:['high-school','university'], title:'人类简史', coverTitle:'人类\n简史', author:'尤瓦尔·赫拉利', tag:'HISTORY / 视野', color:'sage', intro:'从认知革命到科技革命，重新理解我们身处的这段人类故事。', nodes:['虚构：让陌生人协作','农业革命：历史的骗局？','科技革命与未来的人类'] },
  { id:'walden', stages:['high-school','after-exam'], title:'瓦尔登湖', coverTitle:'瓦尔登\n湖', author:'亨利·戴维·梭罗', tag:'LIFE / 自在', color:'yellow', intro:'在喧闹的世界里，练习简朴地生活，和自己待在一起。', nodes:['我生活的地方，我为何生活','拥有多少，才算足够','四季：时间的另一种尺度'] },
  { id:'designing', stages:['after-exam','university'], title:'设计你的人生', coverTitle:'设计你\n的人生', author:'比尔·博内特 / 戴夫·伊万斯', tag:'LIFE DESIGN / 选择', color:'blue', intro:'人生没有唯一正确的路线图，但可以用设计思维不断迭代。', nodes:['重构：换一个问题','原型：先试过再决定','三个版本的五年计划'] },
  { id:'lean', stages:['university','freshman'], title:'精益创业', coverTitle:'精益\n创业', author:'埃里克·莱斯', tag:'CREATE / 行动', color:'ink', intro:'把想法带到真实世界，用最小成本换来最快的学习。', nodes:['价值假设与增长假设','最小可行产品','构建—衡量—学习'] },
  { id:'deepwork', stages:['senior','career'], title:'深度工作', coverTitle:'深度\n工作', author:'卡尔·纽波特', tag:'FOCUS / 专注', color:'kraft', intro:'在被消息切碎的时代，重新获得专注思考和创造的能力。', nodes:['深度工作是稀缺能力','拥抱无聊','像经商一样执行'] },
  { id:'storytelling', stages:['career','data'], title:'用数据讲故事', coverTitle:'用数据\n讲故事', author:'科尔·努斯鲍默·纳夫利克', tag:'DATA / 表达', color:'red', intro:'数据不是结论。好的分析，最终要让人看见、理解并行动。', nodes:['数据、视觉与故事','选择有效的图表','像设计师一样呈现'] },
  { id:'signal', stages:['data','ai'], title:'信号与噪声', coverTitle:'信号\n与噪声', author:'纳特·西尔弗', tag:'DATA / 判断', color:'sage', intro:'预测不是水晶球，而是一门与不确定性相处的学问。', nodes:['概率思维','模型与现实的距离','从错误中校准判断'] },
  { id:'ai2041', stages:['ai','career'], title:'AI 2041', coverTitle:'AI\n2041', author:'李开复 / 陈楸帆', tag:'AI / 想象', color:'yellow', intro:'十个关于未来的故事，十次对技术、社会与人的想象。', nodes:['技术如何进入日常','工作会被怎样重写','在智能时代保留人性'] },
  { id:'anti-burnout', stages:['psychology'], title:'反倦怠能量站', coverTitle:'反倦怠\n能量站', author:'心理学主题书单', tag:'PSYCHOLOGY / 能量', color:'blue', intro:'识别倦怠的信号，重新分配自己的注意力与能量，找回可持续的生活节奏。', nodes:['倦怠：身体与心理的求救信号','能量管理，而不只是时间管理','建立可持续的恢复系统'], feishu:'https://my.feishu.cn/docx/ROPcdHg2CoOkawx4oaEcR89jngd?openbrd=1&doc_app_id=501&blockId=FB71dfb9hoftmmx6RZEcqnewnlb&blockType=whiteboard&blockToken=WvHTwpN8hhxAazbDUzUcgzysnfg#FB71dfb9hoftmmx6RZEcqnewnlb' }
];

let activeStage = 'high-school';
let currentBook = null;
const cart = new Map();
const stageList = document.querySelector('#stageList');
const bookGrid = document.querySelector('#bookGrid');
const stageTitle = document.querySelector('#stageTitle');
const stageDescription = document.querySelector('#stageDescription');
const bookCount = document.querySelector('#bookCount');
const mindmapContent = document.querySelector('#mindmapContent');
const cartButton = document.querySelector('#cartButton');
const cartCount = document.querySelector('#cartCount');
const cartPanel = document.querySelector('#cartPanel');
const cartItems = document.querySelector('#cartItems');
const cartBackdrop = document.querySelector('#cartBackdrop');

function track(eventName, params = {}) {
  // 原有 GA4 直接发送方式已停用，改由 GTM 监听 dataLayer。
  // if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
  console.info('[GTM]', eventName, params);
}

function renderStages() {
  stageList.innerHTML = stages.map(stage => `<button class="stage-btn ${stage.id === activeStage ? 'active' : ''}" data-stage="${stage.id}">${stage.name}</button>`).join('');
  stageList.querySelectorAll('.stage-btn').forEach(button => button.addEventListener('click', () => {
    activeStage = button.dataset.stage;
    renderStages();
    renderBooks();
    track('select_content', { content_type: 'life_stage', item_id: activeStage });
  }));
}

function renderBooks() {
  const stage = stages.find(item => item.id === activeStage);
  const matchingBooks = books.filter(book => book.stages.includes(activeStage));
  stageTitle.textContent = stage.name;
  stageDescription.textContent = stage.desc;
  bookCount.textContent = `${String(matchingBooks.length).padStart(2, '0')} BOOKS`;
  bookGrid.innerHTML = matchingBooks.map((book, index) => `<article class="book-card fade-in" data-book="${book.id}" style="animation-delay:${index * 80}ms"><div class="cover ${book.color}"><span class="cover-meta">阅途 / ${String(index + 1).padStart(2,'0')}</span><span class="cover-title">${book.coverTitle.replace(/\n/g, '<br>')}</span><span class="cover-meta">${book.tag.split(' / ')[0]}</span></div><div class="book-info"><h3>${book.title}</h3><p>${book.author}</p><span class="book-tag">${book.tag}</span><button class="add-to-cart" type="button" data-add-book="${book.id}">加入购物车 <span aria-hidden="true">+</span></button></div></article>`).join('');
  bookGrid.querySelectorAll('.book-card').forEach(card => card.addEventListener('click', () => openBook(card.dataset.book)));
  bookGrid.querySelectorAll('[data-add-book]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    addToCart(button.dataset.addBook);
  }));
}

function addToCart(bookId) {
  const book = books.find(item => item.id === bookId);
  const quantity = (cart.get(bookId) || 0) + 1;
  cart.set(bookId, quantity);
  track('add_to_cart', {
    content_type: 'book',
    item_id: book.id,
    item_name: book.title,
    ecommerce: {
      items: [{ item_id: book.id, item_name: book.title, item_category: book.tag.split(' / ')[0], quantity }]
    }
  });
  renderCart();
  openCart();
}

function removeFromCart(bookId) {
  cart.delete(bookId);
  renderCart();
}

function renderCart() {
  const totalItems = [...cart.values()].reduce((total, quantity) => total + quantity, 0);
  cartCount.textContent = totalItems;
  if (!cart.size) {
    cartItems.innerHTML = '<p class="cart-empty">购物车还是空的。<br>挑一本，作为你的下一步。</p>';
    return;
  }
  cartItems.innerHTML = [...cart.entries()].map(([bookId, quantity]) => {
    const book = books.find(item => item.id === bookId);
    return `<div class="cart-item"><div><strong>${book.title}</strong><small>${book.author}</small></div><span class="cart-quantity">×${quantity}</span><button class="remove-cart-item" type="button" data-remove-book="${book.id}" aria-label="移除 ${book.title}">×</button></div>`;
  }).join('');
  cartItems.querySelectorAll('[data-remove-book]').forEach(button => button.addEventListener('click', () => removeFromCart(button.dataset.removeBook)));
}

function openCart() {
  cartPanel.classList.add('open');
  cartPanel.setAttribute('aria-hidden', 'false');
  cartBackdrop.hidden = false;
}

function closeCart() {
  cartPanel.classList.remove('open');
  cartButton.focus();
  cartPanel.setAttribute('aria-hidden', 'true');
  cartBackdrop.hidden = true;
}

function openBook(bookId) {
  const book = books.find(item => item.id === bookId);
  currentBook = book;
  mindmapContent.innerHTML = `<div class="mindmap-content fade-in"><div class="selected-cover ${book.color}"><span class="cover-meta">NOW READING / ${book.tag.split(' / ')[0]}</span><h3>${book.title}</h3><span class="cover-meta">${book.author}</span></div><p>${book.intro}</p><div class="map-nodes">${book.nodes.map((node, index) => `<div class="map-node">${node}<small>0${index + 1} / KEY IDEA</small></div>`).join('')}</div><a class="feishu-link" href="${book.feishu || defaultFeishuMap}" target="_blank" rel="noreferrer" data-book-link="${book.id}">打开飞书思维导图 ↗</a></div>`;
  document.querySelector('#mindmapPanel').scrollIntoView({ behavior:'smooth', block:'nearest' });
  track('view_item', { content_type: 'book', item_id: book.id, item_name: book.title });
  document.querySelector('.feishu-link').addEventListener('click', () => track('mind_map_link_click', { book_name: book.title, book_author: book.author }));
}

document.querySelector('#closePanel').addEventListener('click', () => {
  if (currentBook) {
    track('close_book', { book_name: currentBook.title, book_author: currentBook.author });
    currentBook = null;
  }
  mindmapContent.innerHTML = '<div class="panel-placeholder">从书架中选择一本书。<strong>让一本书<br>成为你的下一步。</strong>每本书都配有一份思维导图，帮助你更快进入内容。<span class="note-index">CLICK A BOOK TO BEGIN</span></div>';
});
document.querySelector('#randomBook').addEventListener('click', () => {
  const matchingBooks = books.filter(book => book.stages.includes(activeStage));
  openBook(matchingBooks[Math.floor(Math.random() * matchingBooks.length)].id);
  track('random_book', { stage: activeStage });
});

cartButton.addEventListener('click', openCart);
document.querySelector('#closeCart').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);

mindmapContent.innerHTML = '<div class="panel-placeholder">从书架中选择一本书。<strong>让一本书<br>成为你的下一步。</strong>每本书都配有一份思维导图，帮助你更快进入内容。<span class="note-index">CLICK A BOOK TO BEGIN</span></div>';
renderCart();
renderStages();
renderBooks();
