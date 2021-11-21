const request = require('request')
var cow = {
haha: function () {
	 function sleep(milliseconds) { var start = new Date().getTime(); for (var i = 0; i < 1e7; i++) { if ((new Date().getTime() - start) > milliseconds){ break; } } }
  cowhaha_list = ['冰塊最想做什麼事? 退伍 因為他當冰很久了', '有一天,我去吉野家,可是吉野不在家', '我走進眼科診所跟醫生抱怨說:「最近視力變差了,我需要配一副新眼鏡。」他嘆了一口氣回說:「你真的病得不輕，我這裡可是甜甜圈店啊!」', '有一隻狼寶寶不吃肉只吃素,狼媽媽、狼爸爸看得很擔心,某天,狼寶寶終於追著一隻兔子跑,牠們感到很欣慰,狼寶寶抓到兔子後說: 快把紅蘿蔔交出來!', '天上的星星有多重? 8克,因為星巴克', '有一天,小明去醫院量血壓,血壓計的語音說:血壓升高中，請注意...小明問醫生:為什麼會這樣?醫生回:這表示你的血壓... 國中畢業了。', '第一個進船的要說什麼? 要說online,因為仙境傳說online', '小魚問大魚說:你-喜-歡-吃-怎-樣-的-魚?大魚回:我喜歡吃講話慢的魚!小魚說: 醬紫先走', '小明每次開可樂,瓶蓋都寫銘謝惠顧,有一天,他在考試,突然忘記銘要怎麼寫了,於是他打開桌上的可樂,結果寫:再來一瓶', '有一天,我和牛弟弟在吃草,弟弟問我:草是什麼味道?我回:草莓味。弟弟吃了一口草,生氣的說:這草明明沒有味道!我回:我沒有說錯啊... 我剛剛說草沒有味道,草沒味啊!', '你知道學校的警衛每天早上都在笑什麼嗎？ 校門口'];
  cowhaha_num = (Math.floor(Math.random() * (cowhaha_list.length-1 - 1) + 1));
  console.log('哞!讓我想想...');
  sleep(3000);
  console.log('啊!我想到了!');
  console.log(cowhaha_list[cowhaha_num]);
  return cowhaha_list[cowhaha_num]
},
coin: function (face) {
	cowcoin_num = (Math.floor(Math.random() * 2 - 1) + 1)
	if (cowcoin_num == 1){
	if (face == '正' || face == '正面' || face == '正!' || face == '正面!' || face == 'head'){
		console.log('答對了!');
		return '答對了!'
		} else {
			console.log('錯了,是正面才對');
			return '錯了,是正面才對'
			}
			} else if (cowcoin_num == 2){
			if (face == '反' || face == '反面' || face == '反!' || face == '反面!' || face == '背面' || face == '背面!' || face == 'back'){
		console.log('答對了!');
		return '答對了!'
		} else {
			console.log('錯了,是反面才對');
			return '錯了,是反面才對'
			}
			}
		},
		say: function (text){
			console.log(text)
			return text
			},
			time: function () {
				console.log('哞!現在的時間是:' + new Date().getFullYear().toString() + '年' + (new Date().getMonth()+1).toString() + '月' + new Date().getDate().toString() + '日 星期' + new Date().getDay().toString() + ' ' + new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds().toString())
				return '哞!現在的時間是:' + new Date().getFullYear().toString() + '年' + (new Date().getMonth()+1).toString() + '月' + new Date().getDate().toString() + '日 星期' + new Date().getDay().toString() + ' ' + new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds().toString()
				},
  shortlink:function (link){
if ((link.startsWith('http://')) || (link.startsWith('https://'))) {
const options = {
url: 'https://mooshort.repl.co/api/create',
form: {
'url':link
}
};
        
request.post(options, (err, res, body) => {
if (err) {
return console.log(err);
}
cowshortlink=(JSON.parse(body)['url'])
  console.log('哞!你的短網址: '+cowshortlink)
  return '哞!你的短網址: '+cowshortlink
})
} else {
  console.log('哞!這不是網址!')
  return '哞!這不是網址!'
             }
  }}
module.exports = cow
return