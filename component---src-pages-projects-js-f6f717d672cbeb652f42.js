"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[429],{4196:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var r=e(6540),a=e(7113),i=e(8137),n=e(2269),o=e(5947),c=e.n(o);var u=()=>{const{0:t,1:s}=(0,r.useState)(),{0:e,1:a}=(0,r.useState)(!1);return{fetchProjects:async()=>{c().start(),a(!0),await fetch("https://api.github.com/users/ggteixeira/repos?sort=updated&direction=desc").then((t=>t.json())).then((t=>{s(t)})),a(!1),c().done()},reposList:t,isLoading:e}},p=e(7437);var d=()=>{const{fetchProjects:t,reposList:s,isLoading:e}=u();return(0,r.useEffect)((()=>{t()}),[]),(0,p.jsx)(a.A,null,(0,p.jsx)(n.A,{title:"Projects",keywords:["gatsby","application","react"]}),(0,p.jsx)(i.A,{isLoading:e,reposList:s}))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-f6f717d672cbeb652f42.js.map