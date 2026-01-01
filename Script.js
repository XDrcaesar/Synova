// عناصر HTML
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const newAdviceBtn = document.getElementById('newAdviceBtn');
const adviceCard = document.getElementById('adviceCard');
const languageBtn = document.getElementById('languageBtn');
const favoritesBtn = document.getElementById('favoritesBtn');

// نصائح طبية
const advices = [
  "اشرب ماء كافي يوميًا لتحافظ على وظائف جسمك.",
  "نم 7-8 ساعات يوميًا لصحة عقلية وجسدية أفضل.",
  "مارس الرياضة بانتظام لتحسين الدورة الدموية.",
  "اغسل يديك باستمرار لتجنب الأمراض.",
  "تناول الخضروات والفواكه يوميًا لتحسين المناعة.",
  "تجنب التدخين للحفاظ على صحة الرئة والقلب.",
  "احرص على فحص ضغط الدم بانتظام.",
  "التعرض للشمس لمدة قصيرة لتجديد فيتامين D."
];

// المفضلة من LocalStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// فتح / غلق القائمة الجانبية
menuBtn.addEventListener('click', () => {
  sideMenu.style.right = sideMenu.style.right === '0px' ? '-250px' : '0px';
});

// توليد نصيحة جديدة
newAdviceBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * advices.length);
  const text = advices[randomIndex];

  // تأثير fade
  adviceCard.style.opacity = 0;
  setTimeout(() => {
    adviceCard.textContent = text;
    adviceCard.style.opacity = 1;
  }, 300);

  // إضافة للمفضلة تلقائيًا (اختياري)
  if(!favorites.includes(text)) favorites.push(text);
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// تغيير اللغة AR/EN
languageBtn.addEventListener('click', () => {
  if(document.documentElement.lang === 'en') {
    document.documentElement.lang = 'ar';
    languageBtn.textContent = 'EN';
    document.body.style.direction = 'rtl';
  } else {
    document.documentElement.lang = 'en';
    languageBtn.textContent = 'AR';
    document.body.style.direction = 'ltr';
  }
});

// زر المفضلة يعرضها في Card
favoritesBtn.addEventListener('click', () => {
  if(favorites.length === 0){
    adviceCard.textContent = "لا يوجد نصوص مفضلة بعد.";
    return;
  }
  adviceCard.style.opacity = 0;
  setTimeout(() => {
    adviceCard.textContent = favorites.join("\n• ");
    adviceCard.style.opacity = 1;
  }, 300);
});
