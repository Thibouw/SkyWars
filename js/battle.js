$('alert').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.x){bn=null;draw()}else openB()};
$('bs').onclick=()=>{bx2=!bx2;$('bs').classList.toggle('on',bx2)};
$('bx').onclick=()=>{cancelAnimationFrame(raf);$('bv').hidden=1;bat=null;if(over)$('ov').hidden=0;draw()};
function openB(){const b=bn;if(!b)return;bn=null;bat=b;$('bv').hidden=0;$('bs').classList.toggle('on',!!bx2);$('bt').textContent='Les troupes arrivent à '+I[b.to].n+'…';
const g=$('cv').getContext('2d'),W=900,H=560,pa=b.ao=='p',pwn=pa?b.aw:!b.aw,T0=performance.now(),ta=2.2,
lm=b.M.map((v,i)=>v?i:-1).filter(i=>i>=0),cs=lm.map(i=>i%GW),rs=lm.map(i=>i/GW|0),X0=W/2-(Math.min(...cs)+Math.max(...cs)+1)*16,Y0=H/2-(Math.min(...rs)+Math.max(...rs)+1)*16,
cp=i=>({px:X0+(i%GW)*32+15,py:Y0+(i/GW|0)*32+15}),pk=L=>L[Math.random()*L.length|0],emp=!b.D.length,rounds=emp?4:b.rounds,tr=Math.min(.9,7/Math.max(1,rounds)),
lay=(L,left,mine)=>{const gr=L.filter(s=>s.cat=='a'||s.cat=='g'),cols=Math.min(5,Math.ceil(gr.length/8)||1),rows=Math.ceil(gr.length/cols);
gr.forEach((s,i)=>{s.x=left?90+(i%cols)*48:W-90-(i%cols)*48;s.y=H/2-rows*22+(i/cols|0)*44+22;s.d=left?0:i*.05});
let kf=0,kp=0;L.filter(s=>s.cat=='f'||s.cat=='x'||s.cat=='p').forEach(s=>{const c=(s.cat=='f'?b.fc[kf++]:s.cat=='x'?b.pc[kp++]:s.cell)||0;s.x=X0+(c%GW)*32+15;s.y=Y0+(c/GW|0)*32+22;s.d=0});L.forEach(s=>{s.own=mine;s.col=COL[mine]})};
lay(b.A,0,b.ao);lay(b.D,1,b.od);
const all=[...b.A,...b.D],bl=lm.filter(i=>b.G[i]&&!b.fc.includes(i)),pool=bl.length?bl:lm,
sh=emp?b.A.flatMap(s=>[1,2,3,4].map(r=>({r,s,e:cp(pk(pool)),fx:1}))):b.sh;let done=0,st=0,tt=0,lt=performance.now();all.forEach(s=>s.dt=null);
const frame=now=>{tt+=(now-lt)/1000*(bx2?1:.5);lt=now;const t=tt,tb=t-ta,n=I[b.to].n;g.clearRect(0,0,W,H);g.textAlign='center';g.lineWidth=1;g.strokeStyle='#7ff';
for(const s of all){const u=Math.min(1,Math.max(0,(t-s.d)/1.6));s.px=s.x+(s.sd?0:(1-u*u*(3-2*u))*560);s.py=s.y}
for(const i of lm){const c=i%GW,r=i/GW|0;g.strokeRect(X0+c*32,Y0+r*32,30,30);if(b.G[i]&&BN[b.G[i]]&&!b.fc.includes(i)&&!b.pc.includes(i)&&!b.sc.includes(i)){g.font='20px serif';g.fillText(BN[b.G[i]][2],X0+c*32+15,Y0+r*32+22)}}
all.forEach(s=>s.c=s.mx);for(const x of sh)if(!x.fx&&(x.r-1)*tr+.5<=tb)x.e.c-=x.s.a;all.forEach(s=>{if(s.c<=0&&s.dt==null)s.dt=tb});
g.lineWidth=2;g.font='20px serif';for(const q of sh){const t0=(q.r-1)*tr,p=(tb-t0)/.5;if(tb<0||p<0||p>1.6||q.s.dt!=null&&q.s.dt<=t0)continue;
const x0=q.s.px,y0=q.s.py,x1=q.e.px,y1=q.e.py;
if(p<=1.3){const cx=(x0+x1)/2,cy=Math.min(y0,y1)-50-(t0*977%1)*60,u0=Math.max(0,p-.3),u1=Math.min(1,p);g.strokeStyle=q.s.col;g.beginPath();
for(let k=0;k<=8;k++){const u=u0+(u1-u0)*k/8,m=1-u,x=m*m*x0+2*m*u*cx+u*u*x1,y=m*m*y0+2*m*u*cy+u*u*y1;k?g.lineTo(x,y):g.moveTo(x,y)}g.stroke()}
if(q.fx&&p>=1)g.fillText('💥',x1,y1+8)}
g.font='22px serif';for(const s of all){if(s.c>0){const im=IM[s.t]&&tint(s.t,s.own);if(im&&(im.width||im.naturalWidth)){const w=({b:36,e:48,z:52,f:66,c:84})[s.t],h=w*(im.height||im.naturalHeight)/(im.width||im.naturalWidth);g.save();g.shadowColor=s.col;g.shadowBlur=12;g.translate(s.px,s.py-8);if(s.sd)g.scale(-1,1);g.drawImage(im,-w/2,-h/2,w,h);g.restore()}else g.fillText(U[s.t]?U[s.t].i:BN[s.t][2],s.px,s.py);const h=s.c/s.mx;g.fillStyle='#0008';g.fillRect(s.px-13,s.py-26,26,4);g.fillStyle=h>.5?'#7e7':h>.25?'#ee5':'#e55';g.fillRect(s.px-13,s.py-26,26*h,4)}else if(tb-s.dt<.5)g.fillText('💥',s.px,s.py)}
if(emp&&tb>rounds*tr+.4){g.font='34px serif';g.fillText('🚩',W/2,Y0-6)}
if(tb>0&&!st){st=1;$('bt').textContent=emp?'Aucune défense : les assaillants pillent '+n+'…':'Combat à '+n+' !'}
if(tb>rounds*tr+1&&!done){done=1;$('bt').textContent=pa?(b.cq?'Victoire ! '+n+' est conquise.':b.dd?'Tout est détruit, mais sans Colosse l’île ne peut être occupée : elle devient neutre'+(b.aw?' et vos vaisseaux rentrent.':'.'):'Défaite : votre flotte est détruite.'):(b.cq?n+' est tombée aux mains de l’ennemi.':b.dd?n+' est détruite et devient neutre.':'Attaque repoussée à '+n+'.')}
raf=requestAnimationFrame(frame)};raf=requestAnimationFrame(frame)}

function fb(){$('ov').hidden=1;bn=fin;openB()}
