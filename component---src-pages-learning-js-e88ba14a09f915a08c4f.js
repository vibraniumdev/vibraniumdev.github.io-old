"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[533],{7241:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(758),s=n(2847),a=n(5014),i=n(2708),o=n(5947),c=n.n(o);var u=()=>{const{0:e,1:t}=(0,r.useState)(),{0:n,1:s}=(0,r.useState)(!1);return{fetchLearningCenterProjects:async()=>{c().start(),s(!0),await fetch("https://api.github.com/orgs/divertimentos/repos?sort=updated&direction=desc").then((e=>e.json())).then((e=>{t(e)})),s(!1),c().done()},learningCenterReposList:e,isLearningCenterLoading:n}},g=n(5530);var d=()=>{const{fetchLearningCenterProjects:e,learningCenterReposList:t,isLearningCenterLoading:n}=u();return(0,r.useEffect)((()=>{e()}),[]),(0,g.jsx)(s.A,null,(0,g.jsx)(i.A,{title:"LearningCenter",keywords:["gatsby","application","react"]}),(0,g.jsx)(a.A,{isLoading:n,reposList:t}))}}}]);
//# sourceMappingURL=component---src-pages-learning-js-e88ba14a09f915a08c4f.js.map