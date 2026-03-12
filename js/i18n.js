// ============================================================
// YOHAKU studio — i18n (JP / EN / TH)
// ============================================================

const translations = {
  jp: {
    nav_home: 'Home', nav_about: 'About', nav_artists: 'Artists', nav_store: 'Store', nav_news: 'News', nav_contact: 'Contact', nav_cart: 'カート',
    hero_eyebrow: 'アート・トイ / ソフビ / デザイナーズトイ', hero_title: '余白が、世界を繋ぐ。', hero_subtitle: 'アーティストと出会い、アートと繋がる。', hero_cta: 'Explore Gallery',
    home_featured_label: '01 — Featured', home_featured_title: '注目のアーティスト', home_featured_link: 'すべてのアーティストを見る',
    home_store_label: '02 — Store', home_store_title: '最新入荷', home_store_link: 'ストアを見る',
    home_news_label: '03 — News', home_news_title: 'お知らせ', home_news_link: 'すべてのニュースを見る',
    home_about_quote: '「余白」とは、奪い合うのではなく\n補い合うための空間。', home_about_sub: '—  YOHAKUstudio',
    about_label: 'About Us', about_title: '余白の哲学',
    about_manifesto: 'あるものを取り合うのではなく、空いた余白に自分にしかできないことで埋めていく。自分にはできないことは、周りの誰かがその余白を埋める。そうして世界中のアーティストもお客様も、それぞれの「余白」で輝ける場所をつくっていく。',
    about_v1_num: '01', about_v1_title: '余白に出会う', about_v1_text: 'アーティストの創造性を最大限に引き出すために、YOHAKUstudioは余白との出会いを作ります。まだ見ぬアートとの出会いを作る場となります。',
    about_v2_num: '02', about_v2_title: '世界と繋がる', about_v2_text: '日本・タイ・世界各地のアーティストとのネットワークを通じて、独自の作品をグローバルな舞台へ届けます。',
    about_v3_num: '03', about_v3_title: 'Win-Winの輪', about_v3_text: 'アーティスト、コレクター、お客様、すべての関係者が豊かになれる「輪」を広げることが私たちのミッションです。',
    artists_label: 'Artists / Gallery', artists_title: 'アーティスト', artists_filter_all: 'All', artists_filter_jp: 'Japan', artists_filter_th: 'Thailand', artists_filter_intl: 'International', artists_view_works: '作品を見る',
    store_label: 'Store', store_title: 'オンラインストア', store_filter_all: 'All', store_filter_sofubi: 'Sofubi', store_filter_toy: 'Art Toy', store_filter_other: 'Other',
    store_add_cart: 'カートに追加', store_limited: '限定', store_soldout: '売り切れ', store_intl_note: '海外発送対応 / International Shipping Available',
    cart_title: 'カート', cart_empty: 'カートは空です', cart_empty_sub: 'お気に入りの作品をカートに追加してください', cart_total: '小計', cart_checkout: 'チェックアウトへ', cart_remove: '削除',
    news_label: 'News', news_title: 'お知らせ', news_tag_new: '新着', news_tag_event: 'イベント', news_tag_collab: 'コラボ', news_tag_info: 'お知らせ',
    contact_label: 'Contact', contact_title: 'お問い合わせ', contact_subtitle: '作品のご購入・コラボレーション・アーティストエントリーなど、お気軽にお問い合わせください。',
    contact_name: 'お名前', contact_email: 'メールアドレス', contact_type: 'お問い合わせ種別',
    contact_type_purchase: '購入について', contact_type_collab: 'コラボレーション', contact_type_artist: 'アーティストエントリー', contact_type_other: 'その他',
    contact_message: 'メッセージ', contact_send: '送信する', contact_success: 'お問い合わせを受け付けました。3営業日以内にご連絡いたします。',
    footer_tagline: 'Art Toy × Global × Community', footer_pages: 'ページ', footer_legal: 'Legal', footer_privacy: 'プライバシーポリシー', footer_terms: '利用規約', footer_copy: '© 2025 YOHAKUstudio. All rights reserved.',
    about_activity_label: 'Activity', about_activity_title: 'グローバルエージェントとしての活動', about_activity_desc1: 'YOHAKUstudioは単なる販売店ではなく、アーティストの代理としてグローバルな舞台でのプロモーション・展示・流通を担うエージェントです。', about_activity_desc2: '日本・タイを拠点に、ヨーロッパや北米のコレクターとのコネクションを持ち、アーティストの作品が最良の環境で届けられるよう全力でサポートします。', about_activity_btn: 'アーティストとして参加する',
    artists_entry_label: 'Artist Entry', artists_entry_title: 'あなたの作品を、世界へ。', artists_entry_desc: 'YOHAKUstudioではアーティストエントリーを随時受け付けています。あなたの余白を、私たちと一緒に世界に広げましょう。', artists_entry_btn: 'エントリー詳細を見る',
    news_item1_date: '2025.11.20', news_item1_title: 'Leo Rattana × YOHAKUstudio ポップアップ展示会 開催決定（東京・渋谷）',
    news_item2_date: '2025.11.05', news_item2_title: 'NOIR — Black Edition 入荷のお知らせ｜数量限定',
    news_item3_date: '2025.10.18', news_item3_title: 'Mika Hana × 海外ブランド コラボレーション商品 詳細発表',
    news_item4_date: '2025.10.01', news_item4_title: 'YOHAKUstudio 公式サイトをオープンしました。オンラインストアもご利用いただけます。',
    news_item5_date: '2025.09.22', news_item5_title: 'Designercon Bangkok 2025 出展のご報告 — Leo Rattana新作が現地で大きな反響',
    news_item6_date: '2025.09.10', news_item6_title: 'YAKSHA — Bangkok Red 入荷。タイ神話をモチーフにした限定ソフビが遂に日本上陸。',
    news_item7_date: '2025.08.15', news_item7_title: 'Kenzo Yamada × 国内ギャラリーとのコラボレーション展示 開催（大阪）',
    news_item8_date: '2025.07.30', news_item8_title: 'アーティストエントリーの受け付けを開始しました。世界中のアーティストの応募を歓迎します。',
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_artists: 'Artists', nav_store: 'Store', nav_news: 'News', nav_contact: 'Contact', nav_cart: 'Cart',
    hero_eyebrow: 'Art Toy / Sofubi / Designer Toy', hero_title: 'Space that connects the world.', hero_subtitle: 'Where art meets its collector.', hero_cta: 'Explore Gallery',
    home_featured_label: '01 — Featured', home_featured_title: 'Featured Artists', home_featured_link: 'View All Artists',
    home_store_label: '02 — Store', home_store_title: 'New Arrivals', home_store_link: 'Visit Store',
    home_news_label: '03 — News', home_news_title: 'News', home_news_link: 'View All News',
    home_about_quote: '"YOHAKU" — space not to compete,\nbut to complement each other.', home_about_sub: '—  YOHAKUstudio',
    about_label: 'About Us', about_title: 'Philosophy of Space',
    about_manifesto: 'Rather than competing for what already exists, we fill the empty spaces with what only we can give. What we cannot do, someone around us can. This is how we create a world where every artist and every collector finds their own space to shine.',
    about_v1_num: '01', about_v1_title: 'Encounter Space', about_v1_text: 'To maximise artists\' creativity, YOHAKUstudio creates encounters with space. This is a place to forge encounters with unseen art.',
    about_v2_num: '02', about_v2_title: 'Connect Globally', about_v2_text: 'Through our network of artists from Japan, Thailand, and around the world, we bring unique works to the global stage.',
    about_v3_num: '03', about_v3_title: 'Win-Win Circle', about_v3_text: 'Our mission is to expand the circle where artists, collectors, and all stakeholders prosper together.',
    artists_label: 'Artists / Gallery', artists_title: 'Artists', artists_filter_all: 'All', artists_filter_jp: 'Japan', artists_filter_th: 'Thailand', artists_filter_intl: 'International', artists_view_works: 'View Works',
    store_label: 'Store', store_title: 'Online Store', store_filter_all: 'All', store_filter_sofubi: 'Sofubi', store_filter_toy: 'Art Toy', store_filter_other: 'Other',
    store_add_cart: 'Add to Cart', store_limited: 'Limited', store_soldout: 'Sold Out', store_intl_note: 'International Shipping Available',
    cart_title: 'Cart', cart_empty: 'Your cart is empty', cart_empty_sub: 'Add your favourite works to the cart', cart_total: 'Subtotal', cart_checkout: 'Proceed to Checkout', cart_remove: 'Remove',
    news_label: 'News', news_title: 'News', news_tag_new: 'New', news_tag_event: 'Event', news_tag_collab: 'Collab', news_tag_info: 'Info',
    contact_label: 'Contact', contact_title: 'Contact Us', contact_subtitle: 'For purchases, collaborations, artist entries, and all other enquiries, please feel free to reach out.',
    contact_name: 'Name', contact_email: 'Email', contact_type: 'Enquiry Type',
    contact_type_purchase: 'Purchase', contact_type_collab: 'Collaboration', contact_type_artist: 'Artist Entry', contact_type_other: 'Other',
    contact_message: 'Message', contact_send: 'Send Message', contact_success: 'Thank you for your message. We will reply within 3 business days.',
    footer_tagline: 'Art Toy × Global × Community', footer_pages: 'Pages', footer_legal: 'Legal', footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Use', footer_copy: '© 2025 YOHAKUstudio. All rights reserved.',
    about_activity_label: 'Activity', about_activity_title: 'Global Agent Activities', about_activity_desc1: 'YOHAKUstudio is not just a retailer, but an agent that handles promotion, exhibition, and distribution on a global stage on behalf of the artists.', about_activity_desc2: 'Based in Japan and Thailand, we have connections with collectors in Europe and North America, and we fully support our artists to ensure their works are delivered in the best possible environment.', about_activity_btn: 'Join as an Artist',
    artists_entry_label: 'Artist Entry', artists_entry_title: 'Bring your work to the world.', artists_entry_desc: 'YOHAKUstudio is always accepting artist entries. Let\'s expand your space to the world together.', artists_entry_btn: 'View Entry Details',
    news_item1_date: '20.11.2025', news_item1_title: 'Leo Rattana × YOHAKUstudio Pop-up Exhibition (Tokyo/Shibuya)',
    news_item2_date: '05.11.2025', news_item2_title: 'NOIR — Black Edition Arrival Notice | Limited Quantity',
    news_item3_date: '18.10.2025', news_item3_title: 'Mika Hana × Global Brand Collaboration Details Announced',
    news_item4_date: '01.10.2025', news_item4_title: 'YOHAKUstudio official website is now open. Online store is also available.',
    news_item5_date: '22.09.2025', news_item5_title: 'Report on exhibiting at Designercon Bangkok 2025 — Leo Rattana\'s new work received great response locally',
    news_item6_date: '10.09.2025', news_item6_title: 'YAKSHA — Bangkok Red is now in stock. Limited Sofubi inspired by Thai mythology finally lands in Japan.',
    news_item7_date: '15.08.2025', news_item7_title: 'Kenzo Yamada × Domestic Gallery Collaboration Exhibition (Osaka)',
    news_item8_date: '30.07.2025', news_item8_title: 'Artist entry is now open. We welcome applications from artists all over the world.',
  },
  th: {
    nav_home: 'หน้าแรก', nav_about: 'เกี่ยวกับเรา', nav_artists: 'ศิลปิน', nav_store: 'ร้านค้า', nav_news: 'ข่าวสาร', nav_contact: 'ติดต่อ', nav_cart: 'ตะกร้า',
    hero_eyebrow: 'อาร์ตทอย / โซฟูบิ / ดีไซเนอร์ทอย', hero_title: 'พื้นที่ว่าง เชื่อมโลก', hero_subtitle: 'พบศิลปิน สัมผัสงานศิลป์', hero_cta: 'สำรวจแกลเลอรี่',
    home_featured_label: '01 — แนะนำ', home_featured_title: 'ศิลปินแนะนำ', home_featured_link: 'ดูศิลปินทั้งหมด',
    home_store_label: '02 — ร้านค้า', home_store_title: 'สินค้ามาใหม่', home_store_link: 'เยี่ยมชมร้านค้า',
    home_news_label: '03 — ข่าวสาร', home_news_title: 'ข่าวสาร', home_news_link: 'ดูข่าวสารทั้งหมด',
    home_about_quote: '"โยฮาคุ" คือพื้นที่ไม่ใช่เพื่อแข่งขัน\nแต่เพื่อเติมเต็มซึ่งกันและกัน', home_about_sub: '—  YOHAKUstudio',
    about_label: 'เกี่ยวกับเรา', about_title: 'ปรัชญาแห่งพื้นที่ว่าง',
    about_manifesto: 'แทนที่จะแย่งชิงสิ่งที่มีอยู่ เราต่างเติมเต็มช่องว่างด้วยสิ่งที่มีเพียงเราเท่านั้นที่ทำได้ สิ่งที่เราทำไม่ได้ ก็มีใครสักคนรอบข้างที่จะเติมเต็ม นั่นคือวิธีที่เราสร้างโลกที่ทุกคนมีพื้นที่ของตัวเอง',
    about_v1_num: '01', about_v1_title: 'พบกับพื้นที่ว่าง', about_v1_text: 'เพื่อขับเคลื่อนความคิดสร้างสรรค์ของศิลปินให้ถึงขีดสุด YOHAKUstudio จะสร้างการพบกันกับพื้นที่ว่าง นี่คือสถานที่ที่จะสร้างการพบกันกับศิลปะที่ยังไม่เคยเห็น',
    about_v2_num: '02', about_v2_title: 'เชื่อมต่อทั่วโลก', about_v2_text: 'ผ่านเครือข่ายศิลปินจากญี่ปุ่น ไทย และทั่วโลก นำผลงานที่เป็นเอกลักษณ์มาสู่เวทีระดับโลก',
    about_v3_num: '03', about_v3_title: 'วงจรแห่งชัยชนะ', about_v3_text: 'ภารกิจของเราคือขยายวงจรที่ศิลปิน นักสะสม และทุกฝ่ายเจริญรุ่งเรืองไปด้วยกัน',
    artists_label: 'ศิลปิน / แกลเลอรี่', artists_title: 'ศิลปิน', artists_filter_all: 'ทั้งหมด', artists_filter_jp: 'ญี่ปุ่น', artists_filter_th: 'ไทย', artists_filter_intl: 'นานาชาติ', artists_view_works: 'ดูผลงาน',
    store_label: 'ร้านค้า', store_title: 'ร้านค้าออนไลน์', store_filter_all: 'ทั้งหมด', store_filter_sofubi: 'โซฟูบิ', store_filter_toy: 'อาร์ตทอย', store_filter_other: 'อื่นๆ',
    store_add_cart: 'เพิ่มลงตะกร้า', store_limited: 'จำกัด', store_soldout: 'หมดแล้ว', store_intl_note: 'รองรับการจัดส่งระหว่างประเทศ',
    cart_title: 'ตะกร้าสินค้า', cart_empty: 'ตะกร้าของคุณว่างเปล่า', cart_empty_sub: 'เพิ่มผลงานที่คุณชื่นชอบลงในตะกร้า', cart_total: 'ยอดรวม', cart_checkout: 'ดำเนินการชำระเงิน', cart_remove: 'ลบ',
    news_label: 'ข่าวสาร', news_title: 'ข่าวสาร', news_tag_new: 'ใหม่', news_tag_event: 'อีเวนต์', news_tag_collab: 'คอลแลบ', news_tag_info: 'ข้อมูล',
    contact_label: 'ติดต่อ', contact_title: 'ติดต่อเรา', contact_subtitle: 'สำหรับการซื้อสินค้า ความร่วมมือ การสมัครศิลปิน และสอบถามทั่วไป',
    contact_name: 'ชื่อ', contact_email: 'อีเมล', contact_type: 'ประเภทการสอบถาม',
    contact_type_purchase: 'การซื้อสินค้า', contact_type_collab: 'ความร่วมมือ', contact_type_artist: 'สมัครศิลปิน', contact_type_other: 'อื่นๆ',
    contact_message: 'ข้อความ', contact_send: 'ส่งข้อความ', contact_success: 'ขอบคุณสำหรับข้อความของคุณ เราจะตอบกลับภายใน 3 วันทำการ',
    footer_tagline: 'Art Toy × Global × Community', footer_pages: 'หน้า', footer_legal: 'กฎหมาย', footer_privacy: 'นโยบายความเป็นส่วนตัว', footer_terms: 'ข้อกำหนดการใช้งาน', footer_copy: '© 2025 YOHAKUstudio. All rights reserved.',
    about_activity_label: 'กิจกรรม', about_activity_title: 'กิจกรรมตัวแทนระดับโลก', about_activity_desc1: 'YOHAKUstudio ไม่ใช่แค่ร้านค้าปลีก แต่เป็นตัวแทนจัดการส่งเสริมการขาย นิทรรศการ และการจัดจำหน่ายในระดับโลกในนามของศิลปิน', about_activity_desc2: 'เรามีฐานอยู่ในประเทศญี่ปุ่นและไทย โดยมีเครือข่ายนักสะสมในยุโรปและอเมริกาเหนือ เราสนับสนุนศิลปินของเราอย่างเต็มที่เพื่อให้แน่ใจว่าผลงานของพวกเขาถูกส่งมอบในสภาพแวดล้อมที่ดีที่สุด', about_activity_btn: 'เข้าร่วมในฐานะศิลปิน',
    artists_entry_label: 'สมัครศิลปิน', artists_entry_title: 'นำผลงานของคุณสู่สายตาโลก', artists_entry_desc: 'YOHAKUstudio เปิดรับสมัครศิลปินเสมอ มาร่วมขยายพื้นที่ว่างของคุณสู่โลกกว้างไปกับเรา', artists_entry_btn: 'ดูรายละเอียดการสมัคร',
    news_item1_date: '20.11.2025', news_item1_title: 'Leo Rattana × YOHAKUstudio นิทรรศการป๊อปอัป (โตเกียว/ชิบูย่า)',
    news_item2_date: '05.11.2025', news_item2_title: 'NOIR — Black Edition ประกาศสินค้าเข้า | จำนวนจำกัด',
    news_item3_date: '18.10.2025', news_item3_title: 'Mika Hana × แบรนด์ระดับโลก ประกาศรายละเอียดสินค้าร่วม',
    news_item4_date: '01.10.2025', news_item4_title: 'เปิดตัวเว็บไซต์อย่างเป็นทางการของ YOHAKUstudio แล้ว พร้อมบริการร้านค้าออนไลน์',
    news_item5_date: '22.09.2025', news_item5_title: 'รายงานการร่วมจัดแสดงในงาน Designercon Bangkok 2025 — ผลงานใหม่ของ Leo Rattana ได้รับเสียงตอบรับอย่างดีเยี่ยม',
    news_item6_date: '10.09.2025', news_item6_title: 'YAKSHA — Bangkok Red สินค้าเข้าแล้ว โซฟูบิรุ่นพิเศษที่ได้แรงบันดาลใจจากตำนานไทยมาถึงญี่ปุ่นแล้ว',
    news_item7_date: '15.08.2025', news_item7_title: 'Kenzo Yamada × นิทรรศการความร่วมมือกับแกลเลอรีในประเทศ (โอซาก้า)',
    news_item8_date: '30.07.2025', news_item8_title: 'เปิดรับสมัครศิลปินแล้ว เรายินดีต้อนรับการสมัครจากศิลปินทั่วโลก',
  }
};

let currentLang = localStorage.getItem('yohaku_lang') || 'jp';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || (translations.jp[key]) || key;
}
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('yohaku_lang', lang);
  applyTranslations();
  updateLangButtons();
}
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { el.placeholder = val; }
    else { el.textContent = val; }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html')).replace(/\n/g, '<br>');
  });
}
function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
  applyTranslations();
  updateLangButtons();
});
