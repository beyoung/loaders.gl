(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[74],{47084:function(e,t,n){var s=n(25108);!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:_,table:_,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function i(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||v.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=g(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=g(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=g(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=g(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=g(n._paragraph).replace("hr",n.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",n._tag).getRegex(),n.blockquote=g(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:g("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:_,paragraph:g(n.normal._paragraph).replace("hr",n.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",n.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),i.rules=n,i.lex=function(e,t){return new i(t).lex(e)},i.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},i.prototype.token=function(e,t){var s,i,r,a,o,l,h,c,u,g,d,f,m,_,b,y;for(e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e)){var w=this.tokens[this.tokens.length-1];e=e.substring(r[0].length),w&&"paragraph"===w.type?w.text+="\n"+r[0].trimRight():(r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?r:x(r,"\n")}))}else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2]?r[2].trim():r[2],text:r[3]||""});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if((r=this.rules.nptable.exec(e))&&(l={type:"table",header:k(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(r[0].length),d=0;d<l.align.length;d++)/^ *-+: *$/.test(l.align[d])?l.align[d]="right":/^ *:-+: *$/.test(l.align[d])?l.align[d]="center":/^ *:-+ *$/.test(l.align[d])?l.align[d]="left":l.align[d]=null;for(d=0;d<l.cells.length;d++)l.cells[d]=k(l.cells[d],l.header.length);this.tokens.push(l)}else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),h={type:"list_start",ordered:_=(a=r[2]).length>1,start:_?+a:"",loose:!1},this.tokens.push(h),c=[],s=!1,m=(r=r[0].match(this.rules.item)).length,d=0;d<m;d++)g=(l=r[d]).length,~(l=l.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(g-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+g+"}","gm"),"")),d!==m-1&&(o=n.bullet.exec(r[d+1])[0],(a.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==a)&&(e=r.slice(d+1).join("\n")+e,d=m-1)),i=s||/\n\n(?!\s*$)/.test(l),d!==m-1&&(s="\n"===l.charAt(l.length-1),i||(i=s)),i&&(h.loose=!0),y=void 0,(b=/^\[[ xX]\] /.test(l))&&(y=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:b,checked:y,loose:i},c.push(u),this.tokens.push(u),this.token(l,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(m=c.length,d=0;d<m;d++)c[d].loose=!0;this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===r[1]||"script"===r[1]||"style"===r[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):p(r[0]):r[0]});else if(t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),f=r[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:r[2],title:r[3]});else if((r=this.rules.table.exec(e))&&(l={type:"table",header:k(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(r[0].length),d=0;d<l.align.length;d++)/^ *-+: *$/.test(l.align[d])?l.align[d]="right":/^ *:-+: *$/.test(l.align[d])?l.align[d]="center":/^ *:-+ *$/.test(l.align[d])?l.align[d]="left":l.align[d]=null;for(d=0;d<l.cells.length;d++)l.cells[d]=k(l.cells[d].replace(/^ *\| *| *\| *$/g,""),l.header.length);this.tokens.push(l)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2].charAt(0)?1:2,text:r[1]});else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var r={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function a(e,t){if(this.options=t||v.defaults,this.links=e,this.rules=r.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.options.breaks?this.rules=r.breaks:this.rules=r.gfm)}function o(e){this.options=e||v.defaults}function l(){}function h(e){this.tokens=[],this.token=null,this.options=e||v.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new c}function c(){this.seen={}}function p(e,t){if(t){if(p.escapeTest.test(e))return e.replace(p.escapeReplace,(function(e){return p.replacements[e]}))}else if(p.escapeTestNoEncode.test(e))return e.replace(p.escapeReplaceNoEncode,(function(e){return p.replacements[e]}));return e}function u(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}function g(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function d(e,t,n){if(e){try{var s=decodeURIComponent(u(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return null}if(0===s.indexOf("javascript:")||0===s.indexOf("vbscript:")||0===s.indexOf("data:"))return null}t&&!m.test(n)&&(n=function(e,t){f[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=x(e,"/",!0));return e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(i){return null}return n}r._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",r.em=g(r.em).replace(/punctuation/g,r._punctuation).getRegex(),r._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=g(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,r.tag=g(r.tag).replace("comment",n._comment).replace("attribute",r._attribute).getRegex(),r._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,r._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,r._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,r.link=g(r.link).replace("label",r._label).replace("href",r._href).replace("title",r._title).getRegex(),r.reflink=g(r.reflink).replace("label",r._label).getRegex(),r.normal=b({},r),r.pedantic=b({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",r._label).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",r._label).getRegex()}),r.gfm=b({},r.normal,{escape:g(r.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),r.gfm.url=g(r.gfm.url,"i").replace("email",r.gfm._extended_email).getRegex(),r.breaks=b({},r.gfm,{br:g(r.br).replace("{2,}","*").getRegex(),text:g(r.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),a.rules=r,a.output=function(e,t,n){return new a(t,n).output(e)},a.prototype.output=function(e){for(var t,n,s,i,r,o,l="";e;)if(r=this.rules.escape.exec(e))e=e.substring(r[0].length),l+=p(r[1]);else if(r=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(r[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(r[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.inRawBlock=!1),e=e.substring(r[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):p(r[0]):r[0];else if(r=this.rules.link.exec(e)){var h=y(r[2],"()");if(h>-1){var c=4+r[1].length+h;r[2]=r[2].substring(0,h),r[0]=r[0].substring(0,c).trim(),r[3]=""}e=e.substring(r[0].length),this.inLink=!0,s=r[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s))?(s=t[1],i=t[3]):i="":i=r[3]?r[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(r,{href:a.escapes(s),title:a.escapes(i)}),this.inLink=!1}else if((r=this.rules.reflink.exec(e))||(r=this.rules.nolink.exec(e))){if(e=e.substring(r[0].length),t=(r[2]||r[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){l+=r[0].charAt(0),e=r[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(r,t),this.inLink=!1}else if(r=this.rules.strong.exec(e))e=e.substring(r[0].length),l+=this.renderer.strong(this.output(r[4]||r[3]||r[2]||r[1]));else if(r=this.rules.em.exec(e))e=e.substring(r[0].length),l+=this.renderer.em(this.output(r[6]||r[5]||r[4]||r[3]||r[2]||r[1]));else if(r=this.rules.code.exec(e))e=e.substring(r[0].length),l+=this.renderer.codespan(p(r[2].trim(),!0));else if(r=this.rules.br.exec(e))e=e.substring(r[0].length),l+=this.renderer.br();else if(r=this.rules.del.exec(e))e=e.substring(r[0].length),l+=this.renderer.del(this.output(r[1]));else if(r=this.rules.autolink.exec(e))e=e.substring(r[0].length),s="@"===r[2]?"mailto:"+(n=p(this.mangle(r[1]))):n=p(r[1]),l+=this.renderer.link(s,null,n);else if(this.inLink||!(r=this.rules.url.exec(e))){if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.inRawBlock?l+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):p(r[0]):r[0]):l+=this.renderer.text(p(this.smartypants(r[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===r[2])s="mailto:"+(n=p(r[0]));else{do{o=r[0],r[0]=this.rules._backpedal.exec(r[0])[0]}while(o!==r[0]);n=p(r[0]),s="www."===r[1]?"http://"+n:n}e=e.substring(r[0].length),l+=this.renderer.link(s,null,n)}return l},a.escapes=function(e){return e?e.replace(a.rules._escapes,"$1"):e},a.prototype.outputLink=function(e,t){var n=t.href,s=t.title?p(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,p(e[1]))},a.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e},a.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",s=e.length,i=0;i<s;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){var s=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,s);null!=i&&i!==e&&(n=!0,e=i)}return s?'<pre><code class="'+this.options.langPrefix+p(s,!0)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,n){var s=t?"ol":"ul";return"<"+s+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+s+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var s='<a href="'+p(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},o.prototype.image=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},l.prototype.strong=l.prototype.em=l.prototype.codespan=l.prototype.del=l.prototype.text=function(e){return e},l.prototype.link=l.prototype.image=function(e,t,n){return""+n},l.prototype.br=function(){return""},h.parse=function(e,t){return new h(t).parse(e)},h.prototype.parse=function(e){this.inline=new a(e.links,this.options),this.inlineText=new a(e.links,b({},this.options,{renderer:new l})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},h.prototype.next=function(){return this.token=this.tokens.pop(),this.token},h.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},h.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},h.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,i,r="",a="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(r+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",i=0;i<t.length;i++)n+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});a+=this.renderer.tablerow(n)}return this.renderer.table(r,a);case"blockquote_start":for(a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":a="";for(var o=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,o,l);case"list_item_start":a="";var h=this.token.loose,c=this.token.checked,p=this.token.task;for(this.token.task&&(a+=this.renderer.checkbox(c));"list_item_end"!==this.next().type;)a+=h||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(a,p,c);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var g='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(g);s.log(g)}},c.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},p.escapeTest=/[&<>"']/,p.escapeReplace=/[&<>"']/g,p.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,p.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var f={},m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function _(){}function b(e){for(var t,n,s=1;s<arguments.length;s++)for(n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function k(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var s=!1,i=t;--i>=0&&"\\"===n[i];)s=!s;return s?"|":" |"})).split(/ \|/),s=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function x(e,t,n){if(0===e.length)return"";for(var s=0;s<e.length;){var i=e.charAt(e.length-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,e.length-s)}function y(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=0,s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&--n<0)return s;return-1}function w(e){e&&e.sanitize&&!e.silent&&s.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function v(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),w(t=b({},v.defaults,t||{}));var s,r,a=t.highlight,o=0;try{s=i.lex(e,t)}catch(c){return n(c)}r=s.length;var l=function(e){if(e)return t.highlight=a,n(e);var i;try{i=h.parse(s,t)}catch(c){e=c}return t.highlight=a,e?n(e):n(null,i)};if(!a||a.length<3)return l();if(delete t.highlight,!r)return l();for(;o<s.length;o++)!function(e){"code"!==e.type?--r||l():a(e.text,e.lang,(function(t,n){return t?l(t):null==n||n===e.text?--r||l():(e.text=n,e.escaped=!0,void(--r||l()))}))}(s[o])}else try{return t&&(t=b({},v.defaults,t)),w(t),h.parse(i.lex(e,t),t)}catch(c){if(c.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||v.defaults).silent)return"<p>An error occurred:</p><pre>"+p(c.message+"",!0)+"</pre>";throw c}}_.exec=_,v.options=v.setOptions=function(e){return b(v.defaults,e),v},v.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new o,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},v.defaults=v.getDefaults(),v.Parser=h,v.parser=h.parse,v.Renderer=o,v.TextRenderer=l,v.Lexer=i,v.lexer=i.lex,v.InlineLexer=a,v.inlineLexer=a.output,v.Slugger=c,v.parse=v,e.exports=v}(this||("undefined"!=typeof window?window:n.g))},95789:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(58654),i=n(52025),r=n(67147);const a={bearing:0,pitch:0,position:[0,0,0]},o={speed:1.2,curve:1.414};class l extends s.Z{constructor(e={}){super({compare:["longitude","latitude","zoom","bearing","pitch","position"],extract:["width","height","longitude","latitude","zoom","bearing","pitch","position"],required:["width","height","latitude","longitude","zoom"]}),this.opts={...o,...e}}interpolateProps(e,t,n){const s=(0,r.if)(e,t,n,this.opts);for(const r in a)s[r]=(0,i.t7)(e[r]||a[r],t[r]||a[r],n);return s}getDuration(e,t){let{transitionDuration:n}=t;return"auto"===n&&(n=(0,r.up)(e,t,this.opts)),n}}},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},33562:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var s=n(81180);const i=1024,r=1048576,a=1024*r;function o(e){let t,n,s;return e<1?(t=1e3*e,n="\u03bcs",s=0):e<1e3?(t=e,n="ms",s=2):(t=e/1e3,n="s",s=2),"".concat(t.toFixed(s)).concat(n)}var l=n(8700);const h={position:"fixed",zIndex:1e4,color:"#ccc",background:"#000",fontFamily:"Helvetica,Arial,sans-serif",padding:"8px",fontSize:"12px",lineSpacing:6},c={fontSize:"16px",cursor:"pointer"},p={paddingLeft:"8px"},u=e=>"".concat(e.name,": ").concat(e.count),g={count:u,averageTime:e=>"".concat(e.name,": ").concat(o(e.getAverageTime())),totalTime:e=>"".concat(e.name,": ").concat(o(e.time)),fps:e=>"".concat(e.name,": ").concat(Math.round(e.getHz()),"fps"),memory:e=>"".concat(e.name,": ").concat(function(e){let t,n,s;return e<i?(t=e,n=" bytes",s=0):e<r?(t=e/i,n="kB",s=2):e<a?(t=e/r,n="MB",s=2):(t=e/a,n="GB",s=2),"".concat(t.toFixed(s)).concat(n)}(e.count))};class d{constructor(e,t){(0,s.Z)(this,"stats",void 0),(0,s.Z)(this,"title",void 0),(0,s.Z)(this,"collapsed",!1),(0,s.Z)(this,"_framesPerUpdate",void 0),(0,s.Z)(this,"_formatters",g),(0,s.Z)(this,"_css",void 0),(0,s.Z)(this,"_headerCSS",void 0),(0,s.Z)(this,"_itemCSS",void 0),(0,s.Z)(this,"_container",document.body),(0,s.Z)(this,"_innerContainer",null),(0,s.Z)(this,"_statsContainer",null),(0,s.Z)(this,"_header",null),(0,s.Z)(this,"_resetOnUpdate",{}),(0,s.Z)(this,"_counter",0),(0,s.Z)(this,"_items",{}),(0,s.Z)(this,"_added",!1),this.stats=e,this.title=null==t?void 0:t.title,this._framesPerUpdate=Math.round(Math.max((null==t?void 0:t.framesPerUpdate)||1,1)),this._initializeFormatters(t),this._initializeUpdateConfigs(t),this._css=Object.assign({},h,null==t?void 0:t.css),this._headerCSS=Object.assign({},c,this._css.header),this._itemCSS=Object.assign({},p,this._css.item),delete this._css.header,delete this._css.item,this._createDOM(null==t?void 0:t.container),this._createDOMStats()}setStats(e){this.stats=e,this._createDOMStats(),this._setHeaderContent(),this.update()}update(){const e=this.stats&&this.stats.stats;e&&0!==Object.keys(e).length&&this._counter++%this._framesPerUpdate==0&&this._update()}remove(){this._innerContainer&&this._container.removeChild(this._innerContainer)}setCollapsed(e){this.collapsed=e,this._statsContainer&&(this._statsContainer.style.display=this.collapsed?"none":"block"),this._setHeaderContent()}_update(){this.stats.forEach((e=>{this._createDOMItem(e.name),this._items[e.name].innerHTML=this._getLines(e).join("<BR>"),this._resetOnUpdate[e.name]&&e.reset()}))}_initializeFormatters(e){if(null!=e&&e.formatters)for(const t in e.formatters){let n=e.formatters[t];"string"==typeof n&&(n=g[n]),n&&(this._formatters[t]=n)}}_initializeUpdateConfigs(e){if(null!=e&&e.resetOnUpdate)for(const t in e.resetOnUpdate)this._resetOnUpdate[t]=e.resetOnUpdate[t]||!1}_createDOM(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if("undefined"!=typeof document&&document){this._container=e,this._innerContainer=document.createElement("div");for(const e in this._css)this._innerContainer.style[e]=this._css[e];this._container.appendChild(this._innerContainer),this._createDOMHeader(),this._statsContainer=document.createElement("div"),this._statsContainer.style.display="block",this._innerContainer.appendChild(this._statsContainer)}}_createDOMHeader(){if(!this._header){var e;this._header=document.createElement("div");for(const e in this._headerCSS)this._header.style[e]=this._headerCSS[e];this._header.onclick=this._toggleCollapsed.bind(this),null===(e=this._innerContainer)||void 0===e||e.appendChild(this._header)}this._setHeaderContent()}_setHeaderContent(){if(this._header){const e=this.collapsed?"\u25b6":"\u2b07",t=this.title||this.stats&&this.stats.id||"Stats";this._header.innerText="".concat(e," ").concat(t)}}_toggleCollapsed(){this.setCollapsed(!this.collapsed)}_createDOMStats(){this.stats instanceof l.jk&&this.stats.forEach((e=>{this._createDOMItem(e.name)}))}_createDOMItem(e){if(this._statsContainer&&!this._items[e]){this._items[e]=document.createElement("div");for(const t in this._itemCSS)this._items[e].style[t]=this._itemCSS[t];this._statsContainer.appendChild(this._items[e])}}_getLines(e){const t=this._formatters[e.name]||this._formatters[e.type||""]||u;return e?t(e).split("\n"):[]}}}}]);