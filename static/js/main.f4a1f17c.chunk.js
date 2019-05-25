(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),i=a.n(r),c=(a(15),a(3)),o=a(4),s=a(7),m=a(5),p=a(8),d=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"About Me"),l.a.createElement("div",{className:"aboutMeContainer"},l.a.createElement("div",{className:"intro"},l.a.createElement("p",null,"Website design intrigues me, enabling users to perceive data in multiple dimensions to build a latticework of tools."),l.a.createElement("blockquote",null,'"I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail."'),l.a.createElement("span",{className:"quote_author"},"Abraham Maslow"),l.a.createElement("p",null,"Learning is a life long passion of mine, since not only does it open new doors but also revaluate what I already know in a new light!")),l.a.createElement("img",{className:"profile",src:"img/me.png",alt:"profile"}),l.a.createElement("div",{className:"hobbies"},l.a.createElement("h3",null,"Interests"),l.a.createElement("ul",null,l.a.createElement("li",{className:"print"},"3D Printing",l.a.createElement("div",{className:"printer"},l.a.createElement("div",{className:"printerFrame"}),l.a.createElement("div",{className:"printerHead"}))),l.a.createElement("li",{className:"cycle"},"Cycling",l.a.createElement("div",{className:"bike"},l.a.createElement("div",{className:"frame"}),l.a.createElement("div",{className:"fwheel"}),l.a.createElement("div",{className:"bwheel"}))),l.a.createElement("li",{className:"garden"},"Gardening",l.a.createElement("div",{className:"gardener"},l.a.createElement("div",{className:"stem"}),l.a.createElement("div",{className:"leaf1"}),l.a.createElement("div",{className:"leaf2"}))))))))},u=a(6),h=a.n(u),E=function(e){var t=e.projects,a=e.type;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,a," Projects"),l.a.createElement("div",{className:"container ".concat(a)},t.map(function(e,t){return l.a.createElement("div",{className:"card",key:t},l.a.createElement(h.a,{className:"tilt",options:{max:25}},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e.img,alt:e.title}),l.a.createElement("h2",{className:"project-title"},e.title),l.a.createElement("p",null,e.description))),"Front End"===a&&l.a.createElement("div",{className:"popup"},l.a.createElement("h4",null,"Hosted: ",l.a.createElement("span",null,e.flow.hosted)),l.a.createElement("h4",null,"Front End: ",l.a.createElement("span",null,e.flow.frontend)),l.a.createElement("h4",null,"Styled: ",l.a.createElement("span",null,e.flow.style))),"Back End"===a&&l.a.createElement("div",{className:"popup"},l.a.createElement("h4",null,"Hosted: ",l.a.createElement("span",null,e.flow.hosted)),l.a.createElement("h4",null,"Database: ",l.a.createElement("span",null,e.flow.database)),l.a.createElement("h4",null,"Back End: ",l.a.createElement("span",null,e.flow.backend)),l.a.createElement("h4",null,"Front End: ",l.a.createElement("span",null,e.flow.frontend))))})))},g=function(){return l.a.createElement("nav",{className:"hero-bg"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About Me"))))},f=[{title:"CryptoDash",dependencies:["react","react highcharts","styled components"],description:"Track the price of favorite CryptoCurrencies over time.",link:"https://arvindak.github.io/CryptoDash/",img:"img/react/cryptoDash.png",flow:{hosted:"Github Pages",frontend:"React",style:"Styled Components"}},{title:"Slack Messenger",dependencies:["react","firebase","redux","react router dom","semantic UI react"],description:"Slack style messenger app.",link:"https://react-slack-clone-3b5b0.firebaseapp.com/",img:"img/firebase/slack.png",flow:{hosted:"Firebase",frontend:"React & Redux",style:"Semantic UI React"}},{title:"Recipe App",dependencies:["react","bootstrap"],description:"Uses the Food2Fork API to look up recipes containing an ingredient.",link:"https://arvindak.github.io/recipe-app/",img:"img/react/recipe-app.png",flow:{hosted:"Github Pages",frontend:"React",style:"Bootstrap"}}],b=[{title:"Amazon Prime Movie Filter",dependencies:["react","express","postgresql"],description:"Filter Amazon Prime movies via IMDB, Amazon star rating, number of ratings, genre and year. Scrapped data using selenium.",link:"https://morning-crag-36301.herokuapp.com/#",img:"img/fullStack/movieFilter.png",flow:{hosted:"Heroku",database:"PostgreSQL",backend:"Express",frontend:"React"}},{title:"Scoop, Search Engine",dependencies:["PHP","MySQL"],description:"A PHP web scraper and search engine.",link:"https://quiet-mesa-13674.herokuapp.com/",img:"img/fullStack/scoop.png",flow:{hosted:"Heroku",database:"MySQL",backend:"PHP",frontend:"CSS"}},{title:"Waitrose Recipe Finder",dependencies:["react","express","postgresql","recharts"],description:"Sort recipes via nutritional content and filter by dietary requirements or food type.Scrapped data using selenium.",link:"https://fast-eyrie-78022.herokuapp.com/",img:"img/fullStack/recipeSort.png",flow:{hosted:"Heroku",database:"PostgreSQL",backend:"Express",frontend:"React"}}],v=function(){return l.a.createElement("footer",null,l.a.createElement("a",{href:"https://www.thingiverse.com/HonestAbe/designs"},l.a.createElement("img",{src:"https://img.icons8.com/ios/50/000000/wrench.png",title:"Thingiverse",alt:"Thingiverse"})),l.a.createElement("a",{href:"https://github.com/arvindAK"},l.a.createElement("img",{src:"https://img.icons8.com/ios/50/000000/github-filled.png",title:"Github",alt:"Github"})),l.a.createElement("a",{href:"mailto:arvindofkumar153@gmail.com"},l.a.createElement("img",{src:"https://img.icons8.com/carbon-copy/100/000000/paper-plane.png",alt:"Mail",title:"Mail"})))},k=(a(16),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement("section",{id:"portfolio"},l.a.createElement("h1",null,"Portfolio"),l.a.createElement(E,{projects:f,type:"Front End"}),l.a.createElement(E,{projects:b,type:"Back End"}),l.a.createElement("span",null,"The backend projects are deployed on Heroku, so please allow a few seconds for them to intialy load.")),l.a.createElement("section",{id:"about"},l.a.createElement(d,null)),l.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4a1f17c.chunk.js.map