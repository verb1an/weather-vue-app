(function(){var e={5521:function(e,t,a){"use strict";var r=a(9242),n=(a(7658),a(3396)),s=a(4161),i=a(7139),u=a(4870);function o(e){let t=new Date;return t.getHours()-e+`:${t.getMinutes()<=9?"0"+String(t.getMinutes()):String(t.getMinutes())}`}function l(e){return 60*e.split(":")[0]+Number(e.split(":")[1])}const c={class:"main"},p={class:"main__desktop"},d={class:"container"},_={class:"main__inner"};var m={__name:"App",setup(e){const t=(0,i.oR)(),a=(0,u.iH)(!1),r=(0,u.iH)("Gorno-Altaysk"),l=(0,u.iH)({utcDiff:0,currentTime:"",daily:null,hourly:null}),m=(0,u.iH)({}),v=(0,u.iH)([]);async function h(){let e=new Date,r=`${e.getFullYear()}-${e.getMonth()+1<=9?"0"+String(e.getMonth()+1):e.getMonth()+1}-${e.getDate()<=9?"0"+String(e.getDate()):e.getDate()}`;e.setDate(e.getDate()+4);let i=`${e.getFullYear()}-${e.getMonth()+1<=9?"0"+String(e.getMonth()+1):e.getMonth()+1}-${e.getDate()<=9?"0"+String(e.getDate()):e.getDate()}`;try{a.value=!1;const e=await s.Z.get(`https://api.open-meteo.com/v1/forecast?latitude=51.96&longitude=85.92&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=rain&daily=weathercode&daily=temperature_2m_max&daily=temperature_2m_min&daily=precipitation_probability_max&daily=rain_sum&daily=sunrise&daily=sunset&daily=windspeed_10m_max&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&past_days=0&forecast_days=1&start_date=${r}&end_date=${i}&timezone=auto`);if("object"==typeof e.data&&!e.data.type){l.value.daily=e.data.daily,l.value.hourly=e.data.hourly;let r=new Date;l.value.utcDiff=r.getTimezoneOffset()/-60-e.data.utc_offset_seconds/3600,l.value.currentTime=o(l.value.utcDiff),l.value.daily.weathercode.forEach(((e,a)=>{let r=(0,n.Fl)((()=>t.getters["vmcode/GET_TYPE_OF_WEATHER"](e)));v.value.push({day:a,temperature:{min:Math.ceil(l.value.daily.temperature_2m_min[a]),max:Math.ceil(l.value.daily.temperature_2m_max[a])},type:r.value.type})})),m.value={weather:(0,n.Fl)((()=>t.getters["vmcode/GET_TYPE_OF_WEATHER"](l.value.daily.weathercode[0]))),temperature:Math.round(l.value.hourly.temperature_2m[Number(l.value.currentTime.split(":")[0])]),temperatureNight:Math.round(l.value.daily.temperature_2m_min[0]),temperatureDay:Math.round(l.value.daily.temperature_2m_max[0]),wind:Math.round(l.value.daily.windspeed_10m_max[0]),humidity:l.value.hourly.relativehumidity_2m[Number(l.value.currentTime.split(":")[0])],rain:l.value.daily.precipitation_probability_max[0]},a.value=!0}}catch(u){console.debug(u)}}return(0,n.bv)((()=>{h(),setInterval((()=>{l.value.currentTime=o(l.value.utcDiff)}),15e3)})),(e,t)=>{const s=(0,n.up)("app-temperature-now"),i=(0,n.up)("app-temperature-of-day"),u=(0,n.up)("app-sun-time"),o=(0,n.up)("app-week-weather");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",p,[(0,n._)("div",d,[(0,n._)("div",_,[a.value?((0,n.wg)(),(0,n.j4)(s,{key:0,todayInfo:m.value,place:r.value},null,8,["todayInfo","place"])):(0,n.kq)("",!0),a.value?((0,n.wg)(),(0,n.j4)(i,{key:1,utcDiff:l.value.utcDiff,temperature:l.value.hourly.temperature_2m.slice(0,24),currentTime:l.value.currentTime},null,8,["utcDiff","temperature","currentTime"])):(0,n.kq)("",!0),a.value?((0,n.wg)(),(0,n.j4)(u,{key:2,utcDiff:l.value.utcDiff,sunrise:l.value.daily.sunrise[0].split("T")[1],sunset:l.value.daily.sunset[0].split("T")[1],currentTime:l.value.currentTime},null,8,["utcDiff","sunrise","sunset","currentTime"])):(0,n.kq)("",!0),a.value?((0,n.wg)(),(0,n.j4)(o,{key:3,weekWeatherInfo:v.value},null,8,["weekWeatherInfo"])):(0,n.kq)("",!0)])])])])}}};const v=m;var h=v,f=a(2483);const y=[],g=(0,f.p7)({history:(0,f.PO)("/vue-weather-app/"),routes:y});var w=g;const x={namespaced:!0,state:{vmcodeArray:[{type:"sun",text:"Ясное небо",code:0},{type:"suncloudy",text:"В основном ясно",code:1},{type:"suncloudy",text:"Частичная облачность",code:2},{type:"cloudy",text:"Пасмурно",code:3},{type:"fog",text:"Туман",code:45},{type:"fog",text:"Иней",code:48},{type:"drizzle",text:"Легкий моросящий дождь",code:51},{type:"drizzle",text:"Умеренный моросящий дождь",code:53},{type:"drizzle",text:"Сильный моросящий дождь",code:55},{type:"freezing_drizzle",text:"Легкий ледяной моросящий дождь",code:56},{type:"freezing_drizzle",text:"Сильный ледяной моросящий дождь",code:57},{type:"rain",text:"Небольшой дождь",code:61},{type:"rain",text:"Умеренный дождь",code:63},{type:"rain",text:"Сильный дождь",code:65},{type:"freezing_drizzle",text:"Ледяной моросящий дождь",code:66},{type:"freezing_drizzle",text:"Ледяной моросящий дождь",code:67},{type:"snow",text:"Легкий снег",code:71},{type:"snow",text:"Умеренный снег",code:73},{type:"snow",text:"Сильный снег",code:75},{type:"snow",text:"Снежные крупинки",code:77},{type:"rain",text:"Небольшой ливень",code:80},{type:"rain",text:"Умеренный ливень",code:81},{type:"rain",text:"Сильный ливень",code:82},{type:"snow",text:"Снегопад",code:85},{type:"snow",text:"Снегопад",code:86},{type:"thunder",text:"Гроза",code:95},{type:"hail",text:"Легкий град",code:96},{type:"hail",text:"Град",code:99}]},getters:{GET_TYPE_OF_WEATHER:e=>t=>{const a=e.vmcodeArray.find((e=>e.code==t));return a}}};var z=(0,i.MT)({state:{isAuth:!1},getters:{},mutations:{},actions:{},modules:{vmcode:x}}),b=a(2268),D=a.p+"img/thermometer.8a2c395e.svg";const k=e=>((0,n.dD)("data-v-72892aa0"),e=e(),(0,n.Cn)(),e),T={class:"component airquality"},$={class:"wrapper"},O=k((()=>(0,n._)("div",{class:"title"},[(0,n._)("img",{src:D,alt:"icon thermometer"}),(0,n._)("h2",{class:"title__item"},"Температура 24ч")],-1))),M={class:"graf",style:{width:"240px"}},I={width:"240px",height:"100px","view-box":"0 0 240 100"},j=["points"],E=["points"],q=["x","y"],H=k((()=>(0,n._)("linearGradient",{id:"myGradient",gradientTransform:"rotate(90)"},[(0,n._)("stop",{offset:"5%","stop-color":"rgba(255, 255, 255, .15)"}),(0,n._)("stop",{offset:"95%","stop-color":"rgba(255, 255, 255, .01)"})],-1))),S={class:"time__points"},F={name:"app-temperature-of-day"};var A=Object.assign(F,{props:{utcDiff:{type:Number,required:!0},temperature:{type:Array,required:!0},currentTime:{type:String,required:!0}},setup(e){const t=e,a=(0,u.iH)([]),r=(0,u.iH)([]),s=(0,u.iH)([]);for(let n=0;n<4;n++){let e=Math.round(24/(t.currentTime.split(":")[0]>4?t.currentTime.split(":")[0]:4));a.value.splice(0,0,String(23-e*n)+":00"),r.value.splice(0,0,Math.round(t.temperature[23-e*n]))}const i=r.value.reduce(((e,t)=>e<t?e:t))-10,o=r.value.reduce(((e,t)=>e>t?e:t))+10,l=Math.round(100/(Math.abs(i)+Math.abs(o)));return r.value.forEach((e=>{s.value.push((o-e)*l)})),(e,t)=>((0,n.wg)(),(0,n.iD)("section",T,[(0,n._)("div",$,[O,(0,n._)("div",M,[((0,n.wg)(),(0,n.iD)("svg",I,[(0,n._)("polyline",{points:`\n                            0,${s.value[0]} \n                            15,${s.value[0]}\n                            85,${s.value[1]}\n                            155,${s.value[2]}\n                            225,${s.value[3]}\n                            240,${s.value[3]}\n                        `,stroke:"white",fill:"transparent"},null,8,j),(0,n._)("polyline",{points:`\n                            0,${s.value[0]} \n                            15,${s.value[0]}\n                            85,${s.value[1]}\n                            155,${s.value[2]}\n                            225,${s.value[3]}\n                            240,${s.value[3]}\n\n                            240,100 0,100 0,40\n                        `,stroke:"transparent",fill:"url('#myGradient')"},null,8,E),((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(4,(e=>(0,n._)("text",{key:e,x:5+70*(e-1),y:`${s.value[e-1]>30?s.value[e-1]-6:s.value[e-1]+24}`,class:"text",style:{"text-align":"center"}},(0,b.zw)(r.value[e-1])+"° ",9,q))),64)),H])),(0,n._)("div",S,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value,(e=>((0,n.wg)(),(0,n.iD)("span",{key:e},(0,b.zw)(e),1)))),128))])])])]))}}),N=a(89);const U=(0,N.Z)(A,[["__scopeId","data-v-72892aa0"]]);var Y=U,C=a.p+"img/sun-time.e782de44.svg";const G=e=>((0,n.dD)("data-v-631a8711"),e=e(),(0,n.Cn)(),e),W={class:"component suntime"},P={class:"wrapper"},Z=G((()=>(0,n._)("div",{class:"title"},[(0,n._)("img",{src:C,alt:"icon sun time"}),(0,n._)("h2",{class:"title__item"},"Восход/Закат")],-1))),R={class:"graf"},K={class:"text__time"},L=G((()=>(0,n._)("span",null,null,-1))),B=[L],J={class:"circle"},Q=G((()=>(0,n._)("svg",{width:"220px",height:"112px","view-box":"0 0 212 120"},[(0,n._)("circle",{cx:"110",cy:"112",r:"106","stroke-width":"6",fill:"transparent","stroke-dasharray":"2 13.82"})],-1))),V={class:"suntime__info"},X={class:"suntime__info_sunrise"},ee={class:"suntime__info_sunset"},te={name:"app-sun-time"};var ae=Object.assign(te,{props:{utcDiff:{type:Number,required:!0},sunrise:{type:String,required:!0},sunset:{type:String,required:!0},currentTime:{type:String,required:!0}},setup(e){const t=e,a=l(t.sunset),r=l(t.sunrise),s=a-r;let i=(0,n.Fl)((()=>l(t.currentTime))),o=(0,n.Fl)((()=>Math.ceil((i.value-r)/(s/100))));return(a,r)=>((0,n.wg)(),(0,n.iD)("section",W,[(0,n._)("div",P,[Z,(0,n._)("div",R,[(0,n._)("div",K,[(0,n._)("span",null,(0,b.zw)(e.currentTime),1)]),(0,n._)("div",{class:"sun",style:(0,b.j5)(`transform: translate(100%, 0) rotate(-${180-1.8*(0,u.SU)(o)}deg);`)},B,4),(0,n._)("span",J,[(0,n._)("span",{class:"time__plan",style:(0,b.j5)(`width: ${(0,u.SU)(o)+5}%;`)},null,4)]),Q,(0,n._)("div",V,[(0,n._)("span",X,(0,b.zw)(t.sunrise),1),(0,n._)("span",ee,(0,b.zw)(t.sunset),1)])])])]))}});const re=(0,N.Z)(ae,[["__scopeId","data-v-631a8711"]]);var ne=re,se=a.p+"img/wind.b0e58dbc.svg",ie=a.p+"img/drops.5bd23a41.svg",ue=a(3005);const oe=e=>((0,n.dD)("data-v-0be29050"),e=e(),(0,n.Cn)(),e),le={class:"component weathernow"},ce={class:"wrapper"},pe={class:"weather__icon"},de=["src"],_e={class:"place"},me={class:"place__item"},ve={class:"temperature"},he={class:"temperature__item"},fe=oe((()=>(0,n._)("span",null,"°C",-1))),ye={class:"temperature__ofday"},ge={class:"weather__code"},we={class:"weather__info"},xe={class:"weather__info_item"},ze=oe((()=>(0,n._)("span",{class:"icon"},[(0,n._)("img",{src:se,alt:"icon weather"})],-1))),be=oe((()=>(0,n._)("h3",{class:"name"},"Ветер",-1))),De={class:"stat"},ke=oe((()=>(0,n._)("span",null,"km/h",-1))),Te={class:"weather__info_item"},$e=oe((()=>(0,n._)("span",{class:"icon"},[(0,n._)("img",{src:ie,alt:"icon weather"})],-1))),Oe=oe((()=>(0,n._)("h3",{class:"name"},"Влажность",-1))),Me={class:"stat"},Ie=oe((()=>(0,n._)("span",null,"%",-1))),je={class:"weather__info_item"},Ee=oe((()=>(0,n._)("span",{class:"icon"},[(0,n._)("img",{src:ue,alt:"icon weather"})],-1))),qe=oe((()=>(0,n._)("h3",{class:"name"},"Осадки",-1))),He={class:"stat"},Se=oe((()=>(0,n._)("span",null,"%",-1))),Fe=oe((()=>(0,n._)("span",{class:"bg"},null,-1))),Ae={name:"app-temperature-now"};var Ne=Object.assign(Ae,{props:{todayInfo:{type:Object,required:!0},place:{type:String,required:!0}},setup(e){return(t,r)=>((0,n.wg)(),(0,n.iD)("section",le,[(0,n._)("div",ce,[(0,n._)("div",pe,[(0,n._)("img",{src:a(4324)(`./weather-${e.todayInfo.weather.type}.svg`),alt:"icon weather"},null,8,de)]),(0,n._)("div",_e,[(0,n._)("h3",me,(0,b.zw)(e.place),1)]),(0,n._)("div",ve,[(0,n._)("h2",he,[(0,n.Uk)((0,b.zw)(e.todayInfo.temperature),1),fe]),(0,n._)("h3",ye,[(0,n._)("span",null,(0,b.zw)(e.todayInfo.temperatureDay),1),(0,n._)("span",null,(0,b.zw)(e.todayInfo.temperatureNight),1)]),(0,n._)("h3",ge,[(0,n._)("span",null,(0,b.zw)(e.todayInfo.weather.type),1)])]),(0,n._)("div",we,[(0,n._)("div",xe,[ze,be,(0,n._)("h2",De,[(0,n.Uk)((0,b.zw)(e.todayInfo.wind)+" ",1),ke])]),(0,n._)("div",Te,[$e,Oe,(0,n._)("h2",Me,[(0,n.Uk)((0,b.zw)(e.todayInfo.humidity)+" ",1),Ie])]),(0,n._)("div",je,[Ee,qe,(0,n._)("h2",He,[(0,n.Uk)((0,b.zw)(e.todayInfo.rain)+" ",1),Se])])])]),Fe]))}});const Ue=(0,N.Z)(Ne,[["__scopeId","data-v-0be29050"]]);var Ye=Ue;const Ce={class:"component weekweather"},Ge={class:"wrapper"},We={class:"name"},Pe={class:"icon"},Ze=["src"],Re={class:"stat"},Ke={class:"stat__max"},Le={class:"stat__min"},Be={name:"app-week-weather"};var Je=Object.assign(Be,{props:{weekWeatherInfo:{type:Array,required:!0}},setup(e){const t=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];return(r,s)=>((0,n.wg)(),(0,n.iD)("section",Ce,[(0,n._)("div",Ge,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.weekWeatherInfo,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.day,class:"week__weather_item"},[(0,n._)("h2",We,(0,b.zw)(t[e.day]),1),(0,n._)("span",Pe,[(0,n._)("img",{src:a(4324)(`./weather-${e.type}.svg`),alt:"icon weather"},null,8,Ze)]),(0,n._)("h3",Re,[(0,n._)("span",Ke,(0,b.zw)(e.temperature.max),1),(0,n._)("span",Le,(0,b.zw)(e.temperature.min),1)])])))),128))])]))}});const Qe=(0,N.Z)(Je,[["__scopeId","data-v-1f707e3e"]]);var Ve=Qe,Xe=[Y,ne,Ye,Ve];const et=(0,r.ri)(h);Xe.forEach((e=>{et.component(e.name,e)})),et.use(z).use(w).mount("#app")},4324:function(e,t,a){var r={"./weather-cloudy.svg":9278,"./weather-drizzle.svg":9547,"./weather-fog.svg":2705,"./weather-freezing_drizzle.svg":3188,"./weather-hail.svg":8291,"./weather-rain.svg":3005,"./weather-sleet.svg":7872,"./weather-snow.svg":7245,"./weather-sun.svg":8462,"./weather-suncloudy.svg":9869,"./weather-thunder.svg":4577,"./weather-thunderstorm.svg":4165};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=4324},9278:function(e,t,a){"use strict";e.exports=a.p+"img/weather-cloudy.afa7755c.svg"},9547:function(e,t,a){"use strict";e.exports=a.p+"img/weather-drizzle.33fe890e.svg"},2705:function(e,t,a){"use strict";e.exports=a.p+"img/weather-fog.c634986e.svg"},3188:function(e,t,a){"use strict";e.exports=a.p+"img/weather-freezing_drizzle.2d577dcf.svg"},8291:function(e,t,a){"use strict";e.exports=a.p+"img/weather-hail.88e5b25e.svg"},3005:function(e,t,a){"use strict";e.exports=a.p+"img/weather-rain.7991d2c7.svg"},7872:function(e,t,a){"use strict";e.exports=a.p+"img/weather-sleet.c42aa117.svg"},7245:function(e,t,a){"use strict";e.exports=a.p+"img/weather-snow.e1ee9dc4.svg"},8462:function(e,t,a){"use strict";e.exports=a.p+"img/weather-sun.777c8653.svg"},9869:function(e,t,a){"use strict";e.exports=a.p+"img/weather-suncloudy.4b5f76e3.svg"},4577:function(e,t,a){"use strict";e.exports=a.p+"img/weather-thunder.a9c168a9.svg"},4165:function(e,t,a){"use strict";e.exports=a.p+"img/weather-thunderstorm.a9c168a9.svg"}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],s=e[c][2];for(var u=!0,o=0;o<r.length;o++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(u=!1,s<i&&(i=s));if(u){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/vue-weather-app/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,i=r[0],u=r[1],o=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(o)var c=o(a)}for(t&&t(r);l<i.length;l++)s=i[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},r=self["webpackChunkweather_vue_app"]=self["webpackChunkweather_vue_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5521)}));r=a.O(r)})();
//# sourceMappingURL=app.8cfd02c4.js.map