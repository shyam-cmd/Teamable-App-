(()=>{"use strict";var e={893:(e,t,i)=>{var n=i(751),a=i(641),r=i(33);const A=["src"],o={id:"name"},l={id:"email"},u={id:"interests"},s=["src"];function Q(e,t,i,Q,E,h){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bo)((0,a.Lk)("div",null,[t[5]||(t[5]=(0,a.Lk)("h1",null,"User profile",-1)),(0,a.Lk)("img",{src:E.image},null,8,A),t[6]||(t[6]=(0,a.Lk)("span",null,"Name: ",-1)),(0,a.Lk)("b",o,(0,r.v_)(E.name),1),t[7]||(t[7]=(0,a.Lk)("hr",null,null,-1)),t[8]||(t[8]=(0,a.Lk)("span",null,"Email: ",-1)),(0,a.Lk)("b",l,(0,r.v_)(E.email),1),t[9]||(t[9]=(0,a.Lk)("hr",null,null,-1)),t[10]||(t[10]=(0,a.Lk)("span",null,"Interests: ",-1)),(0,a.Lk)("b",u,(0,r.v_)(E.interests),1),t[11]||(t[11]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>h.handleEditProfile&&h.handleEditProfile(...e))},"Edit Profile")],512),[[n.aG,!E.isEditMode]]),(0,a.bo)((0,a.Lk)("div",null,[t[12]||(t[12]=(0,a.Lk)("h1",null,"User profile",-1)),(0,a.Lk)("img",{src:E.image},null,8,s),t[13]||(t[13]=(0,a.Lk)("span",null,"Name: ",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"input-name","onUpdate:modelValue":t[1]||(t[1]=e=>E.name=e)},null,512),[[n.Jo,E.name]]),t[14]||(t[14]=(0,a.Lk)("hr",null,null,-1)),t[15]||(t[15]=(0,a.Lk)("span",null,"Email: ",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"input-email","onUpdate:modelValue":t[2]||(t[2]=e=>E.email=e)},null,512),[[n.Jo,E.email]]),t[16]||(t[16]=(0,a.Lk)("hr",null,null,-1)),t[17]||(t[17]=(0,a.Lk)("span",null,"Interests: ",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"input-interests","onUpdate:modelValue":t[3]||(t[3]=e=>E.interests=e)},null,512),[[n.Jo,E.interests]]),t[18]||(t[18]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>h.handleUpdateProfile&&h.handleUpdateProfile(...e))},"Update Profile")],512),[[n.aG,E.isEditMode]])],64)}const E="data:image/jpeg;base64,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",h={name:"App",data(){return{image:E,name:"",email:"",interests:"",isEditMode:!1}},async created(){const e=await this.fetchUserProfile();this.name=e.name,this.email=e.email,this.interests=e.interests},methods:{handleEditProfile(){this.isEditMode=!0},async handleUpdateProfile(){const e={name:this.name,email:this.email,interests:this.interests};await this.updateUserProfile(e),this.isEditMode=!1},async fetchUserProfile(){const e=await fetch("get-profile");return await e.json()},async updateUserProfile(e){const t=await fetch("send-user",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});return await t.json()}}};var S=i(262);const C=(0,S.A)(h,[["render",Q]]),p=C;(0,n.Ef)(p).mount("#app")}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,(()=>{var e=[];i.O=(t,n,a,r)=>{if(!n){var A=1/0;for(s=0;s<e.length;s++){for(var[n,a,r]=e[s],o=!0,l=0;l<n.length;l++)(!1&r||A>=r)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(o=!1,r<A&&(A=r));if(o){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,a,r]}})(),(()=>{i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[A,o,l]=n,u=0;if(A.some((t=>0!==e[t]))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var s=l(i)}for(t&&t(n);u<A.length;u++)r=A[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(s)},n=self["webpackChunkhi_vue_app"]=self["webpackChunkhi_vue_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=i.O(void 0,[504],(()=>i(893)));n=i.O(n)})();
//# sourceMappingURL=app.bac6decb.js.map