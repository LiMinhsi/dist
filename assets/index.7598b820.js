import{o as e,c as s,a as o,b as t,d as i}from"./vendor.e5744eb4.js";const n={data:()=>({count:123,video:"qwe/assets/videos/1.MP4"}),created(){this.onOpen()},methods:{onOpen(){console.log("this is my first web preject")}}},d={class:"test"},r=o("p",{class:"title"},"测试",-1),a={width:"320",height:"240",controls:""},c=t(" 您的浏览器不支持Video标签。 ");n.render=function(t,i,n,p,l,u){return e(),s("div",d,[r,o("video",a,[o("source",{src:l.video,type:"video/mp4"},null,8,["src"]),c])])};i({setup:o=>(o,t)=>(e(),s(n))}).mount("#app");
