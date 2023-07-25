var Kt=Object.defineProperty;var qt=(j,S,M)=>S in j?Kt(j,S,{enumerable:!0,configurable:!0,writable:!0,value:M}):j[S]=M;var E=(j,S,M)=>(qt(j,typeof S!="symbol"?S+"":S,M),M);import{m as Xt,__tla as Bt}from"./index-0948bbed.js";let ge,st,le,fe,he,ct,ut,pe,ve,me,_e,dt,gt,be,ke,T,re,lt,C,L,$t=Promise.all([(()=>{try{return Bt}catch{}})()]).then(async()=>{var j=Object.defineProperty,S=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,ft=Object.prototype.hasOwnProperty,ht=(e,r,i,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of M(r))!ft.call(e,t)&&(i||t!=="default")&&j(e,t,{get:()=>r[t],enumerable:!(n=S(r,t))||n.enumerable});return e},l={};ht(l,Xt);let we,Ce;we=2*60*1e3,ke=class{constructor(e){E(this,"_defaults");E(this,"_idleCheckInterval");E(this,"_lastUsedTime");E(this,"_configChangeListener");E(this,"_worker");E(this,"_client");this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>we&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=l.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let r;return this._getClient().then(i=>{r=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>r)}},function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(Ce||(Ce={}));var G;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(G||(G={}));var I;(function(e){function r(n,t){return n===Number.MAX_VALUE&&(n=G.MAX_VALUE),t===Number.MAX_VALUE&&(t=G.MAX_VALUE),{line:n,character:t}}e.create=r;function i(n){var t=n;return s.objectLiteral(t)&&s.uinteger(t.line)&&s.uinteger(t.character)}e.is=i})(I||(I={}));var _;(function(e){function r(n,t,o,a){if(s.uinteger(n)&&s.uinteger(t)&&s.uinteger(o)&&s.uinteger(a))return{start:I.create(n,t),end:I.create(o,a)};if(I.is(n)&&I.is(t))return{start:n,end:t};throw new Error("Range#create called with invalid arguments["+n+", "+t+", "+o+", "+a+"]")}e.create=r;function i(n){var t=n;return s.objectLiteral(t)&&I.is(t.start)&&I.is(t.end)}e.is=i})(_||(_={}));var ie;(function(e){function r(n,t){return{uri:n,range:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&_.is(t.range)&&(s.string(t.uri)||s.undefined(t.uri))}e.is=i})(ie||(ie={}));var ye;(function(e){function r(n,t,o,a){return{targetUri:n,targetRange:t,targetSelectionRange:o,originSelectionRange:a}}e.create=r;function i(n){var t=n;return s.defined(t)&&_.is(t.targetRange)&&s.string(t.targetUri)&&(_.is(t.targetSelectionRange)||s.undefined(t.targetSelectionRange))&&(_.is(t.originSelectionRange)||s.undefined(t.originSelectionRange))}e.is=i})(ye||(ye={}));var oe;(function(e){function r(n,t,o,a){return{red:n,green:t,blue:o,alpha:a}}e.create=r;function i(n){var t=n;return s.numberRange(t.red,0,1)&&s.numberRange(t.green,0,1)&&s.numberRange(t.blue,0,1)&&s.numberRange(t.alpha,0,1)}e.is=i})(oe||(oe={}));var Ae;(function(e){function r(n,t){return{range:n,color:t}}e.create=r;function i(n){var t=n;return _.is(t.range)&&oe.is(t.color)}e.is=i})(Ae||(Ae={}));var Ee;(function(e){function r(n,t,o){return{label:n,textEdit:t,additionalTextEdits:o}}e.create=r;function i(n){var t=n;return s.string(t.label)&&(s.undefined(t.textEdit)||R.is(t))&&(s.undefined(t.additionalTextEdits)||s.typedArray(t.additionalTextEdits,R.is))}e.is=i})(Ee||(Ee={}));var V;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(V||(V={}));var xe;(function(e){function r(n,t,o,a,c){var u={startLine:n,endLine:t};return s.defined(o)&&(u.startCharacter=o),s.defined(a)&&(u.endCharacter=a),s.defined(c)&&(u.kind=c),u}e.create=r;function i(n){var t=n;return s.uinteger(t.startLine)&&s.uinteger(t.startLine)&&(s.undefined(t.startCharacter)||s.uinteger(t.startCharacter))&&(s.undefined(t.endCharacter)||s.uinteger(t.endCharacter))&&(s.undefined(t.kind)||s.string(t.kind))}e.is=i})(xe||(xe={}));var ae;(function(e){function r(n,t){return{location:n,message:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&ie.is(t.location)&&s.string(t.message)}e.is=i})(ae||(ae={}));var F;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(F||(F={}));var Ie;(function(e){e.Unnecessary=1,e.Deprecated=2})(Ie||(Ie={}));var Se;(function(e){function r(i){var n=i;return n!=null&&s.string(n.href)}e.is=r})(Se||(Se={}));var J;(function(e){function r(n,t,o,a,c,u){var d={range:n,message:t};return s.defined(o)&&(d.severity=o),s.defined(a)&&(d.code=a),s.defined(c)&&(d.source=c),s.defined(u)&&(d.relatedInformation=u),d}e.create=r;function i(n){var t,o=n;return s.defined(o)&&_.is(o.range)&&s.string(o.message)&&(s.number(o.severity)||s.undefined(o.severity))&&(s.integer(o.code)||s.string(o.code)||s.undefined(o.code))&&(s.undefined(o.codeDescription)||s.string((t=o.codeDescription)===null||t===void 0?void 0:t.href))&&(s.string(o.source)||s.undefined(o.source))&&(s.undefined(o.relatedInformation)||s.typedArray(o.relatedInformation,ae.is))}e.is=i})(J||(J={}));var H;(function(e){function r(n,t){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];var c={title:n,command:t};return s.defined(o)&&o.length>0&&(c.arguments=o),c}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.title)&&s.string(t.command)}e.is=i})(H||(H={}));var R;(function(e){function r(o,a){return{range:o,newText:a}}e.replace=r;function i(o,a){return{range:{start:o,end:o},newText:a}}e.insert=i;function n(o){return{range:o,newText:""}}e.del=n;function t(o){var a=o;return s.objectLiteral(a)&&s.string(a.newText)&&_.is(a.range)}e.is=t})(R||(R={}));var O;(function(e){function r(n,t,o){var a={label:n};return t!==void 0&&(a.needsConfirmation=t),o!==void 0&&(a.description=o),a}e.create=r;function i(n){var t=n;return t!==void 0&&s.objectLiteral(t)&&s.string(t.label)&&(s.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(s.string(t.description)||t.description===void 0)}e.is=i})(O||(O={}));var b;(function(e){function r(i){var n=i;return typeof n=="string"}e.is=r})(b||(b={}));var D;(function(e){function r(o,a,c){return{range:o,newText:a,annotationId:c}}e.replace=r;function i(o,a,c){return{range:{start:o,end:o},newText:a,annotationId:c}}e.insert=i;function n(o,a){return{range:o,newText:"",annotationId:a}}e.del=n;function t(o){var a=o;return R.is(a)&&(O.is(a.annotationId)||b.is(a.annotationId))}e.is=t})(D||(D={}));var Y;(function(e){function r(n,t){return{textDocument:n,edits:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&ee.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(Y||(Y={}));var z;(function(e){function r(n,t,o){var a={kind:"create",uri:n};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(a.options=t),o!==void 0&&(a.annotationId=o),a}e.create=r;function i(n){var t=n;return t&&t.kind==="create"&&s.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||b.is(t.annotationId))}e.is=i})(z||(z={}));var K;(function(e){function r(n,t,o,a){var c={kind:"rename",oldUri:n,newUri:t};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(c.options=o),a!==void 0&&(c.annotationId=a),c}e.create=r;function i(n){var t=n;return t&&t.kind==="rename"&&s.string(t.oldUri)&&s.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||b.is(t.annotationId))}e.is=i})(K||(K={}));var q;(function(e){function r(n,t,o){var a={kind:"delete",uri:n};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(a.options=t),o!==void 0&&(a.annotationId=o),a}e.create=r;function i(n){var t=n;return t&&t.kind==="delete"&&s.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||s.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||s.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||b.is(t.annotationId))}e.is=i})(q||(q={}));var se;(function(e){function r(i){var n=i;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(function(t){return s.string(t.kind)?z.is(t)||K.is(t)||q.is(t):Y.is(t)}))}e.is=r})(se||(se={}));var Z=function(){function e(r,i){this.edits=r,this.changeAnnotations=i}return e.prototype.insert=function(r,i,n){var t,o;if(n===void 0?t=R.insert(r,i):b.is(n)?(o=n,t=D.insert(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),t=D.insert(r,i,o)),this.edits.push(t),o!==void 0)return o},e.prototype.replace=function(r,i,n){var t,o;if(n===void 0?t=R.replace(r,i):b.is(n)?(o=n,t=D.replace(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),t=D.replace(r,i,o)),this.edits.push(t),o!==void 0)return o},e.prototype.delete=function(r,i){var n,t;if(i===void 0?n=R.del(r):b.is(i)?(t=i,n=D.del(r,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),n=D.del(r,t)),this.edits.push(n),t!==void 0)return t},e.prototype.add=function(r){this.edits.push(r)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(r){if(r===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),Te=function(){function e(r){this._annotations=r===void 0?Object.create(null):r,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(r,i){var n;if(b.is(r)?n=r:(n=this.nextId(),i=r),this._annotations[n]!==void 0)throw new Error("Id "+n+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+n);return this._annotations[n]=i,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(r){var i=this;this._textEditChanges=Object.create(null),r!==void 0?(this._workspaceEdit=r,r.documentChanges?(this._changeAnnotations=new Te(r.changeAnnotations),r.changeAnnotations=this._changeAnnotations.all(),r.documentChanges.forEach(function(n){if(Y.is(n)){var t=new Z(n.edits,i._changeAnnotations);i._textEditChanges[n.textDocument.uri]=t}})):r.changes&&Object.keys(r.changes).forEach(function(n){var t=new Z(r.changes[n]);i._textEditChanges[n]=t})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(r){if(ee.is(r)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:r.uri,version:r.version},n=this._textEditChanges[i.uri];if(!n){var t=[],o={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(o),n=new Z(t,this._changeAnnotations),this._textEditChanges[i.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[r];if(!n){var t=[];this._workspaceEdit.changes[r]=t,n=new Z(t),this._textEditChanges[r]=n}return n}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Te,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;O.is(i)||b.is(i)?t=i:n=i;var o,a;if(t===void 0?o=z.create(r,n):(a=b.is(t)?t:this._changeAnnotations.manage(t),o=z.create(r,n,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a},e.prototype.renameFile=function(r,i,n,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o;O.is(n)||b.is(n)?o=n:t=n;var a,c;if(o===void 0?a=K.create(r,i,t):(c=b.is(o)?o:this._changeAnnotations.manage(o),a=K.create(r,i,t,c)),this._workspaceEdit.documentChanges.push(a),c!==void 0)return c},e.prototype.deleteFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;O.is(i)||b.is(i)?t=i:n=i;var o,a;if(t===void 0?o=q.create(r,n):(a=b.is(t)?t:this._changeAnnotations.manage(t),o=q.create(r,n,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a},e})();var Re;(function(e){function r(n){return{uri:n}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)}e.is=i})(Re||(Re={}));var De;(function(e){function r(n,t){return{uri:n,version:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)&&s.integer(t.version)}e.is=i})(De||(De={}));var ee;(function(e){function r(n,t){return{uri:n,version:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)&&(t.version===null||s.integer(t.version))}e.is=i})(ee||(ee={}));var Pe;(function(e){function r(n,t,o,a){return{uri:n,languageId:t,version:o,text:a}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)&&s.string(t.languageId)&&s.integer(t.version)&&s.string(t.text)}e.is=i})(Pe||(Pe={}));var X;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(X||(X={})),function(e){function r(i){var n=i;return n===e.PlainText||n===e.Markdown}e.is=r}(X||(X={}));var ce;(function(e){function r(i){var n=i;return s.objectLiteral(i)&&X.is(n.kind)&&s.string(n.value)}e.is=r})(ce||(ce={}));var v;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(v||(v={}));var ue;(function(e){e.PlainText=1,e.Snippet=2})(ue||(ue={}));var je;(function(e){e.Deprecated=1})(je||(je={}));var Me;(function(e){function r(n,t,o){return{newText:n,insert:t,replace:o}}e.create=r;function i(n){var t=n;return t&&s.string(t.newText)&&_.is(t.insert)&&_.is(t.replace)}e.is=i})(Me||(Me={}));var Le;(function(e){e.asIs=1,e.adjustIndentation=2})(Le||(Le={}));var Fe;(function(e){function r(i){return{label:i}}e.create=r})(Fe||(Fe={}));var Oe;(function(e){function r(i,n){return{items:i||[],isIncomplete:!!n}}e.create=r})(Oe||(Oe={}));var te;(function(e){function r(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=r;function i(n){var t=n;return s.string(t)||s.objectLiteral(t)&&s.string(t.language)&&s.string(t.value)}e.is=i})(te||(te={}));var Ne;(function(e){function r(i){var n=i;return!!n&&s.objectLiteral(n)&&(ce.is(n.contents)||te.is(n.contents)||s.typedArray(n.contents,te.is))&&(i.range===void 0||_.is(i.range))}e.is=r})(Ne||(Ne={}));var We;(function(e){function r(i,n){return n?{label:i,documentation:n}:{label:i}}e.create=r})(We||(We={}));var Ue;(function(e){function r(i,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var a={label:i};return s.defined(n)&&(a.documentation=n),s.defined(t)?a.parameters=t:a.parameters=[],a}e.create=r})(Ue||(Ue={}));var B;(function(e){e.Text=1,e.Read=2,e.Write=3})(B||(B={}));var Ve;(function(e){function r(i,n){var t={range:i};return s.number(n)&&(t.kind=n),t}e.create=r})(Ve||(Ve={}));var m;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(m||(m={}));var He;(function(e){e.Deprecated=1})(He||(He={}));var ze;(function(e){function r(i,n,t,o,a){var c={name:i,kind:n,location:{uri:o,range:t}};return a&&(c.containerName=a),c}e.create=r})(ze||(ze={}));var Ke;(function(e){function r(n,t,o,a,c,u){var d={name:n,detail:t,kind:o,range:a,selectionRange:c};return u!==void 0&&(d.children=u),d}e.create=r;function i(n){var t=n;return t&&s.string(t.name)&&s.number(t.kind)&&_.is(t.range)&&_.is(t.selectionRange)&&(t.detail===void 0||s.string(t.detail))&&(t.deprecated===void 0||s.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(Ke||(Ke={}));var qe;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(qe||(qe={}));var Xe;(function(e){function r(n,t){var o={diagnostics:n};return t!=null&&(o.only=t),o}e.create=r;function i(n){var t=n;return s.defined(t)&&s.typedArray(t.diagnostics,J.is)&&(t.only===void 0||s.typedArray(t.only,s.string))}e.is=i})(Xe||(Xe={}));var Be;(function(e){function r(n,t,o){var a={title:n},c=!0;return typeof t=="string"?(c=!1,a.kind=t):H.is(t)?a.command=t:a.edit=t,c&&o!==void 0&&(a.kind=o),a}e.create=r;function i(n){var t=n;return t&&s.string(t.title)&&(t.diagnostics===void 0||s.typedArray(t.diagnostics,J.is))&&(t.kind===void 0||s.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||H.is(t.command))&&(t.isPreferred===void 0||s.boolean(t.isPreferred))&&(t.edit===void 0||se.is(t.edit))}e.is=i})(Be||(Be={}));var $e;(function(e){function r(n,t){var o={range:n};return s.defined(t)&&(o.data=t),o}e.create=r;function i(n){var t=n;return s.defined(t)&&_.is(t.range)&&(s.undefined(t.command)||H.is(t.command))}e.is=i})($e||($e={}));var Qe;(function(e){function r(n,t){return{tabSize:n,insertSpaces:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.uinteger(t.tabSize)&&s.boolean(t.insertSpaces)}e.is=i})(Qe||(Qe={}));var Ge;(function(e){function r(n,t,o){return{range:n,target:t,data:o}}e.create=r;function i(n){var t=n;return s.defined(t)&&_.is(t.range)&&(s.undefined(t.target)||s.string(t.target))}e.is=i})(Ge||(Ge={}));var Je;(function(e){function r(n,t){return{range:n,parent:t}}e.create=r;function i(n){var t=n;return t!==void 0&&_.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(Je||(Je={}));var Ye;(function(e){function r(o,a,c,u){return new pt(o,a,c,u)}e.create=r;function i(o){var a=o;return!!(s.defined(a)&&s.string(a.uri)&&(s.undefined(a.languageId)||s.string(a.languageId))&&s.uinteger(a.lineCount)&&s.func(a.getText)&&s.func(a.positionAt)&&s.func(a.offsetAt))}e.is=i;function n(o,a){for(var c=o.getText(),u=t(a,function(P,U){var Q=P.range.start.line-U.range.start.line;return Q===0?P.range.start.character-U.range.start.character:Q}),d=c.length,p=u.length-1;p>=0;p--){var h=u[p],w=o.offsetAt(h.range.start),f=o.offsetAt(h.range.end);if(f<=d)c=c.substring(0,w)+h.newText+c.substring(f,c.length);else throw new Error("Overlapping edit");d=w}return c}e.applyEdits=n;function t(o,a){if(o.length<=1)return o;var c=o.length/2|0,u=o.slice(0,c),d=o.slice(c);t(u,a),t(d,a);for(var p=0,h=0,w=0;p<u.length&&h<d.length;){var f=a(u[p],d[h]);f<=0?o[w++]=u[p++]:o[w++]=d[h++]}for(;p<u.length;)o[w++]=u[p++];for(;h<d.length;)o[w++]=d[h++];return o}})(Ye||(Ye={}));var pt=function(){function e(r,i,n,t){this._uri=r,this._languageId=i,this._version=n,this._content=t,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(r){if(r){var i=this.offsetAt(r.start),n=this.offsetAt(r.end);return this._content.substring(i,n)}return this._content},e.prototype.update=function(r,i){this._content=r.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var r=[],i=this._content,n=!0,t=0;t<i.length;t++){n&&(r.push(t),n=!1);var o=i.charAt(t);n=o==="\r"||o===`
`,o==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}n&&i.length>0&&r.push(i.length),this._lineOffsets=r}return this._lineOffsets},e.prototype.positionAt=function(r){r=Math.max(Math.min(r,this._content.length),0);var i=this.getLineOffsets(),n=0,t=i.length;if(t===0)return I.create(0,r);for(;n<t;){var o=Math.floor((n+t)/2);i[o]>r?t=o:n=o+1}var a=n-1;return I.create(a,r-i[a])},e.prototype.offsetAt=function(r){var i=this.getLineOffsets();if(r.line>=i.length)return this._content.length;if(r.line<0)return 0;var n=i[r.line],t=r.line+1<i.length?i[r.line+1]:this._content.length;return Math.max(Math.min(n+r.character,t),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),s;(function(e){var r=Object.prototype.toString;function i(f){return typeof f<"u"}e.defined=i;function n(f){return typeof f>"u"}e.undefined=n;function t(f){return f===!0||f===!1}e.boolean=t;function o(f){return r.call(f)==="[object String]"}e.string=o;function a(f){return r.call(f)==="[object Number]"}e.number=a;function c(f,P,U){return r.call(f)==="[object Number]"&&P<=f&&f<=U}e.numberRange=c;function u(f){return r.call(f)==="[object Number]"&&-2147483648<=f&&f<=2147483647}e.integer=u;function d(f){return r.call(f)==="[object Number]"&&0<=f&&f<=2147483647}e.uinteger=d;function p(f){return r.call(f)==="[object Function]"}e.func=p;function h(f){return f!==null&&typeof f=="object"}e.objectLiteral=h;function w(f,P){return Array.isArray(f)&&f.every(P)}e.typedArray=w})(s||(s={})),le=class{constructor(e,r,i){E(this,"_disposables",[]);E(this,"_listener",Object.create(null));this._languageId=e,this._worker=r;const n=o=>{let a=o.getLanguageId();if(a!==this._languageId)return;let c;this._listener[o.uri.toString()]=o.onDidChangeContent(()=>{window.clearTimeout(c),c=window.setTimeout(()=>this._doValidate(o.uri,a),500)}),this._doValidate(o.uri,a)},t=o=>{l.editor.setModelMarkers(o,this._languageId,[]);let a=o.uri.toString(),c=this._listener[a];c&&(c.dispose(),delete this._listener[a])};this._disposables.push(l.editor.onDidCreateModel(n)),this._disposables.push(l.editor.onWillDisposeModel(t)),this._disposables.push(l.editor.onDidChangeModelLanguage(o=>{t(o.model),n(o.model)})),this._disposables.push(i(o=>{l.editor.getModels().forEach(a=>{a.getLanguageId()===this._languageId&&(t(a),n(a))})})),this._disposables.push({dispose:()=>{l.editor.getModels().forEach(t);for(let o in this._listener)this._listener[o].dispose()}}),l.editor.getModels().forEach(n)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,r){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{const n=i.map(o=>mt(e,o));let t=l.editor.getModel(e);t&&t.getLanguageId()===r&&l.editor.setModelMarkers(t,r,n)}).then(void 0,i=>{console.error(i)})}};function vt(e){switch(e){case F.Error:return l.MarkerSeverity.Error;case F.Warning:return l.MarkerSeverity.Warning;case F.Information:return l.MarkerSeverity.Info;case F.Hint:return l.MarkerSeverity.Hint;default:return l.MarkerSeverity.Info}}function mt(e,r){let i=typeof r.code=="number"?String(r.code):r.code;return{severity:vt(r.severity),startLineNumber:r.range.start.line+1,startColumn:r.range.start.character+1,endLineNumber:r.range.end.line+1,endColumn:r.range.end.character+1,message:r.message,code:i,source:r.source}}ge=class{constructor(e,r){this._worker=e,this._triggerCharacters=r}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.doComplete(t.toString(),T(r))).then(o=>{if(!o)return;const a=e.getWordUntilPosition(r),c=new l.Range(r.lineNumber,a.startColumn,r.lineNumber,a.endColumn),u=o.items.map(d=>{const p={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:kt(d.command),range:c,kind:bt(d.kind)};return d.textEdit&&(_t(d.textEdit)?p.range={insert:C(d.textEdit.insert),replace:C(d.textEdit.replace)}:p.range=C(d.textEdit.range),p.insertText=d.textEdit.newText),d.additionalTextEdits&&(p.additionalTextEdits=d.additionalTextEdits.map(L)),d.insertTextFormat===ue.Snippet&&(p.insertTextRules=l.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:o.isIncomplete,suggestions:u}})}},T=function(e){if(e)return{character:e.column-1,line:e.lineNumber-1}},re=function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}},C=function(e){if(e)return new l.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)};function _t(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function bt(e){const r=l.languages.CompletionItemKind;switch(e){case v.Text:return r.Text;case v.Method:return r.Method;case v.Function:return r.Function;case v.Constructor:return r.Constructor;case v.Field:return r.Field;case v.Variable:return r.Variable;case v.Class:return r.Class;case v.Interface:return r.Interface;case v.Module:return r.Module;case v.Property:return r.Property;case v.Unit:return r.Unit;case v.Value:return r.Value;case v.Enum:return r.Enum;case v.Keyword:return r.Keyword;case v.Snippet:return r.Snippet;case v.Color:return r.Color;case v.File:return r.File;case v.Reference:return r.Reference}return r.Property}L=function(e){if(e)return{range:C(e.range),text:e.newText}};function kt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}_e=class{constructor(e){this._worker=e}provideHover(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.doHover(n.toString(),T(r))).then(t=>{if(t)return{range:C(t.range),contents:Ct(t.contents)}})}};function wt(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function Ze(e){return typeof e=="string"?{value:e}:wt(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function Ct(e){if(e)return Array.isArray(e)?e.map(Ze):[Ze(e)]}ct=class{constructor(e){this._worker=e}provideDocumentHighlights(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.findDocumentHighlights(n.toString(),T(r))).then(t=>{if(t)return t.map(o=>({range:C(o.range),kind:yt(o.kind)}))})}};function yt(e){switch(e){case B.Read:return l.languages.DocumentHighlightKind.Read;case B.Write:return l.languages.DocumentHighlightKind.Write;case B.Text:return l.languages.DocumentHighlightKind.Text}return l.languages.DocumentHighlightKind.Text}st=class{constructor(e){this._worker=e}provideDefinition(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.findDefinition(n.toString(),T(r))).then(t=>{if(t)return[et(t)]})}};function et(e){return{uri:l.Uri.parse(e.uri),range:C(e.range)}}dt=class{constructor(e){this._worker=e}provideReferences(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.findReferences(t.toString(),T(r))).then(o=>{if(o)return o.map(et)})}},gt=class{constructor(e){this._worker=e}provideRenameEdits(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.doRename(t.toString(),T(r),i)).then(o=>At(o))}};function At(e){if(!e||!e.changes)return;let r=[];for(let i in e.changes){const n=l.Uri.parse(i);for(let t of e.changes[i])r.push({resource:n,edit:{range:C(t.range),text:t.newText}})}return{edits:r}}ve=class{constructor(e){this._worker=e}provideDocumentSymbols(e,r){const i=e.uri;return this._worker(i).then(n=>n.findDocumentSymbols(i.toString())).then(n=>{if(n)return n.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:Et(t.kind),range:C(t.location.range),selectionRange:C(t.location.range),tags:[]}))})}};function Et(e){let r=l.languages.SymbolKind;switch(e){case m.File:return r.Array;case m.Module:return r.Module;case m.Namespace:return r.Namespace;case m.Package:return r.Package;case m.Class:return r.Class;case m.Method:return r.Method;case m.Property:return r.Property;case m.Field:return r.Field;case m.Constructor:return r.Constructor;case m.Enum:return r.Enum;case m.Interface:return r.Interface;case m.Function:return r.Function;case m.Variable:return r.Variable;case m.Constant:return r.Constant;case m.String:return r.String;case m.Number:return r.Number;case m.Boolean:return r.Boolean;case m.Array:return r.Array}return r.Function}ut=class{constructor(e){this._worker=e}provideLinks(e,r){const i=e.uri;return this._worker(i).then(n=>n.findDocumentLinks(i.toString())).then(n=>{if(n)return{links:n.map(t=>({range:C(t.range),url:t.target}))}})}},he=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.format(n.toString(),null,tt(r)).then(o=>{if(!(!o||o.length===0))return o.map(L)}))}},pe=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.format(t.toString(),re(r),tt(i)).then(a=>{if(!(!a||a.length===0))return a.map(L)}))}};function tt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}fe=class{constructor(e){this._worker=e}provideDocumentColors(e,r){const i=e.uri;return this._worker(i).then(n=>n.findDocumentColors(i.toString())).then(n=>{if(n)return n.map(t=>({color:t.color,range:C(t.range)}))})}provideColorPresentations(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.getColorPresentations(n.toString(),r.color,re(r.range))).then(t=>{if(t)return t.map(o=>{let a={label:o.label};return o.textEdit&&(a.textEdit=L(o.textEdit)),o.additionalTextEdits&&(a.additionalTextEdits=o.additionalTextEdits.map(L)),a})})}},me=class{constructor(e){this._worker=e}provideFoldingRanges(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.getFoldingRanges(n.toString(),r)).then(t=>{if(t)return t.map(o=>{const a={start:o.startLine+1,end:o.endLine+1};return typeof o.kind<"u"&&(a.kind=xt(o.kind)),a})})}};function xt(e){switch(e){case V.Comment:return l.languages.FoldingRangeKind.Comment;case V.Imports:return l.languages.FoldingRangeKind.Imports;case V.Region:return l.languages.FoldingRangeKind.Region}}be=class{constructor(e){this._worker=e}provideSelectionRanges(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.getSelectionRanges(n.toString(),r.map(T))).then(t=>{if(t)return t.map(o=>{const a=[];for(;o;)a.push({range:C(o.range)}),o=o.parent;return a})})}};function It(e,r){r===void 0&&(r=!1);var i=e.length,n=0,t="",o=0,a=16,c=0,u=0,d=0,p=0,h=0;function w(g,y){for(var x=0,A=0;x<g||!y;){var k=e.charCodeAt(n);if(k>=48&&k<=57)A=A*16+k-48;else if(k>=65&&k<=70)A=A*16+k-65+10;else if(k>=97&&k<=102)A=A*16+k-97+10;else break;n++,x++}return x<g&&(A=-1),A}function f(g){n=g,t="",o=0,a=16,h=0}function P(){var g=n;if(e.charCodeAt(n)===48)n++;else for(n++;n<e.length&&N(e.charCodeAt(n));)n++;if(n<e.length&&e.charCodeAt(n)===46)if(n++,n<e.length&&N(e.charCodeAt(n)))for(n++;n<e.length&&N(e.charCodeAt(n));)n++;else return h=3,e.substring(g,n);var y=n;if(n<e.length&&(e.charCodeAt(n)===69||e.charCodeAt(n)===101))if(n++,(n<e.length&&e.charCodeAt(n)===43||e.charCodeAt(n)===45)&&n++,n<e.length&&N(e.charCodeAt(n))){for(n++;n<e.length&&N(e.charCodeAt(n));)n++;y=n}else h=3;return e.substring(g,y)}function U(){for(var g="",y=n;;){if(n>=i){g+=e.substring(y,n),h=2;break}var x=e.charCodeAt(n);if(x===34){g+=e.substring(y,n),n++;break}if(x===92){if(g+=e.substring(y,n),n++,n>=i){h=2;break}var A=e.charCodeAt(n++);switch(A){case 34:g+='"';break;case 92:g+="\\";break;case 47:g+="/";break;case 98:g+="\b";break;case 102:g+="\f";break;case 110:g+=`
`;break;case 114:g+="\r";break;case 116:g+="	";break;case 117:var k=w(4,!0);k>=0?g+=String.fromCharCode(k):h=4;break;default:h=5}y=n;continue}if(x>=0&&x<=31)if($(x)){g+=e.substring(y,n),h=2;break}else h=6;n++}return g}function Q(){if(t="",h=0,o=n,u=c,p=d,n>=i)return o=i,a=17;var g=e.charCodeAt(n);if(de(g)){do n++,t+=String.fromCharCode(g),g=e.charCodeAt(n);while(de(g));return a=15}if($(g))return n++,t+=String.fromCharCode(g),g===13&&e.charCodeAt(n)===10&&(n++,t+=`
`),c++,d=n,a=14;switch(g){case 123:return n++,a=1;case 125:return n++,a=2;case 91:return n++,a=3;case 93:return n++,a=4;case 58:return n++,a=6;case 44:return n++,a=5;case 34:return n++,t=U(),a=10;case 47:var y=n-1;if(e.charCodeAt(n+1)===47){for(n+=2;n<i&&!$(e.charCodeAt(n));)n++;return t=e.substring(y,n),a=12}if(e.charCodeAt(n+1)===42){n+=2;for(var x=i-1,A=!1;n<x;){var k=e.charCodeAt(n);if(k===42&&e.charCodeAt(n+1)===47){n+=2,A=!0;break}n++,$(k)&&(k===13&&e.charCodeAt(n)===10&&n++,c++,d=n)}return A||(n++,h=1),t=e.substring(y,n),a=13}return t+=String.fromCharCode(g),n++,a=16;case 45:if(t+=String.fromCharCode(g),n++,n===i||!N(e.charCodeAt(n)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return t+=P(),a=11;default:for(;n<i&&Ht(g);)n++,g=e.charCodeAt(n);if(o!==n){switch(t=e.substring(o,n),t){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return t+=String.fromCharCode(g),n++,a=16}}function Ht(g){if(de(g)||$(g))return!1;switch(g){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function zt(){var g;do g=Q();while(g>=12&&g<=15);return g}return{setPosition:f,getPosition:function(){return n},scan:r?zt:Q,getToken:function(){return a},getTokenValue:function(){return t},getTokenOffset:function(){return o},getTokenLength:function(){return n-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-p},getTokenError:function(){return h}}}function de(e){return e===32||e===9||e===11||e===12||e===160||e===5760||e>=8192&&e<=8203||e===8239||e===8287||e===12288||e===65279}function $(e){return e===10||e===13||e===8232||e===8233}function N(e){return e>=48&&e<=57}var nt;(function(e){e.DEFAULT={allowTrailingComma:!1}})(nt||(nt={}));var St=It;function Tt(e){return{getInitialState:()=>new ne(null,null,!1,null),tokenize:(r,i)=>Wt(e,r,i)}}var rt="delimiter.bracket.json",it="delimiter.array.json",Rt="delimiter.colon.json",Dt="delimiter.comma.json",Pt="keyword.json",jt="keyword.json",Mt="string.value.json",Lt="number.json",Ft="string.key.json",Ot="comment.block.json",Nt="comment.line.json",W=class{constructor(e,r){this.parent=e,this.type=r}static pop(e){return e?e.parent:null}static push(e,r){return new W(e,r)}static equals(e,r){if(!e&&!r)return!0;if(!e||!r)return!1;for(;e&&r;){if(e===r)return!0;if(e.type!==r.type)return!1;e=e.parent,r=r.parent}return!0}},ne=class{constructor(e,r,i,n){E(this,"_state");E(this,"scanError");E(this,"lastWasColon");E(this,"parents");this._state=e,this.scanError=r,this.lastWasColon=i,this.parents=n}clone(){return new ne(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this?!0:!e||!(e instanceof ne)?!1:this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&W.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}};function Wt(e,r,i,n=0){let t=0,o=!1;switch(i.scanError){case 2:r='"'+r,t=1;break;case 1:r="/*"+r,t=2;break}const a=St(r);let c=i.lastWasColon,u=i.parents;const d={tokens:[],endState:i.clone()};for(;;){let p=n+a.getPosition(),h="";const w=a.scan();if(w===17)break;if(p===n+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+r.substr(a.getPosition(),3));switch(o&&(p-=t),o=t>0,w){case 1:u=W.push(u,0),h=rt,c=!1;break;case 2:u=W.pop(u),h=rt,c=!1;break;case 3:u=W.push(u,1),h=it,c=!1;break;case 4:u=W.pop(u),h=it,c=!1;break;case 6:h=Rt,c=!0;break;case 5:h=Dt,c=!1;break;case 8:case 9:h=Pt,c=!1;break;case 7:h=jt,c=!1;break;case 10:const f=(u?u.type:0)===1;h=c||f?Mt:Ft,c=!1;break;case 11:h=Lt,c=!1;break}if(e)switch(w){case 12:h=Nt;break;case 13:h=Ot;break}d.endState=new ne(i.getStateData(),a.getTokenError(),c,u),d.tokens.push({startIndex:p,scopes:h})}return d}var Ut=class extends le{constructor(e,r,i){super(e,r,i.onDidChange),this._disposables.push(l.editor.onWillDisposeModel(n=>{this._resetSchema(n.uri)})),this._disposables.push(l.editor.onDidChangeModelLanguage(n=>{this._resetSchema(n.model.uri)}))}_resetSchema(e){this._worker().then(r=>{r.resetSchema(e.toString())})}};lt=function(e){const r=[],i=[],n=new ke(e);r.push(n);const t=(...c)=>n.getLanguageServiceWorker(...c);function o(){const{languageId:c,modeConfiguration:u}=e;at(i),u.documentFormattingEdits&&i.push(l.languages.registerDocumentFormattingEditProvider(c,new he(t))),u.documentRangeFormattingEdits&&i.push(l.languages.registerDocumentRangeFormattingEditProvider(c,new pe(t))),u.completionItems&&i.push(l.languages.registerCompletionItemProvider(c,new ge(t,[" ",":",'"']))),u.hovers&&i.push(l.languages.registerHoverProvider(c,new _e(t))),u.documentSymbols&&i.push(l.languages.registerDocumentSymbolProvider(c,new ve(t))),u.tokens&&i.push(l.languages.setTokensProvider(c,Tt(!0))),u.colors&&i.push(l.languages.registerColorProvider(c,new fe(t))),u.foldingRanges&&i.push(l.languages.registerFoldingRangeProvider(c,new me(t))),u.diagnostics&&i.push(new Ut(c,t,e)),u.selectionRanges&&i.push(l.languages.registerSelectionRangeProvider(c,new be(t)))}o(),r.push(l.languages.setLanguageConfiguration(e.languageId,Vt));let a=e.modeConfiguration;return e.onDidChange(c=>{c.modeConfiguration!==a&&(a=c.modeConfiguration,o())}),r.push(ot(i)),ot(r)};function ot(e){return{dispose:()=>at(e)}}function at(e){for(;e.length;)e.pop().dispose()}var Vt={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}});export{ge as CompletionAdapter,st as DefinitionAdapter,le as DiagnosticsAdapter,fe as DocumentColorAdapter,he as DocumentFormattingEditProvider,ct as DocumentHighlightAdapter,ut as DocumentLinkAdapter,pe as DocumentRangeFormattingEditProvider,ve as DocumentSymbolAdapter,me as FoldingRangeAdapter,_e as HoverAdapter,dt as ReferenceAdapter,gt as RenameAdapter,be as SelectionRangeAdapter,ke as WorkerManager,$t as __tla,T as fromPosition,re as fromRange,lt as setupMode,C as toRange,L as toTextEdit};