/* Multinomial Naive Bayes, bag of words, Laplace smoothing. No dependencies. */
const STOP = new Set('the a an and or to of for in on is are our we please with this has have be it at from'.split(' '));
function tokenize(text){return (text.toLowerCase().match(/[a-z]+/g)||[]).filter(w=>w.length>1&&!STOP.has(w));}
function train(rows){
 const vocab=new Set(), classes={};
 for(const row of rows){const c=classes[row.label]||(classes[row.label]={docs:0,total:0,counts:{}});c.docs++;for(const w of tokenize(row.text)){vocab.add(w);c.counts[w]=(c.counts[w]||0)+1;c.total++;}}
 return {classes,vocab,n:rows.length};
}
function predict(model,text){
 const words=tokenize(text).filter(w=>model.vocab.has(w));
 if(!words.length)return {label:'Needs review',scores:[],evidence:[],reason:'No known vocabulary. Add a more detailed English account email.'};
 const raw=Object.entries(model.classes).map(([label,c])=>({label,log:Math.log(c.docs/model.n)+words.reduce((s,w)=>s+Math.log(((c.counts[w]||0)+1)/(c.total+model.vocab.size)),0)}));
 const max=Math.max(...raw.map(r=>r.log)),sum=raw.reduce((s,r)=>s+Math.exp(r.log-max),0);
 const scores=raw.map(r=>({label:r.label,score:Math.exp(r.log-max)/sum})).sort((a,b)=>b.score-a.score);
 const best=scores[0], evidence=[...new Set(words)].map(w=>{const c=model.classes[best.label];const own=((c.counts[w]||0)+1)/(c.total+model.vocab.size);const other=Math.max(...Object.entries(model.classes).filter(([l])=>l!==best.label).map(([,v])=>((v.counts[w]||0)+1)/(v.total+model.vocab.size)));return {word:w,weight:Math.log(own/other)};}).filter(x=>x.weight>0).sort((a,b)=>b.weight-a.weight).slice(0,5).map(x=>x.word);
 return {label:best.score<0.6?'Needs review':best.label,scores,evidence,reason:best.score<0.6?'Model score is below the 60% review threshold.':''};
}
function evaluate(model,rows){const labels=Object.keys(model.classes),matrix={};for(const l of labels)matrix[l]=Object.fromEntries([...labels,'Needs review'].map(c=>[c,0]));let correct=0;for(const r of rows){const pred=predict(model,r.text).label;matrix[r.label][pred]++;correct+=pred===r.label;}return {correct,total:rows.length,accuracy:correct/rows.length,matrix};}
if(typeof module!=='undefined')module.exports={train,predict,evaluate,tokenize};
