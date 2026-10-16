I.forEach((s,i)=>{const b=document.createElement('button');b.style.left=s.x+'%';b.style.top=s.y+'%';b.onclick=()=>{sel=i;snd=null;plc=null;cel=null;crb=null;if(I[i].o=='p'){lastOwn=i;view='isl';if(I[i].pp){plc='pal';tab='con'}}else view='map';draw()};$('map').appendChild(b);s.el=b});
function blob(n){const M=Array(GN).fill(0);M[Math.floor(Math.random()*GN)]=1;let k=1;while(k<n){const o=[];M.forEach((m,i)=>{if(m){const x=i%GW,y=i/GW|0;[[1,0],[-1,0],[0,1],[0,-1]].forEach(([dx,dy])=>{const a=x+dx,b=y+dy;if(a>=0&&a<GW&&b>=0&&b<GH&&!M[b*GW+a])o.push(b*GW+a)})}});M[o[Math.random()*o.length|0]]=1;k++}return M}

function setup(){const d=(a,b)=>Math.hypot(a.x-b.x,(a.y-b.y)*.62),r=(a,b)=>a+Math.random()*(b-a),m=p=>({x:100-p.x,y:98-p.y}),g=()=>({b:2+Math.floor(Math.random()*4),z:Math.floor(Math.random()*3),e:0,f:0,c:0});
for(let n=0;n<600;n++){const a={x:r(16,84),y:r(16,82)},b={x:r(16,84),y:r(16,82)},P=[I[0],I[1],a,b,m(a),m(b)];
if(P.every((p,i)=>P.every((q,j)=>i>=j||d(p,q)>=22))){const g1=g(),g2=g();[[a,g1],[m(a),g1],[b,g2],[m(b),g2]].forEach(([p,u],k)=>{const s=I[k+2];s.x=Math.round(p.x);s.y=Math.round(p.y);s.u={...u}});break}}
const K=14+Math.floor(Math.random()*7),B1=blob(8+Math.floor(Math.random()*15)),B2=blob(8+Math.floor(Math.random()*15));
[CAP,[...CAP].reverse(),B1,[...B1].reverse(),B2,[...B2].reverse()].forEach((m,i)=>{const s=I[i];s.M=m;s.G=m.map(v=>v?null:'x')});
[0,1].forEach(i=>{const s=I[i],d=j=>Math.hypot(j%GW-(GW-1)/2,(j/GW|0)-(GH-1)/2),L=s.G.map((v,j)=>v?-1:j).filter(j=>j>=0).sort((a,b)=>d(a)-d(b));if(i==1)s.G[L[0]]='pal';else s.pp=1});
[2,4].forEach(i=>{const t=['car','cha','pom'][Math.random()*3|0],a=I[i],b=I[i+1],L=a.G.map((v,j)=>v?-1:j).filter(j=>j>=0),c=L[Math.random()*L.length|0];a.G[c]=t;b.G[GN-1-c]=t;a.pop=b.pop=5});
{const fr=i=>I[i].G.map((g,j)=>g?-1:j).filter(j=>j>=0),put=(a,b)=>{const L=fr(a);if(!L.length)return;const c=L[Math.random()*L.length|0],m=GN-1-c;if(I[b].M[m]&&!I[b].G[m]){I[a].CR=[c];I[b].CR=[m]}};
if(Math.random()<.5)put(0,1);[[2,3],[4,5]].forEach(([a,b])=>{if(Math.random()<.4)put(a,b)})}
const nm=['Aérie','Nimbus','Zéphyr','Brume','Orage','Cirrus','Cumulus','Stratus','Aquilon','Borée','Mistral','Alizé','Éole','Zénith','Aurore','Rafale','Bourrasque','Frimas','Azur'].sort(()=>Math.random()-.5);I.forEach((s,i)=>s.n=nm[i]);
I.forEach(s=>{s.el.style.left=s.x+'%';s.el.style.top=s.y+'%'})}

$('go').onclick=()=>{sp0=({p:15/45,r:1,c:15/450})[mode];sp=sp0;setup();started=1;$('app').classList.remove('pre');$('go').remove();$('how').remove();$('md').remove();draw()};
setInterval(()=>{if(started&&!over&&!paused&&!bat){tick(.25*sp);draw()}},250);
draw();