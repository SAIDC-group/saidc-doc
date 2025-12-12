import{f as o,k as s,o as l,a$ as m}from"./DyXODIVz.js";import{u as $}from"./C6O8nLTB.js";const u=o({__name:"PmInstall",props:{inStack:{type:Boolean,default:!1},name:{},sync:{default:"_pm"},saveDev:{type:Boolean,default:!1},noSync:{type:Boolean}},setup(e){const t=`
::code-group{${e.inStack?"in-stack":""} ${e.noSync?"":`sync="${e.sync}"`}}
${$().packageManagers.value.map(a=>{const n=e.name?`${a.command}${a.install}${e.saveDev?a.saveDev:""}${e.name}`:`${a.command}${a.installEmpty}`;return`\`\`\`bash [${a.name}]
${n}
\`\`\`
`}).join(`
`)}
::
`;return(a,n)=>{const c=m;return l(),s(c,{value:t,class:"[&:not(:first-child)]:mt-5"})}}});export{u as default};
