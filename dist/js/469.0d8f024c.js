"use strict";(self["webpackChunkcenebell"]=self["webpackChunkcenebell"]||[]).push([[469],{4469:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(6768),l=a(144),i=a(5859);const s={key:0,class:"patients"},o={class:"patients__search"},r={class:"patients__table"};var c={__name:"Patients",setup(e){const t=(0,l.KR)(!1),a=(0,l.KR)(null),c=(0,l.KR)(""),d=[{title:"Apellido y nombre",align:"center",key:"name"},{title:"DNI",align:"center",key:"dni"},{title:"Obra social",align:"center",key:"socialWork"},{title:"Acciones",align:"center",key:"actions",sortable:!1}],u=[{name:"Juan Perez",dni:"12345678",socialWork:"OSDE"},{name:"Maria Rodriguez",dni:"87654321",socialWork:"Swiss Medical"},{name:"Pedro Gomez",dni:"45678912",socialWork:"Galeno"},{name:"Juan Perez",dni:"12345678",socialWork:"OSDE"},{name:"Maria Rodriguez",dni:"87654321",socialWork:"Swiss Medical"},{name:"Pedro Gomez",dni:"45678912",socialWork:"Galeno"}],k=(0,n.EW)((()=>u.filter((e=>e.name.toLowerCase().includes(c.value.toLowerCase())||e.dni.includes(c.value)||e.socialWork.toLowerCase().includes(c.value.toLowerCase()))))),m=e=>{console.log(e),a.value=e,t.value=!0};return(e,l)=>{const u=(0,n.g2)("v-text-field"),_=(0,n.g2)("v-btn"),p=(0,n.g2)("v-alert"),v=(0,n.g2)("v-icon"),b=(0,n.g2)("v-data-table");return t.value?((0,n.uX)(),(0,n.Wv)(i.A,{key:1,patient:a.value,onGoBack:l[1]||(l[1]=e=>t.value=!1)},null,8,["patient"])):((0,n.uX)(),(0,n.CE)("div",s,[l[5]||(l[5]=(0,n.Lk)("h2",{class:"patients__title"},"Pacientes",-1)),(0,n.Lk)("section",o,[(0,n.bF)(u,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),class:"patients__search__input",label:"Buscar por nombre, DNI u obra social"},null,8,["modelValue"]),(0,n.bF)(_,{color:"#1A9A8B",icon:"mdi-plus"})]),(0,n.Lk)("section",r,[(0,n.bF)(b,{headers:d,items:k.value,"items-per-page":10,class:"elevation-1",cellProps:{style:{"background-color":"#A0DAD0DE"}},headerProps:{style:{"background-color":"#167A6E"}},footerProps:{style:{"background-color":"#167A6E"}}},{"no-data":(0,n.k6)((()=>[(0,n.bF)(p,{value:!0,color:"error",icon:"mdi-alert"},{default:(0,n.k6)((()=>l[2]||(l[2]=[(0,n.eW)(" No se encontraron pacientes ")]))),_:1})])),"item.actions":(0,n.k6)((({item:t})=>[(0,n.Lk)("div",null,[(0,n.bF)(v,{onClick:e=>m(t)},{default:(0,n.k6)((()=>l[3]||(l[3]=[(0,n.eW)("mdi-eye-outline")]))),_:2},1032,["onClick"]),(0,n.bF)(v,{onClick:a=>e.deleteItem(t)},{default:(0,n.k6)((()=>l[4]||(l[4]=[(0,n.eW)("mdi-delete-outline")]))),_:2},1032,["onClick"])])])),_:1},8,["items"])])]))}}},d=a(1241);const u=(0,d.A)(c,[["__scopeId","data-v-fd2ad368"]]);var k=u},5859:function(e,t,a){a.d(t,{A:function(){return k}});var n=a(6768),l=a(4232);const i={class:"patients-treatments"},s={class:"patients-treatments__header"},o={style:{"text-align":"start"}},r={style:{"text-align":"end"}};var c={__name:"PatientTreatmentsList",emits:["goBack"],setup(e,{emit:t}){const a=t,c=[{name:"Tratamiento 1",date:"01/01/2021",status:"En curso"},{name:"Tratamiento 2",date:"01/01/2021",status:"Finalizado"},{name:"Tratamiento 3",date:"01/01/2021",status:"En curso"},{name:"Tratamiento 4",date:"01/01/2021",status:"Finalizado"}],d=[{title:"Planillas de Dialisis",key:"date",align:"start"},{title:"",align:"end",key:"actions",sortable:!1}],u=()=>{a("goBack")};return(e,t)=>{const a=(0,n.g2)("v-icon"),k=(0,n.g2)("v-alert"),m=(0,n.g2)("v-data-table");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("section",s,[(0,n.bF)(a,{class:"patients-treatments__header__icon",onClick:t[0]||(t[0]=e=>u())},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("mdi-arrow-left")]))),_:1}),t[2]||(t[2]=(0,n.Lk)("h3",{class:"patients-treatments__header__title"},"Juan Perez",-1)),t[3]||(t[3]=(0,n.Lk)("h5",{class:"patients-treatments__header__subtitle"},"Historial",-1))]),(0,n.Lk)("section",null,[(0,n.bF)(m,{headers:d,items:c,"items-per-page":5,class:"elevation-1",cellProps:{style:{"background-color":"white","font-family":"Montserrat"}},headerProps:{style:{"background-color":"#167A6E","text-align":"start"}}},{item:(0,n.k6)((({item:i})=>[(0,n.Lk)("tr",null,[(0,n.Lk)("td",o,(0,l.v_)(i.date),1),(0,n.Lk)("td",r,[(0,n.bF)(a,{class:"patients-treatments__actions__icon",onClick:t=>e.handlePatientDetail(i)},{default:(0,n.k6)((()=>t[4]||(t[4]=[(0,n.eW)("mdi-eye-outline")]))),_:2},1032,["onClick"]),(0,n.bF)(a,{class:"patients-treatments__actions__icon",onClick:t=>e.handlePatientDetail(i)},{default:(0,n.k6)((()=>t[5]||(t[5]=[(0,n.eW)("mdi-pencil")]))),_:2},1032,["onClick"]),(0,n.bF)(a,{class:"patients-treatments__actions__icon",onClick:t=>e.deleteItem(i)},{default:(0,n.k6)((()=>t[6]||(t[6]=[(0,n.eW)("mdi-delete-outline")]))),_:2},1032,["onClick"]),(0,n.bF)(a,{class:"patients-treatments__actions__icon",onClick:t=>e.deleteItem(i)},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("mdi-trash-can-outline")]))),_:2},1032,["onClick"])])])])),"no-data":(0,n.k6)((()=>[(0,n.bF)(k,{value:!0,color:"error",icon:"mdi-alert"},{default:(0,n.k6)((()=>t[8]||(t[8]=[(0,n.eW)(" No se encontraron tratamientos ")]))),_:1})])),_:1})])])}}},d=a(1241);const u=(0,d.A)(c,[["__scopeId","data-v-c8ca6854"]]);var k=u}}]);
//# sourceMappingURL=469.0d8f024c.js.map