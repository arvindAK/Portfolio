(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),c=a.n(l),i=(a(15),a(3)),o=a(4),s=a(7),m=a(5),p=a(8),d=function(){return r.a.createElement("div",{className:"hero-bg"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About Me"))),r.a.createElement("div",{className:"hero-text"},r.a.createElement("h1",null,"Hello, I am Arvind!"),r.a.createElement("h3",null,"Wellcome to my portfolio!"),r.a.createElement("a",{href:"#portfolio"},"View Portfolio")),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball2"}),r.a.createElement("div",{className:"ball3"}))},u=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"About Me"),r.a.createElement("div",{className:"aboutMeContainer"},r.a.createElement("div",{className:"intro"},r.a.createElement("p",null,"What fascinates me about programing and where I see potential is the filtering of data to allow for users to interactively explore datasets.",r.a.createElement("br",null),"A quote that brought home this idea for me is:"),r.a.createElement("blockquote",null,'"In ancient times having power meant having access to data. Today having power means knowing what to ignore."'),r.a.createElement("span",{className:"quote_author"},"Yuval Noah Harar - Homo Deus: A Brief History of Tomorrow")),r.a.createElement("img",{className:"profile",src:"img/me.png",alt:"profile"}),r.a.createElement("div",{className:"hobbies"},r.a.createElement("h3",null,"Interests"),r.a.createElement("ul",null,r.a.createElement("li",{className:"print"},"3D Printing",r.a.createElement("div",{className:"printer"},r.a.createElement("div",{className:"printerFrame"}),r.a.createElement("div",{className:"printerHead"}))),r.a.createElement("li",{className:"cycle"},"Cycling",r.a.createElement("div",{className:"bike"},r.a.createElement("div",{className:"frame"}),r.a.createElement("div",{className:"fwheel"}),r.a.createElement("div",{className:"bwheel"}))),r.a.createElement("li",{className:"garden"},"Gardening",r.a.createElement("div",{className:"gardener"},r.a.createElement("div",{className:"stem"}),r.a.createElement("div",{className:"leaf1"}),r.a.createElement("div",{className:"leaf2"}))))))))},h=a(6),g=a.n(h),E=function(e){switch(console.log(e.target.textContent),e.target.textContent){case"react":window.open("https://reactjs.org/","_blank");break;case"redux":window.open("https://redux.js.org/","_blank");break;case"react router dom":window.open("https://www.npmjs.com/package/react-router-dom","_blank");break;case"express":window.open("https://expressjs.com/","_blank");break;case"postgresql":window.open("https://www.postgresql.org/","_blank");break;case"firebase":window.open("https://firebase.google.com/","_blank");break;case"bootstrap":window.open("https://getbootstrap.com/","_blank");break;case"semantic ui react":window.open("https://react.semantic-ui.com/","_blank");break;case"styled components":window.open("https://www.styled-components.com/","_blank");break;case"react highcharts":window.open("https://www.npmjs.com/package/react-highcharts","_blank");break;case"recharts":window.open("http://recharts.org/en-US/","_blank")}},b=function(e){var t=e.projects,a=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,a," Projects"),r.a.createElement("div",{className:"container"},t.map(function(e,t){return r.a.createElement(g.a,{className:"tilt",options:{max:25},key:t},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement("h2",{className:"project-title"},e.title),r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"dep"},r.a.createElement("hr",null),r.a.createElement("h4",null,"Dependencies"),e.dependencies.map(function(e,t){return r.a.createElement("span",{key:t,name:e,onClick:E},e)})))})))},w=[{title:"CryptoDash",dependencies:["react","react highcharts","styled components"],description:"Track the price of favorite CryptoCurrencies over time.",link:"https://arvindak.github.io/CryptoDash/",img:"img/react/cryptoDash.png"},{title:"Slack Messenger",dependencies:["react","firebase","redux","react router dom","semantic UI react"],description:"Slack style messenger app.",link:"https://react-slack-clone-3b5b0.firebaseapp.com/",img:"img/firebase/slack.png"},{title:"Recipe App",dependencies:["react","bootstrap"],description:"Uses the Food2Fork API to look up recipes containing an ingredient.",link:"https://arvindak.github.io/recipe-app/",img:"img/react/recipe-app.png"}],k=[{title:"Amazon Prime Movie Filter",dependencies:["react","express","postgresql"],description:"Filter Amazon Prime movies via IMDB, Amazon star rating, number of ratings, genre and year. Scrapped data using selenium.",link:"https://morning-crag-36301.herokuapp.com/#",img:"img/fullStack/movieFilter.png"},{title:"Waitrose Recipe Finder",dependencies:["react","express","postgresql","recharts"],description:"Sort recipes via nutritional content and filter by dietary requirements or food type.Scrapped data using selenium.",link:"https://fast-eyrie-78022.herokuapp.com/",img:"img/fullStack/recipeSort.png"}],f=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("section",{id:"about"},r.a.createElement(u,null)),r.a.createElement("section",{id:"portfolio"},r.a.createElement("h2",null,"Portfolio"),r.a.createElement(b,{projects:w,type:"Front End"}),r.a.createElement(b,{projects:k,type:"Back End"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1a3b2b4a.chunk.js.map