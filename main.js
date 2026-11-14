const $=s=>document.querySelector(s);$("#mb").onclick=()=>$("#nv").classList.toggle("open");
const sl=[...document.querySelectorAll(".sl")],dt=[...document.querySelectorAll(".dots i")];let c=0,tm;
function go(n){if(!sl.length)return;c=(n+sl.length)%sl.length;sl.forEach((s,i)=>s.classList.toggle("on",i==c));dt.forEach((d,i)=>d.classList.toggle("on",i==c))}
if(sl.length){go(0);dt.forEach((d,i)=>d.onclick=()=>{go(i);rs()});$(".pv").onclick=()=>{go(c-1);rs()};$(".nx").onclick=()=>{go(c+1);rs()};const rs=()=>{clearInterval(tm);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)tm=setInterval(()=>go(c+1),5500)};rs()}
const wa=t=>window.open("https://wa.me/918075120420?text="+encodeURIComponent(t),"_blank");
const f=$("#cf");if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);wa(`Hi KKC Group, I am ${d.get("n")} (${d.get("p")}). Enquiry about: ${d.get("s")}. ${d.get("m")}`)};
$("#ff").onsubmit=e=>{e.preventDefault();wa("Hi KKC Group, please call me back on "+new FormData(e.target).get("p"))};
const lb=$("#lb");if(lb){document.querySelectorAll(".gal img").forEach(i=>i.onclick=()=>{lb.querySelector("img").src=i.src;lb.querySelector("p").textContent=i.alt;lb.hidden=false});lb.onclick=e=>{if(e.target.tagName!="IMG")lb.hidden=true};addEventListener("keydown",e=>{if(e.key=="Escape")lb.hidden=true})}
const st=$("#cst");if(st){const rd=matchMedia("(prefers-reduced-motion:reduce)").matches;let t2;
const step=()=>st.querySelector(".card").offsetWidth+parseFloat(getComputedStyle(st).columnGap||24);
const mv=d=>{const mx=st.scrollWidth-st.clientWidth;if(d>0&&st.scrollLeft>=mx-4)st.scrollTo({left:0});else if(d<0&&st.scrollLeft<=4)st.scrollTo({left:mx});else st.scrollBy({left:d*step()})};
const rs2=()=>{clearInterval(t2);if(!rd)t2=setInterval(()=>mv(1),4000)};
$(".sp").onclick=()=>{mv(-1);rs2()};$(".sn").onclick=()=>{mv(1);rs2()};
const w=st.parentElement;w.onmouseenter=()=>clearInterval(t2);w.onmouseleave=rs2;w.addEventListener("focusin",()=>clearInterval(t2));w.addEventListener("focusout",rs2);rs2()}

const rv=document.querySelectorAll(".rv");if(rv.length){if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("vis");setTimeout(()=>e.target.style.setProperty("--d","0s"),1500);io.unobserve(e.target)}}),{threshold:.15});rv.forEach(e=>io.observe(e))}else rv.forEach(e=>e.classList.add("vis"))}
const pj=[...document.querySelectorAll(".pjs")],pb=[...document.querySelectorAll(".pjl button")];
if(pj.length){let pi=0;const ps=n=>{pi=(n+pj.length)%pj.length;pj.forEach((e,i)=>{e.classList.toggle("on",i==pi);e.tabIndex=i==pi?0:-1});pb.forEach((e,i)=>e.classList.toggle("on",i==pi))};
pb.forEach((b,i)=>{b.onclick=()=>ps(i);b.onmouseenter=()=>{if(matchMedia("(hover:hover)").matches)ps(i)};b.querySelector(".bar").addEventListener("animationend",()=>ps(pi+1))})}

const fb=document.querySelectorAll(".gf button");fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.classList.toggle("on",x==b));document.querySelectorAll(".gal article").forEach(a=>a.hidden=b.dataset.c!="all"&&a.dataset.c!=b.dataset.c)});

document.querySelectorAll(".gal .zoom").forEach(b=>b.onclick=()=>b.closest("article").querySelector("img").click());
