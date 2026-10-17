function enq(s,k,cell){const r=s.R;if(over||s.Q.length>=6||U[k]&&(!cnt(s,'yar')||s.pop-rs(s)<=U[k].p||used(s.o)+U[k].p>cap(s.o))||!U[k]&&maxed(s,k))return 0;const u=U[k],b=BN[k],c=u?u.c:b[3],t=u?u.t*(s.K.chn?.8:1):b[4];if(!u){if(b[5]==2){if(cell==null)cell=anc(s);if(cell<0||!fp(s,cell))return 0}else{if(cell==null&&k=='pom')cell=s.CR.find(i=>!s.G[i]);if(cell==null)cell=s.G.indexOf(null);if(cell<0||s.G[cell])return 0}}
if(r.w<c[0]||r.g<c[1])return 0;r.w-=c[0];r.g-=c[1];if(!u){if(b[5]==2){const f=fp(s,cell);s.G[cell]=k;f.slice(1).forEach(j=>s.G[j]='+'+cell)}else s.G[cell]=k}if(!u&&t===0){if(s.o=='p')log(BN[k][0]+' : construction terminée à '+s.n+'.')}else s.Q.push({k,t,cell:u?null:cell});return 1}

function dmb(s,c){const k=s.G[c];if(over||!k||!BN[k]||k=='pal'||s.Q.some(q=>q.cell===c))return null;s.G[c]=null;if(BN[k][5]==2)for(let j=0;j<GN;j++)if(s.G[j]=='+'+c)s.G[j]=null;const r={k,w:Math.floor(BN[k][3][0]*.4),e:Math.floor(BN[k][3][1]*.4)};s.R.w+=r.w;s.R.g+=r.e;return r}

function dmk(s,ex){const b=j=>s.Q.some(q=>q.cell===j),fs=food(s)-s.pop;for(const[k,ok]of[['cha',fs>=3],['car',s.R.w>=100],['pom',cnt(s,'pom')>1||s.R.g>=50],['for',1]]){if(!ok||k==ex)continue;const i=s.G.findIndex((x,j)=>x==k&&!b(j)&&!(k=='pom'&&s.CR.includes(j)));if(i>=0)return i}return-1}

function ai(E){const z=Math.floor(T/180);for(const i of E){const s=I[i];if(s.Q.length>=2)continue;
const n=k=>s.G.filter(x=>x==k).length,w=[['pom',1],['yar',1],['cas',i<2?1+(z>>1):0],['uni',i<2&&z>=1?1:0],['cha',2+z],['car',(i<2?2:1)+z],['pom',1+(z>>1)],['for',i<2&&z?1:0]],k=(w.find(([k,t])=>n(k)<t)||[])[0];
 if(k&&(enq(s,k)||Math.random()<.6))continue;
 if(k&&(BN[k][5]==2?anc(s)<0:!s.G.includes(null))){const c=dmk(s,k);if(c>=0&&dmb(s,c)){log('🏗️ L’ennemi détruit un bâtiment à '+s.n+' pour s’aufrager.');enq(s,k);continue}}
 const ks=Object.keys(SK).find(x=>!s.K[x]&&!s.Q.some(q=>q.k==x)&&(!SK[x][5]||s.K[SK[x][5]]));if(ks&&Math.random()<.25&&sk(s,ks))continue;
if(!(s.u.c||s.Q.some(q=>q.k=='c'))&&!F.some(f=>f.o=='e'&&f.fr==i&&f.u.c)&&T>240&&s.pop-rs(s)>5){enq(s,'c');continue}
if(s.pop-rs(s)>5)for(const t of Math.random()<.35?['f','z','e','b']:['z','e','b'])if(enq(s,t))break}}

function sendU(a,b,u){const s=I[a];let n=0;for(const t in U){u[t]=Math.min(u[t],s.u[t]);n+=u[t]}if(!n)return;const v=Math.min(...Object.keys(U).filter(t=>u[t]).map(t=>U[t].s));for(const t in U)s.u[t]-=u[t];F.push({o:s.o,to:b,fr:a,u:{...u},p:0,pa:(s.K.flo?.2:0)+(s.K.tir?.2:0),dur:Math.hypot(I[b].x-s.x,(I[b].y-s.y)*.62)/v/(s.K.mot?1.15:1)})}

function send(a,b,r){const s=I[a],u={};let n=0;for(const t in U){u[t]=r==1?s.u[t]:Math.floor(s.u[t]*r);n+=u[t]}if(!n)return;
for(const t in U)s.u[t]-=u[t];const d=Math.hypot(I[b].x-s.x,(I[b].y-s.y)*.62),v=Math.min(...Object.keys(U).filter(t=>u[t]).map(t=>U[t].s));
F.push({o:s.o,to:b,fr:a,u,p:0,pa:(s.K.flo?.2:0)+(s.K.tir?.2:0),dur:d/v/(s.K.mot?1.15:1)})}

