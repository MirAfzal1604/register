(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),s=n("40d5"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return El})),n.d(t,"b",(function(){return yu})),n.d(t,"c",(function(){return ru})),n.d(t,"d",(function(){return $c})),n.d(t,"e",(function(){return Xu})),n.d(t,"f",(function(){return vu})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return wu})),n.d(t,"i",(function(){return Ju})),n.d(t,"j",(function(){return Zu})),n.d(t,"k",(function(){return V})),n.d(t,"l",(function(){return Sl})),n.d(t,"m",(function(){return se})),n.d(t,"n",(function(){return ue})),n.d(t,"o",(function(){return W})),n.d(t,"p",(function(){return Bc})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return Q})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return Mc})),n.d(t,"u",(function(){return Fl})),n.d(t,"v",(function(){return Hl})),n.d(t,"w",(function(){return Wl})),n.d(t,"x",(function(){return lu})),n.d(t,"y",(function(){return Qc})),n.d(t,"z",(function(){return Yc})),n.d(t,"A",(function(){return Gc})),n.d(t,"B",(function(){return Ml})),n.d(t,"C",(function(){return Gl})),n.d(t,"D",(function(){return fu})),n.d(t,"E",(function(){return Xc})),n.d(t,"F",(function(){return au})),n.d(t,"G",(function(){return cu})),n.d(t,"H",(function(){return du})),n.d(t,"I",(function(){return vl})),n.d(t,"J",(function(){return gl})),n.d(t,"K",(function(){return su})),n.d(t,"L",(function(){return Bl})),n.d(t,"M",(function(){return Al})),n.d(t,"N",(function(){return xl})),n.d(t,"O",(function(){return Nl})),n.d(t,"P",(function(){return Dl})),n.d(t,"Q",(function(){return Rl})),n.d(t,"R",(function(){return jl})),n.d(t,"S",(function(){return Ql})),n.d(t,"T",(function(){return ll})),n.d(t,"U",(function(){return hl})),n.d(t,"V",(function(){return pu})),n.d(t,"W",(function(){return mu})),n.d(t,"X",(function(){return Vl})),n.d(t,"Y",(function(){return Ul})),n.d(t,"Z",(function(){return cl})),n.d(t,"ab",(function(){return il})),n.d(t,"bb",(function(){return Zc})),n.d(t,"cb",(function(){return Jc})),n.d(t,"db",(function(){return zl})),n.d(t,"eb",(function(){return $l})),n.d(t,"fb",(function(){return Pl})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return tl})),n.d(t,"ib",(function(){return pl})),n.d(t,"jb",(function(){return fl})),n.d(t,"kb",(function(){return Ll})),n.d(t,"lb",(function(){return hu})),n.d(t,"mb",(function(){return ol}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(v);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(v);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(v);h.warn(`Firestore (${l}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||y()}function w(e,t){e||y()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new O(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new u(e)}}class C{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class x{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.p;return this.p=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),this.p=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R.A=-1;class P{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function L(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function F(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new V(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new V(0,0))}static max(){return new U(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function q(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function K(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends z{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new G(t)}static emptyPath(){return new G([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends z{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return $.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new E(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.fields=e,e.sort(W.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Y(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Y(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const X=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function J(e){if(b(!!e),"string"==typeof e){let t=0;const n=X.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ee(e){return"string"==typeof e?Y.fromBase64String(e):Y.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ne(e){const t=e.mapValue.fields.__previous_value__;return te(t)?ne(t):t}function re(e){const t=J(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class se{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new se("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof se&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return null==e}function ae(e){return 0===e&&1/e==-1/0}function ce(e){return"number"==typeof e&&Number.isInteger(e)&&!ae(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(G.fromString(e))}static fromName(e){return new ue(G.fromString(e).popFirst(5))}static empty(){return new ue(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===G.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new G(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},he={nullValue:"NULL_VALUE"};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?te(e)?4:Se(e)?9007199254740991:10:y()}function fe(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return re(e).isEqual(re(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=J(e.timestampValue),r=J(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ee(e.bytesValue).isEqual(ee(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Z(e.geoPointValue.latitude)===Z(t.geoPointValue.latitude)&&Z(e.geoPointValue.longitude)===Z(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Z(e.integerValue)===Z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Z(e.doubleValue),r=Z(t.doubleValue);return n===r?ae(n)===ae(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],fe);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(B(n)!==B(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fe(n[i],r[i])))return!1;return!0}(e,t);default:return y()}}function pe(e,t){return void 0!==(e.values||[]).find(e=>fe(e,t))}function me(e,t){if(e===t)return 0;const n=de(e),r=de(t);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Z(e.integerValue||e.doubleValue),r=Z(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ge(e.timestampValue,t.timestampValue);case 4:return ge(re(e),re(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ee(e),r=ee(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=L(n[i],r[i]);if(0!==e)return e}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=L(Z(e.latitude),Z(t.latitude));return 0!==n?n:L(Z(e.longitude),Z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=me(n[i],r[i]);if(e)return e}return L(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===le.mapValue&&t===le.mapValue)return 0;if(e===le.mapValue)return 1;if(t===le.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=L(r[o],s[o]);if(0!==e)return e;const t=me(n[r[o]],i[s[o]]);if(0!==t)return t}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);const n=J(e),r=J(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function ve(e){return ye(e)}function ye(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=J(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ue.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ye(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ye(e.fields[i])}`;return n+"}"}(e.mapValue):y();var t,n}function be(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function we(e){return!!e&&"integerValue"in e}function _e(e){return!!e&&"arrayValue"in e}function Ie(e){return!!e&&"nullValue"in e}function Ee(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Te(e){return!!e&&"mapValue"in e}function Oe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return q(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Oe(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Oe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Se(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ke(e){return"nullValue"in e?he:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?be(se.empty(),ue.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:y()}function Ae(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?be(se.empty(),ue.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?le:y()}function Ce(e,t){const n=me(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function xe(e,t){const n=me(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Te(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oe(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Oe(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Te(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Te(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){q(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ne(Oe(this.value))}}function De(e){const t=[];return q(e.fields,(e,n)=>{const r=new W([e]);if(Te(n)){const e=De(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new H(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Re{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Re(e,0,U.min(),U.min(),Ne.empty(),0)}static newFoundDocument(e,t,n){return new Re(e,1,t,U.min(),n,0)}static newNoDocument(e,t){return new Re(e,2,t,U.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,U.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class je{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Pe(e){return e.fields.find(e=>2===e.kind)}function Le(e){return e.fields.filter(e=>2!==e.kind)}je.UNKNOWN_ID=-1;class Me{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fe{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fe(0,Be.min())}}function Ve(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=U.fromTimestamp(1e9===r?new V(n+1,0):new V(n,r));return new Be(i,ue.empty(),t)}function Ue(e){return new Be(e.readTime,e.key,-1)}class Be{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Be(U.min(),ue.empty(),-1)}static max(){return new Be(U.max(),ue.empty(),-1)}}function qe(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ue.comparator(e.documentKey,t.documentKey),0!==n?n:L(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ze(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ze(this.root,e,this.comparator,!1)}getReverseIterator(){return new ze(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ze(this.root,e,this.comparator,!0)}}class ze{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ge.RED,this.left=null!=r?r:Ge.EMPTY,this.right=null!=i?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ge(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ge.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1,Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new We(this.data.getIterator())}getIteratorFrom(e){return new We(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof $e))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class We{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function He(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function Ye(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Qe(e,t,n,r,i,s,o)}function Xe(e){const t=_(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+ve(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),oe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>ve(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>ve(e)).join(",")),t.P=e}return t.P}function Je(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ve(t.value)}`;var t}).join(", ")}]`),oe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>ve(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>ve(e)).join(",")),`Target(${t})`}function Ze(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!mt(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!fe(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!vt(e.startAt,t.startAt)&&vt(e.endAt,t.endAt)}function et(e){return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tt(e,t){return e.filters.filter(e=>e instanceof it&&e.field.isEqual(t))}function nt(e,t,n){let r=he,i=!0;for(const s of tt(e,t)){let e=he,t=!0;switch(s.op){case"<":case"<=":e=ke(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=he}Ce({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Ce({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function rt(e,t,n){let r=le,i=!0;for(const s of tt(e,t)){let e=le,t=!0;switch(s.op){case">=":case">":e=Ae(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=le}xe({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];xe({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class it extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new st(e,t,n):"array-contains"===t?new ut(e,n):"in"===t?new lt(e,n):"not-in"===t?new ht(e,n):"array-contains-any"===t?new dt(e,n):new it(e,t,n)}static V(e,t,n){return"in"===t?new ot(e,n):new at(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(me(t,this.value)):null!==t&&de(this.value)===de(t)&&this.v(me(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class st extends it{constructor(e,t,n){super(e,t,n),this.key=ue.fromName(n.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.v(t)}}class ot extends it{constructor(e,t){super(e,"in",t),this.keys=ct("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class at extends it{constructor(e,t){super(e,"not-in",t),this.keys=ct("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ct(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ue.fromName(e.referenceValue))}class ut extends it{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _e(t)&&pe(t.arrayValue,this.value)}}class lt extends it{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&pe(this.value.arrayValue,t)}}class ht extends it{constructor(e,t){super(e,"not-in",t)}matches(e){if(pe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pe(this.value.arrayValue,t)}}class dt extends it{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_e(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>pe(this.value.arrayValue,e))}}class ft{constructor(e,t){this.position=e,this.inclusive=t}}class pt{constructor(e,t="asc"){this.field=e,this.dir=t}}function mt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function gt(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ue.comparator(ue.fromName(o.referenceValue),n.key):me(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function vt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fe(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function bt(e,t,n,r,i,s,o,a){return new yt(e,t,n,r,i,s,o,a)}function wt(e){return new yt(e)}function _t(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function It(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Et(e){for(const t of e.filters)if(t.S())return t.field;return null}function Tt(e){return null!==e.collectionGroup}function Ot(e){const t=_(e);if(null===t.D){t.D=[];const e=Et(t),n=It(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new pt(e)),t.D.push(new pt(W.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new pt(W.keyField(),e))}}}return t.D}function St(e){const t=_(e);if(!t.C)if("F"===t.limitType)t.C=Ye(t.path,t.collectionGroup,Ot(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ot(t)){const t="desc"===i.dir?"asc":"desc";e.push(new pt(i.field,t))}const n=t.endAt?new ft(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ft(t.startAt.position,t.startAt.inclusive):null;t.C=Ye(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function kt(e,t,n){return new yt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function At(e,t){return Ze(St(e),St(t))&&e.limitType===t.limitType}function Ct(e){return`${Xe(St(e))}|lt:${e.limitType}`}function xt(e){return`Query(target=${Je(St(e))}; limitType=${e.limitType})`}function Nt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ue.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=gt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ot(e),t))&&!(e.endAt&&!function(e,t,n){const r=gt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ot(e),t))}(e,t)}function Dt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Rt(e){return(t,n)=>{let r=!1;for(const i of Ot(e)){const e=jt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function jt(e,t,n){const r=e.field.isKeyField()?ue.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?me(r,i):y()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(t)?"-0":t}}function Lt(e){return{integerValue:""+e}}function Mt(e,t){return ce(t)?Lt(t):Pt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this._=void 0}}function Vt(e,t,n){return e instanceof qt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Kt?zt(e,t):e instanceof Gt?$t(e,t):function(e,t){const n=Bt(e,t),r=Ht(n)+Ht(e.k);return we(n)&&we(e.k)?Lt(r):Pt(e.M,r)}(e,t)}function Ut(e,t,n){return e instanceof Kt?zt(e,t):e instanceof Gt?$t(e,t):n}function Bt(e,t){return e instanceof Wt?we(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class qt extends Ft{}class Kt extends Ft{constructor(e){super(),this.elements=e}}function zt(e,t){const n=Qt(t);for(const r of e.elements)n.some(e=>fe(e,r))||n.push(r);return{arrayValue:{values:n}}}class Gt extends Ft{constructor(e){super(),this.elements=e}}function $t(e,t){let n=Qt(t);for(const r of e.elements)n=n.filter(e=>!fe(e,r));return{arrayValue:{values:n}}}class Wt extends Ft{constructor(e,t){super(),this.M=e,this.k=t}}function Ht(e){return Z(e.integerValue||e.doubleValue)}function Qt(e){return _e(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.field=e,this.transform=t}}function Xt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Kt&&t instanceof Kt||e instanceof Gt&&t instanceof Gt?M(e.elements,t.elements,fe):e instanceof Wt&&t instanceof Wt?fe(e.k,t.k):e instanceof qt&&t instanceof qt}(e.transform,t.transform)}class Jt{constructor(e,t){this.version=e,this.transformResults=t}}class Zt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function en(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tn{}function nn(e,t,n){e instanceof cn?function(e,t,n){const r=e.value.clone(),i=hn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof un?function(e,t,n){if(!en(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=hn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ln(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function rn(e,t,n){e instanceof cn?function(e,t,n){if(!en(e.precondition,t))return;const r=e.value.clone(),i=dn(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(an(t),r).setHasLocalMutations()}(e,t,n):e instanceof un?function(e,t,n){if(!en(e.precondition,t))return;const r=dn(e.fieldTransforms,n,t),i=t.data;i.setAll(ln(e)),i.setAll(r),t.convertToFoundDocument(an(t),i).setHasLocalMutations()}(e,t,n):function(e,t){en(e.precondition,t)&&t.convertToNoDocument(U.min())}(e,t)}function sn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Bt(r.transform,e||null);null!=i&&(null==n&&(n=Ne.empty()),n.set(r.field,i))}return n||null}function on(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>Xt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function an(e){return e.isFoundDocument()?e.version:U.min()}class cn extends tn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class un extends tn{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function ln(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function hn(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ut(o,a,n[i]))}return r}function dn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Vt(e,s,t))}return r}class fn extends tn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class pn extends tn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn,vn;function yn(e){switch(e){default:return y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function bn(e){if(void 0===e)return m("GRPC error has no .code"),I.UNKNOWN;switch(e){case gn.OK:return I.OK;case gn.CANCELLED:return I.CANCELLED;case gn.UNKNOWN:return I.UNKNOWN;case gn.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case gn.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case gn.INTERNAL:return I.INTERNAL;case gn.UNAVAILABLE:return I.UNAVAILABLE;case gn.UNAUTHENTICATED:return I.UNAUTHENTICATED;case gn.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case gn.NOT_FOUND:return I.NOT_FOUND;case gn.ALREADY_EXISTS:return I.ALREADY_EXISTS;case gn.PERMISSION_DENIED:return I.PERMISSION_DENIED;case gn.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case gn.ABORTED:return I.ABORTED;case gn.OUT_OF_RANGE:return I.OUT_OF_RANGE;case gn.UNIMPLEMENTED:return I.UNIMPLEMENTED;case gn.DATA_LOSS:return I.DATA_LOSS;default:return y()}}(vn=gn||(gn={}))[vn.OK=0]="OK",vn[vn.CANCELLED=1]="CANCELLED",vn[vn.UNKNOWN=2]="UNKNOWN",vn[vn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vn[vn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vn[vn.NOT_FOUND=5]="NOT_FOUND",vn[vn.ALREADY_EXISTS=6]="ALREADY_EXISTS",vn[vn.PERMISSION_DENIED=7]="PERMISSION_DENIED",vn[vn.UNAUTHENTICATED=16]="UNAUTHENTICATED",vn[vn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vn[vn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vn[vn.ABORTED=10]="ABORTED",vn[vn.OUT_OF_RANGE=11]="OUT_OF_RANGE",vn[vn.UNIMPLEMENTED=12]="UNIMPLEMENTED",vn[vn.INTERNAL=13]="INTERNAL",vn[vn.UNAVAILABLE=14]="UNAVAILABLE",vn[vn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){q(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return K(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ke(ue.comparator);function In(){return _n}const En=new Ke(ue.comparator);function Tn(...e){let t=En;for(const n of e)t=t.insert(n.key,n);return t}function On(){return new wn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Sn=new Ke(ue.comparator),kn=new $e(ue.comparator);function An(...e){let t=kn;for(const n of e)t=t.add(n);return t}const Cn=new $e(L);function xn(){return Cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Dn.createSynthesizedTargetChangeForCurrentChange(e,t)),new Nn(U.min(),n,xn(),In(),An())}}class Dn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Dn(Y.EMPTY_BYTE_STRING,t,An(),An(),An())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class jn{constructor(e,t){this.targetId=e,this.$=t}}class Pn{constructor(e,t,n=Y.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ln{constructor(){this.B=0,this.L=Vn(),this.U=Y.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=An(),t=An(),n=An();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:y()}}),new Dn(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Vn()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Mn{constructor(e){this.nt=e,this.st=new Map,this.it=In(),this.rt=Fn(),this.ot=new $e(L)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(et(e))if(0===n){const n=new ue(e.path);this.ct(t,n,Re.newNoDocument(n,U.min()))}else b(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&et(i.target)){const t=new ue(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Re.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=An();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));const r=new Nn(e,t,this.ot,this.it,n);return this.it=In(),this.rt=Fn(),this.ot=new $e(L),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Ln,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new $e(L),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Ln),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Fn(){return new Ke(ue.comparator)}function Vn(){return new Ke(ue.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Bn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class qn{constructor(e,t){this.databaseId=e,this.N=t}}function Kn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zn(e,t){return e.N?t.toBase64():t.toUint8Array()}function Gn(e,t){return Kn(e,t.toTimestamp())}function $n(e){return b(!!e),U.fromTimestamp(function(e){const t=J(e);return new V(t.seconds,t.nanos)}(e))}function Wn(e,t){return function(e){return new G(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Hn(e){const t=G.fromString(e);return b(wr(t)),t}function Qn(e,t){return Wn(e.databaseId,t.path)}function Yn(e,t){const n=Hn(t);if(n.get(1)!==e.databaseId.projectId)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ue(er(n))}function Xn(e,t){return Wn(e.databaseId,t)}function Jn(e){const t=Hn(e);return 4===t.length?G.emptyPath():er(t)}function Zn(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function er(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tr(e,t,n){return{name:Qn(e,t),fields:n.value.mapValue.fields}}function nr(e,t,n){const r=Yn(e,t.name),i=$n(t.updateTime),s=new Ne({mapValue:{fields:t.fields}}),o=Re.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rr(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=Yn(e,t.found.name),r=$n(t.found.updateTime),i=new Ne({mapValue:{fields:t.found.fields}});return Re.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=Yn(e,t.missing),r=$n(t.readTime);return Re.newNoDocument(n,r)}(e,t):y()}function ir(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(b(void 0===t||"string"==typeof t),Y.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),Y.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:bn(e.code);return new E(t,e.message||"")}(o);n=new Pn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yn(e,r.document.name),s=$n(r.document.updateTime),o=new Ne({mapValue:{fields:r.document.fields}}),a=Re.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Rn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Yn(e,r.document),s=r.readTime?$n(r.readTime):U.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Rn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Yn(e,r.document),s=r.removedTargetIds||[];n=new Rn([],s,i,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new mn(r),s=e.targetId;n=new jn(s,i)}}return n}function sr(e,t){let n;if(t instanceof cn)n={update:tr(e,t.key,t.value)};else if(t instanceof fn)n={delete:Qn(e,t.key)};else if(t instanceof un)n={update:tr(e,t.key,t.data),updateMask:br(t.fieldMask)};else{if(!(t instanceof pn))return y();n={verify:Qn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof qt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Kt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Gt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Gn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function or(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Zt.updateTime($n(e.updateTime)):void 0!==e.exists?Zt.exists(e.exists):Zt.none()}(t.currentDocument):Zt.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new qt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Kt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Gt(e)}else"increment"in t?n=new Wt(e,t.increment):y();const r=W.fromServerFormat(t.fieldPath);return new Yt(r,n)}(e,t)):[];if(t.update){t.update.name;const i=Yn(e,t.update.name),s=new Ne({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new H(t.map(e=>W.fromServerFormat(e)))}(t.updateMask);return new un(i,s,e,n,r)}return new cn(i,s,n,r)}if(t.delete){const r=Yn(e,t.delete);return new fn(r,n)}if(t.verify){const r=Yn(e,t.verify);return new pn(r,n)}return y()}function ar(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?$n(e.updateTime):$n(t);return n.isEqual(U.min())&&(n=$n(t)),new Jt(n,e.transformResults||[])}(e,t))):[]}function cr(e,t){return{documents:[Xn(e,t.path)]}}function ur(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Xn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(Ee(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NAN"}};if(Ie(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ee(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NOT_NAN"}};if(Ie(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(e.field),op:pr(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:mr(e.field),direction:fr(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||oe(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function lr(e){let t=Jn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=dr(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new pt(gr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,oe(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ft(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ft(n,t)}(n.endAt)),bt(t,i,o,s,a,"F",c,u)}function hr(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function dr(e){return e?void 0!==e.unaryFilter?[yr(e)]:void 0!==e.fieldFilter?[vr(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>dr(e)).reduce((e,t)=>e.concat(t)):y():[]}function fr(e){return Un[e]}function pr(e){return Bn[e]}function mr(e){return{fieldPath:e.canonicalString()}}function gr(e){return W.fromServerFormat(e.fieldPath)}function vr(e){return it.create(gr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function yr(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gr(e.unaryFilter.field);return it.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gr(e.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gr(e.unaryFilter.field);return it.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gr(e.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function br(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function wr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Er(t)),t=Ir(e.get(n),t);return Er(t)}function Ir(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Er(e){return e+""}function Tr(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),G.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:y()}s=t+2}return new G(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t){return[e,_r(t)]}function kr(e,t,n){return[e,_r(t),n]}const Ar={},Cr=["prefixPath","collectionGroup","readTime","documentId"],xr=["prefixPath","collectionGroup","documentId"],Nr=["collectionGroup","readTime","prefixPath","documentId"],Dr=["canonicalId","targetId"],Rr=["targetId","path"],jr=["path","targetId"],Pr=["collectionId","parent"],Lr=["indexId","uid"],Mr=["uid","sequenceNumber"],Fr=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Vr=["indexId","uid","orderedDocumentKey"],Ur=["userId","collectionPath","documentId"],Br=["userId","collectionPath","largestBatchId"],qr=["userId","collectionGroup","largestBatchId"],Kr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zr=[...Kr,"documentOverlays"],Gr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$r=[...Gr,"indexConfiguration","indexState","indexEntries"],Wr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Qr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Qr?t:Qr.resolve(t)}catch(e){return Qr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Qr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Qr.reject(t)}static resolve(e){return new Qr((t,n)=>{t(e)})}static reject(e){return new Qr((t,n)=>{n(e)})}static waitFor(e){return new Qr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Qr.resolve(!1);for(const n of e)t=t.next(e=>e?Qr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new T,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Zr(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=ii(t.target.error);this.At.reject(new Zr(e,n))}}static open(e,t,n,r){try{return new Yr(t,e.transaction(r,n))}catch(e){throw new Zr(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ti(t)}}class Xr{constructor(e,t,n){this.name=e,this.version=t,this.Pt=n,12.2===Xr.Vt(Object(o["m"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),ni(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!Object(o["s"])())return!1;if(Xr.St())return!0;const e=Object(o["m"])(),t=Xr.Vt(e),n=0<t&&t<10,r=Xr.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Zr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new E(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new E(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Zr(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Pt.kt(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=Yr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.bt(),e)).catch(e=>(t.abort(e),Qr.reject(e))).toPromise();return s.catch(()=>{}),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Jr{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return ni(this.Ft.delete())}}class Zr extends E{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ei(e){return"IndexedDbTransactionError"===e.name}class ti{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ni(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),ni(this.store.add(e))}get(e){return ni(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),ni(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),ni(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new Qr((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}Gt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Qr((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Qt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,(e,t,n)=>n.delete())}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}zt(e){const t=this.cursor({});return new Qr((n,r)=>{t.onerror=e=>{const t=ii(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Kt(e,t){const n=[];return new Qr((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Jr(i),o=t(i.primaryKey,i.value,s);if(o instanceof Qr){const e=o.catch(e=>(s.done(),Qr.reject(e)));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}}).next(()=>Qr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ni(e){return new Qr((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ii(e.target.error);n(t)}})}let ri=!1;function ii(e){const t=Xr.Vt(Object(o["m"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ri||(ri=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Hr{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function oi(e,t){const n=_(e);return Xr.xt(n.Ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&nn(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&rn(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&rn(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(U.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),An())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>on(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>on(e,t))}}class ci{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=Sn;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ci(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,r,i=U.min(),s=U.min(),o=Y.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.Jt=e}}function di(e,t){let n;if(t.document)n=nr(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ue.fromSegments(t.noDocument.path),r=gi(t.noDocument.readTime);n=Re.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return y();{const e=ue.fromSegments(t.unknownDocument.path),r=gi(t.unknownDocument.version);n=Re.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new V(e[0],e[1]);return U.fromTimestamp(t)}(t.readTime)),n}function fi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Qn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Kn(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:mi(t.version)};else{if(!t.isUnknownDocument())return y();r.unknownDocument={path:n.path.toArray(),version:mi(t.version)}}return r}function pi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function mi(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function gi(e){const t=new V(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function vi(e,t){const n=(t.baseMutations||[]).map(t=>or(e.Jt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>or(e.Jt,t)),i=V.fromMillis(t.localWriteTimeMs);return new ai(t.batchId,i,n,r)}function yi(e){const t=gi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?gi(e.lastLimboFreeSnapshotVersion):U.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=St(wt(Jn(i.documents[0])))):r=function(e){return St(lr(e))}(e.query),new li(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Y.fromBase64String(e.resumeToken))}function bi(e,t){const n=mi(t.snapshotVersion),r=mi(t.lastLimboFreeSnapshotVersion);let i;i=et(t.target)?cr(e.Jt,t.target):ur(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Xe(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function wi(e){const t=lr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?kt(t,t.limit,"L"):t}function _i(e,t){return new ui(t.largestBatchId,or(e.Jt,t.overlayMutation))}function Ii(e,t){const n=t.path.lastSegment();return[e,_r(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{getBundleMetadata(e,t){return Ti(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:gi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Ti(e).put({bundleId:(n=t).id,createTime:mi($n(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Oi(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:wi(t.bundledQuery),readTime:gi(t.readTime)};var t})}saveNamedQuery(e,t){return Oi(e).put(function(e){return{name:e.name,readTime:mi($n(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Ti(e){return oi(e,"bundles")}function Oi(e){return oi(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new Si(e,n)}getOverlay(e,t){return ki(e).get(Ii(this.userId,t)).next(e=>e?_i(this.M,e):null)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new ui(t,i);r.push(this.Xt(e,s))}),Qr.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(_r(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ki(e).Qt("collectionPathOverlayIndex",r))}),Qr.waitFor(i)}getOverlaysForCollection(e,t,n){const r=On(),i=_r(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ki(e).qt("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=_i(this.M,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=On();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ki(e).Wt({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=_i(this.M,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}Xt(e,t){return ki(e).put(function(e,t,n){const[r,i,s]=Ii(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:sr(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function ki(e){return oi(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Z(e.integerValue));else if("doubleValue"in e){const n=Z(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),ae(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(""+(n.seconds||"")),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(ee(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?Se(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):y()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),ue.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}function Ci(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function xi(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Ci(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Ai.fe=new Ai;class Ni{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=xi(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=xi(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Di{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class Ri{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class ji{constructor(){this.De=new Ni,this.Ce=new Di(this.De),this.xe=new Ri(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Pi(this.indexId,this.documentKey,this.arrayValue,n)}}function Li(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Mi(e.arrayValue,t.arrayValue),0!==n?n:(n=Mi(e.directionalValue,t.directionalValue),0!==n?n:ue.comparator(e.documentKey,t.documentKey)))}function Mi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=Pe(e);if(void 0!==t&&!this.Be(t))return!1;const n=Le(e);let r=0,i=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.qe=new Ui}addToCollectionParentIndex(e,t){return this.qe.add(t),Qr.resolve()}getCollectionParents(e,t){return Qr.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Qr.resolve()}deleteFieldIndex(e,t){return Qr.resolve()}getDocumentsMatchingTarget(e,t){return Qr.resolve(null)}getIndexType(e,t){return Qr.resolve(0)}getFieldIndexes(e,t){return Qr.resolve([])}getNextCollectionGroupToUpdate(e){return Qr.resolve(null)}getMinOffset(e,t){return Qr.resolve(Be.min())}updateCollectionGroup(e,t,n){return Qr.resolve()}updateIndexEntries(e,t){return Qr.resolve()}}class Ui{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $e(G.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $e(G.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Uint8Array(0);class qi{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new Ui,this.Ge=new wn(e=>Xe(e),(e,t)=>Ze(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ke.add(t)});const i={collectionId:n,parent:_r(r)};return Ki(e).put(i)}return Qr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[F(t),""],!1,!0);return Ki(e).qt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Tr(r.parent))}return n})}addFieldIndex(e,t){const n=Gi(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=Gi(e),r=$i(e),i=zi(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=zi(e);let r=!0;const i=new Map;return Qr.forEach(this.Qe(t),t=>this.je(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=An();const r=[];return Qr.forEach(i,(i,s)=>{var o;p("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${Xe(t)}`);const a=function(e,t){const n=Pe(t);if(void 0===n)return null;for(const r of tt(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Le(t))for(const t of tt(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Le(t)){const t=0===i.kind?nt(e,i.fieldPath,e.startAt):rt(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ft(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Le(t)){const t=0===i.kind?rt(e,i.fieldPath,e.endAt):nt(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ft(n,r)}(s,i),h=this.We(i,s,u),d=this.We(i,s,l),f=this.ze(i,s,c),m=this.He(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Qr.forEach(m,i=>n.Gt(i,t.limit).next(t=>{t.forEach(t=>{const n=ue.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Qr.resolve(null)})}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}He(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.Je(t[l/c]):Bi,h=this.Ye(e,a,n[l%c],r),d=this.Xe(e,a,i[l%c],s),f=o.map(t=>this.Ye(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}Ye(e,t,n,r){const i=new Pi(e,ue.empty(),t,n);return r?i:i.ke()}Xe(e,t,n,r){const i=new Pi(e,ue.empty(),t,n);return r?i.ke():i}je(e,t){const n=new Fi(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.$e(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;return Qr.forEach(this.Qe(t),t=>this.je(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new $e(W.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>n)}Ze(e,t){const n=new ji;for(const r of Le(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);Ai.fe.Zt(e,i)}return n.Se()}Je(e){const t=new ji;return Ai.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const n=new ji;return Ai.fe.Zt(be(this.databaseId,t),n.Ne(function(e){const t=Le(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Se()}ze(e,t,n){if(null===n)return[];let r=[];r.push(new ji);let i=0;for(const s of Le(e)){const e=n[i++];for(const n of r)if(this.en(t,s.fieldPath)&&_e(e))r=this.nn(r,s,e);else{const t=n.Ne(s.kind);Ai.fe.Zt(e,t)}}return this.sn(r)}We(e,t,n){return this.ze(e,t,n.position)}sn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}nn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new ji;n.seed(e.Se()),Ai.fe.Zt(s,n.Ne(t.kind)),i.push(n)}return i}en(e,t){return!!e.filters.find(e=>e instanceof it&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Gi(e),r=$i(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next(e=>{const t=[];return Qr.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Fe(t.sequenceNumber,new Be(gi(t.readTime),new ue(Tr(t.documentKey)),t.largestBatchId)):Fe.empty(),r=e.fields.map(([e,t])=>new Me(W.fromServerFormat(e),t));return new je(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:L(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Gi(e),i=$i(e);return this.rn(e).next(e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>Qr.forEach(t,t=>i.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:mi(r.readTime),documentKey:_r(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Qr.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?Qr.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),Qr.forEach(i,n=>this.on(e,t,n).next(t=>{const i=this.un(r,n);return t.isEqual(i)?Qr.resolve():this.an(e,r,n,t,i)}))))})}cn(e,t,n,r){return zi(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(n,t.key),documentKey:t.key.path.toArray()})}hn(e,t,n,r){return zi(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(n,t.key),t.key.path.toArray()])}on(e,t,n){const r=zi(e);let i=new $e(Li);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,t)])},(e,r)=>{i=i.add(new Pi(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}un(e,t){let n=new $e(Li);const r=this.Ze(t,e);if(null==r)return n;const i=Pe(t);if(null!=i){const s=e.data.field(i.fieldPath);if(_e(s))for(const i of s.arrayValue.values||[])n=n.add(new Pi(t.indexId,e.key,this.Je(i),r))}else n=n.add(new Pi(t.indexId,e.key,Bi,r));return n}an(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=He(s),c=He(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=He(o)):t?(i(a),a=He(s)):(a=He(s),c=He(o))}}(r,i,Li,r=>{s.push(this.cn(e,t,n,r))},r=>{s.push(this.hn(e,t,n,r))}),Qr.waitFor(s)}rn(e){let t=1;return $i(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Li(e,t)).filter((e,t,n)=>!t||0!==Li(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=Li(s,e),i=Li(s,t);if(0===n)r[0]=e.ke();else if(n>0&&i<0)r.push(s),r.push(s.ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Bi,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Bi,[]]));return i}getMinOffset(e,t){let n;return Qr.forEach(this.Qe(t),t=>this.je(e,t).next(e=>{e?(!n||qe(e.indexState.offset,n)<0)&&(n=e.indexState.offset):n=Be.min()})).next(()=>n)}}function Ki(e){return oi(e,"collectionParents")}function zi(e){return oi(e,"indexEntries")}function Gi(e){return oi(e,"indexConfiguration")}function $i(e){return oi(e,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Hi{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Hi(e,Hi.DEFAULT_COLLECTION_PERCENTILE,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const e=kr(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Qr.waitFor(s).next(()=>u)}function Yi(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hi.DEFAULT_COLLECTION_PERCENTILE=10,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hi.DEFAULT=new Hi(41943040,Hi.DEFAULT_COLLECTION_PERCENTILE,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hi.DISABLED=new Hi(-1,0,0);class Xi{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.ln={}}static Yt(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Xi(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zi(e).Wt({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=es(e),s=Zi(e);return s.add({}).next(o=>{b("number"==typeof o);const a=new ai(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>sr(e.Jt,t)),i=n.mutations.map(t=>sr(e.Jt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.M,this.userId,a),u=[];let l=new $e((e,t)=>L(e.canonicalString(),t.canonicalString()));for(const e of r){const t=kr(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Ar))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.ln[o]=a.keys()}),Qr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Zi(e).get(t).next(e=>e?(b(e.userId===this.userId),vi(this.M,e)):null)}fn(e,t){return this.ln[t]?Qr.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.ln[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Zi(e).Wt({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=vi(this.M,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Zi(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zi(e).qt("userMutationsIndex",t).next(e=>e.map(e=>vi(this.M,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Sr(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return es(e).Wt({range:r},(n,r,s)=>{const[o,a,c]=n,u=Tr(a);if(o===this.userId&&t.path.isEqual(u))return Zi(e).get(c).next(e=>{if(!e)throw y();b(e.userId===this.userId),i.push(vi(this.M,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $e(L);const r=[];return t.forEach(t=>{const i=Sr(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=es(e).Wt({range:s},(e,r,i)=>{const[s,o,a]=e,c=Tr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Qr.waitFor(r).next(()=>this.dn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Sr(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $e(L);return es(e).Wt({range:s},(e,t,i)=>{const[s,a,c]=e,u=Tr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.dn(e,o))}dn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Zi(e).get(t).next(e=>{if(null===e)throw y();b(e.userId===this.userId),n.push(vi(this.M,e))}))}),Qr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Qi(e.Ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this._n(t.batchId)}),Qr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Qr.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return es(e).Wt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Tr(e[1]);r.push(t)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(e,t){return Ji(e,this.userId,t)}wn(e){return ts(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ji(e,t,n){const r=Sr(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return es(e).Wt({range:s,jt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Zi(e){return oi(e,"mutations")}function es(e){return oi(e,"documentMutations")}function ts(e){return oi(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ns(0)}static yn(){return new ns(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next(t=>{const n=new ns(t.highestTargetId);return t.highestTargetId=n.next(),this.In(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.pn(e).next(e=>U.fromTimestamp(new V(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.pn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.pn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.In(e,r)))}addTargetData(e,t){return this.Tn(e,t).next(()=>this.pn(e).next(n=>(n.targetCount+=1,this.En(t,n),this.In(e,n))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>is(e).delete(t.targetId)).next(()=>this.pn(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.In(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return is(e).Wt((s,o)=>{const a=yi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Qr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return is(e).Wt((e,n)=>{const r=yi(n);t(r)})}pn(e){return ss(e).get("targetGlobalKey").next(e=>(b(null!==e),e))}In(e,t){return ss(e).put("targetGlobalKey",t)}Tn(e,t){return is(e).put(bi(this.M,t))}En(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.pn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Xe(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return is(e).Wt({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=yi(n);Ze(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=os(e);return t.forEach(t=>{const s=_r(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),Qr.waitFor(r)}removeMatchingKeys(e,t,n){const r=os(e);return Qr.forEach(t,t=>{const i=_r(t.path);return Qr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=os(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=os(e);let i=An();return r.Wt({range:n,jt:!0},(e,t,n)=>{const r=Tr(e[1]),s=new ue(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=_r(t.path),r=IDBKeyRange.bound([n],[F(n)],!1,!0);let i=0;return os(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return is(e).get(t).next(e=>e?yi(e):null)}}function is(e){return oi(e,"targets")}function ss(e){return oi(e,"targetGlobal")}function os(e){return oi(e,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==Wr)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs([e,t],[n,r]){const i=L(e,n);return 0===i?L(t,r):i}class us{constructor(e){this.An=e,this.buffer=new $e(cs),this.Rn=0}bn(){return++this.Rn}Pn(e){const t=[e,this.bn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();cs(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ls{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(e){const t=this.Vn?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){ei(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await as(e)}await this.Sn(e)})}}class hs{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Qr.resolve(R.A);const n=new us(t);return this.Dn.forEachTarget(e,e=>n.Pn(e.sequenceNumber)).next(()=>this.Dn.xn(e,e=>n.Pn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Dn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Qr.resolve(Wi)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wi):this.Nn(e,t))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Qr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new hs(e,t)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}kn(e){let t=0;return this.xn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,(e,n)=>t(n))}addReference(e,t,n){return fs(e,n)}removeReference(e,t,n){return fs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return fs(e,t)}On(e,t){return function(e,t){let n=!1;return ts(e).zt(r=>Ji(e,r,t).next(e=>(e&&(n=!0),Qr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Mn(e,(s,o)=>{if(o<=t){const t=this.On(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,U.min()),os(e).delete([0,_r(s.path)])))});r.push(t)}}).next(()=>Qr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return fs(e,t)}Mn(e,t){const n=os(e);let r,i=R.A;return n.Wt({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==R.A&&t(new ue(Tr(r)),i),i=o,r=s):i=R.A}).next(()=>{i!==R.A&&t(new ue(Tr(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function fs(e,t){return os(e).put(function(e,t){return{targetId:0,path:_r(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Qr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ys(e).put(n)}removeEntry(e,t,n){return ys(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],pi(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Fn(e,n)))}getEntry(e,t){let n=Re.newInvalidDocument(t);return ys(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(bs(t))},(e,r)=>{n=this.$n(t,r)}).next(()=>n)}Bn(e,t){let n={size:0,document:Re.newInvalidDocument(t)};return ys(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(bs(t))},(e,r)=>{n={document:this.$n(t,r),size:Yi(r)}}).next(()=>n)}getEntries(e,t){let n=In();return this.Ln(e,t,(e,t)=>{const r=this.$n(e,t);n=n.insert(e,r)}).next(()=>n)}Un(e,t){let n=In(),r=new Ke(ue.comparator);return this.Ln(e,t,(e,t)=>{const i=this.$n(e,t);n=n.insert(e,i),r=r.insert(e,Yi(t))}).next(()=>({documents:n,qn:r}))}Ln(e,t,n){if(t.isEmpty())return Qr.resolve();let r=new $e(_s);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(bs(r.first()),bs(r.last())),s=r.getIterator();let o=s.getNext();return ys(e).Wt({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=ue.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&_s(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.Ut(bs(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),pi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ys(e).qt(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=In();for(const n of e){const e=this.$n(ue.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=In();const s=ws(t,n),o=ws(t,Be.max());return ys(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.$n(ue.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new gs(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return vs(e).get("remoteDocumentGlobalKey").next(e=>(b(!!e),e))}Fn(e,t){return vs(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const e=di(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return Re.newInvalidDocument(e)}}class gs extends ps{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new wn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new $e((e,t)=>L(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Gn.get(i);if(t.push(this.Kn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=fi(this.Kn.M,s);r=r.add(i.path.popLast());const c=Yi(a);n+=c-o.size,t.push(this.Kn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=fi(this.Kn.M,s.convertToNoDocument(U.min()));t.push(this.Kn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Kn.updateMetadata(e,n)),Qr.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next(e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Kn.Un(e,t).next(({documents:e,qn:t})=>(t.forEach((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function vs(e){return oi(e,"remoteDocumentGlobal")}function ys(e){return oi(e,"remoteDocumentsV14")}function bs(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ws(e,t){const n=t.documentKey.path.toArray();return[e,pi(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function _s(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=L(n[s],r[s]),i)return i;return i=L(n.length,r.length),i||(i=L(n[n.length-2],r[r.length-2]),i||L(n[n.length-1],r[r.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.M=e}kt(e,t,n,r){const i=new Yr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Or,{unique:!0}),e.createObjectStore("documentMutations")}(e),Es(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Qr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Es(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").qt().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Or,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return Qr.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Qn(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.jn(i)))),n<7&&r>=7&&(s=s.next(()=>this.Wn(i))),n<8&&r>=8&&(s=s.next(()=>this.zn(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.Hn(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Ur});t.createIndex("collectionPathOverlayIndex",Br,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",qr,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Cr});t.createIndex("documentKeyIndex",xr),t.createIndex("collectionGroupIndex",Nr)}(e)).next(()=>this.Jn(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Lr}).createIndex("sequenceNumberIndex",Mr,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Fr}).createIndex("documentKeyIndex",Vr,{unique:!1})}(e)})),s}jn(e){let t=0;return e.store("remoteDocuments").Wt((e,n)=>{t+=Yi(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Qn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next(t=>Qr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next(n=>Qr.forEach(n,n=>{b(n.userId===t.userId);const r=vi(this.M,n);return Qi(e,t.userId,r).next(()=>{})}))}))}Wn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.Wt((n,i)=>{const s=new G(n),o=function(e){return[0,_r(e)]}(s);r.push(t.get(o).next(n=>n?Qr.resolve():(n=>t.put({targetId:0,path:_r(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>Qr.waitFor(r))})}zn(e,t){e.createObjectStore("collectionParents",{keyPath:Pr});const n=t.store("collectionParents"),r=new Ui,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:_r(r)})}};return t.store("remoteDocuments").Wt({jt:!0},(e,t)=>{const n=new G(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([e,t,n],r)=>{const s=Tr(t);return i(s.popLast())}))}Hn(e){const t=e.store("targets");return t.Wt((e,n)=>{const r=yi(n),i=bi(this.M,r);return t.put(i)})}Jn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new ue(G.fromString(o.document.name).popFirst(5)):o.noDocument?ue.fromSegments(o.noDocument.path):o.unknownDocument?ue.fromSegments(o.unknownDocument.path):y()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>Qr.waitFor(r))}}function Es(e){e.createObjectStore("targetDocuments",{keyPath:Rr}).createIndex("documentTargetsIndex",jr,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Dr,{unique:!0}),e.createObjectStore("targetGlobal")}const Ts="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Os{constructor(e,t,n,r,i,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Yn=i,this.window=s,this.document=o,this.Xn=c,this.Zn=u,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=e=>Promise.resolve(),!Os.vt())throw new E(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ds(this,r),this.hs=t+"main",this.M=new hi(a),this.ls=new Xr(this.hs,this.ts,new Is(this.M)),this.fs=new rs(this.referenceDelegate,this.M),this.ds=function(e){return new ms(e)}(this.M),this._s=new Ei,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(I.FAILED_PRECONDITION,Ts);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.fs.getHighestSequenceNumber(e))}).then(e=>{this.es=new R(e,this.Xn)}).then(()=>{this.ns=!0}).catch(e=>(this.ls&&this.ls.close(),Promise.reject(e)))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget(async()=>{this.started&&await this.gs()}))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ks(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Es(e).next(e=>{e||(this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)))})}).next(()=>this.As(e)).next(t=>this.isPrimary&&!t?this.Rs(e).next(()=>!1):!!t&&this.bs(e).next(()=>!0))).catch(e=>{if(ei(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable(()=>this.cs(e)),this.isPrimary=e})}Es(e){return Ss(e).get("owner").next(e=>Qr.resolve(this.Ps(e)))}Vs(e){return ks(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=oi(e,"clientMetadata");return t.qt().next(e=>{const n=this.Ds(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Qr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gs().then(()=>this.vs()).then(()=>this.Is()))}Ps(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?Qr.resolve(!0):Ss(e).get("owner").next(t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.Ps(t)&&this.networkEnabled)return!0;if(!this.Ps(t)){if(!t.allowTabSynchronization)throw new E(I.FAILED_PRECONDITION,Ts);return!1}}return!(!this.networkEnabled||!this.inForeground)||ks(e).qt().next(e=>void 0===this.Ds(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new si(e,R.A);return this.Rs(t).next(()=>this.Vs(t))}),this.ls.close(),this.Os()}Ds(e,t){return e.filter(e=>this.Ss(e.updateTimeMs,t)&&!this.xs(e.clientId))}Fs(){return this.runTransaction("getActiveClients","readonly",e=>ks(e).qt().next(e=>this.Ds(e,18e5).map(e=>e.clientId)))}get started(){return this.ns}getMutationQueue(e,t){return Xi.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new qi(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return Si.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=14===(s=this.ts)?$r:13===s?Gr:12===s?zr:11===s?Kr:void y();var s;let o;return this.ls.runTransaction(e,r,i,r=>(o=new si(r,this.es?this.es.next():R.A),"readwrite-primary"===t?this.Es(o).next(e=>!!e||this.As(o)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)),new E(I.FAILED_PRECONDITION,Wr);return n(o)}).next(e=>this.bs(o).next(()=>e)):this.$s(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}$s(e){return Ss(e).get("owner").next(e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)&&!this.Ps(e)&&!(this.Zn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(I.FAILED_PRECONDITION,Ts)})}bs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ss(e).put("owner",t)}static vt(){return Xr.vt()}Rs(e){const t=Ss(e);return t.get("owner").next(e=>this.Ps(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Qr.resolve())}Ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.gs()))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ss=()=>{this.Ns(),Object(o["w"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const n=null!==(null===(t=this.ws)||void 0===t?void 0:t.getItem(this.Cs(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(e){}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ss(e){return oi(e,"owner")}function ks(e){return oi(e,"clientMetadata")}function As(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cs{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Us(e,t,n))}Us(e,t,n){return this.ds.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}qs(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}Ks(e,t){return this.ds.getEntries(e,t).next(t=>this.Gs(e,t).next(()=>t))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.qs(t,e))}Qs(e,t,n){return function(e){return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):Tt(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new ue(t)).next(e=>{let t=Tn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Ws(e,t,n){const r=t.collectionGroup;let i=Tn();return this.indexManager.getCollectionParents(e,r).next(s=>Qr.forEach(s,s=>{const o=function(e,t){return new yt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.zs(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next(n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Re.newInvalidDocument(n),r=r.insert(n,i)),rn(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{Nt(t,n)||(r=r.remove(e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=An(),r=An();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xs(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,n,r){return this.ti(e,t).next(i=>i||this.ei(e,t,r,n)).next(n=>n||this.ni(e,t))}ti(e,t){return Qr.resolve(null)}ei(e,t,n,r){return _t(t)||r.isEqual(U.min())?this.ni(e,t):this.Zs.Ks(e,n).next(i=>{const o=this.si(t,i);return this.ii(t,o,n,r)?this.ni(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xt(t)),this.ri(e,o,t,Ve(r,-1)))})}si(e,t){let n=new $e(Rt(e));return t.forEach((t,r)=>{Nt(e,r)&&(n=n.add(r))}),n}ii(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",xt(t)),this.Zs.Qs(e,t,Be.min())}ri(e,t,n,r){return this.Zs.Qs(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new Ke(L),this.ai=new wn(e=>Xe(e),Ze),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(n)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Cs(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ui))}}function Rs(e,t,n,r){return new Ds(e,t,n,r)}async function js(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.Bs.getAllMutationBatches(e).next(i=>(r=i,n.li(t),n.Bs.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=An();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.fi.Ks(e,o).next(e=>({di:e,removedBatchIds:i,addedBatchIds:s}))})})}function Ps(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Qr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.Bs.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.Bs.performConsistencyCheck(e)).next(()=>n.fi.Ks(e,r))})}function Ls(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.fs.getLastRemoteSnapshotVersion(e))}function Ms(e,t){const n=_(e),r=t.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.fs.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Y.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(e,u))});let a=In();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Fs(e,s,t.documentUpdates).next(e=>{a=e})),!r.isEqual(U.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next(t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Qr.waitFor(o).next(()=>s.apply(e)).next(()=>n.fi.Gs(e,a)).next(()=>a)}).then(e=>(n.ui=i,e))}function Fs(e,t,n){let r=An();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=In();return n.forEach((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(U.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)}),r})}function Vs(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t)))}function Us(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.fs.getTargetData(e,t).next(i=>i?(r=i,Qr.resolve(r)):n.fs.allocateTargetId(e).next(i=>(r=new li(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(e.targetId,e),n.ai.set(t,e.targetId)),e})}async function Bs(e,t,n){const r=_(e),i=r.ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ei(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ui=r.ui.remove(t),r.ai.delete(i.target)}function qs(e,t,n){const r=_(e);let i=U.min(),s=An();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.ai.get(n);return void 0!==i?Qr.resolve(r.ui.get(i)):r.fs.getTargetData(t,n)}(r,e,St(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.oi.Qs(e,t,n?i:U.min(),n?s:An())).next(e=>(Gs(r,Dt(t),e),{documents:e,_i:s})))}function Ks(e,t){const n=_(e),r=_(n.fs),i=n.ui.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function zs(e,t){const n=_(e),r=n.ci.get(t)||U.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.hi.getAllFromCollectionGroup(e,t,Ve(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(Gs(n,t,e),e))}function Gs(e,t,n){let r=U.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.ci.set(t,r)}async function $s(e,t,n,r){const i=_(e);let s=An(),o=In();for(const u of n){const e=t.wi(u.metadata.name);u.document&&(s=s.add(e));const n=t.mi(u);n.setReadTime(t.gi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.hi.newChangeBuffer({trackRemovals:!0}),c=await Us(i,function(e){return St(wt(G.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Fs(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.fs.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.fs.addMatchingKeys(e,s,c.targetId)).next(()=>i.fi.Gs(e,t)).next(()=>t)))}async function Ws(e,t,n=An()){const r=await Us(e,St(wi(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=$n(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i._s.saveNamedQuery(e,t);const o=r.withResumeToken(Y.EMPTY_BYTE_STRING,s);return i.ui=i.ui.insert(o.targetId,o),i.fs.updateTargetData(e,o).next(()=>i.fs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.fs.addMatchingKeys(e,n,r.targetId)).next(()=>i._s.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return Qr.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var n;return this.yi.set(t.id,{id:(n=t).id,version:n.version,createTime:$n(n.createTime)}),Qr.resolve()}getNamedQuery(e,t){return Qr.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,function(e){return{name:e.name,query:wi(e.bundledQuery),readTime:$n(e.readTime)}}(t)),Qr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.overlays=new Ke(ue.comparator),this.Ii=new Map}getOverlay(e,t){return Qr.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Xt(e,t,r)}),Qr.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ii.delete(n)),Qr.resolve()}getOverlaysForCollection(e,t,n){const r=On(),i=t.length+1,s=new ue(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Qr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ke((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=On(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=On(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return Qr.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ui(t,n));let i=this.Ii.get(t);void 0===i&&(i=An(),this.Ii.set(t,i)),this.Ii.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.Ti=new $e(Xs.Ei),this.Ai=new $e(Xs.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const n=new Xs(e,t);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Pi(new Xs(e,t))}Vi(e,t){e.forEach(e=>this.removeReference(e,t))}vi(e){const t=new ue(new G([])),n=new Xs(t,e),r=new Xs(t,e+1),i=[];return this.Ai.forEachInRange([n,r],e=>{this.Pi(e),i.push(e.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new ue(new G([])),n=new Xs(t,e),r=new Xs(t,e+1);let i=An();return this.Ai.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Xs(e,0),n=this.Ti.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Xs{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return ue.comparator(e.key,t.key)||L(e.Ci,t.Ci)}static Ri(e,t){return L(e.Ci,t.Ci)||ue.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new $e(Xs.Ei)}checkEmpty(e){return Qr.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new ai(i,t,n,r);this.Bs.push(s);for(const o of r)this.Ni=this.Ni.add(new Xs(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Qr.resolve(s)}lookupMutationBatch(e,t){return Qr.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Mi(n),i=r<0?0:r;return Qr.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Qr.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(e){return Qr.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xs(t,0),r=new Xs(t,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,r],e=>{const t=this.ki(e.Ci);i.push(t)}),Qr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $e(L);return t.forEach(e=>{const t=new Xs(e,0),r=new Xs(e,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],e=>{n=n.add(e.Ci)})}),Qr.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ue.isDocumentKey(i)||(i=i.child(""));const s=new Xs(new ue(i),0);let o=new $e(L);return this.Ni.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Ci)),!0)},s),Qr.resolve(this.Oi(o))}Oi(e){const t=[];return e.forEach(e=>{const n=this.ki(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.Fi(t.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Qr.forEach(t.mutations,r=>{const i=new Xs(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=n})}_n(e){}containsKey(e,t){const n=new Xs(t,0),r=this.Ni.firstAfterOrEqual(n);return Qr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Qr.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.$i=e,this.docs=new Ke(ue.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.$i(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Qr.resolve(n?n.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let n=In();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Re.newInvalidDocument(e))}),Qr.resolve(n)}getAllFromCollection(e,t,n){let r=In();const i=new ue(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||qe(Ue(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Qr.resolve(r)}getAllFromCollectionGroup(e,t,n,r){y()}Bi(e,t){return Qr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new eo(this)}getSize(e){return Qr.resolve(this.size)}}class eo extends ps{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)}),Qr.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.persistence=e,this.Li=new wn(e=>Xe(e),Ze),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Ys,this.targetCount=0,this.Ki=ns.gn()}forEachTarget(e,t){return this.Li.forEach((e,n)=>t(n)),Qr.resolve()}getLastRemoteSnapshotVersion(e){return Qr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Qr.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),Qr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ui&&(this.Ui=t),Qr.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Qr.resolve()}updateTargetData(e,t){return this.Tn(t),Qr.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,Qr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Li.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Li.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Qr.waitFor(i).next(()=>r)}getTargetCount(e){return Qr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Li.get(t)||null;return Qr.resolve(n)}addMatchingKeys(e,t,n){return this.qi.bi(t,n),Qr.resolve()}removeMatchingKeys(e,t,n){this.qi.Vi(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Qr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),Qr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qi.Di(t);return Qr.resolve(n)}containsKey(e,t){return Qr.resolve(this.qi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.Gi={},this.overlays={},this.es=new R(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new to(this),this.indexManager=new Vi,this.ds=function(e){return new Zs(e)}(e=>this.referenceDelegate.Qi(e)),this.M=new hi(t),this._s=new Hs(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qs,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Gi[e.toKey()];return n||(n=new Js(t,this.referenceDelegate),this.Gi[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new ro(this.es.next());return this.referenceDelegate.ji(),n(r).next(e=>this.referenceDelegate.Wi(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}zi(e,t){return Qr.or(Object.values(this.Gi).map(n=>()=>n.containsKey(e,t)))}}class ro extends Hr{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.Hi=new Ys,this.Ji=null}static Yi(e){return new io(e)}get Xi(){if(this.Ji)return this.Ji;throw y()}addReference(e,t,n){return this.Hi.addReference(n,t),this.Xi.delete(n.toString()),Qr.resolve()}removeReference(e,t,n){return this.Hi.removeReference(n,t),this.Xi.add(n.toString()),Qr.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),Qr.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach(e=>this.Xi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qr.forEach(this.Xi,n=>{const r=ue.fromPath(n);return this.Zi(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.Ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zi(e,t).next(e=>{e?this.Xi.delete(t.toString()):this.Xi.add(t.toString())})}Qi(e){return 0}Zi(e,t){return Qr.or([()=>Qr.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e,t){return`firestore_clients_${e}_${t}`}function oo(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function ao(e,t){return`firestore_targets_${e}_${t}`}class co{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static tr(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new E(r.error.code,r.error.message))),s?new co(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static tr(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new E(n.error.code,n.error.message))),i?new uo(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static tr(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=xn();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ce(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new lo(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ho{constructor(e,t){this.clientId=e,this.onlineState=t}static tr(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ho(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class fo{constructor(){this.activeTargetIds=xn()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class po{constructor(e,t,n,r,i){this.window=e,this.Yn=t,this.persistenceKey=n,this.ir=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.rr=this.ur.bind(this),this.ar=new Ke(L),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.hr=so(this.persistenceKey,this.ir),this.lr=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ar=this.ar.insert(this.ir,new fo),this.dr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this._r=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.wr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.mr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.gr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.rr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const n of e){if(n===this.ir)continue;const e=this.getItem(so(this.persistenceKey,n));if(e){const t=lo.tr(n,e);t&&(this.ar=this.ar.insert(t.clientId,t))}}this.yr();const t=this.storage.getItem(this.mr);if(t){const e=this.pr(t);e&&this.Ir(e)}for(const n of this.cr)this.ur(n);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.lr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Tr(this.ar)}isActiveQueryTarget(e){let t=!1;return this.ar.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Er(e,"pending")}updateMutationState(e,t,n){this.Er(e,t,n),this.Ar(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ao(this.persistenceKey,e));if(n){const r=uo.tr(e,n);r&&(t=r.state)}}return this.Rr.nr(e),this.yr(),t}removeLocalQueryTarget(e){this.Rr.sr(e),this.yr()}isLocalQueryTarget(e){return this.Rr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ao(this.persistenceKey,e))}updateQueryState(e,t,n){this.br(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Ar(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Pr(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.rr),this.removeItem(this.hr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ur(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.hr)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.dr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Sr(e,null)}{const e=this.Dr(t.key,t.newValue);if(e)return this.Sr(e.clientId,e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Cr(t.key,t.newValue);if(e)return this.Nr(e)}}else if(this.wr.test(t.key)){if(null!==t.newValue){const e=this.kr(t.key,t.newValue);if(e)return this.Mr(e)}}else if(t.key===this.mr){if(null!==t.newValue){const e=this.pr(t.newValue);if(e)return this.Ir(e)}}else if(t.key===this.lr){const e=function(e){let t=R.A;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==R.A&&this.sequenceNumberHandler(e)}else if(t.key===this.gr){const e=this.Or(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Fr(e)))}}else this.cr.push(t)})}}get Rr(){return this.ar.get(this.ir)}yr(){this.setItem(this.hr,this.Rr.er())}Er(e,t,n){const r=new co(this.currentUser,e,t,n),i=oo(this.persistenceKey,this.currentUser,e);this.setItem(i,r.er())}Ar(e){const t=oo(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Pr(e){const t={clientId:this.ir,onlineState:e};this.storage.setItem(this.mr,JSON.stringify(t))}br(e,t,n){const r=ao(this.persistenceKey,e),i=new uo(e,t,n);this.setItem(r,i.er())}Vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.gr,t)}vr(e){const t=this.dr.exec(e);return t?t[1]:null}Dr(e,t){const n=this.vr(e);return lo.tr(n,t)}Cr(e,t){const n=this._r.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return co.tr(new u(i),r,t)}kr(e,t){const n=this.wr.exec(e),r=Number(n[1]);return uo.tr(r,t)}pr(e){return ho.tr(e)}Or(e){return JSON.parse(e)}async Nr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}Mr(e){return this.syncEngine.Br(e.targetId,e.state,e.error)}Sr(e,t){const n=t?this.ar.insert(e,t):this.ar.remove(e),r=this.Tr(this.ar),i=this.Tr(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Lr(s,o).then(()=>{this.ar=n})}Ir(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Tr(e){let t=xn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class mo{constructor(){this.Ur=new fo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new fo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{Kr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,i){const s=this.ho(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i){return this.co(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){const n=yo[e];return`${this.uo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new E(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(e.status);s(new E(t,e.message))}else s(new E(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(I.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}wo(e,t,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.lo(c.initMessageHeaders,t,n),Object(o["t"])()||Object(o["v"])()||Object(o["p"])()||Object(o["r"])()||Object(o["x"])()||Object(o["o"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new bo({Jr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",e),l.send(e))},Yr:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.ro())}),m(l,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),f.ro(new E(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=gn[e];if(void 0!==t)return bn(t)}(e),n=i.message;void 0===t&&(t=I.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.ro(new E(t,n)),l.close()}else p("Connection","WebChannel received:",n),f.oo(n)}}),m(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return"undefined"!=typeof window?window:null}function Io(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){return new qn(e,!0)}class To{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,n,r,i,s,o,a){this.Yn=e,this.Vo=n,this.vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new To(e,t)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Do===t&&this.Qo(e,n)},t=>{e(()=>{const e=new E(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)})})}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr(()=>{n(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(e=>{n(()=>this.jo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget(()=>this.Do===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class So extends Oo{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=ir(this.M,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?$n(t.readTime):U.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=Zn(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=et(r)?{documents:cr(e,r)}:{query:ur(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=zn(e,t.resumeToken):t.snapshotVersion.compareTo(U.min())>0&&(n.readTime=Kn(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=hr(this.M,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=Zn(this.M),t.removeTarget=e,this.Lo(t)}}class ko extends Oo{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=ar(e.writeResults,e.commitTime),n=$n(e.commitTime);return this.listener.tu(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Zn(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>sr(this.M,e))};this.Lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(I.UNKNOWN,e.toString())})}_o(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(I.UNKNOWN,e.toString())})}terminate(){this.su=!0}}class Co{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu("Connection failed 1 times. Most recent error: "+e.toString()),this.cu("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(m(t),this.uu=!1):p("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(e=>{n.enqueueAndForget(async()=>{Vo(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.wu.add(4),await Do(t),t.yu.set("Unknown"),t.wu.delete(4),await No(t)}(this))})}),this.yu=new Co(n,r)}}async function No(e){if(Vo(e))for(const t of e.mu)await t(!0)}async function Do(e){for(const t of e.mu)await t(!1)}function Ro(e,t){const n=_(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),Fo(n)?Mo(n):ra(n).Mo()&&Po(n,t))}function jo(e,t){const n=_(e),r=ra(n);n._u.delete(t),r.Mo()&&Lo(n,t),0===n._u.size&&(r.Mo()?r.$o():Vo(n)&&n.yu.set("Unknown"))}function Po(e,t){e.pu.Z(t.targetId),ra(e).Ho(t)}function Lo(e,t){e.pu.Z(t),ra(e).Jo(t)}function Mo(e){e.pu=new Mn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),ra(e).start(),e.yu.au()}function Fo(e){return Vo(e)&&!ra(e).ko()&&e._u.size>0}function Vo(e){return 0===_(e).wu.size}function Uo(e){e.pu=void 0}async function Bo(e){e._u.forEach((t,n)=>{Po(e,t)})}async function qo(e,t){Uo(e),Fo(e)?(e.yu.lu(t),Mo(e)):e.yu.set("Unknown")}async function Ko(e,t,n){if(e.yu.set("Online"),t instanceof Pn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zo(e,n)}else if(t instanceof Rn?e.pu.ut(t):t instanceof jn?e.pu._t(t):e.pu.ht(t),!n.isEqual(U.min()))try{const t=await Ls(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e._u.get(r);i&&e._u.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(Y.EMPTY_BYTE_STRING,n.snapshotVersion)),Lo(e,t);const r=new li(n.target,t,1,n.sequenceNumber);Po(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await zo(e,t)}}async function zo(e,t,n){if(!ei(t))throw t;e.wu.add(1),await Do(e),e.yu.set("Offline"),n||(n=()=>Ls(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await No(e)})}function Go(e,t){return t().catch(n=>zo(e,n,t))}async function $o(e){const t=_(e),n=ia(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;Wo(t);)try{const e=await Vs(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,Ho(t,e)}catch(e){await zo(t,e)}Qo(t)&&Yo(t)}function Wo(e){return Vo(e)&&e.du.length<10}function Ho(e,t){e.du.push(t);const n=ia(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function Qo(e){return Vo(e)&&!ia(e).ko()&&e.du.length>0}function Yo(e){ia(e).start()}async function Xo(e){ia(e).nu()}async function Jo(e){const t=ia(e);for(const n of e.du)t.Zo(n.mutations)}async function Zo(e,t,n){const r=e.du.shift(),i=ci.from(r,t,n);await Go(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await $o(e)}async function ea(e,t){t&&ia(e).Xo&&await async function(e,t){if(n=t.code,yn(n)&&n!==I.ABORTED){const n=e.du.shift();ia(e).Fo(),await Go(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await $o(e)}var n}(e,t),Qo(e)&&Yo(e)}async function ta(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Vo(n);n.wu.add(3),await Do(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await No(n)}async function na(e,t){const n=_(e);t?(n.wu.delete(2),await No(n)):t||(n.wu.add(2),await Do(n),n.yu.set("Unknown"))}function ra(e){return e.Iu||(e.Iu=function(e,t,n){const r=_(e);return r.iu(),new So(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Xr:Bo.bind(null,e),eo:qo.bind(null,e),zo:Ko.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),Fo(e)?Mo(e):e.yu.set("Unknown")):(await e.Iu.stop(),Uo(e))})),e.Iu}function ia(e){return e.Tu||(e.Tu=function(e,t,n){const r=_(e);return r.iu(),new ko(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:Xo.bind(null,e),eo:ea.bind(null,e),eu:Jo.bind(null,e),tu:Zo.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await $o(e)):(await e.Tu.stop(),e.du.length>0&&(p("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sa{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new sa(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(e,t){if(m("AsyncQueue",`${t}: ${e}`),ei(e))return new E(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ue.comparator(t.key,n.key):(e,t)=>ue.comparator(e.key,t.key),this.keyedMap=Tn(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new aa(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aa))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new aa;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.Eu=new Ke(ue.comparator)}track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):y():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal((t,n)=>{e.push(n)}),e}}class ua{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new ua(e,t,aa.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&At(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.Ru=void 0,this.listeners=[]}}class ha{constructor(){this.queries=new wn(e=>Ct(e),At),this.onlineState="Unknown",this.bu=new Set}}async function da(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new la),i)try{s.Ru=await n.onListen(r)}catch(e){const n=oa(e,`Initialization of query '${xt(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.Vu(s.Ru)&&ga(n)}async function fa(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pa(e,t){const n=_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Vu(i)&&(r=!0);t.Ru=i}}r&&ga(n)}function ma(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function ga(e){e.bu.forEach(e=>{e.next()})}class va{constructor(e,t,n){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ua(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.ku||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=ua.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.payload=e,this.byteLength=t}Mu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.M=e}wi(e){return Yn(this.M,e)}mi(e){return e.metadata.exists?nr(this.M,e.document,!1):Re.newNoDocument(this.wi(e.metadata.name),this.gi(e.metadata.readTime))}gi(e){return $n(e)}}class wa{constructor(e,t,n){this.Ou=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=_a(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=G.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new ba(this.M);for(const r of e)if(r.metadata.queries){const e=n.wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||An()).add(e);t.set(n,r)}}return t}async complete(){const e=await $s(this.localStore,new ba(this.M),this.documents,this.Ou.id),t=this.$u(this.documents);for(const n of this.queries)await Ws(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function _a(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.key=e}}class Ea{constructor(e){this.key=e}}class Ta{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=An(),this.mutatedKeys=An(),this.Gu=Rt(e),this.Qu=new aa(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new ca,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Nt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,ii:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new ua(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1),Xu:s}:{Xu:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ca,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=An(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});const t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new Ea(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new Ia(n))}),t}ta(e){this.Uu=e._i,this.Ku=An();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return ua.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class Oa{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Sa{constructor(e){this.key=e,this.na=!1}}class ka{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sa={},this.ia=new wn(e=>Ct(e),At),this.ra=new Map,this.oa=new Set,this.ua=new Ke(ue.comparator),this.aa=new Map,this.ca=new Ys,this.ha={},this.la=new Map,this.fa=ns.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function Aa(e,t){const n=rc(e);let r,i;const s=n.ia.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const e=await Us(n.localStore,St(t));n.isPrimaryClient&&Ro(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ca(n,t,r,"current"===s)}return i}async function Ca(e,t,n,r){e._a=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.ii&&(i=await qs(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return qa(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const i=await qs(e.localStore,t,!0),s=new Ta(t,i._i),o=s.Wu(i.documents),a=Dn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);qa(e,n,c.Xu);const u=new Oa(t,n,s);return e.ia.set(t,u),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function xa(e,t){const n=_(e),r=n.ia.get(t),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter(e=>!At(e,t))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jo(n.remoteStore,r.targetId),Ua(n,r.targetId)}).catch(as)):(Ua(n,r.targetId),await Bs(n.localStore,r.targetId,!0))}async function Na(e,t,n){const r=ic(e);try{const e=await function(e,t){const n=_(e),r=V.now(),i=t.reduce((e,t)=>e.add(t.key),An());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.fi.Ks(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=sn(e,s.get(e.key));null!=t&&o.push(new un(e.key,t,De(t.value.mapValue),Zt.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ha[e.currentUser.toKey()];r||(r=new Ke(L)),r=r.insert(t,n),e.ha[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ga(r,e.changes),await $o(r.remoteStore)}catch(e){const t=oa(e,"Failed to persist write");n.reject(t)}}async function Da(e,t){const n=_(e);try{const e=await Ms(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.aa.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.na=!0:e.modifiedDocuments.size>0?b(r.na):e.removedDocuments.size>0&&(b(r.na),r.na=!1))}),await Ga(n,e,t)}catch(e){await as(e)}}function Ra(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ia.forEach((n,r)=>{const i=r.view.Pu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.Pu(t)&&(r=!0)}),r&&ga(n)}(r.eventManager,t),e.length&&r.sa.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ja(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.aa.get(t),s=i&&i.key;if(s){let e=new Ke(ue.comparator);e=e.insert(s,Re.newNoDocument(s,U.min()));const n=An().add(s),i=new Nn(U.min(),new Map,new $e(L),e,n);await Da(r,i),r.ua=r.ua.remove(s),r.aa.delete(t),za(r)}else await Bs(r.localStore,t,!1).then(()=>Ua(r,t,n)).catch(as)}async function Pa(e,t){const n=_(e),r=t.batch.batchId;try{const e=await Ps(n.localStore,t);Va(n,r,null),Fa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ga(n,e)}catch(e){await as(e)}}async function La(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.Bs.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t))).next(()=>n.Bs.performConsistencyCheck(e)).next(()=>n.fi.Ks(e,r))})}(r.localStore,t);Va(r,t,n),Fa(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ga(r,e)}catch(n){await as(n)}}async function Ma(e,t){const n=_(e);Vo(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.Bs.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.la.get(e)||[];r.push(t),n.la.set(e,r)}catch(e){const n=oa(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Fa(e,t){(e.la.get(t)||[]).forEach(e=>{e.resolve()}),e.la.delete(t)}function Va(e,t,n){const r=_(e);let i=r.ha[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ha[r.currentUser.toKey()]=i}}function Ua(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ra.get(t))e.ia.delete(r),n&&e.sa.wa(r,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach(t=>{e.ca.containsKey(t)||Ba(e,t)})}function Ba(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);null!==n&&(jo(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),za(e))}function qa(e,t,n){for(const r of n)r instanceof Ia?(e.ca.addReference(r.key,t),Ka(e,r)):r instanceof Ea?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ca.removeReference(r.key,t),e.ca.containsKey(r.key)||Ba(e,r.key)):y()}function Ka(e,t){const n=t.key,r=n.path.canonicalString();e.ua.get(n)||e.oa.has(r)||(p("SyncEngine","New document in limbo: "+n),e.oa.add(r),za(e))}function za(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new ue(G.fromString(t)),r=e.fa.next();e.aa.set(r,new Sa(n)),e.ua=e.ua.insert(n,r),Ro(e.remoteStore,new li(St(wt(n.path)),r,2,R.A))}}async function Ga(e,t,n){const r=_(e),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach((e,a)=>{o.push(r._a(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=xs.Ys(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.sa.zo(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Qr.forEach(t,t=>Qr.forEach(t.Hs,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Qr.forEach(t.Js,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ei(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(e,i)}}}(r.localStore,s))}async function $a(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await js(n.localStore,t);n.currentUser=t,function(e,t){e.la.forEach(e=>{e.forEach(e=>{e.reject(new E(I.CANCELLED,t))})}),e.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ga(n,e.di)}}function Wa(e,t){const n=_(e),r=n.aa.get(t);if(r&&r.na)return An().add(r.key);{let e=An();const r=n.ra.get(t);if(!r)return e;for(const t of r){const r=n.ia.get(t);e=e.unionWith(r.view.ju)}return e}}async function Ha(e,t){const n=_(e),r=await qs(n.localStore,t.query,!0),i=t.view.ta(r);return n.isPrimaryClient&&qa(n,t.targetId,i.Xu),i}async function Qa(e,t){const n=_(e);return zs(n.localStore,t).then(e=>Ga(n,e))}async function Ya(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.fn(e,t).next(t=>t?n.fi.Ks(e,t):Qr.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await $o(i.remoteStore):"acknowledged"===n||"rejected"===n?(Va(i,t,r||null),Fa(i,t),function(e,t){_(_(e).Bs)._n(t)}(i.localStore,t)):y(),await Ga(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Xa(e,t){const n=_(e);if(rc(n),ic(n),!0===t&&!0!==n.da){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ja(n,e.toArray());n.da=!0,await na(n.remoteStore,!0);for(const r of t)Ro(n.remoteStore,r)}else if(!1===t&&!1!==n.da){const e=[];let t=Promise.resolve();n.ra.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Ua(n,i),Bs(n.localStore,i,!0))),jo(n.remoteStore,i)}),await t,await Ja(n,e),function(e){const t=_(e);t.aa.forEach((e,n)=>{jo(t.remoteStore,n)}),t.ca.Si(),t.aa=new Map,t.ua=new Ke(ue.comparator)}(n),n.da=!1,await na(n.remoteStore,!1)}}async function Ja(e,t,n){const r=_(e),i=[],s=[];for(const o of t){let e;const t=r.ra.get(o);if(t&&0!==t.length){e=await Us(r.localStore,St(t[0]));for(const e of t){const t=r.ia.get(e),n=await Ha(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ks(r.localStore,o);e=await Us(r.localStore,t),await Ca(r,Za(t),o,!1)}i.push(e)}return r.sa.zo(s),i}function Za(e){return bt(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function ec(e){const t=_(e);return _(_(t.localStore).persistence).Fs()}async function tc(e,t,n,r){const i=_(e);if(i.da)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i.ra.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await zs(i.localStore,Dt(s[0])),r=Nn.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Ga(i,e,r);break}case"rejected":await Bs(i.localStore,t,!0),Ua(i,t,r);break;default:y()}}async function nc(e,t,n){const r=rc(e);if(r.da){for(const e of t){if(r.ra.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await Ks(r.localStore,e),n=await Us(r.localStore,t);await Ca(r,Za(t),n.targetId,!1),Ro(r.remoteStore,n)}for(const e of n)r.ra.has(e)&&await Bs(r.localStore,e,!1).then(()=>{jo(r.remoteStore,e),Ua(r,e)}).catch(as)}}function rc(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Da.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wa.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ja.bind(null,t),t.sa.zo=pa.bind(null,t.eventManager),t.sa.wa=ma.bind(null,t.eventManager),t}function ic(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pa.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=La.bind(null,t),t}function sc(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=$n(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n._s.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(_a(r));const i=new wa(r,e.localStore,t.M);let s=await t.ma();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.ma()}const o=await i.complete();return await Ga(e,o.Lu,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n._s.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return g("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class oc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Eo(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Rs(this.persistence,new Ns,e.initialUser,this.M)}ya(e){return new no(io.Yi,this.M)}ga(e){return new mo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ac extends oc{constructor(e,t,n){super(),this.Ta=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ta.initialize(this,e),await ic(this.Ta.syncEngine),await $o(this.Ta.remoteStore),await this.persistence.Ts(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ia(e){return Rs(this.persistence,new Ns,e.initialUser,this.M)}pa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ls(t,e.asyncQueue)}ya(e){const t=As(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Hi.withCacheSize(this.cacheSizeBytes):Hi.DEFAULT;return new Os(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_o(),Io(),this.M,this.sharedClientState,!!this.forceOwnership)}ga(e){return new mo}}class cc extends ac{constructor(e,t){super(e,t,!1),this.Ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ta.syncEngine;this.sharedClientState instanceof po&&(this.sharedClientState.syncEngine={$r:Ya.bind(null,t),Br:tc.bind(null,t),Lr:nc.bind(null,t),Fs:ec.bind(null,t),Fr:Qa.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts(async e=>{await Xa(this.Ta.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}ga(e){const t=_o();if(!po.vt(t))throw new E(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=As(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new po(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class uc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ra(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=$a.bind(null,this.syncEngine),await na(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ha}createDatastore(e){const t=Eo(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new wo(r));var r;return function(e,t,n,r){return new Ao(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ra(this.syncEngine,e,0),s=vo.vt()?new vo:new go,new xo(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ka(e,t,n,r,i,s);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await Do(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.Ra=e,this.M=t,this.metadata=new T,this.buffer=new Uint8Array,this.ba=new TextDecoder("utf-8"),this.Pa().then(e=>{e&&e.Mu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.Ra.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.Pa()}async Pa(){const e=await this.Va();if(null===e)return null;const t=this.ba.decode(e),n=Number(t);isNaN(n)&&this.va(`length string (${t}) is not valid number`);const r=await this.Sa(n);return new ya(JSON.parse(r),e.length+n)}Da(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Va(){for(;this.Da()<0;)if(await this.Ca())break;if(0===this.buffer.length)return null;const e=this.Da();e<0&&this.va("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Sa(e){for(;this.buffer.length<e;)await this.Ca()&&this.va("Reached the end of bundle when more is expected.");const t=this.ba.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}va(e){throw this.Ra.cancel(),new Error("Invalid bundle format: "+e)}async Ca(){const e=await this.Ra.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Zn(n.M)+"/documents",i={documents:t.map(e=>Qn(n.M,e))},s=await n._o("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=rr(n.M,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new fn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ue.fromPath(t);this.mutations.push(new pn(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Zn(n.M)+"/documents",i={writes:t.map(e=>sr(n.M,e))};await n.co("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Zt.updateTime(t):Zt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new E(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Zt.updateTime(t)}return Zt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.xa=n.maxAttempts,this.No=new To(this.asyncQueue,"transaction_retry")}run(){this.xa-=1,this.Na()}Na(){this.No.Ro(async()=>{const e=new fc(this.datastore),t=this.ka(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Ma(e)}))}).catch(e=>{this.Ma(e)})})}ka(e){try{const t=this.updateFunction(e);return!oe(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ma(e){this.xa>0&&this.Oa(e)?(this.xa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Na(),Promise.resolve()))):this.deferred.reject(e)}Oa(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!yn(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=oa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function gc(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await js(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function vc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yc(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ta(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ta(t.remoteStore,n)),e.onlineComponents=t}async function yc(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await gc(e,new oc)),e.offlineComponents}async function bc(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await vc(e,new uc)),e.onlineComponents}function wc(e){return yc(e).then(e=>e.persistence)}function _c(e){return yc(e).then(e=>e.localStore)}function Ic(e){return bc(e).then(e=>e.remoteStore)}function Ec(e){return bc(e).then(e=>e.syncEngine)}async function Tc(e){const t=await bc(e),n=t.eventManager;return n.onListen=Aa.bind(null,t.syncEngine),n.onUnlisten=xa.bind(null,t.syncEngine),n}function Oc(e){return e.asyncQueue.enqueue(async()=>{const t=await wc(e),n=await Ic(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.wu.delete(0),No(t)}(n)})}function Sc(e){return e.asyncQueue.enqueue(async()=>{const t=await wc(e),n=await Ic(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.wu.add(0),await Do(t),t.yu.set("Offline")}(n)})}function kc(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.fi.Ls(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new E(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=oa(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await _c(e),t,n)),n.promise}function Ac(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new hc({next:s=>{t.enqueueAndForget(()=>fa(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new E(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new E(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new va(wt(n.path),s,{includeMetadataChanges:!0,ku:!0});return da(e,o)}(await Tc(e),e.asyncQueue,t,n,r)),r.promise}function Cc(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await qs(e,t,!0),i=new Ta(t,r._i),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=oa(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await _c(e),t,n)),n.promise}function xc(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new hc({next:n=>{t.enqueueAndForget(()=>fa(e,o)),n.fromCache&&"server"===r.source?i.reject(new E(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new va(n,s,{includeMetadataChanges:!0,ku:!0});return da(e,o)}(await Tc(e),e.asyncQueue,t,n,r)),r.promise}function Nc(e,t){const n=new hc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).bu.add(t),t.next()}(await Tc(e),n)),()=>{n.Aa(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).bu.delete(t)}(await Tc(e),n))}}function Dc(e,t,n){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>{const i=await function(e){return bc(e).then(e=>e.datastore)}(e);new pc(e.asyncQueue,i,n,t,r).run()}),r.promise}function Rc(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new dc(e,t)}(function(e,t){if(e instanceof Uint8Array)return lc(e,t);if(e instanceof ArrayBuffer)return lc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Eo(t));e.asyncQueue.enqueueAndForget(async()=>{sc(await Ec(e),i,r)})}function jc(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n._s.getNamedQuery(e,t))}(await _c(e),t))}const Pc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e,t,n){if(!n)throw new E(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Mc(e,t,n,r){if(!0===t&&!0===r)throw new E(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fc(e){if(!ue.isDocumentKey(e))throw new E(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vc(e){if(ue.isDocumentKey(e))throw new E(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Uc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Bc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uc(e);throw new E(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function qc(e,t){if(t<=0)throw new E(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Mc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kc({}),this._settingsFrozen=!1,e instanceof se?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new se(e.options.projectId)}(e))}get app(){if(!this._app)throw new E(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new x(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new E(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pc.get(e);t&&(p("ComponentProvider","Removing Datastore"),Pc.delete(e),t.terminate())}(this),Promise.resolve()}}function Gc(e,t,n,r={}){var i;const s=(e=Bc(e,zc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o["g"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new E(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new k(new O(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $c(this.firestore,e,this._key)}}class Wc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wc(this.firestore,e,this._query)}}class Hc extends Wc{constructor(e,t,n){super(e,t,wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $c(this.firestore,null,new ue(e))}withConverter(e){return new Hc(this.firestore,e,this._path)}}function Qc(e,t,...n){if(e=Object(o["l"])(e),Lc("collection","path",t),e instanceof zc){const r=G.fromString(t,...n);return Vc(r),new Hc(e,null,r)}{if(!(e instanceof $c||e instanceof Hc))throw new E(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Vc(r),new Hc(e.firestore,null,r)}}function Yc(e,t){if(e=Bc(e,zc),Lc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Wc(e,null,function(e){return new yt(G.emptyPath(),e)}(t))}function Xc(e,t,...n){if(e=Object(o["l"])(e),1===arguments.length&&(t=P.R()),Lc("doc","path",t),e instanceof zc){const r=G.fromString(t,...n);return Fc(r),new $c(e,null,new ue(r))}{if(!(e instanceof $c||e instanceof Hc))throw new E(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Fc(r),new $c(e.firestore,e instanceof Hc?e.converter:null,new ue(r))}}function Jc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),(e instanceof $c||e instanceof Hc)&&(t instanceof $c||t instanceof Hc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Zc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),e instanceof Wc&&t instanceof Wc&&e.firestore===t.firestore&&At(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class eu{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new To(this,"async_queue_retry"),this.Qa=()=>{const e=Io();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=Io();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=Io();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const t=new T;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!ei(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const t=this.Fa.then(()=>(this.qa=!0,e().catch(e=>{this.Ua=e,this.qa=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.qa=!1,e))));return this.Fa=t,t}enqueueAfterDelay(e,t,n){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=sa.createAndSchedule(this,e,t,n,e=>this.Ha(e));return this.La.push(r),r}ja(){this.Ua&&y()}verifyOperationInProgress(){}async Ja(){let e;do{e=this.Fa,await e}while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.La)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}function tu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class nu{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=-1;class iu extends zc{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new eu,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ou(this),this._firestoreClient.terminate()}}function su(e){return e._firestoreClient||ou(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ou(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ie(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new mc(e._authCredentials,e._appCheckCredentials,e._queue,r)}function au(e,t){gu(e=Bc(e,iu));const n=su(e),r=e._freezeSettings(),i=new uc;return uu(n,i,new ac(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function cu(e){gu(e=Bc(e,iu));const t=su(e),n=e._freezeSettings(),r=new uc;return uu(t,r,new cc(r,n.cacheSizeBytes))}function uu(e,t,n){const r=new T;return e.asyncQueue.enqueue(async()=>{try{await gc(e,n),await vc(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function lu(e){if(e._initialized&&!e._terminated)throw new E(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Xr.vt())return Promise.resolve();const t=e+"main";await Xr.delete(t)}(As(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function hu(e){return function(e){const t=new T;return e.asyncQueue.enqueueAndForget(async()=>Ma(await Ec(e),t)),t.promise}(su(e=Bc(e,iu)))}function du(e){return Oc(su(e=Bc(e,iu)))}function fu(e){return Sc(su(e=Bc(e,iu)))}function pu(e,t){const n=su(e=Bc(e,iu)),r=new nu;return Rc(n,e._databaseId,t,r),r}function mu(e,t){return jc(su(e=Bc(e,iu)),t).then(t=>t?new Wc(e,null,t.query):null)}function gu(e){if(e._initialized||e._terminated)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yu(Y.fromBase64String(e))}catch(e){throw new E(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new yu(Y.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=/^__.*__$/;class Iu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new cn(e,this.data,t,this.fieldTransforms)}}class Eu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Ou{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.rc(e),r}oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Gu(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(0===e.length)throw this.ac("Document fields must not be empty");if(Tu(this.ec)&&_u.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class Su{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||Eo(e)}lc(e,t,n,r=!1){return new Ou({ec:e,methodName:t,hc:n,path:W.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ku(e){const t=e._freezeSettings(),n=Eo(e._databaseId);return new Su(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Au(e,t,n,r,i,s={}){const o=e.lc(s.merge||s.mergeFields?2:0,t,n,i);Bu("Data must be an object, but it was:",o,r);const a=Vu(r,o);let c,u;if(s.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=qu(t,r,n);if(!o.contains(i))throw new E(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$u(e,i)||e.push(i)}c=new H(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Iu(new Ne(a),c,u)}class Cu extends bu{_toFieldTransform(e){if(2!==e.ec)throw 1===e.ec?e.ac(this._methodName+"() can only appear at the top level of your update data"):e.ac(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cu}}function xu(e,t,n){return new Ou({ec:3,hc:t.settings.hc,methodName:e._methodName,ic:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class Nu extends bu{_toFieldTransform(e){return new Yt(e.path,new qt)}isEqual(e){return e instanceof Nu}}class Du extends bu{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=xu(this,e,!0),n=this.fc.map(e=>Fu(e,t)),r=new Kt(n);return new Yt(e.path,r)}isEqual(e){return this===e}}class Ru extends bu{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=xu(this,e,!0),n=this.fc.map(e=>Fu(e,t)),r=new Gt(n);return new Yt(e.path,r)}isEqual(e){return this===e}}class ju extends bu{constructor(e,t){super(e),this.dc=t}_toFieldTransform(e){const t=new Wt(e.M,Mt(e.M,this.dc));return new Yt(e.path,t)}isEqual(e){return this===e}}function Pu(e,t,n,r){const i=e.lc(1,t,n);Bu("Data must be an object, but it was:",i,r);const s=[],a=Ne.empty();q(r,(e,r)=>{const c=zu(t,e,n);r=Object(o["l"])(r);const u=i.oc(c);if(r instanceof Cu)s.push(c);else{const e=Fu(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new H(s);return new Eu(a,c,i.fieldTransforms)}function Lu(e,t,n,r,i,s){const a=e.lc(1,t,n),c=[qu(t,r,n)],u=[i];if(s.length%2!=0)throw new E(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(qu(t,s[o])),u.push(s[o+1]);const l=[],h=Ne.empty();for(let f=c.length-1;f>=0;--f)if(!$u(l,c[f])){const e=c[f];let t=u[f];t=Object(o["l"])(t);const n=a.oc(e);if(t instanceof Cu)l.push(e);else{const r=Fu(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new H(l);return new Eu(h,d,a.fieldTransforms)}function Mu(e,t,n,r=!1){return Fu(n,e.lc(r?4:3,t))}function Fu(e,t){if(Uu(e=Object(o["l"])(e)))return Bu("Unsupported field value:",t,e),Vu(e,t);if(e instanceof bu)return function(e,t){if(!Tu(t.ec))throw t.ac(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ac(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&4!==t.ec)throw t.ac("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fu(i,t.uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["l"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Mt(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=V.fromDate(e);return{timestampValue:Kn(t.M,n)}}if(e instanceof V){const n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Kn(t.M,n)}}if(e instanceof wu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof yu)return{bytesValue:zn(t.M,e._byteString)};if(e instanceof $c){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ac("Unsupported field value: "+Uc(e))}(e,t)}function Vu(e,t){const n={};return K(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):q(e,(e,r)=>{const i=Fu(r,t.sc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Uu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof wu||e instanceof yu||e instanceof $c||e instanceof bu)}function Bu(e,t,n){if(!Uu(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Uc(n);throw"an object"===r?t.ac(e+" a custom object"):t.ac(e+" "+r)}}function qu(e,t,n){if((t=Object(o["l"])(t))instanceof vu)return t._internalPath;if("string"==typeof t)return zu(e,t);throw Gu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ku=new RegExp("[~\\*/\\[\\]]");function zu(e,t,n){if(t.search(Ku)>=0)throw Gu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new vu(...t.split("."))._internalPath}catch(r){throw Gu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new E(I.INVALID_ARGUMENT,a+e+c)}function $u(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $c(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Hu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Hu extends Wu{data(){return super.data()}}function Qu(e,t){return"string"==typeof t?zu(e,t):t instanceof vu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xu extends Wu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ju extends Xu{data(e={}){return super.data(e)}}class Zu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Yu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ju(this._firestore,this._userDataWriter,n.key,n,new Yu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new Ju(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Yu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Ju(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Yu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:el(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function el(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function tl(e,t){return e instanceof Xu&&t instanceof Xu?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Zu&&t instanceof Zu&&e._firestore===t._firestore&&Zc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rl{}function il(e,...t){for(const n of t)e=n._apply(e);return e}class sl extends rl{constructor(e,t,n){super(),this._c=e,this.wc=t,this.mc=n,this.type="where"}_apply(e){const t=ku(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){wl(o,s);const t=[];for(const n of o)t.push(bl(r,e,n));a={arrayValue:{values:t}}}else a=bl(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||wl(o,s),a=Mu(n,t,o,"in"===s||"not-in"===s);const c=it.create(i,s,a);return function(e,t){if(t.S()){const n=Et(e);if(null!==n&&!n.isEqual(t.field))throw new E(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=It(e);null!==r&&_l(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this._c,this.wc,this.mc);return new Wc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new yt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function ol(e,t,n){const r=t,i=Qu("where",e);return new sl(i,r,n)}class al extends rl{constructor(e,t){super(),this._c=e,this.gc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new pt(t,n);return function(e,t){if(null===It(e)){const n=Et(e);null!==n&&_l(e,n,t.field)}}(e,r),r}(e._query,this._c,this.gc);return new Wc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new yt(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function cl(e,t="asc"){const n=t,r=Qu("orderBy",e);return new al(r,n)}class ul extends rl{constructor(e,t,n){super(),this.type=e,this.yc=t,this.Ic=n}_apply(e){return new Wc(e.firestore,e.converter,kt(e._query,this.yc,this.Ic))}}function ll(e){return qc("limit",e),new ul("limit",e,"F")}function hl(e){return qc("limitToLast",e),new ul("limitToLast",e,"L")}class dl extends rl{constructor(e,t,n){super(),this.type=e,this.Tc=t,this.Ec=n}_apply(e){const t=yl(e,this.type,this.Tc,this.Ec);return new Wc(e.firestore,e.converter,function(e,t){return new yt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function fl(...e){return new dl("startAt",e,!0)}function pl(...e){return new dl("startAfter",e,!1)}class ml extends rl{constructor(e,t,n){super(),this.type=e,this.Tc=t,this.Ec=n}_apply(e){const t=yl(e,this.type,this.Tc,this.Ec);return new Wc(e.firestore,e.converter,function(e,t){return new yt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function gl(...e){return new ml("endBefore",e,!1)}function vl(...e){return new ml("endAt",e,!0)}function yl(e,t,n,r){if(n[0]=Object(o["l"])(n[0]),n[0]instanceof Wu)return function(e,t,n,r,i){if(!r)throw new E(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Ot(e))if(o.field.isKeyField())s.push(be(t,r.key));else{const e=r.data.field(o.field);if(te(e))throw new E(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new E(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ft(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=ku(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new E(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new E(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Tt(e)&&-1!==s.indexOf("/"))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(G.fromString(s));if(!ue.isDocumentKey(n))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ue(n);a.push(be(t,i))}else{const e=Mu(n,r,s);a.push(e)}}return new ft(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function bl(e,t,n){if("string"==typeof(n=Object(o["l"])(n))){if(""===n)throw new E(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tt(t)&&-1!==n.indexOf("/"))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(G.fromString(n));if(!ue.isDocumentKey(r))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return be(e,new ue(r))}if(n instanceof $c)return be(e,n._key);throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(n)}.`)}function wl(e,t){if(!Array.isArray(e)||0===e.length)throw new E(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new E(I.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function _l(e,t,n){if(!n.isEqual(t))throw new E(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{convertValue(e,t="none"){switch(de(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return q(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new wu(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(re(e));default:return null}}convertTimestamp(e){const t=J(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);b(wr(n));const r=new se(n.get(1),n.get(3)),i=new ue(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Ol extends El{constructor(e){super(),this.firestore=e}convertBytes(e){return new yu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $c(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ku(e)}set(e,t,n){this._verifyNotCommitted();const r=kl(e,this._firestore),i=Tl(r.converter,t,n),s=Au(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Zt.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=kl(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof vu?Lu(this._dataReader,"WriteBatch.update",i._key,t,n,r):Pu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Zt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kl(e,this._firestore);return this._mutations=this._mutations.concat(new fn(t._key,Zt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kl(e,t){if((e=Object(o["l"])(e)).firestore!==t)throw new E(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(e){e=Bc(e,$c);const t=Bc(e.firestore,iu);return Ac(su(t),e._key).then(n=>ql(t,e,n))}class Cl extends El{constructor(e){super(),this.firestore=e}convertBytes(e){return new yu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $c(this.firestore,null,t)}}function xl(e){e=Bc(e,$c);const t=Bc(e.firestore,iu),n=su(t),r=new Cl(t);return kc(n,e._key).then(n=>new Xu(t,r,e._key,n,new Yu(null!==n&&n.hasLocalMutations,!0),e.converter))}function Nl(e){e=Bc(e,$c);const t=Bc(e.firestore,iu);return Ac(su(t),e._key,{source:"server"}).then(n=>ql(t,e,n))}function Dl(e){e=Bc(e,Wc);const t=Bc(e.firestore,iu),n=su(t),r=new Cl(t);return nl(e._query),xc(n,e._query).then(n=>new Zu(t,r,e,n))}function Rl(e){e=Bc(e,Wc);const t=Bc(e.firestore,iu),n=su(t),r=new Cl(t);return Cc(n,e._query).then(n=>new Zu(t,r,e,n))}function jl(e){e=Bc(e,Wc);const t=Bc(e.firestore,iu),n=su(t),r=new Cl(t);return xc(n,e._query,{source:"server"}).then(n=>new Zu(t,r,e,n))}function Pl(e,t,n){e=Bc(e,$c);const r=Bc(e.firestore,iu),i=Tl(e.converter,t,n);return Bl(r,[Au(ku(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Zt.none())])}function Ll(e,t,n,...r){e=Bc(e,$c);const i=Bc(e.firestore,iu),s=ku(i);let a;return a="string"==typeof(t=Object(o["l"])(t))||t instanceof vu?Lu(s,"updateDoc",e._key,t,n,r):Pu(s,"updateDoc",e._key,t),Bl(i,[a.toMutation(e._key,Zt.exists(!0))])}function Ml(e){return Bl(Bc(e.firestore,iu),[new fn(e._key,Zt.none())])}function Fl(e,t){const n=Bc(e.firestore,iu),r=Xc(e),i=Tl(e.converter,t);return Bl(n,[Au(ku(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function Vl(e,...t){var n,r,i;e=Object(o["l"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||tu(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(tu(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof $c)l=Bc(e.firestore,iu),h=wt(e._key.path),u={next:n=>{t[a]&&t[a](ql(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Bc(e,Wc);l=Bc(n.firestore,iu),h=n._query;const r=new Cl(l);u={next:e=>{t[a]&&t[a](new Zu(l,r,n,e))},error:t[a+1],complete:t[a+2]},nl(e._query)}return function(e,t,n,r){const i=new hc(r),s=new va(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>da(await Tc(e),s)),()=>{i.Aa(),e.asyncQueue.enqueueAndForget(async()=>fa(await Tc(e),s))}}(su(l),h,c,u)}function Ul(e,t){return Nc(su(e=Bc(e,iu)),tu(t)?t:{next:t})}function Bl(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>Na(await Ec(e),t,n)),n.promise}(su(e),t)}function ql(e,t,n){const r=n.docs.get(t._key),i=new Cl(e);return new Xu(e,i,t._key,r,new Yu(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ku(e)}get(e){const t=kl(e,this._firestore),n=new Ol(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const r=e[0];if(r.isFoundDocument())return new Wu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Wu(this._firestore,n,t._key,null,t.converter);throw y()})}set(e,t,n){const r=kl(e,this._firestore),i=Tl(r.converter,t,n),s=Au(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=kl(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof vu?Lu(this._dataReader,"Transaction.update",i._key,t,n,r):Pu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=kl(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kl(e,this._firestore),n=new Cl(this._firestore);return super.get(e).then(e=>new Xu(this._firestore,n,t._key,e._document,new Yu(!1,!1),t.converter))}}function zl(e,t,n){e=Bc(e,iu);const r=Object.assign(Object.assign({},Il),n);return function(e){if(e.maxAttempts<1)throw new E(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),Dc(su(e),n=>t(new Kl(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return new Cu("deleteField")}function $l(){return new Nu("serverTimestamp")}function Wl(...e){return new Du("arrayUnion",e)}function Hl(...e){return new Ru("arrayRemove",e)}function Ql(e){return new ju("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new iu(r,new A(e.getProvider("auth-internal")),new D(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.9",e),Object(r["registerVersion"])(c,"3.4.9","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===u||i(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"13d2":function(e,t,n){var r=n("d039"),i=n("1626"),s=n("1a2d"),o=n("83ab"),a=n("5e77").CONFIGURABLE,c=n("8925"),u=n("69f3"),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){if("Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&d(e,"name",{value:t,configurable:!0}),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity}),n&&s(n,"constructor")&&n.constructor){if(o)try{d(e,"prototype",{writable:!1})}catch(i){}}else e.prototype=void 0;var r=l(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},"14e5":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("59ed"),o=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{all:function(e){var t=this,n=o.f(t),r=n.resolve,u=n.reject,l=a((function(){var n=s(t.resolve),o=[],a=0,l=1;c(e,(function(e){var s=a++,c=!1;l++,i(n,t,e).then((function(e){c||(c=!0,o[s]=e,--l||r(o))}),u)})),--l||r(o)}));return l.error&&u(l.value),n.promise}})},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1862:function(e,t,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.18";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(i["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,Object(i["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,Object(i["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new A(this,Object(i["z"])(this._delegate,e))}catch(t){throw E(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new A(this,e):null)}}class v extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function y(e){Object(i["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=D(e);return this._delegate.get(t).then(e=>new S(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=D(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const r=D(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new k(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new v(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i["d"](t._delegate,n,new i["n"](e)))}static forKey(e,t,n){return new I(t,new i["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["l"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(n){throw E(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...n)}catch(r){throw E(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=T(e),n=O(e,e=>new S(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new S(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function E(e,t,n){return e.message=e.message.replace(t,n),e}function T(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function O(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class S{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class k extends S{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class A{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,n)))}catch(r){throw E(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(n){throw E(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw E(t,"limit()","Query.limit()")}}limitToLast(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw E(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw E(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw E(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw E(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw E(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=T(e),n=O(e,e=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,n)}withConverter(e){return new A(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new k(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new A(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new k(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new C(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new k(this._firestore,n))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class N extends A{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new I(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function D(e){return Object(i["p"])(e,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["l"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new j(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new j(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new j(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new j(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new j(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={Firestore:g,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:S,Query:A,QueryDocumentSnapshot:k,QuerySnapshot:x,CollectionReference:N,FieldPath:R,FieldValue:j,setLogLevel:y,CACHE_SIZE_UNLIMITED:i["c"]};function L(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},P)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){L(e,(e,t)=>new g(e,t,new m)),e.registerVersion(a,c)}M(r["a"])},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1f5a":function(e,t,n){"use strict";n.d(t,"x",(function(){return x})),n.d(t,"F",(function(){return A}));var r=n("530c");n.d(t,"a",(function(){return r["b"]})),n.d(t,"b",(function(){return r["e"]})),n.d(t,"c",(function(){return r["h"]})),n.d(t,"d",(function(){return r["i"]})),n.d(t,"e",(function(){return r["m"]})),n.d(t,"f",(function(){return r["k"]})),n.d(t,"g",(function(){return r["f"]})),n.d(t,"h",(function(){return r["n"]})),n.d(t,"i",(function(){return r["j"]})),n.d(t,"j",(function(){return r["sb"]})),n.d(t,"k",(function(){return r["ub"]})),n.d(t,"l",(function(){return r["l"]})),n.d(t,"m",(function(){return r["L"]})),n.d(t,"n",(function(){return r["o"]})),n.d(t,"o",(function(){return r["p"]})),n.d(t,"p",(function(){return r["eb"]})),n.d(t,"q",(function(){return r["J"]})),n.d(t,"r",(function(){return r["ab"]})),n.d(t,"s",(function(){return r["K"]})),n.d(t,"t",(function(){return r["fb"]})),n.d(t,"u",(function(){return r["G"]})),n.d(t,"v",(function(){return r["H"]})),n.d(t,"w",(function(){return r["gb"]})),n.d(t,"y",(function(){return r["x"]})),n.d(t,"z",(function(){return r["hb"]})),n.d(t,"A",(function(){return r["qb"]})),n.d(t,"B",(function(){return r["u"]})),n.d(t,"C",(function(){return r["y"]})),n.d(t,"D",(function(){return r["w"]})),n.d(t,"E",(function(){return r["d"]})),n.d(t,"G",(function(){return r["A"]})),n.d(t,"H",(function(){return r["c"]})),n.d(t,"I",(function(){return r["M"]})),n.d(t,"J",(function(){return r["T"]})),n.d(t,"K",(function(){return r["U"]})),n.d(t,"L",(function(){return r["pb"]})),n.d(t,"M",(function(){return r["g"]})),n.d(t,"N",(function(){return r["ob"]})),n.d(t,"O",(function(){return r["D"]})),n.d(t,"P",(function(){return r["s"]})),n.d(t,"Q",(function(){return r["rb"]})),n.d(t,"R",(function(){return r["jb"]})),n.d(t,"S",(function(){return r["mb"]})),n.d(t,"T",(function(){return r["V"]})),n.d(t,"U",(function(){return r["t"]})),n.d(t,"V",(function(){return r["vb"]})),n.d(t,"W",(function(){return r["kb"]})),n.d(t,"X",(function(){return r["nb"]})),n.d(t,"Y",(function(){return r["N"]})),n.d(t,"Z",(function(){return r["v"]})),n.d(t,"ab",(function(){return r["C"]})),n.d(t,"bb",(function(){return r["q"]})),n.d(t,"cb",(function(){return r["r"]})),n.d(t,"db",(function(){return r["a"]})),n.d(t,"eb",(function(){return r["B"]})),n.d(t,"fb",(function(){return r["E"]})),n.d(t,"gb",(function(){return r["wb"]})),n.d(t,"hb",(function(){return r["ib"]})),n.d(t,"ib",(function(){return r["lb"]})),n.d(t,"jb",(function(){return r["S"]})),n.d(t,"kb",(function(){return r["Q"]})),n.d(t,"lb",(function(){return r["R"]})),n.d(t,"mb",(function(){return r["xb"]})),n.d(t,"nb",(function(){return r["P"]})),n.d(t,"ob",(function(){return r["O"]})),n.d(t,"pb",(function(){return r["z"]}));var i=n("1fd5");n("589b"),n("e691"),n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=2e3;async function a(e,t,n){var i;const{BuildInfo:o}=s();Object(r["X"])(t.sessionId,"AuthEvent did not contain a session ID");const a=await d(t.sessionId),c={};return Object(r["Y"])()?c["ibi"]=o.packageName:Object(r["Z"])()?c["apn"]=o.packageName:Object(r["ab"])(e,"operation-not-supported-in-this-environment"),o.displayName&&(c["appDisplayName"]=o.displayName),c["sessionId"]=a,Object(r["bb"])(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,c)}async function c(e){const{BuildInfo:t}=s(),n={};Object(r["Y"])()?n.iosBundleId=t.packageName:Object(r["Z"])()?n.androidPackageName=t.packageName:Object(r["ab"])(e,"operation-not-supported-in-this-environment"),await Object(r["cb"])(e,n)}function u(e){const{cordova:t}=s();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let s=null;i?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,Object(r["W"])()?"_blank":"_system","location=yes"),n(s)})})}async function l(e,t,n){const{cordova:i}=s();let a=()=>{};try{await new Promise((s,c)=>{let u=null;function l(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function h(){u||(u=window.setTimeout(()=>{c(Object(r["db"])(e,"redirect-cancelled-by-user"))},o))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&h()}t.addPassiveListener(l),document.addEventListener("resume",h,!1),Object(r["Z"])()&&document.addEventListener("visibilitychange",d,!1),a=()=>{t.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}})}finally{a()}}function h(e){var t,n,i,o,a,c,u,l,h,d;const f=s();Object(r["eb"])("function"===typeof(null===(t=null===f||void 0===f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Object(r["eb"])("undefined"!==typeof(null===(n=null===f||void 0===f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Object(r["eb"])("function"===typeof(null===(a=null===(o=null===(i=null===f||void 0===f?void 0:f.cordova)||void 0===i?void 0:i.plugins)||void 0===o?void 0:o.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(r["eb"])("function"===typeof(null===(l=null===(u=null===(c=null===f||void 0===f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(r["eb"])("function"===typeof(null===(d=null===(h=null===f||void 0===f?void 0:f.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function d(e){const t=f(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function f(e){if(Object(r["X"])(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=20;class m extends r["F"]{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function g(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:w(),postBody:null,tenantId:e.tenantId,error:Object(r["db"])(e,"no-auth-event")}}function v(e,t){return _()._set(I(e),t)}async function y(e){const t=await _()._get(I(e));return t&&await _()._remove(I(e)),t}function b(e,t){var n,i;const s=T(t);if(s.includes("/__/auth/callback")){const t=O(s),o=t["firebaseError"]?E(decodeURIComponent(t["firebaseError"])):null,a=null===(i=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],c=a?Object(r["db"])(a):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function w(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<p;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function _(){return Object(r["fb"])(r["hb"])}function I(e){return Object(r["gb"])("authEvent",e.config.apiKey,e.name)}function E(e){try{return JSON.parse(e)}catch(t){return null}}function T(e){const t=O(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=O(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=O(i)["link"];return s||i||r||n||e}function O(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(i["z"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=500;class k{constructor(){this._redirectPersistence=r["u"],this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r["G"],this._overrideRedirectResult=r["H"]}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new m(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Object(r["ab"])(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){h(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Object(r["I"])(),await this._originValidation(e);const o=g(e,n,i);await v(e,o);const c=await a(e,o,t),d=await u(c);return l(e,s,d)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=s(),o=setTimeout(async()=>{await y(e),t.onEvent(C())},S),a=async n=>{clearTimeout(o);const r=await y(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=b(r,n["url"])),t.onEvent(i||C())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,a);const c=r,u=i.packageName.toLowerCase()+"://";s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&a({url:e}),"function"===typeof c)try{c(e)}catch(t){console.error(t)}}}}const A=k;function C(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Object(r["db"])("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){Object(r["J"])(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return M})),n.d(t,"i",(function(){return D})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return B})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return v})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return N})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return E})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return m})),n.d(t,"v",(function(){return y})),n.d(t,"w",(function(){return I})),n.d(t,"x",(function(){return _})),n.d(t,"y",(function(){return j})),n.d(t,"z",(function(){return P})),n.d(t,"A",(function(){return T}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}function T(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function A(e,t){return e.replace(C,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(R(n)&&R(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function P(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=V(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var r,v,y,b,w,_,I,E=n&&n.that,T=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),k=i(t,E),A=function(e){return r&&f(r,"normal",e),new m(!0,e)},C=function(e){return T?(o(e),S?k(e[0],e[1],A):k(e[0],e[1])):S?k(e,A):k(e)};if(O)r=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(y=0,b=u(e);b>y;y++)if(w=C(e[y]),w&&l(g,w))return w;return new m(!1)}r=h(e,v)}_=r.next;while(!(I=s(_,r)).done){try{w=C(I.value)}catch(x){f(r,"throw",x)}if("object"==typeof w&&w&&l(g,w))return w}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("cb2d"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("d6d6"),v=n("1cdc"),y=n("605d"),b=a.setImmediate,w=a.clearImmediate,_=a.process,I=a.Dispatch,E=a.Function,T=a.MessageChannel,O=a.String,S=0,k={},A="onreadystatechange";try{r=a.location}catch(R){}var C=function(e){if(h(k,e)){var t=k[e];delete k[e],t()}},x=function(e){return function(){C(e)}},N=function(e){C(e.data)},D=function(e){a.postMessage(O(e),r.protocol+"//"+r.host)};b&&w||(b=function(e){g(arguments.length,1);var t=l(e)?e:E(e),n=p(arguments,1);return k[++S]=function(){c(t,void 0,n)},i(S),S},w=function(e){delete k[e]},y?i=function(e){_.nextTick(x(e))}:I&&I.now?i=function(e){I.now(x(e))}:T&&!v?(s=new T,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(D)?(i=D,a.addEventListener("message",N,!1)):i=A in m("script")?function(e){f.appendChild(m("script"))[A]=function(){f.removeChild(this),C(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:b,clear:w}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},3529:function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("59ed"),o=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{race:function(e){var t=this,n=o.f(t),r=n.reject,u=a((function(){var o=s(t.resolve);c(e,(function(e){i(o,t,e).then(n.resolve,r)}))}));return u.error&&r(u.value),n.promise}})},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)s.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4738:function(e,t,n){var r=n("da84"),i=n("d256"),s=n("1626"),o=n("94ca"),a=n("8925"),c=n("b622"),u=n("6069"),l=n("c430"),h=n("2d00"),d=i&&i.prototype,f=c("species"),p=!1,m=s(r.PromiseRejectionEvent),g=o("Promise",(function(){var e=a(i),t=e!==String(i);if(!t&&66===h)return!0;if(l&&(!d["catch"]||!d["finally"]))return!0;if(h>=51&&/native code/.test(e))return!1;var n=new i((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},s=n.constructor={};return s[f]=r,p=n.then((function(){}))instanceof r,!p||!t&&u&&!m}));e.exports={CONSTRUCTOR:g,REJECTION_EVENT:m,SUBCLASSING:p}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5134:function(e,t,n){"use strict";(function(e){let r,i;function s(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,i=e.perf_hooks.performance):r=!1),r}function o(){return s()?i.now():Date.now()}n.d(t,"a",(function(){return o}))}).call(this,n("c8ba"))},"530c":function(e,t,n){"use strict";n.d(t,"a",(function(){return Vt})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return Pe})),n.d(t,"e",(function(){return Ue})),n.d(t,"f",(function(){return tt})),n.d(t,"g",(function(){return fe})),n.d(t,"h",(function(){return ht})),n.d(t,"i",(function(){return mt})),n.d(t,"j",(function(){return jr})),n.d(t,"k",(function(){return gt})),n.d(t,"l",(function(){return Sr})),n.d(t,"m",(function(){return vt})),n.d(t,"n",(function(){return pt})),n.d(t,"o",(function(){return _t})),n.d(t,"p",(function(){return It})),n.d(t,"q",(function(){return St})),n.d(t,"r",(function(){return Pt})),n.d(t,"s",(function(){return Lt})),n.d(t,"t",(function(){return Mt})),n.d(t,"u",(function(){return jn})),n.d(t,"v",(function(){return Kt})),n.d(t,"w",(function(){return zt})),n.d(t,"x",(function(){return Gt})),n.d(t,"y",(function(){return $t})),n.d(t,"z",(function(){return Wt})),n.d(t,"A",(function(){return Ht})),n.d(t,"B",(function(){return Qt})),n.d(t,"C",(function(){return Yt})),n.d(t,"D",(function(){return Xt})),n.d(t,"E",(function(){return Jt})),n.d(t,"F",(function(){return hi})),n.d(t,"G",(function(){return ci})),n.d(t,"H",(function(){return Jr})),n.d(t,"I",(function(){return Xr})),n.d(t,"J",(function(){return Re})),n.d(t,"K",(function(){return Mn})),n.d(t,"L",(function(){return bt})),n.d(t,"M",(function(){return en})),n.d(t,"N",(function(){return tn})),n.d(t,"O",(function(){return nn})),n.d(t,"P",(function(){return sn})),n.d(t,"Q",(function(){return on})),n.d(t,"R",(function(){return an})),n.d(t,"S",(function(){return xt})),n.d(t,"T",(function(){return gn})),n.d(t,"U",(function(){return bn})),n.d(t,"V",(function(){return On})),n.d(t,"W",(function(){return Oe})),n.d(t,"X",(function(){return T})),n.d(t,"Y",(function(){return Te})),n.d(t,"Z",(function(){return _e})),n.d(t,"ab",(function(){return v})),n.d(t,"bb",(function(){return qi})),n.d(t,"cb",(function(){return mi})),n.d(t,"db",(function(){return y})),n.d(t,"eb",(function(){return I})),n.d(t,"fb",(function(){return S})),n.d(t,"gb",(function(){return pe})),n.d(t,"hb",(function(){return Dn})),n.d(t,"ib",(function(){return qr})),n.d(t,"jb",(function(){return zr})),n.d(t,"kb",(function(){return Kr})),n.d(t,"lb",(function(){return ti})),n.d(t,"mb",(function(){return si})),n.d(t,"nb",(function(){return ri})),n.d(t,"ob",(function(){return sr})),n.d(t,"pb",(function(){return ai})),n.d(t,"qb",(function(){return $i})),n.d(t,"rb",(function(){return xr})),n.d(t,"sb",(function(){return Qi})),n.d(t,"tb",(function(){return ts})),n.d(t,"ub",(function(){return c})),n.d(t,"vb",(function(){return Nr})),n.d(t,"wb",(function(){return Cr})),n.d(t,"xb",(function(){return Rr}));var r=n("1fd5"),i=n("589b"),s=n("b5e5"),o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw _(e,...t)}function y(e,...t){return _(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function T(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new Map;function S(e){T(e instanceof Function,"Expected a class definition");let t=O.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,O.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=Object(i["_getProvider"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["i"])(i,null!==t&&void 0!==t?t:{}))return e;v(e,"already-initialized")}const s=n.initialize({options:t});return s}function A(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(S);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||Object(r["o"])()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["t"])()||Object(r["v"])()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},F=new j(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,i,s={}){return B(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["y"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),L.fetch()(K(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function B(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new z(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw G(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(s){if(s instanceof r["c"])throw s;v(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await U(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function K(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"network-request-failed")),F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return U(e,"POST","/v1/accounts:update",t)}async function H(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=Object(r["l"])(e),i=await n.getIdToken(t),s=J(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:Q(X(s.auth_time)),issuedAtTime:Q(X(s.iat)),expirationTime:Q(X(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function X(e){return 1e3*Number(e)}function J(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function Z(e){const t=J(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&te(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Q(this.lastLoginAt),this.creationTime=Q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,H(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=Object(r["l"])(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function ae(e){return e.map(e=>{var{providerId:t}=e,n=Object(s["a"])(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await B(e,{},async()=>{const n=Object(r["y"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=K(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",L.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Object(s["a"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return se(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:E}=t;I(y&&E,e,"internal-error");const T=ue.fromJSON(this.name,E);I("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof w,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const O=new he({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(O.providerData=_.map(e=>Object.assign({},e))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(S(fe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||S(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=Object(r["m"])()){return/firefox\//i.test(e)}function ye(e=Object(r["m"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=Object(r["m"])()){return/crios\//i.test(e)}function we(e=Object(r["m"])()){return/iemobile/i.test(e)}function _e(e=Object(r["m"])()){return/android/i.test(e)}function Ie(e=Object(r["m"])()){return/blackberry/i.test(e)}function Ee(e=Object(r["m"])()){return/webos/i.test(e)}function Te(e=Object(r["m"])()){return/iphone|ipad|ipod/i.test(e)}function Oe(e=Object(r["m"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=Object(r["m"])()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return Object(r["r"])()&&10===document.documentMode}function Ae(e=Object(r["m"])()){return Te(e)||_e(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||we(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t=[]){let n;switch(e){case"Browser":n=ge(Object(r["m"])());break;case"Worker":n=`${ge(Object(r["m"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=S(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["l"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(S(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&S(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[S(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Re(e){return Object(r["l"])(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["h"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const r=Re(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Le(t),{host:o,port:a}=Me(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ve()}function Le(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Le(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Fe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Fe(t)}}}function Fe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ve(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return U(e,"POST","/v1/accounts:resetPassword",V(e,t))}async function qe(e,t){return U(e,"POST","/v1/accounts:update",t)}async function Ke(e,t){return U(e,"POST","/v1/accounts:update",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",V(e,t))}async function Ge(e,t){return U(e,"POST","/v1/accounts:sendOobCode",V(e,t))}async function $e(e,t){return Ge(e,t)}async function We(e,t){return Ge(e,t)}async function He(e,t){return Ge(e,t)}async function Qe(e,t){return Ge(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}async function Xe(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ue{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ze(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xe(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Object(s["a"])(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new tt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["y"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",V(e,t))}async function rt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t))}async function it(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=Object(r["z"])(Object(r["k"])(e))["link"],n=t?Object(r["z"])(Object(r["k"])(t))["deep_link_id"]:null,i=Object(r["z"])(Object(r["k"])(e))["deep_link_id"],s=i?Object(r["z"])(Object(r["k"])(i))["link"]:null;return s||i||n||t||e}class lt{constructor(e){var t,n,i,s,o,a;const c=Object(r["z"])(Object(r["k"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return I(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="http://localhost";class bt extends Ue{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new bt(n,i):null}static _create(e,t){return new bt(e,t)}buildRequest(){return{requestUri:yt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="saml.";class _t extends dt{constructor(e){I(e.startsWith(wt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return bt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t){return q(e,"POST","/v1/accounts:signUp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=Ot(n),o=new Tt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ot(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e){var t;const n=Re(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Et(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new kt(e,t,n,r)}}function At(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw kt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t){const n=Object(r["l"])(e);await Dt(!0,n,t);const{providerUserInfo:i}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ct(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Dt(e,t,n){await ie(t);const r=Ct(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,At(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=J(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),Tt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t,n=!1){const r="signIn",i=await At(e,r,t),s=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Pt(e,t){return jt(Re(e),t)}async function Lt(e,t){const n=Object(r["l"])(e);return await Dt(!1,n,t.providerId),Nt(n,t)}async function Mt(e,t){return Rt(Object(r["l"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){const n=Re(e),r=await Ft(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Bt._fromServerResponse(e,t):v(e,"internal-error")}}class Bt extends Ut{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Bt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t,n){const i=Object(r["l"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&qt(i,s,n),await We(i,s)}async function zt(e,t,n){await Be(Object(r["l"])(e),{oobCode:t,newPassword:n})}async function Gt(e,t){await Ke(Object(r["l"])(e),{oobCode:t})}async function $t(e,t){const n=Object(r["l"])(e),i=await Be(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ut._fromServerResponse(Re(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Wt(e,t){const{data:n}=await $t(Object(r["l"])(e),t);return n.email}async function Ht(e,t,n){const r=Re(e),i=await Et(r,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Qt(e,t,n){return Pt(Object(r["l"])(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t,n){const i=Object(r["l"])(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&qt(i,s,n),await He(i,s)}function Xt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const i=Object(r["l"])(e),s=ht.credentialWithLink(t,n||C());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return U(e,"POST","/v1/accounts:createAuthUri",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=x()?C():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Zt(Object(r["l"])(e),i);return s||[]}async function tn(e,t){const n=Object(r["l"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&qt(n.auth,s,t);const{email:o}=await $e(n.auth,s);o!==e.email&&await e.reload()}async function nn(e,t,n){const i=Object(r["l"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&qt(i.auth,o,n);const{email:a}=await Qe(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return U(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["l"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(i,rn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function on(e,t){return cn(Object(r["l"])(e),t,null)}function an(e,t){return cn(Object(r["l"])(e),null,t)}async function cn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,qe(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new ln(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new dn(s,i);case"github.com":return new fn(s,i);case"google.com":return new pn(s,i);case"twitter.com":return new mn(s,i,e.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,r,i)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hn extends ln{constructor(e,t,n,r){super(e,t,n),this.username=r}}class dn extends ln{constructor(e,t){super(e,"facebook.com",t)}}class fn extends hn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends ln{constructor(e,t){super(e,"google.com",t)}}class mn extends hn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:un(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new vn("enroll",e)}static _fromMfaPendingCredential(e){return new vn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Ut._fromServerResponse(n,e));I(r.mfaPendingCredential,n,"internal-error");const s=vn._fromMfaPendingCredential(r.mfaPendingCredential);return new yn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bn(e,t){var n;const i=Object(r["l"])(e),s=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),yn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}function _n(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}function In(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",V(e,t))}class En{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Ut._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new En(e)}async getSession(){return vn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,In(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const Tn=new WeakMap;function On(e){const t=Object(r["l"])(e);return Tn.has(t)||Tn.set(t,En._fromUser(t)),Tn.get(t)}const Sn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sn,"1"),this.storage.removeItem(Sn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){const e=Object(r["m"])();return ye(e)||Te(e)}const Cn=1e3,xn=10;class Nn extends kn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=An()&&Ce(),this.fallbackToPolling=Ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nn.type="LOCAL";const Dn=Nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends kn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rn.type="SESSION";const jn=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ln(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Pn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.receivers=[];class Fn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Mn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Un(e){Vn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function qn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Kn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function zn(){return Bn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="firebaseLocalStorageDb",$n=1,Wn="firebaseLocalStorage",Hn="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Xn(){const e=indexedDB.deleteDatabase(Gn);return new Qn(e).toPromise()}function Jn(){const e=indexedDB.open(Gn,$n);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:Hn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Xn(),t(await Jn()))})})}async function Zn(e,t,n){const r=Yn(e,!0).put({[Hn]:t,value:n});return new Qn(r).toPromise()}async function er(e,t){const n=Yn(e,!1).get(t),r=await new Qn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Yn(e,!0).delete(t);return new Qn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(zn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qn(),!this.activeServiceWorker)return;this.sender=new Fn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Kn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Zn(e,Sn,"1"),await tr(e,Sn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>er(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Yn(e,!1).getAll();return new Qn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}function ar(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ur().appendChild(r)})}function hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=500,fr=6e4,pr=1e12;class mr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=vr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},fr)},dr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=hr("rcb"),br=new j(3e4,6e4),wr="https://www.google.com/recaptcha/api.js?";class _r{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Vn().grecaptcha}load(e,t=""){return I(Ir(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vn().grecaptcha):new Promise((n,i)=>{const s=Vn().setTimeout(()=>{i(y(e,"network-request-failed"))},br.get());Vn()[yr]=()=>{Vn().clearTimeout(s),delete Vn()[yr];const r=Vn().grecaptcha;if(!r)return void i(y(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${wr}?${Object(r["y"])({onload:yr,render:"explicit",hl:t})}`;lr(o).catch(()=>{clearTimeout(s),i(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Vn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ir(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Er{async load(e){return new mr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="recaptcha",Or={theme:"light",type:"image"};class Sr{constructor(e,t=Object.assign({},Or),n){this.parameters=t,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Er:new _r,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Vn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(x()&&!Bn(),this.auth,"internal-error"),await kr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cr(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function kr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Cr(e,t,n){const i=Re(e),s=await Dr(i,t,Object(r["l"])(n));return new Ar(s,e=>Pt(i,e))}async function xr(e,t,n){const i=Object(r["l"])(e);await Dt(!1,i,"phone");const s=await Dr(i.auth,t,Object(r["l"])(n));return new Ar(s,e=>Lt(i,e))}async function Nr(e,t,n){const i=Object(r["l"])(e),s=await Dr(i.auth,t,Object(r["l"])(n));return new Ar(s,e=>Mt(i,e))}async function Dr(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===Tr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await wn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Rr(e,t){await Nt(Object(r["l"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.providerId=jr.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return Dr(this.auth,e,Object(r["l"])(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return jr.credentialFromTaggedObject(t)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pr(e,t){return t?S(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jr.PROVIDER_ID="phone",jr.PHONE_SIGN_IN_METHOD="phone";class Lr extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mr(e){return jt(e.auth,new Lr(e),e.bypassAuthState)}function Fr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Rt(n,new Lr(e),e.bypassAuthState)}async function Vr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Nt(n,new Lr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return Vr;case"reauthViaPopup":case"reauthViaRedirect":return Fr;default:v(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new j(2e3,1e4);async function qr(e,t,n){const r=Re(e);w(e,t,dt);const i=Pr(r,n),s=new Gr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Kr(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,dt);const s=Pr(i.auth,n),o=new Gr(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function zr(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,dt);const s=Pr(i.auth,n),o=new Gr(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class Gr extends Ur{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Br.get())};e()}}Gr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $r="pendingRedirect",Wr=new Map;class Hr extends Ur{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const t=await Qr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qr(e,t){const n=ei(t),r=Zr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Yr(e,t){return Zr(e)._set(ei(t),"true")}function Xr(){Wr.clear()}function Jr(e,t){Wr.set(e._key(),t)}function Zr(e){return S(e._redirectPersistence)}function ei(e){return pe($r,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=Re(e);w(e,t,dt);const i=Pr(r,n);return await Yr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,dt);const s=Pr(i.auth,n);await Yr(s,i.auth);const o=await ui(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function si(e,t,n){return oi(e,t,n)}async function oi(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,dt);const s=Pr(i.auth,n);await Dt(!1,i,t.providerId),await Yr(s,i.auth);const o=await ui(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function ai(e,t){return await Re(e)._initializationPromise,ci(e,t,!1)}async function ci(e,t,n=!1){const r=Re(e),i=Pr(r,t),s=new Hr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ui(e){const t=Mn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=6e5;class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=li&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function fi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function pi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t={}){return U(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vi=/^https?/;async function yi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mi(e);for(const r of t)try{if(bi(r))return}catch(n){}v(e,"unauthorized-domain")}function bi(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new j(3e4,6e4);function _i(){const e=Vn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ii(e){return new Promise((t,n)=>{var r,i,s;function o(){_i(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_i(),n(y(e,"network-request-failed"))},timeout:wi.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=hr("iframefcb");return Vn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},lr("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Ei=null,e})}let Ei=null;function Ti(e){return Ei=Ei||Ii(e),Ei}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new j(5e3,15e3),Si="__/auth/iframe",ki="emulator/auth/iframe",Ai={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ci=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xi(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,ki):`https://${e.config.authDomain}/${Si}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=Ci.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["y"])(s).slice(1)}`}async function Ni(e){const t=await Ti(e),n=Vn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:xi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ai,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),s=Vn().setTimeout(()=>{r(i)},Oi.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ri=500,ji=600,Pi="_blank",Li="http://localhost";class Mi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fi(e,t,n,i=Ri,s=ji){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Di),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["m"])().toLowerCase();n&&(c=be(l)?Pi:n),ve(l)&&(t=t||Li,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Se(l)&&"_self"!==c)return Vi(t||"",c),new Mi(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Mi(d)}function Vi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="__/auth/handler",Bi="emulator/auth/handler";function qi(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["q"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ft){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Ki(e)}?${Object(r["y"])(u).slice(1)}`}function Ki({config:e}){return e.emulator?P(e,Bi):`https://${e.authDomain}/${Ui}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="webStorageSupport";class Gi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jn,this._completeRedirectFn=ci,this._overrideRedirectResult=Jr}async _openPopup(e,t,n,r){var i;T(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=qi(e,t,n,C(),r);return Fi(e,s,Mn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Un(qi(e,t,n,C(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ni(e),n=new hi(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(zi,{type:zi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[zi];void 0!==i&&t(!!i),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ae()||ye()||Te()}}const $i=Gi;class Wi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Hi extends Wi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hi(e)}_finalizeEnroll(e,t,n){return _n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qi{constructor(){}static assertion(e){return Hi._fromCredential(e)}}Qi.FACTOR_ID="phone";var Yi="@firebase/auth",Xi="0.20.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function es(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},a=new De(t,r,i);return A(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Ji(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Yi,Xi,Zi(e)),Object(i["registerVersion"])(Yi,Xi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e=Object(i["getApp"])()){const t=Object(i["_getProvider"])(e,"auth");return t.isInitialized()?t.getImmediate():k(e,{popupRedirectResolver:$i,persistence:[sr,Dn,jn]})}es("Browser")},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s["c"]})),n.d(t,"SDK_VERSION",(function(){return ye})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return se})),n.d(t,"_addComponent",(function(){return ue})),n.d(t,"_addOrOverwriteComponent",(function(){return le})),n.d(t,"_apps",(function(){return ae})),n.d(t,"_clearComponents",(function(){return pe})),n.d(t,"_components",(function(){return ce})),n.d(t,"_getProvider",(function(){return de})),n.d(t,"_registerComponent",(function(){return he})),n.d(t,"_removeServiceInstance",(function(){return fe})),n.d(t,"deleteApp",(function(){return Ie})),n.d(t,"getApp",(function(){return we})),n.d(t,"getApps",(function(){return _e})),n.d(t,"initializeApp",(function(){return be})),n.d(t,"onLog",(function(){return Te})),n.d(t,"registerVersion",(function(){return Ee})),n.d(t,"setLogLevel",(function(){return Oe}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const O=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!O.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}b(e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.7.24",R=new i["b"]("@firebase/app"),j="@firebase/app-compat",P="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",U="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",K="@firebase/functions",z="@firebase/functions-compat",G="@firebase/installations",$="@firebase/installations-compat",W="@firebase/messaging",H="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.8.1",se="[DEFAULT]",oe={[N]:"fire-core",[j]:"fire-core-compat",[L]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[V]:"fire-auth",[U]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[K]:"fire-fn",[z]:"fire-fn-compat",[G]:"fire-iid",[$]:"fire-iid-compat",[W]:"fire-fcm",[H]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ge=new s["b"]("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function be(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw ge.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if(Object(s["i"])(e,o.options)&&Object(s["i"])(n,o.config))return o;throw ge.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of ce.values())a.addComponent(r);const c=new ve(e,n,a);return ae.set(i,c),c}function we(e=se){const t=ae.get(e);if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");Object(i["d"])(e,t)}function Oe(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebase-heartbeat-database",ke=1,Ae="firebase-heartbeat-store";let Ce=null;function xe(){return Ce||(Ce=T(Se,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch(e=>{throw ge.create("storage-open",{originalErrorMessage:e.message})})),Ce}async function Ne(e){try{const t=await xe();return t.transaction(Ae).objectStore(Ae).get(Re(e))}catch(t){throw ge.create("storage-get",{originalErrorMessage:t.message})}}async function De(e,t){try{const n=await xe(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);return await i.put(t,Re(e)),r.done}catch(n){throw ge.create("storage-set",{originalErrorMessage:n.message})}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=1024,Pe=2592e6;class Le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Pe}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Fe(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Fe(e,t=je){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["s"])()&&Object(s["A"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),he(new r["a"]("heartbeat",e=>new Le(e),"PRIVATE")),Ee(N,D,e),Ee(N,D,"esm2017"),Ee("fire-js","")}Be("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.14";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["m"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["v"])()||Object(s["u"])()}function f(){return Object(s["r"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["m"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["m"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["s"])()}catch(e){return v()&&Object(s["s"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(s["o"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function _(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={LOCAL:"local",NONE:"none",SESSION:"session"},E=r["p"],T="persistence";function O(e,t){E(Object.values(I).includes(t),e,"invalid-persistence-type"),Object(s["v"])()?E(t!==I.SESSION,e,"unsupported-persistence-type"):Object(s["u"])()?E(t===I.NONE,e,"unsupported-persistence-type"):v()?E(t===I.NONE||t===I.LOCAL&&Object(s["s"])(),e,"unsupported-persistence-type"):E(t===I.NONE||g(),e,"unsupported-persistence-type")}async function S(e){await e._initializationPromise;const t=A(),n=r["w"](T,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function k(e,t){const n=A();if(!n)return[];const i=r["w"](T,e,t),s=n.getItem(i);switch(s){case I.NONE:return[r["M"]];case I.LOCAL:return[r["N"],r["B"]];case I.SESSION:return[r["B"]];default:return[]}}function A(){var e;try{return(null===(e=_())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=r["p"];class x{constructor(){this.browserResolver=r["t"](r["A"]),this.cordovaResolver=r["t"](r["F"]),this.underlyingResolver=null,this._redirectPersistence=r["B"],this._completeRedirectFn=r["u"],this._overrideRedirectResult=r["v"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return C(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return e.unwrap()}function D(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return P(e)}function j(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new F(e,r["K"](e,t))}else if(i){const e=P(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function P(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function L(e,t){return t.catch(t=>{throw t instanceof s["c"]&&j(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:R(e),additionalUserInfo:r["J"](e),user:V.getOrCreate(n)}})}async function M(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>L(e,n.confirm(t))}}class F{constructor(e,t){this.resolver=t,this.auth=D(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return L(N(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this._delegate=e,this.multiFactor=r["T"](e)}static getOrCreate(e){return V.USER_MAP.has(e)||V.USER_MAP.set(e,new V(e)),V.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return L(this.auth,r["P"](this._delegate,e))}async linkWithPhoneNumber(e,t){return M(this.auth,r["Q"](this._delegate,e,t))}async linkWithPopup(e){return L(this.auth,r["R"](this._delegate,e,x))}async linkWithRedirect(e){return await S(r["q"](this.auth)),r["S"](this._delegate,e,x)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return L(this.auth,r["U"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return M(this.auth,r["V"](this._delegate,e,t))}reauthenticateWithPopup(e){return L(this.auth,r["W"](this._delegate,e,x))}async reauthenticateWithRedirect(e){return await S(r["q"](this.auth)),r["X"](this._delegate,e,x)}sendEmailVerification(e){return r["Y"](this._delegate,e)}async unlink(e){return await r["jb"](this._delegate,e),this}updateEmail(e){return r["kb"](this._delegate,e)}updatePassword(e){return r["lb"](this._delegate,e)}updatePhoneNumber(e){return r["mb"](this._delegate,e)}updateProfile(e){return r["nb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["ob"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}V.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=r["p"];class B{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;U(n,"invalid-api-key",{appName:e.name}),U(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?x:void 0;this._delegate=t.initialize({options:{persistence:K(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r["H"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?V.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["E"](this._delegate,e,t)}applyActionCode(e){return r["y"](this._delegate,e)}checkActionCode(e){return r["C"](this._delegate,e)}confirmPasswordReset(e,t){return r["D"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return L(this._delegate,r["G"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["I"](this._delegate,e)}isSignInWithEmailLink(e){return r["O"](this._delegate,e)}async getRedirectResult(){U(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["L"](this._delegate,x);return e?L(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["x"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["ab"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Z"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(O(this._delegate,e),e){case I.SESSION:t=r["B"];break;case I.LOCAL:const e=await r["t"](r["N"])._isAvailable();t=e?r["N"]:r["z"];break;case I.NONE:t=r["M"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return L(this._delegate,r["bb"](this._delegate))}signInWithCredential(e){return L(this._delegate,r["cb"](this._delegate,e))}signInWithCustomToken(e){return L(this._delegate,r["db"](this._delegate,e))}signInWithEmailAndPassword(e,t){return L(this._delegate,r["eb"](this._delegate,e,t))}signInWithEmailLink(e,t){return L(this._delegate,r["fb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return M(this._delegate,r["gb"](this._delegate,e,t))}async signInWithPopup(e){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,r["hb"](this._delegate,e,x))}async signInWithRedirect(e){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),r["ib"](this._delegate,e,x)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["pb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function q(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&V.getOrCreate(e));return{next:s,error:t,complete:n}}function K(e,t){const n=k(e,t);if("undefined"===typeof self||n.includes(r["N"])||n.push(r["N"]),"undefined"!==typeof window)for(const i of[r["z"],r["B"]])n.includes(i)||n.push(i);return n.includes(r["M"])||n.push(r["M"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B.Persistence=I;class z{constructor(){this.providerId="phone",this._delegate=new r["i"](N(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G=r["p"];class ${constructor(e,n,i=t["a"].app()){var s;G(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="auth-compat";function H(e){e.INTERNAL.registerComponent(new i["a"](W,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new B(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:z,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:$,TwitterAuthProvider:r["o"],Auth:B,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}H(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5e7e":function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("605d"),l=n("da84"),h=n("c65b"),d=n("cb2d"),f=n("d2bb"),p=n("d44e"),m=n("2626"),g=n("59ed"),v=n("1626"),y=n("861d"),b=n("19aa"),w=n("4840"),_=n("2cf4").set,I=n("b575"),E=n("44de"),T=n("e667"),O=n("01b4"),S=n("69f3"),k=n("d256"),A=n("4738"),C=n("f069"),x="Promise",N=A.CONSTRUCTOR,D=A.REJECTION_EVENT,R=A.SUBCLASSING,j=S.getterFor(x),P=S.set,L=k&&k.prototype,M=k,F=L,V=l.TypeError,U=l.document,B=l.process,q=C.f,K=q,z=!!(U&&U.createEvent&&l.dispatchEvent),G="unhandledrejection",$="rejectionhandled",W=0,H=1,Q=2,Y=1,X=2,J=function(e){var t;return!(!y(e)||!v(t=e.then))&&t},Z=function(e,t){var n,r,i,s=t.value,o=t.state==H,a=o?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(o||(t.rejection===X&&ie(t),t.rejection=Y),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===e.promise?u(V("Promise-chain cycle")):(r=J(n))?h(r,n,c,u):c(n)):u(s)}catch(d){l&&!i&&l.exit(),u(d)}},ee=function(e,t){e.notified||(e.notified=!0,I((function(){var n,r=e.reactions;while(n=r.get())Z(n,e);e.notified=!1,t&&!e.rejection&&ne(e)})))},te=function(e,t,n){var r,i;z?(r=U.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!D&&(i=l["on"+e])?i(r):e===G&&E("Unhandled promise rejection",n)},ne=function(e){h(_,l,(function(){var t,n=e.facade,r=e.value,i=re(e);if(i&&(t=T((function(){u?B.emit("unhandledRejection",r,n):te(G,n,r)})),e.rejection=u||re(e)?X:Y,t.error))throw t.value}))},re=function(e){return e.rejection!==Y&&!e.parent},ie=function(e){h(_,l,(function(){var t=e.facade;u?B.emit("rejectionHandled",t):te($,t,e.value)}))},se=function(e,t,n){return function(r){e(t,r,n)}},oe=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=Q,ee(e,!0))},ae=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw V("Promise can't be resolved itself");var r=J(t);r?I((function(){var n={done:!1};try{h(r,t,se(ae,n,e),se(oe,n,e))}catch(i){oe(n,i,e)}})):(e.value=t,e.state=H,ee(e,!1))}catch(i){oe({done:!1},i,e)}}};if(N&&(M=function(e){b(this,F),g(e),h(r,this);var t=j(this);try{e(se(ae,t),se(oe,t))}catch(n){oe(t,n)}},F=M.prototype,r=function(e){P(this,{type:x,done:!1,notified:!1,parent:!1,reactions:new O,rejection:!1,state:W,value:void 0})},r.prototype=d(F,"then",(function(e,t){var n=j(this),r=q(w(this,M));return n.parent=!0,r.ok=!v(e)||e,r.fail=v(t)&&t,r.domain=u?B.domain:void 0,n.state==W?n.reactions.add(r):I((function(){Z(r,n)})),r.promise})),i=function(){var e=new r,t=j(e);this.promise=e,this.resolve=se(ae,t),this.reject=se(oe,t)},C.f=q=function(e){return e===M||e===s?new i(e):K(e)},!c&&v(k)&&L!==Object.prototype)){o=L.then,R||d(L,"then",(function(e,t){var n=this;return new M((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0});try{delete L.constructor}catch(ce){}f&&f(L,F)}a({global:!0,constructor:!0,wrap:!0,forced:N},{Promise:M}),p(M,x,!1,!0),m(x)},"5eed":function(e,t,n){var r=n("d256"),i=n("1c7e"),s=n("4738").CONSTRUCTOR;e.exports=s||!i((function(e){r.all(e).then(void 0,(function(){}))}))},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window&&"object"!=typeof Deno},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var m,g=h(arguments[o++]),v=d?p(a(g),d(g)):a(g),y=v.length,b=0;while(y>b)m=v[b++],r&&!s(f,g,m)||(n[m]=g[m])}return n}:d},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),I=c(w.has),E=c(w.set);r=function(e,t){if(I(w,e))throw new g(m);return t.facade=e,E(w,e,t),t},i=function(e){return _(w,e)||{}},s=function(e){return I(w,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new g(m);return t.facade=e,l(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},s=function(e){return h(e,T)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return rt}));var r=n("7a23");n("abc5");n("5134");
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>i?Symbol(e):"_vr_"+e,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function y(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=S(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function _(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&I(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?O(e,t):Array.isArray(t)?O(t,e):e===t}function O(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,A;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function C(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const x=/^[^#]+#/;function N(e,t){return e.replace(x,"#")+t}function D(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function j(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=D(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function P(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function M(e,t){L.set(e,t)}function F(e){const t=L.get(e);return L.delete(e),t}let V=()=>location.protocol+"//"+location.host;function U(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=U(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:k.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:R()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function K(e){const{history:t,location:n}=window,r={value:U(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:V()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,q(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=f({},i.value,t.state,{forward:e,scroll:R()});s(o.current,o,!0);const a=f({},q(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function z(e){e=C(e);const t=K(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:N.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function G(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=s("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Y(e,t){return f(new Error,{type:e,[H]:!0},t)}function X(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const J="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||J;if(h!==J){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,u=o in t?t[o]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);i.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},se=/[a-zA-Z0-9_]/;function oe(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ae(e,t,n){const r=te(oe(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:m}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0&&(e.record.path!==n[t].record.path||!me(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Y(1,{location:e});o=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Y(1,{location:e,currentLocation:t});o=i.record.name,a=f({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function me(e,t){return t.children.some(t=>t===e||me(e,t))}const ge=/#/g,ve=/&/g,ye=/\//g,be=/=/g,we=/\?/g,_e=/\+/g,Ie=/%5B/g,Ee=/%5D/g,Te=/%5E/g,Oe=/%60/g,Se=/%7B/g,ke=/%7C/g,Ae=/%7D/g,Ce=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(Ie,"[").replace(Ee,"]")}function Ne(e){return xe(e).replace(Se,"{").replace(Ae,"}").replace(Te,"^")}function De(e){return xe(e).replace(_e,"%2B").replace(Ce,"+").replace(ge,"%23").replace(ve,"%26").replace(Oe,"`").replace(Se,"{").replace(Ae,"}").replace(Te,"^")}function Re(e){return De(e).replace(be,"%3D")}function je(e){return xe(e).replace(ge,"%23").replace(we,"%3F")}function Pe(e){return null==e?"":je(e).replace(ye,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(_e," "),n=e.indexOf("="),s=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&De(e)):[r&&De(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ve(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(Y(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function qe(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ke(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Be(c,n,r,s,e))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,r,s,e)()}))}}return i}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=Object(r["k"])(c),n=Object(r["k"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["z"])(e.to))),s=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(I.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&s[s.length-1].path!==a?s.findIndex(I.bind(null,e[t-2])):o}),o=Object(r["b"])(()=>s.value>-1&&He(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return We(n)?t[Object(r["z"])(e.replace)?"replace":"push"](Object(r["z"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const Ge=Object(r["h"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=Object(r["t"])(ze(e)),{options:i}=Object(r["k"])(c),s=Object(r["b"])(()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["j"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$e=Ge;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function He(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["h"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Object(r["k"])(l),s=Object(r["b"])(()=>e.route||i.value),c=Object(r["k"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["r"])(a,c+1),Object(r["r"])(o,u),Object(r["r"])(l,s);const h=Object(r["u"])();return Object(r["C"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&I(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[e.name],c=e.name;if(!a)return Je(n.default,{Component:a,route:i});const l=o.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},m=Object(r["j"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Je(n.default,{Component:m,route:i})||m}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Xe;function et(e){const t=ce(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||Fe,s=e.history;const o=Ue(),a=Ue(),d=Ue(),g=Object(r["x"])(W);let v=W;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,e=>""+e),I=p.bind(null,Pe),E=p.bind(null,Le);function T(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function O(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map(e=>e.record)}function A(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=f({},r||g.value),"string"===typeof e){const i=y(n,e,r.path),o=t.resolve({path:i.path},r),a=s.createHref(i.fullPath);return f(i,o,{params:E(o.params),hash:Le(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:y(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:I(e.params)}),r.params=I(r.params)}const a=t.resolve(o,r),c=e.hash||"";a.params=w(E(a.params));const u=b(i,f({},e,{hash:Ne(c),path:a.path})),l=s.createHref(u);return f({fullPath:u,hash:c,query:i===Fe?Ve(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function x(e){return"string"===typeof e?y(n,e,g.value.path):f({},e)}function N(e,t){if(v!==e)return Y(8,{from:t,to:e})}function D(e){return U(e)}function L(e){return D(f(x(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function U(e,t){const n=v=C(e),r=g.value,s=e.state,o=e.force,a=!0===e.replace,c=V(n);if(c)return U(f(x(c),{state:s,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&_(i,r,n)&&(l=Y(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(e=>X(e)?X(e,2)?e:ne(e):ee(e,u,r)).then(e=>{if(e){if(X(e,2))return U(f(x(e.to),{state:s,force:o,replace:a}),t||u)}else e=z(u,r,!0,a,s);return K(u,r,e),e})}function B(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,s]=nt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Be(r,e,t))});const c=B.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const r of o.list())n.push(Be(r,e,t));return n.push(c),tt(n)}).then(()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Be(r,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=qe(s,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(c),tt(n)}).catch(e=>X(e,8)?e:Promise.reject(e))}function K(e,t,n){for(const r of d.list())r(e,t,n)}function z(e,t,n,r,i){const o=N(e,t);if(o)return o;const a=t===W,c=h?history.state:{};n&&(r||a?s.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),g.value=e,re(e,t,n,a),ne()}let G;function H(){G||(G=s.listen((e,t,n)=>{const r=C(e),i=V(r);if(i)return void U(f(i,{replace:!0}),r).catch(m);v=r;const o=g.value;h&&M(P(o.fullPath,n.delta),R()),q(r,o).catch(e=>X(e,12)?e:X(e,2)?(U(e.to,r).then(e=>{X(e,20)&&!n.delta&&n.type===k.pop&&s.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&s.go(-n.delta,!1),ee(e,r,o))).then(e=>{e=e||z(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===k.pop&&X(e,20)&&s.go(-1,!1)),K(r,o,e)}).catch(m)}))}let Q,J=Ue(),Z=Ue();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Q&&g.value!==W?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function ne(e){return Q||(Q=!e,H(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset()),e}function re(t,n,i,s){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!i&&F(P(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["l"])().then(()=>o(t,n,a)).then(e=>e&&j(e)).catch(e=>ee(e,t,n))}const ie=e=>s.go(e);let se;const oe=new Set,ae={currentRoute:g,addRoute:T,removeRoute:O,hasRoute:A,getRoutes:S,resolve:C,options:e,push:D,replace:L,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",$e),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["z"])(g)}),h&&!se&&g.value===W&&(se=!0,D(s.location).catch(e=>{0}));const n={};for(const s in W)n[s]=Object(r["b"])(()=>g.value[s]);e.provide(c,t),e.provide(u,Object(r["t"])(n)),e.provide(l,g);const i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(v=W,G&&G(),G=null,g.value=W,se=!1,Q=!1),i()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>I(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>I(e,a))||i.push(a))}return[n,r,i]}function rt(){return Object(r["k"])(c)}},7149:function(e,t,n){"use strict";var r=n("23e7"),i=n("d066"),s=n("c430"),o=n("d256"),a=n("4738").CONSTRUCTOR,c=n("cdf9"),u=i("Promise"),l=s&&!a;r({target:"Promise",stat:!0,forced:s||a},{resolve:function(e){return c(l&&this===u?o:this,e)}})},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"t",(function(){return be})),n.d(t,"u",(function(){return je})),n.d(t,"x",(function(){return Pe})),n.d(t,"z",(function(){return Fe})),n.d(t,"y",(function(){return r["M"]})),n.d(t,"a",(function(){return vr})),n.d(t,"b",(function(){return vi})),n.d(t,"d",(function(){return Cr})),n.d(t,"e",(function(){return Br})),n.d(t,"f",(function(){return Ar})),n.d(t,"g",(function(){return Pr})),n.d(t,"h",(function(){return Zt})),n.d(t,"i",(function(){return ti})),n.d(t,"j",(function(){return yi})),n.d(t,"k",(function(){return Lt})),n.d(t,"l",(function(){return ot})),n.d(t,"m",(function(){return rn})),n.d(t,"n",(function(){return sn})),n.d(t,"o",(function(){return vn})),n.d(t,"p",(function(){return Er})),n.d(t,"q",(function(){return Ot})),n.d(t,"r",(function(){return Pt})),n.d(t,"s",(function(){return Tt})),n.d(t,"v",(function(){return Wr})),n.d(t,"w",(function(){return fr})),n.d(t,"C",(function(){return Ft})),n.d(t,"D",(function(){return Jn})),n.d(t,"c",(function(){return As})),n.d(t,"A",(function(){return bs})),n.d(t,"B",(function(){return ys})),n.d(t,"E",(function(){return Ts}));var r=n("9ff4");let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?l(this):w(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const I=[];function E(){I.push(_),_=!1}function T(){const e=I.pop();_=void 0===e||e}function O(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;S(r,i)}}function S(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function k(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(v)),Object(r["u"])(e)&&u.push(c.get(y)));break;case"delete":Object(r["o"])(e)||(u.push(c.get(v)),Object(r["u"])(e)&&u.push(c.get(y)));break;case"set":Object(r["u"])(e)&&u.push(c.get(v));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const C=Object(r["I"])("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["F"])),N=L(),D=L(!1,!0),R=L(!0),j=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=ke(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ke)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){E();const n=ke(this)[t].apply(this,e);return T(),n}}),e}function L(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ge:me:t?pe:fe).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(j,i))return Reflect.get(j,i,s);const a=Reflect.get(n,i,s);if(Object(r["F"])(i)?x.has(i):C(i))return a;if(e||O(n,"get",i),t)return a;if(Re(a)){const e=!o||!Object(r["t"])(i);return e?a.value:a}return Object(r["w"])(a)?e?_e(a):be(a):a}}const M=V(),F=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Te(o)&&Re(o)&&!Re(i))return!1;if(!e&&!Te(i)&&(Oe(i)||(i=ke(i),o=ke(o)),!Object(r["o"])(t)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===ke(s)&&(a?Object(r["j"])(i,o)&&k(t,"set",n,i,o):k(t,"add",n,i)),c}}function U(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&k(e,"delete",t,void 0,i),s}function B(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&x.has(t)||O(e,"has",t),n}function q(e){return O(e,"iterate",Object(r["o"])(e)?"length":v),Reflect.ownKeys(e)}const K={get:N,set:M,deleteProperty:U,has:B,ownKeys:q},z={get:R,set(e,t){return!0},deleteProperty(e,t){return!0}},G=Object(r["h"])({},K,{get:D,set:F}),$=e=>e,W=e=>Reflect.getPrototypeOf(e);function H(e,t,n=!1,r=!1){e=e["__v_raw"];const i=ke(e),s=ke(t);t!==s&&!n&&O(i,"get",t),!n&&O(i,"get",s);const{has:o}=W(i),a=r?$:n?xe:Ce;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=ke(n),i=ke(e);return e!==i&&!t&&O(r,"has",e),!t&&O(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Y(e,t=!1){return e=e["__v_raw"],!t&&O(ke(e),"iterate",v),Reflect.get(e,"size",e)}function X(e){e=ke(e);const t=ke(this),n=W(t),r=n.has.call(t,e);return r||(t.add(e),k(t,"add",e,e)),this}function J(e,t){t=ke(t);const n=ke(this),{has:i,get:s}=W(n);let o=i.call(n,e);o||(e=ke(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&k(n,"set",e,t,a):k(n,"add",e,t),this}function Z(e){const t=ke(this),{has:n,get:r}=W(t);let i=n.call(t,e);i||(e=ke(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&k(t,"delete",e,void 0,s),o}function ee(){const e=ke(this),t=0!==e.size,n=void 0,r=e.clear();return t&&k(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=ke(s),a=t?$:e?xe:Ce;return!e&&O(o,"iterate",v),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function ne(e,t,n){return function(...i){const s=this["__v_raw"],o=ke(s),a=Object(r["u"])(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?$:t?xe:Ce;return!t&&O(o,"iterate",u?y:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return H(this,e)},get size(){return Y(this)},has:Q,add:X,set:J,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return H(this,e,!1,!0)},get size(){return Y(this)},has:Q,add:X,set:J,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return H(this,e,!0)},get size(){return Y(this,!0)},has(e){return Q.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return H(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return Q.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)}),[e,n,t,r]}const[se,oe,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?oe:se;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve(Object(r["P"])(e))}function be(e){return Te(e)?e:Ie(e,!1,K,le,fe)}function we(e){return Ie(e,!1,G,he,pe)}function _e(e){return Ie(e,!0,z,de,me)}function Ie(e,t,n,i,s){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ee(e){return Te(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Oe(e){return!(!e||!e["__v_isShallow"])}function Se(e){return Ee(e)||Te(e)}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function Ae(e){return Object(r["g"])(e,"__v_skip",!0),e}const Ce=e=>Object(r["w"])(e)?be(e):e,xe=e=>Object(r["w"])(e)?_e(e):e;function Ne(e){_&&g&&(e=ke(e),S(e.dep||(e.dep=a())))}function De(e,t){e=ke(e),e.dep&&A(e.dep)}function Re(e){return!(!e||!0!==e.__v_isRef)}function je(e){return Le(e,!1)}function Pe(e){return Le(e,!0)}function Le(e,t){return Re(e)?e:new Me(e,t)}class Me{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Ce(e)}get value(){return Ne(this),this._value}set value(e){e=this.__v_isShallow?e:ke(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ce(e),De(this,e))}}function Fe(e){return Re(e)?e.value:e}const Ve={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return Ee(e)?e:new Proxy(e,Ve)}class Be{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(e,()=>{this._dirty||(this._dirty=!0,De(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=ke(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let i,s;const o=Object(r["q"])(e);o?(i=e,s=r["d"]):(i=e.get,s=e.set);const a=new Be(i,s,o||!s,n);return a}function Ke(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Ge(s,t,n)}return i}function ze(e,t,n,i){if(Object(r["q"])(e)){const s=Ke(e,t,n,i);return s&&Object(r["z"])(s)&&s.catch(e=>{Ge(e,t,n)}),s}const s=[];for(let r=0;r<e.length;r++)s.push(ze(e[r],t,n,i));return s}function Ge(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Ke(o,null,10,[e,i,s])}$e(e,n,i,r)}function $e(e,t,n,r=!0){console.error(e)}let We=!1,He=!1;const Qe=[];let Ye=0;const Xe=[];let Je=null,Ze=0;const et=[];let tt=null,nt=0;const rt=Promise.resolve();let it=null,st=null;function ot(e){const t=it||rt;return e?t.then(this?e.bind(this):e):t}function at(e){let t=Ye+1,n=Qe.length;while(t<n){const r=t+n>>>1,i=gt(Qe[r]);i<e?t=r+1:n=r}return t}function ct(e){Qe.length&&Qe.includes(e,We&&e.allowRecurse?Ye+1:Ye)||e===st||(null==e.id?Qe.push(e):Qe.splice(at(e.id),0,e),ut())}function ut(){We||He||(He=!0,it=rt.then(vt))}function lt(e){const t=Qe.indexOf(e);t>Ye&&Qe.splice(t,1)}function ht(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ut()}function dt(e){ht(e,Je,Xe,Ze)}function ft(e){ht(e,tt,et,nt)}function pt(e,t=null){if(Xe.length){for(st=t,Je=[...new Set(Xe)],Xe.length=0,Ze=0;Ze<Je.length;Ze++)Je[Ze]();Je=null,Ze=0,st=null,pt(e,t)}}function mt(e){if(et.length){const e=[...new Set(et)];if(et.length=0,tt)return void tt.push(...e);for(tt=e,tt.sort((e,t)=>gt(e)-gt(t)),nt=0;nt<tt.length;nt++)tt[nt]();tt=null,nt=0}}const gt=e=>null==e.id?1/0:e.id;function vt(e){He=!1,We=!0,pt(e),Qe.sort((e,t)=>gt(e)-gt(t));r["d"];try{for(Ye=0;Ye<Qe.length;Ye++){const e=Qe[Ye];e&&!1!==e.active&&Ke(e,null,14)}}finally{Ye=0,Qe.length=0,mt(e),We=!1,it=null,(Qe.length||Xe.length||et.length)&&vt(e)}}new Set;new Map;function yt(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=i[e]||r["b"];o?s=n.map(e=>e.trim()):t&&(s=n.map(r["O"]))}let c;let u=i[c=Object(r["N"])(t)]||i[c=Object(r["N"])(Object(r["e"])(t))];!u&&o&&(u=i[c=Object(r["N"])(Object(r["l"])(t))]),u&&ze(u,e,6,s);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,ze(l,e,6,s)}}function bt(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const i=e=>{const n=bt(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(e=>a[e]=null):Object(r["h"])(a,o),i.set(e,a),a):(i.set(e,null),null)}function wt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let _t=null,It=null;function Et(e){const t=_t;return _t=e,It=e&&e.type.__scopeId||null,t}function Tt(e){It=e}function Ot(){It=null}function St(e,t=_t,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Sr(-1);const i=Et(t),s=e(...n);return Et(i),r._d&&Sr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function kt(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,y;const b=Et(e);try{if(4&n.shapeFlag){const e=s||i;v=qr(h.call(e,e,d,o,p,f,m)),y=u}else{const e=t;0,v=qr(e.length>1?e(o,{attrs:u,slots:c,emit:l}):e(o,null)),y=t.props?u:At(u)}}catch(_){_r.length=0,Ge(_,e,1),v=Lr(br)}let w=v;if(y&&!1!==g){const e=Object.keys(y),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(r["v"])&&(y=Ct(y,a)),w=Vr(w,y))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,Et(b),v}const At=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},Ct=(e,t)=>{const n={};for(const i in e)Object(r["v"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function xt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Nt(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Nt(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!wt(u,n))return!0}}return!1}function Nt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!wt(n,s))return!0}return!1}function Dt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Rt=e=>e.__isSuspense;function jt(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):ft(e)}function Pt(e,t){if(ei){let n=ei.provides;const r=ei.parent&&ei.parent.provides;r===n&&(n=ei.provides=Object.create(r)),n[e]=t}else 0}function Lt(e,t,n=!1){const i=ei||_t;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(i.proxy):t}else 0}const Mt={};function Ft(e,t,n){return Vt(e,t,n)}function Vt(e,t,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=ei;let u,l,h=!1,d=!1;if(Re(e)?(u=()=>e.value,h=Oe(e)):Ee(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Ee),u=()=>e.map(e=>Re(e)?e.value:Ee(e)?qt(e):Object(r["q"])(e)?Ke(e,c,2):void 0)):u=Object(r["q"])(e)?t?()=>Ke(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),ze(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>qt(e())}let f=e=>{l=v.onStop=()=>{Ke(e,c,4)}};if(ai)return f=r["d"],t?n&&ze(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:Mt;const m=()=>{if(v.active)if(t){const e=v.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),ze(t,c,3,[e,p===Mt?void 0:p,f]),p=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===s?m:"post"===s?()=>sr(m,c&&c.suspense):()=>{!c||c.isMounted?dt(m):m()};const v=new b(u,g);return t?n?m():p=v.run():"post"===s?sr(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,v)}}function Ut(e,t,n){const i=this.proxy,s=Object(r["E"])(e)?e.includes(".")?Bt(i,e):()=>i[e]:e.bind(i,i);let o;Object(r["q"])(t)?o=t:(o=t.handler,n=t);const a=ei;ni(this);const c=Vt(s,o.bind(i),n);return a?ni(a):ri(),c}function Bt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function qt(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Re(e))qt(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)qt(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{qt(e,t)});else if(Object(r["y"])(e))for(const n in e)qt(e[n],t);return e}function Kt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{e.isMounted=!0}),gn(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],Gt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},setup(e,{slots:t}){const n=ti(),r=Kt();let i;return()=>{const s=t.default&&Jt(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==br){0,o=t,e=!0;break}}const a=ke(e),{mode:c}=a;if(r.isLeaving)return Qt(o);const u=Yt(o);if(!u)return Qt(o);const l=Ht(u,a,r,n);Xt(u,l);const h=n.subTree,d=h&&Yt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==br&&(!Nr(u,d)||f)){const e=Ht(d,a,r,n);if(Xt(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Qt(o);"in-out"===c&&u.type!==br&&(e.delayLeave=(e,t,n)=>{const i=Wt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},$t=Gt;function Wt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ht(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),w=Wt(n,e),_=(e,t)=>{e&&ze(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=w[b];s&&Nr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=c,r=u,s=l;if(!n.isMounted){if(!i)return;t=g||c,r=v||u,s=y||l}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return Ht(e,t,n,r)}};return I}function Qt(e){if(tn(e))return e=Vr(e),e.children=null,e}function Yt(e){return tn(e)?e.children?e.children[0]:void 0:e}function Xt(e,t){6&e.shapeFlag&&e.component?Xt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jt(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===vr?(128&o.patchFlag&&i++,r=r.concat(Jt(o.children,t,a))):(t||o.type!==br)&&r.push(null!=a?Vr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Zt(e){return Object(r["q"])(e)?{setup:e,name:e.name}:e}const en=e=>!!e.type.__asyncLoader;const tn=e=>e.type.__isKeepAlive;RegExp,RegExp;function nn(e,t){return Object(r["o"])(e)?e.some(e=>nn(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function rn(e,t){on(e,"a",t)}function sn(e,t){on(e,"da",t)}function on(e,t,n=ei){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ln(t,r,n),n){let e=n.parent;while(e&&e.parent)tn(e.parent.vnode)&&an(r,t,n,e),e=e.parent}}function an(e,t,n,i){const s=ln(t,e,i,!0);vn(()=>{Object(r["L"])(i[t],s)},n)}function cn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function un(e){return 128&e.shapeFlag?e.ssContent:e}function ln(e,t,n=ei,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;E(),ni(n);const i=ze(t,n,e,r);return ri(),T(),i});return r?i.unshift(s):i.push(s),s}}const hn=e=>(t,n=ei)=>(!ai||"sp"===e)&&ln(e,t,n),dn=hn("bm"),fn=hn("m"),pn=hn("bu"),mn=hn("u"),gn=hn("bum"),vn=hn("um"),yn=hn("sp"),bn=hn("rtg"),wn=hn("rtc");function _n(e,t=ei){ln("ec",e,t)}let In=!0;function En(e){const t=kn(e),n=e.proxy,i=e.ctx;In=!1,t.beforeCreate&&On(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:_,render:I,renderTracked:E,renderTriggered:T,errorCaptured:O,serverPrefetch:S,expose:k,inheritAttrs:A,components:C,directives:x,filters:N}=t,D=null;if(l&&Tn(l,i,D,e.appContext.config.unwrapInjectedRef),a)for(const j in a){const e=a[j];Object(r["q"])(e)&&(i[j]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(r["w"])(t)&&(e.data=be(t))}if(In=!0,o)for(const j in o){const e=o[j],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const s=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=vi({get:t,set:s});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Sn(c[r],i,n,r);if(u){const e=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{Pt(t,e[t])})}function R(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&On(h,e,"c"),R(dn,d),R(fn,f),R(pn,p),R(mn,m),R(rn,g),R(sn,v),R(_n,O),R(wn,E),R(bn,T),R(gn,b),R(vn,_),R(yn,S),Object(r["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});I&&e.render===r["d"]&&(e.render=I),null!=A&&(e.inheritAttrs=A),C&&(e.components=C),x&&(e.directives=x)}function Tn(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Dn(e));for(const s in e){const n=e[s];let o;o=Object(r["w"])(n)?"default"in n?Lt(n.from||s,n.default,!0):Lt(n.from||s):Lt(n),Re(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function On(e,t,n){ze(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Sn(e,t,n,i){const s=i.includes(".")?Bt(n,i):()=>n[i];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&Ft(s,n)}else if(Object(r["q"])(e))Ft(s,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>Sn(e,t,n,i));else{const i=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(i)&&Ft(s,i,e)}else 0}function kn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>An(c,e,o,!0)),An(c,t,o)):c=t,s.set(t,c),c}function An(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&An(e,s,n,!0),i&&i.forEach(t=>An(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Cn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Cn={data:xn,props:jn,emits:jn,methods:jn,computed:jn,beforeCreate:Rn,created:Rn,beforeMount:Rn,mounted:Rn,beforeUpdate:Rn,updated:Rn,beforeDestroy:Rn,beforeUnmount:Rn,destroyed:Rn,unmounted:Rn,activated:Rn,deactivated:Rn,errorCaptured:Rn,serverPrefetch:Rn,components:jn,directives:jn,watch:Pn,provide:xn,inject:Nn};function xn(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function Nn(e,t){return jn(Dn(e),Dn(t))}function Dn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Rn(e,t){return e?[...new Set([].concat(e,t))]:t}function jn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Pn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Rn(e[r],t[r]);return n}function Ln(e,t,n,i=!1){const s={},o={};Object(r["g"])(o,Dr,1),e.propsDefaults=Object.create(null),Fn(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:we(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Mn(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=ke(s),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;Fn(e,t,s,o)&&(l=!0);for(const o in c)t&&(Object(r["k"])(t,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(t,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=Vn(u,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(r["k"])(t,e)||(delete o[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(wt(e.emitsOptions,a))continue;const h=t[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const t=Object(r["e"])(a);s[t]=Vn(u,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&k(e,"set","$attrs")}function Fn(e,t,n,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["A"])(u))continue;const l=t[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:wt(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(o){const t=ke(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Vn(s,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function Vn(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(ni(s),i=r[n]=e.call(null,t),ri())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Un(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!Object(r["q"])(e)){const i=e=>{u=!0;const[n,i]=Un(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(r["e"])(o[h]);Bn(e)&&(a[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(Bn(t)){const n=o[e],i=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const e=zn(Boolean,i.type),n=zn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function Bn(e){return"$"!==e[0]}function qn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Kn(e,t){return qn(e)===qn(t)}function zn(e,t){return Object(r["o"])(t)?t.findIndex(t=>Kn(t,e)):Object(r["q"])(t)&&Kn(t,e)?0:-1}const Gn=e=>"_"===e[0]||"$stable"===e,$n=e=>Object(r["o"])(e)?e.map(qr):[qr(e)],Wn=(e,t,n)=>{const r=St((...e)=>$n(t(...e)),n);return r._c=!1,r},Hn=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Gn(s))continue;const n=e[s];if(Object(r["q"])(n))t[s]=Wn(s,n,i);else if(null!=n){0;const e=$n(n);t[s]=()=>e}}},Qn=(e,t)=>{const n=$n(t);e.slots.default=()=>n},Yn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ke(t),Object(r["g"])(t,"_",n)):Hn(t,e.slots={})}else e.slots={},t&&Qn(e,t);Object(r["g"])(e.slots,Dr,1)},Xn=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(r["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,Hn(t,s)),a=t}else t&&(Qn(e,t),a={default:1});if(o)for(const r in s)Gn(r)||r in a||delete s[r]};function Jn(e,t){const n=_t;if(null===n)return e;const i=pi(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=r["b"]]=t[o];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&qt(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Zn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(E(),ze(c,n,8,[e.el,a,e,t]),T())}}function er(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tr=0;function nr(e,t){return function(n,i=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==i||Object(r["w"])(i)||(i=null);const s=er(),o=new Set;let a=!1;const c=s.app={_uid:tr++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:bi,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(r["q"])(e.install)?(o.add(e),e.install(c,...t)):Object(r["q"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,u){if(!a){const l=Lr(n,i);return l.appContext=s,o&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,pi(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function rr(e,t,n,i,s=!1){if(Object(r["o"])(e))return void e.forEach((e,o)=>rr(e,t&&(Object(r["o"])(t)?t[o]:t),n,i,s));if(en(i)&&!s)return;const o=4&i.shapeFlag?pi(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):Re(l)&&(l.value=null)),Object(r["q"])(u))Ke(u,c,12,[a,h]);else{const t=Object(r["E"])(u),i=Re(u);if(t||i){const i=()=>{if(e.f){const n=t?h[u]:u.value;s?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):t?(h[u]=[o],Object(r["k"])(d,u)&&(d[u]=h[u])):(u.value=[o],e.k&&(h[e.k]=u.value))}else t?(h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):Re(u)&&(u.value=a,e.k&&(h[e.k]=a))};a?(i.id=-1,sr(i,n)):i()}else 0}}function ir(){}const sr=jt;function or(e){return ar(e)}function ar(e,t){ir();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Nr(e,t)&&(r=H(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case yr:y(e,t,n,r);break;case br:w(e,t,n,r);break;case wr:null==e&&_(t,n,r,o);break;case vr:R(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?j(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,Y)}null!=l&&i&&rr(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=f(e),i(e,n,r),e=s;i(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},k=(e,t,n,s,c,u,l,d)=>{let f,p;const{type:g,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==m&&-1===w)f=e.el=m(e.el);else{if(f=e.el=a(e.type,u,v&&v.is,v),8&y?h(f,e.children):16&y&&C(e.children,f,null,s,c,u&&"foreignObject"!==g,l,d),_&&Zn(e,null,s,"created"),v){for(const t in v)"value"===t||Object(r["A"])(t)||o(f,t,null,v[t],u,e.children,s,c,W);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&$r(p,s,e)}A(f,e,e.scopeId,l,s)}_&&Zn(e,null,s,"beforeMount");const I=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;I&&b.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||I||_)&&sr(()=>{p&&$r(p,s,e),I&&b.enter(f),_&&Zn(e,null,s,"mounted")},c)},A=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let s=0;s<r.length;s++)p(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Kr(e[u]):qr(e[u]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,i,s,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;n&&cr(n,!1),(g=m.onVnodeBeforeUpdate)&&$r(g,n,t,e),f&&Zn(t,e,n,"beforeUpdate"),n&&cr(n,!0);const v=s&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,u,n,i,v,a):c||V(e,t,u,null,n,i,v,a,!1),l>0){if(16&l)D(u,t,p,m,n,i,s);else if(2&l&&p.class!==m.class&&o(u,"class",null,m.class,s),4&l&&o(u,"style",p.style,m.style,s),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||o(u,a,c,l,s,e.children,n,i,W)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||D(u,t,p,m,n,i,s);((g=m.onVnodeUpdated)||f)&&sr(()=>{g&&$r(g,n,t,e),f&&Zn(t,e,n,"updated")},i)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===vr||!Nr(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["A"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(e,u,h,l,c,t.children,s,a,W)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in i||o(e,u,n[u],null,c,t.children,s,a,W);"value"in i&&o(e,"value",n.value,i.value)}},R=(e,t,n,r,s,o,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(i(h,n,r),i(d,n,r),C(t.children,n,d,s,o,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,s,o,a,u),(null!=t.key||s&&t===s.subTree)&&ur(e,t,!0)):V(e,t,n,d,s,o,a,u,l)},j=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):P(t,n,r,i,s,o,c):L(e,t,c)},P=(e,t,n,r,i,s,o)=>{const a=e.component=Zr(e,r,i);if(tn(e)&&(a.ctx.renderer=Y),ci(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=Lr(br);w(null,e,t,n)}}else M(a,e,t,n,i,s,o)},L=(e,t,n)=>{const r=t.component=e.component;if(xt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,lt(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,h=n;0,cr(e,!1),n?(n.el=l.el,F(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&$r(t,u,n,l),cr(e,!0);const f=kt(e);0;const p=e.subTree;e.subTree=f,v(p,f,d(p.el),H(p),e,s,o),n.el=f.el,null===h&&Dt(e,f.el),c&&sr(c,s),(t=n.props&&n.props.onVnodeUpdated)&&sr(()=>$r(t,u,n,l),s)}else{let a;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=en(t);if(cr(e,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&$r(a,d,t),cr(e,!0),c&&J){const n=()=>{e.subTree=kt(e),J(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=kt(e);0,v(null,r,n,i,e,s,o),t.el=r.el}if(h&&sr(h,s),!f&&(a=u&&u.onVnodeMounted)){const e=t;sr(()=>$r(a,d,e),s)}256&t.shapeFlag&&e.a&&sr(e.a,s),e.isMounted=!0,t=n=i=null}},u=e.effect=new b(c,()=>ct(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,cr(e,!0),l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Mn(e,t.props,r,n),Xn(e,t.children,n),E(),pt(void 0,e.update),T()},V=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(u,d,n,r,i,s,o,a,c);if(256&f)return void U(u,d,n,r,i,s,o,a,c)}8&p?(16&l&&W(u,i,s),d!==u&&h(n,d)):16&l?16&p?B(u,d,n,r,i,s,o,a,c):W(u,i,s,!0):(8&l&&h(n,""),16&p&&C(d,n,r,i,s,o,a,c))},U=(e,t,n,i,s,o,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Kr(t[f]):qr(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?W(e,s,o,!0,!1,d):C(t,n,i,s,o,a,c,u,d)},B=(e,t,n,i,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Kr(t[l]):qr(t[l]);if(!Nr(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Kr(t[f]):qr(t[f]);if(!Nr(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)v(null,t[l]=u?Kr(t[l]):qr(t[l]),n,r,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?Kr(t[l]):qr(t[l]);null!=e.key&&g.set(e.key,l)}let y,b=0;const w=f-m+1;let _=!1,I=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Nr(r,t[y])){i=y;break}void 0===i?K(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:_=!0,v(r,t[i],n,null,s,o,a,c,u),b++)}const T=_?lr(E):r["a"];for(y=T.length-1,l=w-1;l>=0;l--){const e=m+l,r=t[e],d=e+1<h?t[e+1].el:i;0===E[l]?v(null,r,n,d,s,o,a,c,u):_&&(y<0||l!==T[y]?q(r,n,d,2):y--)}}},q=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,Y);if(a===vr){i(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===wr)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),sr(()=>c.enter(o),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),u=()=>{e(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&rr(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!en(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&$r(m,t,e),6&l)$(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Zn(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,Y,r):u&&(s!==vr||h>0&&64&h)?W(u,t,n,!1,!0):(s===vr&&384&h||!i&&16&l)&&W(c,t,n),r&&z(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&sr(()=>{m&&$r(m,t,e),f&&Zn(e,null,t,"unmounted")},n)},z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===vr)return void G(n,r);if(t===wr)return void O(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},G=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},$=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&sr(c,t),sr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},W=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},H=e=>6&e.shapeFlag?H(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),mt(),t._vnode=e},Y={p:v,um:K,m:q,r:z,mt:P,mc:C,pc:V,pbc:N,n:H,o:e};let X,J;return t&&([X,J]=t(Y)),{render:Q,hydrate:X,createApp:nr(Q,X)}}function cr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ur(e,t,n=!1){const i=e.children,s=t.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=Kr(s[r]),t.el=e.el),n||ur(e,t))}}function lr(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const hr=e=>e.__isTeleport;const dr="components";function fr(e,t){return mr(dr,e,!0,t)||e}const pr=Symbol();function mr(e,t,n=!0,i=!1){const s=_t||ei;if(s){const n=s.type;if(e===dr){const e=mi(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const o=gr(s[e]||n[e],t)||gr(s.appContext[e],t);return!o&&i?n:o}}function gr(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const vr=Symbol(void 0),yr=Symbol(void 0),br=Symbol(void 0),wr=Symbol(void 0),_r=[];let Ir=null;function Er(e=!1){_r.push(Ir=e?null:[])}function Tr(){_r.pop(),Ir=_r[_r.length-1]||null}let Or=1;function Sr(e){Or+=e}function kr(e){return e.dynamicChildren=Or>0?Ir||r["a"]:null,Tr(),Or>0&&Ir&&Ir.push(e),e}function Ar(e,t,n,r,i,s){return kr(Pr(e,t,n,r,i,s,!0))}function Cr(e,t,n,r,i){return kr(Lr(e,t,n,r,i,!0))}function xr(e){return!!e&&!0===e.__v_isVNode}function Nr(e,t){return e.type===t.type&&e.key===t.key}const Dr="__vInternal",Rr=({key:e})=>null!=e?e:null,jr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||Re(e)||Object(r["q"])(e)?{i:_t,r:e,k:t,f:!!n}:e:null;function Pr(e,t=null,n=null,i=0,s=null,o=(e===vr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rr(t),ref:t&&jr(t),scopeId:It,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(zr(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Or>0&&!a&&Ir&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ir.push(u),u}const Lr=Mr;function Mr(e,t=null,n=null,i=0,s=null,o=!1){if(e&&e!==pr||(e=br),xr(e)){const r=Vr(e,t,!0);return n&&zr(r,n),r}if(gi(e)&&(e=e.__vccOpts),t){t=Fr(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(Se(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["K"])(n))}const a=Object(r["E"])(e)?1:Rt(e)?128:hr(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return Pr(e,t,n,i,s,a,o,!0)}function Fr(e){return e?Se(e)||Dr in e?Object(r["h"])({},e):e:null}function Vr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?Gr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Rr(c),ref:t&&t.ref?n&&s?Object(r["o"])(s)?s.concat(jr(t)):[s,jr(t)]:jr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==vr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vr(e.ssContent),ssFallback:e.ssFallback&&Vr(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Ur(e=" ",t=0){return Lr(yr,null,e,t)}function Br(e="",t=!1){return t?(Er(),Cr(br,null,e)):Lr(br,null,e)}function qr(e){return null==e||"boolean"===typeof e?Lr(br):Object(r["o"])(e)?Lr(vr,null,e.slice()):"object"===typeof e?Kr(e):Lr(yr,null,String(e))}function Kr(e){return null===e.el||e.memo?e:Vr(e)}function zr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),zr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Dr in t?3===r&&_t&&(1===_t.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=_t}}else Object(r["q"])(t)?(t={default:t,_ctx:_t},n=32):(t=String(t),64&i?(n=16,t=[Ur(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["J"])([t.class,i.class]));else if("style"===e)t.style=Object(r["K"])([t.style,i.style]);else if(Object(r["x"])(e)){const n=t[e],s=i[e];!s||n===s||Object(r["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function $r(e,t,n,r=null){ze(e,t,7,[n,r])}function Wr(e,t,n,i){let s;const o=n&&n[i];if(Object(r["o"])(e)||Object(r["E"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const Hr=e=>e?ii(e)?pi(e)||e.proxy:Hr(e.parent):null,Qr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hr(e.parent),$root:e=>Hr(e.root),$emit:e=>e.emit,$options:e=>kn(e),$forceUpdate:e=>()=>ct(e.update),$nextTick:e=>ot.bind(e.proxy),$watch:e=>Ut.bind(e)}),Yr={get({_:e},t){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(s!==r["b"]&&Object(r["k"])(s,t))return a[t]=2,s[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,o[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];In&&(a[t]=0)}}const h=Qr[t];let d,f;return h?("$attrs"===t&&O(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return s!==r["b"]&&Object(r["k"])(s,t)?(s[t]=n,!0):i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(Qr,a)||Object(r["k"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Xr=er();let Jr=0;function Zr(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||Xr,a={uid:Jr++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Un(i,o),emitsOptions:bt(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=yt.bind(null,a),e.ce&&e.ce(a),a}let ei=null;const ti=()=>ei||_t,ni=e=>{ei=e,e.scope.on()},ri=()=>{ei&&ei.scope.off(),ei=null};function ii(e){return 4&e.vnode.shapeFlag}let si,oi,ai=!1;function ci(e,t=!1){ai=t;const{props:n,children:r}=e.vnode,i=ii(e);Ln(e,n,i,t),Yn(e,r);const s=i?ui(e,t):void 0;return ai=!1,s}function ui(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ae(new Proxy(e.ctx,Yr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?fi(e):null;ni(e),E();const s=Ke(i,e,0,[e.props,n]);if(T(),ri(),Object(r["z"])(s)){if(s.then(ri,ri),t)return s.then(n=>{li(e,n,t)}).catch(t=>{Ge(t,e,0)});e.asyncDep=s}else li(e,s,t)}else hi(e,t)}function li(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Ue(t)),hi(e,n)}function hi(e,t,n){const i=e.type;if(!e.render){if(!t&&si&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=si(t,c)}}e.render=i.render||r["d"],oi&&oi(e)}ni(e),E(),En(e),T(),ri()}function di(e){return new Proxy(e.attrs,{get(t,n){return O(e,"get","$attrs"),t[n]}})}function fi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=di(e))},slots:e.slots,emit:e.emit,expose:t}}function pi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ue(Ae(e.exposed)),{get(t,n){return n in t?t[n]:n in Qr?Qr[n](e):void 0}}))}function mi(e){return Object(r["q"])(e)&&e.displayName||e.name}function gi(e){return Object(r["q"])(e)&&"__vccOpts"in e}const vi=(e,t)=>qe(e,t,ai);function yi(e,t,n){const i=arguments.length;return 2===i?Object(r["w"])(t)&&!Object(r["o"])(t)?xr(t)?Lr(e,null,[t]):Lr(e,t):Lr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&xr(n)&&(n=[n]),Lr(e,t,n))}Symbol("");const bi="3.2.33",wi="http://www.w3.org/2000/svg",_i="undefined"!==typeof document?document:null,Ii=_i&&_i.createElement("template"),Ei={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?_i.createElementNS(wi,e):_i.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{Ii.innerHTML=r?`<svg>${e}</svg>`:e;const i=Ii.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ti(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Oi(e,t,n){const i=e.style,s=Object(r["E"])(n);if(n&&!s){for(const e in n)ki(i,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&ki(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Si=/\s*!important$/;function ki(e,t,n){if(Object(r["o"])(n))n.forEach(n=>ki(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=xi(e,t);Si.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Si,""),"important"):e[i]=n}}const Ai=["Webkit","Moz","ms"],Ci={};function xi(e,t){const n=Ci[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Ci[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ai.length;r++){const n=Ai[r]+i;if(n in e)return Ci[t]=n}return t}const Ni="http://www.w3.org/1999/xlink";function Di(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ni,t.slice(6,t.length)):e.setAttributeNS(Ni,t,n);else{const i=Object(r["D"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ri(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=Object(r["m"])(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[ji,Pi]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Li=0;const Mi=Promise.resolve(),Fi=()=>{Li=0},Vi=()=>Li||(Mi.then(Fi),Li=ji());function Ui(e,t,n,r){e.addEventListener(t,n,r)}function Bi(e,t,n,r){e.removeEventListener(t,n,r)}function qi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=zi(t);if(r){const o=s[t]=Gi(r,i);Ui(e,n,o,a)}else o&&(Bi(e,n,o,a),s[t]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function zi(e){let t;if(Ki.test(e)){let n;t={};while(n=e.match(Ki))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Gi(e,t){const n=e=>{const r=e.timeStamp||ji();(Pi||r>=n.attached-1)&&ze($i(e,n.value),t,5,[e])};return n.value=e,n.attached=Vi(),n}function $i(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Wi=/^on[a-z]/,Hi=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?Ti(e,i,s):"style"===t?Oi(e,n,i):Object(r["x"])(t)?Object(r["v"])(t)||qi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Qi(e,t,i,s))?Ri(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Di(e,t,i,s))};function Qi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Wi.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Wi.test(t)||!Object(r["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Yi="transition",Xi="animation",Ji=(e,{slots:t})=>yi($t,ns(e),t);Ji.displayName="Transition";const Zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},es=(Ji.props=Object(r["h"])({},$t.props,Zi),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),ts=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function ns(e){const t={};for(const r in e)r in Zi||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=rs(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:T=b,onAppearCancelled:O=w}=t,S=(e,t,n)=>{os(e,t?h:c),os(e,t?l:a),n&&n()},k=(e,t)=>{os(e,p),os(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:b,s=()=>S(t,e,n);es(r,[t,s]),as(()=>{os(t,e?u:o),ss(t,e?h:c),ts(r)||us(t,i,g,s)})};return Object(r["h"])(t,{onBeforeEnter(e){es(y,[e]),ss(e,o),ss(e,a)},onBeforeAppear(e){es(E,[e]),ss(e,u),ss(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>k(e,t);ss(e,d),fs(),ss(e,f),as(()=>{os(e,d),ss(e,p),ts(_)||us(e,i,v,n)}),es(_,[e,n])},onEnterCancelled(e){S(e,!1),es(w,[e])},onAppearCancelled(e){S(e,!0),es(O,[e])},onLeaveCancelled(e){k(e),es(I,[e])}})}function rs(e){if(null==e)return null;if(Object(r["w"])(e))return[is(e.enter),is(e.leave)];{const t=is(e);return[t,t]}}function is(e){const t=Object(r["O"])(e);return t}function ss(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function os(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function as(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let cs=0;function us(e,t,n,r){const i=e._endId=++cs,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ls(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function ls(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Yi+"Delay"),s=r(Yi+"Duration"),o=hs(i,s),a=r(Xi+"Delay"),c=r(Xi+"Duration"),u=hs(a,c);let l=null,h=0,d=0;t===Yi?o>0&&(l=Yi,h=o,d=s.length):t===Xi?u>0&&(l=Xi,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Yi:Xi:null,d=l?l===Yi?s.length:c.length:0);const f=l===Yi&&/\b(transform|all)(,|$)/.test(n[Yi+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function hs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>ds(t)+ds(e[n])))}function ds(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function fs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ps=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function ms(e){e.target.composing=!0}function gs(e){const t=e.target;t.composing&&(t.composing=!1,vs(t,"input"))}function vs(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const ys={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=ps(s);const o=i||s.props&&"number"===s.props.type;Ui(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=Object(r["O"])(i)),e._assign(i)}),n&&Ui(e,"change",()=>{e.value=e.value.trim()}),t||(Ui(e,"compositionstart",ms),Ui(e,"compositionend",gs),Ui(e,"change",gs))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=ps(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(r["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const bs={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=Object(r["C"])(t);Ui(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["O"])(_s(e)):_s(e));e._assign(e.multiple?s?new Set(t):t:t[0])}),e._assign=ps(i)},mounted(e,{value:t}){ws(e,t)},beforeUpdate(e,t,n){e._assign=ps(n)},updated(e,{value:t}){ws(e,t)}};function ws(e,t){const n=e.multiple;if(!n||Object(r["o"])(t)||Object(r["C"])(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=_s(s);if(n)Object(r["o"])(t)?s.selected=Object(r["H"])(t,o)>-1:s.selected=t.has(o);else if(Object(r["G"])(_s(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function _s(e){return"_value"in e?e._value:e.value}const Is=["ctrl","shift","alt","meta"],Es={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Is.some(n=>e[n+"Key"]&&!t.includes(n))},Ts=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Es[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Os=Object(r["h"])({patchProp:Hi},Ei);let Ss;function ks(){return Ss||(Ss=or(Os))}const As=(...e)=>{const t=ks().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Cs(e);if(!i)return;const s=t._component;Object(r["q"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Cs(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),s=r.Object;e.exports=function(e){return s(i(e))}},"7b17":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"top",(function(){return i})),n.d(r,"bottom",(function(){return s})),n.d(r,"right",(function(){return o})),n.d(r,"left",(function(){return a})),n.d(r,"auto",(function(){return c})),n.d(r,"basePlacements",(function(){return u})),n.d(r,"start",(function(){return l})),n.d(r,"end",(function(){return h})),n.d(r,"clippingParents",(function(){return d})),n.d(r,"viewport",(function(){return f})),n.d(r,"popper",(function(){return p})),n.d(r,"reference",(function(){return m})),n.d(r,"variationPlacements",(function(){return g})),n.d(r,"placements",(function(){return v})),n.d(r,"beforeRead",(function(){return y})),n.d(r,"read",(function(){return b})),n.d(r,"afterRead",(function(){return w})),n.d(r,"beforeMain",(function(){return _})),n.d(r,"main",(function(){return I})),n.d(r,"afterMain",(function(){return E})),n.d(r,"beforeWrite",(function(){return T})),n.d(r,"write",(function(){return O})),n.d(r,"afterWrite",(function(){return S})),n.d(r,"modifierPhases",(function(){return k})),n.d(r,"applyStyles",(function(){return P})),n.d(r,"arrow",(function(){return se})),n.d(r,"computeStyles",(function(){return he})),n.d(r,"eventListeners",(function(){return pe})),n.d(r,"flip",(function(){return Le})),n.d(r,"hide",(function(){return Ue})),n.d(r,"offset",(function(){return Ke})),n.d(r,"popperOffsets",(function(){return Ge})),n.d(r,"preventOverflow",(function(){return He})),n.d(r,"popperGenerator",(function(){return st})),n.d(r,"detectOverflow",(function(){return De})),n.d(r,"createPopperBase",(function(){return ot})),n.d(r,"createPopper",(function(){return ct})),n.d(r,"createPopperLite",(function(){return lt}));var i="top",s="bottom",o="right",a="left",c="auto",u=[i,s,o,a],l="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=u.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+h])}),[]),v=[].concat(u,[c]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+h])}),[]),y="beforeRead",b="read",w="afterRead",_="beforeMain",I="main",E="afterMain",T="beforeWrite",O="write",S="afterWrite",k=[y,b,w,_,I,E,T,O,S];function A(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=C(e).Element;return e instanceof t||e instanceof Element}function N(e){var t=C(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function D(e){if("undefined"===typeof ShadowRoot)return!1;var t=C(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function R(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];N(i)&&A(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function j(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});N(r)&&A(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var P={name:"applyStyles",enabled:!0,phase:"write",fn:R,effect:j,requires:["computeStyles"]};function L(e){return e.split("-")[0]}var M=Math.max,F=Math.min,V=Math.round;function U(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;if(N(e)&&t){var s=e.offsetHeight,o=e.offsetWidth;o>0&&(r=V(n.width)/o||1),s>0&&(i=V(n.height)/s||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function B(e){var t=U(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&D(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function K(e){return C(e).getComputedStyle(e)}function z(e){return["table","td","th"].indexOf(A(e))>=0}function G(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function $(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||G(e)}function W(e){return N(e)&&"fixed"!==K(e).position?e.offsetParent:null}function H(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&N(e)){var r=K(e);if("fixed"===r.position)return null}var i=$(e);D(i)&&(i=i.host);while(N(i)&&["html","body"].indexOf(A(i))<0){var s=K(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function Q(e){var t=C(e),n=W(e);while(n&&z(n)&&"static"===K(n).position)n=W(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===K(n).position)?t:n||H(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return M(e,F(t,n))}function J(e,t,n){var r=X(e,t,n);return r>n?n:r}function Z(){return{top:0,right:0,bottom:0,left:0}}function ee(e){return Object.assign({},Z(),e)}function te(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ne=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ee("number"!==typeof e?e:te(e,u))};function re(e){var t,n=e.state,r=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=L(n.placement),d=Y(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var m=ne(c.padding,n),g=B(u),v="y"===d?i:a,y="y"===d?s:o,b=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],w=l[d]-n.rects.reference[d],_=Q(u),I=_?"y"===d?_.clientHeight||0:_.clientWidth||0:0,E=b/2-w/2,T=m[v],O=I-g[p]-m[y],S=I/2-g[p]/2+E,k=X(T,S,O),A=d;n.modifiersData[r]=(t={},t[A]=k,t.centerOffset=k-S,t)}}function ie(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&q(t.elements.popper,i)&&(t.elements.arrow=i)}var se={name:"arrow",enabled:!0,phase:"main",fn:re,effect:ie,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var ae={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ce(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:V(t*i)/i||0,y:V(n*i)/i||0}}function ue(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=e.isFixed,v=l.x,y=void 0===v?0:v,b=l.y,w=void 0===b?0:b,_="function"===typeof m?m({x:y,y:w}):{x:y,y:w};y=_.x,w=_.y;var I=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),T=a,O=i,S=window;if(p){var k=Q(n),A="clientHeight",x="clientWidth";if(k===C(n)&&(k=G(n),"static"!==K(k).position&&"absolute"===d&&(A="scrollHeight",x="scrollWidth")),k=k,c===i||(c===a||c===o)&&u===h){O=s;var N=g&&k===S&&S.visualViewport?S.visualViewport.height:k[A];w-=N-r.height,w*=f?1:-1}if(c===a||(c===i||c===s)&&u===h){T=o;var D=g&&k===S&&S.visualViewport?S.visualViewport.width:k[x];y-=D-r.width,y*=f?1:-1}}var R,j=Object.assign({position:d},p&&ae),P=!0===m?ce({x:y,y:w}):{x:y,y:w};return y=P.x,w=P.y,f?Object.assign({},j,(R={},R[O]=E?"0":"",R[T]=I?"0":"",R.transform=(S.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",R)):Object.assign({},j,(t={},t[O]=E?w+"px":"",t[T]=I?y+"px":"",t.transform="",t))}function le(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:L(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ue(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ue(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var he={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:le,data:{}},de={passive:!0};function fe(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=C(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,de)})),a&&c.addEventListener("resize",n.update,de),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,de)})),a&&c.removeEventListener("resize",n.update,de)}}var pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fe,data:{}},me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return me[e]}))}var ve={start:"end",end:"start"};function ye(e){return e.replace(/start|end/g,(function(e){return ve[e]}))}function be(e){var t=C(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function we(e){return U(G(e)).left+be(e).scrollLeft}function _e(e){var t=C(e),n=G(e),r=t.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+we(e),y:a}}function Ie(e){var t,n=G(e),r=be(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+we(e),c=-r.scrollTop;return"rtl"===K(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ee(e){var t=K(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Te(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:N(e)&&Ee(e)?e:Te($(e))}function Oe(e,t){var n;void 0===t&&(t=[]);var r=Te(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=C(r),o=i?[s].concat(s.visualViewport||[],Ee(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Oe($(o)))}function Se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ke(e){var t=U(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ae(e,t){return t===f?Se(_e(e)):x(t)?ke(t):Se(Ie(G(e)))}function Ce(e){var t=Oe($(e)),n=["absolute","fixed"].indexOf(K(e).position)>=0,r=n&&N(e)?Q(e):e;return x(r)?t.filter((function(e){return x(e)&&q(e,r)&&"body"!==A(e)})):[]}function xe(e,t,n){var r="clippingParents"===t?Ce(e):[].concat(t),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(t,n){var r=Ae(e,n);return t.top=M(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=M(r.left,t.left),t}),Ae(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ne(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?L(c):null,d=c?oe(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:t={x:f,y:n.y-r.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var m=u?Y(u):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case l:t[m]=t[m]-(n[g]/2-r[g]/2);break;case h:t[m]=t[m]+(n[g]/2-r[g]/2);break;default:}}return t}function De(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.boundary,l=void 0===c?d:c,h=n.rootBoundary,g=void 0===h?f:h,v=n.elementContext,y=void 0===v?p:v,b=n.altBoundary,w=void 0!==b&&b,_=n.padding,I=void 0===_?0:_,E=ee("number"!==typeof I?I:te(I,u)),T=y===p?m:p,O=e.rects.popper,S=e.elements[w?T:y],k=xe(x(S)?S:S.contextElement||G(e.elements.popper),l,g),A=U(e.elements.reference),C=Ne({reference:A,element:O,strategy:"absolute",placement:a}),N=Se(Object.assign({},O,C)),D=y===p?N:A,R={top:k.top-D.top+E.top,bottom:D.bottom-k.bottom+E.bottom,left:k.left-D.left+E.left,right:D.right-k.right+E.right},j=e.modifiersData.offset;if(y===p&&j){var P=j[a];Object.keys(R).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[i,s].indexOf(e)>=0?"y":"x";R[e]+=P[n]*t}))}return R}function Re(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,h=oe(r),d=h?a?g:g.filter((function(e){return oe(e)===h})):u,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=De(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[L(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function je(e){if(L(e)===c)return[];var t=ge(e);return[ye(e),t,ye(t)]}function Pe(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,v=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,_=n.allowedAutoPlacements,I=t.options.placement,E=L(I),T=E===I,O=p||(T||!w?[ge(I)]:je(I)),S=[I].concat(O).reduce((function(e,n){return e.concat(L(n)===c?Re(t,{placement:n,boundary:g,rootBoundary:v,padding:m,flipVariations:w,allowedAutoPlacements:_}):n)}),[]),k=t.rects.reference,A=t.rects.popper,C=new Map,x=!0,N=S[0],D=0;D<S.length;D++){var R=S[D],j=L(R),P=oe(R)===l,M=[i,s].indexOf(j)>=0,F=M?"width":"height",V=De(t,{placement:R,boundary:g,rootBoundary:v,altBoundary:y,padding:m}),U=M?P?o:a:P?s:i;k[F]>A[F]&&(U=ge(U));var B=ge(U),q=[];if(h&&q.push(V[j]<=0),f&&q.push(V[U]<=0,V[B]<=0),q.every((function(e){return e}))){N=R,x=!1;break}C.set(R,q)}if(x)for(var K=w?3:1,z=function(e){var t=S.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},G=K;G>0;G--){var $=z(G);if("break"===$)break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}}var Le={name:"flip",enabled:!0,phase:"main",fn:Pe,requiresIfExists:["offset"],data:{_skip:!1}};function Me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Fe(e){return[i,o,s,a].some((function(t){return e[t]>=0}))}function Ve(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=De(t,{elementContext:"reference"}),a=De(t,{altBoundary:!0}),c=Me(o,r),u=Me(a,i,s),l=Fe(c),h=Fe(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Ue={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ve};function Be(e,t,n){var r=L(e),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*s,[a,o].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function qe(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=v.reduce((function(e,n){return e[n]=Be(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}var Ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qe};function ze(e){var t=e.state,n=e.name;t.modifiersData[n]=Ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ge={name:"popperOffsets",enabled:!0,phase:"read",fn:ze,data:{}};function $e(e){return"x"===e?"y":"x"}function We(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,_=De(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),I=L(t.placement),E=oe(t.placement),T=!E,O=Y(I),S=$e(O),k=t.modifiersData.popperOffsets,A=t.rects.reference,C=t.rects.popper,x="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,N="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(k){if(u){var j,P="y"===O?i:a,V="y"===O?s:o,U="y"===O?"height":"width",q=k[O],K=q+_[P],z=q-_[V],G=y?-C[U]/2:0,$=E===l?A[U]:C[U],W=E===l?-C[U]:-A[U],H=t.elements.arrow,ee=y&&H?B(H):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Z(),ne=te[P],re=te[V],ie=X(0,A[U],ee[U]),se=T?A[U]/2-G-ie-ne-N.mainAxis:$-ie-ne-N.mainAxis,ae=T?-A[U]/2+G+ie+re+N.mainAxis:W+ie+re+N.mainAxis,ce=t.elements.arrow&&Q(t.elements.arrow),ue=ce?"y"===O?ce.clientTop||0:ce.clientLeft||0:0,le=null!=(j=null==D?void 0:D[O])?j:0,he=q+se-le-ue,de=q+ae-le,fe=X(y?F(K,he):K,q,y?M(z,de):z);k[O]=fe,R[O]=fe-q}if(d){var pe,me="x"===O?i:a,ge="x"===O?s:o,ve=k[S],ye="y"===S?"height":"width",be=ve+_[me],we=ve-_[ge],_e=-1!==[i,a].indexOf(I),Ie=null!=(pe=null==D?void 0:D[S])?pe:0,Ee=_e?be:ve-A[ye]-C[ye]-Ie+N.altAxis,Te=_e?ve+A[ye]+C[ye]-Ie-N.altAxis:we,Oe=y&&_e?J(Ee,ve,Te):X(y?Ee:be,ve,y?Te:we);k[S]=Oe,R[S]=Oe-ve}t.modifiersData[r]=R}}var He={name:"preventOverflow",enabled:!0,phase:"main",fn:We,requiresIfExists:["offset"]};function Qe(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ye(e){return e!==C(e)&&N(e)?Qe(e):be(e)}function Xe(e){var t=e.getBoundingClientRect(),n=V(t.width)/e.offsetWidth||1,r=V(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function Je(e,t,n){void 0===n&&(n=!1);var r=N(t),i=N(t)&&Xe(t),s=G(t),o=U(e,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==A(t)||Ee(s))&&(a=Ye(t)),N(t)?(c=U(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=we(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Ze(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function et(e){var t=Ze(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function tt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function nt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var rt={placement:"bottom",modifiers:[],strategy:"absolute"};function it(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function st(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?rt:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},rt,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:x(e)?Oe(e):e.contextElement?Oe(e.contextElement):[],popper:Oe(t)};var a=et(nt([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(it(t,n)){i.rects={reference:Je(t,Q(n),"fixed"===i.options.strategy),popper:B(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:tt((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!it(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ot=st(),at=[pe,Ge,he,P,Ke,Le,He,se,Ue],ct=st({defaultModifiers:at}),ut=[pe,Ge,he,P],lt=st({defaultModifiers:ut});
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ht=1e6,dt=1e3,ft="transitionend",pt=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),mt=e=>{do{e+=Math.floor(Math.random()*ht)}while(document.getElementById(e));return e},gt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},vt=e=>{const t=gt(e);return t&&document.querySelector(t)?t:null},yt=e=>{const t=gt(e);return t?document.querySelector(t):null},bt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*dt):0},wt=e=>{e.dispatchEvent(new Event(ft))},_t=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),It=e=>_t(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,Et=(e,t,n)=>{Object.keys(n).forEach(r=>{const i=n[r],s=t[r],o=s&&_t(s)?"element":pt(s);if(!new RegExp(i).test(o))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)})},Tt=e=>!(!_t(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),Ot=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),St=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?St(e.parentNode):null},kt=()=>{},At=e=>{e.offsetHeight},Ct=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},xt=[],Nt=e=>{"loading"===document.readyState?(xt.length||document.addEventListener("DOMContentLoaded",()=>{xt.forEach(e=>e())}),xt.push(e)):e()},Dt=()=>"rtl"===document.documentElement.dir,Rt=e=>{Nt(()=>{const t=Ct();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},jt=e=>{"function"===typeof e&&e()},Pt=(e,t,n=!0)=>{if(!n)return void jt(e);const r=5,i=bt(t)+r;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(ft,o),jt(e))};t.addEventListener(ft,o),setTimeout(()=>{s||wt(t)},i)},Lt=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const s=e.length;return i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))]},Mt=/[^.]*(?=\..*)\.|.*/,Ft=/\..*/,Vt=/::\d+$/,Ut={};let Bt=1;const qt={mouseenter:"mouseover",mouseleave:"mouseout"},Kt=/^(mouseenter|mouseleave)/i,zt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Gt(e,t){return t&&`${t}::${Bt++}`||e.uidEvent||Bt++}function $t(e){const t=Gt(e);return e.uidEvent=t,Ut[t]=Ut[t]||{},Ut[t]}function Wt(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&tn.off(e,r.type,t),t.apply(e,[r])}}function Ht(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&tn.off(e,i.type,t,n),n.apply(o,[i]);return null}}function Qt(e,t,n=null){const r=Object.keys(e);for(let i=0,s=r.length;i<s;i++){const s=e[r[i]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function Yt(e,t,n){const r="string"===typeof t,i=r?n:t;let s=en(e);const o=zt.has(s);return o||(s=e),[r,i,s]}function Xt(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),Kt.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[s,o,a]=Yt(t,n,r),c=$t(e),u=c[a]||(c[a]={}),l=Qt(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=Gt(o,t.replace(Mt,"")),d=s?Ht(e,n,r):Wt(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,s)}function Jt(e,t,n,r,i){const s=Qt(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function Zt(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach(s=>{if(s.includes(r)){const r=i[s];Jt(e,t,n,r.originalHandler,r.delegationSelector)}})}function en(e){return e=e.replace(Ft,""),qt[e]||e}const tn={on(e,t,n,r){Xt(e,t,n,r,!1)},one(e,t,n,r){Xt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=Yt(t,n,r),a=o!==t,c=$t(e),u=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void Jt(e,c,o,s,i?n:null)}u&&Object.keys(c).forEach(n=>{Zt(e,c,n,t.slice(1))});const l=c[o]||{};Object.keys(l).forEach(n=>{const r=n.replace(Vt,"");if(!a||t.includes(r)){const t=l[n];Jt(e,c,o,t.originalHandler,t.delegationSelector)}})},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=Ct(),i=en(t),s=t!==i,o=zt.has(i);let a,c=!0,u=!0,l=!1,h=null;return s&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach(e=>{Object.defineProperty(h,e,{get(){return n[e]}})}),l&&h.preventDefault(),u&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},nn=new Map,rn={set(e,t,n){nn.has(e)||nn.set(e,new Map);const r=nn.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return nn.has(e)&&nn.get(e).get(t)||null},remove(e,t){if(!nn.has(e))return;const n=nn.get(e);n.delete(t),0===n.size&&nn.delete(e)}},sn="5.1.3";class on{constructor(e){e=It(e),e&&(this._element=e,rn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){rn.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){Pt(e,t,n)}static getInstance(e){return rn.get(It(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return sn}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const an=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,r=e.NAME;tn.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ot(this))return;const i=yt(this)||this.closest("."+r),s=e.getOrCreateInstance(i);s[t]()}))},cn="alert",un="bs.alert",ln="."+un,hn="close"+ln,dn="closed"+ln,fn="fade",pn="show";class mn extends on{static get NAME(){return cn}close(){const e=tn.trigger(this._element,hn);if(e.defaultPrevented)return;this._element.classList.remove(pn);const t=this._element.classList.contains(fn);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,dn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=mn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}an(mn,"close"),Rt(mn);const gn="button",vn="bs.button",yn="."+vn,bn=".data-api",wn="active",_n='[data-bs-toggle="button"]',In=`click${yn}${bn}`;class En extends on{static get NAME(){return gn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(wn))}static jQueryInterface(e){return this.each((function(){const t=En.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function Tn(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function On(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}tn.on(document,In,_n,e=>{e.preventDefault();const t=e.target.closest(_n),n=En.getOrCreateInstance(t);n.toggle()}),Rt(En);const Sn={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+On(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+On(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=Tn(e.dataset[n])}),t},getDataAttribute(e,t){return Tn(e.getAttribute("data-bs-"+On(t)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},kn=3,An={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==kn)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(t,e).filter(e=>!Ot(e)&&Tt(e))}},Cn="carousel",xn="bs.carousel",Nn="."+xn,Dn=".data-api",Rn="ArrowLeft",jn="ArrowRight",Pn=500,Ln=40,Mn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Fn={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Vn="next",Un="prev",Bn="left",qn="right",Kn={[Rn]:qn,[jn]:Bn},zn="slide"+Nn,Gn="slid"+Nn,$n="keydown"+Nn,Wn="mouseenter"+Nn,Hn="mouseleave"+Nn,Qn="touchstart"+Nn,Yn="touchmove"+Nn,Xn="touchend"+Nn,Jn="pointerdown"+Nn,Zn="pointerup"+Nn,er="dragstart"+Nn,tr=`load${Nn}${Dn}`,nr=`click${Nn}${Dn}`,rr="carousel",ir="active",sr="slide",or="carousel-item-end",ar="carousel-item-start",cr="carousel-item-next",ur="carousel-item-prev",lr="pointer-event",hr=".active",dr=".active.carousel-item",fr=".carousel-item",pr=".carousel-item img",mr=".carousel-item-next, .carousel-item-prev",gr=".carousel-indicators",vr="[data-bs-target]",yr="[data-bs-slide], [data-bs-slide-to]",br='[data-bs-ride="carousel"]',wr="touch",_r="pen";class Ir extends on{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=An.findOne(gr,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Mn}static get NAME(){return Cn}next(){this._slide(Vn)}nextWhenVisible(){!document.hidden&&Tt(this._element)&&this.next()}prev(){this._slide(Un)}pause(e){e||(this._isPaused=!0),An.findOne(mr,this._element)&&(wt(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=An.findOne(dr,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,Gn,()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const n=e>t?Vn:Un;this._slide(n,this._items[e])}_getConfig(e){return e={...Mn,...Sn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(Cn,e,Fn),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Ln)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?qn:Bn)}_addEventListeners(){this._config.keyboard&&tn.on(this._element,$n,e=>this._keydown(e)),"hover"===this._config.pause&&(tn.on(this._element,Wn,e=>this.pause(e)),tn.on(this._element,Hn,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===_r||e.pointerType===wr),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),Pn+this._config.interval))};An.find(pr,this._element).forEach(e=>{tn.on(e,er,e=>e.preventDefault())}),this._pointerEvent?(tn.on(this._element,Jn,e=>t(e)),tn.on(this._element,Zn,e=>r(e)),this._element.classList.add(lr)):(tn.on(this._element,Qn,e=>t(e)),tn.on(this._element,Yn,e=>n(e)),tn.on(this._element,Xn,e=>r(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Kn[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?An.find(fr,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Vn;return Lt(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(An.findOne(dr,this._element));return tn.trigger(this._element,zn,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=An.findOne(hr,this._indicatorsElement);t.classList.remove(ir),t.removeAttribute("aria-current");const n=An.find(vr,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(ir),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||An.findOne(dr,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=An.findOne(dr,this._element),i=this._getItemIndex(r),s=t||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Vn,u=c?ar:or,l=c?cr:ur,h=this._orderToDirection(n);if(s&&s.classList.contains(ir))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{tn.trigger(this._element,Gn,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(sr)){s.classList.add(l),At(s),r.classList.add(u),s.classList.add(u);const e=()=>{s.classList.remove(u,l),s.classList.add(ir),r.classList.remove(ir,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(ir),s.classList.add(ir),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[qn,Bn].includes(e)?Dt()?e===Bn?Un:Vn:e===Bn?Vn:Un:e}_orderToDirection(e){return[Vn,Un].includes(e)?Dt()?e===Un?Bn:qn:e===Un?qn:Bn:e}static carouselInterface(e,t){const n=Ir.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){Ir.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=yt(this);if(!t||!t.classList.contains(rr))return;const n={...Sn.getDataAttributes(t),...Sn.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),Ir.carouselInterface(t,n),r&&Ir.getInstance(t).to(r),e.preventDefault()}}tn.on(document,nr,yr,Ir.dataApiClickHandler),tn.on(window,tr,()=>{const e=An.find(br);for(let t=0,n=e.length;t<n;t++)Ir.carouselInterface(e[t],Ir.getInstance(e[t]))}),Rt(Ir);const Er="collapse",Tr="bs.collapse",Or="."+Tr,Sr=".data-api",kr={toggle:!0,parent:null},Ar={toggle:"boolean",parent:"(null|element)"},Cr="show"+Or,xr="shown"+Or,Nr="hide"+Or,Dr="hidden"+Or,Rr=`click${Or}${Sr}`,jr="show",Pr="collapse",Lr="collapsing",Mr="collapsed",Fr=`:scope .${Pr} .${Pr}`,Vr="collapse-horizontal",Ur="width",Br="height",qr=".collapse.show, .collapse.collapsing",Kr='[data-bs-toggle="collapse"]';class zr extends on{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=An.find(Kr);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=vt(e),i=An.find(t).filter(e=>e===this._element);null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return kr}static get NAME(){return Er}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=An.find(Fr,this._config.parent);t=An.find(qr,this._config.parent).filter(t=>!e.includes(t))}const n=An.findOne(this._selector);if(t.length){const r=t.find(e=>n!==e);if(e=r?zr.getInstance(r):null,e&&e._isTransitioning)return}const r=tn.trigger(this._element,Cr);if(r.defaultPrevented)return;t.forEach(t=>{n!==t&&zr.getOrCreateInstance(t,{toggle:!1}).hide(),e||rn.set(t,Tr,null)});const i=this._getDimension();this._element.classList.remove(Pr),this._element.classList.add(Lr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Lr),this._element.classList.add(Pr,jr),this._element.style[i]="",tn.trigger(this._element,xr)},o=i[0].toUpperCase()+i.slice(1),a="scroll"+o;this._queueCallback(s,this._element,!0),this._element.style[i]=this._element[a]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,Nr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",At(this._element),this._element.classList.add(Lr),this._element.classList.remove(Pr,jr);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=yt(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Lr),this._element.classList.add(Pr),tn.trigger(this._element,Dr)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(jr)}_getConfig(e){return e={...kr,...Sn.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=It(e.parent),Et(Er,e,Ar),e}_getDimension(){return this._element.classList.contains(Vr)?Ur:Br}_initializeChildren(){if(!this._config.parent)return;const e=An.find(Fr,this._config.parent);An.find(Kr,this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=yt(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove(Mr):e.classList.add(Mr),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=zr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Rr,Kr,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=vt(this),n=An.find(t);n.forEach(e=>{zr.getOrCreateInstance(e,{toggle:!1}).toggle()})})),Rt(zr);const Gr="dropdown",$r="bs.dropdown",Wr="."+$r,Hr=".data-api",Qr="Escape",Yr="Space",Xr="Tab",Jr="ArrowUp",Zr="ArrowDown",ei=2,ti=new RegExp(`${Jr}|${Zr}|${Qr}`),ni="hide"+Wr,ri="hidden"+Wr,ii="show"+Wr,si="shown"+Wr,oi=`click${Wr}${Hr}`,ai=`keydown${Wr}${Hr}`,ci=`keyup${Wr}${Hr}`,ui="show",li="dropup",hi="dropend",di="dropstart",fi="navbar",pi='[data-bs-toggle="dropdown"]',mi=".dropdown-menu",gi=".navbar-nav",vi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",yi=Dt()?"top-end":"top-start",bi=Dt()?"top-start":"top-end",wi=Dt()?"bottom-end":"bottom-start",_i=Dt()?"bottom-start":"bottom-end",Ii=Dt()?"left-start":"right-start",Ei=Dt()?"right-start":"left-start",Ti={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Oi={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Si extends on{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ti}static get DefaultType(){return Oi}static get NAME(){return Gr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ot(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=tn.trigger(this._element,ii,e);if(t.defaultPrevented)return;const n=Si.getParentFromElement(this._element);this._inNavbar?Sn.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(gi)&&[].concat(...document.body.children).forEach(e=>tn.on(e,"mouseover",kt)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ui),this._element.classList.add(ui),tn.trigger(this._element,si,e)}hide(){if(Ot(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ni,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>tn.off(e,"mouseover",kt)),this._popper&&this._popper.destroy(),this._menu.classList.remove(ui),this._element.classList.remove(ui),this._element.setAttribute("aria-expanded","false"),Sn.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,ri,e))}_getConfig(e){if(e={...this.constructor.Default,...Sn.getDataAttributes(this._element),...e},Et(Gr,e,this.constructor.DefaultType),"object"===typeof e.reference&&!_t(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(Gr.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(e){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:_t(this._config.reference)?t=It(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=ct(t,this._menu,n),i&&Sn.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(ui)}_getMenuElement(){return An.next(this._element,mi)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(hi))return Ii;if(e.classList.contains(di))return Ei;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(li)?t?bi:yi:t?_i:wi}_detectNavbar(){return null!==this._element.closest("."+fi)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=An.find(vi,this._menu).filter(Tt);n.length&&Lt(n,t,e===Zr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Si.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===ei||"keyup"===e.type&&e.key!==Xr))return;const t=An.find(pi);for(let n=0,r=t.length;n<r;n++){const r=Si.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Xr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return yt(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Yr||e.key!==Qr&&(e.key!==Zr&&e.key!==Jr||e.target.closest(mi)):!ti.test(e.key))return;const t=this.classList.contains(ui);if(!t&&e.key===Qr)return;if(e.preventDefault(),e.stopPropagation(),Ot(this))return;const n=this.matches(pi)?this:An.prev(this,pi)[0],r=Si.getOrCreateInstance(n);if(e.key!==Qr)return e.key===Jr||e.key===Zr?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==Yr||Si.clearMenus());r.hide()}}tn.on(document,ai,pi,Si.dataApiKeydownHandler),tn.on(document,ai,mi,Si.dataApiKeydownHandler),tn.on(document,oi,Si.clearMenus),tn.on(document,ci,Si.clearMenus),tn.on(document,oi,pi,(function(e){e.preventDefault(),Si.getOrCreateInstance(this).toggle()})),Rt(Si);const ki=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ai=".sticky-top";class Ci{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(ki,"paddingRight",t=>t+e),this._setElementAttributes(Ai,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(i))+"px"};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(ki,"paddingRight"),this._resetElementAttributes(Ai,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&Sn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=Sn.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(Sn.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){_t(e)?t(e):An.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const xi={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ni={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Di="backdrop",Ri="fade",ji="show",Pi="mousedown.bs."+Di;class Li{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&At(this._getElement()),this._getElement().classList.add(ji),this._emulateAnimation(()=>{jt(e)})):jt(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(ji),this._emulateAnimation(()=>{this.dispose(),jt(e)})):jt(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ri),this._element=e}return this._element}_getConfig(e){return e={...xi,..."object"===typeof e?e:{}},e.rootElement=It(e.rootElement),Et(Di,e,Ni),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),tn.on(this._getElement(),Pi,()=>{jt(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(tn.off(this._element,Pi),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Pt(e,this._getElement(),this._config.isAnimated)}}const Mi={trapElement:null,autofocus:!0},Fi={trapElement:"element",autofocus:"boolean"},Vi="focustrap",Ui="bs.focustrap",Bi="."+Ui,qi="focusin"+Bi,Ki="keydown.tab"+Bi,zi="Tab",Gi="forward",$i="backward";class Wi{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),tn.off(document,Bi),tn.on(document,qi,e=>this._handleFocusin(e)),tn.on(document,Ki,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,Bi))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=An.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===$i?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===zi&&(this._lastTabNavDirection=e.shiftKey?$i:Gi)}_getConfig(e){return e={...Mi,..."object"===typeof e?e:{}},Et(Vi,e,Fi),e}}const Hi="modal",Qi="bs.modal",Yi="."+Qi,Xi=".data-api",Ji="Escape",Zi={backdrop:!0,keyboard:!0,focus:!0},es={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},ts="hide"+Yi,ns="hidePrevented"+Yi,rs="hidden"+Yi,is="show"+Yi,ss="shown"+Yi,os="resize"+Yi,as="click.dismiss"+Yi,cs="keydown.dismiss"+Yi,us="mouseup.dismiss"+Yi,ls="mousedown.dismiss"+Yi,hs=`click${Yi}${Xi}`,ds="modal-open",fs="fade",ps="show",ms="modal-static",gs=".modal.show",vs=".modal-dialog",ys=".modal-body",bs='[data-bs-toggle="modal"]';class ws extends on{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=An.findOne(vs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ci}static get Default(){return Zi}static get NAME(){return Hi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,is,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ds),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),tn.on(this._dialog,ls,()=>{tn.one(this._element,us,e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,ts);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ps),tn.off(this._element,as),tn.off(this._dialog,ls),this._queueCallback(()=>this._hideModal(),this._element,t)}dispose(){[window,this._dialog].forEach(e=>tn.off(e,Yi)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Li({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_getConfig(e){return e={...Zi,...Sn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(Hi,e,es),e}_showElement(e){const t=this._isAnimated(),n=An.findOne(ys,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&At(this._element),this._element.classList.add(ps);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,ss,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?tn.on(this._element,cs,e=>{this._config.keyboard&&e.key===Ji?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Ji||this._triggerBackdropTransition()}):tn.off(this._element,cs)}_setResizeEvent(){this._isShown?tn.on(window,os,()=>this._adjustDialog()):tn.off(window,os)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ds),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,rs)})}_showBackdrop(e){tn.on(this._element,as,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(fs)}_triggerBackdropTransition(){const e=tn.trigger(this._element,ns);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(ms)||(i||(r.overflowY="hidden"),t.add(ms),this._queueCallback(()=>{t.remove(ms),i||this._queueCallback(()=>{r.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!Dt()||n&&!e&&Dt())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!Dt()||!n&&e&&Dt())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=ws.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,hs,bs,(function(e){const t=yt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,is,e=>{e.defaultPrevented||tn.one(t,rs,()=>{Tt(this)&&this.focus()})});const n=An.findOne(gs);n&&ws.getInstance(n).hide();const r=ws.getOrCreateInstance(t);r.toggle(this)})),an(ws),Rt(ws);const _s="offcanvas",Is="bs.offcanvas",Es="."+Is,Ts=".data-api",Os=`load${Es}${Ts}`,Ss="Escape",ks={backdrop:!0,keyboard:!0,scroll:!1},As={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Cs="show",xs="offcanvas-backdrop",Ns=".offcanvas.show",Ds="show"+Es,Rs="shown"+Es,js="hide"+Es,Ps="hidden"+Es,Ls=`click${Es}${Ts}`,Ms="keydown.dismiss"+Es,Fs='[data-bs-toggle="offcanvas"]';class Vs extends on{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return _s}static get Default(){return ks}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,Ds,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ci).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Cs);const n=()=>{this._config.scroll||this._focustrap.activate(),tn.trigger(this._element,Rs,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,js);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Cs),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ci).reset(),tn.trigger(this._element,Ps)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...ks,...Sn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(_s,e,As),e}_initializeBackDrop(){return new Li({className:xs,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Ms,e=>{this._config.keyboard&&e.key===Ss&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=Vs.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,Ls,Fs,(function(e){const t=yt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ot(this))return;tn.one(t,Ps,()=>{Tt(this)&&this.focus()});const n=An.findOne(Ns);n&&n!==t&&Vs.getInstance(n).hide();const r=Vs.getOrCreateInstance(t);r.toggle(this)})),tn.on(window,Os,()=>An.find(Ns).forEach(e=>Vs.getOrCreateInstance(e).show())),an(Vs),Rt(Vs);const Us=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Bs=/^aria-[\w-]*$/i,qs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ks=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,zs=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Us.has(n)||Boolean(qs.test(e.nodeValue)||Ks.test(e.nodeValue));const r=t.filter(e=>e instanceof RegExp);for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},Gs={"*":["class","dir","id","lang","role",Bs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function $s(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const e=s[o],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach(t=>{zs(t,i)||e.removeAttribute(t.nodeName)})}return i.body.innerHTML}const Ws="tooltip",Hs="bs.tooltip",Qs="."+Hs,Ys="bs-tooltip",Xs=new Set(["sanitize","allowList","sanitizeFn"]),Js={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Zs={AUTO:"auto",TOP:"top",RIGHT:Dt()?"left":"right",BOTTOM:"bottom",LEFT:Dt()?"right":"left"},eo={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Gs,popperConfig:null},to={HIDE:"hide"+Qs,HIDDEN:"hidden"+Qs,SHOW:"show"+Qs,SHOWN:"shown"+Qs,INSERTED:"inserted"+Qs,CLICK:"click"+Qs,FOCUSIN:"focusin"+Qs,FOCUSOUT:"focusout"+Qs,MOUSEENTER:"mouseenter"+Qs,MOUSELEAVE:"mouseleave"+Qs},no="fade",ro="modal",io="show",so="show",oo="out",ao=".tooltip-inner",co="."+ro,uo="hide.bs.modal",lo="hover",ho="focus",fo="click",po="manual";class mo extends on{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return eo}static get NAME(){return Ws}static get Event(){return to}static get DefaultType(){return Js}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(io))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(co),uo,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.Event.SHOW),t=St(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ao).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),i=mt(this.constructor.NAME);r.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&r.classList.add(no);const s="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;rn.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),tn.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ct(this._element,r,this._getPopperConfig(o)),r.classList.add(io);const c=this._resolvePossibleFunction(this._config.customClass);c&&r.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{tn.on(e,"mouseover",kt)});const u=()=>{const e=this._hoverState;this._hoverState=null,tn.trigger(this._element,this.constructor.Event.SHOWN),e===oo&&this._leave(null,this)},l=this.tip.classList.contains(no);this._queueCallback(u,this.tip,l)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==so&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=tn.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(io),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>tn.off(e,"mouseover",kt)),this._activeTrigger[fo]=!1,this._activeTrigger[ho]=!1,this._activeTrigger[lo]=!1;const r=this.tip.classList.contains(no);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(no,io),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),ao)}_sanitizeAndSetContent(e,t,n){const r=An.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return _t(t)?(t=It(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=$s(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Zs[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach(e=>{if("click"===e)tn.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if(e!==po){const t=e===lo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===lo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;tn.on(this._element,t,this._config.selector,e=>this._enter(e)),tn.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(co),uo,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?ho:lo]=!0),t.getTipElement().classList.contains(io)||t._hoverState===so?t._hoverState=so:(clearTimeout(t._timeout),t._hoverState=so,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===so&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?ho:lo]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=oo,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===oo&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=Sn.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{Xs.has(e)&&delete t[e]}),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:It(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),Et(Ws,e,this.constructor.DefaultType),e.sanitize&&(e.template=$s(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_getBasicClassPrefix(){return Ys}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=mo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Rt(mo);const go="popover",vo="bs.popover",yo="."+vo,bo="bs-popover",wo={...mo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},_o={...mo.DefaultType,content:"(string|element|function)"},Io={HIDE:"hide"+yo,HIDDEN:"hidden"+yo,SHOW:"show"+yo,SHOWN:"shown"+yo,INSERTED:"inserted"+yo,CLICK:"click"+yo,FOCUSIN:"focusin"+yo,FOCUSOUT:"focusout"+yo,MOUSEENTER:"mouseenter"+yo,MOUSELEAVE:"mouseleave"+yo},Eo=".popover-header",To=".popover-body";class Oo extends mo{static get Default(){return wo}static get NAME(){return go}static get Event(){return Io}static get DefaultType(){return _o}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Eo),this._sanitizeAndSetContent(e,this._getContent(),To)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return bo}static jQueryInterface(e){return this.each((function(){const t=Oo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Rt(Oo);const So="scrollspy",ko="bs.scrollspy",Ao="."+ko,Co=".data-api",xo={offset:10,method:"auto",target:""},No={offset:"number",method:"string",target:"(string|element)"},Do="activate"+Ao,Ro="scroll"+Ao,jo=`load${Ao}${Co}`,Po="dropdown-item",Lo="active",Mo='[data-bs-spy="scroll"]',Fo=".nav, .list-group",Vo=".nav-link",Uo=".nav-item",Bo=".list-group-item",qo=`${Vo}, ${Bo}, .${Po}`,Ko=".dropdown",zo=".dropdown-toggle",Go="offset",$o="position";class Wo extends on{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn.on(this._scrollElement,Ro,()=>this._process()),this.refresh(),this._process()}static get Default(){return xo}static get NAME(){return So}refresh(){const e=this._scrollElement===this._scrollElement.window?Go:$o,t="auto"===this._config.method?e:this._config.method,n=t===$o?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=An.find(qo,this._config.target);r.map(e=>{const r=vt(e),i=r?An.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[Sn[t](i).top+n,r]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){tn.off(this._scrollElement,Ao),super.dispose()}_getConfig(e){return e={...xo,...Sn.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=It(e.target)||document.documentElement,Et(So,e,No),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=qo.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=An.findOne(t.join(","),this._config.target);n.classList.add(Lo),n.classList.contains(Po)?An.findOne(zo,n.closest(Ko)).classList.add(Lo):An.parents(n,Fo).forEach(e=>{An.prev(e,`${Vo}, ${Bo}`).forEach(e=>e.classList.add(Lo)),An.prev(e,Uo).forEach(e=>{An.children(e,Vo).forEach(e=>e.classList.add(Lo))})}),tn.trigger(this._scrollElement,Do,{relatedTarget:e})}_clear(){An.find(qo,this._config.target).filter(e=>e.classList.contains(Lo)).forEach(e=>e.classList.remove(Lo))}static jQueryInterface(e){return this.each((function(){const t=Wo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,jo,()=>{An.find(Mo).forEach(e=>new Wo(e))}),Rt(Wo);const Ho="tab",Qo="bs.tab",Yo="."+Qo,Xo=".data-api",Jo="hide"+Yo,Zo="hidden"+Yo,ea="show"+Yo,ta="shown"+Yo,na=`click${Yo}${Xo}`,ra="dropdown-menu",ia="active",sa="fade",oa="show",aa=".dropdown",ca=".nav, .list-group",ua=".active",la=":scope > li > .active",ha='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',da=".dropdown-toggle",fa=":scope > .dropdown-menu .active";class pa extends on{static get NAME(){return Ho}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ia))return;let e;const t=yt(this._element),n=this._element.closest(ca);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?la:ua;e=An.find(t,n),e=e[e.length-1]}const r=e?tn.trigger(e,Jo,{relatedTarget:this._element}):null,i=tn.trigger(this._element,ea,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{tn.trigger(e,Zo,{relatedTarget:this._element}),tn.trigger(this._element,ta,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?An.children(t,ua):An.find(la,t),i=r[0],s=n&&i&&i.classList.contains(sa),o=()=>this._transitionComplete(e,i,n);i&&s?(i.classList.remove(oa),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(ia);const e=An.findOne(fa,t.parentNode);e&&e.classList.remove(ia),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ia),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),At(e),e.classList.contains(sa)&&e.classList.add(oa);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(ra)){const t=e.closest(aa);t&&An.find(da,t).forEach(e=>e.classList.add(ia)),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=pa.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,na,ha,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ot(this))return;const t=pa.getOrCreateInstance(this);t.show()})),Rt(pa);const ma="toast",ga="bs.toast",va="."+ga,ya="mouseover"+va,ba="mouseout"+va,wa="focusin"+va,_a="focusout"+va,Ia="hide"+va,Ea="hidden"+va,Ta="show"+va,Oa="shown"+va,Sa="fade",ka="hide",Aa="show",Ca="showing",xa={animation:"boolean",autohide:"boolean",delay:"number"},Na={animation:!0,autohide:!0,delay:5e3};class Da extends on{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return xa}static get Default(){return Na}static get NAME(){return ma}show(){const e=tn.trigger(this._element,Ta);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Sa);const t=()=>{this._element.classList.remove(Ca),tn.trigger(this._element,Oa),this._maybeScheduleHide()};this._element.classList.remove(ka),At(this._element),this._element.classList.add(Aa),this._element.classList.add(Ca),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Aa))return;const e=tn.trigger(this._element,Ia);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(ka),this._element.classList.remove(Ca),this._element.classList.remove(Aa),tn.trigger(this._element,Ea)};this._element.classList.add(Ca),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Aa)&&this._element.classList.remove(Aa),super.dispose()}_getConfig(e){return e={...Na,...Sn.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},Et(ma,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,ya,e=>this._onInteraction(e,!0)),tn.on(this._element,ba,e=>this._onInteraction(e,!1)),tn.on(this._element,wa,e=>this._onInteraction(e,!0)),tn.on(this._element,_a,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Da.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}an(Da),Rt(Da)},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=w(),void 0===t?n:s.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("cb2d"),p=n("b622"),m=n("3f8c"),g=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),I="keys",E="values",T="entries",O=function(){return this};e.exports=function(e,t,n,o,p,g,S){c(n,t,o);var k,A,C,x=function(e){if(e===p&&P)return P;if(!w&&e in R)return R[e];switch(e){case I:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",D=!1,R=e.prototype,j=R[_]||R["@@iterator"]||p&&R[p],P=!w&&j||x(p),L="Array"==t&&R.entries||j;if(L&&(k=u(L.call(new e)),k!==Object.prototype&&k.next&&(s||u(k)===b||(l?l(k,b):a(k[_])||f(k,_,O)),h(k,N,!0,!0),s&&(m[N]=O))),v&&p==E&&j&&j.name!==E&&(!s&&y?d(R,"name",E):(D=!0,P=function(){return i(j,this)})),p)if(A={values:x(E),keys:g?P:x(I),entries:x(T)},S)for(C in A)(w||D||!(C in R))&&f(R,C,A[C]);else r({target:t,proto:!0,forced:w||D},A);return s&&!S||R[_]===P||f(R,_,P,{name:p}),m[t]=P,A}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["f"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["f"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["j"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["h"],ErrorFactory:r["b"],deepExtend:r["j"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.25";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["n"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ar})),n.d(t,"b",(function(){return xr})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Dr})),n.d(t,"e",(function(){return Nr})),n.d(t,"f",(function(){return Rr})),n.d(t,"g",(function(){return jr})),n.d(t,"h",(function(){return Sr})),n.d(t,"i",(function(){return kr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},E=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function T(e){e:{var t=qn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function O(e){return Array.prototype.concat.apply([],arguments)}function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e){return/^[\s\xa0]*$/.test(e)}var A,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return-1!=e.indexOf(t)}function N(e,t){return e<t?-1:e>t?1:0}e:{var D=a.navigator;if(D){var R=D.userAgent;if(R){A=R;break e}}A=""}function j(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function V(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var U,B=x(A,"Opera"),q=x(A,"Trident")||x(A,"MSIE"),K=x(A,"Edge"),z=K||q,G=x(A,"Gecko")&&!(x(A.toLowerCase(),"webkit")&&!x(A,"Edge"))&&!(x(A,"Trident")||x(A,"MSIE"))&&!x(A,"Edge"),$=x(A.toLowerCase(),"webkit")&&!x(A,"Edge");function W(){var e=a.document;return e?e.documentMode:void 0}e:{var H="",Q=function(){var e=A;return G?/rv:([^\);]+)(\)|;)/.exec(e):K?/Edge\/([\d\.]+)/.exec(e):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):B?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(H=Q?Q[1]:""),q){var Y=W();if(null!=Y&&Y>parseFloat(H)){U=String(Y);break e}}U=H}var X,J={};function Z(){return V((function(){let e=0;const t=C(String(U)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&q){var ee=W();X=ee||(parseInt(U,10)||void 0)}else X=void 0;var te=X,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(G){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},y(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Oe(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Oe(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Oe(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Ee(e){return e=e[fe],e instanceof le?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oe(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Se(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function ke(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(Se,b),Se.prototype[oe]=!0,Se.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Se.prototype.M=function(){if(Se.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Se.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=a.JSON.stringify;function xe(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var De,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new je,e=>e.reset());class je{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){a.setTimeout(()=>{throw e},0)}function Le(e,t){De||Me(),Fe||(De(),Fe=!0),Ve.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);De=function(){e.then(Ue)}}var Fe=!1,Ve=new Ne;function Ue(){for(var e;e=xe();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Be(e,t){Se.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function qe(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ke(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ze(e){e.g=Ke(()=>{e.g=null,e.i&&(e.i=!1,ze(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(Be,Se),r=Be.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(qe(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.Z.M.call(this),qe(this),delete this.g};class Ge extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){b.call(this),this.h=e,this.g={}}y($e,b);var We=[];function He(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){j(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Ye(){this.g=!0}function Xe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Je(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}$e.prototype.M=function(){$e.Z.M.call(this),Qe(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new Se}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();ke(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();ke(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(st,re),nt.STAT_EVENT="statevent",y(at,re),nt.Na="timingevent",y(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new $e(this),this.P=Et,e=z?125:void 0,this.W=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}y(yt,re),y(bt,re),y(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Et=45e3,Tt={},Ot={};function St(e,t,n){e.K=1,e.v=Xt(Gt(t)),e.s=n,e.U=!0,kt(e,null)}function kt(e,t){e.F=Date.now(),Nt(e),e.A=Gt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ge(g(e.Ia,e,e.g),e.O)),He(e.V,e.g,"readystatechange",e.gb),t=e.H?P(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Xe(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=xt(e,n),r==Ot){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}At(e)&&r!=Ot&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),jt(e))}function xt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ot:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?Ot:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.Y=Date.now()+e.P,Dt(e,e.P)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(g(e.eb,e),t)}function Rt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function jt(e){0==e.l.G||e.I||pr(e.l,e)}function Pt(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((e.J||n.g==e)&&fr(n),!k(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(x(e,"spdy")||x(e,"quic")||x(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Yt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){En(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Rt(a),Nt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)E(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Vt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Vt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ut(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Bt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Bt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Hn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Hn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Rt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var r=Qn(this.g);e="";var i=r.length,s=4==Hn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),jt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Je(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Pt(this),jt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.U?(Ct(this,h,o),z&&this.i&&3==h&&(He(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Lt(this,o)),4==h&&Pt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Pt(this),jt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Hn(this.g),t=this.g.ga();this.C<t.length&&(Rt(this),Ct(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Pt(this),this.o=2,jt(this)):Dt(this,this.Y-e)},r=Vt.prototype,r.R=function(){Ut(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Ut(this),this.g.concat()},r.get=function(e,t){return Bt(this.h,e)?this.h[e]:t},r.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var qt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Kt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zt){this.g=void 0!==t?t:e.g,$t(this,e.j),this.s=e.s,Wt(this,e.i),Ht(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Vt(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(qt))?(this.g=!!t,$t(this,n[1]||"",!0),this.s=en(n[2]||""),Wt(this,n[3]||"",!0),Ht(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Gt(e){return new zt(e)}function $t(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wt(e,t,n){e.i=n?en(t,!0):t}function Ht(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Yt(e,t,n){e.h.set(t,n)}function Xt(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jt(e){return e instanceof zt?Gt(e):new zt(e,void 0)}function Zt(e,t,n,r){var i=new zt(null,void 0);return e&&$t(i,e),t&&Wt(i,t),n&&Ht(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Vt,e.h=0,e.i&&Kt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ut(e)))}function dn(e,t){return ln(e),t=pn(e,t),Bt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),S(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){E(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=O(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=O(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var gn=class{constructor(e,t){this.h=e,this.g=t}};function vn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function En(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Tn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function On(){}function Sn(){this.g=new On}function kn(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(e,t){const n=new Ye;if(a.Image){const r=new Image;r.onload=v(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=v(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(Cn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function xn(e){this.l=e.$b||null,this.j=e.ib||!1}function Nn(e,t){Se.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},On.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},On.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(xn,ft),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(e){return function(){return e}}({}),y(Nn,Se);var Dn=0;function Rn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function jn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pn(e)}function Pn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Nn.prototype,r.open=function(e,t){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,jn(this)),this.readyState=Dn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?jn(this):Pn(this),3==this.readyState&&Rn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,jn(this))},r.Ta=function(e){this.g&&(this.response=e,jn(this))},r.ha=function(){this.g&&jn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(e){Se.call(this),this.headers=new Vt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,Se);var Fn="",Vn=/^https?$/i,Un=["POST","PUT"];function Bn(e){return q&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function qn(e){return"content-type"==e.toLowerCase()}function Kn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zn(e),$n(e)}function zn(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}function Gn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Hn(e)||2!=e.ba()))if(e.v&&4==Hn(e))Ke(e.Fa,0,e);else if(ke(e,"readystatechange"),4==Hn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(qt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var c=2<Hn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",zn(e)}}finally{$n(e)}}}function $n(e,t){if(e.g){Wn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Wn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Hn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yn(e){let t="";return j(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Xn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Yt(e,t,n))}function Jn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Ye,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,e),this.$a=Jn("retryDelaySeedMs",1e4,e),this.Ya=Jn("forwardChannelMaxRetries",2,e),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(e&&e.concurrentRequestLimit),this.Ca=new Sn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=Gt(e.F);Yt(n,"SID",e.J),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Xt(Gt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Nt(t)}vr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new gn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,Le(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(g(e.Ha,e,t),mr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=Gt(e.F);Yt(r,"SID",e.J),Yt(r,"RID",n),Yt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Xn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),St(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Yt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?g(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{kn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Le(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(g(e.Ga,e),mr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Gt(e.oa);Yt(t,"RID","rpc"),Yt(t,"SID",e.J),Yt(t,"CI",e.N?"0":"1"),Yt(t,"AID",e.U),ar(e,t),Yt(t,"TYPE","xmlhttp"),e.o&&e.s&&Xn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Xt(Gt(t)),n.s=null,n.U=!0,kt(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,En(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),ke(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}function mr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=g(e.jb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$t(n,"https"),Xt(n)),An(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),vr(e),nr(e)}function vr(e){e.G=0,e.I=-1,e.j&&(0==Tn(e.i).length&&0==e.l.length||(e.i.i.length=0,S(e.l),e.l.length=0),e.j.ua())}function yr(e,t,n){let r=Jt(n);if(""!=r.i)t&&Wt(r,t+"."+r.i),Ht(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&j(e.aa,(function(e,t){Yt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Yt(r,t,n),Yt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new xn({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function _r(){if(q&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Ir(e,t){Se.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!k(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!k(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Or(this)}function Er(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Tr(){bt.call(this),this.status=1}function Or(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Kn(this,s)}e=n||"";const i=new Vt(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=T(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=I(Un,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Ke(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),$n(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Hn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ln(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=P(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=Gt(this.F),Yt(n,"RID",e),Yt(n,"CVER",22),this.D&&Yt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Xn(n,this.o,s),In(this.i,i),this.Ra&&Yt(n,"TYPE","init"),this.ja?(Yt(n,"$req",t),Yt(n,"SID","null"),i.$=!0,St(i,n,null)):St(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(g(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Ir(e,t)},y(Ir,Se),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Le(g(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yr(e,null,e.W),ir(e)},Ir.prototype.close=function(){er(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=Ce(e),rr(this.g,t)):rr(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Ir.Z.M.call(this)},y(Er,yt),y(Tr,bt),y(Or,wr),Or.prototype.xa=function(){ke(this.g,"a")},Or.prototype.wa=function(e){ke(this.g,new Er(e))},Or.prototype.va=function(e){ke(this.g,new Tr(e))},Or.prototype.ua=function(){ke(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Se.prototype.listen=Se.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=s.createWebChannelTransport=function(){return new _r},kr=s.getStatEventTarget=function(){return it()},Ar=s.ErrorCode=ht,Cr=s.EventType=dt,xr=s.Event=nt,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Dr=s.FetchXmlHttpFactory=xn,Rr=s.WebChannel=mt,jr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new C(r||[]);return s._invoke=O(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==n&&r.call(_,s)&&(b=_);var I=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,s,o,a){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function O(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function x(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,c(I,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},E(T.prototype),c(T.prototype,o,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new T(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(I),c(I,a,"Generator"),c(I,s,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:s(+!u,n)}),o(e,l,!1,!0),a[l]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return Q})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return W})),n.d(t,"u",(function(){return P})),n.d(t,"v",(function(){return C})),n.d(t,"w",(function(){return B})),n.d(t,"x",(function(){return A})),n.d(t,"y",(function(){return $})),n.d(t,"z",(function(){return q})),n.d(t,"A",(function(){return H})),n.d(t,"B",(function(){return v})),n.d(t,"C",(function(){return L})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return U})),n.d(t,"G",(function(){return b})),n.d(t,"H",(function(){return w})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return u})),n.d(t,"L",(function(){return N})),n.d(t,"M",(function(){return _})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return oe})),n.d(t,"P",(function(){return G}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=V(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return V(e)||B(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(V(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),v=r(m);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=j(e),r=j(t),n||r)return!(!n||!r)&&y(e,t);if(n=B(e),r=B(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>b(e,t))}const _=e=>V(e)?e:null==e?"":j(e)||B(e)&&(e.toString===K||!F(e.toString))?JSON.stringify(e,I,2):String(e),I=(e,t)=>t&&t.__v_isRef?I(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||j(t)||$(t)?t:String(t),E={},T=[],O=()=>{},S=()=>!1,k=/^on[^a-z]/,A=e=>k.test(e),C=e=>e.startsWith("onUpdate:"),x=Object.assign,N=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},D=Object.prototype.hasOwnProperty,R=(e,t)=>D.call(e,t),j=Array.isArray,P=e=>"[object Map]"===z(e),L=e=>"[object Set]"===z(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,V=e=>"string"===typeof e,U=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,q=e=>B(e)&&F(e.then)&&F(e.catch),K=Object.prototype.toString,z=e=>K.call(e),G=e=>z(e).slice(8,-1),$=e=>"[object Object]"===z(e),W=e=>V(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,J=Y(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=Y(e=>e.replace(Z,"-$1").toLowerCase()),te=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=Y(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("d256"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("cb2d"),d=s&&s.prototype,f=!!s&&o((function(){d["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var p=a("Promise").prototype["finally"];d["finally"]!==p&&h(d,"finally",p,{unsafe:!0})}},ab8b:function(e,t,n){},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("cb2d"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,I=h.Promise,E=f(h,"queueMicrotask"),T=E&&E.value;T||(r=function(){var e,t;y&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},m||y||v||!b||!w?!g&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=d(u.then,u),o=function(){l(r)}):y?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b5e5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b727:function(e,t,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,b,w=o(p),_=s(w),I=r(m,g),E=a(_),T=0,O=v||c,S=t?O(p,E):n||d?O(p,0):void 0;E>T;T++)if((f||T in _)&&(y=_[T],b=I(y,T,w),e))if(t)S[T]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return T;case 2:u(S,y)}else switch(e){case 4:return!1;case 7:u(S,y)}return h?-1:i||l?l:S}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},cb2d:function(e,t,n){var r=n("da84"),i=n("1626"),s=n("9112"),o=n("13d2"),a=n("ce4e");e.exports=function(e,t,n,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:t;return i(n)&&o(n,d,c),e===r?(l?e[t]=n:a(t,n),e):(u?!h&&e[t]&&(l=!0):delete e[t],l?e[t]=n:s(e,t,n),e)}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cc98:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("4738").CONSTRUCTOR,o=n("d256"),a=n("d066"),c=n("1626"),u=n("cb2d"),l=o&&o.prototype;if(r({target:"Promise",proto:!0,forced:s,real:!0},{catch:function(e){return this.then(void 0,e)}}),!i&&c(o)){var h=a("Promise").prototype["catch"];l["catch"]!==h&&u(l,"catch",h,{unsafe:!0})}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,arity:2,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d256:function(e,t,n){var r=n("da84");e.exports=r.Promise},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("cb2d"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e,t){if(e<t)throw i("Not enough arguments");return e}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(i(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){n("5e7e"),n("14e5"),n("cc98"),n("3529"),n("f22b"),n("7149")},e71f:function(e,t,n){"use strict";n("0829")},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return r["A"]})),n.d(t,"b",(function(){return r["tb"]}));var r=n("530c");n("1fd5"),n("589b"),n("e691"),n("22e5")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f22b:function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("f069"),o=n("4738").CONSTRUCTOR;r({target:"Promise",stat:!0,forced:o},{reject:function(e){var t=s.f(this);return i(t.reject,void 0,e),t.promise}})},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.80b21e38.js.map