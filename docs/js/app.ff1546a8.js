(function(t){function e(e){for(var r,u,o=e[0],s=e[1],l=e[2],d=0,f=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/fixmoney/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"041f":function(t,e,n){"use strict";var r=n("0a6b"),a=n.n(r);a.a},"0613":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("4d97")),i=r.__importDefault(n("dd9d")),u=r.__importDefault(n("2b0e")),o=r.__importDefault(n("2f62"));u.default.use(o.default);const s=new o.default.Store({modules:{AppStore:a.default},plugins:[i.default]});e.default=s},"0670":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("ce5b"));n("bf40"),a.default.use(i.default),e.default=new i.default({icons:{iconfont:"mdi"},theme:{dark:!0}})},"0a6b":function(t,e,n){},"0ab0":function(t,e,n){"use strict";var r=n("c432"),a=n.n(r);a.a},"0e2f":function(t,e,n){"use strict";n.r(e);var r=n("b7b9"),a=n("8168");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("6e42");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"0eed":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("2fe1")),u=n("60a3");let o=class extends a.default{};r.__decorate([u.Prop({required:!0}),r.__metadata("design:type",Number)],o.prototype,"index",void 0),r.__decorate([u.Prop({required:!0}),r.__metadata("design:type",String)],o.prototype,"title",void 0),r.__decorate([u.Prop({required:!0}),r.__metadata("design:type",String)],o.prototype,"description",void 0),r.__decorate([u.Prop({required:!1}),r.__metadata("design:type",String)],o.prototype,"source",void 0),o=r.__decorate([i.default],o),e.default=o},1760:function(t,e,n){"use strict";var r=n("9697"),a=n.n(r);a.a},2995:function(t,e,n){},"2cee":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-block"},[t.left?n("img",{staticClass:"mr-4",attrs:{src:"/images/"+t.index+".svg"}}):t._e(),n("Card",{attrs:{index:t.index+1,title:t.$t("rules")[t.index].title,description:t.$t("rules")[t.index].description,source:t.$t("rules")[t.index].source}}),t.left?t._e():n("img",{staticClass:"ml-4",attrs:{src:"/images/"+t.index+".svg"}})],1)},a=[]},"2e25":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("2fe1")),u=n("60a3");let o=class extends a.default{};r.__decorate([u.Prop({required:!1}),r.__metadata("design:type",Boolean)],o.prototype,"smaller",void 0),o=r.__decorate([i.default],o),e.default=o},"3c53":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("2fe1")),u=n("60a3"),o=r.__importDefault(n("ae8d"));let s=class extends a.default{};r.__decorate([u.Prop({required:!0}),r.__metadata("design:type",Number)],s.prototype,"index",void 0),r.__decorate([u.Prop({required:!1}),r.__metadata("design:type",Boolean)],s.prototype,"left",void 0),s=r.__decorate([i.default({components:{Card:o.default}})],s),e.default=s},"3dfd":function(t,e,n){"use strict";n.r(e);var r=n("6f31"),a=n("6f68");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("034f");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"440e":function(t,e,n){"use strict";n.r(e);var r=n("579b"),a=n("a563");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("041f");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"48cd":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-box"},[n("div",{staticClass:"index-box"},[n("div",{staticClass:"index"},[t._v(t._s(t.index))])]),n("div",{staticClass:"text-box"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"description",domProps:{innerHTML:t._s(t.description)}}),t.source?n("a",{staticClass:"source",attrs:{href:t.source,target:"_blank"}},[t._v(t._s(t.$t("source")))]):t._e()])])},a=[]},"4ae0":function(t,e,n){},"4d97":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=n("fe0b"),i=n("6fc5");let u=class extends i.VuexModule{constructor(){super(...arguments),this.language=void 0}setLanguage(t){a.i18n.locale=t,this.language=t,document.title=a.i18n.t("title")}};r.__decorate([i.Mutation,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],u.prototype,"setLanguage",null),u=r.__decorate([i.Module({namespaced:!0,name:"AppStore"})],u),e.default=u},"562e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("2fe1")),u=n("60a3"),o=r.__importDefault(n("ae8d"));let s=class extends a.default{};r.__decorate([u.Prop({required:!0}),r.__metadata("design:type",Array)],s.prototype,"cardIndexArray",void 0),s=r.__decorate([i.default({components:{Card:o.default}})],s),e.default=s},"579b":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.cardIndexArray,(function(e){return n("Card",{key:e,attrs:{index:e+1,title:t.$t("rules")[e].title,description:t.$t("rules")[e].description,source:t.$t("rules")[e].source}})})),1)},a=[]},"5b65":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=n("fe0b"),u=r.__importDefault(n("2fe1")),o=r.__importDefault(n("0e2f")),s=r.__importDefault(n("f490")),l=r.__importDefault(n("d8c8")),c=r.__importDefault(n("440e")),d=n("4bb5"),f=d.namespace("AppStore");let p=class extends a.default{created(){document.title=i.i18n.t("title")}get metaInfo(){return{title:i.i18n.t("title")}}};r.__decorate([f.Mutation,r.__metadata("design:type",Function)],p.prototype,"setLanguage",void 0),p=r.__decorate([u.default({components:{GradientText:o.default,MainSubtitle:s.default,RuleAndImage:l.default,RuleList:c.default}})],p),e.default=p},"6e42":function(t,e,n){"use strict";var r=n("4ae0"),a=n.n(r);a.a},"6f31":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"main-container"},[n("div",{staticClass:"max-width"},[n("GradientText",[t._v(t._s(t.$t("mainTitle")))]),n("MainSubtitle",[t._v(t._s(t.$t("mainSubtitle")))]),n("GradientText",{attrs:{smaller:!0}},[t._v(t._s(t.$t("rulesTitle")))]),n("RuleAndImage",{attrs:{index:0}}),n("RuleList",{attrs:{cardIndexArray:[1]}}),n("RuleAndImage",{attrs:{index:2,left:!0}}),n("RuleList",{attrs:{cardIndexArray:[3,4,5,6,7,8,9,10,11]}}),n("div",{staticClass:"made-by",domProps:{innerHTML:t._s(t.$t("madeBy"))}}),n("v-btn",{attrs:{icon:"",text:""},on:{click:function(e){return t.setLanguage("en")}}},[t._v("🇺🇸")]),n("v-btn",{attrs:{icon:"",text:""},on:{click:function(e){return t.setLanguage("ru")}}},[t._v("🇷🇺")])],1)])],1)},a=[]},"6f68":function(t,e,n){"use strict";n.r(e);var r=n("5b65"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},7091:function(t,e,n){"use strict";var r=n("2995"),a=n.n(r);a.a},"72aa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.messages=void 0,e.messages={ru:{title:"Освойте финансовую грамотность",notFound:"Страница не найдена",source:"Почитать",mainTitle:"Финансовая грамотность – не для задротов",mainSubtitle:"Уметь распоряжаться со своими деньгами, перестать жить на кредитных картах и займах, отказаться от стрессов из-за отсутствия денег на жизнь не так тяжело, как вы думаете. Ниже — список из 12 простых привычек, как улучшить свое финансовое образование и сформировать капитал, даже если вы имеете тройку по математике и экономика – ваш самый не любимый предмет в ВУЗе.",rulesTitle:"Так что же делать?",rules:[{title:"Позаботьтесь о хорошей работе",description:"Основа крепкого бюджета — постоянная работа с хорошим доходом. Хороший — это такой, который покрывает базовые потребности — еду, жилье, интернет, одежду и технику, — и чтобы еще оставался запас. Недостаток денег с основной работы тут же сказывается на нервах и отношениях в семье и постепенно разрушает нашу финансовую эффективность.",source:"https://journal.tinkoff.ru/practical-finhacking/"},{title:"Тратьте меньше, чем получаете",description:"Умение ограничивать свои желания и откладывать деньги — ключевой навык в достижении финансовой свободы. Заведите себе правило каждый месяц откладывать не менее 10% своего дохода, вы ведь вполне сможете прожить на оставшиеся 90%, не так ли?<br />Для чего это нужно? В будущем вы сможете создать на основе этого капитала пассивные источники дохода, пополнить резервный фонд или скопить средства на что-то дорогостоящее.",source:"https://vc.ru/finance/122923-bazovye-pravila-finansovoy-gramotnosti"},{title:"Фиксируйте свои траты",description:'Это нужно, чтобы понять свой ежемесячный расход и разбить траты по категориям. Для этого я даже создал бота <a href="https://t.me/Budzhetnik_bot" target="_blank" rel="noopener">Бюджетник</a>. В процессе вы еще и урежете расходы. Увидите, куда что девается, станет жаль денег и включится жаба. Отлично!',source:"https://t.me/Budzhetnik_bot"},{title:"Заполнить экстренную свинью-копилку",description:'Скопить копилку на одну экстренную трату.<br/>Для больших городов РФ это что-то около 50 тысяч (замена бытовой техники, авторемонт). Это чтобы не залезать в кредит по мелочам.<br/>Отлично выполняется благодаря подсчету трат и планированному пополнению счёта. <br/><a href="https://t.me/Budzhetnik_bot" target="_blank" rel="noopener">Бюджетник</a> в помощь'},{title:"Инвестируйте в своё развитие",description:"В примере России карьерный путь почти в любой специализации за 3-5 лет стабильного развития должен выходить на уровень 150-200 тысяч рублей в месяц. До того момента, как вы не преодолете эту планку — направляйте основные инвестиции в свое развитие. Если в вашей специальности такие результаты являются очень редкими, то задумайтесь о смене специальности или о параллельном изучении нового дела. Если же дело в том, что вы не в крупном городе — добейтесь работы в крупном городе. Постройте свой личный бизнес-план по своему развитию и следуйте ему, а не пускайте свою жизнь на самотёк."},{title:"Откажитесь от незапланированных крупных покупок",description:"Каждый месяц составляйте свой бюджет. Выделите обязательные платежи (коммунальные услуги, транспорт, Интернет, различные абонементы и т. д.), средства на еду, развлечения и другие категории.<br />Если хотите сделать крупную покупку — запишите её в список и распланируйте бюджет на следующий месяц с её учётом. А текущий месяц можно использовать для раздумья, действительно нужна ли она."},{title:"Экономьте на вредных привычках",description:"Решение переосмыслить свой подход к финансам — идеальное время, чтобы попутно избавиться и от вредных привычек. Хватит убеждать себя в том, что вам не мешает алкоголь и никотин, а газировка совсем не такая вредная, как о ней говорят врачи-профессионалы. Вы сажаете своё здоровье за свой же счёт. Есть ли большая глупость в этом мире?"},{title:"Используйте все налоговые возможности вашей страны",description:"В России возможно получать налоговый вычет за инвестирование, лечение, обучение и т. д. Помимо этого, есть большое количество льгот для разных социальных групп. Потратьте небольшое количество времени и изучите всё об этой сфере.",source:"https://journal.tinkoff.ru/search/?q=%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3"},{title:"Закрыть все кредиты",description:"Выписать их в столбик от меньшего к большему и закрывать, закрывать, закрывать, пока все не задушите.<br />Нет надежных инвестиционных инструментов с доходностью 29% годовых. А потребкредиты под 29% вполне встречаются! Закрывая такой кредит, вы экономите себе годовую ставку — как бы инвестируете под 29%.<br /><br />Это важное упражнение. Отдавая кредиты, вы научитесь экономить часть заработанных денег, заранее отказываться от них."},{title:"Сделать резервный фонд для своей жизни",description:"После того, как вы сделали экстренную копилку и наладили свой учёт финансов, самое время уже сделать свой личный резервный фонд, как у государства. <br />Делается по аналогии с копилкой, с помощью откладывания 10-20% от месячного дохода. Состоит из 6 ваших месячных зарплат.<br /><br />Теперь вы можете легко поменять работодателя или найти новый источник дохода."},{title:"Начните инвестировать",description:"Инвестиции — одиннадцатый пункт, поскольку перед ним требуется кропотливая работа. Но если вы подойдете ответственно и сначала выполните все пункты, обозначенные выше, то можно смело начинать инвестировать. Вариантов куча, каждый требует отдельного изучения и имеет прямую корреляцию между доходностью и риском.<br />Включает в себя как банковские вклады, покупку квартиры для сдачи в аренду, так и вложения в криптовалюту или акции.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5458149/"},{title:"Пользуйтесь Бюджетником",description:"Мой бот помогает начать более ответственно относиться к своим финансам, начиная с простого и удобного способа контроллировать свои траты и составлять ежемесячный бюджет.",source:"https://t.me/Budzhetnik_bot"}],madeBy:'Этот сайт вдохновлен <a href="https://fixsleep.link/">вот этим пособием</a> по качественному сну. Код этого сайта <a href="https://github.com/insulineru/fixmoney">открыт</a>. Написано <a href="https://t.me/Budzhetnik_bot" target="_blank" rel="noopener" >Бюджетником 🐷</a> '},en:{title:"Освойте финансовую грамотность",notFound:"Страница не найдена",source:"Почитать",mainTitle:"Финансовая грамотность – не для задротов",mainSubtitle:"Уметь распоряжаться со своими деньгами, перестать жить на кредитных картах и займах, отказаться от стрессов из-за отсутствия денег на жизнь не так тяжело, как вы думаете. Ниже — список из 12 простых привычек, как улучшить свое финансовое образование и сформировать капитал, даже если вы имеете тройку по математике и экономика – ваш самый не любимый предмет в ВУЗе.",rulesTitle:"Так что же делать?",rules:[{title:"Позаботьтесь о хорошей работе",description:"Основа крепкого бюджета — постоянная работа с хорошим доходом. Хороший — это такой, который покрывает базовые потребности — еду, жилье, интернет, одежду и технику, — и чтобы еще оставался запас. Недостаток денег с основной работы тут же сказывается на нервах и отношениях в семье и постепенно разрушает нашу финансовую эффективность.",source:"https://journal.tinkoff.ru/practical-finhacking/"},{title:"Тратьте меньше, чем получаете",description:"Умение ограничивать свои желания и откладывать деньги — ключевой навык в достижении финансовой свободы. Заведите себе правило каждый месяц откладывать не менее 10% своего дохода, вы ведь вполне сможете прожить на оставшиеся 90%, не так ли?<br />Для чего это нужно? В будущем вы сможете создать на основе этого капитала пассивные источники дохода, пополнить резервный фонд или скопить средства на что-то дорогостоящее.",source:"https://vc.ru/finance/122923-bazovye-pravila-finansovoy-gramotnosti"},{title:"Фиксируйте свои траты",description:'Это нужно, чтобы понять свой ежемесячный расход и разбить траты по категориям. Для этого я даже создал бота <a href="https://t.me/Budzhetnik_bot" target="_blank" rel="noopener">Бюджетник</a>. В процессе вы еще и урежете расходы. Увидите, куда что девается, станет жаль денег и включится жаба. Отлично!',source:"https://t.me/Budzhetnik_bot"},{title:"Заполнить экстренную свинью-копилку",description:'Скопить копилку на одну экстренную трату.<br/>Для больших городов РФ это что-то около 50 тысяч (замена бытовой техники, авторемонт). Это чтобы не залезать в кредит по мелочам.<br/>Отлично выполняется благодаря подсчету трат и планированному пополнению счёта. <br/><a href="https://t.me/Budzhetnik_bot" target="_blank" rel="noopener">Бюджетник</a> в помощь'},{title:"Инвестируйте в своё развитие",description:"В примере России карьерный путь почти в любой специализации за 3-5 лет стабильного развития должен выходить на уровень 150-200 тысяч рублей в месяц. До того момента, как вы не преодолете эту планку — направляйте основные инвестиции в свое развитие. Если в вашей специальности такие результаты являются очень редкими, то задумайтесь о смене специальности или о параллельном изучении нового дела. Если же дело в том, что вы не в крупном городе — добейтесь работы в крупном городе. Постройте свой личный бизнес-план по своему развитию и следуйте ему, а не пускайте свою жизнь на самотёк."},{title:"Откажитесь от незапланированных крупных покупок",description:"Каждый месяц составляйте свой бюджет. Выделите обязательные платежи (коммунальные услуги, транспорт, Интернет, различные абонементы и т. д.), средства на еду, развлечения и другие категории.<br />Если хотите сделать крупную покупку — запишите её в список и распланируйте бюджет на следующий месяц с её учётом. А текущий месяц можно использовать для раздумья, действительно нужна ли она."},{title:"Экономьте на вредных привычках",description:"Решение переосмыслить свой подход к финансам — идеальное время, чтобы попутно избавиться и от вредных привычек. Хватит убеждать себя в том, что вам не мешает алкоголь и никотин, а газировка совсем не такая вредная, как о ней говорят врачи-профессионалы. Вы сажаете своё здоровье за свой же счёт. Есть ли большая глупость в этом мире?"},{title:"Используйте все налоговые возможности вашей страны",description:"В России возможно получать налоговый вычет за инвестирование, лечение, обучение и т. д. Помимо этого, есть большое количество льгот для разных социальных групп. Потратьте небольшое количество времени и изучите всё об этой сфере.",source:"https://journal.tinkoff.ru/search/?q=%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3"},{title:"Закрыть все кредиты",description:"Выписать их в столбик от меньшего к большему и закрывать, закрывать, закрывать, пока все не задушите.<br />Нет надежных инвестиционных инструментов с доходностью 29% годовых. А потребкредиты под 29% вполне встречаются! Закрывая такой кредит, вы экономите себе годовую ставку — как бы инвестируете под 29%.<br /><br />Это важное упражнение. Отдавая кредиты, вы научитесь экономить часть заработанных денег, заранее отказываться от них."},{title:"Сделать резервный фонд для своей жизни",description:"После того, как вы сделали экстренную копилку и наладили свой учёт финансов, самое время уже сделать свой личный резервный фонд, как у государства. <br />Делается по аналогии с копилкой, с помощью откладывания 10-20% от месячного дохода. Состоит из 6 ваших месячных зарплат.<br /><br />Теперь вы можете легко поменять работодателя или найти новый источник дохода."},{title:"Начните инвестировать",description:"Инвестиции — одиннадцатый пункт, поскольку перед ним требуется кропотливая работа. Но если вы подойдете ответственно и сначала выполните все пункты, обозначенные выше, то можно смело начинать инвестировать. Вариантов куча, каждый требует отдельного изучения и имеет прямую корреляцию между доходностью и риском.<br />Включает в себя как банковские вклады, покупку квартиры для сдачи в аренду, так и вложения в криптовалюту или акции.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5458149/"},{title:"Пользуйтесь Бюджетником",description:"Мой бот помогает начать более ответственно относиться к своим финансам, начиная с простого и удобного способа контроллировать свои траты и составлять ежемесячный бюджет.",source:"https://t.me/Budzhetnik_bot"}],madeBy:'Этот сайт вдохновлен <a href="https://fixsleep.link/">вот этим пособием</a> по качественному сну. Код этого сайта <a href="https://github.com/insulineru/fixmoney">открыт</a>.'}}},7502:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("2fe1"));let u=class extends a.default{};u=r.__decorate([i.default],u),e.default=u},8168:function(t,e,n){"use strict";n.r(e);var r=n("2e25"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"85ec":function(t,e,n){},9697:function(t,e,n){},"9d3e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-subtitle"},[t._t("default")],2)},a=[]},a563:function(t,e,n){"use strict";n.r(e);var r=n("562e"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},ae8d:function(t,e,n){"use strict";n.r(e);var r=n("48cd"),a=n("c05b");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("0ab0");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},b61b:function(t,e,n){"use strict";n.r(e);var r=n("7502"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},b7b9:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gradient-text",class:t.smaller?"smaller":""},[t._t("default")],2)},a=[]},c05b:function(t,e,n){"use strict";n.r(e);var r=n("0eed"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},c432:function(t,e,n){},cd49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("3dfd")),u=r.__importDefault(n("0613")),o=n("fe0b"),s=r.__importDefault(n("0670"));a.default.config.productionTip=!0,new a.default({store:u.default,i18n:o.i18n,vuetify:s.default,render:t=>t(i.default)}).$mount("#app")},d8c8:function(t,e,n){"use strict";n.r(e);var r=n("2cee"),a=n("f49f");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1760");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},dd9d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),a=r.__importDefault(n("0e44"));e.default=a.default({paths:["AppStore.language"]})},f490:function(t,e,n){"use strict";n.r(e);var r=n("9d3e"),a=n("b61b");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("7091");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},f49f:function(t,e,n){"use strict";n.r(e);var r=n("3c53"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},fe0b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.i18n=void 0;const r=n("9ab4"),a=r.__importDefault(n("2b0e")),i=r.__importDefault(n("a925")),u=n("72aa"),o=r.__importDefault(n("0613"));function s(){if(o.default.state.AppStore.language)return o.default.state.AppStore.language;{const t=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2),e=["en","ru"];return e.indexOf(t)>-1?t:"en"}}a.default.use(i.default),e.i18n=new i.default({locale:s(),fallbackLocale:"en",messages:u.messages})}});
//# sourceMappingURL=app.ff1546a8.js.map