function sim(au,du,nf,cap,np,pa,pd,pb){const mk=(u,sd,m,cat)=>{const L=[];for(const t in U)for(let i=0;i<u[t];i++)L.push({t,sd,cat,mx:U[t].h*m,a:U[t].a,hp:U[t].h*m});return L},
A=mk(au,0,1,'a'),G=mk(du,1,cap,'g'),Fo=[];for(let i=0;i<nf;i++)Fo.push({t:'for',sd:1,cat:'f',mx:HP.for,hp:HP.for,a:7});for(let i=0;i<np;i++)Fo.push({t:'pal',sd:1,cat:'x',mx:HP.pal,hp:HP.pal,a:5});
const Pb=(pb||[]).map(x=>({t:x.k,sd:1,cat:'p',cell:x.cell,mx:HP[x.k],hp:HP[x.k],a:0})),Dd=[...G,...Fo,...Pb],sh=[],al=L=>L.filter(s=>s.hp>0),pk=L=>L[Math.random()*L.length|0];let r=0;
const ch=(P,p,s)=>{let e=pk(P);if(Math.random()<p){const ok=P.filter(z=>z.hp-(z.pd||0)>0);if(ok.length)e=ok.reduce((a,b)=>a.hp-(a.pd||0)<=b.hp-(b.pd||0)?a:b)}e.pd=(e.pd||0)+s.a;return e};
while(r<300&&al(A).length&&al(Dd).length){r++;const aa=al(A),dd=al(Dd),q=[],pool=(()=>{for(const c of['g','f','p','x']){const L=dd.filter(z=>z.cat==c);if(L.length)return L}return dd})();
for(const s of aa)if(s.a>0)q.push({r,s,e:ch(pool,pa||0,s)});for(const s of dd)if(s.a>0)q.push({r,s,e:ch(aa,pd||0,s)});
for(const x of q)x.e.hp-=x.s.a;[...A,...Dd].forEach(z=>z.pd=0);sh.push(...q)}
const su=L=>{const o={b:0,e:0,z:0,f:0,c:0};for(const s of al(L))o[s.t]++;return o};
return{aw:al(A).length>0&&!al(Dd).length,dd:!al(Dd).length,as:su(A),ds:su(G),fs:al(Fo).filter(s=>s.t=='for').length,ps:al(Fo).filter(s=>s.t=='pal').length,A,D:Dd,sh,rounds:r}}

function arr(f){const s=I[f.to],me=f.o=='p';
if(s.o==f.o){for(const t in U)s.u[t]+=f.u[t];log(me&&'Renfort arrivé à '+s.n);return}
const nf=cnt(s,'for'),np=cnt(s,'pal'),pb=s.o=='n'?[]:s.G.map((k,i)=>k&&HP[k]&&k!='for'&&k!='pal'&&!s.Q.some(q=>q.cell===i)?{k,cell:i}:null).filter(Boolean),
bt=sim(f.u,s.u,nf,f.to<2?1.25:1,np,f.pa||0,.05+(s.K.flo?.2:0)+(s.K.tir?.2:0),pb);bt.to=f.to;bt.ao=f.o;bt.od=s.o;bt.G=[...s.G];bt.M=[...s.M];bt.fc=s.G.map((k,i)=>k=='for'&&!s.Q.some(q=>q.cell===i)?i:-1).filter(i=>i>=0);bt.pc=s.G.map((k,i)=>k=='pal'&&!s.Q.some(q=>q.cell===i)?i:-1).filter(i=>i>=0);bt.sc=pb.map(x=>x.cell);
const cq=bt.aw&&bt.as.c>0;bt.cq=cq;
const clr=c=>{const g=s.G[c];if(!g)return;s.G[c]=null;if(BN[g]&&BN[g][5]==2)for(let j=0;j<GN;j++)if(s.G[j]=='+'+c)s.G[j]=null};
bt.D.filter(x=>x.hp<=0&&x.cat=='p').forEach(x=>clr(x.cell));
let kf=nf-bt.fs;for(let i=0;i<GN&&kf>0;i++)if(s.G[i]=='for'&&!s.Q.some(q=>q.cell===i)){s.G[i]=null;kf--}
let kp=np-bt.ps;for(let i=0;i<GN&&kp>0;i++)if(s.G[i]=='pal'){s.G[i]=null;kp--}
if(cq){const old=s.o;s.o=f.o;s.u=bt.as;s.R={w:60,g:10};s.K={};s.pt=0;s.Q=[];s.pp=0;if(old!='n'){s.G=s.M.map(v=>v?null:'x');s.pop=3}if(f.o=='p')s.pp=1;else{const c=s.G.indexOf(null);if(c>=0)s.G[c]='pal'}
log(me?'Victoire ! '+s.n+' est conquise : vous pouvez y construire.':old=='p'?'⚠️ '+s.n+' est tombée aux mains de l’ennemi !':'L’ennemi occupe '+s.n+'.')}
else if(bt.dd){const old=s.o;if(old!='n'){s.o='n';s.u={b:0,e:0,z:0,f:0,c:0};s.G=s.M.map(v=>v?null:'x');s.Q=[];s.K={};s.R={w:0,g:0};s.pp=0}else s.u=bt.ds;
if(bt.aw&&tot(bt.as)){const hm=I[f.fr].o==f.o?f.fr:own(f.o).filter(i=>i!=f.to).sort((a,b)=>Math.hypot(I[a].x-s.x,I[a].y-s.y)-Math.hypot(I[b].x-s.x,I[b].y-s.y))[0];if(hm!=null){const v=Math.min(...Object.keys(U).filter(t=>bt.as[t]).map(t=>U[t].s));F.push({o:f.o,to:hm,fr:f.to,u:{...bt.as},p:0,pa:f.pa||0,dur:Math.hypot(I[hm].x-s.x,(I[hm].y-s.y)*.62)/v})}}
log(old=='n'?(me?'Défenses de '+s.n+' détruites, mais sans Colosse impossible de l’occuper : vos vaisseaux rentrent.':''):(me?s.n+' est détruite et devient neutre, faute de Colosse pour l’occuper.':old=='p'?'⚠️ '+s.n+' est détruite et devient neutre !':''))}
else{s.u=bt.ds;log(me?'Attaque repoussée à '+s.n+'.':s.o=='p'?'Vous repoussez une attaque sur '+s.n+'.':'')}
if(me||bt.od=='p')bn=fin=bt}

function tick(dt){T+=dt;ct+=dt;while(ct>=CY){ct-=CY;cn++;for(const s of I)if(s.o!='n'){const q=prod(s);s.R.w+=q.w;s.R.g+=q.g}}
for(const s of I){const q=s.Q[0];if(q){q.t-=dt*Math.sqrt(s.pop/8);if(q.t<=0){s.Q.shift();if(U[q.k]){s.pop=Math.max(1,s.pop-U[q.k].p);s.u[q.k]++;s.o=='p'&&log(U[q.k].n+' prêt à '+s.n+'.')}else if(SK[q.k]){s.K[q.k]=1;s.o=='p'&&log('Compétence « '+SK[q.k][0]+' » acquise à '+s.n+'.')}else s.o=='p'&&log(BN[q.k][0]+' : construction terminée à '+s.n+'.')}}}
for(const s of I)if(s.o!='n'){const d=food(s)-s.pop,e=-d-2;if(d>0){s.pt=Math.max(0,s.pt)+dt*d/60;if(s.pt>=1){s.pop++;s.pt-=1}}else if(e>0&&s.pop>1&&!s.pp){s.pt=Math.min(0,s.pt)-dt*e/60;if(s.pt<=-1){s.pop--;s.pt+=1}}else s.pt=0}
for(const f of F)f.p+=dt/f.dur;F.filter(f=>f.p>=1).forEach(arr);F=F.filter(f=>f.p<1);
const E=own('e');ecd-=dt;eatk-=dt;
if(ecd<=0&&E.length){ecd=2;ai(E);
}
if(eatk<=0&&E.length){const e=E.filter(x=>I[x].u.c>0).sort((a,b)=>pw(I[b].u,'a')-pw(I[a].u,'a'))[0];if(e==null)eatk=8;else{const s=I[e],A=pw(s.u,'a')*.8,dd=dfn,sc=j=>I[j].o=='p'&&dd(j)*2<A?-1000:Math.hypot(I[j].x-s.x,I[j].y-s.y)+(I[j].o=='p'?30:0),c=I.map((x,j)=>j).filter(j=>I[j].o!='e'&&dd(j)*1.15<A).sort((a,b)=>sc(a)-sc(b));
if(c.length){const u={};for(const t in U)u[t]=t=='c'?1:Math.floor(s.u[t]*.8);sendU(e,c[0],u);eatk=25+Math.random()*15;if(I[c[0]].o=='p')log('⚠️ Flotte ennemie en approche vers '+I[c[0]].n+' !')}else eatk=8}}
if(!own('p').length&&!F.some(f=>f.o=='p'))end('Défaite','Vous n’avez plus aucune île.');else if(!own('e').length&&!F.some(f=>f.o=='e'))end('Victoire !','L’ennemi n’a plus aucune île.')}

function end(t,m){over=1;$('ov').hidden=0;$('ov').innerHTML=`<div><h2>${t}</h2><p>${m}</p><p class=m>Durée : ${Math.round(T)} s de jeu</p>${fin?'<button onclick="fb()">⚔️ Voir la bataille finale</button> ':''}<button onclick="location.reload()">Rejouer</button></div>`}
