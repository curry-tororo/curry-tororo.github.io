(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="178",fh=0,ic=1,hh=2,Ru=1,dh=2,Gn=3,xi=0,Yt=1,Yn=2,di=0,gr=1,rc=2,sc=3,ac=4,ph=5,Ni=100,mh=101,gh=102,xh=103,_h=104,vh=200,yh=201,Mh=202,Sh=203,ho=204,po=205,Eh=206,Th=207,Ah=208,wh=209,bh=210,Ch=211,Rh=212,Ph=213,Dh=214,mo=0,go=1,xo=2,Sr=3,_o=4,vo=5,yo=6,Mo=7,Pu=0,Lh=1,Ih=2,pi=0,Uh=1,Nh=2,Fh=3,Oh=4,Bh=5,zh=6,kh=7,Du=300,Er=301,Tr=302,So=303,Eo=304,ga=306,Qr=1e3,Oi=1001,To=1002,bn=1003,Hh=1004,ys=1005,Un=1006,Ea=1007,Bi=1008,Jn=1009,Lu=1010,Iu=1011,es=1012,xl=1013,Yi=1014,qn=1015,ds=1016,_l=1017,vl=1018,ts=1020,Uu=35902,Nu=1021,Fu=1022,wn=1023,ns=1026,is=1027,Ou=1028,yl=1029,Bu=1030,Ml=1031,Sl=1033,$s=33776,Zs=33777,Ks=33778,Js=33779,Ao=35840,wo=35841,bo=35842,Co=35843,Ro=36196,Po=37492,Do=37496,Lo=37808,Io=37809,Uo=37810,No=37811,Fo=37812,Oo=37813,Bo=37814,zo=37815,ko=37816,Ho=37817,Vo=37818,Go=37819,Wo=37820,Xo=37821,js=36492,Yo=36494,qo=36495,zu=36283,$o=36284,Zo=36285,Ko=36286,Vh=3200,Gh=3201,Wh=0,Xh=1,li="",pn="srgb",Ar="srgb-linear",ra="linear",nt="srgb",Ht=7680,Ta=7681,Yh=514,qr=519,qh=512,$h=513,Zh=514,ku=515,Kh=516,Jh=517,jh=518,Qh=519,Jo=35044,oc="300 es",$n=2e3,sa=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const $r=Math.PI/180,rs=180/Math.PI;function Zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[s&255]+It[s>>8&255]+It[s>>16&255]+It[s>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function El(s,e){return(s%e+e)%e}function ed(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function td(s,e,t){return s!==e?(t-s)/(e-s):0}function Zr(s,e,t){return(1-t)*s+t*e}function nd(s,e,t,n){return Zr(s,e,1-Math.exp(-t*n))}function id(s,e=1){return e-Math.abs(El(s,e*2)-e)}function rd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ad(s,e){return s+Math.floor(Math.random()*(e-s+1))}function od(s,e){return s+Math.random()*(e-s)}function ld(s){return s*(.5-Math.random())}function cd(s){s!==void 0&&(lc=s);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ud(s){return s*$r}function fd(s){return s*rs}function hd(s){return(s&s-1)===0&&s!==0}function dd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function md(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),f=r((e+n)/2),c=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),u=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*c,l*d,l*h,o*f);break;case"YZY":s.set(l*h,o*c,l*d,o*f);break;case"ZXZ":s.set(l*d,l*h,o*c,o*f);break;case"XZX":s.set(o*c,l*g,l*u,o*f);break;case"YXY":s.set(l*u,o*c,l*g,o*f);break;case"ZYZ":s.set(l*g,l*u,o*c,o*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:$r,RAD2DEG:rs,generateUUID:Zn,clamp:ke,euclideanModulo:El,mapLinear:ed,inverseLerp:td,lerp:Zr,damp:nd,pingpong:id,smoothstep:rd,smootherstep:sd,randInt:ad,randFloat:od,randFloatSpread:ld,seededRandom:cd,degToRad:ud,radToDeg:fd,isPowerOfTwo:hd,ceilPowerOfTwo:dd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:Qe,denormalize:Tn};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ps{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],f=n[i+1],c=n[i+2],d=n[i+3];const h=r[a+0],u=r[a+1],g=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=f,e[t+2]=c,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=u,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==h||f!==u||c!==g){let m=1-o;const x=l*h+f*u+c*g+d*p,S=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const _=Math.sqrt(T),E=Math.atan2(_,x*S);m=Math.sin(m*E)/_,o=Math.sin(o*E)/_}const M=o*S;if(l=l*m+h*M,f=f*m+u*M,c=c*m+g*M,d=d*m+p*M,m===1-o){const _=1/Math.sqrt(l*l+f*f+c*c+d*d);l*=_,f*=_,c*=_,d*=_}}e[t]=l,e[t+1]=f,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],f=n[i+2],c=n[i+3],d=r[a],h=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+c*d+l*u-f*h,e[t+1]=l*g+c*h+f*d-o*u,e[t+2]=f*g+c*u+o*h-l*d,e[t+3]=c*g-o*d-l*h-f*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,f=o(n/2),c=o(i/2),d=o(r/2),h=l(n/2),u=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*c*d+f*u*g,this._y=f*u*d-h*c*g,this._z=f*c*g+h*u*d,this._w=f*c*d-h*u*g;break;case"YXZ":this._x=h*c*d+f*u*g,this._y=f*u*d-h*c*g,this._z=f*c*g-h*u*d,this._w=f*c*d+h*u*g;break;case"ZXY":this._x=h*c*d-f*u*g,this._y=f*u*d+h*c*g,this._z=f*c*g+h*u*d,this._w=f*c*d-h*u*g;break;case"ZYX":this._x=h*c*d-f*u*g,this._y=f*u*d+h*c*g,this._z=f*c*g-h*u*d,this._w=f*c*d+h*u*g;break;case"YZX":this._x=h*c*d+f*u*g,this._y=f*u*d+h*c*g,this._z=f*c*g-h*u*d,this._w=f*c*d-h*u*g;break;case"XZY":this._x=h*c*d-f*u*g,this._y=f*u*d-h*c*g,this._z=f*c*g+h*u*d,this._w=f*c*d+h*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],f=t[2],c=t[6],d=t[10],h=n+o+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(c-l)*u,this._y=(r-f)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(c-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+f)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-f)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+c)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+f)/u,this._y=(l+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,f=t._z,c=t._w;return this._x=n*c+a*o+i*f-r*l,this._y=i*c+a*l+r*o-n*f,this._z=r*c+a*f+n*l-i*o,this._w=a*c-n*o-i*l-r*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const f=Math.sqrt(l),c=Math.atan2(f,o),d=Math.sin((1-t)*c)/f,h=Math.sin(t*c)/f;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,f=2*(a*i-o*n),c=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*f+a*d-o*c,this.y=n+l*c+o*f-r*d,this.z=i+l*d+r*c-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new V,cc=new ps;class Fe{constructor(e,t,n,i,r,a,o,l,f){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,f)}set(e,t,n,i,r,a,o,l,f){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],f=n[1],c=n[4],d=n[7],h=n[2],u=n[5],g=n[8],p=i[0],m=i[3],x=i[6],S=i[1],T=i[4],M=i[7],_=i[2],E=i[5],A=i[8];return r[0]=a*p+o*S+l*_,r[3]=a*m+o*T+l*E,r[6]=a*x+o*M+l*A,r[1]=f*p+c*S+d*_,r[4]=f*m+c*T+d*E,r[7]=f*x+c*M+d*A,r[2]=h*p+u*S+g*_,r[5]=h*m+u*T+g*E,r[8]=h*x+u*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],f=e[7],c=e[8];return t*a*c-t*o*f-n*r*c+n*o*l+i*r*f-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],f=e[7],c=e[8],d=c*a-o*f,h=o*l-c*r,u=f*r-a*l,g=t*d+n*h+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*f-c*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(c*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=u*p,e[7]=(n*l-f*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),f=Math.sin(r);return this.set(n*l,n*f,-n*(l*a+f*o)+a+e,-i*f,i*l,-i*(-f*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Fe;function Hu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xd(){const s=ss("canvas");return s.style.display="block",s}const uc={};function xr(s){s in uc||(uc[s]=!0,console.warn(s))}function _d(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){const s={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ar]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:fc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:fc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}const qe=Md();function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ji;class Sd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=ss("canvas")),Ji.width=e.width,Ji.height=e.height;const i=Ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ed=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ba(i[a].image)):r.push(ba(i[a]))}else r=ba(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Td=0;const Ca=new V;class Gt extends Ur{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Oi,i=Oi,r=Un,a=Bi,o=wn,l=Jn,f=Gt.DEFAULT_ANISOTROPY,c=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Zn(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Du;Gt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,f=l[0],c=l[4],d=l[8],h=l[1],u=l[5],g=l[9],p=l[2],m=l[6],x=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+m)<.1&&Math.abs(f+u+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,M=(u+1)/2,_=(x+1)/2,E=(c+h)/4,A=(d+p)/4,w=(g+m)/4;return T>M&&T>_?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=A/n):M>_?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=w/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=A/r,i=w/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-p)*(d-p)+(h-c)*(h-c));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-p)/S,this.z=(h-c)/S,this.w=Math.acos((f+u+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ad extends Ur{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Gt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Tl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Ad{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vu extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Ss.subVectors(this.max,Br),ji.subVectors(e.a,Br),Qi.subVectors(e.b,Br),er.subVectors(e.c,Br),ni.subVectors(Qi,ji),ii.subVectors(er,Qi),Ti.subVectors(ji,er);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ti.z,Ti.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ti.z,0,-Ti.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ti.y,Ti.x,0];return!Ra(t,ji,Qi,er,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,ji,Qi,er,Ss))?!1:(Es.crossVectors(ni,ii),t=[Es.x,Es.y,Es.z],Ra(t,ji,Qi,er,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new V,new V,new V,new V,new V,new V,new V,new V],Mn=new V,Ms=new yi,ji=new V,Qi=new V,er=new V,ni=new V,ii=new V,Ti=new V,Br=new V,Ss=new V,Es=new V,Ai=new V;function Ra(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ai.fromArray(s,r);const o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),f=t.dot(Ai),c=n.dot(Ai);if(Math.max(-Math.max(l,f,c),Math.min(l,f,c))>o)return!1}return!0}const bd=new yi,zr=new V,Pa=new V;class Nr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Pa)),this.expandByPoint(zr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new V,Da=new V,Ts=new V,ri=new V,La=new V,As=new V,Ia=new V;class Al{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Da.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ts),o=ri.dot(this.direction),l=-ri.dot(Ts),f=ri.lengthSq(),c=Math.abs(1-a*a);let d,h,u,g;if(c>0)if(d=a*l-o,h=a*o-l,g=r*c,d>=0)if(h>=-g)if(h<=g){const p=1/c;d*=p,h*=p,u=d*(d+a*h+2*o)+h*(a*d+h+2*l)+f}else h=r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+f;else h=-r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+f;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+f):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+f):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+f);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Da).addScaledVector(Ts,h),u}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const f=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return f>=0?(n=(e.min.x-h.x)*f,i=(e.max.x-h.x)*f):(n=(e.max.x-h.x)*f,i=(e.min.x-h.x)*f),c>=0?(r=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){La.subVectors(t,e),As.subVectors(n,e),Ia.crossVectors(La,As);let a=this.direction.dot(Ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(As.crossVectors(ri,As));if(l<0)return null;const f=o*this.direction.dot(La.cross(ri));if(f<0||l+f>a)return null;const c=-o*ri.dot(Ia);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,r,a,o,l,f,c,d,h,u,g,p,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,f,c,d,h,u,g,p,m)}set(e,t,n,i,r,a,o,l,f,c,d,h,u,g,p,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=f,x[6]=c,x[10]=d,x[14]=h,x[3]=u,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),f=Math.sin(i),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*c,u=a*d,g=o*c,p=o*d;t[0]=l*c,t[4]=-l*d,t[8]=f,t[1]=u+g*f,t[5]=h-p*f,t[9]=-o*l,t[2]=p-h*f,t[6]=g+u*f,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,u=l*d,g=f*c,p=f*d;t[0]=h+p*o,t[4]=g*o-u,t[8]=a*f,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=u*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,u=l*d,g=f*c,p=f*d;t[0]=h-p*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*c,t[9]=p-h*o,t[2]=-a*f,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,u=a*d,g=o*c,p=o*d;t[0]=l*c,t[4]=g*f-u,t[8]=h*f+p,t[1]=l*d,t[5]=p*f+h,t[9]=u*f-g,t[2]=-f,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,u=a*f,g=o*l,p=o*f;t[0]=l*c,t[4]=p-h*d,t[8]=g*d+u,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-f*c,t[6]=u*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=a*l,u=a*f,g=o*l,p=o*f;t[0]=l*c,t[4]=-d,t[8]=f*c,t[1]=h*d+p,t[5]=a*c,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*c,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),si.crossVectors(n,tn),si.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),si.crossVectors(n,tn)),si.normalize(),ws.crossVectors(tn,si),i[0]=si.x,i[4]=ws.x,i[8]=tn.x,i[1]=si.y,i[5]=ws.y,i[9]=tn.y,i[2]=si.z,i[6]=ws.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],f=n[12],c=n[1],d=n[5],h=n[9],u=n[13],g=n[2],p=n[6],m=n[10],x=n[14],S=n[3],T=n[7],M=n[11],_=n[15],E=i[0],A=i[4],w=i[8],y=i[12],v=i[1],b=i[5],R=i[9],D=i[13],U=i[2],N=i[6],O=i[10],B=i[14],z=i[3],Z=i[7],te=i[11],le=i[15];return r[0]=a*E+o*v+l*U+f*z,r[4]=a*A+o*b+l*N+f*Z,r[8]=a*w+o*R+l*O+f*te,r[12]=a*y+o*D+l*B+f*le,r[1]=c*E+d*v+h*U+u*z,r[5]=c*A+d*b+h*N+u*Z,r[9]=c*w+d*R+h*O+u*te,r[13]=c*y+d*D+h*B+u*le,r[2]=g*E+p*v+m*U+x*z,r[6]=g*A+p*b+m*N+x*Z,r[10]=g*w+p*R+m*O+x*te,r[14]=g*y+p*D+m*B+x*le,r[3]=S*E+T*v+M*U+_*z,r[7]=S*A+T*b+M*N+_*Z,r[11]=S*w+T*R+M*O+_*te,r[15]=S*y+T*D+M*B+_*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],f=e[13],c=e[2],d=e[6],h=e[10],u=e[14],g=e[3],p=e[7],m=e[11],x=e[15];return g*(+r*l*d-i*f*d-r*o*h+n*f*h+i*o*u-n*l*u)+p*(+t*l*u-t*f*h+r*a*h-i*a*u+i*f*c-r*l*c)+m*(+t*f*d-t*o*u-r*a*d+n*a*u+r*o*c-n*f*c)+x*(-i*o*c-t*l*d+t*o*h+i*a*d-n*a*h+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],f=e[7],c=e[8],d=e[9],h=e[10],u=e[11],g=e[12],p=e[13],m=e[14],x=e[15],S=d*m*f-p*h*f+p*l*u-o*m*u-d*l*x+o*h*x,T=g*h*f-c*m*f-g*l*u+a*m*u+c*l*x-a*h*x,M=c*p*f-g*d*f+g*o*u-a*p*u-c*o*x+a*d*x,_=g*d*l-c*p*l-g*o*h+a*p*h+c*o*m-a*d*m,E=t*S+n*T+i*M+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=S*A,e[1]=(p*h*r-d*m*r-p*i*u+n*m*u+d*i*x-n*h*x)*A,e[2]=(o*m*r-p*l*r+p*i*f-n*m*f-o*i*x+n*l*x)*A,e[3]=(d*l*r-o*h*r-d*i*f+n*h*f+o*i*u-n*l*u)*A,e[4]=T*A,e[5]=(c*m*r-g*h*r+g*i*u-t*m*u-c*i*x+t*h*x)*A,e[6]=(g*l*r-a*m*r-g*i*f+t*m*f+a*i*x-t*l*x)*A,e[7]=(a*h*r-c*l*r+c*i*f-t*h*f-a*i*u+t*l*u)*A,e[8]=M*A,e[9]=(g*d*r-c*p*r-g*n*u+t*p*u+c*n*x-t*d*x)*A,e[10]=(a*p*r-g*o*r+g*n*f-t*p*f-a*n*x+t*o*x)*A,e[11]=(c*o*r-a*d*r-c*n*f+t*d*f+a*n*u-t*o*u)*A,e[12]=_*A,e[13]=(c*p*i-g*d*i+g*n*h-t*p*h-c*n*m+t*d*m)*A,e[14]=(g*o*i-a*p*i-g*n*l+t*p*l+a*n*m-t*o*m)*A,e[15]=(a*d*i-c*o*i+c*n*l-t*d*l-a*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,f=r*a,c=r*o;return this.set(f*a+n,f*o-i*l,f*l+i*o,0,f*o+i*l,c*o+n,c*l-i*a,0,f*l-i*o,c*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,f=r+r,c=a+a,d=o+o,h=r*f,u=r*c,g=r*d,p=a*c,m=a*d,x=o*d,S=l*f,T=l*c,M=l*d,_=n.x,E=n.y,A=n.z;return i[0]=(1-(p+x))*_,i[1]=(u+M)*_,i[2]=(g-T)*_,i[3]=0,i[4]=(u-M)*E,i[5]=(1-(h+x))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+T)*A,i[9]=(m-S)*A,i[10]=(1-(h+p))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=tr.set(i[0],i[1],i[2]).length();const a=tr.set(i[4],i[5],i[6]).length(),o=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const f=1/r,c=1/a,d=1/o;return Sn.elements[0]*=f,Sn.elements[1]*=f,Sn.elements[2]*=f,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=$n){const l=this.elements,f=2*r/(t-e),c=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let u,g;if(o===$n)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sa)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=$n){const l=this.elements,f=1/(t-e),c=1/(n-i),d=1/(a-r),h=(t+e)*f,u=(n+i)*c;let g,p;if(o===$n)g=(a+r)*d,p=-2*d;else if(o===sa)g=r*d,p=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=p,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new V,Sn=new mt,Cd=new V(0,0,0),Rd=new V(1,1,1),si=new V,ws=new V,tn=new V,dc=new mt,pc=new ps;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],f=i[5],c=i[9],d=i[2],h=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,f),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pd=0;const mc=new V,nr=new ps,kn=new mt,bs=new V,kr=new V,Dd=new V,Ld=new ps,gc=new V(1,0,0),xc=new V(0,1,0),_c=new V(0,0,1),vc={type:"added"},Id={type:"removed"},ir={type:"childadded",child:null},Ua={type:"childremoved",child:null};class qt extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new V,t=new jn,n=new ps,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Fe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bs.copy(e):bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(kr,bs,this.up):kn.lookAt(bs,kr,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(kn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let f=0,c=l.length;f<c;f++){const d=l[f];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),f=a(e.textures),c=a(e.images),d=a(e.shapes),h=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const f in o){const c=o[f];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new V(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new V,Hn=new V,Na=new V,Vn=new V,rr=new V,sr=new V,yc=new V,Fa=new V,Oa=new V,Ba=new V,za=new ot,ka=new ot,Ha=new ot;class An{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),Hn.subVectors(n,t),Na.subVectors(e,t);const a=En.dot(En),o=En.dot(Hn),l=En.dot(Na),f=Hn.dot(Hn),c=Hn.dot(Na),d=a*f-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,u=(f*l-o*c)*h,g=(a*c-o*l)*h;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return za.setScalar(0),ka.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(ka,r.y),a.addScaledVector(Ha,r.z),a}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Hn.subVectors(e,t),En.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),En.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;rr.subVectors(i,n),sr.subVectors(r,n),Fa.subVectors(e,n);const l=rr.dot(Fa),f=sr.dot(Fa);if(l<=0&&f<=0)return t.copy(n);Oa.subVectors(e,i);const c=rr.dot(Oa),d=sr.dot(Oa);if(c>=0&&d<=c)return t.copy(i);const h=l*d-c*f;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(rr,a);Ba.subVectors(e,r);const u=rr.dot(Ba),g=sr.dot(Ba);if(g>=0&&u<=g)return t.copy(r);const p=u*f-l*g;if(p<=0&&f>=0&&g<=0)return o=f/(f-g),t.copy(n).addScaledVector(sr,o);const m=c*g-u*d;if(m<=0&&d-c>=0&&u-g>=0)return yc.subVectors(r,i),o=(d-c)/(d-c+(u-g)),t.copy(i).addScaledVector(yc,o);const x=1/(m+p+h);return a=p*x,o=h*x,t.copy(n).addScaledVector(rr,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=El(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Va(a,r,e+1/3),this.g=Va(a,r,e),this.b=Va(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return qe.workingToColorSpace(Ut.copy(this),e),Math.round(ke(Ut.r*255,0,255))*65536+Math.round(ke(Ut.g*255,0,255))*256+Math.round(ke(Ut.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,f;const c=(o+a)/2;if(o===a)l=0,f=0;else{const d=a-o;switch(f=c<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=f,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=pn){qe.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Cs);const n=Zr(ai.h,Cs.h,t),i=Zr(ai.s,Cs.s,t),r=Zr(ai.l,Cs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new $e;$e.NAMES=Gu;let Ud=0;class ms extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=gr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=po,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ht,this.stencilZFail=Ht,this.stencilZPass=Ht,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ht&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ht&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ht&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hr extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new V,Rs=new Ze;let Nd=0;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),e}}class Wu extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xu extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fd=0;const hn=new mt,Ga=new qt,ar=new V,nn=new yi,Hr=new yi,At=new V;class vn extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?Xu:Wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(nn.min,Hr.min),nn.expandByPoint(At),At.addVectors(nn.max,Hr.max),nn.expandByPoint(At)):(nn.expandByPoint(Hr.min),nn.expandByPoint(Hr.max))}nn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let f=0,c=o.count;f<c;f++)At.fromBufferAttribute(o,f),l&&(ar.fromBufferAttribute(e,f),At.add(ar)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new V,l[w]=new V;const f=new V,c=new V,d=new V,h=new Ze,u=new Ze,g=new Ze,p=new V,m=new V;function x(w,y,v){f.fromBufferAttribute(n,w),c.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),h.fromBufferAttribute(r,w),u.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),c.sub(f),d.sub(f),u.sub(h),g.sub(h);const b=1/(u.x*g.y-g.x*u.y);isFinite(b)&&(p.copy(c).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(b),m.copy(d).multiplyScalar(u.x).addScaledVector(c,-g.x).multiplyScalar(b),o[w].add(p),o[y].add(p),o[v].add(p),l[w].add(m),l[y].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,y=S.length;w<y;++w){const v=S[w],b=v.start,R=v.count;for(let D=b,U=b+R;D<U;D+=3)x(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const T=new V,M=new V,_=new V,E=new V;function A(w){_.fromBufferAttribute(i,w),E.copy(_);const y=o[w];T.copy(y),T.sub(_.multiplyScalar(_.dot(y))).normalize(),M.crossVectors(E,y);const b=M.dot(l[w])<0?-1:1;a.setXYZW(w,T.x,T.y,T.z,b)}for(let w=0,y=S.length;w<y;++w){const v=S[w],b=v.start,R=v.count;for(let D=b,U=b+R;D<U;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const i=new V,r=new V,a=new V,o=new V,l=new V,f=new V,c=new V,d=new V;if(e)for(let h=0,u=e.count;h<u;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),c.subVectors(a,r),d.subVectors(i,r),c.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),f.fromBufferAttribute(n,m),o.add(c),l.add(c),f.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let h=0,u=t.count;h<u;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,r),d.subVectors(i,r),c.cross(d),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const f=o.array,c=o.itemSize,d=o.normalized,h=new f.constructor(l.length*c);let u=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?u=l[p]*o.data.stride+o.offset:u=l[p]*c;for(let x=0;x<c;x++)h[g++]=f[u++]}return new Cn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],f=e(l,n);t.setAttribute(o,f)}const r=this.morphAttributes;for(const o in r){const l=[],f=r[o];for(let c=0,d=f.length;c<d;c++){const h=f[c],u=e(h,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const f=a[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const f=n[l];e.data.attributes[l]=f.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],c=[];for(let d=0,h=f.length;d<h;d++){const u=f[d];c.push(u.toJSON(e.data))}c.length>0&&(i[l]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const f in i){const c=i[f];this.setAttribute(f,c.clone(t))}const r=e.morphAttributes;for(const f in r){const c=[],d=r[f];for(let h=0,u=d.length;h<u;h++)c.push(d[h].clone(t));this.morphAttributes[f]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,c=a.length;f<c;f++){const d=a[f];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new mt,wi=new Al,Ps=new Nr,Sc=new V,Ds=new V,Ls=new V,Is=new V,Wa=new V,Us=new V,Ec=new V,Ns=new V;class je extends qt{constructor(e=new vn,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Us.set(0,0,0);for(let l=0,f=r.length;l<f;l++){const c=o[l],d=r[l];c!==0&&(Wa.fromBufferAttribute(d,e),a?Us.addScaledVector(Wa,c):Us.addScaledVector(Wa.sub(t),c))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Ps.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ps,Sc)===null||wi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,f=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,p=h.length;g<p;g++){const m=h[g],x=a[m.materialIndex],S=Math.max(m.start,u.start),T=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let M=S,_=T;M<_;M+=3){const E=o.getX(M),A=o.getX(M+1),w=o.getX(M+2);i=Fs(this,x,e,n,f,c,d,E,A,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),p=Math.min(o.count,u.start+u.count);for(let m=g,x=p;m<x;m+=3){const S=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);i=Fs(this,a,e,n,f,c,d,S,T,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,p=h.length;g<p;g++){const m=h[g],x=a[m.materialIndex],S=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=S,_=T;M<_;M+=3){const E=M,A=M+1,w=M+2;i=Fs(this,x,e,n,f,c,d,E,A,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),p=Math.min(l.count,u.start+u.count);for(let m=g,x=p;m<x;m+=3){const S=m,T=m+1,M=m+2;i=Fs(this,a,e,n,f,c,d,S,T,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Od(s,e,t,n,i,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===xi,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Ns);return f<t.near||f>t.far?null:{distance:f,point:Ns.clone(),object:s}}function Fs(s,e,t,n,i,r,a,o,l,f){s.getVertexPosition(o,Ds),s.getVertexPosition(l,Ls),s.getVertexPosition(f,Is);const c=Od(s,e,t,n,Ds,Ls,Is,Ec);if(c){const d=new V;An.getBarycoord(Ec,Ds,Ls,Is,d),i&&(c.uv=An.getInterpolatedAttribute(i,o,l,f,d,new Ze)),r&&(c.uv1=An.getInterpolatedAttribute(r,o,l,f,d,new Ze)),a&&(c.normal=An.getInterpolatedAttribute(a,o,l,f,d,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:f,normal:new V,materialIndex:0};An.getNormal(Ds,Ls,Is,h.normal),c.face=h,c.barycoord=d}return c}class gs extends vn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],f=[],c=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(d,2));function g(p,m,x,S,T,M,_,E,A,w,y){const v=M/A,b=_/w,R=M/2,D=_/2,U=E/2,N=A+1,O=w+1;let B=0,z=0;const Z=new V;for(let te=0;te<O;te++){const le=te*b-D;for(let me=0;me<N;me++){const Re=me*v-R;Z[p]=Re*S,Z[m]=le*T,Z[x]=U,f.push(Z.x,Z.y,Z.z),Z[p]=0,Z[m]=0,Z[x]=E>0?1:-1,c.push(Z.x,Z.y,Z.z),d.push(me/A),d.push(1-te/w),B+=1}}for(let te=0;te<w;te++)for(let le=0;le<A;le++){const me=h+le+N*te,Re=h+le+N*(te+1),Y=h+(le+1)+N*(te+1),j=h+(le+1)+N*te;l.push(me,Re,j),l.push(Re,Y,j),z+=6}o.addGroup(u,z,y),u+=z,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=wr(s[t]);for(const i in n)e[i]=n[i]}return e}function Bd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const bl={clone:wr,merge:kt};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new V,Tc=new Ze,Ac=new Ze;class mn extends qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Tc,Ac),t.subVectors(Ac,Tc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,f=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/f,i*=a.width/l,n*=a.height/f}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,lr=1;class Hd extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(or,lr,e,t);i.layers=this.layers,this.add(i);const r=new mn(or,lr,e,t);r.layers=this.layers,this.add(r);const a=new mn(or,lr,e,t);a.layers=this.layers,this.add(a);const o=new mn(or,lr,e,t);o.layers=this.layers,this.add(o);const l=new mn(or,lr,e,t);l.layers=this.layers,this.add(l);const f=new mn(or,lr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const f of t)this.remove(f);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,f,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(d,h,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $u extends Gt{constructor(e=[],t=Er,n,i,r,a,o,l,f,c){super(e,t,n,i,r,a,o,l,f,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vd extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $u(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gs(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:di});r.uniforms.tEquirect.value=t;const a=new je(i,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Un),new Hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class zi extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gd={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),x=this._getHandJoint(f,p);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}const c=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],h=c.position.distanceTo(d.position),u=.02,g=.005;f.inputState.pinching&&h>u+g?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=u-g&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wd extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jo,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new V;class ci{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ci(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ya=new V,Yd=new V,qd=new Fe;class Li{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ya.subVectors(n,t).cross(Yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qd.getNormalMatrix(e),i=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Nr,$d=new Ze(.5,.5),Os=new V;class Zu{constructor(e=new Li,t=new Li,n=new Li,i=new Li,r=new Li,a=new Li){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],f=i[4],c=i[5],d=i[6],h=i[7],u=i[8],g=i[9],p=i[10],m=i[11],x=i[12],S=i[13],T=i[14],M=i[15];if(n[0].setComponents(l-r,h-f,m-u,M-x).normalize(),n[1].setComponents(l+r,h+f,m+u,M+x).normalize(),n[2].setComponents(l+a,h+c,m+g,M+S).normalize(),n[3].setComponents(l-a,h-c,m-g,M-S).normalize(),n[4].setComponents(l-o,h-d,m-p,M-T).normalize(),t===$n)n[5].setComponents(l+o,h+d,m+p,M+T).normalize();else if(t===sa)n[5].setComponents(o,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=$d.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new V,oa=new V,wc=new mt,Vr=new Al,Bs=new Nr,qa=new V,bc=new V;class Zd extends qt{constructor(e=new vn,t=new Ku){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)aa.fromBufferAttribute(t,i-1),oa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=aa.distanceTo(oa);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;wc.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,f=this.isLineSegments?2:1,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let p=u,m=g-1;p<m;p+=f){const x=c.getX(p),S=c.getX(p+1),T=zs(this,e,Vr,l,x,S,p);T&&t.push(T)}if(this.isLineLoop){const p=c.getX(g-1),m=c.getX(u),x=zs(this,e,Vr,l,p,m,g-1);x&&t.push(x)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let p=u,m=g-1;p<m;p+=f){const x=zs(this,e,Vr,l,p,p+1,p);x&&t.push(x)}if(this.isLineLoop){const p=zs(this,e,Vr,l,g-1,u,g-1);p&&t.push(p)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zs(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(aa.fromBufferAttribute(o,i),oa.fromBufferAttribute(o,r),t.distanceSqToSegment(aa,oa,qa,bc)>n)return;qa.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(qa);if(!(f<e.near||f>e.far))return{distance:f,point:bc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Cc=new V,Rc=new V;class Kd extends Zd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cc.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Rc);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ju extends Gt{constructor(e,t,n=Yi,i,r,a,o=bn,l=bn,f,c=ns,d=1){if(c!==ns&&c!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,a,o,l,c,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class br extends vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),f=o+1,c=l+1,d=e/o,h=t/l,u=[],g=[],p=[],m=[];for(let x=0;x<c;x++){const S=x*h-a;for(let T=0;T<f;T++){const M=T*d-r;g.push(M,-S,0),p.push(0,0,1),m.push(T/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let S=0;S<o;S++){const T=S+f*x,M=S+f*(x+1),_=S+1+f*(x+1),E=S+1+f*x;u.push(T,M,E),u.push(M,_,E)}this.setIndex(u),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(p,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cl extends vn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let f=0;const c=[],d=new V,h=new V,u=[],g=[],p=[],m=[];for(let x=0;x<=n;x++){const S=[],T=x/n;let M=0;x===0&&a===0?M=.5/t:x===n&&l===Math.PI&&(M=-.5/t);for(let _=0;_<=t;_++){const E=_/t;d.x=-e*Math.cos(i+E*r)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(i+E*r)*Math.sin(a+T*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),p.push(h.x,h.y,h.z),m.push(E+M,1-T),S.push(f++)}c.push(S)}for(let x=0;x<n;x++)for(let S=0;S<t;S++){const T=c[x][S+1],M=c[x][S],_=c[x+1][S],E=c[x+1][S+1];(x!==0||a>0)&&u.push(T,M,E),(x!==n-1||l<Math.PI)&&u.push(M,_,E)}this.setIndex(u),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(p,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jd extends vn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new V,r=new V;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let f=0,c=l.length;f<c;++f){const d=l[f],h=d.start,u=d.count;for(let g=h,p=h+u;g<p;g+=3)for(let m=0;m<3;m++){const x=o.getX(g+m),S=o.getX(g+(m+1)%3);i.fromBufferAttribute(a,x),r.fromBufferAttribute(a,S),Pc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let f=0;f<3;f++){const c=3*o+f,d=3*o+(f+1)%3;i.fromBufferAttribute(a,c),r.fromBufferAttribute(a,d),Pc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Pc(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class jd extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qd extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $a={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ep{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return f.push(c,d),this},this.removeHandler=function(c){const d=f.indexOf(c);return d!==-1&&f.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=f.length;d<h;d+=2){const u=f[d],g=f[d+1];if(u.global&&(u.lastIndex=0),u.test(c))return g}return null}}}const tp=new ep;class Rl{constructor(e){this.manager=e!==void 0?e:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr=new WeakMap;class np extends Rl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$a.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=cr.get(a);d===void 0&&(d=[],cr.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=ss("img");function l(){c(),t&&t(this);const d=cr.get(this)||[];for(let h=0;h<d.length;h++){const u=d[h];u.onLoad&&u.onLoad(this)}cr.delete(this),r.manager.itemEnd(e)}function f(d){c(),i&&i(d),$a.remove(`image:${e}`);const h=cr.get(this)||[];for(let u=0;u<h.length;u++){const g=h[u];g.onError&&g.onError(d)}cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$a.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ip extends Rl{constructor(e){super(e)}load(e,t,n,i){const r=new Gt,a=new np(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class rp extends qu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,a=r+f*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sp extends vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ap extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jo extends Xd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Dc=new mt;let op=class{constructor(e,t,n=0,i=1/0){this.ray=new Al(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(e,t=!0,n=[]){return Qo(e,this,n,t),n.sort(Lc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Qo(e[i],this,n,t);return n.sort(Lc),n}};function Lc(s,e){return s.distance-e.distance}function Qo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Qo(r[a],e,t,!0)}}const Ic=new V,ks=new V;class lp{constructor(e=new V,t=new V){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ic.subVectors(e,this.start),ks.subVectors(this.end,this.start);const n=ks.dot(ks);let r=ks.dot(Ic)/n;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class cp extends Kd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new vn;i.setAttribute("position",new Dt(t,3)),i.setAttribute("color",new Dt(n,3));const r=new Ku({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new $e,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Uc(s,e,t,n){const i=up(n);switch(t){case Nu:return s*e;case Ou:return s*e/i.components*i.byteLength;case yl:return s*e/i.components*i.byteLength;case Bu:return s*e*2/i.components*i.byteLength;case Ml:return s*e*2/i.components*i.byteLength;case Fu:return s*e*3/i.components*i.byteLength;case wn:return s*e*4/i.components*i.byteLength;case Sl:return s*e*4/i.components*i.byteLength;case $s:case Zs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Js:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wo:case Co:return Math.max(s,16)*Math.max(e,8)/4;case Ao:case bo:return Math.max(s,8)*Math.max(e,8)/2;case Ro:case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case js:case Yo:case qo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zu:case $o:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zo:case Ko:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function up(s){switch(s){case Jn:case Lu:return{byteLength:1,components:1};case es:case Iu:case ds:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case Yi:case xl:case qn:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ju(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function fp(s){const e=new WeakMap;function t(o,l){const f=o.array,c=o.usage,d=f.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,f,c),o.onUploadCallback();let u;if(f instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)u=s.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)u=s.SHORT;else if(f instanceof Uint32Array)u=s.UNSIGNED_INT;else if(f instanceof Int32Array)u=s.INT;else if(f instanceof Int8Array)u=s.BYTE;else if(f instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:u,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,f){const c=l.array,d=l.updateRanges;if(s.bindBuffer(f,o),d.length===0)s.bufferSubData(f,0,c);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){const g=d[h],p=d[u];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++h,d[h]=p)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){const p=d[u];s.bufferSubData(f,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=e.get(o);if(f===void 0)e.set(o,t(o,l));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,o,l),f.version=o.version}}return{get:i,remove:r,update:a}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:hp,alphahash_pars_fragment:dp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:xp,aomap_fragment:_p,aomap_pars_fragment:vp,batching_pars_vertex:yp,batching_vertex:Mp,begin_vertex:Sp,beginnormal_vertex:Ep,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:wp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Rp,clipping_planes_vertex:Pp,color_fragment:Dp,color_pars_fragment:Lp,color_pars_vertex:Ip,color_vertex:Up,common:Np,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Op,displacementmap_pars_vertex:Bp,displacementmap_vertex:zp,emissivemap_fragment:kp,emissivemap_pars_fragment:Hp,colorspace_fragment:Vp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:Yp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:rm,envmap_vertex:$p,fog_vertex:Zp,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:jp,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:sm,lights_toon_pars_fragment:am,lights_phong_fragment:om,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:hm,lights_fragment_end:dm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:xm,map_fragment:_m,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:Em,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:wm,morphtarget_pars_vertex:bm,morphtarget_vertex:Cm,normal_fragment_begin:Rm,normal_fragment_maps:Pm,normal_pars_fragment:Dm,normal_pars_vertex:Lm,normal_vertex:Im,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:km,premultiplied_alpha_fragment:Hm,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:$m,shadowmap_vertex:Zm,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:r0,transmission_fragment:s0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:c0,worldpos_vertex:u0,background_vert:f0,background_frag:h0,backgroundCube_vert:d0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:x0,depth_frag:_0,distanceRGBA_vert:v0,distanceRGBA_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:E0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:w0,meshlambert_vert:b0,meshlambert_frag:C0,meshmatcap_vert:R0,meshmatcap_frag:P0,meshnormal_vert:D0,meshnormal_frag:L0,meshphong_vert:I0,meshphong_frag:U0,meshphysical_vert:N0,meshphysical_frag:F0,meshtoon_vert:O0,meshtoon_frag:B0,points_vert:z0,points_frag:k0,shadow_vert:H0,shadow_frag:V0,sprite_vert:G0,sprite_frag:W0},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Xt={basic:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:kt([oe.common,oe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:kt([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xt.physical={uniforms:kt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Hs={r:0,b:0,g:0},Ci=new jn,X0=new mt;function Y0(s,e,t,n,i,r,a){const o=new $e(0);let l=r===!0?0:1,f,c,d=null,h=0,u=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function p(T){let M=!1;const _=g(T);_===null?x(o,l):_&&_.isColor&&(x(_,1),M=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===ga)?(c===void 0&&(c=new je(new gs(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:wr(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Ci)),c.material.toneMapped=qe.getTransfer(_.colorSpace)!==nt,(d!==_||h!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,u=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(f===void 0&&(f=new je(new br(2,2),new Qn({name:"BackgroundMaterial",uniforms:wr(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=_,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.toneMapped=qe.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),f.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||u!==s.toneMapping)&&(f.material.needsUpdate=!0,d=_,h=_.version,u=s.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function x(T,M){T.getRGB(Hs,Yu(s)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,M,a)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,x(o,l)},render:p,addToRenderList:m,dispose:S}}function q0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(v,b,R,D,U){let N=!1;const O=d(D,R,b);r!==O&&(r=O,f(r.object)),N=u(v,D,R,U),N&&g(v,D,R,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(v,b,R,D),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function f(v){return s.bindVertexArray(v)}function c(v){return s.deleteVertexArray(v)}function d(v,b,R){const D=R.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let N=U[b.id];N===void 0&&(N={},U[b.id]=N);let O=N[D];return O===void 0&&(O=h(l()),N[D]=O),O}function h(v){const b=[],R=[],D=[];for(let U=0;U<t;U++)b[U]=0,R[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:R,attributeDivisors:D,object:v,attributes:{},index:null}}function u(v,b,R,D){const U=r.attributes,N=b.attributes;let O=0;const B=R.getAttributes();for(const z in B)if(B[z].location>=0){const te=U[z];let le=N[z];if(le===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),te===void 0||te.attribute!==le||le&&te.data!==le.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function g(v,b,R,D){const U={},N=b.attributes;let O=0;const B=R.getAttributes();for(const z in B)if(B[z].location>=0){let te=N[z];te===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const le={};le.attribute=te,te&&te.data&&(le.data=te.data),U[z]=le,O++}r.attributes=U,r.attributesNum=O,r.index=D}function p(){const v=r.newAttributes;for(let b=0,R=v.length;b<R;b++)v[b]=0}function m(v){x(v,0)}function x(v,b){const R=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;R[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),U[v]!==b&&(s.vertexAttribDivisor(v,b),U[v]=b)}function S(){const v=r.newAttributes,b=r.enabledAttributes;for(let R=0,D=b.length;R<D;R++)b[R]!==v[R]&&(s.disableVertexAttribArray(R),b[R]=0)}function T(v,b,R,D,U,N,O){O===!0?s.vertexAttribIPointer(v,b,R,U,N):s.vertexAttribPointer(v,b,R,D,U,N)}function M(v,b,R,D){p();const U=D.attributes,N=R.getAttributes(),O=b.defaultAttributeValues;for(const B in N){const z=N[B];if(z.location>=0){let Z=U[B];if(Z===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),Z!==void 0){const te=Z.normalized,le=Z.itemSize,me=e.get(Z);if(me===void 0)continue;const Re=me.buffer,Y=me.type,j=me.bytesPerElement,re=Y===s.INT||Y===s.UNSIGNED_INT||Z.gpuType===xl;if(Z.isInterleavedBufferAttribute){const se=Z.data,he=se.stride,ze=Z.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<z.locationSize;Se++)x(z.location+Se,se.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<z.locationSize;Se++)m(z.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Se=0;Se<z.locationSize;Se++)T(z.location+Se,le/z.locationSize,Y,te,he*j,(ze+le/z.locationSize*Se)*j,re)}else{if(Z.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)x(z.location+se,Z.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let se=0;se<z.locationSize;se++)T(z.location+se,le/z.locationSize,Y,te,le*j,le/z.locationSize*se*j,re)}}else if(O!==void 0){const te=O[B];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(z.location,te);break;case 3:s.vertexAttrib3fv(z.location,te);break;case 4:s.vertexAttrib4fv(z.location,te);break;default:s.vertexAttrib1fv(z.location,te)}}}}S()}function _(){w();for(const v in n){const b=n[v];for(const R in b){const D=b[R];for(const U in D)c(D[U].object),delete D[U];delete b[R]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const R in b){const D=b[R];for(const U in D)c(D[U].object),delete D[U];delete b[R]}delete n[v.id]}function A(v){for(const b in n){const R=n[b];if(R[v.id]===void 0)continue;const D=R[v.id];for(const U in D)c(D[U].object),delete D[U];delete R[v.id]}}function w(){y(),a=!0,r!==i&&(r=i,f(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:y,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:p,enableAttribute:m,disableUnusedAttributes:S}}function $0(s,e,t){let n;function i(f){n=f}function r(f,c){s.drawArrays(n,f,c),t.update(c,n,1)}function a(f,c,d){d!==0&&(s.drawArraysInstanced(n,f,c,d),t.update(c,n,d))}function o(f,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,c,0,d);let u=0;for(let g=0;g<d;g++)u+=c[g];t.update(u,n,1)}function l(f,c,d,h){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<f.length;g++)a(f[g],c[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(n,f,0,c,0,h,0,d);let g=0;for(let p=0;p<d;p++)g+=c[p]*h[p];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qn&&!w)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const c=l(f);c!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",c,"instead."),f=c);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:_,maxSamples:E}}function K0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Li,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||n!==0||i;return i=h,n=d.length,u},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,x=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?c(null):f();else{const S=r?0:n,T=S*4;let M=x.clippingState||null;l.value=M,M=c(g,h,T,u);for(let _=0;_!==T;++_)M[_]=t[_];x.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,h,u,g){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const x=u+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<x)&&(m=new Float32Array(x));for(let T=0,M=u;T!==p;++T,M+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function J0(s){let e=new WeakMap;function t(a,o){return o===So?a.mapping=Er:o===Eo&&(a.mapping=Tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===So||o===Eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const f=new Vd(l.height);return f.fromEquirectangularTexture(s,a),e.set(a,f),a.addEventListener("dispose",i),t(f.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const dr=4,Nc=[.125,.215,.35,.446,.526,.582],Fi=20,Za=new rp,Fc=new $e;let Ka=null,Ja=0,ja=0,Qa=!1;const Ii=(1+Math.sqrt(5))/2,ur=1/Ii,Oc=[new V(-Ii,ur,0),new V(Ii,ur,0),new V(-ur,0,Ii),new V(ur,0,Ii),new V(0,Ii,-ur),new V(0,Ii,ur),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],j0=new V;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=j0}=r;Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,ja),this._renderer.xr.enabled=Qa,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ds,format:wn,colorSpace:Ar,depthBuffer:!1},i=zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(r)),this._blurMaterial=eg(r,e,t)}return i}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,i,r){const l=new mn(90,1,t,n),f=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Fc),d.toneMapping=pi,d.autoClear=!1;const g=new hr({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),p=new je(new gs,g);let m=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(Fc),m=!0);for(let S=0;S<6;S++){const T=S%3;T===0?(l.up.set(0,f[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[S],r.y,r.z)):T===1?(l.up.set(0,0,f[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[S],r.z)):(l.up.set(0,f[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[S]));const M=this._cubeSize;Vs(i,T*M,S>2?M:0,M,M),d.setRenderTarget(i),m&&d.render(p,l),d.render(e,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Er||e.mapping===Tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oc[(i-r-1)%Oc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new je(this._lodPlanes[i],f),h=f.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Fi-1),p=r/g,m=isFinite(r)?1+Math.floor(c*p):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const x=[];let S=0;for(let A=0;A<Fi;++A){const w=A/p,y=Math.exp(-w*w/2);x.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<x.length;A++)x[A]=x[A]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=x,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-n;const M=this._sizeLods[i],_=3*M*(i>T-dr?i-T+dr:0),E=4*(this._cubeSize-M);Vs(t,_,E,3*M,2*M),l.setRenderTarget(t),l.render(d,Za)}}function Q0(s){const e=[],t=[],n=[];let i=s;const r=s-dr+1+Nc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-dr?l=Nc[a-s+dr-1]:a===0&&(l=0),n.push(l);const f=1/(o-2),c=-f,d=1+f,h=[c,c,d,c,d,d,c,c,d,d,c,d],u=6,g=6,p=3,m=2,x=1,S=new Float32Array(p*g*u),T=new Float32Array(m*g*u),M=new Float32Array(x*g*u);for(let E=0;E<u;E++){const A=E%3*2/3-1,w=E>2?0:-1,y=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];S.set(y,p*g*E),T.set(h,m*g*E);const v=[E,E,E,E,E,E];M.set(v,x*g*E)}const _=new vn;_.setAttribute("position",new Cn(S,p)),_.setAttribute("uv",new Cn(T,m)),_.setAttribute("faceIndex",new Cn(M,x)),e.push(_),i>dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zc(s,e,t){const n=new qi(s,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function eg(s,e,t){const n=new Float32Array(Fi),i=new V(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function kc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Hc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,f=l===So||l===Eo,c=l===Er||l===Tr;if(f||c){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Bc(s)),d=f?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return f&&u&&u.height>0||c&&u&&i(u)?(t===null&&(t=new Bc(s)),d=f?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const f=6;for(let c=0;c<f;c++)o[c]!==void 0&&l++;return l===f}function r(o){const l=o.target;l.removeEventListener("dispose",r);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ng(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ig(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const u=r.get(h);u&&(e.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const u in h)e.update(h[u],s.ARRAY_BUFFER)}function f(d){const h=[],u=d.index,g=d.attributes.position;let p=0;if(u!==null){const S=u.array;p=u.version;for(let T=0,M=S.length;T<M;T+=3){const _=S[T+0],E=S[T+1],A=S[T+2];h.push(_,E,E,A,A,_)}}else if(g!==void 0){const S=g.array;p=g.version;for(let T=0,M=S.length/3-1;T<M;T+=3){const _=T+0,E=T+1,A=T+2;h.push(_,E,E,A,A,_)}}else return;const m=new(Hu(h)?Xu:Wu)(h,1);m.version=p;const x=r.get(d);x&&e.remove(x),r.set(d,m)}function c(d){const h=r.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&f(d)}else f(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function rg(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){s.drawElements(n,u,r,h*a),t.update(u,n,1)}function f(h,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,h*a,g),t.update(u,n,g))}function c(h,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,g);let m=0;for(let x=0;x<g;x++)m+=u[x];t.update(m,n,1)}function d(h,u,g,p){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h.length;x++)f(h[x]/a,u[x],p[x]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,h,0,p,0,g);let x=0;for(let S=0;S<g;S++)x+=u[S]*p[S];t.update(x,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function sg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ag(s,e,t){const n=new WeakMap,i=new ot;function r(a,o,l){const f=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var u=v;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),p===!0&&(M=2),m===!0&&(M=3);let _=o.attributes.position.count*M,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*E*4*d),w=new Vu(A,_,E,d);w.type=qn,w.needsUpdate=!0;const y=M*4;for(let b=0;b<d;b++){const R=x[b],D=S[b],U=T[b],N=_*E*4*b;for(let O=0;O<R.count;O++){const B=O*y;g===!0&&(i.fromBufferAttribute(R,O),A[N+B+0]=i.x,A[N+B+1]=i.y,A[N+B+2]=i.z,A[N+B+3]=0),p===!0&&(i.fromBufferAttribute(D,O),A[N+B+4]=i.x,A[N+B+5]=i.y,A[N+B+6]=i.z,A[N+B+7]=0),m===!0&&(i.fromBufferAttribute(U,O),A[N+B+8]=i.x,A[N+B+9]=i.y,A[N+B+10]=i.z,A[N+B+11]=U.itemSize===4?i.w:1)}}h={count:d,texture:w,size:new Ze(_,E)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<f.length;m++)g+=f[m];const p=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",f)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function og(s,e,t,n){let i=new WeakMap;function r(l){const f=n.render.frame,c=l.geometry,d=e.get(l,c);if(i.get(d)!==f&&(e.update(d),i.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==f&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==f&&(h.update(),i.set(h,f))}return d}function a(){i=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:r,dispose:a}}const Qu=new Gt,Vc=new Ju(1,1),ef=new Vu,tf=new wd,nf=new $u,Gc=[],Wc=[],Xc=new Float32Array(16),Yc=new Float32Array(9),qc=new Float32Array(4);function Fr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Gc[i];if(r===void 0&&(r=new Float32Array(i),Gc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xa(s,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function lg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function hg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;qc.set(n),s.uniformMatrix2fv(this.addr,!1,qc),Tt(t,n)}}function dg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Yc.set(n),s.uniformMatrix3fv(this.addr,!1,Yc),Tt(t,n)}}function pg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Xc.set(n),s.uniformMatrix4fv(this.addr,!1,Xc),Tt(t,n)}}function mg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function Eg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vc.compareFunction=ku,r=Vc):r=Qu,t.setTexture2D(e||r,i)}function Tg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tf,i)}function Ag(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nf,i)}function wg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ef,i)}function bg(s){switch(s){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return fg;case 35674:return hg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return yg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return wg}}function Cg(s,e){s.uniform1fv(this.addr,e)}function Rg(s,e){const t=Fr(e,this.size,2);s.uniform2fv(this.addr,t)}function Pg(s,e){const t=Fr(e,this.size,3);s.uniform3fv(this.addr,t)}function Dg(s,e){const t=Fr(e,this.size,4);s.uniform4fv(this.addr,t)}function Lg(s,e){const t=Fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ig(s,e){const t=Fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ug(s,e){const t=Fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ng(s,e){s.uniform1iv(this.addr,e)}function Fg(s,e){s.uniform2iv(this.addr,e)}function Og(s,e){s.uniform3iv(this.addr,e)}function Bg(s,e){s.uniform4iv(this.addr,e)}function zg(s,e){s.uniform1uiv(this.addr,e)}function kg(s,e){s.uniform2uiv(this.addr,e)}function Hg(s,e){s.uniform3uiv(this.addr,e)}function Vg(s,e){s.uniform4uiv(this.addr,e)}function Gg(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qu,r[a])}function Wg(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||tf,r[a])}function Xg(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||nf,r[a])}function Yg(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ef,r[a])}function qg(s){switch(s){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Dg;case 35674:return Lg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function $c(s,e){s.seq.push(e),s.map[e.id]=e}function Jg(s,e,t){const n=s.name,i=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),a=eo.lastIndex;let o=r[1];const l=r[2]==="]",f=r[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===i){$c(t,f===void 0?new $g(o,s,e):new Zg(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Kg(o),$c(t,d)),t=d}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Jg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Zc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const jg=37297;let Qg=0;function ex(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kc=new Fe;function tx(s){qe._getMatrix(Kc,qe.workingColorSpace,s);const e=`mat3( ${Kc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case ra:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ex(s.getShaderSource(e),a)}else return i}function nx(s,e){const t=tx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ix(s,e){let t;switch(e){case Uh:t="Linear";break;case Nh:t="Reinhard";break;case Fh:t="Cineon";break;case Oh:t="ACESFilmic";break;case zh:t="AgX";break;case kh:t="Neutral";break;case Bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gs=new V;function rx(){qe.getLuminanceCoefficients(Gs);const s=Gs.x.toFixed(4),e=Gs.y.toFixed(4),t=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function ax(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ox(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Wr(s){return s!==""}function jc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(s){return s.replace(lx,ux)}const cx=new Map;function ux(s,e){let t=Oe[e];if(t===void 0){const n=cx.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(s){return s.replace(fx,hx)}function hx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function px(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Lh:e="ENVMAP_BLENDING_MIX";break;case Ih:e="ENVMAP_BLENDING_ADD";break}return e}function xx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _x(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dx(t),f=px(t),c=mx(t),d=gx(t),h=xx(t),u=sx(t),g=ax(r),p=i.createProgram();let m,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),x.length>0&&(x+=`
`)):(m=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),x=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==pi?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,nx("linearToOutputTexel",t.outputColorSpace),rx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=el(a),a=jc(a,t),a=Qc(a,t),o=el(o),o=jc(o,t),o=Qc(o,t),a=eu(a),o=eu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=S+m+a,M=S+x+o,_=Zc(i,i.VERTEX_SHADER,T),E=Zc(i,i.FRAGMENT_SHADER,M);i.attachShader(p,_),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function A(b){if(s.debug.checkShaderErrors){const R=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(_).trim(),U=i.getShaderInfoLog(E).trim();let N=!0,O=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,_,E);else{const B=Jc(i,_,"vertex"),z=Jc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+R+`
`+B+`
`+z)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(D===""||U==="")&&(O=!1);O&&(b.diagnostics={runnable:N,programLog:R,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:x}})}i.deleteShader(_),i.deleteShader(E),w=new Qs(i,p),y=ox(i,p)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(p,jg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=E,this}let vx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mx(e),t.set(e,n)),n}}class Mx{constructor(e){this.id=vx++,this.code=e,this.usedTimes=0}}function Sx(s,e,t,n,i,r,a){const o=new wl,l=new yx,f=new Set,c=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return f.add(y),y===0?"uv":`uv${y}`}function m(y,v,b,R,D){const U=R.fog,N=D.geometry,O=y.isMeshStandardMaterial?R.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),z=B&&B.mapping===ga?B.image.height:null,Z=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=te!==void 0?te.length:0;let me=0;N.morphAttributes.position!==void 0&&(me=1),N.morphAttributes.normal!==void 0&&(me=2),N.morphAttributes.color!==void 0&&(me=3);let Re,Y,j,re;if(Z){const Je=Xt[Z];Re=Je.vertexShader,Y=Je.fragmentShader}else Re=y.vertexShader,Y=y.fragmentShader,l.update(y),j=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const se=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,Se=D.isBatchedMesh===!0,Ge=!!y.map,Be=!!y.matcap,Xe=!!B,I=!!y.aoMap,bt=!!y.lightMap,We=!!y.bumpMap,Ke=!!y.normalMap,xe=!!y.displacementMap,Ne=!!y.emissiveMap,Te=!!y.metalnessMap,Le=!!y.roughnessMap,gt=y.anisotropy>0,L=y.clearcoat>0,C=y.dispersion>0,G=y.iridescence>0,$=y.sheen>0,J=y.transmission>0,q=gt&&!!y.anisotropyMap,_e=L&&!!y.clearcoatMap,ae=L&&!!y.clearcoatNormalMap,Me=L&&!!y.clearcoatRoughnessMap,Ee=G&&!!y.iridescenceMap,Q=G&&!!y.iridescenceThicknessMap,de=$&&!!y.sheenColorMap,Ce=$&&!!y.sheenRoughnessMap,be=!!y.specularMap,ce=!!y.specularColorMap,Ie=!!y.specularIntensityMap,F=J&&!!y.transmissionMap,ue=J&&!!y.thicknessMap,ee=!!y.gradientMap,ge=!!y.alphaMap,ne=y.alphaTest>0,K=!!y.alphaHash,ve=!!y.extensions;let Ue=pi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const lt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:Re,fragmentShader:Y,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Se,batchingColor:Se&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ar,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Be,envMap:Xe,envMapMode:Xe&&B.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:bt,bumpMap:We,normalMap:Ke,displacementMap:h&&xe,emissiveMap:Ne,normalMapObjectSpace:Ke&&y.normalMapType===Xh,normalMapTangentSpace:Ke&&y.normalMapType===Wh,metalnessMap:Te,roughnessMap:Le,anisotropy:gt,anisotropyMap:q,clearcoat:L,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:Me,dispersion:C,iridescence:G,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:de,sheenRoughnessMap:Ce,specularMap:be,specularColorMap:ce,specularIntensityMap:Ie,transmission:J,transmissionMap:F,thicknessMap:ue,gradientMap:ee,opaque:y.transparent===!1&&y.blending===gr&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:K,combine:y.combine,mapUv:Ge&&p(y.map.channel),aoMapUv:I&&p(y.aoMap.channel),lightMapUv:bt&&p(y.lightMap.channel),bumpMapUv:We&&p(y.bumpMap.channel),normalMapUv:Ke&&p(y.normalMap.channel),displacementMapUv:xe&&p(y.displacementMap.channel),emissiveMapUv:Ne&&p(y.emissiveMap.channel),metalnessMapUv:Te&&p(y.metalnessMap.channel),roughnessMapUv:Le&&p(y.roughnessMap.channel),anisotropyMapUv:q&&p(y.anisotropyMap.channel),clearcoatMapUv:_e&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(y.sheenRoughnessMap.channel),specularMapUv:be&&p(y.specularMap.channel),specularColorMapUv:ce&&p(y.specularColorMap.channel),specularIntensityMapUv:Ie&&p(y.specularIntensityMap.channel),transmissionMapUv:F&&p(y.transmissionMap.channel),thicknessMapUv:ue&&p(y.thicknessMap.channel),alphaMapUv:ge&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ke||gt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Ge||ge),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:he,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:Ne&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=f.has(1),lt.vertexUv2s=f.has(2),lt.vertexUv3s=f.has(3),f.clear(),lt}function x(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)v.push(b),v.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(S(v,y),T(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function T(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const v=g[y.type];let b;if(v){const R=Xt[v];b=bl.clone(R.uniforms)}else b=y.uniforms;return b}function _(y,v){let b;for(let R=0,D=c.length;R<D;R++){const U=c[R];if(U.cacheKey===v){b=U,++b.usedTimes;break}}return b===void 0&&(b=new _x(s,v,y,r),c.push(b)),b}function E(y){if(--y.usedTimes===0){const v=c.indexOf(y);c[v]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:M,acquireProgram:_,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:w}}function Ex(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Tx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function iu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,u,g,p,m){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:h,material:u,groupOrder:g,renderOrder:d.renderOrder,z:p,group:m},s[e]=x):(x.id=d.id,x.object=d,x.geometry=h,x.material=u,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=p,x.group=m),e++,x}function o(d,h,u,g,p,m){const x=a(d,h,u,g,p,m);u.transmission>0?n.push(x):u.transparent===!0?i.push(x):t.push(x)}function l(d,h,u,g,p,m){const x=a(d,h,u,g,p,m);u.transmission>0?n.unshift(x):u.transparent===!0?i.unshift(x):t.unshift(x)}function f(d,h){t.length>1&&t.sort(d||Tx),n.length>1&&n.sort(h||nu),i.length>1&&i.sort(h||nu)}function c(){for(let d=e,h=s.length;d<h;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:c,sort:f}}function Ax(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new iu,s.set(n,[a])):i>=r.length?(a=new iu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new $e};break;case"SpotLight":t={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function bx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cx=0;function Rx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Px(s){const e=new wx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new V);const i=new V,r=new mt,a=new mt;function o(f){let c=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,p=0,m=0,x=0,S=0,T=0,M=0,_=0,E=0,A=0;f.sort(Rx);for(let y=0,v=f.length;y<v;y++){const b=f[y],R=b.color,D=b.intensity,U=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=R.r*D,d+=R.g*D,h+=R.b*D;else if(b.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(b.sh.coefficients[O],D);A++}else if(b.isDirectionalLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const B=b.shadow,z=t.get(b);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[u]=z,n.directionalShadowMap[u]=N,n.directionalShadowMatrix[u]=b.shadow.matrix,S++}n.directional[u]=O,u++}else if(b.isSpotLight){const O=e.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(R).multiplyScalar(D),O.distance=U,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,n.spot[p]=O;const B=b.shadow;if(b.map&&(n.spotLightMap[_]=b.map,_++,B.updateMatrices(b),b.castShadow&&E++),n.spotLightMatrix[p]=B.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[p]=z,n.spotShadowMap[p]=N,M++}p++}else if(b.isRectAreaLight){const O=e.get(b);O.color.copy(R).multiplyScalar(D),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=O,m++}else if(b.isPointLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const B=b.shadow,z=t.get(b);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=b.shadow.matrix,T++}n.point[g]=O,g++}else if(b.isHemisphereLight){const O=e.get(b);O.skyColor.copy(b.color).multiplyScalar(D),O.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[x]=O,x++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=h;const w=n.hash;(w.directionalLength!==u||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==m||w.hemiLength!==x||w.numDirectionalShadows!==S||w.numPointShadows!==T||w.numSpotShadows!==M||w.numSpotMaps!==_||w.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,w.directionalLength=u,w.pointLength=g,w.spotLength=p,w.rectAreaLength=m,w.hemiLength=x,w.numDirectionalShadows=S,w.numPointShadows=T,w.numSpotShadows=M,w.numSpotMaps=_,w.numLightProbes=A,n.version=Cx++)}function l(f,c){let d=0,h=0,u=0,g=0,p=0;const m=c.matrixWorldInverse;for(let x=0,S=f.length;x<S;x++){const T=f[x];if(T.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(T.isSpotLight){const M=n.spot[u];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function ru(s){const e=new Px(s),t=[],n=[];function i(c){f.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dx(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ru(s),e.set(i,[o])):r>=a.length?(o=new ru(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ux(s,e,t){let n=new Zu;const i=new Ze,r=new Ze,a=new ot,o=new jd({depthPacking:Gh}),l=new Qd,f={},c=t.maxTextureSize,d={[xi]:Yt,[Yt]:xi,[Yn]:Yn},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Lx,fragmentShader:Ix}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new je(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let x=this.type;this.render=function(E,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),R=s.state;R.setBlending(di),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=x!==Gn&&this.type===Gn,U=x===Gn&&this.type!==Gn;for(let N=0,O=E.length;N<O;N++){const B=E[N],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Z=z.getFrameExtents();if(i.multiply(Z),r.copy(z.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/Z.x),i.x=r.x*Z.x,z.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/Z.y),i.y=r.y*Z.y,z.mapSize.y=r.y)),z.map===null||D===!0||U===!0){const le=this.type!==Gn?{minFilter:bn,magFilter:bn}:{};z.map!==null&&z.map.dispose(),z.map=new qi(i.x,i.y,le),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const te=z.getViewportCount();for(let le=0;le<te;le++){const me=z.getViewport(le);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),R.viewport(a),z.updateMatrices(B,le),n=z.getFrustum(),M(A,w,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&S(z,w),z.needsUpdate=!1}x=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,b)};function S(E,A){const w=e.update(p);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qi(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,w,h,p,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,w,u,p,null)}function T(E,A,w,y){let v=null;const b=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)v=b;else if(v=w.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const R=v.uuid,D=A.uuid;let U=f[R];U===void 0&&(U={},f[R]=U);let N=U[D];N===void 0&&(N=v.clone(),U[D]=N,A.addEventListener("dispose",_)),v=N}if(v.visible=A.visible,v.wireframe=A.wireframe,y===Gn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const R=s.properties.get(v);R.light=w}return v}function M(E,A,w,y,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const D=e.update(E),U=E.material;if(Array.isArray(U)){const N=D.groups;for(let O=0,B=N.length;O<B;O++){const z=N[O],Z=U[z.materialIndex];if(Z&&Z.visible){const te=T(E,Z,y,v);E.onBeforeShadow(s,E,A,w,D,te,z),s.renderBufferDirect(w,null,D,te,E,z),E.onAfterShadow(s,E,A,w,D,te,z)}}}else if(U.visible){const N=T(E,U,y,v);E.onBeforeShadow(s,E,A,w,D,N,null),s.renderBufferDirect(w,null,D,N,E,null),E.onAfterShadow(s,E,A,w,D,N,null)}}const R=E.children;for(let D=0,U=R.length;D<U;D++)M(R[D],A,w,y,v)}function _(E){E.target.removeEventListener("dispose",_);for(const w in f){const y=f[w],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Nx={[mo]:go,[xo]:yo,[_o]:Mo,[Sr]:vo,[go]:mo,[yo]:xo,[Mo]:_o,[vo]:Sr};function Fx(s,e){function t(){let F=!1;const ue=new ot;let ee=null;const ge=new ot(0,0,0,0);return{setMask:function(ne){ee!==ne&&!F&&(s.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){F=ne},setClear:function(ne,K,ve,Ue,lt){lt===!0&&(ne*=Ue,K*=Ue,ve*=Ue),ue.set(ne,K,ve,Ue),ge.equals(ue)===!1&&(s.clearColor(ne,K,ve,Ue),ge.copy(ue))},reset:function(){F=!1,ee=null,ge.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,ee=null,ge=null,ne=null;return{setReversed:function(K){if(ue!==K){const ve=e.get("EXT_clip_control");K?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ue=K;const Ue=ne;ne=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(K){K?se(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(K){ee!==K&&!F&&(s.depthMask(K),ee=K)},setFunc:function(K){if(ue&&(K=Nx[K]),ge!==K){switch(K){case mo:s.depthFunc(s.NEVER);break;case go:s.depthFunc(s.ALWAYS);break;case xo:s.depthFunc(s.LESS);break;case Sr:s.depthFunc(s.LEQUAL);break;case _o:s.depthFunc(s.EQUAL);break;case vo:s.depthFunc(s.GEQUAL);break;case yo:s.depthFunc(s.GREATER);break;case Mo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=K}},setLocked:function(K){F=K},setClear:function(K){ne!==K&&(ue&&(K=1-K),s.clearDepth(K),ne=K)},reset:function(){F=!1,ee=null,ge=null,ne=null,ue=!1}}}function i(){let F=!1,ue=null,ee=null,ge=null,ne=null,K=null,ve=null,Ue=null,lt=null;return{setTest:function(Je){F||(Je?se(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!F&&(s.stencilMask(Je),ue=Je)},setFunc:function(Je,yn,On){(ee!==Je||ge!==yn||ne!==On)&&(s.stencilFunc(Je,yn,On),ee=Je,ge=yn,ne=On)},setOp:function(Je,yn,On){(K!==Je||ve!==yn||Ue!==On)&&(s.stencilOp(Je,yn,On),K=Je,ve=yn,Ue=On)},setLocked:function(Je){F=Je},setClear:function(Je){lt!==Je&&(s.clearStencil(Je),lt=Je)},reset:function(){F=!1,ue=null,ee=null,ge=null,ne=null,K=null,ve=null,Ue=null,lt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,f=new WeakMap;let c={},d={},h=new WeakMap,u=[],g=null,p=!1,m=null,x=null,S=null,T=null,M=null,_=null,E=null,A=new $e(0,0,0),w=0,y=!1,v=null,b=null,R=null,D=null,U=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=B>=2);let Z=null,te={};const le=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),Re=new ot().fromArray(le),Y=new ot().fromArray(me);function j(F,ue,ee,ge){const ne=new Uint8Array(4),K=s.createTexture();s.bindTexture(F,K),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ee;ve++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(ue+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return K}const re={};re[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(Sr),We(!1),Ke(ic),se(s.CULL_FACE),I(di);function se(F){c[F]!==!0&&(s.enable(F),c[F]=!0)}function he(F){c[F]!==!1&&(s.disable(F),c[F]=!1)}function ze(F,ue){return d[F]!==ue?(s.bindFramebuffer(F,ue),d[F]=ue,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ue),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Se(F,ue){let ee=u,ge=!1;if(F){ee=h.get(ue),ee===void 0&&(ee=[],h.set(ue,ee));const ne=F.textures;if(ee.length!==ne.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ve=ne.length;K<ve;K++)ee[K]=s.COLOR_ATTACHMENT0+K;ee.length=ne.length,ge=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ee)}function Ge(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Be={[Ni]:s.FUNC_ADD,[mh]:s.FUNC_SUBTRACT,[gh]:s.FUNC_REVERSE_SUBTRACT};Be[xh]=s.MIN,Be[_h]=s.MAX;const Xe={[vh]:s.ZERO,[yh]:s.ONE,[Mh]:s.SRC_COLOR,[ho]:s.SRC_ALPHA,[bh]:s.SRC_ALPHA_SATURATE,[Ah]:s.DST_COLOR,[Eh]:s.DST_ALPHA,[Sh]:s.ONE_MINUS_SRC_COLOR,[po]:s.ONE_MINUS_SRC_ALPHA,[wh]:s.ONE_MINUS_DST_COLOR,[Th]:s.ONE_MINUS_DST_ALPHA,[Ch]:s.CONSTANT_COLOR,[Rh]:s.ONE_MINUS_CONSTANT_COLOR,[Ph]:s.CONSTANT_ALPHA,[Dh]:s.ONE_MINUS_CONSTANT_ALPHA};function I(F,ue,ee,ge,ne,K,ve,Ue,lt,Je){if(F===di){p===!0&&(he(s.BLEND),p=!1);return}if(p===!1&&(se(s.BLEND),p=!0),F!==ph){if(F!==m||Je!==y){if((x!==Ni||M!==Ni)&&(s.blendEquation(s.FUNC_ADD),x=Ni,M=Ni),Je)switch(F){case gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rc:s.blendFunc(s.ONE,s.ONE);break;case sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,T=null,_=null,E=null,A.set(0,0,0),w=0,m=F,y=Je}return}ne=ne||ue,K=K||ee,ve=ve||ge,(ue!==x||ne!==M)&&(s.blendEquationSeparate(Be[ue],Be[ne]),x=ue,M=ne),(ee!==S||ge!==T||K!==_||ve!==E)&&(s.blendFuncSeparate(Xe[ee],Xe[ge],Xe[K],Xe[ve]),S=ee,T=ge,_=K,E=ve),(Ue.equals(A)===!1||lt!==w)&&(s.blendColor(Ue.r,Ue.g,Ue.b,lt),A.copy(Ue),w=lt),m=F,y=!1}function bt(F,ue){F.side===Yn?he(s.CULL_FACE):se(s.CULL_FACE);let ee=F.side===Yt;ue&&(ee=!ee),We(ee),F.blending===gr&&F.transparent===!1?I(di):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ge=F.stencilWrite;o.setTest(ge),ge&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(F){v!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),v=F)}function Ke(F){F!==fh?(se(s.CULL_FACE),F!==b&&(F===ic?s.cullFace(s.BACK):F===hh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),b=F}function xe(F){F!==R&&(O&&s.lineWidth(F),R=F)}function Ne(F,ue,ee){F?(se(s.POLYGON_OFFSET_FILL),(D!==ue||U!==ee)&&(s.polygonOffset(ue,ee),D=ue,U=ee)):he(s.POLYGON_OFFSET_FILL)}function Te(F){F?se(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function Le(F){F===void 0&&(F=s.TEXTURE0+N-1),Z!==F&&(s.activeTexture(F),Z=F)}function gt(F,ue,ee){ee===void 0&&(Z===null?ee=s.TEXTURE0+N-1:ee=Z);let ge=te[ee];ge===void 0&&(ge={type:void 0,texture:void 0},te[ee]=ge),(ge.type!==F||ge.texture!==ue)&&(Z!==ee&&(s.activeTexture(ee),Z=ee),s.bindTexture(F,ue||re[F]),ge.type=F,ge.texture=ue)}function L(){const F=te[Z];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(F){Re.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Re.copy(F))}function Ce(F){Y.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function be(F,ue){let ee=f.get(ue);ee===void 0&&(ee=new WeakMap,f.set(ue,ee));let ge=ee.get(F);ge===void 0&&(ge=s.getUniformBlockIndex(ue,F.name),ee.set(F,ge))}function ce(F,ue){const ge=f.get(ue).get(F);l.get(ue)!==ge&&(s.uniformBlockBinding(ue,ge,F.__bindingPointIndex),l.set(ue,ge))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Z=null,te={},d={},h=new WeakMap,u=[],g=null,p=!1,m=null,x=null,S=null,T=null,M=null,_=null,E=null,A=new $e(0,0,0),w=0,y=!1,v=null,b=null,R=null,D=null,U=null,Re.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:he,bindFramebuffer:ze,drawBuffers:Se,useProgram:Ge,setBlending:I,setMaterial:bt,setFlipSided:We,setCullFace:Ke,setLineWidth:xe,setPolygonOffset:Ne,setScissorTest:Te,activeTexture:Le,bindTexture:gt,unbindTexture:L,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:Ee,texImage3D:Q,updateUBOMapping:be,uniformBlockBinding:ce,texStorage2D:ae,texStorage3D:Me,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:_e,scissor:de,viewport:Ce,reset:Ie}}function Ox(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ze,c=new WeakMap;let d;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return u?new OffscreenCanvas(L,C):ss("canvas")}function p(L,C,G){let $=1;const J=gt(L);if((J.width>G||J.height>G)&&($=G/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const q=Math.floor($*J.width),_e=Math.floor($*J.height);d===void 0&&(d=g(q,_e));const ae=C?g(q,_e):d;return ae.width=q,ae.height=_e,ae.getContext("2d").drawImage(L,0,0,q,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+_e+")."),ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(L,C,G,$,J=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=C;if(C===s.RED&&(G===s.FLOAT&&(q=s.R32F),G===s.HALF_FLOAT&&(q=s.R16F),G===s.UNSIGNED_BYTE&&(q=s.R8)),C===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.R8UI),G===s.UNSIGNED_SHORT&&(q=s.R16UI),G===s.UNSIGNED_INT&&(q=s.R32UI),G===s.BYTE&&(q=s.R8I),G===s.SHORT&&(q=s.R16I),G===s.INT&&(q=s.R32I)),C===s.RG&&(G===s.FLOAT&&(q=s.RG32F),G===s.HALF_FLOAT&&(q=s.RG16F),G===s.UNSIGNED_BYTE&&(q=s.RG8)),C===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RG8UI),G===s.UNSIGNED_SHORT&&(q=s.RG16UI),G===s.UNSIGNED_INT&&(q=s.RG32UI),G===s.BYTE&&(q=s.RG8I),G===s.SHORT&&(q=s.RG16I),G===s.INT&&(q=s.RG32I)),C===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(q=s.RGB16UI),G===s.UNSIGNED_INT&&(q=s.RGB32UI),G===s.BYTE&&(q=s.RGB8I),G===s.SHORT&&(q=s.RGB16I),G===s.INT&&(q=s.RGB32I)),C===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),G===s.UNSIGNED_INT&&(q=s.RGBA32UI),G===s.BYTE&&(q=s.RGBA8I),G===s.SHORT&&(q=s.RGBA16I),G===s.INT&&(q=s.RGBA32I)),C===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),C===s.RGBA){const _e=J?ra:qe.getTransfer($);G===s.FLOAT&&(q=s.RGBA32F),G===s.HALF_FLOAT&&(q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(q=_e===nt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(L,C){let G;return L?C===null||C===Yi||C===ts?G=s.DEPTH24_STENCIL8:C===qn?G=s.DEPTH32F_STENCIL8:C===es&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Yi||C===ts?G=s.DEPTH_COMPONENT24:C===qn?G=s.DEPTH_COMPONENT32F:C===es&&(G=s.DEPTH_COMPONENT16),G}function _(L,C){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==bn&&L.minFilter!==Un?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),w(C),C.isVideoTexture&&c.delete(C)}function A(L){const C=L.target;C.removeEventListener("dispose",A),v(C)}function w(L){const C=n.get(L);if(C.__webglInit===void 0)return;const G=L.source,$=h.get(G);if($){const J=$[C.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(L),Object.keys($).length===0&&h.delete(G)}n.remove(L)}function y(L){const C=n.get(L);s.deleteTexture(C.__webglTexture);const G=L.source,$=h.get(G);delete $[C.__cacheKey],a.memory.textures--}function v(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(C.__webglFramebuffer[$]))for(let J=0;J<C.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(C.__webglFramebuffer[$][J]);else s.deleteFramebuffer(C.__webglFramebuffer[$]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[$])}else{if(Array.isArray(C.__webglFramebuffer))for(let $=0;$<C.__webglFramebuffer.length;$++)s.deleteFramebuffer(C.__webglFramebuffer[$]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let $=0;$<C.__webglColorRenderbuffer.length;$++)C.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[$]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const G=L.textures;for(let $=0,J=G.length;$<J;$++){const q=n.get(G[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(L)}let b=0;function R(){b=0}function D(){const L=b;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),b+=1,L}function U(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function N(L,C){const G=n.get(L);if(L.isVideoTexture&&Te(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,L,C);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+C)}function O(L,C){const G=n.get(L);if(L.version>0&&G.__version!==L.version){re(G,L,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+C)}function B(L,C){const G=n.get(L);if(L.version>0&&G.__version!==L.version){re(G,L,C);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+C)}function z(L,C){const G=n.get(L);if(L.version>0&&G.__version!==L.version){se(G,L,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+C)}const Z={[Qr]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[To]:s.MIRRORED_REPEAT},te={[bn]:s.NEAREST,[Hh]:s.NEAREST_MIPMAP_NEAREST,[ys]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[Ea]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},le={[qh]:s.NEVER,[Qh]:s.ALWAYS,[$h]:s.LESS,[ku]:s.LEQUAL,[Zh]:s.EQUAL,[jh]:s.GEQUAL,[Kh]:s.GREATER,[Jh]:s.NOTEQUAL};function me(L,C){if(C.type===qn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Un||C.magFilter===Ea||C.magFilter===ys||C.magFilter===Bi||C.minFilter===Un||C.minFilter===Ea||C.minFilter===ys||C.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Z[C.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Z[C.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Z[C.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,te[C.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,te[C.minFilter]),C.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,le[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===bn||C.minFilter!==ys&&C.minFilter!==Bi||C.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Re(L,C){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const $=C.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const q=U(C);if(q!==L.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[q].usedTimes++;const _e=J[L.__cacheKey];_e!==void 0&&(J[L.__cacheKey].usedTimes--,_e.usedTimes===0&&y(C)),L.__cacheKey=q,L.__webglTexture=J[q].texture}return G}function Y(L,C,G){return Math.floor(Math.floor(L/G)/C)}function j(L,C,G,$){const q=L.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,G,$,C.data);else{q.sort((Q,de)=>Q.start-de.start);let _e=0;for(let Q=1;Q<q.length;Q++){const de=q[_e],Ce=q[Q],be=de.start+de.count,ce=Y(Ce.start,C.width,4),Ie=Y(de.start,C.width,4);Ce.start<=be+1&&ce===Ie&&Y(Ce.start+Ce.count-1,C.width,4)===ce?de.count=Math.max(de.count,Ce.start+Ce.count-de.start):(++_e,q[_e]=Ce)}q.length=_e+1;const ae=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),Ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let Q=0,de=q.length;Q<de;Q++){const Ce=q[Q],be=Math.floor(Ce.start/4),ce=Math.ceil(Ce.count/4),Ie=be%C.width,F=Math.floor(be/C.width),ue=ce,ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Ie,F,ue,ee,G,$,C.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function re(L,C,G){let $=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&($=s.TEXTURE_3D);const J=Re(L,C),q=C.source;t.bindTexture($,L.__webglTexture,s.TEXTURE0+G);const _e=n.get(q);if(q.version!==_e.__version||J===!0){t.activeTexture(s.TEXTURE0+G);const ae=qe.getPrimaries(qe.workingColorSpace),Me=C.colorSpace===li?null:qe.getPrimaries(C.colorSpace),Ee=C.colorSpace===li||ae===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=p(C.image,!1,i.maxTextureSize);Q=Le(C,Q);const de=r.convert(C.format,C.colorSpace),Ce=r.convert(C.type);let be=T(C.internalFormat,de,Ce,C.colorSpace,C.isVideoTexture);me($,C);let ce;const Ie=C.mipmaps,F=C.isVideoTexture!==!0,ue=_e.__version===void 0||J===!0,ee=q.dataReady,ge=_(C,Q);if(C.isDepthTexture)be=M(C.format===is,C.type),ue&&(F?t.texStorage2D(s.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,be,Q.width,Q.height,0,de,Ce,null));else if(C.isDataTexture)if(Ie.length>0){F&&ue&&t.texStorage2D(s.TEXTURE_2D,ge,be,Ie[0].width,Ie[0].height);for(let ne=0,K=Ie.length;ne<K;ne++)ce=Ie[ne],F?ee&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ce.width,ce.height,de,Ce,ce.data):t.texImage2D(s.TEXTURE_2D,ne,be,ce.width,ce.height,0,de,Ce,ce.data);C.generateMipmaps=!1}else F?(ue&&t.texStorage2D(s.TEXTURE_2D,ge,be,Q.width,Q.height),ee&&j(C,Q,de,Ce)):t.texImage2D(s.TEXTURE_2D,0,be,Q.width,Q.height,0,de,Ce,Q.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){F&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,be,Ie[0].width,Ie[0].height,Q.depth);for(let ne=0,K=Ie.length;ne<K;ne++)if(ce=Ie[ne],C.format!==wn)if(de!==null)if(F){if(ee)if(C.layerUpdates.size>0){const ve=Uc(ce.width,ce.height,C.format,C.type);for(const Ue of C.layerUpdates){const lt=ce.data.subarray(Ue*ve/ce.data.BYTES_PER_ELEMENT,(Ue+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Ue,ce.width,ce.height,1,de,lt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,Q.depth,de,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,be,ce.width,ce.height,Q.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,Q.depth,de,Ce,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,be,ce.width,ce.height,Q.depth,0,de,Ce,ce.data)}else{F&&ue&&t.texStorage2D(s.TEXTURE_2D,ge,be,Ie[0].width,Ie[0].height);for(let ne=0,K=Ie.length;ne<K;ne++)ce=Ie[ne],C.format!==wn?de!==null?F?ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ee&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ce.width,ce.height,de,Ce,ce.data):t.texImage2D(s.TEXTURE_2D,ne,be,ce.width,ce.height,0,de,Ce,ce.data)}else if(C.isDataArrayTexture)if(F){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,be,Q.width,Q.height,Q.depth),ee)if(C.layerUpdates.size>0){const ne=Uc(Q.width,Q.height,C.format,C.type);for(const K of C.layerUpdates){const ve=Q.data.subarray(K*ne/Q.data.BYTES_PER_ELEMENT,(K+1)*ne/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,de,Ce,ve)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ce,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,de,Ce,Q.data);else if(C.isData3DTexture)F?(ue&&t.texStorage3D(s.TEXTURE_3D,ge,be,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ce,Q.data)):t.texImage3D(s.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,de,Ce,Q.data);else if(C.isFramebufferTexture){if(ue)if(F)t.texStorage2D(s.TEXTURE_2D,ge,be,Q.width,Q.height);else{let ne=Q.width,K=Q.height;for(let ve=0;ve<ge;ve++)t.texImage2D(s.TEXTURE_2D,ve,be,ne,K,0,de,Ce,null),ne>>=1,K>>=1}}else if(Ie.length>0){if(F&&ue){const ne=gt(Ie[0]);t.texStorage2D(s.TEXTURE_2D,ge,be,ne.width,ne.height)}for(let ne=0,K=Ie.length;ne<K;ne++)ce=Ie[ne],F?ee&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,de,Ce,ce):t.texImage2D(s.TEXTURE_2D,ne,be,de,Ce,ce);C.generateMipmaps=!1}else if(F){if(ue){const ne=gt(Q);t.texStorage2D(s.TEXTURE_2D,ge,be,ne.width,ne.height)}ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Ce,Q)}else t.texImage2D(s.TEXTURE_2D,0,be,de,Ce,Q);m(C)&&x($),_e.__version=q.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function se(L,C,G){if(C.image.length!==6)return;const $=Re(L,C),J=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const q=n.get(J);if(J.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+G);const _e=qe.getPrimaries(qe.workingColorSpace),ae=C.colorSpace===li?null:qe.getPrimaries(C.colorSpace),Me=C.colorSpace===li||_e===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,Q=C.image[0]&&C.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Ee&&!Q?de[K]=p(C.image[K],!0,i.maxCubemapSize):de[K]=Q?C.image[K].image:C.image[K],de[K]=Le(C,de[K]);const Ce=de[0],be=r.convert(C.format,C.colorSpace),ce=r.convert(C.type),Ie=T(C.internalFormat,be,ce,C.colorSpace),F=C.isVideoTexture!==!0,ue=q.__version===void 0||$===!0,ee=J.dataReady;let ge=_(C,Ce);me(s.TEXTURE_CUBE_MAP,C);let ne;if(Ee){F&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ie,Ce.width,Ce.height);for(let K=0;K<6;K++){ne=de[K].mipmaps;for(let ve=0;ve<ne.length;ve++){const Ue=ne[ve];C.format!==wn?be!==null?F?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ue.width,Ue.height,be,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Ie,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ue.width,Ue.height,be,ce,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Ie,Ue.width,Ue.height,0,be,ce,Ue.data)}}}else{if(ne=C.mipmaps,F&&ue){ne.length>0&&ge++;const K=gt(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ie,K.width,K.height)}for(let K=0;K<6;K++)if(Q){F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,be,ce,de[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,de[K].width,de[K].height,0,be,ce,de[K].data);for(let ve=0;ve<ne.length;ve++){const lt=ne[ve].image[K].image;F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,lt.width,lt.height,be,ce,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Ie,lt.width,lt.height,0,be,ce,lt.data)}}else{F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,ce,de[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,be,ce,de[K]);for(let ve=0;ve<ne.length;ve++){const Ue=ne[ve];F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,be,ce,Ue.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Ie,be,ce,Ue.image[K])}}}m(C)&&x(s.TEXTURE_CUBE_MAP),q.__version=J.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function he(L,C,G,$,J,q){const _e=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),Me=T(G.internalFormat,_e,ae,G.colorSpace),Ee=n.get(C),Q=n.get(G);if(Q.__renderTarget=C,!Ee.__hasExternalTextures){const de=Math.max(1,C.width>>q),Ce=Math.max(1,C.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Me,de,Ce,C.depth,0,_e,ae,null):t.texImage2D(J,q,Me,de,Ce,0,_e,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ne(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,Q.__webglTexture,0,xe(C)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,Q.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,C,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),C.depthBuffer){const $=C.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=M(C.stencilBuffer,J),_e=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=xe(C);Ne(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,q,C.width,C.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,q,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,q,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,L)}else{const $=C.textures;for(let J=0;J<$.length;J++){const q=$[J],_e=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),Me=T(q.internalFormat,_e,ae,q.colorSpace),Ee=xe(C);G&&Ne(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Me,C.width,C.height):Ne(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,Me,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Me,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(C.depthTexture);$.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),N(C.depthTexture,0);const J=$.__webglTexture,q=xe(C);if(C.depthTexture.format===ns)Ne(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(C.depthTexture.format===is)Ne(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ge(L){const C=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),$){const J=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),C.__depthDisposeCallback=J}C.__boundDepthTexture=$}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const $=L.texture.mipmaps;$&&$.length>0?Se(C.__webglFramebuffer[0],L):Se(C.__webglFramebuffer,L)}else if(G){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]===void 0)C.__webglDepthbuffer[$]=s.createRenderbuffer(),ze(C.__webglDepthbuffer[$],L,!1);else{const J=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=C.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else{const $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ze(C.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(L,C,G){const $=n.get(L);C!==void 0&&he($.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ge(L)}function Xe(L){const C=L.texture,G=n.get(L),$=n.get(C);L.addEventListener("dispose",A);const J=L.textures,q=L.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=C.version,a.memory.textures++),q){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let Me=0;Me<C.mipmaps.length;Me++)G.__webglFramebuffer[ae][Me]=s.createFramebuffer()}else G.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<C.mipmaps.length;ae++)G.__webglFramebuffer[ae]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(_e)for(let ae=0,Me=J.length;ae<Me;ae++){const Ee=n.get(J[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&Ne(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const Me=J[ae];G.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const Ee=r.convert(Me.format,Me.colorSpace),Q=r.convert(Me.type),de=T(Me.internalFormat,Ee,Q,Me.colorSpace,L.isXRRenderTarget===!0),Ce=xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),me(s.TEXTURE_CUBE_MAP,C);for(let ae=0;ae<6;ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)he(G.__webglFramebuffer[ae][Me],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me);else he(G.__webglFramebuffer[ae],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(C)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,Me=J.length;ae<Me;ae++){const Ee=J[ae],Q=n.get(Ee);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),me(s.TEXTURE_2D,Ee),he(G.__webglFramebuffer,L,Ee,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),m(Ee)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),me(ae,C),C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)he(G.__webglFramebuffer[Me],L,C,s.COLOR_ATTACHMENT0,ae,Me);else he(G.__webglFramebuffer,L,C,s.COLOR_ATTACHMENT0,ae,0);m(C)&&x(ae),t.unbindTexture()}L.depthBuffer&&Ge(L)}function I(L){const C=L.textures;for(let G=0,$=C.length;G<$;G++){const J=C[G];if(m(J)){const q=S(L),_e=n.get(J).__webglTexture;t.bindTexture(q,_e),x(q),t.unbindTexture()}}}const bt=[],We=[];function Ke(L){if(L.samples>0){if(Ne(L)===!1){const C=L.textures,G=L.width,$=L.height;let J=s.COLOR_BUFFER_BIT;const q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(L),ae=C.length>1;if(ae)for(let Ee=0;Ee<C.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Me=L.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ee=0;Ee<C.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ee]);const Q=n.get(C[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,J,s.NEAREST),l===!0&&(bt.length=0,We.length=0,bt.push(s.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(bt.push(q),We.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<C.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ee]);const Q=n.get(C[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function xe(L){return Math.min(i.maxSamples,L.samples)}function Ne(L){const C=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Te(L){const C=a.render.frame;c.get(L)!==C&&(c.set(L,C),L.update())}function Le(L,C){const G=L.colorSpace,$=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Ar&&G!==li&&(qe.getTransfer(G)===nt?($!==wn||J!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}function gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(f.width=L.naturalWidth||L.width,f.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(f.width=L.displayWidth,f.height=L.displayHeight):(f.width=L.width,f.height=L.height),f}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=Be,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ne}function Bx(s,e){function t(n,i=li){let r;const a=qe.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return s.BYTE;if(n===Iu)return s.SHORT;if(n===es)return s.UNSIGNED_SHORT;if(n===xl)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===ds)return s.HALF_FLOAT;if(n===Nu)return s.ALPHA;if(n===Fu)return s.RGB;if(n===wn)return s.RGBA;if(n===ns)return s.DEPTH_COMPONENT;if(n===is)return s.DEPTH_STENCIL;if(n===Ou)return s.RED;if(n===yl)return s.RED_INTEGER;if(n===Bu)return s.RG;if(n===Ml)return s.RG_INTEGER;if(n===Sl)return s.RGBA_INTEGER;if(n===$s||n===Zs||n===Ks||n===Js)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===wo||n===bo||n===Co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Po||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ro||n===Po)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===Yo||n===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===$o||n===Zo||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Gt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends Ur{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,f=null,c=null,d=null,h=null,u=null,g=null;const p=new Hx,m=t.getContextAttributes();let x=null,S=null;const T=[],M=[],_=new Ze;let E=null;const A=new mn;A.viewport=new ot;const w=new mn;w.viewport=new ot;const y=[A,w],v=new ap;let b=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=T[Y];return j===void 0&&(j=new Xa,T[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=T[Y];return j===void 0&&(j=new Xa,T[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=T[Y];return j===void 0&&(j=new Xa,T[Y]=j),j.getHandSpace()};function D(Y){const j=M.indexOf(Y.inputSource);if(j===-1)return;const re=T[j];re!==void 0&&(re.update(Y.inputSource,Y.frame,f||a),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",N);for(let Y=0;Y<T.length;Y++){const j=M[Y];j!==null&&(M[Y]=null,T[Y].disconnect(j))}b=null,R=null,p.reset(),e.setRenderTarget(x),u=null,h=null,d=null,i=null,S=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(Y){f=Y},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",U),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,se=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?is:ns,se=m.stencil?ts:Yi);const ze={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ze),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new qi(h.textureWidth,h.textureHeight,{format:wn,type:Jn,depthTexture:new Ju(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new qi(u.framebufferWidth,u.framebufferHeight,{format:wn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await i.requestReferenceSpace(o),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(Y){for(let j=0;j<Y.removed.length;j++){const re=Y.removed[j],se=M.indexOf(re);se>=0&&(M[se]=null,T[se].disconnect(re))}for(let j=0;j<Y.added.length;j++){const re=Y.added[j];let se=M.indexOf(re);if(se===-1){for(let ze=0;ze<T.length;ze++)if(ze>=M.length){M.push(re),se=ze;break}else if(M[ze]===null){M[ze]=re,se=ze;break}if(se===-1)break}const he=T[se];he&&he.connect(re)}}const O=new V,B=new V;function z(Y,j,re){O.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const se=O.distanceTo(B),he=j.projectionMatrix.elements,ze=re.projectionMatrix.elements,Se=he[14]/(he[10]-1),Ge=he[14]/(he[10]+1),Be=(he[9]+1)/he[5],Xe=(he[9]-1)/he[5],I=(he[8]-1)/he[0],bt=(ze[8]+1)/ze[0],We=Se*I,Ke=Se*bt,xe=se/(-I+bt),Ne=xe*-I;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ne),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),he[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Te=Se+xe,Le=Ge+xe,gt=We-Ne,L=Ke+(se-Ne),C=Be*Ge/Le*Te,G=Xe*Ge/Le*Te;Y.projectionMatrix.makePerspective(gt,L,C,G,Te,Le),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,re=Y.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(re=p.depthFar)),v.near=w.near=A.near=j,v.far=w.far=A.far=re,(b!==v.near||R!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,R=v.far),A.layers.mask=Y.layers.mask|2,w.layers.mask=Y.layers.mask|4,v.layers.mask=A.layers.mask|w.layers.mask;const se=Y.parent,he=v.cameras;Z(v,se);for(let ze=0;ze<he.length;ze++)Z(he[ze],se);he.length===2?z(v,A,w):v.projectionMatrix.copy(A.projectionMatrix),te(Y,v,se)};function te(Y,j,re){re===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(v)};let le=null;function me(Y,j){if(c=j.getViewerPose(f||a),g=j,c!==null){const re=c.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let se=!1;re.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Se=0;Se<re.length;Se++){const Ge=re[Se];let Be=null;if(u!==null)Be=u.getViewport(Ge);else{const I=d.getViewSubImage(h,Ge);Be=I.viewport,Se===0&&(e.setRenderTargetTextures(S,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(S))}let Xe=y[Se];Xe===void 0&&(Xe=new mn,Xe.layers.enable(Se),Xe.viewport=new ot,y[Se]=Xe),Xe.matrix.fromArray(Ge.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ge.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Be.x,Be.y,Be.width,Be.height),Se===0&&(v.matrix.copy(Xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Xe)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Se=d.getDepthInformation(re[0]);Se&&Se.isValid&&Se.texture&&p.init(e,Se,i.renderState)}}for(let re=0;re<T.length;re++){const se=M[re],he=T[re];se!==null&&he!==void 0&&he.update(se,j,f||a)}le&&le(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Re=new ju;Re.setAnimationLoop(me),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}const Ri=new jn,Gx=new mt;function Wx(s,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Yu(s)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function i(m,x,S,T,M){x.isMeshBasicMaterial||x.isMeshLambertMaterial?r(m,x):x.isMeshToonMaterial?(r(m,x),d(m,x)):x.isMeshPhongMaterial?(r(m,x),c(m,x)):x.isMeshStandardMaterial?(r(m,x),h(m,x),x.isMeshPhysicalMaterial&&u(m,x,M)):x.isMeshMatcapMaterial?(r(m,x),g(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),p(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(a(m,x),x.isLineDashedMaterial&&o(m,x)):x.isPointsMaterial?l(m,x,S,T):x.isSpriteMaterial?f(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Yt&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Yt&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);const S=e.get(x),T=S.envMap,M=S.envMapRotation;T&&(m.envMap.value=T,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Ri)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function a(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function o(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,S,T){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*S,m.scale.value=T*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function f(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function d(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function h(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function u(m,x,S){m.ior.value=x.ior,x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yt&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,x){x.matcap&&(m.matcap.value=x.matcap)}function p(m,x){const S=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xx(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const M=T.program;n.uniformBlockBinding(S,M)}function f(S,T){let M=i[S.id];M===void 0&&(g(S),M=c(S),i[S.id]=M,S.addEventListener("dispose",m));const _=T.program;n.updateUBOMapping(S,_);const E=e.render.frame;r[S.id]!==E&&(h(S),r[S.id]=E)}function c(S){const T=d();S.__bindingPointIndex=T;const M=s.createBuffer(),_=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,_,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const T=i[S.id],M=S.uniforms,_=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,A=M.length;E<A;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,v=w.length;y<v;y++){const b=w[y];if(u(b,E,y,_)===!0){const R=b.__offset,D=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let N=0;N<D.length;N++){const O=D[N],B=p(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,R+U,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,U),U+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(S,T,M,_){const E=S.value,A=T+"_"+M;if(_[A]===void 0)return typeof E=="number"||typeof E=="boolean"?_[A]=E:_[A]=E.clone(),!0;{const w=_[A];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return _[A]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(S){const T=S.uniforms;let M=0;const _=16;for(let A=0,w=T.length;A<w;A++){const y=Array.isArray(T[A])?T[A]:[T[A]];for(let v=0,b=y.length;v<b;v++){const R=y[v],D=Array.isArray(R.value)?R.value:[R.value];for(let U=0,N=D.length;U<N;U++){const O=D[U],B=p(O),z=M%_,Z=z%B.boundary,te=z+Z;M+=Z,te!==0&&_-te<B.storage&&(M+=_-te),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=B.storage}}}const E=M%_;return E>0&&(M+=_-E),S.__size=M,S.__cache={},this}function p(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function x(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:f,dispose:x}}class Yx{constructor(e={}){const{canvas:t=xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),p=new Int32Array(4);let m=null,x=null;const S=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let _=!1;this._outputColorSpace=pn;let E=0,A=0,w=null,y=-1,v=null;const b=new ot,R=new ot;let D=null;const U=new $e(0);let N=0,O=t.width,B=t.height,z=1,Z=null,te=null;const le=new ot(0,0,O,B),me=new ot(0,0,O,B);let Re=!1;const Y=new Zu;let j=!1,re=!1;const se=new mt,he=new mt,ze=new V,Se=new ot,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Xe(){return w===null?z:1}let I=n;function bt(P,k){return t.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",K,!1),I===null){const k="webgl2";if(I=bt(k,P),I===null)throw bt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let We,Ke,xe,Ne,Te,Le,gt,L,C,G,$,J,q,_e,ae,Me,Ee,Q,de,Ce,be,ce,Ie,F;function ue(){We=new ng(I),We.init(),ce=new Bx(I,We),Ke=new Z0(I,We,e,ce),xe=new Fx(I,We),Ke.reverseDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),Ne=new sg(I),Te=new Ex,Le=new Ox(I,We,xe,Te,Ke,ce,Ne),gt=new J0(M),L=new tg(M),C=new fp(I),Ie=new q0(I,C),G=new ig(I,C,Ne,Ie),$=new og(I,G,C,Ne),de=new ag(I,Ke,Le),Me=new K0(Te),J=new Sx(M,gt,L,We,Ke,Ie,Me),q=new Wx(M,Te),_e=new Ax,ae=new Dx(We),Q=new Y0(M,gt,L,xe,$,u,l),Ee=new Ux(M,$,Ke),F=new Xx(I,Ne,Ke,xe),Ce=new $0(I,We,Ne),be=new rg(I,We,Ne),Ne.programs=J.programs,M.capabilities=Ke,M.extensions=We,M.properties=Te,M.renderLists=_e,M.shadowMap=Ee,M.state=xe,M.info=Ne}ue();const ee=new Vx(M,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=We.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=We.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(O,B,!1))},this.getSize=function(P){return P.set(O,B)},this.setSize=function(P,k,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,B=k,t.width=Math.floor(P*z),t.height=Math.floor(k*z),W===!0&&(t.style.width=P+"px",t.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(O*z,B*z).floor()},this.setDrawingBufferSize=function(P,k,W){O=P,B=k,z=W,t.width=Math.floor(P*W),t.height=Math.floor(k*W),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,k,W,X){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,k,W,X),xe.viewport(b.copy(le).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(me)},this.setScissor=function(P,k,W,X){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,k,W,X),xe.scissor(R.copy(me).multiplyScalar(z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(P){xe.setScissorTest(Re=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(P=!0,k=!0,W=!0){let X=0;if(P){let H=!1;if(w!==null){const ie=w.texture.format;H=ie===Sl||ie===Ml||ie===yl}if(H){const ie=w.texture.type,fe=ie===Jn||ie===Yi||ie===es||ie===ts||ie===_l||ie===vl,ye=Q.getClearColor(),pe=Q.getClearAlpha(),Pe=ye.r,De=ye.g,Ae=ye.b;fe?(g[0]=Pe,g[1]=De,g[2]=Ae,g[3]=pe,I.clearBufferuiv(I.COLOR,0,g)):(p[0]=Pe,p[1]=De,p[2]=Ae,p[3]=pe,I.clearBufferiv(I.COLOR,0,p))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Q.dispose(),_e.dispose(),ae.dispose(),Te.dispose(),gt.dispose(),L.dispose(),$.dispose(),Ie.dispose(),F.dispose(),J.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Kl),ee.removeEventListener("sessionend",Jl),Si.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=Ne.autoReset,k=Ee.enabled,W=Ee.autoUpdate,X=Ee.needsUpdate,H=Ee.type;ue(),Ne.autoReset=P,Ee.enabled=k,Ee.autoUpdate=W,Ee.needsUpdate=X,Ee.type=H}function K(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){const k=P.target;k.removeEventListener("dispose",ve),Ue(k)}function Ue(P){lt(P),Te.remove(P)}function lt(P){const k=Te.get(P).programs;k!==void 0&&(k.forEach(function(W){J.releaseProgram(W)}),P.isShaderMaterial&&J.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,W,X,H,ie){k===null&&(k=Ge);const fe=H.isMesh&&H.matrixWorld.determinant()<0,ye=sh(P,k,W,X,H);xe.setMaterial(X,fe);let pe=W.index,Pe=1;if(X.wireframe===!0){if(pe=G.getWireframeAttribute(W),pe===void 0)return;Pe=2}const De=W.drawRange,Ae=W.attributes.position;let He=De.start*Pe,et=(De.start+De.count)*Pe;ie!==null&&(He=Math.max(He,ie.start*Pe),et=Math.min(et,(ie.start+ie.count)*Pe)),pe!==null?(He=Math.max(He,0),et=Math.min(et,pe.count)):Ae!=null&&(He=Math.max(He,0),et=Math.min(et,Ae.count));const xt=et-He;if(xt<0||xt===1/0)return;Ie.setup(H,X,ye,W,pe);let ct,it=Ce;if(pe!==null&&(ct=C.get(pe),it=be,it.setIndex(ct)),H.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*Xe()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(H.isLine){let we=X.linewidth;we===void 0&&(we=1),xe.setLineWidth(we*Xe()),H.isLineSegments?it.setMode(I.LINES):H.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else H.isPoints?it.setMode(I.POINTS):H.isSprite&&it.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const we=H._multiDrawStarts,ht=H._multiDrawCounts,Ye=H._multiDrawCount,Qt=pe?C.get(pe).bytesPerElement:1,Ki=Te.get(X).currentProgram.getUniforms();for(let en=0;en<Ye;en++)Ki.setValue(I,"_gl_DrawID",en),it.render(we[en]/Qt,ht[en])}else if(H.isInstancedMesh)it.renderInstances(He,xt,H.count);else if(W.isInstancedBufferGeometry){const we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ht=Math.min(W.instanceCount,we);it.renderInstances(He,xt,ht)}else it.render(He,xt)};function Je(P,k,W){P.transparent===!0&&P.side===Yn&&P.forceSinglePass===!1?(P.side=Yt,P.needsUpdate=!0,vs(P,k,W),P.side=xi,P.needsUpdate=!0,vs(P,k,W),P.side=Yn):vs(P,k,W)}this.compile=function(P,k,W=null){W===null&&(W=P),x=ae.get(W),x.init(k),T.push(x),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),P!==W&&P.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),x.setupLights();const X=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const ye=ie[fe];Je(ye,W,H),X.add(ye)}else Je(ie,W,H),X.add(ie)}),x=T.pop(),X},this.compileAsync=function(P,k,W=null){const X=this.compile(P,k,W);return new Promise(H=>{function ie(){if(X.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){H(P);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let yn=null;function On(P){yn&&yn(P)}function Kl(){Si.stop()}function Jl(){Si.start()}const Si=new ju;Si.setAnimationLoop(On),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(P){yn=P,ee.setAnimationLoop(P),P===null?Si.stop():Si.start()},ee.addEventListener("sessionstart",Kl),ee.addEventListener("sessionend",Jl),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,w),x=ae.get(P,T.length),x.init(k),T.push(x),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(he),re=this.localClippingEnabled,j=Me.init(this.clippingPlanes,re),m=_e.get(P,S.length),m.init(),S.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ie=M.xr.getDepthSensingMesh();ie!==null&&Ma(ie,k,-1/0,M.sortObjects)}Ma(P,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Z,te),Be=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Be&&Q.addToRenderList(m,P),this.info.render.frame++,j===!0&&Me.beginShadows();const W=x.state.shadowsArray;Ee.render(W,P,k),j===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(x.setupLights(),k.isArrayCamera){const ie=k.cameras;if(H.length>0)for(let fe=0,ye=ie.length;fe<ye;fe++){const pe=ie[fe];Ql(X,H,P,pe)}Be&&Q.render(P);for(let fe=0,ye=ie.length;fe<ye;fe++){const pe=ie[fe];jl(m,P,pe,pe.viewport)}}else H.length>0&&Ql(X,H,P,k),Be&&Q.render(P),jl(m,P,k);w!==null&&A===0&&(Le.updateMultisampleRenderTarget(w),Le.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(M,P,k),Ie.resetDefaultState(),y=-1,v=null,T.pop(),T.length>0?(x=T[T.length-1],j===!0&&Me.setGlobalState(M.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ma(P,k,W,X){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){X&&Se.setFromMatrixPosition(P.matrixWorld).applyMatrix4(he);const fe=$.update(P),ye=P.material;ye.visible&&m.push(P,fe,ye,W,Se.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const fe=$.update(P),ye=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Se.copy(P.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Se.copy(fe.boundingSphere.center)),Se.applyMatrix4(P.matrixWorld).applyMatrix4(he)),Array.isArray(ye)){const pe=fe.groups;for(let Pe=0,De=pe.length;Pe<De;Pe++){const Ae=pe[Pe],He=ye[Ae.materialIndex];He&&He.visible&&m.push(P,fe,He,W,Se.z,Ae)}}else ye.visible&&m.push(P,fe,ye,W,Se.z,null)}}const ie=P.children;for(let fe=0,ye=ie.length;fe<ye;fe++)Ma(ie[fe],k,W,X)}function jl(P,k,W,X){const H=P.opaque,ie=P.transmissive,fe=P.transparent;x.setupLightsView(W),j===!0&&Me.setGlobalState(M.clippingPlanes,W),X&&xe.viewport(b.copy(X)),H.length>0&&_s(H,k,W),ie.length>0&&_s(ie,k,W),fe.length>0&&_s(fe,k,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ql(P,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[X.id]===void 0&&(x.state.transmissionRenderTarget[X.id]=new qi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?ds:Jn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ie=x.state.transmissionRenderTarget[X.id],fe=X.viewport||b;ie.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const ye=M.getRenderTarget(),pe=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(ie),M.getClearColor(U),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Be&&Q.render(W);const De=M.toneMapping;M.toneMapping=pi;const Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),x.setupLightsView(X),j===!0&&Me.setGlobalState(M.clippingPlanes,X),_s(P,W,X),Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let et=0,xt=k.length;et<xt;et++){const ct=k[et],it=ct.object,we=ct.geometry,ht=ct.material,Ye=ct.group;if(ht.side===Yn&&it.layers.test(X.layers)){const Qt=ht.side;ht.side=Yt,ht.needsUpdate=!0,ec(it,W,X,we,ht,Ye),ht.side=Qt,ht.needsUpdate=!0,He=!0}}He===!0&&(Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie))}M.setRenderTarget(ye,pe,Pe),M.setClearColor(U,N),Ae!==void 0&&(X.viewport=Ae),M.toneMapping=De}function _s(P,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ie=P.length;H<ie;H++){const fe=P[H],ye=fe.object,pe=fe.geometry,Pe=fe.group;let De=fe.material;De.allowOverride===!0&&X!==null&&(De=X),ye.layers.test(W.layers)&&ec(ye,k,W,pe,De,Pe)}}function ec(P,k,W,X,H,ie){P.onBeforeRender(M,k,W,X,H,ie),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(M,k,W,X,P,ie),H.transparent===!0&&H.side===Yn&&H.forceSinglePass===!1?(H.side=Yt,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,P,ie),H.side=xi,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,P,ie),H.side=Yn):M.renderBufferDirect(W,k,X,H,P,ie),P.onAfterRender(M,k,W,X,H,ie)}function vs(P,k,W){k.isScene!==!0&&(k=Ge);const X=Te.get(P),H=x.state.lights,ie=x.state.shadowsArray,fe=H.state.version,ye=J.getParameters(P,H.state,ie,k,W),pe=J.getProgramCacheKey(ye);let Pe=X.programs;X.environment=P.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(P.isMeshStandardMaterial?L:gt).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Pe===void 0&&(P.addEventListener("dispose",ve),Pe=new Map,X.programs=Pe);let De=Pe.get(pe);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===fe)return nc(P,ye),De}else ye.uniforms=J.getUniforms(P),P.onBeforeCompile(ye,M),De=J.acquireProgram(ye,pe),Pe.set(pe,De),X.uniforms=ye.uniforms;const Ae=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ae.clippingPlanes=Me.uniform),nc(P,ye),X.needsLights=oh(P),X.lightsStateVersion=fe,X.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMap.value=H.state.directionalShadowMap,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotShadowMap.value=H.state.spotShadowMap,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMap.value=H.state.pointShadowMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function tc(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=Qs.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function nc(P,k){const W=Te.get(P);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function sh(P,k,W,X,H){k.isScene!==!0&&(k=Ge),Le.resetTextureUnits();const ie=k.fog,fe=X.isMeshStandardMaterial?k.environment:null,ye=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ar,pe=(X.isMeshStandardMaterial?L:gt).get(X.envMap||fe),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,et=!!W.morphAttributes.color;let xt=pi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=M.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=ct!==void 0?ct.length:0,we=Te.get(X),ht=x.state.lights;if(j===!0&&(re===!0||P!==v)){const Ot=P===v&&X.id===y;Me.setState(X,P,Ot)}let Ye=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ht.state.version||we.outputColorSpace!==ye||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==pe||X.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Me.numPlanes||we.numIntersection!==Me.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==De||we.morphTargets!==Ae||we.morphNormals!==He||we.morphColors!==et||we.toneMapping!==xt||we.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,we.__version=X.version);let Qt=we.currentProgram;Ye===!0&&(Qt=vs(X,k,H));let Ki=!1,en=!1,Or=!1;const ut=Qt.getUniforms(),un=we.uniforms;if(xe.useProgram(Qt.program)&&(Ki=!0,en=!0,Or=!0),X.id!==y&&(y=X.id,en=!0),Ki||v!==P){xe.buffers.depth.getReversed()?(se.copy(P.projectionMatrix),vd(se),yd(se),ut.setValue(I,"projectionMatrix",se)):ut.setValue(I,"projectionMatrix",P.projectionMatrix),ut.setValue(I,"viewMatrix",P.matrixWorldInverse);const Wt=ut.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,ze.setFromMatrixPosition(P.matrixWorld)),Ke.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,en=!0,Or=!0)}if(H.isSkinnedMesh){ut.setOptional(I,H,"bindMatrix"),ut.setOptional(I,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ut.setValue(I,"boneTexture",Ot.boneTexture,Le))}H.isBatchedMesh&&(ut.setOptional(I,H,"batchingTexture"),ut.setValue(I,"batchingTexture",H._matricesTexture,Le),ut.setOptional(I,H,"batchingIdTexture"),ut.setValue(I,"batchingIdTexture",H._indirectTexture,Le),ut.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ut.setValue(I,"batchingColorTexture",H._colorsTexture,Le));const fn=W.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&de.update(H,W,Qt),(en||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,ut.setValue(I,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=pe,un.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(un.envMapIntensity.value=k.environmentIntensity),en&&(ut.setValue(I,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&ah(un,Or),ie&&X.fog===!0&&q.refreshFogUniforms(un,ie),q.refreshMaterialUniforms(un,X,z,B,x.state.transmissionRenderTarget[P.id]),Qs.upload(I,tc(we),un,Le)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qs.upload(I,tc(we),un,Le),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(I,"center",H.center),ut.setValue(I,"modelViewMatrix",H.modelViewMatrix),ut.setValue(I,"normalMatrix",H.normalMatrix),ut.setValue(I,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ot=X.uniformsGroups;for(let Wt=0,Sa=Ot.length;Wt<Sa;Wt++){const Ei=Ot[Wt];F.update(Ei,Qt),F.bind(Ei,Qt)}}return Qt}function ah(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function oh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,k,W){const X=Te.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Te.get(P.texture).__webglTexture=k,Te.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,k){const W=Te.get(P);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const lh=I.createFramebuffer();this.setRenderTarget=function(P,k=0,W=0){w=P,E=k,A=W;let X=!0,H=null,ie=!1,fe=!1;if(P){const pe=Te.get(P);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(pe.__webglFramebuffer===void 0)Le.setupRenderTarget(P);else if(pe.__hasExternalTextures)Le.rebindTextures(P,Te.get(P.texture).__webglTexture,Te.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ae=P.depthTexture;if(pe.__boundDepthTexture!==Ae){if(Ae!==null&&Te.has(Ae)&&(P.width!==Ae.image.width||P.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(P)}}const Pe=P.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const De=Te.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(De[k])?H=De[k][W]:H=De[k],ie=!0):P.samples>0&&Le.useMultisampledRTT(P)===!1?H=Te.get(P).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[W]:H=De,b.copy(P.viewport),R.copy(P.scissor),D=P.scissorTest}else b.copy(le).multiplyScalar(z).floor(),R.copy(me).multiplyScalar(z).floor(),D=Re;if(W!==0&&(H=lh),xe.bindFramebuffer(I.FRAMEBUFFER,H)&&X&&xe.drawBuffers(P,H),xe.viewport(b),xe.scissor(R),xe.setScissorTest(D),ie){const pe=Te.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,W)}else if(fe){const pe=Te.get(P.texture),Pe=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.__webglTexture,W,Pe)}else if(P!==null&&W!==0){const pe=Te.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(P,k,W,X,H,ie,fe,ye=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe){xe.bindFramebuffer(I.FRAMEBUFFER,pe);try{const Pe=P.textures[ye],De=Pe.format,Ae=Pe.type;if(!Ke.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-X&&W>=0&&W<=P.height-H&&(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(k,W,X,H,ce.convert(De),ce.convert(Ae),ie))}finally{const Pe=w!==null?Te.get(w).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(P,k,W,X,H,ie,fe,ye=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe)if(k>=0&&k<=P.width-X&&W>=0&&W<=P.height-H){xe.bindFramebuffer(I.FRAMEBUFFER,pe);const Pe=P.textures[ye],De=Pe.format,Ae=Pe.type;if(!Ke.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(k,W,X,H,ce.convert(De),ce.convert(Ae),0);const et=w!==null?Te.get(w).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,et);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _d(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(He),I.deleteSync(xt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,k=null,W=0){const X=Math.pow(2,-W),H=Math.floor(P.image.width*X),ie=Math.floor(P.image.height*X),fe=k!==null?k.x:0,ye=k!==null?k.y:0;Le.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,ye,H,ie),xe.unbindTexture()};const ch=I.createFramebuffer(),uh=I.createFramebuffer();this.copyTextureToTexture=function(P,k,W=null,X=null,H=0,ie=null){ie===null&&(H!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let fe,ye,pe,Pe,De,Ae,He,et,xt;const ct=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(W!==null)fe=W.max.x-W.min.x,ye=W.max.y-W.min.y,pe=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,De=W.min.y,Ae=W.isBox3?W.min.z:0;else{const fn=Math.pow(2,-H);fe=Math.floor(ct.width*fn),ye=Math.floor(ct.height*fn),P.isDataArrayTexture?pe=ct.depth:P.isData3DTexture?pe=Math.floor(ct.depth*fn):pe=1,Pe=0,De=0,Ae=0}X!==null?(He=X.x,et=X.y,xt=X.z):(He=0,et=0,xt=0);const it=ce.convert(k.format),we=ce.convert(k.type);let ht;k.isData3DTexture?(Le.setTexture3D(k,0),ht=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Le.setTexture2DArray(k,0),ht=I.TEXTURE_2D_ARRAY):(Le.setTexture2D(k,0),ht=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Ye=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ki=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),Or=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);const ut=P.isDataArrayTexture||P.isData3DTexture,un=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const fn=Te.get(P),Ot=Te.get(k),Wt=Te.get(fn.__renderTarget),Sa=Te.get(Ot.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Wt.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let Ei=0;Ei<pe;Ei++)ut&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(P).__webglTexture,H,Ae+Ei),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(k).__webglTexture,ie,xt+Ei)),I.blitFramebuffer(Pe,De,fe,ye,He,et,fe,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Te.has(P)){const fn=Te.get(P),Ot=Te.get(k);xe.bindFramebuffer(I.READ_FRAMEBUFFER,ch),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,uh);for(let Wt=0;Wt<pe;Wt++)ut?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,H,Ae+Wt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,H),un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,ie,xt+Wt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,ie),H!==0?I.blitFramebuffer(Pe,De,fe,ye,He,et,fe,ye,I.COLOR_BUFFER_BIT,I.NEAREST):un?I.copyTexSubImage3D(ht,ie,He,et,xt+Wt,Pe,De,fe,ye):I.copyTexSubImage2D(ht,ie,He,et,Pe,De,fe,ye);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else un?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(ht,ie,He,et,xt,fe,ye,pe,it,we,ct.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ht,ie,He,et,xt,fe,ye,pe,it,ct.data):I.texSubImage3D(ht,ie,He,et,xt,fe,ye,pe,it,we,ct):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,He,et,fe,ye,it,we,ct.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,He,et,ct.width,ct.height,it,ct.data):I.texSubImage2D(I.TEXTURE_2D,ie,He,et,fe,ye,it,we,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ki),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Or),ie===0&&k.generateMipmaps&&I.generateMipmap(ht),xe.unbindTexture()},this.copyTextureToTexture3D=function(P,k,W=null,X=null,H=0){return xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,W,X,H)},this.initRenderTarget=function(P){Te.get(P).__webglFramebuffer===void 0&&Le.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Le.setTextureCube(P,0):P.isData3DTexture?Le.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Le.setTexture2DArray(P,0):Le.setTexture2D(P,0),xe.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,xe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const su=new yi,Ws=new V;class rf extends sp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Dt(e,3)),this.setAttribute("uv",new Dt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new jo(t,6,1);return this.setAttribute("instanceStart",new ci(n,3,0)),this.setAttribute("instanceEnd",new ci(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new jo(t,6,1);return this.setAttribute("instanceColorStart",new ci(n,3,0)),this.setAttribute("instanceColorEnd",new ci(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Jd(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),su.setFromBufferAttribute(t),this.boundingBox.union(su))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ws.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ws)),Ws.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ws));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ze(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xt.line={uniforms:bl.merge([oe.common,oe.fog,oe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Dl extends Qn{constructor(e){super({type:"LineMaterial",uniforms:bl.clone(Xt.line.uniforms),vertexShader:Xt.line.vertexShader,fragmentShader:Xt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const to=new ot,au=new V,ou=new V,Ct=new ot,Rt=new ot,Rn=new ot,no=new V,io=new mt,Pt=new lp,lu=new V,Xs=new yi,Ys=new Nr,Pn=new ot;let Ln,Hi;function cu(s,e,t){return Pn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Pn.multiplyScalar(1/Pn.w),Pn.x=Hi/t.width,Pn.y=Hi/t.height,Pn.applyMatrix4(s.projectionMatrixInverse),Pn.multiplyScalar(1/Pn.w),Math.abs(Math.max(Pn.x,Pn.y))}function qx(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let o=0,l=a;o<l;o++){Pt.start.fromBufferAttribute(i,o),Pt.end.fromBufferAttribute(r,o),Pt.applyMatrix4(t);const f=new V,c=new V;Ln.distanceSqToSegment(Pt.start,Pt.end,c,f),c.distanceTo(f)<Hi*.5&&e.push({point:c,pointOnLine:f,distance:Ln.origin.distanceTo(c),object:s,face:null,faceIndex:o,uv:null,uv1:null})}}function $x(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,a=s.matrixWorld,o=s.geometry,l=o.attributes.instanceStart,f=o.attributes.instanceEnd,c=Math.min(o.instanceCount,l.count),d=-e.near;Ln.at(1,Rn),Rn.w=1,Rn.applyMatrix4(e.matrixWorldInverse),Rn.applyMatrix4(n),Rn.multiplyScalar(1/Rn.w),Rn.x*=r.x/2,Rn.y*=r.y/2,Rn.z=0,no.copy(Rn),io.multiplyMatrices(e.matrixWorldInverse,a);for(let h=0,u=c;h<u;h++){if(Ct.fromBufferAttribute(l,h),Rt.fromBufferAttribute(f,h),Ct.w=1,Rt.w=1,Ct.applyMatrix4(io),Rt.applyMatrix4(io),Ct.z>d&&Rt.z>d)continue;if(Ct.z>d){const T=Ct.z-Rt.z,M=(Ct.z-d)/T;Ct.lerp(Rt,M)}else if(Rt.z>d){const T=Rt.z-Ct.z,M=(Rt.z-d)/T;Rt.lerp(Ct,M)}Ct.applyMatrix4(n),Rt.applyMatrix4(n),Ct.multiplyScalar(1/Ct.w),Rt.multiplyScalar(1/Rt.w),Ct.x*=r.x/2,Ct.y*=r.y/2,Rt.x*=r.x/2,Rt.y*=r.y/2,Pt.start.copy(Ct),Pt.start.z=0,Pt.end.copy(Rt),Pt.end.z=0;const p=Pt.closestPointToPointParameter(no,!0);Pt.at(p,lu);const m=gd.lerp(Ct.z,Rt.z,p),x=m>=-1&&m<=1,S=no.distanceTo(lu)<Hi*.5;if(x&&S){Pt.start.fromBufferAttribute(l,h),Pt.end.fromBufferAttribute(f,h),Pt.start.applyMatrix4(a),Pt.end.applyMatrix4(a);const T=new V,M=new V;Ln.distanceSqToSegment(Pt.start,Pt.end,M,T),t.push({point:M,pointOnLine:T,distance:Ln.origin.distanceTo(M),object:s,face:null,faceIndex:h,uv:null,uv1:null})}}}class Zx extends je{constructor(e=new rf,t=new Dl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)au.fromBufferAttribute(t,a),ou.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+au.distanceTo(ou);const r=new jo(i,2,1);return e.setAttribute("instanceDistanceStart",new ci(r,1,0)),e.setAttribute("instanceDistanceEnd",new ci(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ln=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Hi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Ys.copy(o.boundingSphere).applyMatrix4(a);let f;if(n)f=Hi*.5;else{const d=Math.max(i.near,Ys.distanceToPoint(Ln.origin));f=cu(i,d,l.resolution)}if(Ys.radius+=f,Ln.intersectsSphere(Ys)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Xs.copy(o.boundingBox).applyMatrix4(a);let c;if(n)c=Hi*.5;else{const d=Math.max(i.near,Xs.distanceToPoint(Ln.origin));c=cu(i,d,l.resolution)}Xs.expandByScalar(c),Ln.intersectsBox(Xs)!==!1&&(n?qx(this,t):$x(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(to),this.material.uniforms.resolution.value.set(to.z,to.w))}}class sf extends rf{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let i=0;i<t;i++)n[6*i]=e[i].x,n[6*i+1]=e[i].y,n[6*i+2]=e[i].z||0,n[6*i+3]=e[i+1].x,n[6*i+4]=e[i+1].y,n[6*i+5]=e[i+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Kx extends Zx{constructor(e=new sf,t=new Dl({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function Wn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function af(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cr={duration:.5,overwrite:!1,delay:0},Ll,Lt,ft,gn=1e8,st=1/gn,tl=Math.PI*2,Jx=tl/4,jx=0,of=Math.sqrt,Qx=Math.cos,e_=Math.sin,wt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},ei=function(e){return typeof e=="number"},Il=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},$t=function(e){return e!==!1},Ul=function(){return typeof window<"u"},qs=function(e){return _t(e)||wt(e)},lf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ft=Array.isArray,nl=/(?:-?\.?\d|\.)+/gi,cf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ro=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uf=/[+-]=-?[.\d]+/,ff=/[^,'"\[\]\s]+/gi,t_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Dn,il,Nl,ln={},la={},hf,df=function(e){return(la=Rr(e,ln))&&jt},Fl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},as=function(e,t){return!t&&console.warn(e)},pf=function(e,t){return e&&(ln[e]=t)&&la&&(la[e]=t)||ln},os=function(){return 0},n_={suppressEvents:!0,isStart:!0,kill:!1},ea={suppressEvents:!0,kill:!1},i_={suppressEvents:!0},Ol={},mi=[],rl={},mf,rn={},so={},uu=30,ta=[],Bl="",zl=function(e){var t=e[0],n,i;if(Fn(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ta.length;i--&&!ta[i].targetTest(t););n=ta[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zf(e[i],n)))||e.splice(i,1);return e},Vi=function(e){return e._gsap||zl(xn(e))[0]._gsap},gf=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():Il(n)&&e.getAttribute&&e.getAttribute(t)||n},Zt=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},vr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},r_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ca=function(){var e=mi.length,t=mi.slice(0),n,i;for(rl={},mi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},kl=function(e){return!!(e._initted||e._startAt||e.add)},xf=function(e,t,n,i){mi.length&&!Lt&&ca(),e.render(t,n,!!(Lt&&t<0&&kl(e))),mi.length&&!Lt&&ca()},_f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ff).length<2?t:wt(e)?e.trim():e},vf=function(e){return e},cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},s_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Rr=function(e,t){for(var n in t)e[n]=t[n];return e},fu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ua=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Kr=function(e){var t=e.parent||dt,n=e.keyframes?s_(Ft(e.keyframes)):cn;if($t(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},a_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},yf=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_a=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},_i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},o_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sl=function(e,t,n,i){return e._startAt&&(Lt?e._startAt.revert(ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},l_=function s(e){return!e||e._ts&&s(e.parent)},hu=function(e){return e._repeat?Pr(e._tTime,e=e.duration()+e._rDelay)*e:0},Pr=function(e,t){var n=Math.floor(e=St(e/t));return e&&n===e?n-1:n},fa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},va=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},ya=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),va(e),n._dirty||Gi(n,e)),e},Mf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fa(e.rawTime(),t),(!t._dur||xs(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),Gi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},In=function(e,t,n,i){return t.parent&&_i(t),t._start=St((ei(n)?n:n||e!==dt?dn(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yf(e,t,"_first","_last",e._sort?"_start":0),al(t)||(e._recent=t),i||Mf(e,t),e._ts<0&&ya(e,e._tTime),e},Sf=function(e,t){return(ln.ScrollTrigger||Fl("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},Ef=function(e,t,n,i,r){if(Vl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mf!==sn.frame)return mi.push(e),e._lazy=[r,i],1},c_=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},al=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},u_=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&c_(e)&&!(!e._initted&&al(e))||(e._ts<0||e._dp._ts<0)&&!al(e))?0:1,o=e._rDelay,l=0,f,c,d;if(o&&e._repeat&&(l=xs(0,e._tDur,t),c=Pr(l,o),e._yoyo&&c&1&&(a=1-a),c!==Pr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Lt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&Ef(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,f=e._pt;f;)f.r(a,f.d),f=f._next;t<0&&sl(e,t,n,!0),e._onUpdate&&!n&&an(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&_i(e,1),!n&&!Lt&&(an(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},f_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Dr=function(e,t,n,i){var r=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:St(a*(r+1)+e._rDelay*r):a,o>0&&!i&&ya(e,e._tTime=e._tDur*o),e.parent&&va(e),n||Gi(e.parent,e),e},du=function(e){return e instanceof Vt?Gi(e):Dr(e,e._dur)},h_={_start:0,endTime:os,totalDuration:os},dn=function s(e,t,n){var i=e.labels,r=e._recent||h_,a=e.duration()>=gn?r.endTime(!1):e._dur,o,l,f;return wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),f=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),f&&n&&(l=l/100*(Ft(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Jr=function(e,t,n){var i=ei(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$t(l.vars.inherit)&&l.parent;a.immediateRender=$t(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Mt(t[0],a,t[r+1])},Mi=function(e,t){return e||e===0?t(e):t},xs=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!wt(e)||!(t=t_.exec(e))?"":t[1]},d_=function(e,t,n){return Mi(n,function(i){return xs(e,t,i)})},ol=[].slice,Tf=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==Dn},p_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return wt(i)&&!t||Tf(i,1)?(r=n).push.apply(r,xn(i)):n.push(i)})||n},xn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):wt(e)&&!n&&(il||!Lr())?ol.call((t||Nl).querySelectorAll(e),0):Ft(e)?p_(e,n):Tf(e)?ol.call(e,0):e?[e]:[]},ll=function(e){return e=xn(e)[0]||as("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xn(t,n.querySelectorAll?n:n===e?as("Invalid scope")||Nl.createElement("div"):e)}},Af=function(e){return e.sort(function(){return .5-Math.random()})},wf=function(e){if(_t(e))return e;var t=Fn(e)?e:{each:e},n=Wi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,f=t.axis,c=i,d=i;return wt(i)?c=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(c=i[0],d=i[1]),function(h,u,g){var p=(g||t).length,m=a[p],x,S,T,M,_,E,A,w,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,gn])[1],!y){for(A=-gn;A<(A=g[y++].getBoundingClientRect().left)&&y<p;);y<p&&y--}for(m=a[p]=[],x=l?Math.min(y,p)*c-.5:i%y,S=y===gn?0:l?p*d/y-.5:i/y|0,A=0,w=gn,E=0;E<p;E++)T=E%y-x,M=S-(E/y|0),m[E]=_=f?Math.abs(f==="y"?M:T):of(T*T+M*M),_>A&&(A=_),_<w&&(w=_);i==="random"&&Af(m),m.max=A-w,m.min=w,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(y>p?p-1:f?f==="y"?p/y:y:Math.max(y,p/y))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=Nt(t.amount||t.each)||0,n=n&&p<0?Ff(n):n}return p=(m[h]-m.min)/m.max||0,St(m.b+(n?n(p):p)*m.v)+m.u}},cl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ei(n)?0:Nt(n))}},bf=function(e,t){var n=Ft(e),i,r;return!n&&Fn(e)&&(i=n=e.radius||gn,e.values?(e=xn(e.values),(r=!ei(e[0]))&&(i*=i)):e=cl(e.increment)),Mi(t,n?_t(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),f=gn,c=0,d=e.length,h,u;d--;)r?(h=e[d].x-o,u=e[d].y-l,h=h*h+u*u):h=Math.abs(e[d]-o),h<f&&(f=h,c=d);return c=!i||f<=i?e[c]:a,r||c===a||ei(a)?c:c+Nt(a)}:cl(e))},Cf=function(e,t,n,i){return Mi(Ft(e)?!t:n===!0?!!(n=0):!i,function(){return Ft(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},m_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},g_=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},x_=function(e,t,n){return Pf(e,t,0,1,n)},Rf=function(e,t,n){return Mi(n,function(i){return e[~~t(i)]})},__=function s(e,t,n){var i=t-e;return Ft(e)?Rf(e,s(0,e.length),t):Mi(n,function(r){return(i+(r-e)%i)%i+e})},v_=function s(e,t,n){var i=t-e,r=i*2;return Ft(e)?Rf(e,s(0,e.length-1),t):Mi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},ls=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?ff:nl),n+=e.substr(t,i-t)+Cf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Pf=function(e,t,n,i,r){var a=t-e,o=i-n;return Mi(r,function(l){return n+((l-e)/a*o||0)})},y_=function s(e,t,n,i){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var a=wt(e),o={},l,f,c,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ft(e)&&!Ft(t)){for(c=[],d=e.length,h=d-2,f=1;f<d;f++)c.push(s(e[f-1],e[f]));d--,r=function(g){g*=d;var p=Math.min(h,~~g);return c[p](g-p)},n=t}else i||(e=Rr(Ft(e)?[]:{},e));if(!c){for(l in t)Hl.call(o,e,l,"get",t[l]);r=function(g){return Xl(g,o)||(a?e.p:e)}}}return Mi(n,r)},pu=function(e,t,n){var i=e.labels,r=gn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},an=function(e,t,n){var i=e.vars,r=i[t],a=ft,o=e._ctx,l,f,c;if(r)return l=i[t+"Params"],f=i.callbackScope||e,n&&mi.length&&ca(),o&&(ft=o),c=l?r.apply(f,l):r.call(f),ft=a,c},Xr=function(e){return _i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&an(e,"onInterrupt"),e},mr,Df=[],Lf=function(e){if(e)if(e=!e.name&&e.default||e,Ul()||e.headless){var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:os,render:Xl,add:Hl,kill:F_,modifier:N_,rawVars:0},a={targetTest:0,get:0,getSetter:Wl,aliases:{},register:0};if(Lr(),e!==i){if(rn[t])return;cn(i,cn(ua(e,r),a)),Rr(i.prototype,Rr(r,ua(e,a))),rn[i.prop=t]=i,e.targetTest&&(ta.push(i),Ol[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pf(t,i),e.register&&e.register(jt,i,Kt)}else Df.push(e)},rt=255,Yr={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},ao=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},If=function(e,t,n){var i=e?ei(e)?[e>>16,e>>8&rt,e&rt]:0:Yr.black,r,a,o,l,f,c,d,h,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Yr[e])i=Yr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(nl),!t)l=+i[0]%360/360,f=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(f+1):c+f-c*f,r=c*2-a,i.length>3&&(i[3]*=1),i[0]=ao(l+1/3,r,a),i[1]=ao(l,r,a),i[2]=ao(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(cf),n&&i.length<4&&(i[3]=1),i}else i=e.match(nl)||Yr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/rt,a=i[1]/rt,o=i[2]/rt,d=Math.max(r,a,o),h=Math.min(r,a,o),c=(d+h)/2,d===h?l=f=0:(u=d-h,f=c>.5?u/(2-d-h):u/(d+h),l=d===r?(a-o)/u+(a<o?6:0):d===a?(o-r)/u+2:(r-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(f*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},Uf=function(e){var t=[],n=[],i=-1;return e.split(gi).forEach(function(r){var a=r.match(pr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},mu=function(e,t,n){var i="",r=(e+i).match(gi),a=t?"hsla(":"rgba(",o=0,l,f,c,d;if(!r)return e;if(r=r.map(function(h){return(h=If(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(c=Uf(e),l=n.c,l.join(i)!==c.c.join(i)))for(f=e.replace(gi,"1").split(pr),d=f.length-1;o<d;o++)i+=f[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!f)for(f=e.split(gi),d=f.length-1;o<d;o++)i+=f[o]+r[o];return i+f[d]},gi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Yr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),M_=/hsl[a]?\(/,Nf=function(e){var t=e.join(" "),n;if(gi.lastIndex=0,gi.test(t))return n=M_.test(t),e[1]=mu(e[1],n),e[0]=mu(e[0],n,Uf(e[1])),!0},cs,sn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,f,c,d,h,u,g=function p(m){var x=s()-i,S=m===!0,T,M,_,E;if((x>e||x<0)&&(n+=x-t),i+=x,_=i-n,T=_-a,(T>0||S)&&(E=++d.frame,h=_-d.time*1e3,d.time=_=_/1e3,a+=T+(T>=r?4:r-T),M=1),S||(l=f(p)),M)for(u=0;u<o.length;u++)o[u](_,h,E,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){hf&&(!il&&Ul()&&(Dn=il=window,Nl=Dn.document||{},ln.gsap=jt,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(jt.version),df(la||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),Df.forEach(Lf)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),f=c||function(m){return setTimeout(m,a-d.time*1e3+1|0)},cs=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),cs=0,f=os},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,x,S){var T=x?function(M,_,E,A){m(M,_,E,A),d.remove(T)}:m;return d.remove(m),o[S?"unshift":"push"](T),Lr(),T},remove:function(m,x){~(x=o.indexOf(m))&&o.splice(x,1)&&u>=x&&u--},_listeners:o},d}(),Lr=function(){return!cs&&sn.wake()},Ve={},S_=/^[\d.\-M][\d.\-,\s]/,E_=/["']/g,T_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,f;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,f=l.substr(0,o),t[i]=isNaN(f)?f.replace(E_,"").trim():+f,i=l.substr(o+1).trim();return t},A_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},w_=function(e){var t=(e+"").split("("),n=Ve[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[T_(t[1])]:A_(e).split(",").map(_f)):Ve._CE&&S_.test(e)?Ve._CE("",e):n},Ff=function(e){return function(t){return 1-e(1-t)}},Of=function s(e,t){for(var n=e._first,i;n;)n instanceof Vt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Wi=function(e,t){return e&&(_t(e)?e:Ve[e]||w_(e))||t},Zi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Zt(e,function(o){Ve[o]=ln[o]=r,Ve[a=o.toLowerCase()]=n;for(var l in r)Ve[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[o+"."+l]=r[l]}),r},Bf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/tl*(Math.asin(1/i)||0),o=function(c){return c===1?1:i*Math.pow(2,-10*c)*e_((c-a)*r)+1},l=e==="out"?o:e==="in"?function(f){return 1-o(1-f)}:Bf(o);return r=tl/r,l.config=function(f,c){return s(e,f,c)},l},lo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Bf(n);return i.config=function(r){return s(e,r)},i};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Zi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Zi("Elastic",oo("in"),oo("out"),oo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Zi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Zi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Zi("Circ",function(s){return-(of(1-s*s)-1)});Zi("Sine",function(s){return s===1?1:-Qx(s*Jx)+1});Zi("Back",lo("in"),lo("out"),lo());Ve.SteppedEase=Ve.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-st;return function(o){return((i*xs(0,a,o)|0)+r)*n}}};Cr.ease=Ve["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Bl+=s+","+s+"Params,"});var zf=function(e,t){this.id=jx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gf,this.set=t?t.getSetter:Wl},us=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Dr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),cs||sn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Dr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Lr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ya(this,n),!r._dp||r.parent||Mf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Pr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?fa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(xs(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),va(this),o_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+($t(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=i_);var i=Lt;return Lt=n,kl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Lt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,du(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,du(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(dn(this,n),$t(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$t(i)),this._dur||(this._zTime=-st),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=_t(n)?n:vf,o=function(){var f=i.then;i.then=null,_t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=f),r(a),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Xr(this)},s}();cn(us.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Vt=function(s){af(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$t(n.sortChildren),dt&&In(n.parent||dt,Wn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Sf(Wn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Jr(0,arguments,this),this},t.from=function(i,r,a){return Jr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Jr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Kr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Mt(i,r,dn(this,a),1),this},t.call=function(i,r,a){return In(this,Mt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,f,c){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=f,a.onCompleteParams=c,a.parent=this,new Mt(i,a,dn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,f,c){return a.runBackwards=1,Kr(a).immediateRender=$t(a.immediateRender),this.staggerTo(i,r,a,o,l,f,c)},t.staggerFromTo=function(i,r,a,o,l,f,c,d){return o.startAt=a,Kr(o).immediateRender=$t(o.immediateRender),this.staggerTo(i,r,o,l,f,c,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,f=this._dur,c=i<=0?0:St(i),d=this._zTime<0!=i<0&&(this._initted||!f),h,u,g,p,m,x,S,T,M,_,E,A;if(this!==dt&&c>l&&i>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&f&&(c+=this._time-o,i+=this._time-o),h=c,M=this._start,T=this._ts,x=!T,d&&(f||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=f+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=St(c%m),c===l?(p=this._repeat,h=f):(_=St(c/m),p=~~_,p&&p===_&&(h=f,p--),h>f&&(h=f)),_=Pr(this._tTime,m),!o&&this._tTime&&_!==p&&this._tTime-_*m-this._dur<=0&&(_=p),E&&p&1&&(h=f-h,A=1),p!==_&&!this._lock){var w=E&&_&1,y=w===(E&&p&1);if(p<_&&(w=!w),o=w?0:c%f?f:c,this._lock=1,this.render(o||(A?0:St(p*m)),r,!f)._lock=0,this._tTime=c,!r&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,l=this._tDur,y&&(this._lock=2,o=w?f:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Of(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=f_(this,St(o),St(h)),S&&(c-=h-(h=S._start))),this._tTime=c,this._time=h,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&c&&!r&&!_&&(an(this,"onStart"),this._tTime!==c))return this;if(h>=o&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||h>=u._start)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,r,a);if(u.render(u._ts>0?(h-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(h-u._start)*u._ts,r,a),h!==this._time||!this._ts&&!x){S=0,g&&(c+=this._zTime=-st);break}}u=g}else{u=this._last;for(var v=i<0?i:h;u;){if(g=u._prev,(u._act||v<=u._end)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,r,a);if(u.render(u._ts>0?(v-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(v-u._start)*u._ts,r,a||Lt&&kl(u)),h!==this._time||!this._ts&&!x){S=0,g&&(c+=this._zTime=v?-st:st);break}}u=g}}if(S&&!r&&(this.pause(),S.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=M,va(this),this.render(i,r,a);this._onUpdate&&!r&&an(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(M===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!f)&&(c===l&&this._ts>0||!c&&this._ts<0)&&_i(this,1),!r&&!(i<0&&!o)&&(c||o||!l)&&(an(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ei(r)||(r=dn(this,r,i)),!(i instanceof us)){if(Ft(i))return i.forEach(function(o){return a.add(o,r)}),this;if(wt(i))return this.addLabel(i,r);if(_t(i))i=Mt.delayedCall(0,i);else return this}return this!==i?In(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],f=this._first;f;)f._start>=o&&(f instanceof Mt?r&&l.push(f):(a&&l.push(f),i&&l.push.apply(l,f.getChildren(!0,r,a)))),f=f._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return wt(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(i.parent===this&&_a(this,i),i===this._recent&&(this._recent=this._last),Gi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=dn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Mt.delayedCall(0,r||os,a);return o.data="isPause",this._hasPause=1,In(this,o,dn(this,i))},t.removePause=function(i){var r=this._first;for(i=dn(this,i);r;)r._start===i&&r.data==="isPause"&&_i(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ui!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=xn(i),l=this._first,f=ei(r),c;l;)l instanceof Mt?r_(l._targets,o)&&(f?(!ui||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(c=l.getTweensOf(o,r)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=dn(a,i),l=r,f=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,u,g=Mt.to(a,cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(f&&"time"in f?f.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!u){var m=r.duration||Math.abs((o-(f&&"time"in f?f.time:a._time))/a.timeScale());g._dur!==m&&Dr(g,m,0,1).render(g._time,!0,!0),u=1}c&&c.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,cn({startAt:{time:dn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),pu(this,dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),pu(this,dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,f;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(f in l)l[f]>=a&&(l[f]+=i);return Gi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=gn,f,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)f=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(r-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=f;Dr(a,a===dt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(dt._ts&&(xf(dt,fa(i,dt)),mf=sn.frame),sn.frame>=uu){uu+=on.autoSleep||120;var r=dt._first;if((!r||!r._ts)&&on.autoSleep&&sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||sn.sleep()}}},e}(us);cn(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var b_=function(e,t,n,i,r,a,o){var l=new Kt(this._pt,e,t,0,1,Xf,null,r),f=0,c=0,d,h,u,g,p,m,x,S;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=ls(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),h=n.match(ro)||[];d=ro.exec(i);)g=d[0],p=i.substring(f,d.index),u?u=(u+1)%5:p.substr(-5)==="rgba("&&(u=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:m,c:g.charAt(1)==="="?vr(m,g)-m:parseFloat(g)-m,m:u&&u<4?Math.round:0},f=ro.lastIndex);return l.c=f<i.length?i.substring(f,i.length):"",l.fp=o,(uf.test(i)||x)&&(l.e=0),this._pt=l,l},Hl=function(e,t,n,i,r,a,o,l,f,c){_t(i)&&(i=i(r||0,e,a));var d=e[t],h=n!=="get"?n:_t(d)?f?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():d,u=_t(d)?f?L_:Gf:Gl,g;if(wt(i)&&(~i.indexOf("random(")&&(i=ls(i)),i.charAt(1)==="="&&(g=vr(h,i)+(Nt(h)||0),(g||g===0)&&(i=g))),!c||h!==i||ul)return!isNaN(h*i)&&i!==""?(g=new Kt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?U_:Wf,0,u),f&&(g.fp=f),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Fl(t,i),b_.call(this,e,t,h,i,u,l||on.stringFilter,f))},C_=function(e,t,n,i,r){if(_t(e)&&(e=jr(e,r,t,n,i)),!Fn(e)||e.style&&e.nodeType||Ft(e)||lf(e))return wt(e)?jr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=jr(e[o],r,t,n,i);return a},kf=function(e,t,n,i,r,a){var o,l,f,c;if(rn[e]&&(o=new rn[e]).init(r,o.rawVars?t[e]:C_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Kt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==mr))for(f=n._ptLookup[n._targets.indexOf(r)],c=o._props.length;c--;)f[o._props[c]]=l;return o},ui,ul,Vl=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,f=i.onUpdate,c=i.runBackwards,d=i.yoyoEase,h=i.keyframes,u=i.autoRevert,g=e._dur,p=e._startAt,m=e._targets,x=e.parent,S=x&&x.data==="nested"?x.vars.targets:m,T=e._overwrite==="auto"&&!Ll,M=e.timeline,_,E,A,w,y,v,b,R,D,U,N,O,B;if(M&&(!h||!r)&&(r="none"),e._ease=Wi(r,Cr.ease),e._yEase=d?Ff(Wi(d===!0?r:d,Cr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(R=m[0]?Vi(m[0]).harness:0,O=R&&i[R.prop],_=ua(i,Ol),p&&(p._zTime<0&&p.progress(1),t<0&&c&&o&&!u?p.render(-1,!0):p.revert(c&&g?ea:n_),p._lazy=0),a){if(_i(e._startAt=Mt.set(m,cn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!p&&$t(l),startAt:null,delay:0,onUpdate:f&&function(){return an(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!o&&!u)&&e._startAt.revert(ea),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(c&&g&&!p){if(t&&(o=!1),A=cn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&$t(l),immediateRender:o,stagger:0,parent:x},_),O&&(A[R.prop]=O),_i(e._startAt=Mt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(ea):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$t(l)||l&&!g,E=0;E<m.length;E++){if(y=m[E],b=y._gsap||zl(m)[E]._gsap,e._ptLookup[E]=U={},rl[b.id]&&mi.length&&ca(),N=S===m?E:S.indexOf(y),R&&(D=new R).init(y,O||_,e,N,S)!==!1&&(e._pt=w=new Kt(e._pt,y,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(z){U[z]=w}),D.priority&&(v=1)),!R||O)for(A in _)rn[A]&&(D=kf(A,_,e,N,y,S))?D.priority&&(v=1):U[A]=w=Hl.call(e,y,A,"get",_[A],N,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),T&&e._pt&&(ui=e,dt.killTweensOf(y,U,e.globalTime(t)),B=!e.parent,ui=0),e._pt&&l&&(rl[b.id]=1)}v&&Yf(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&M.render(gn,!0,!0)},R_=function(e,t,n,i,r,a,o,l){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,u;if(!f)for(f=e._ptCache[t]=[],h=e._ptLookup,u=e._targets.length;u--;){if(c=h[u][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ul=1,e.vars[t]="+=0",Vl(e,o),ul=0,l?as(t+" not eligible for reset"):1;f.push(c)}for(u=f.length;u--;)d=f[u],c=d._pt||d,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,d.e&&(d.e=vt(n)+Nt(d.e)),d.b&&(d.b=c.s+Nt(d.b))},P_=function(e,t){var n=e[0]?Vi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Rr({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},D_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Ft(t))o=n[e]||(n[e]=[]),t.forEach(function(l,f){return o.push({t:f/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},jr=function(e,t,n,i,r){return _t(e)?e.call(t,n,i,r):wt(e)&&~e.indexOf("random(")?ls(e):e},Hf=Bl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vf={};Zt(Hf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Vf[s]=1});var Mt=function(s){af(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Kr(i))||this;var l=o.vars,f=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,u=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,x=l.yoyoEase,S=i.parent||dt,T=(Ft(n)||lf(n)?ei(n[0]):"length"in i)?[n]:xn(n),M,_,E,A,w,y,v,b;if(o._targets=T.length?zl(T):as("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,g||h||qs(f)||qs(c)){if(i=o.vars,M=o.timeline=new Vt({data:"nested",defaults:p||{},targets:S&&S.data==="nested"?S.vars.targets:T}),M.kill(),M.parent=M._dp=Wn(o),M._start=0,h||qs(f)||qs(c)){if(A=T.length,v=h&&wf(h),Fn(h))for(w in h)~Hf.indexOf(w)&&(b||(b={}),b[w]=h[w]);for(_=0;_<A;_++)E=ua(i,Vf),E.stagger=0,x&&(E.yoyoEase=x),b&&Rr(E,b),y=T[_],E.duration=+jr(f,Wn(o),_,y,T),E.delay=(+jr(c,Wn(o),_,y,T)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=c=E.delay,o._start+=c,E.delay=0),M.to(y,E,v?v(_,y,T):0),M._ease=Ve.none;M.duration()?f=c=0:o.timeline=0}else if(g){Kr(cn(M.vars.defaults,{ease:"none"})),M._ease=Wi(g.ease||i.ease||"none");var R=0,D,U,N;if(Ft(g))g.forEach(function(O){return M.to(T,O,">")}),M.duration();else{E={};for(w in g)w==="ease"||w==="easeEach"||D_(w,g[w],E,g.easeEach);for(w in E)for(D=E[w].sort(function(O,B){return O.t-B.t}),R=0,_=0;_<D.length;_++)U=D[_],N={ease:U.e,duration:(U.t-(_?D[_-1].t:0))/100*f},N[w]=U.v,M.to(T,N,R),R+=N.duration;M.duration()<f&&M.to({},{duration:f-M.duration()})}}f||o.duration(f=M.duration())}else o.timeline=0;return u===!0&&!Ll&&(ui=Wn(o),dt.killTweensOf(T),ui=0),In(S,Wn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!f&&!g&&o._start===St(S._time)&&$t(d)&&l_(Wn(o))&&S.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-c)||0)),m&&Sf(Wn(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,f=this._dur,c=i<0,d=i>l-st&&!c?l:i<st?0:i,h,u,g,p,m,x,S,T,M;if(!f)u_(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,T=this.timeline,this._repeat){if(p=f+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+i,r,a);if(h=St(d%p),d===l?(g=this._repeat,h=f):(m=St(d/p),g=~~m,g&&g===m?(h=f,g--):h>f&&(h=f)),x=this._yoyo&&g&1,x&&(M=this._yEase,h=f-h),m=Pr(this._tTime,p),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(T&&this._yEase&&Of(T,x),this.vars.repeatRefresh&&!x&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(St(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ef(this,c?i:h,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(f!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(h/f),this._from&&(this.ratio=S=1-S),!o&&d&&!r&&!m&&(an(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(S,u.d),u=u._next;T&&T.render(i<0?i:T._dur*T._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(c&&sl(this,i,r,a),an(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&an(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&sl(this,i,!0,!0),(i||!f)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_i(this,1),!r&&!(c&&!o)&&(d||o||x)&&(an(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){cs||sn.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vl(this,f),c=this._ease(f/this._dur),R_(this,i,r,a,o,c,f,l)?this.resetTo(i,r,a,o,1):(ya(this,0),this.parent||yf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Lt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ui&&ui.vars.overwrite!==!0)._first||Xr(this),this.parent&&a!==this.timeline.totalDuration()&&Dr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?xn(i):o,f=this._ptLookup,c=this._pt,d,h,u,g,p,m,x;if((!r||r==="all")&&a_(o,l))return r==="all"&&(this._pt=0),Xr(this);for(d=this._op=this._op||[],r!=="all"&&(wt(r)&&(p={},Zt(r,function(S){return p[S]=1}),r=p),r=P_(o,r)),x=o.length;x--;)if(~l.indexOf(o[x])){h=f[x],r==="all"?(d[x]=r,g=h,u={}):(u=d[x]=d[x]||{},g=r);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&_a(this,m,"_pt"),delete h[p]),u!=="all"&&(u[p]=1)}return this._initted&&!this._pt&&c&&Xr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Jr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Jr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return dt.killTweensOf(i,r,a)},e}(us);cn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(s){Mt[s]=function(){var e=new Vt,t=ol.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Gl=function(e,t,n){return e[t]=n},Gf=function(e,t,n){return e[t](n)},L_=function(e,t,n,i){return e[t](i.fp,n)},I_=function(e,t,n){return e.setAttribute(t,n)},Wl=function(e,t){return _t(e[t])?Gf:Il(e[t])&&e.setAttribute?I_:Gl},Wf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},U_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},N_=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},F_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_a(this,t,"_pt"):t.dep||(n=1),t=i;return!n},O_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Kt=function(){function s(t,n,i,r,a,o,l,f,c){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Wf,this.d=l||this,this.set=f||Gl,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=O_,this.m=n,this.mt=r,this.tween=i},s}();Zt(Bl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ol[s]=1});ln.TweenMax=ln.TweenLite=Mt;ln.TimelineLite=ln.TimelineMax=Vt;dt=new Vt({sortChildren:!1,defaults:Cr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=Nf;var Xi=[],na={},B_=[],gu=0,z_=0,co=function(e){return(na[e]||B_).map(function(t){return t()})},fl=function(){var e=Date.now(),t=[];e-gu>2&&(co("matchMediaInit"),Xi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,f;for(o in i)a=Dn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,f=1);f&&(n.revert(),l&&t.push(n))}),co("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),gu=e,co("matchMedia"))},qf=function(){function s(t,n){this.selector=n&&ll(n),this.data=[],this._r=[],this.isReverted=!1,this.id=z_++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){_t(n)&&(r=i,i=n,n=_t);var a=this,o=function(){var f=ft,c=a.selector,d;return f&&f!==a&&f.data.push(a),r&&(a.selector=ll(r)),ft=a,d=i.apply(a,arguments),_t(d)&&a._r.push(d),ft=f,a.selector=c,a.isReverted=!1,d};return a.last=o,n===_t?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Mt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,f;l--;)f=r.data[l],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=r.data.length;l--;)f=r.data[l],f instanceof Vt?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof Mt)&&f.revert&&f.revert(n);r._r.forEach(function(c){return c(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Xi.length;a--;)Xi[a].id===this.id&&Xi.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),k_=function(){function s(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Fn(n)||(n={matches:n});var a=new qf(0,r||this.scope),o=a.conditions={},l,f,c;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(f in n)f==="all"?c=1:(l=Dn.matchMedia(n[f]),l&&(Xi.indexOf(a)<0&&Xi.push(a),(o[f]=l.matches)&&(c=1),l.addListener?l.addListener(fl):l.addEventListener("change",fl)));return c&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ha={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Lf(i)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){wt(e)&&(e=xn(e)[0]);var r=Vi(e||{}).get,a=n?vf:_f;return n==="native"&&(n=""),e&&(t?a((rn[t]&&rn[t].get||r)(e,t,n,i)):function(o,l,f){return a((rn[o]&&rn[o].get||r)(e,o,l,f))})},quickSetter:function(e,t,n){if(e=xn(e),e.length>1){var i=e.map(function(c){return jt.quickSetter(c,t,n)}),r=i.length;return function(c){for(var d=r;d--;)i[d](c)}}e=e[0]||{};var a=rn[t],o=Vi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,f=a?function(c){var d=new a;mr._pt=0,d.init(e,n?c+n:c,mr,0,[e]),d.render(1,d),mr._pt&&Xl(1,mr)}:o.set(e,l);return a?f:function(c){return f(e,l,n?c+n:c,o,1)}},quickTo:function(e,t,n){var i,r=jt.to(e,cn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,f,c){return r.resetTo(t,l,f,c)};return a.tween=r,a},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wi(e.ease,Cr.ease)),fu(Cr,e||{})},config:function(e){return fu(on,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!rn[o]&&!ln[o]&&as(t+" effect requires "+o+" plugin.")}),so[t]=function(o,l,f){return n(xn(o),cn(l||{},r),f)},a&&(Vt.prototype[t]=function(o,l,f){return this.add(so[t](o,Fn(l)?l:(f=l)&&{},this),f)})},registerEase:function(e,t){Ve[e]=Wi(t)},parseEase:function(e,t){return arguments.length?Wi(e,t):Ve},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),i,r;for(n.smoothChildTiming=$t(e.smoothChildTiming),dt.remove(n),n._dp=0,n._time=n._tTime=dt._time,i=dt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Mt&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=r;return In(dt,n,0),n},context:function(e,t){return e?new qf(e,t):ft},matchMedia:function(e){return new k_(e)},matchMediaRefresh:function(){return Xi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||fl()},addEventListener:function(e,t){var n=na[e]||(na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:__,wrapYoyo:v_,distribute:wf,random:Cf,snap:bf,normalize:x_,getUnit:Nt,clamp:d_,splitColor:If,toArray:xn,selector:ll,mapRange:Pf,pipe:m_,unitize:g_,interpolate:y_,shuffle:Af},install:df,effects:so,ticker:sn,updateRoot:Vt.updateRoot,plugins:rn,globalTimeline:dt,core:{PropTween:Kt,globals:pf,Tween:Mt,Timeline:Vt,Animation:us,getCache:Vi,_removeLinkedListItem:_a,reverting:function(){return Lt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Ll=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ha[s]=Mt[s]});sn.add(Vt.updateRoot);mr=ha.to({},{duration:0});var H_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},V_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=H_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},uo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,f;if(wt(r)&&(l={},Zt(r,function(c){return l[c]=1}),r=l),t){l={};for(f in r)l[f]=t(r[f]);r=l}V_(o,r)}}}},jt=ha.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Lt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uo("roundProps",cl),uo("modifiers"),uo("snap",bf))||ha;Mt.version=Vt.version=jt.version="3.13.0";hf=1;Ul()&&Lr();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xu,fi,yr,Yl,ki,_u,ql,G_=function(){return typeof window<"u"},ti={},Ui=180/Math.PI,Mr=Math.PI/180,fr=Math.atan2,vu=1e8,$l=/([A-Z])/g,W_=/(left|right|width|margin|padding|x)/i,X_=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},q_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$f=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Z_=function(e,t,n){return e.style[t]=n},K_=function(e,t,n){return e.style.setProperty(t,n)},J_=function(e,t,n){return e._gsap[t]=n},j_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Q_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},ev=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},pt="transform",Jt=pt+"Origin",tv=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in ti&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xn(i,o)}):this.tfm[e]=a.x?a[e]:Xn(i,e),e===Jt&&(this.tfm.zOrigin=a.zOrigin);else return Nn.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(pt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jt,t,"")),e=pt}(r||t)&&this.props.push(e,t,r[e])},Kf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace($l,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ql(),(!r||!r.isStart)&&!n[pt]&&(Kf(n),i.zOrigin&&n[Jt]&&(n[Jt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jf=function(e,t){var n={target:e,props:[],revert:nv,save:tv};return e._gsap||jt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},jf,dl=function(e,t){var n=fi.createElementNS?fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fi.createElement(e);return n&&n.style?n:fi.createElement(e)},_n=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace($l,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ir(t)||t,1)||""},yu="O,Moz,ms,Ms,Webkit".split(","),Ir=function(e,t,n){var i=t||ki,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(yu[a]+e in r););return a<0?null:(a===3?"ms":a>=0?yu[a]:"")+e},pl=function(){G_()&&window.document&&(xu=window,fi=xu.document,yr=fi.documentElement,ki=dl("div")||{style:{}},dl("div"),pt=Ir(pt),Jt=pt+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jf=!!Ir("perspective"),ql=jt.core.reverting,Yl=1)},Mu=function(e){var t=e.ownerSVGElement,n=dl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),yr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),yr.removeChild(n),r},Su=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qf=function(e){var t,n;try{t=e.getBBox()}catch{t=Mu(e),n=1}return t&&(t.width||t.height)||n||(t=Mu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Su(e,["x","cx","x1"])||0,y:+Su(e,["y","cy","y1"])||0,width:0,height:0}:t},eh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qf(e))},$i=function(e,t){if(t){var n=e.style,i;t in ti&&t!==Jt&&(t=pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace($l,"-$1").toLowerCase())):n.removeAttribute(t)}},hi=function(e,t,n,i,r,a){var o=new Kt(e._pt,t,n,0,1,a?Zf:$f);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Eu={deg:1,rad:1,turn:1},iv={grid:1,flex:1},vi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ki.style,l=W_.test(t),f=e.tagName.toLowerCase()==="svg",c=(f?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",u=i==="%",g,p,m,x;if(i===a||!r||Eu[i]||Eu[a])return r;if(a!=="px"&&!h&&(r=s(e,t,n,"px")),x=e.getCTM&&eh(e),(u||a==="%")&&(ti[t]||~t.indexOf("adius")))return g=x?e.getBBox()[l?"width":"height"]:e[c],vt(u?r/g*d:r/100*g);if(o[l?"width":"height"]=d+(h?a:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!f?e:e.parentNode,x&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===fi||!p.appendChild)&&(p=fi.body),m=p._gsap,m&&u&&m.width&&l&&m.time===sn.time&&!m.uncache)return vt(r/m.width*d);if(u&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,g=e[c],S?e.style[t]=S:$i(e,t)}else(u||a==="%")&&!iv[_n(p,"display")]&&(o.position=_n(e,"position")),p===e&&(o.position="static"),p.appendChild(ki),g=ki[c],p.removeChild(ki),o.position="absolute";return l&&u&&(m=Vi(p),m.time=sn.time,m.width=p[c]),vt(h?g*r/d:g&&r?d/g*r:0)},Xn=function(e,t,n,i){var r;return Yl||pl(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ti[t]&&t!=="transform"?(r=hs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:pa(_n(e,Jt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=da[t]&&da[t](e,t,n)||_n(e,t)||gf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?vi(e,t,r,n)+n:r},rv=function(e,t,n,i){if(!n||n==="none"){var r=Ir(t,e,1),a=r&&_n(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=_n(e,"borderTopColor"))}var o=new Kt(this._pt,e.style,t,0,1,Xf),l=0,f=0,c,d,h,u,g,p,m,x,S,T,M,_;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_n(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=_n(e,t)||i,p?e.style[t]=p:$i(e,t)),c=[n,i],Nf(c),n=c[0],i=c[1],h=n.match(pr)||[],_=i.match(pr)||[],_.length){for(;d=pr.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(p=h[f++]||"")&&(u=parseFloat(p)||0,M=p.substr((u+"").length),m.charAt(1)==="="&&(m=vr(u,m)+M),x=parseFloat(m),T=m.substr((x+"").length),l=pr.lastIndex-T.length,T||(T=T||on.units[t]||M,l===i.length&&(i+=T,o.e+=T)),M!==T&&(u=vi(e,t,p,T)||0),o._pt={_next:o._pt,p:S||f===1?S:",",s:u,c:x-u,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Zf:$f;return uf.test(i)&&(o.e=0),this._pt=o,o},Tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tu[n]||n,t[1]=Tu[i]||i,t.join(" ")},av=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,f;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),f=r.length;--f>-1;)o=r[f],ti[o]&&(l=1,o=o==="transformOrigin"?Jt:pt),$i(n,o);l&&($i(n,pt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",hs(n,1),a.uncache=1,Kf(i)))}},da={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Kt(e._pt,t,n,0,0,av);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},fs=[1,0,0,1,0,0],th={},nh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Au=function(e){var t=_n(e,pt);return nh(t)?fs:t.substr(7).match(cf).map(vt)},Zl=function(e,t){var n=e._gsap||Vi(e),i=e.style,r=Au(e),a,o,l,f;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?fs:r):(r===fs&&!e.offsetParent&&e!==yr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(f=1,o=e.nextElementSibling,yr.appendChild(e)),r=Au(e),l?i.display=l:$i(e,"display"),f&&(o?a.insertBefore(e,o):a?a.appendChild(e):yr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ml=function(e,t,n,i,r,a){var o=e._gsap,l=r||Zl(e,!0),f=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,u=l[0],g=l[1],p=l[2],m=l[3],x=l[4],S=l[5],T=t.split(" "),M=parseFloat(T[0])||0,_=parseFloat(T[1])||0,E,A,w,y;n?l!==fs&&(A=u*m-g*p)&&(w=M*(m/A)+_*(-p/A)+(p*S-m*x)/A,y=M*(-g/A)+_*(u/A)-(u*S-g*x)/A,M=w,_=y):(E=Qf(e),M=E.x+(~T[0].indexOf("%")?M/100*E.width:M),_=E.y+(~(T[1]||T[0]).indexOf("%")?_/100*E.height:_)),i||i!==!1&&o.smooth?(x=M-f,S=_-c,o.xOffset=d+(x*u+S*p)-x,o.yOffset=h+(x*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=_,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Jt]="0px 0px",a&&(hi(a,o,"xOrigin",f,M),hi(a,o,"yOrigin",c,_),hi(a,o,"xOffset",d,o.xOffset),hi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+_)},hs=function(e,t){var n=e._gsap||new zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),f=_n(e,Jt)||"0",c,d,h,u,g,p,m,x,S,T,M,_,E,A,w,y,v,b,R,D,U,N,O,B,z,Z,te,le,me,Re,Y,j;return c=d=h=p=m=x=S=T=M=0,u=g=1,n.svg=!!(e.getCTM&&eh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),i.scale=i.rotate=i.translate="none"),A=Zl(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),f=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),ml(e,B||f,!!B||n.originIsAbsolute,n.smooth!==!1,A)),_=n.xOrigin||0,E=n.yOrigin||0,A!==fs&&(b=A[0],R=A[1],D=A[2],U=A[3],c=N=A[4],d=O=A[5],A.length===6?(u=Math.sqrt(b*b+R*R),g=Math.sqrt(U*U+D*D),p=b||R?fr(R,b)*Ui:0,S=D||U?fr(D,U)*Ui+p:0,S&&(g*=Math.abs(Math.cos(S*Mr))),n.svg&&(c-=_-(_*b+E*D),d-=E-(_*R+E*U))):(j=A[6],Re=A[7],te=A[8],le=A[9],me=A[10],Y=A[11],c=A[12],d=A[13],h=A[14],w=fr(j,me),m=w*Ui,w&&(y=Math.cos(-w),v=Math.sin(-w),B=N*y+te*v,z=O*y+le*v,Z=j*y+me*v,te=N*-v+te*y,le=O*-v+le*y,me=j*-v+me*y,Y=Re*-v+Y*y,N=B,O=z,j=Z),w=fr(-D,me),x=w*Ui,w&&(y=Math.cos(-w),v=Math.sin(-w),B=b*y-te*v,z=R*y-le*v,Z=D*y-me*v,Y=U*v+Y*y,b=B,R=z,D=Z),w=fr(R,b),p=w*Ui,w&&(y=Math.cos(w),v=Math.sin(w),B=b*y+R*v,z=N*y+O*v,R=R*y-b*v,O=O*y-N*v,b=B,N=z),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,x=180-x),u=vt(Math.sqrt(b*b+R*R+D*D)),g=vt(Math.sqrt(O*O+j*j)),w=fr(N,O),S=Math.abs(w)>2e-4?w*Ui:0,M=Y?1/(Y<0?-Y:Y):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!nh(_n(e,pt)),B&&e.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(u*=-1,S+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=vt(u),n.scaleY=vt(g),n.rotation=vt(p)+o,n.rotationX=vt(m)+o,n.rotationY=vt(x)+o,n.skewX=S+o,n.skewY=T+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Jt]=pa(f)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?lv:jf?ih:ov,n.uncache=0,n},pa=function(e){return(e=e.split(" "))[0]+" "+e[1]},fo=function(e,t,n){var i=Nt(t);return vt(parseFloat(t)+parseFloat(vi(e,"x",n+"px",i)))+i},ov=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ih(e,t)},Pi="0deg",Gr="0px",Di=") ",ih=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,f=n.rotation,c=n.rotationY,d=n.rotationX,h=n.skewX,u=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,x=n.force3D,S=n.target,T=n.zOrigin,M="",_=x==="auto"&&e&&e!==1||x===!0;if(T&&(d!==Pi||c!==Pi)){var E=parseFloat(c)*Mr,A=Math.sin(E),w=Math.cos(E),y;E=parseFloat(d)*Mr,y=Math.cos(E),a=fo(S,a,A*y*-T),o=fo(S,o,-Math.sin(E)*-T),l=fo(S,l,w*y*-T+T)}m!==Gr&&(M+="perspective("+m+Di),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(_||a!==Gr||o!==Gr||l!==Gr)&&(M+=l!==Gr||_?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Di),f!==Pi&&(M+="rotate("+f+Di),c!==Pi&&(M+="rotateY("+c+Di),d!==Pi&&(M+="rotateX("+d+Di),(h!==Pi||u!==Pi)&&(M+="skew("+h+", "+u+Di),(g!==1||p!==1)&&(M+="scale("+g+", "+p+Di),S.style[pt]=M||"translate(0, 0)"},lv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,f=n.skewX,c=n.skewY,d=n.scaleX,h=n.scaleY,u=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,x=n.yOffset,S=n.forceCSS,T=parseFloat(a),M=parseFloat(o),_,E,A,w,y;l=parseFloat(l),f=parseFloat(f),c=parseFloat(c),c&&(c=parseFloat(c),f+=c,l+=c),l||f?(l*=Mr,f*=Mr,_=Math.cos(l)*d,E=Math.sin(l)*d,A=Math.sin(l-f)*-h,w=Math.cos(l-f)*h,f&&(c*=Mr,y=Math.tan(f-c),y=Math.sqrt(1+y*y),A*=y,w*=y,c&&(y=Math.tan(c),y=Math.sqrt(1+y*y),_*=y,E*=y)),_=vt(_),E=vt(E),A=vt(A),w=vt(w)):(_=d,w=h,E=A=0),(T&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(T=vi(u,"x",a,"px"),M=vi(u,"y",o,"px")),(g||p||m||x)&&(T=vt(T+g-(g*_+p*A)+m),M=vt(M+p-(g*E+p*w)+x)),(i||r)&&(y=u.getBBox(),T=vt(T+i/100*y.width),M=vt(M+r/100*y.height)),y="matrix("+_+","+E+","+A+","+w+","+T+","+M+")",u.setAttribute("transform",y),S&&(u.style[pt]=y)},cv=function(e,t,n,i,r){var a=360,o=wt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ui:1),f=l-i,c=i+f+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(f%=a,f!==f%(a/2)&&(f+=f<0?a:-a)),d==="cw"&&f<0?f=(f+a*vu)%a-~~(f/a)*a:d==="ccw"&&f>0&&(f=(f-a*vu)%a-~~(f/a)*a)),e._pt=h=new Kt(e._pt,t,n,i,f,Y_),h.e=c,h.u="deg",e._props.push(n),h},wu=function(e,t){for(var n in t)e[n]=t[n];return e},uv=function(e,t,n){var i=wu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,f,c,d,h,u,g;i.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),a[pt]=t,o=hs(n,1),$i(n,pt),n.setAttribute("transform",f)):(f=getComputedStyle(n)[pt],a[pt]=t,o=hs(n,1),a[pt]=f);for(l in ti)f=i[l],c=o[l],f!==c&&r.indexOf(l)<0&&(u=Nt(f),g=Nt(c),d=u!==g?vi(n,l,f,g):parseFloat(f),h=parseFloat(c),e._pt=new Kt(e._pt,o,l,d,h-d,hl),e._pt.u=g||0,e._props.push(l));wu(o,i)};Zt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});da[e>1?"border"+s:s]=function(o,l,f,c,d){var h,u;if(arguments.length<4)return h=a.map(function(g){return Xn(o,g,f)}),u=h.join(" "),u.split(h[0]).length===5?h[0]:u;h=(c+"").split(" "),u={},a.forEach(function(g,p){return u[g]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,u,d)}});var rh={name:"css",register:pl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,f,c,d,h,u,g,p,m,x,S,T,M,_,E,A,w;Yl||pl(),this.styles=this.styles||Jf(e),w=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(c=t[p],!(rn[p]&&kf(p,t,n,i,e,r)))){if(u=typeof c,g=da[p],u==="function"&&(c=c.call(n,i,e,r),u=typeof c),u==="string"&&~c.indexOf("random(")&&(c=ls(c)),g)g(this,e,p,c,n)&&(A=1);else if(p.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",gi.lastIndex=0,gi.test(f)||(m=Nt(f),x=Nt(c)),x?m!==x&&(f=vi(e,p,f,x)+x):m&&(c+=m),this.add(o,"setProperty",f,c,i,r,0,0,p),a.push(p),w.push(p,0,o[p]);else if(u!=="undefined"){if(l&&p in l?(f=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],wt(f)&&~f.indexOf("random(")&&(f=ls(f)),Nt(f+"")||f==="auto"||(f+=on.units[p]||Nt(Xn(e,p))||""),(f+"").charAt(1)==="="&&(f=Xn(e,p))):f=Xn(e,p),h=parseFloat(f),S=u==="string"&&c.charAt(1)==="="&&c.substr(0,2),S&&(c=c.substr(2)),d=parseFloat(c),p in Nn&&(p==="autoAlpha"&&(h===1&&Xn(e,"visibility")==="hidden"&&d&&(h=0),w.push("visibility",0,o.visibility),hi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=Nn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),T=p in ti,T){if(this.styles.save(p),u==="string"&&c.substring(0,6)==="var(--"&&(c=_n(e,c.substring(4,c.indexOf(")"))),d=parseFloat(c)),M||(_=e._gsap,_.renderTransform&&!t.parseTransform||hs(e,t.parseTransform),E=t.smoothOrigin!==!1&&_.smooth,M=this._pt=new Kt(this._pt,o,pt,0,1,_.renderTransform,_,0,-1),M.dep=1),p==="scale")this._pt=new Kt(this._pt,_,"scaleY",_.scaleY,(S?vr(_.scaleY,S+d):d)-_.scaleY||0,hl),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){w.push(Jt,0,o[Jt]),c=sv(c),_.svg?ml(e,c,0,E,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==_.zOrigin&&hi(this,_,"zOrigin",_.zOrigin,x),hi(this,o,p,pa(f),pa(c)));continue}else if(p==="svgOrigin"){ml(e,c,1,E,0,this);continue}else if(p in th){cv(this,_,p,h,S?vr(h,S+c):c);continue}else if(p==="smoothOrigin"){hi(this,_,"smooth",_.smooth,c);continue}else if(p==="force3D"){_[p]=c;continue}else if(p==="transform"){uv(this,c,e);continue}}else p in o||(p=Ir(p)||p);if(T||(d||d===0)&&(h||h===0)&&!X_.test(c)&&p in o)m=(f+"").substr((h+"").length),d||(d=0),x=Nt(c)||(p in on.units?on.units[p]:m),m!==x&&(h=vi(e,p,f,x)),this._pt=new Kt(this._pt,T?_:o,p,h,(S?vr(h,S+d):d)-h,!T&&(x==="px"||p==="zIndex")&&t.autoRound!==!1?$_:hl),this._pt.u=x||0,m!==x&&x!=="%"&&(this._pt.b=f,this._pt.r=q_);else if(p in o)rv.call(this,e,p,f,S?S+c:c);else if(p in e)this.add(e,p,f||e[p],S?S+c:c,i,r);else if(p!=="parseTransform"){Fl(p,c);continue}T||(p in o?w.push(p,0,o[p]):typeof e[p]=="function"?w.push(p,2,e[p]()):w.push(p,1,f||e[p])),a.push(p)}}A&&Yf(this)},render:function(e,t){if(t.tween._time||!ql())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xn,aliases:Nn,getSetter:function(e,t,n){var i=Nn[t];return i&&i.indexOf(",")<0&&(t=i),t in ti&&t!==Jt&&(e._gsap.x||Xn(e,"x"))?n&&_u===n?t==="scale"?j_:J_:(_u=n||{})&&(t==="scale"?Q_:ev):e.style&&!Il(e.style[t])?Z_:~t.indexOf("-")?K_:Wl(e,t)},core:{_removeProperty:$i,_getMatrix:Zl}};jt.utils.checkPrefix=Ir;jt.core.getStyleSaver=Jf;(function(s,e,t,n){var i=Zt(s+","+e+","+t,function(r){ti[r]=1});Zt(e,function(r){on.units[r]="deg",th[r]=1}),Nn[i[13]]=s+","+e,Zt(n,function(r){var a=r.split(":");Nn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){on.units[s]="px"});jt.registerPlugin(rh);var tt=jt.registerPlugin(rh)||jt;tt.core.Tween;class at{static CAMERA_PARAM={fovy:60,aspect:9/16,near:.1,far:20,position:new V(0,0,10),lookAt:new V(0,0,0)};static RENDERER_PARAM={clearColor:5592405};static DIRECTIONAL_LIGHT_PARAM={color:16777215,intensity:1,position:new V(1,1,1)};static AMBIENT_LIGHT_PARAM={color:16777215,intensity:.1};static MATERIAL_PARAM={color:16777215};static TOPSCENE_PARAM={bg:{baseScale:7.66},cover:{baseScale:7.68}};static GAMESCENE_PARAM={bg:{baseScale:7.71},cover:{baseScale:7.68}};static MESSAGESCENE_PARAM={part1:{baseScale:7.75},part2:{baseScale:7.68}};static SRC_PARAM={createLength:48}}const fv=JSON.parse('[{"centroid":{"x":-283.388671875,"y":-14.27734375},"relative":[{"x":-40.83984375,"y":205.52734375},{"x":81.6796875,"y":-12.119140625},{"x":-40.83984375,"y":-193.408203125}]},{"centroid":{"x":-241.884765625,"y":48.4765625},"relative":[{"x":40.17578125,"y":-74.873046875},{"x":-82.34375,"y":142.7734375},{"x":42.16796875,"y":-67.900390625}]},{"centroid":{"x":-239.228515625,"y":54.453125},"relative":[{"x":39.51171875,"y":-73.876953125},{"x":-85,"y":136.796875},{"x":45.48828125,"y":-62.919921875}]},{"centroid":{"x":-175.146484375,"y":24.736328125},"relative":[{"x":-8.6328125,"y":-23.2421875},{"x":7.3046875,"y":41.50390625},{"x":1.328125,"y":-18.26171875}]},{"centroid":{"x":-168.173828125,"y":30.048828125},"relative":[{"x":5.3125,"y":-12.6171875},{"x":-5.64453125,"y":-23.57421875},{"x":0.33203125,"y":36.19140625}]},{"centroid":{"x":-162.861328125,"y":36.025390625},"relative":[{"x":0,"y":-18.59375},{"x":-4.98046875,"y":30.21484375},{"x":4.98046875,"y":-11.62109375}]},{"centroid":{"x":-158.876953125,"y":43.994140625},"relative":[{"x":0.99609375,"y":-19.58984375},{"x":-8.96484375,"y":22.24609375},{"x":7.96875,"y":-2.65625}]},{"centroid":{"x":-185.771484375,"y":27.060546875},"relative":[{"x":-7.96875,"y":-35.52734375},{"x":5.9765625,"y":61.09375},{"x":1.9921875,"y":-25.56640625}]},{"centroid":{"x":-177.138671875,"y":51.962890625},"relative":[{"x":9.296875,"y":14.27734375},{"x":-6.640625,"y":-50.46875},{"x":-2.65625,"y":36.19140625}]},{"centroid":{"x":-234.580078125,"y":94.9609375},"relative":[{"x":-89.6484375,"y":96.2890625},{"x":48.80859375,"y":7.138671875},{"x":40.83984375,"y":-103.427734375}]},{"centroid":{"x":-186.435546875,"y":60.595703125},"relative":[{"x":6.640625,"y":27.55859375},{"x":-7.3046875,"y":-69.0625},{"x":0.6640625,"y":41.50390625}]},{"centroid":{"x":-234.912109375,"y":142.109375},"relative":[{"x":-89.31640625,"y":49.140625},{"x":40.17578125,"y":-9.130859375},{"x":49.140625,"y":-40.009765625}]},{"centroid":{"x":-238.896484375,"y":158.7109375},"relative":[{"x":44.16015625,"y":-25.732421875},{"x":-85.33203125,"y":32.5390625},{"x":41.171875,"y":-6.806640625}]},{"centroid":{"x":-240.224609375,"y":184.609375},"relative":[{"x":42.5,"y":-32.705078125},{"x":-84.00390625,"y":6.640625},{"x":41.50390625,"y":26.064453125}]},{"centroid":{"x":-239.892578125,"y":213.1640625},"relative":[{"x":41.171875,"y":-2.490234375},{"x":-84.3359375,"y":-21.9140625},{"x":43.1640625,"y":24.404296875}]},{"centroid":{"x":-237.236328125,"y":231.42578125},"relative":[{"x":40.5078125,"y":6.142578125},{"x":-86.9921875,"y":-40.17578125},{"x":46.484375,"y":34.033203125}]},{"centroid":{"x":-276.083984375,"y":358.59375},"relative":[{"x":-48.14453125,"y":231.591796875},{"x":96.2890625,"y":-64.248046875},{"x":-48.14453125,"y":-167.34375}]},{"centroid":{"x":-231.591796875,"y":250.3515625},"relative":[{"x":40.83984375,"y":15.107421875},{"x":-92.63671875,"y":-59.1015625},{"x":51.796875,"y":43.994140625}]},{"centroid":{"x":-222.626953125,"y":402.255859375},"relative":[{"x":42.83203125,"y":-107.91015625},{"x":-101.6015625,"y":187.9296875},{"x":58.76953125,"y":-80.01953125}]},{"centroid":{"x":-209.677734375,"y":420.849609375},"relative":[{"x":45.8203125,"y":-98.61328125},{"x":-114.55078125,"y":169.3359375},{"x":68.73046875,"y":-70.72265625}]},{"centroid":{"x":-196.064453125,"y":435.458984375},"relative":[{"x":55.1171875,"y":-85.33203125},{"x":-128.1640625,"y":154.7265625},{"x":73.046875,"y":-69.39453125}]},{"centroid":{"x":-182.451171875,"y":446.083984375},"relative":[{"x":59.43359375,"y":-80.01953125},{"x":-141.77734375,"y":144.1015625},{"x":82.34375,"y":-64.08203125}]},{"centroid":{"x":-166.181640625,"y":455.712890625},"relative":[{"x":66.07421875,"y":-73.7109375},{"x":-158.046875,"y":134.47265625},{"x":91.97265625,"y":-60.76171875}]},{"centroid":{"x":-148.583984375,"y":463.017578125},"relative":[{"x":74.375,"y":-68.06640625},{"x":-175.64453125,"y":127.16796875},{"x":101.26953125,"y":-59.1015625}]},{"centroid":{"x":-6.142578125,"y":529.755859375},"relative":[{"x":330.37109375,"y":60.4296875},{"x":-12.28515625,"y":-120.859375},{"x":-318.0859375,"y":60.4296875}]},{"centroid":{"x":-129.990234375,"y":467.666015625},"relative":[{"x":82.67578125,"y":-63.75},{"x":-194.23828125,"y":122.51953125},{"x":111.5625,"y":-58.76953125}]},{"centroid":{"x":108.076171875,"y":469.326171875},"relative":[{"x":-126.50390625,"y":-60.4296875},{"x":216.15234375,"y":120.859375},{"x":-89.6484375,"y":-60.4296875}]},{"centroid":{"x":127.001953125,"y":468.330078125},"relative":[{"x":-108.57421875,"y":-59.43359375},{"x":197.2265625,"y":121.85546875},{"x":-88.65234375,"y":-62.421875}]},{"centroid":{"x":142.939453125,"y":464.677734375},"relative":[{"x":-104.58984375,"y":-58.76953125},{"x":181.2890625,"y":125.5078125},{"x":-76.69921875,"y":-66.73828125}]},{"centroid":{"x":161.201171875,"y":458.037109375},"relative":[{"x":-94.9609375,"y":-60.09765625},{"x":163.02734375,"y":132.1484375},{"x":-68.06640625,"y":-72.05078125}]},{"centroid":{"x":178.466796875,"y":448.740234375},"relative":[{"x":-85.33203125,"y":-62.75390625},{"x":145.76171875,"y":141.4453125},{"x":-60.4296875,"y":-78.69140625}]},{"centroid":{"x":193.740234375,"y":437.451171875},"relative":[{"x":-75.703125,"y":-67.40234375},{"x":130.48828125,"y":152.734375},{"x":-54.78515625,"y":-85.33203125}]},{"centroid":{"x":207.353515625,"y":423.837890625},"relative":[{"x":-68.3984375,"y":-71.71875},{"x":116.875,"y":166.34765625},{"x":-48.4765625,"y":-94.62890625}]},{"centroid":{"x":274.423828125,"y":361.9140625},"relative":[{"x":49.8046875,"y":-170.6640625},{"x":-99.609375,"y":-57.607421875},{"x":49.8046875,"y":228.271484375}]},{"centroid":{"x":219.306640625,"y":407.900390625},"relative":[{"x":-60.4296875,"y":-78.69140625},{"x":104.921875,"y":182.28515625},{"x":-44.4921875,"y":-103.59375}]},{"centroid":{"x":229.931640625,"y":253.671875},"relative":[{"x":-55.1171875,"y":50.634765625},{"x":94.296875,"y":-62.421875},{"x":-39.1796875,"y":11.787109375}]},{"centroid":{"x":237.236328125,"y":231.42578125},"relative":[{"x":-46.484375,"y":34.033203125},{"x":86.9921875,"y":-40.17578125},{"x":-40.5078125,"y":6.142578125}]},{"centroid":{"x":239.892578125,"y":213.1640625},"relative":[{"x":-43.1640625,"y":24.404296875},{"x":84.3359375,"y":-21.9140625},{"x":-41.171875,"y":-2.490234375}]},{"centroid":{"x":240.224609375,"y":184.94140625},"relative":[{"x":-41.50390625,"y":25.732421875},{"x":84.00390625,"y":6.30859375},{"x":-42.5,"y":-32.041015625}]},{"centroid":{"x":238.896484375,"y":159.04296875},"relative":[{"x":-41.171875,"y":-6.142578125},{"x":85.33203125,"y":32.20703125},{"x":-44.16015625,"y":-26.064453125}]},{"centroid":{"x":234.248046875,"y":140.44921875},"relative":[{"x":-39.51171875,"y":-7.470703125},{"x":89.98046875,"y":50.80078125},{"x":-50.46875,"y":-43.330078125}]},{"centroid":{"x":158.544921875,"y":42.333984375},"relative":[{"x":9.296875,"y":23.90625},{"x":0.33203125,"y":-22.91015625},{"x":-9.62890625,"y":-0.99609375}]},{"centroid":{"x":166.181640625,"y":31.044921875},"relative":[{"x":-7.3046875,"y":-11.62109375},{"x":1.66015625,"y":35.1953125},{"x":5.64453125,"y":-23.57421875}]},{"centroid":{"x":178.798828125,"y":54.619140625},"relative":[{"x":4.98046875,"y":42.5},{"x":5.9765625,"y":-54.12109375},{"x":-10.95703125,"y":11.62109375}]},{"centroid":{"x":174.814453125,"y":24.736328125},"relative":[{"x":-2.98828125,"y":-17.265625},{"x":-6.97265625,"y":41.50390625},{"x":9.9609375,"y":-24.23828125}]},{"centroid":{"x":233.916015625,"y":93.30078125},"relative":[{"x":90.3125,"y":97.94921875},{"x":-40.17578125,"y":-101.767578125},{"x":-50.13671875,"y":3.818359375}]},{"centroid":{"x":187.431640625,"y":29.716796875},"relative":[{"x":-2.65625,"y":-29.21875},{"x":-3.65234375,"y":67.40234375},{"x":6.30859375,"y":-38.18359375}]},{"centroid":{"x":239.228515625,"y":54.453125},"relative":[{"x":-45.48828125,"y":-62.919921875},{"x":85,"y":136.796875},{"x":-39.51171875,"y":-73.876953125}]},{"centroid":{"x":283.388671875,"y":-14.27734375},"relative":[{"x":40.83984375,"y":-193.408203125},{"x":-81.6796875,"y":-12.119140625},{"x":40.83984375,"y":205.52734375}]},{"centroid":{"x":241.884765625,"y":48.4765625},"relative":[{"x":-42.16796875,"y":-67.900390625},{"x":82.34375,"y":142.7734375},{"x":-40.17578125,"y":-74.873046875}]}]'),hv=[{centroid:{x:20.18505859375,y:-.35986328125},relative:[{x:.130859375,y:-.5234375},{x:-3.2060546875,y:-2.2900390625},{x:3.0751953125,y:2.8134765625}]},{centroid:{x:12.92236328125,y:2.78076171875},relative:[{x:-9.0947265625,y:-6.6083984375},{x:9.7490234375,y:13.0205078125},{x:-.654296875,y:-6.412109375}]},{centroid:{x:17.30615234375,y:3.17333984375},relative:[{x:-5.0380859375,y:-6.8046875},{x:5.365234375,y:12.6279296875},{x:-.3271484375,y:-5.8232421875}]},{centroid:{x:20.97021484375,y:5.20166015625},relative:[{x:-3.9912109375,y:-7.8515625},{x:1.701171875,y:10.599609375},{x:2.2900390625,y:-2.748046875}]},{centroid:{x:23.65283203125,y:8.53857421875},relative:[{x:-.392578125,y:-6.0849609375},{x:-.9814453125,y:7.2626953125},{x:1.3740234375,y:-1.177734375}]},{centroid:{x:24.24169921875,y:11.09033203125},relative:[{x:.78515625,y:-.9814453125},{x:.78515625,y:-3.7294921875},{x:-1.5703125,y:4.7109375}]},{centroid:{x:24.11083984375,y:12.72607421875},relative:[{x:.916015625,y:-2.6171875},{x:-1.439453125,y:3.0751953125},{x:.5234375,y:-.4580078125}]},{centroid:{x:23.45654296875,y:20.64306640625},relative:[{x:-.78515625,y:-4.841796875},{x:0,y:5.365234375},{x:.78515625,y:-.5234375}]},{centroid:{x:23.97998046875,y:23.19482421875},relative:[{x:.26171875,y:.26171875},{x:.26171875,y:-3.0751953125},{x:-.5234375,y:2.8134765625}]},{centroid:{x:24.96142578125,y:30.98095703125},relative:[{x:.8505859375,y:-.0654296875},{x:-1.5048828125,y:-4.97265625},{x:.654296875,y:5.0380859375}]},{centroid:{x:23.91455078125,y:34.38330078125},relative:[{x:-.4580078125,y:-8.375},{x:-1.2431640625,y:6.7392578125},{x:1.701171875,y:1.6357421875}]},{centroid:{x:22.27880859375,y:36.60791015625},relative:[{x:.392578125,y:4.5146484375},{x:1.177734375,y:-10.599609375},{x:-1.5703125,y:6.0849609375}]},{centroid:{x:20.77392578125,y:37.58935546875},relative:[{x:-.0654296875,y:5.103515625},{x:2.6826171875,y:-11.5810546875},{x:-2.6171875,y:6.4775390625}]},{centroid:{x:19.20361328125,y:38.30908203125},relative:[{x:-1.046875,y:5.7578125},{x:4.2529296875,y:-12.30078125},{x:-3.2060546875,y:6.54296875}]},{centroid:{x:17.10986328125,y:38.83251953125},relative:[{x:-1.1123046875,y:6.01953125},{x:6.3466796875,y:-12.82421875},{x:-5.234375,y:6.8046875}]},{centroid:{x:13.64208984375,y:39.09423828125},relative:[{x:-1.7666015625,y:6.54296875},{x:9.814453125,y:-13.0859375},{x:-8.0478515625,y:6.54296875}]},{centroid:{x:9.84716796875,y:38.83251953125},relative:[{x:-4.2529296875,y:6.8046875},{x:13.609375,y:-12.82421875},{x:-9.3564453125,y:6.01953125}]},{centroid:{x:12.52978515625,y:26.92431640625},relative:[{x:10.1416015625,y:-11.123046875},{x:-21.068359375,y:12.0390625},{x:10.9267578125,y:-.916015625}]},{centroid:{x:5.13623046875,y:36.60791015625},relative:[{x:18.3203125,y:-10.599609375},{x:-13.6748046875,y:2.35546875},{x:-4.6455078125,y:8.244140625}]},{centroid:{x:-4.08935546875,y:42.23486328125},relative:[{x:4.580078125,y:2.6171875},{x:-4.44921875,y:-3.271484375},{x:-.130859375,y:.654296875}]},{centroid:{x:-11.41748046875,y:39.15966796875},relative:[{x:1.701171875,y:.1962890625},{x:2.87890625,y:-.1962890625},{x:-4.580078125,y:0}]},{centroid:{x:-18.94189453125,y:37.26220703125},relative:[{x:0,y:.5234375},{x:2.9443359375,y:1.8974609375},{x:-2.9443359375,y:-2.4208984375}]},{centroid:{x:-16.06298828125,y:34.84130859375},relative:[{x:7.5244140625,y:4.1220703125},{x:-7.58984375,y:-8.4404296875},{x:.0654296875,y:4.318359375}]},{centroid:{x:-20.51220703125,y:33.46728515625},relative:[{x:4.5146484375,y:5.6923828125},{x:-3.140625,y:-7.06640625},{x:-1.3740234375,y:1.3740234375}]},{centroid:{x:-22.99853515625,y:30.91552734375},relative:[{x:-.4580078125,y:.5888671875},{x:1.1123046875,y:3.92578125},{x:-.654296875,y:-4.5146484375}]},{centroid:{x:-18.35302734375,y:29.54150390625},relative:[{x:-5.2998046875,y:-3.140625},{x:9.814453125,y:9.421875},{x:-4.5146484375,y:-6.28125}]},{centroid:{x:-2.19189453125,y:24.56884765625},relative:[{x:-6.3466796875,y:14.39453125},{x:24.86328125,y:-8.767578125},{x:-18.5166015625,y:-5.626953125}]},{centroid:{x:-17.37158203125,y:27.05517578125},relative:[{x:-5.49609375,y:-3.794921875},{x:8.8330078125,y:11.908203125},{x:-3.3369140625,y:-8.11328125}]},{centroid:{x:1.93017578125,y:10.10888671875},relative:[{x:1.8974609375,y:-13.9365234375},{x:-22.638671875,y:8.244140625},{x:20.7412109375,y:5.6923828125}]},{centroid:{x:-6.24853515625,y:17.69873046875},relative:[{x:-14.4599609375,y:1.2431640625},{x:28.919921875,y:-1.8974609375},{x:-14.4599609375,y:.654296875}]},{centroid:{x:-23.45654296875,y:15.08154296875},relative:[{x:-.5888671875,y:.130859375},{x:2.748046875,y:3.271484375},{x:-2.1591796875,y:-3.40234375}]},{centroid:{x:-24.04541015625,y:12.33349609375},relative:[{x:-1.5703125,y:-.654296875},{x:3.3369140625,y:6.01953125},{x:-1.7666015625,y:-5.365234375}]},{centroid:{x:-23.06396484375,y:8.60400390625},relative:[{x:2.35546875,y:9.7490234375},{x:.392578125,y:-8.11328125},{x:-2.748046875,y:-1.6357421875}]},{centroid:{x:-24.37255859375,y:3.56591796875},relative:[{x:-.26171875,y:-.3271484375},{x:-1.439453125,y:3.40234375},{x:1.701171875,y:-3.0751953125}]},{centroid:{x:-20.51220703125,y:-1.07958984375},relative:[{x:-.78515625,y:.1962890625},{x:-2.1591796875,y:1.5703125},{x:2.9443359375,y:-1.7666015625}]},{centroid:{x:-10.43603515625,y:3.69677734375},relative:[{x:14.263671875,y:-7.5244140625},{x:-3.9912109375,y:-7.1318359375},{x:-10.2724609375,y:14.65625}]},{centroid:{x:-19.26904296875,y:5.13623046875},relative:[{x:-1.439453125,y:13.216796875},{x:4.841796875,y:-8.5712890625},{x:-3.40234375,y:-4.6455078125}]},{centroid:{x:-18.22216796875,y:-1.93017578125},relative:[{x:.654296875,y:-.916015625},{x:-4.44921875,y:2.4208984375},{x:3.794921875,y:-1.5048828125}]},{centroid:{x:.81787109375,y:-5.92138671875},relative:[{x:3.009765625,y:2.09375},{x:.654296875,y:-.26171875},{x:-3.6640625,y:-1.83203125}]},{centroid:{x:-4.48193359375,y:-5.00537109375},relative:[{x:8.3095703125,y:1.177734375},{x:1.6357421875,y:-2.748046875},{x:-9.9453125,y:1.5703125}]},{centroid:{x:-9.32373046875,y:-5.98681640625},relative:[{x:-5.103515625,y:2.5517578125},{x:6.4775390625,y:-1.7666015625},{x:-1.3740234375,y:-.78515625}]},{centroid:{x:-6.96826171875,y:-7.49169921875},relative:[{x:-.392578125,y:-.4580078125},{x:-3.7294921875,y:.7197265625},{x:4.1220703125,y:-.26171875}]}],dv=JSON.parse('[{"centroid":{"x":6.83740234375,"y":-6.64111328125},"relative":[{"x":-0.26171875,"y":-0.5234375},{"x":-2.0283203125,"y":-1.30859375},{"x":2.2900390625,"y":1.83203125}]},{"centroid":{"x":19.66162109375,"y":-2.32275390625},"relative":[{"x":0.4580078125,"y":-0.3271484375},{"x":-3.6640625,"y":-1.8974609375},{"x":3.2060546875,"y":2.224609375}]},{"centroid":{"x":24.89599609375,"y":5.07080078125},"relative":[{"x":0.3271484375,"y":-1.046875},{"x":-0.8505859375,"y":-3.5986328125},{"x":0.5234375,"y":4.6455078125}]},{"centroid":{"x":16.39013671875,"y":1.34130859375},"relative":[{"x":-7.2626953125,"y":-6.150390625},{"x":7.6552734375,"y":11.7119140625},{"x":-0.392578125,"y":-5.5615234375}]},{"centroid":{"x":20.97021484375,"y":2.91162109375},"relative":[{"x":-4.97265625,"y":-7.1318359375},{"x":3.0751953125,"y":10.1416015625},{"x":1.8974609375,"y":-3.009765625}]},{"centroid":{"x":23.65283203125,"y":4.80908203125},"relative":[{"x":-0.78515625,"y":-4.9072265625},{"x":0.392578125,"y":8.244140625},{"x":0.392578125,"y":-3.3369140625}]},{"centroid":{"x":24.50341796875,"y":8.08056640625},"relative":[{"x":0.916015625,"y":1.6357421875},{"x":-0.4580078125,"y":-6.6083984375},{"x":-0.4580078125,"y":4.97265625}]},{"centroid":{"x":17.76416015625,"y":11.54833984375},"relative":[{"x":-8.63671875,"y":-16.357421875},{"x":2.35546875,"y":14.8525390625},{"x":6.28125,"y":1.5048828125}]},{"centroid":{"x":22.93310546875,"y":18.15673828125},"relative":[{"x":1.1123046875,"y":-5.103515625},{"x":-2.8134765625,"y":8.244140625},{"x":1.701171875,"y":-3.140625}]},{"centroid":{"x":23.12939453125,"y":20.51220703125},"relative":[{"x":1.5048828125,"y":-5.49609375},{"x":-3.009765625,"y":5.888671875},{"x":1.5048828125,"y":-0.392578125}]},{"centroid":{"x":22.67138671875,"y":23.32568359375},"relative":[{"x":1.962890625,"y":-3.2060546875},{"x":-2.5517578125,"y":3.0751953125},{"x":0.5888671875,"y":0.130859375}]},{"centroid":{"x":18.87646484375,"y":36.67333984375},"relative":[{"x":3.009765625,"y":-5.9541015625},{"x":-6.01953125,"y":7.197265625},{"x":3.009765625,"y":-1.2431640625}]},{"centroid":{"x":18.68017578125,"y":38.89794921875},"relative":[{"x":3.2060546875,"y":-3.4677734375},{"x":-5.8232421875,"y":4.97265625},{"x":2.6171875,"y":-1.5048828125}]},{"centroid":{"x":17.63330078125,"y":40.79541015625},"relative":[{"x":3.6640625,"y":-3.40234375},{"x":-4.7763671875,"y":3.0751953125},{"x":1.1123046875,"y":0.3271484375}]},{"centroid":{"x":16.19384765625,"y":42.49658203125},"relative":[{"x":2.5517578125,"y":-1.3740234375},{"x":-3.3369140625,"y":1.3740234375},{"x":0.78515625,"y":0}]},{"centroid":{"x":16.25927734375,"y":33.40185546875},"relative":[{"x":3.8603515625,"y":-7.0009765625},{"x":-9.4873046875,"y":9.68359375},{"x":5.626953125,"y":-2.6826171875}]},{"centroid":{"x":13.83837890625,"y":39.22509765625},"relative":[{"x":8.0478515625,"y":-8.505859375},{"x":-7.06640625,"y":3.8603515625},{"x":-0.9814453125,"y":4.6455078125}]},{"centroid":{"x":9.65087890625,"y":43.60888671875},"relative":[{"x":-0.3271484375,"y":0.26171875},{"x":3.2060546875,"y":0.26171875},{"x":-2.87890625,"y":-0.5234375}]},{"centroid":{"x":2.64990234375,"y":44.78662109375},"relative":[{"x":0.5888671875,"y":0.26171875},{"x":4.1220703125,"y":-1.701171875},{"x":-4.7109375,"y":1.439453125}]},{"centroid":{"x":-17.37158203125,"y":40.92626953125},"relative":[{"x":4.1220703125,"y":3.92578125},{"x":-4.318359375,"y":-5.49609375},{"x":0.1962890625,"y":1.5703125}]},{"centroid":{"x":-19.66162109375,"y":39.02880859375},"relative":[{"x":-0.4580078125,"y":0.130859375},{"x":2.486328125,"y":3.4677734375},{"x":-2.0283203125,"y":-3.5986328125}]},{"centroid":{"x":-15.08154296875,"y":39.74853515625},"relative":[{"x":4.97265625,"y":6.0849609375},{"x":-6.8046875,"y":-11.1884765625},{"x":1.83203125,"y":5.103515625}]},{"centroid":{"x":-18.94189453125,"y":36.28076171875},"relative":[{"x":-2.748046875,"y":-0.8505859375},{"x":5.6923828125,"y":8.5712890625},{"x":-2.9443359375,"y":-7.720703125}]},{"centroid":{"x":1.93017578125,"y":31.70068359375},"relative":[{"x":18.189453125,"y":-5.2998046875},{"x":-23.03125,"y":-6.0849609375},{"x":4.841796875,"y":11.384765625}]},{"centroid":{"x":-5.46337890625,"y":38.30908203125},"relative":[{"x":12.2353515625,"y":4.7763671875},{"x":-15.6376953125,"y":-12.693359375},{"x":3.40234375,"y":7.9169921875}]},{"centroid":{"x":-10.23974609375,"y":39.35595703125},"relative":[{"x":8.1787109375,"y":6.8701171875},{"x":-10.861328125,"y":-13.740234375},{"x":2.6826171875,"y":6.8701171875}]},{"centroid":{"x":-12.92236328125,"y":39.22509765625},"relative":[{"x":5.365234375,"y":7.0009765625},{"x":-8.1787109375,"y":-13.609375},{"x":2.8134765625,"y":6.6083984375}]},{"centroid":{"x":-17.69873046875,"y":33.33642578125},"relative":[{"x":-4.1875,"y":-4.7763671875},{"x":7.58984375,"y":12.4970703125},{"x":-3.40234375,"y":-7.720703125}]},{"centroid":{"x":-22.80224609375,"y":23.52197265625},"relative":[{"x":-0.26171875,"y":0.130859375},{"x":1.701171875,"y":2.09375},{"x":-1.439453125,"y":-2.224609375}]},{"centroid":{"x":-23.32568359375,"y":22.21337890625},"relative":[{"x":-0.916015625,"y":-0.916015625},{"x":2.224609375,"y":3.40234375},{"x":-1.30859375,"y":-2.486328125}]},{"centroid":{"x":-23.19482421875,"y":19.53076171875},"relative":[{"x":2.09375,"y":6.0849609375},{"x":-0.654296875,"y":-6.28125},{"x":-1.439453125,"y":0.1962890625}]},{"centroid":{"x":-24.37255859375,"y":16.12841796875},"relative":[{"x":-0.26171875,"y":-0.7197265625},{"x":-0.26171875,"y":3.5986328125},{"x":0.5234375,"y":-2.87890625}]},{"centroid":{"x":-24.89599609375,"y":9.32373046875},"relative":[{"x":-0.5234375,"y":0.1962890625},{"x":1.046875,"y":3.92578125},{"x":-0.5234375,"y":-4.1220703125}]},{"centroid":{"x":-24.69970703125,"y":7.22998046875},"relative":[{"x":-0.7197265625,"y":-2.0283203125},{"x":0.8505859375,"y":6.01953125},{"x":-0.130859375,"y":-3.9912109375}]},{"centroid":{"x":-24.17626953125,"y":5.92138671875},"relative":[{"x":-0.654296875,"y":-2.6826171875},{"x":0.3271484375,"y":7.328125},{"x":0.3271484375,"y":-4.6455078125}]},{"centroid":{"x":-21.42822265625,"y":3.50048828125},"relative":[{"x":-2.4208984375,"y":9.7490234375},{"x":4.841796875,"y":-7.5244140625},{"x":-2.4208984375,"y":-2.224609375}]},{"centroid":{"x":-20.38134765625,"y":-1.66845703125},"relative":[{"x":-0.3271484375,"y":-0.5888671875},{"x":-3.4677734375,"y":2.9443359375},{"x":3.794921875,"y":-2.35546875}]},{"centroid":{"x":-17.63330078125,"y":1.53759765625},"relative":[{"x":1.046875,"y":-5.5615234375},{"x":-6.2158203125,"y":11.7119140625},{"x":5.1689453125,"y":-6.150390625}]},{"centroid":{"x":7.03369140625,"y":5.59423828125},"relative":[{"x":2.09375,"y":-10.4033203125},{"x":-15.1796875,"y":-10.4033203125},{"x":13.0859375,"y":20.806640625}]},{"centroid":{"x":-3.04248046875,"y":15.73583984375},"relative":[{"x":-18.05859375,"y":9.8798828125},{"x":23.162109375,"y":10.6650390625},{"x":-5.103515625,"y":-20.544921875}]},{"centroid":{"x":-17.69873046875,"y":11.35205078125},"relative":[{"x":-3.40234375,"y":14.263671875},{"x":9.552734375,"y":-16.1611328125},{"x":-6.150390625,"y":1.8974609375}]},{"centroid":{"x":-14.81982421875,"y":1.27587890625},"relative":[{"x":2.35546875,"y":-5.888671875},{"x":-9.029296875,"y":11.9736328125},{"x":6.673828125,"y":-6.0849609375}]},{"centroid":{"x":-5.33251953125,"y":-6.77197265625},"relative":[{"x":-0.0654296875,"y":-0.392578125},{"x":-2.8134765625,"y":1.962890625},{"x":2.87890625,"y":-1.5703125}]},{"centroid":{"x":5.39794921875,"y":-7.03369140625},"relative":[{"x":3.7294921875,"y":2.224609375},{"x":-0.5888671875,"y":-0.916015625},{"x":-3.140625,"y":-1.30859375}]},{"centroid":{"x":1.07958984375,"y":-5.98681640625},"relative":[{"x":8.0478515625,"y":1.177734375},{"x":1.177734375,"y":-2.35546875},{"x":-9.2255859375,"y":1.177734375}]},{"centroid":{"x":0.68701171875,"y":-8.40771484375},"relative":[{"x":1.5703125,"y":-0.130859375},{"x":-3.140625,"y":0.0654296875},{"x":1.5703125,"y":0.0654296875}]},{"centroid":{"x":-2.78076171875,"y":-7.16455078125},"relative":[{"x":-5.365234375,"y":2.35546875},{"x":5.0380859375,"y":-1.177734375},{"x":0.3271484375,"y":-1.177734375}]}]'),pv=JSON.parse('[{"centroid":{"x":4.80908203125,"y":-0.03271484375},"relative":[{"x":0.5888671875,"y":-0.0654296875},{"x":-3.7294921875,"y":-2.4208984375},{"x":3.140625,"y":2.486328125}]},{"centroid":{"x":-2.06103515625,"y":-0.49072265625},"relative":[{"x":-9.814453125,"y":-3.3369140625},{"x":12.3662109375,"y":6.673828125},{"x":-2.5517578125,"y":-3.3369140625}]},{"centroid":{"x":2.25732421875,"y":-0.03271484375},"relative":[{"x":-6.8701171875,"y":-3.794921875},{"x":8.0478515625,"y":6.2158203125},{"x":-1.177734375,"y":-2.4208984375}]},{"centroid":{"x":6.44482421875,"y":2.06103515625},"relative":[{"x":1.5048828125,"y":0.392578125},{"x":-5.365234375,"y":-4.5146484375},{"x":3.8603515625,"y":4.1220703125}]},{"centroid":{"x":12.72607421875,"y":5.92138671875},"relative":[{"x":-1.2431640625,"y":-0.130859375},{"x":-2.4208984375,"y":0.26171875},{"x":3.6640625,"y":-0.130859375}]},{"centroid":{"x":15.34326171875,"y":6.18310546875},"relative":[{"x":1.046875,"y":-0.392578125},{"x":-5.0380859375,"y":0},{"x":3.9912109375,"y":0.392578125}]},{"centroid":{"x":21.62451171875,"y":5.39794921875},"relative":[{"x":0.26171875,"y":-0.392578125},{"x":-2.2900390625,"y":1.177734375},{"x":2.0283203125,"y":-0.78515625}]},{"centroid":{"x":25.94287109375,"y":6.96826171875},"relative":[{"x":-6.6083984375,"y":-0.392578125},{"x":8.8984375,"y":2.748046875},{"x":-2.2900390625,"y":-2.35546875}]},{"centroid":{"x":28.82177734375,"y":6.31396484375},"relative":[{"x":-5.1689453125,"y":-1.701171875},{"x":6.01953125,"y":3.40234375},{"x":-0.8505859375,"y":-1.701171875}]},{"centroid":{"x":31.50439453125,"y":6.83740234375},"relative":[{"x":0.1962890625,"y":-0.654296875},{"x":-3.533203125,"y":-2.224609375},{"x":3.3369140625,"y":2.87890625}]},{"centroid":{"x":30.13037109375,"y":9.91259765625},"relative":[{"x":-10.7958984375,"y":-3.3369140625},{"x":6.0849609375,"y":3.533203125},{"x":4.7109375,"y":-0.1962890625}]},{"centroid":{"x":38.83251953125,"y":17.63330078125},"relative":[{"x":-2.6171875,"y":-4.1875},{"x":2.87890625,"y":6.01953125},{"x":-0.26171875,"y":-1.83203125}]},{"centroid":{"x":40.33740234375,"y":19.59619140625},"relative":[{"x":-1.7666015625,"y":-3.794921875},{"x":1.3740234375,"y":4.056640625},{"x":0.392578125,"y":-0.26171875}]},{"centroid":{"x":28.03662109375,"y":19.98876953125},"relative":[{"x":-8.7021484375,"y":-13.4130859375},{"x":0.5234375,"y":19.9560546875},{"x":8.1787109375,"y":-6.54296875}]},{"centroid":{"x":35.49560546875,"y":25.68115234375},"relative":[{"x":0.7197265625,"y":-12.2353515625},{"x":-6.935546875,"y":14.263671875},{"x":6.2158203125,"y":-2.0283203125}]},{"centroid":{"x":37.19677734375,"y":30.91552734375},"relative":[{"x":4.5146484375,"y":-7.2626953125},{"x":-8.63671875,"y":9.029296875},{"x":4.1220703125,"y":-1.7666015625}]},{"centroid":{"x":36.54248046875,"y":33.99072265625},"relative":[{"x":4.7763671875,"y":-4.841796875},{"x":-7.982421875,"y":5.9541015625},{"x":3.2060546875,"y":-1.1123046875}]},{"centroid":{"x":35.49560546875,"y":35.95361328125},"relative":[{"x":2.6826171875,"y":-0.916015625},{"x":4.2529296875,"y":-3.0751953125},{"x":-6.935546875,"y":3.9912109375}]},{"centroid":{"x":33.72900390625,"y":37.72021484375},"relative":[{"x":4.44921875,"y":-2.6826171875},{"x":-5.1689453125,"y":2.224609375},{"x":0.7197265625,"y":0.4580078125}]},{"centroid":{"x":31.43896484375,"y":39.22509765625},"relative":[{"x":-0.130859375,"y":0.3271484375},{"x":3.009765625,"y":-1.046875},{"x":-2.87890625,"y":0.7197265625}]},{"centroid":{"x":27.05517578125,"y":41.77685546875},"relative":[{"x":-0.26171875,"y":0.5234375},{"x":1.5048828125,"y":-1.83203125},{"x":-1.2431640625,"y":1.30859375}]},{"centroid":{"x":25.87744140625,"y":42.43115234375},"relative":[{"x":-0.0654296875,"y":0.654296875},{"x":2.6826171875,"y":-2.486328125},{"x":-2.6171875,"y":1.83203125}]},{"centroid":{"x":22.86767578125,"y":42.88916015625},"relative":[{"x":0.392578125,"y":1.3740234375},{"x":5.6923828125,"y":-2.9443359375},{"x":-6.0849609375,"y":1.5703125}]},{"centroid":{"x":18.87646484375,"y":41.77685546875},"relative":[{"x":9.68359375,"y":-1.83203125},{"x":-7.58984375,"y":-0.8505859375},{"x":-2.09375,"y":2.6826171875}]},{"centroid":{"x":13.83837890625,"y":42.82373046875},"relative":[{"x":-0.392578125,"y":0.26171875},{"x":2.9443359375,"y":1.6357421875},{"x":-2.5517578125,"y":-1.8974609375}]},{"centroid":{"x":12.79150390625,"y":16.32470703125},"relative":[{"x":-2.486328125,"y":-10.1416015625},{"x":-4.056640625,"y":19.890625},{"x":6.54296875,"y":-9.7490234375}]},{"centroid":{"x":18.87646484375,"y":27.57861328125},"relative":[{"x":0.4580078125,"y":-21.0029296875},{"x":-10.1416015625,"y":8.63671875},{"x":9.68359375,"y":12.3662109375}]},{"centroid":{"x":16.19384765625,"y":39.02880859375},"relative":[{"x":-4.9072265625,"y":1.8974609375},{"x":12.3662109375,"y":0.916015625},{"x":-7.458984375,"y":-2.8134765625}]},{"centroid":{"x":3.76220703125,"y":39.68310546875},"relative":[{"x":-0.7197265625,"y":1.046875},{"x":4.97265625,"y":-3.4677734375},{"x":-4.2529296875,"y":2.4208984375}]},{"centroid":{"x":5.07080078125,"y":28.42919921875},"relative":[{"x":5.234375,"y":-22.24609375},{"x":-8.8984375,"y":14.4599609375},{"x":3.6640625,"y":7.7861328125}]},{"centroid":{"x":1.47216796875,"y":40.40283203125},"relative":[{"x":-1.962890625,"y":1.701171875},{"x":7.2626953125,"y":-4.1875},{"x":-5.2998046875,"y":2.486328125}]},{"centroid":{"x":-1.66845703125,"y":30.71923828125},"relative":[{"x":-2.1591796875,"y":12.169921875},{"x":11.9736328125,"y":-24.5361328125},{"x":-9.814453125,"y":12.3662109375}]},{"centroid":{"x":-15.93212890625,"y":11.67919921875},"relative":[{"x":-1.83203125,"y":-14.1328125},{"x":-2.224609375,"y":29.6396484375},{"x":4.056640625,"y":-15.5068359375}]},{"centroid":{"x":-6.57568359375,"y":14.55810546875},"relative":[{"x":-5.2998046875,"y":-18.3857421875},{"x":-11.5810546875,"y":26.7607421875},{"x":16.880859375,"y":-8.375}]},{"centroid":{"x":-6.44482421875,"y":30.19580078125},"relative":[{"x":-5.0380859375,"y":12.8896484375},{"x":16.75,"y":-24.0126953125},{"x":-11.7119140625,"y":11.123046875}]},{"centroid":{"x":-14.88525390625,"y":42.30029296875},"relative":[{"x":-0.130859375,"y":0.1962890625},{"x":3.40234375,"y":0.78515625},{"x":-3.271484375,"y":-0.9814453125}]},{"centroid":{"x":-21.03564453125,"y":43.15087890625},"relative":[{"x":0.3271484375,"y":0.3271484375},{"x":2.87890625,"y":-1.83203125},{"x":-3.2060546875,"y":1.5048828125}]},{"centroid":{"x":-23.65283203125,"y":43.54345703125},"relative":[{"x":-0.5888671875,"y":1.1123046875},{"x":5.49609375,"y":-2.224609375},{"x":-4.9072265625,"y":1.1123046875}]},{"centroid":{"x":-26.72802734375,"y":42.82373046875},"relative":[{"x":8.5712890625,"y":-1.5048828125},{"x":-6.7392578125,"y":-0.3271484375},{"x":-1.83203125,"y":1.83203125}]},{"centroid":{"x":-30.91552734375,"y":43.73974609375},"relative":[{"x":0.1962890625,"y":0.3271484375},{"x":2.35546875,"y":0.916015625},{"x":-2.5517578125,"y":-1.2431640625}]},{"centroid":{"x":-29.21435546875,"y":41.25341796875},"relative":[{"x":-4.2529296875,"y":1.2431640625},{"x":11.0576171875,"y":0.0654296875},{"x":-6.8046875,"y":-1.30859375}]},{"centroid":{"x":-30.98095703125,"y":38.83251953125},"relative":[{"x":-5.0380859375,"y":1.1123046875},{"x":12.82421875,"y":2.486328125},{"x":-7.7861328125,"y":-3.5986328125}]},{"centroid":{"x":-32.28955078125,"y":36.14990234375},"relative":[{"x":-6.4775390625,"y":-0.916015625},{"x":14.1328125,"y":5.1689453125},{"x":-7.6552734375,"y":-4.2529296875}]},{"centroid":{"x":-33.07470703125,"y":33.33642578125},"relative":[{"x":-6.8701171875,"y":-1.439453125},{"x":14.91796875,"y":7.982421875},{"x":-8.0478515625,"y":-6.54296875}]},{"centroid":{"x":-25.87744140625,"y":20.11962890625},"relative":[{"x":8.11328125,"y":-22.5732421875},{"x":-15.833984375,"y":1.3740234375},{"x":7.720703125,"y":21.19921875}]},{"centroid":{"x":-33.66357421875,"y":29.86865234375},"relative":[{"x":-7.458984375,"y":-3.0751953125},{"x":15.5068359375,"y":11.4501953125},{"x":-8.0478515625,"y":-8.375}]},{"centroid":{"x":-33.66357421875,"y":9.91259765625},"relative":[{"x":-8.0478515625,"y":11.5810546875},{"x":15.8994140625,"y":-12.3662109375},{"x":-7.8515625,"y":0.78515625}]},{"centroid":{"x":-33.07470703125,"y":3.89306640625},"relative":[{"x":-8.4404296875,"y":6.8046875},{"x":15.310546875,"y":-6.3466796875},{"x":-6.8701171875,"y":-0.4580078125}]},{"centroid":{"x":-31.96240234375,"y":0.22900390625},"relative":[{"x":-7.982421875,"y":3.2060546875},{"x":14.1982421875,"y":-2.6826171875},{"x":-6.2158203125,"y":-0.5234375}]},{"centroid":{"x":-30.65380859375,"y":-1.99560546875},"relative":[{"x":-7.5244140625,"y":1.701171875},{"x":12.8896484375,"y":-0.4580078125},{"x":-5.365234375,"y":-1.2431640625}]},{"centroid":{"x":-33.92529296875,"y":-4.87451171875},"relative":[{"x":-0.5234375,"y":0.0654296875},{"x":-2.09375,"y":1.6357421875},{"x":2.6171875,"y":-1.701171875}]},{"centroid":{"x":-32.42041015625,"y":-5.59423828125},"relative":[{"x":1.1123046875,"y":-0.9814453125},{"x":-3.5986328125,"y":2.35546875},{"x":2.486328125,"y":-1.3740234375}]},{"centroid":{"x":-20.70849609375,"y":-4.80908203125},"relative":[{"x":2.9443359375,"y":2.35546875},{"x":0.5888671875,"y":-0.392578125},{"x":-3.533203125,"y":-1.962890625}]},{"centroid":{"x":-26.00830078125,"y":-4.15478515625},"relative":[{"x":8.244140625,"y":1.701171875},{"x":1.7666015625,"y":-2.6171875},{"x":-10.0107421875,"y":0.916015625}]},{"centroid":{"x":-30.06494140625,"y":-5.65966796875},"relative":[{"x":0.130859375,"y":-1.30859375},{"x":-5.9541015625,"y":2.4208984375},{"x":5.8232421875,"y":-1.1123046875}]}]'),mv=[{centroid:{x:8.14599609375,y:12.79150390625},relative:[{x:.5888671875,y:.0654296875},{x:-3.140625,y:-2.87890625},{x:2.5517578125,y:2.8134765625}]},{centroid:{x:13.24951171875,y:15.21240234375},relative:[{x:-.78515625,y:-.1962890625},{x:-2.5517578125,y:.392578125},{x:3.3369140625,y:-.1962890625}]},{centroid:{x:15.21240234375,y:15.40869140625},relative:[{x:1.3740234375,y:-.392578125},{x:-4.5146484375,y:.1962890625},{x:3.140625,y:.1962890625}]},{centroid:{x:16.45556640625,y:15.99755859375},relative:[{x:1.8974609375,y:-.392578125},{x:-5.7578125,y:-.392578125},{x:3.8603515625,y:.78515625}]},{centroid:{x:17.69873046875,y:16.97900390625},relative:[{x:2.6171875,y:-.1962890625},{x:-7.0009765625,y:-1.3740234375},{x:4.3837890625,y:1.5703125}]},{centroid:{x:18.74560546875,y:18.22216796875},relative:[{x:3.3369140625,y:.3271484375},{x:-8.0478515625,y:-2.6171875},{x:4.7109375,y:2.2900390625}]},{centroid:{x:19.66162109375,y:20.05419921875},relative:[{x:3.794921875,y:.4580078125},{x:-8.9638671875,y:-4.44921875},{x:5.1689453125,y:3.9912109375}]},{centroid:{x:20.05419921875,y:23.58740234375},relative:[{x:4.7763671875,y:.4580078125},{x:-9.3564453125,y:-7.982421875},{x:4.580078125,y:7.5244140625}]},{centroid:{x:19.79248046875,y:26.66259765625},relative:[{x:4.841796875,y:4.44921875},{x:-9.0947265625,y:-11.0576171875},{x:4.2529296875,y:6.6083984375}]},{centroid:{x:19.00732421875,y:28.62548828125},relative:[{x:5.0380859375,y:4.6455078125},{x:-8.3095703125,y:-13.0205078125},{x:3.271484375,y:8.375}]},{centroid:{x:17.89501953125,y:30.58837890625},relative:[{x:4.3837890625,y:6.412109375},{x:-7.197265625,y:-14.9833984375},{x:2.8134765625,y:8.5712890625}]},{centroid:{x:16.32470703125,y:32.28955078125},relative:[{x:4.3837890625,y:6.8701171875},{x:-5.626953125,y:-16.6845703125},{x:1.2431640625,y:9.814453125}]},{centroid:{x:14.55810546875,y:33.72900390625},relative:[{x:3.009765625,y:8.375},{x:-3.8603515625,y:-18.1240234375},{x:.8505859375,y:9.7490234375}]},{centroid:{x:13.05322265625,y:34.51416015625},relative:[{x:2.35546875,y:8.9638671875},{x:-2.35546875,y:-18.9091796875},{x:0,y:9.9453125}]},{centroid:{x:11.41748046875,y:35.03759765625},relative:[{x:1.6357421875,y:9.421875},{x:-.7197265625,y:-19.4326171875},{x:-.916015625,y:10.0107421875}]},{centroid:{x:8.01513671875,y:35.16845703125},relative:[{x:2.486328125,y:9.8798828125},{x:2.6826171875,y:-19.5634765625},{x:-5.1689453125,y:9.68359375}]},{centroid:{x:3.82763671875,y:22.27880859375},relative:[{x:1.177734375,y:-12.3662109375},{x:-8.0478515625,y:19.0400390625},{x:6.8701171875,y:-6.673828125}]},{centroid:{x:3.10791015625,y:33.92529296875},relative:[{x:7.58984375,y:-18.3203125},{x:-7.328125,y:7.3935546875},{x:-.26171875,y:10.9267578125}]},{centroid:{x:-.42529296875,y:43.41259765625},relative:[{x:3.271484375,y:1.439453125},{x:-3.794921875,y:-2.09375},{x:.5234375,y:.654296875}]},{centroid:{x:-2.12646484375,y:42.75830078125},relative:[{x:-.130859375,y:.130859375},{x:2.224609375,y:1.30859375},{x:-2.09375,y:-1.439453125}]},{centroid:{x:-7.16455078125,y:43.34716796875},relative:[{x:2.9443359375,y:-2.0283203125},{x:-3.7294921875,y:1.8974609375},{x:.78515625,y:.130859375}]},{centroid:{x:-9.97802734375,y:43.93603515625},relative:[{x:-.916015625,y:1.30859375},{x:5.7578125,y:-2.6171875},{x:-4.841796875,y:1.30859375}]},{centroid:{x:-17.17529296875,y:44.52490234375},relative:[{x:-.1962890625,y:.130859375},{x:2.35546875,y:.7197265625},{x:-2.1591796875,y:-.8505859375}]},{centroid:{x:-18.61474609375,y:43.54345703125},relative:[{x:-.7197265625,y:.130859375},{x:3.794921875,y:1.701171875},{x:-3.0751953125,y:-1.83203125}]},{centroid:{x:-14.49267578125,y:41.18798828125},relative:[{x:10.2724609375,y:.130859375},{x:-9.9453125,y:-4.1875},{x:-.3271484375,y:4.056640625}]},{centroid:{x:-20.31591796875,y:41.31884765625},relative:[{x:5.49609375,y:3.92578125},{x:-4.1220703125,y:-4.318359375},{x:-1.3740234375,y:.392578125}]},{centroid:{x:-17.82958984375,y:37.91650390625},relative:[{x:-6.6083984375,y:-.916015625},{x:13.609375,y:3.40234375},{x:-7.0009765625,y:-2.486328125}]},{centroid:{x:-17.96044921875,y:35.36474609375},relative:[{x:-6.8701171875,y:.0654296875},{x:13.740234375,y:5.9541015625},{x:-6.8701171875,y:-6.01953125}]},{centroid:{x:-7.49169921875,y:23.39111328125},relative:[{x:12.4970703125,y:-13.478515625},{x:-15.7685546875,y:-4.44921875},{x:3.271484375,y:17.927734375}]},{centroid:{x:-17.43701171875,y:29.86865234375},relative:[{x:-7.3935546875,y:-.5234375},{x:13.216796875,y:11.4501953125},{x:-5.8232421875,y:-10.9267578125}]},{centroid:{x:-13.11865234375,y:13.11865234375},relative:[{x:-10.1416015625,y:5.8232421875},{x:18.1240234375,y:-3.2060546875},{x:-7.982421875,y:-2.6171875}]},{centroid:{x:-11.74462890625,y:8.40771484375},relative:[{x:-9.3564453125,y:2.09375},{x:16.75,y:1.5048828125},{x:-7.3935546875,y:-3.5986328125}]},{centroid:{x:-2.25732421875,y:5.98681640625},relative:[{x:7.8515625,y:1.3740234375},{x:-15.1142578125,y:-5.2998046875},{x:7.2626953125,y:3.92578125}]},{centroid:{x:-10.50146484375,y:5.13623046875},relative:[{x:-8.63671875,y:-.3271484375},{x:15.5068359375,y:4.7763671875},{x:-6.8701171875,y:-4.44921875}]},{centroid:{x:-1.66845703125,y:2.64990234375},relative:[{x:7.2626953125,y:-.78515625},{x:-14.525390625,y:-3.92578125},{x:7.2626953125,y:4.7109375}]},{centroid:{x:-9.32373046875,y:2.25732421875},relative:[{x:-8.0478515625,y:-1.5703125},{x:14.91796875,y:5.103515625},{x:-6.8701171875,y:-3.533203125}]},{centroid:{x:-1.01416015625,y:-1.99560546875},relative:[{x:4.841796875,y:-.4580078125},{x:-11.4501953125,y:-3.40234375},{x:6.6083984375,y:3.8603515625}]},{centroid:{x:-7.68798828125,y:-1.60302734375},relative:[{x:-8.505859375,y:.3271484375},{x:13.2822265625,y:3.4677734375},{x:-4.7763671875,y:-3.794921875}]},{centroid:{x:.62158203125,y:-5.07080078125},relative:[{x:3.2060546875,y:2.6171875},{x:.654296875,y:-.3271484375},{x:-3.8603515625,y:-2.2900390625}]},{centroid:{x:-3.95849609375,y:-5.07080078125},relative:[{x:7.7861328125,y:2.6171875},{x:.7197265625,y:-2.2900390625},{x:-8.505859375,y:-.3271484375}]},{centroid:{x:-8.60400390625,y:-6.51025390625},relative:[{x:-1.5048828125,y:-.26171875},{x:-3.8603515625,y:1.1123046875},{x:5.365234375,y:-.8505859375}]},{centroid:{x:-6.96826171875,y:-7.22998046875},relative:[{x:-.5888671875,y:-.3271484375},{x:-3.140625,y:.4580078125},{x:3.7294921875,y:-.130859375}]}];var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ia={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var gv=ia.exports,Cu;function xv(){return Cu||(Cu=1,function(s,e){(function(n,i){s.exports=i()})(gv,function(){return function(t){var n={};function i(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=n,i.d=function(r,a,o){i.o(r,a)||Object.defineProperty(r,a,{enumerable:!0,get:o})},i.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,a){if(a&1&&(r=i(r)),a&8||a&4&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),a&2&&typeof r!="string")for(var l in r)i.d(o,l,(function(f){return r[f]}).bind(null,l));return o},i.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(a,"a",a),a},i.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},i.p="",i(i.s=20)}([function(t,n){var i={};t.exports=i,function(){i._baseDelta=1e3/60,i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i._warnedOnce={},i._decomp=null,i.extend=function(a,o){var l,f;typeof o=="boolean"?(l=2,f=o):(l=1,f=!0);for(var c=l;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)f&&d[h]&&d[h].constructor===Object&&(!a[h]||a[h].constructor===Object)?(a[h]=a[h]||{},i.extend(a[h],f,d[h])):a[h]=d[h]}return a},i.clone=function(a,o){return i.extend({},o,a)},i.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var l in a)o.push(l);return o},i.values=function(a){var o=[];if(Object.keys){for(var l=Object.keys(a),f=0;f<l.length;f++)o.push(a[l[f]]);return o}for(var c in a)o.push(a[c]);return o},i.get=function(a,o,l,f){o=o.split(".").slice(l,f);for(var c=0;c<o.length;c+=1)a=a[o[c]];return a},i.set=function(a,o,l,f,c){var d=o.split(".").slice(f,c);return i.get(a,o,0,-1)[d[d.length-1]]=l,l},i.shuffle=function(a){for(var o=a.length-1;o>0;o--){var l=Math.floor(i.random()*(o+1)),f=a[o];a[o]=a[l],a[l]=f}return a},i.choose=function(a){return a[Math.floor(i.random()*a.length)]},i.isElement=function(a){return typeof HTMLElement<"u"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},i.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},i.isFunction=function(a){return typeof a=="function"},i.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},i.isString=function(a){return toString.call(a)==="[object String]"},i.clamp=function(a,o,l){return a<o?o:a>l?l:a},i.sign=function(a){return a<0?-1:1},i.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-i._nowStartTime},i.random=function(a,o){return a=typeof a<"u"?a:0,o=typeof o<"u"?o:1,a+r()*(o-a)};var r=function(){return i._seed=(i._seed*9301+49297)%233280,i._seed/233280};i.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},i.logLevel=1,i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");i._warnedOnce[a]||(i.warn(a),i._warnedOnce[a]=!0)},i.deprecated=function(a,o,l){a[o]=i.chain(function(){i.warnOnce("🔅 deprecated 🔅",l)},a[o])},i.nextId=function(){return i._nextId++},i.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var l=0;l<a.length;l++)if(a[l]===o)return l;return-1},i.map=function(a,o){if(a.map)return a.map(o);for(var l=[],f=0;f<a.length;f+=1)l.push(o(a[f]));return l},i.topologicalSort=function(a){var o=[],l=[],f=[];for(var c in a)!l[c]&&!f[c]&&i._topologicalSort(c,l,f,a,o);return o},i._topologicalSort=function(a,o,l,f,c){var d=f[a]||[];l[a]=!0;for(var h=0;h<d.length;h+=1){var u=d[h];l[u]||o[u]||i._topologicalSort(u,o,l,f,c)}l[a]=!1,o[a]=!0,c.push(a)},i.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var l=arguments[o];l._chained?a.push.apply(a,l._chained):a.push(l)}var f=function(){for(var c,d=new Array(arguments.length),h=0,u=arguments.length;h<u;h++)d[h]=arguments[h];for(h=0;h<a.length;h+=1){var g=a[h].apply(c,d);typeof g<"u"&&(c=g)}return c};return f._chained=a,f},i.chainPathBefore=function(a,o,l){return i.set(a,o,i.chain(l,i.get(a,o)))},i.chainPathAfter=function(a,o,l){return i.set(a,o,i.chain(i.get(a,o),l))},i.setDecomp=function(a){i._decomp=a},i.getDecomp=function(){var a=i._decomp;try{!a&&typeof window<"u"&&(a=window.decomp),!a&&typeof bu<"u"&&(a=bu.decomp)}catch{a=null}return a}}()},function(t,n){var i={};t.exports=i,function(){i.create=function(r){var a={min:{x:0,y:0},max:{x:0,y:0}};return r&&i.update(a,r),a},i.update=function(r,a,o){r.min.x=1/0,r.max.x=-1/0,r.min.y=1/0,r.max.y=-1/0;for(var l=0;l<a.length;l++){var f=a[l];f.x>r.max.x&&(r.max.x=f.x),f.x<r.min.x&&(r.min.x=f.x),f.y>r.max.y&&(r.max.y=f.y),f.y<r.min.y&&(r.min.y=f.y)}o&&(o.x>0?r.max.x+=o.x:r.min.x+=o.x,o.y>0?r.max.y+=o.y:r.min.y+=o.y)},i.contains=function(r,a){return a.x>=r.min.x&&a.x<=r.max.x&&a.y>=r.min.y&&a.y<=r.max.y},i.overlaps=function(r,a){return r.min.x<=a.max.x&&r.max.x>=a.min.x&&r.max.y>=a.min.y&&r.min.y<=a.max.y},i.translate=function(r,a){r.min.x+=a.x,r.max.x+=a.x,r.min.y+=a.y,r.max.y+=a.y},i.shift=function(r,a){var o=r.max.x-r.min.x,l=r.max.y-r.min.y;r.min.x=a.x,r.max.x=a.x+o,r.min.y=a.y,r.max.y=a.y+l}}()},function(t,n){var i={};t.exports=i,function(){i.create=function(r,a){return{x:r||0,y:a||0}},i.clone=function(r){return{x:r.x,y:r.y}},i.magnitude=function(r){return Math.sqrt(r.x*r.x+r.y*r.y)},i.magnitudeSquared=function(r){return r.x*r.x+r.y*r.y},i.rotate=function(r,a,o){var l=Math.cos(a),f=Math.sin(a);o||(o={});var c=r.x*l-r.y*f;return o.y=r.x*f+r.y*l,o.x=c,o},i.rotateAbout=function(r,a,o,l){var f=Math.cos(a),c=Math.sin(a);l||(l={});var d=o.x+((r.x-o.x)*f-(r.y-o.y)*c);return l.y=o.y+((r.x-o.x)*c+(r.y-o.y)*f),l.x=d,l},i.normalise=function(r){var a=i.magnitude(r);return a===0?{x:0,y:0}:{x:r.x/a,y:r.y/a}},i.dot=function(r,a){return r.x*a.x+r.y*a.y},i.cross=function(r,a){return r.x*a.y-r.y*a.x},i.cross3=function(r,a,o){return(a.x-r.x)*(o.y-r.y)-(a.y-r.y)*(o.x-r.x)},i.add=function(r,a,o){return o||(o={}),o.x=r.x+a.x,o.y=r.y+a.y,o},i.sub=function(r,a,o){return o||(o={}),o.x=r.x-a.x,o.y=r.y-a.y,o},i.mult=function(r,a){return{x:r.x*a,y:r.y*a}},i.div=function(r,a){return{x:r.x/a,y:r.y/a}},i.perp=function(r,a){return a=a===!0?-1:1,{x:a*-r.y,y:a*r.x}},i.neg=function(r){return{x:-r.x,y:-r.y}},i.angle=function(r,a){return Math.atan2(a.y-r.y,a.x-r.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]}()},function(t,n,i){var r={};t.exports=r;var a=i(2),o=i(0);(function(){r.create=function(l,f){for(var c=[],d=0;d<l.length;d++){var h=l[d],u={x:h.x,y:h.y,index:d,body:f,isInternal:!1};c.push(u)}return c},r.fromPath=function(l,f){var c=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return l.replace(c,function(h,u,g){d.push({x:parseFloat(u),y:parseFloat(g)})}),r.create(d,f)},r.centre=function(l){for(var f=r.area(l,!0),c={x:0,y:0},d,h,u,g=0;g<l.length;g++)u=(g+1)%l.length,d=a.cross(l[g],l[u]),h=a.mult(a.add(l[g],l[u]),d),c=a.add(c,h);return a.div(c,6*f)},r.mean=function(l){for(var f={x:0,y:0},c=0;c<l.length;c++)f.x+=l[c].x,f.y+=l[c].y;return a.div(f,l.length)},r.area=function(l,f){for(var c=0,d=l.length-1,h=0;h<l.length;h++)c+=(l[d].x-l[h].x)*(l[d].y+l[h].y),d=h;return f?c/2:Math.abs(c)/2},r.inertia=function(l,f){for(var c=0,d=0,h=l,u,g,p=0;p<h.length;p++)g=(p+1)%h.length,u=Math.abs(a.cross(h[g],h[p])),c+=u*(a.dot(h[g],h[g])+a.dot(h[g],h[p])+a.dot(h[p],h[p])),d+=u;return f/6*(c/d)},r.translate=function(l,f,c){c=typeof c<"u"?c:1;var d=l.length,h=f.x*c,u=f.y*c,g;for(g=0;g<d;g++)l[g].x+=h,l[g].y+=u;return l},r.rotate=function(l,f,c){if(f!==0){var d=Math.cos(f),h=Math.sin(f),u=c.x,g=c.y,p=l.length,m,x,S,T;for(T=0;T<p;T++)m=l[T],x=m.x-u,S=m.y-g,m.x=u+(x*d-S*h),m.y=g+(x*h+S*d);return l}},r.contains=function(l,f){for(var c=f.x,d=f.y,h=l.length,u=l[h-1],g,p=0;p<h;p++){if(g=l[p],(c-u.x)*(g.y-u.y)+(d-u.y)*(u.x-g.x)>0)return!1;u=g}return!0},r.scale=function(l,f,c,d){if(f===1&&c===1)return l;d=d||r.centre(l);for(var h,u,g=0;g<l.length;g++)h=l[g],u=a.sub(h,d),l[g].x=d.x+u.x*f,l[g].y=d.y+u.y*c;return l},r.chamfer=function(l,f,c,d,h){typeof f=="number"?f=[f]:f=f||[8],c=typeof c<"u"?c:-1,d=d||2,h=h||14;for(var u=[],g=0;g<l.length;g++){var p=l[g-1>=0?g-1:l.length-1],m=l[g],x=l[(g+1)%l.length],S=f[g<f.length?g:f.length-1];if(S===0){u.push(m);continue}var T=a.normalise({x:m.y-p.y,y:p.x-m.x}),M=a.normalise({x:x.y-m.y,y:m.x-x.x}),_=Math.sqrt(2*Math.pow(S,2)),E=a.mult(o.clone(T),S),A=a.normalise(a.mult(a.add(T,M),.5)),w=a.sub(m,a.mult(A,_)),y=c;c===-1&&(y=Math.pow(S,.32)*1.75),y=o.clamp(y,d,h),y%2===1&&(y+=1);for(var v=Math.acos(a.dot(T,M)),b=v/y,R=0;R<y;R++)u.push(a.add(a.rotate(E,b*R),w))}return u},r.clockwiseSort=function(l){var f=r.mean(l);return l.sort(function(c,d){return a.angle(f,c)-a.angle(f,d)}),l},r.isConvex=function(l){var f=0,c=l.length,d,h,u,g;if(c<3)return null;for(d=0;d<c;d++)if(h=(d+1)%c,u=(d+2)%c,g=(l[h].x-l[d].x)*(l[u].y-l[h].y),g-=(l[h].y-l[d].y)*(l[u].x-l[h].x),g<0?f|=1:g>0&&(f|=2),f===3)return!1;return f!==0?!0:null},r.hull=function(l){var f=[],c=[],d,h;for(l=l.slice(0),l.sort(function(u,g){var p=u.x-g.x;return p!==0?p:u.y-g.y}),h=0;h<l.length;h+=1){for(d=l[h];c.length>=2&&a.cross3(c[c.length-2],c[c.length-1],d)<=0;)c.pop();c.push(d)}for(h=l.length-1;h>=0;h-=1){for(d=l[h];f.length>=2&&a.cross3(f[f.length-2],f[f.length-1],d)<=0;)f.pop();f.push(d)}return f.pop(),c.pop(),f.concat(c)}})()},function(t,n,i){var r={};t.exports=r;var a=i(3),o=i(2),l=i(7),f=i(0),c=i(1),d=i(11);(function(){r._timeCorrection=!0,r._inertiaScale=4,r._nextCollidingGroupId=1,r._nextNonCollidingGroupId=-1,r._nextCategory=1,r._baseDelta=1e3/60,r.create=function(u){var g={id:f.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},p=f.extend(g,u);return h(p,u),p},r.nextGroup=function(u){return u?r._nextNonCollidingGroupId--:r._nextCollidingGroupId++},r.nextCategory=function(){return r._nextCategory=r._nextCategory<<1,r._nextCategory};var h=function(u,g){g=g||{},r.set(u,{bounds:u.bounds||c.create(u.vertices),positionPrev:u.positionPrev||o.clone(u.position),anglePrev:u.anglePrev||u.angle,vertices:u.vertices,parts:u.parts||[u],isStatic:u.isStatic,isSleeping:u.isSleeping,parent:u.parent||u}),a.rotate(u.vertices,u.angle,u.position),d.rotate(u.axes,u.angle),c.update(u.bounds,u.vertices,u.velocity),r.set(u,{axes:g.axes||u.axes,area:g.area||u.area,mass:g.mass||u.mass,inertia:g.inertia||u.inertia});var p=u.isStatic?"#14151f":f.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=u.isStatic?"#555":"#ccc",x=u.isStatic&&u.render.fillStyle===null?1:0;u.render.fillStyle=u.render.fillStyle||p,u.render.strokeStyle=u.render.strokeStyle||m,u.render.lineWidth=u.render.lineWidth||x,u.render.sprite.xOffset+=-(u.bounds.min.x-u.position.x)/(u.bounds.max.x-u.bounds.min.x),u.render.sprite.yOffset+=-(u.bounds.min.y-u.position.y)/(u.bounds.max.y-u.bounds.min.y)};r.set=function(u,g,p){var m;typeof g=="string"&&(m=g,g={},g[m]=p);for(m in g)if(Object.prototype.hasOwnProperty.call(g,m))switch(p=g[m],m){case"isStatic":r.setStatic(u,p);break;case"isSleeping":l.set(u,p);break;case"mass":r.setMass(u,p);break;case"density":r.setDensity(u,p);break;case"inertia":r.setInertia(u,p);break;case"vertices":r.setVertices(u,p);break;case"position":r.setPosition(u,p);break;case"angle":r.setAngle(u,p);break;case"velocity":r.setVelocity(u,p);break;case"angularVelocity":r.setAngularVelocity(u,p);break;case"speed":r.setSpeed(u,p);break;case"angularSpeed":r.setAngularSpeed(u,p);break;case"parts":r.setParts(u,p);break;case"centre":r.setCentre(u,p);break;default:u[m]=p}},r.setStatic=function(u,g){for(var p=0;p<u.parts.length;p++){var m=u.parts[p];g?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=g}},r.setMass=function(u,g){var p=u.inertia/(u.mass/6);u.inertia=p*(g/6),u.inverseInertia=1/u.inertia,u.mass=g,u.inverseMass=1/u.mass,u.density=u.mass/u.area},r.setDensity=function(u,g){r.setMass(u,g*u.area),u.density=g},r.setInertia=function(u,g){u.inertia=g,u.inverseInertia=1/u.inertia},r.setVertices=function(u,g){g[0].body===u?u.vertices=g:u.vertices=a.create(g,u),u.axes=d.fromVertices(u.vertices),u.area=a.area(u.vertices),r.setMass(u,u.density*u.area);var p=a.centre(u.vertices);a.translate(u.vertices,p,-1),r.setInertia(u,r._inertiaScale*a.inertia(u.vertices,u.mass)),a.translate(u.vertices,u.position),c.update(u.bounds,u.vertices,u.velocity)},r.setParts=function(u,g,p){var m;for(g=g.slice(0),u.parts.length=0,u.parts.push(u),u.parent=u,m=0;m<g.length;m++){var x=g[m];x!==u&&(x.parent=u,u.parts.push(x))}if(u.parts.length!==1){if(p=typeof p<"u"?p:!0,p){var S=[];for(m=0;m<g.length;m++)S=S.concat(g[m].vertices);a.clockwiseSort(S);var T=a.hull(S),M=a.centre(T);r.setVertices(u,T),a.translate(u.vertices,M)}var _=r._totalProperties(u);u.area=_.area,u.parent=u,u.position.x=_.centre.x,u.position.y=_.centre.y,u.positionPrev.x=_.centre.x,u.positionPrev.y=_.centre.y,r.setMass(u,_.mass),r.setInertia(u,_.inertia),r.setPosition(u,_.centre)}},r.setCentre=function(u,g,p){p?(u.positionPrev.x+=g.x,u.positionPrev.y+=g.y,u.position.x+=g.x,u.position.y+=g.y):(u.positionPrev.x=g.x-(u.position.x-u.positionPrev.x),u.positionPrev.y=g.y-(u.position.y-u.positionPrev.y),u.position.x=g.x,u.position.y=g.y)},r.setPosition=function(u,g,p){var m=o.sub(g,u.position);p?(u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.velocity.x=m.x,u.velocity.y=m.y,u.speed=o.magnitude(m)):(u.positionPrev.x+=m.x,u.positionPrev.y+=m.y);for(var x=0;x<u.parts.length;x++){var S=u.parts[x];S.position.x+=m.x,S.position.y+=m.y,a.translate(S.vertices,m),c.update(S.bounds,S.vertices,u.velocity)}},r.setAngle=function(u,g,p){var m=g-u.angle;p?(u.anglePrev=u.angle,u.angularVelocity=m,u.angularSpeed=Math.abs(m)):u.anglePrev+=m;for(var x=0;x<u.parts.length;x++){var S=u.parts[x];S.angle+=m,a.rotate(S.vertices,m,u.position),d.rotate(S.axes,m),c.update(S.bounds,S.vertices,u.velocity),x>0&&o.rotateAbout(S.position,m,u.position,S.position)}},r.setVelocity=function(u,g){var p=u.deltaTime/r._baseDelta;u.positionPrev.x=u.position.x-g.x*p,u.positionPrev.y=u.position.y-g.y*p,u.velocity.x=(u.position.x-u.positionPrev.x)/p,u.velocity.y=(u.position.y-u.positionPrev.y)/p,u.speed=o.magnitude(u.velocity)},r.getVelocity=function(u){var g=r._baseDelta/u.deltaTime;return{x:(u.position.x-u.positionPrev.x)*g,y:(u.position.y-u.positionPrev.y)*g}},r.getSpeed=function(u){return o.magnitude(r.getVelocity(u))},r.setSpeed=function(u,g){r.setVelocity(u,o.mult(o.normalise(r.getVelocity(u)),g))},r.setAngularVelocity=function(u,g){var p=u.deltaTime/r._baseDelta;u.anglePrev=u.angle-g*p,u.angularVelocity=(u.angle-u.anglePrev)/p,u.angularSpeed=Math.abs(u.angularVelocity)},r.getAngularVelocity=function(u){return(u.angle-u.anglePrev)*r._baseDelta/u.deltaTime},r.getAngularSpeed=function(u){return Math.abs(r.getAngularVelocity(u))},r.setAngularSpeed=function(u,g){r.setAngularVelocity(u,f.sign(r.getAngularVelocity(u))*g)},r.translate=function(u,g,p){r.setPosition(u,o.add(u.position,g),p)},r.rotate=function(u,g,p,m){if(!p)r.setAngle(u,u.angle+g,m);else{var x=Math.cos(g),S=Math.sin(g),T=u.position.x-p.x,M=u.position.y-p.y;r.setPosition(u,{x:p.x+(T*x-M*S),y:p.y+(T*S+M*x)},m),r.setAngle(u,u.angle+g,m)}},r.scale=function(u,g,p,m){var x=0,S=0;m=m||u.position;for(var T=0;T<u.parts.length;T++){var M=u.parts[T];a.scale(M.vertices,g,p,m),M.axes=d.fromVertices(M.vertices),M.area=a.area(M.vertices),r.setMass(M,u.density*M.area),a.translate(M.vertices,{x:-M.position.x,y:-M.position.y}),r.setInertia(M,r._inertiaScale*a.inertia(M.vertices,M.mass)),a.translate(M.vertices,{x:M.position.x,y:M.position.y}),T>0&&(x+=M.area,S+=M.inertia),M.position.x=m.x+(M.position.x-m.x)*g,M.position.y=m.y+(M.position.y-m.y)*p,c.update(M.bounds,M.vertices,u.velocity)}u.parts.length>1&&(u.area=x,u.isStatic||(r.setMass(u,u.density*x),r.setInertia(u,S))),u.circleRadius&&(g===p?u.circleRadius*=g:u.circleRadius=null)},r.update=function(u,g){g=(typeof g<"u"?g:1e3/60)*u.timeScale;var p=g*g,m=r._timeCorrection?g/(u.deltaTime||g):1,x=1-u.frictionAir*(g/f._baseDelta),S=(u.position.x-u.positionPrev.x)*m,T=(u.position.y-u.positionPrev.y)*m;u.velocity.x=S*x+u.force.x/u.mass*p,u.velocity.y=T*x+u.force.y/u.mass*p,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.position.x+=u.velocity.x,u.position.y+=u.velocity.y,u.deltaTime=g,u.angularVelocity=(u.angle-u.anglePrev)*x*m+u.torque/u.inertia*p,u.anglePrev=u.angle,u.angle+=u.angularVelocity;for(var M=0;M<u.parts.length;M++){var _=u.parts[M];a.translate(_.vertices,u.velocity),M>0&&(_.position.x+=u.velocity.x,_.position.y+=u.velocity.y),u.angularVelocity!==0&&(a.rotate(_.vertices,u.angularVelocity,u.position),d.rotate(_.axes,u.angularVelocity),M>0&&o.rotateAbout(_.position,u.angularVelocity,u.position,_.position)),c.update(_.bounds,_.vertices,u.velocity)}},r.updateVelocities=function(u){var g=r._baseDelta/u.deltaTime,p=u.velocity;p.x=(u.position.x-u.positionPrev.x)*g,p.y=(u.position.y-u.positionPrev.y)*g,u.speed=Math.sqrt(p.x*p.x+p.y*p.y),u.angularVelocity=(u.angle-u.anglePrev)*g,u.angularSpeed=Math.abs(u.angularVelocity)},r.applyForce=function(u,g,p){var m={x:g.x-u.position.x,y:g.y-u.position.y};u.force.x+=p.x,u.force.y+=p.y,u.torque+=m.x*p.y-m.y*p.x},r._totalProperties=function(u){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},p=u.parts.length===1?0:1;p<u.parts.length;p++){var m=u.parts[p],x=m.mass!==1/0?m.mass:1;g.mass+=x,g.area+=m.area,g.inertia+=m.inertia,g.centre=o.add(g.centre,o.mult(m.position,x))}return g.centre=o.div(g.centre,g.mass),g}})()},function(t,n,i){var r={};t.exports=r;var a=i(0);(function(){r.on=function(o,l,f){for(var c=l.split(" "),d,h=0;h<c.length;h++)d=c[h],o.events=o.events||{},o.events[d]=o.events[d]||[],o.events[d].push(f);return f},r.off=function(o,l,f){if(!l){o.events={};return}typeof l=="function"&&(f=l,l=a.keys(o.events).join(" "));for(var c=l.split(" "),d=0;d<c.length;d++){var h=o.events[c[d]],u=[];if(f&&h)for(var g=0;g<h.length;g++)h[g]!==f&&u.push(h[g]);o.events[c[d]]=u}},r.trigger=function(o,l,f){var c,d,h,u,g=o.events;if(g&&a.keys(g).length>0){f||(f={}),c=l.split(" ");for(var p=0;p<c.length;p++)if(d=c[p],h=g[d],h){u=a.clone(f,!1),u.name=d,u.source=o;for(var m=0;m<h.length;m++)h[m].apply(o,[u])}}}})()},function(t,n,i){var r={};t.exports=r;var a=i(5),o=i(0),l=i(1),f=i(4);(function(){r.create=function(c){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},c)},r.setModified=function(c,d,h,u){if(c.isModified=d,d&&c.cache&&(c.cache.allBodies=null,c.cache.allConstraints=null,c.cache.allComposites=null),h&&c.parent&&r.setModified(c.parent,d,h,u),u)for(var g=0;g<c.composites.length;g++){var p=c.composites[g];r.setModified(p,d,h,u)}},r.add=function(c,d){var h=[].concat(d);a.trigger(c,"beforeAdd",{object:d});for(var u=0;u<h.length;u++){var g=h[u];switch(g.type){case"body":if(g.parent!==g){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}r.addBody(c,g);break;case"constraint":r.addConstraint(c,g);break;case"composite":r.addComposite(c,g);break;case"mouseConstraint":r.addConstraint(c,g.constraint);break}}return a.trigger(c,"afterAdd",{object:d}),c},r.remove=function(c,d,h){var u=[].concat(d);a.trigger(c,"beforeRemove",{object:d});for(var g=0;g<u.length;g++){var p=u[g];switch(p.type){case"body":r.removeBody(c,p,h);break;case"constraint":r.removeConstraint(c,p,h);break;case"composite":r.removeComposite(c,p,h);break;case"mouseConstraint":r.removeConstraint(c,p.constraint);break}}return a.trigger(c,"afterRemove",{object:d}),c},r.addComposite=function(c,d){return c.composites.push(d),d.parent=c,r.setModified(c,!0,!0,!1),c},r.removeComposite=function(c,d,h){var u=o.indexOf(c.composites,d);if(u!==-1){var g=r.allBodies(d);r.removeCompositeAt(c,u);for(var p=0;p<g.length;p++)g[p].sleepCounter=0}if(h)for(var p=0;p<c.composites.length;p++)r.removeComposite(c.composites[p],d,!0);return c},r.removeCompositeAt=function(c,d){return c.composites.splice(d,1),r.setModified(c,!0,!0,!1),c},r.addBody=function(c,d){return c.bodies.push(d),r.setModified(c,!0,!0,!1),c},r.removeBody=function(c,d,h){var u=o.indexOf(c.bodies,d);if(u!==-1&&(r.removeBodyAt(c,u),d.sleepCounter=0),h)for(var g=0;g<c.composites.length;g++)r.removeBody(c.composites[g],d,!0);return c},r.removeBodyAt=function(c,d){return c.bodies.splice(d,1),r.setModified(c,!0,!0,!1),c},r.addConstraint=function(c,d){return c.constraints.push(d),r.setModified(c,!0,!0,!1),c},r.removeConstraint=function(c,d,h){var u=o.indexOf(c.constraints,d);if(u!==-1&&r.removeConstraintAt(c,u),h)for(var g=0;g<c.composites.length;g++)r.removeConstraint(c.composites[g],d,!0);return c},r.removeConstraintAt=function(c,d){return c.constraints.splice(d,1),r.setModified(c,!0,!0,!1),c},r.clear=function(c,d,h){if(h)for(var u=0;u<c.composites.length;u++)r.clear(c.composites[u],d,!0);return d?c.bodies=c.bodies.filter(function(g){return g.isStatic}):c.bodies.length=0,c.constraints.length=0,c.composites.length=0,r.setModified(c,!0,!0,!1),c},r.allBodies=function(c){if(c.cache&&c.cache.allBodies)return c.cache.allBodies;for(var d=[].concat(c.bodies),h=0;h<c.composites.length;h++)d=d.concat(r.allBodies(c.composites[h]));return c.cache&&(c.cache.allBodies=d),d},r.allConstraints=function(c){if(c.cache&&c.cache.allConstraints)return c.cache.allConstraints;for(var d=[].concat(c.constraints),h=0;h<c.composites.length;h++)d=d.concat(r.allConstraints(c.composites[h]));return c.cache&&(c.cache.allConstraints=d),d},r.allComposites=function(c){if(c.cache&&c.cache.allComposites)return c.cache.allComposites;for(var d=[].concat(c.composites),h=0;h<c.composites.length;h++)d=d.concat(r.allComposites(c.composites[h]));return c.cache&&(c.cache.allComposites=d),d},r.get=function(c,d,h){var u,g;switch(h){case"body":u=r.allBodies(c);break;case"constraint":u=r.allConstraints(c);break;case"composite":u=r.allComposites(c).concat(c);break}return u?(g=u.filter(function(p){return p.id.toString()===d.toString()}),g.length===0?null:g[0]):null},r.move=function(c,d,h){return r.remove(c,d),r.add(h,d),c},r.rebase=function(c){for(var d=r.allBodies(c).concat(r.allConstraints(c)).concat(r.allComposites(c)),h=0;h<d.length;h++)d[h].id=o.nextId();return c},r.translate=function(c,d,h){for(var u=h?r.allBodies(c):c.bodies,g=0;g<u.length;g++)f.translate(u[g],d);return c},r.rotate=function(c,d,h,u){for(var g=Math.cos(d),p=Math.sin(d),m=u?r.allBodies(c):c.bodies,x=0;x<m.length;x++){var S=m[x],T=S.position.x-h.x,M=S.position.y-h.y;f.setPosition(S,{x:h.x+(T*g-M*p),y:h.y+(T*p+M*g)}),f.rotate(S,d)}return c},r.scale=function(c,d,h,u,g){for(var p=g?r.allBodies(c):c.bodies,m=0;m<p.length;m++){var x=p[m],S=x.position.x-u.x,T=x.position.y-u.y;f.setPosition(x,{x:u.x+S*d,y:u.y+T*h}),f.scale(x,d,h)}return c},r.bounds=function(c){for(var d=r.allBodies(c),h=[],u=0;u<d.length;u+=1){var g=d[u];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(t,n,i){var r={};t.exports=r;var a=i(4),o=i(5),l=i(0);(function(){r._motionWakeThreshold=.18,r._motionSleepThreshold=.08,r._minBias=.9,r.update=function(f,c){for(var d=c/l._baseDelta,h=r._motionSleepThreshold,u=0;u<f.length;u++){var g=f[u],p=a.getSpeed(g),m=a.getAngularSpeed(g),x=p*p+m*m;if(g.force.x!==0||g.force.y!==0){r.set(g,!1);continue}var S=Math.min(g.motion,x),T=Math.max(g.motion,x);g.motion=r._minBias*S+(1-r._minBias)*T,g.sleepThreshold>0&&g.motion<h?(g.sleepCounter+=1,g.sleepCounter>=g.sleepThreshold/d&&r.set(g,!0)):g.sleepCounter>0&&(g.sleepCounter-=1)}},r.afterCollisions=function(f){for(var c=r._motionSleepThreshold,d=0;d<f.length;d++){var h=f[d];if(h.isActive){var u=h.collision,g=u.bodyA.parent,p=u.bodyB.parent;if(!(g.isSleeping&&p.isSleeping||g.isStatic||p.isStatic)&&(g.isSleeping||p.isSleeping)){var m=g.isSleeping&&!g.isStatic?g:p,x=m===g?p:g;!m.isStatic&&x.motion>c&&r.set(m,!1)}}}},r.set=function(f,c){var d=f.isSleeping;c?(f.isSleeping=!0,f.sleepCounter=f.sleepThreshold,f.positionImpulse.x=0,f.positionImpulse.y=0,f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.anglePrev=f.angle,f.speed=0,f.angularSpeed=0,f.motion=0,d||o.trigger(f,"sleepStart")):(f.isSleeping=!1,f.sleepCounter=0,d&&o.trigger(f,"sleepEnd"))}})()},function(t,n,i){var r={};t.exports=r;var a=i(3),o=i(9);(function(){var l=[],f={overlap:0,axis:null},c={overlap:0,axis:null};r.create=function(d,h){return{pair:null,collided:!1,bodyA:d,bodyB:h,parentA:d.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},r.collides=function(d,h,u){if(r._overlapAxes(f,d.vertices,h.vertices,d.axes),f.overlap<=0||(r._overlapAxes(c,h.vertices,d.vertices,h.axes),c.overlap<=0))return null;var g=u&&u.table[o.id(d,h)],p;g?p=g.collision:(p=r.create(d,h),p.collided=!0,p.bodyA=d.id<h.id?d:h,p.bodyB=d.id<h.id?h:d,p.parentA=p.bodyA.parent,p.parentB=p.bodyB.parent),d=p.bodyA,h=p.bodyB;var m;f.overlap<c.overlap?m=f:m=c;var x=p.normal,S=p.tangent,T=p.penetration,M=p.supports,_=m.overlap,E=m.axis,A=E.x,w=E.y,y=h.position.x-d.position.x,v=h.position.y-d.position.y;A*y+w*v>=0&&(A=-A,w=-w),x.x=A,x.y=w,S.x=-w,S.y=A,T.x=A*_,T.y=w*_,p.depth=_;var b=r._findSupports(d,h,x,1),R=0;if(a.contains(d.vertices,b[0])&&(M[R++]=b[0]),a.contains(d.vertices,b[1])&&(M[R++]=b[1]),R<2){var D=r._findSupports(h,d,x,-1);a.contains(h.vertices,D[0])&&(M[R++]=D[0]),R<2&&a.contains(h.vertices,D[1])&&(M[R++]=D[1])}return R===0&&(M[R++]=b[0]),p.supportCount=R,p},r._overlapAxes=function(d,h,u,g){var p=h.length,m=u.length,x=h[0].x,S=h[0].y,T=u[0].x,M=u[0].y,_=g.length,E=Number.MAX_VALUE,A=0,w,y,v,b,R,D;for(R=0;R<_;R++){var U=g[R],N=U.x,O=U.y,B=x*N+S*O,z=T*N+M*O,Z=B,te=z;for(D=1;D<p;D+=1)b=h[D].x*N+h[D].y*O,b>Z?Z=b:b<B&&(B=b);for(D=1;D<m;D+=1)b=u[D].x*N+u[D].y*O,b>te?te=b:b<z&&(z=b);if(y=Z-z,v=te-B,w=y<v?y:v,w<E&&(E=w,A=R,w<=0))break}d.axis=g[A],d.overlap=E},r._findSupports=function(d,h,u,g){var p=h.vertices,m=p.length,x=d.position.x,S=d.position.y,T=u.x*g,M=u.y*g,_=p[0],E=_,A=T*(x-E.x)+M*(S-E.y),w,y,v;for(v=1;v<m;v+=1)E=p[v],y=T*(x-E.x)+M*(S-E.y),y<A&&(A=y,_=E);return w=p[(m+_.index-1)%m],A=T*(x-w.x)+M*(S-w.y),E=p[(_.index+1)%m],T*(x-E.x)+M*(S-E.y)<A?(l[0]=_,l[1]=E,l):(l[0]=_,l[1]=w,l)}})()},function(t,n,i){var r={};t.exports=r;var a=i(16);(function(){r.create=function(o,l){var f=o.bodyA,c=o.bodyB,d={id:r.id(f,c),bodyA:f,bodyB:c,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:f.isSensor||c.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return r.update(d,o,l),d},r.update=function(o,l,f){var c=l.supports,d=l.supportCount,h=o.contacts,u=l.parentA,g=l.parentB;o.isActive=!0,o.timeUpdated=f,o.collision=l,o.separation=l.depth,o.inverseMass=u.inverseMass+g.inverseMass,o.friction=u.friction<g.friction?u.friction:g.friction,o.frictionStatic=u.frictionStatic>g.frictionStatic?u.frictionStatic:g.frictionStatic,o.restitution=u.restitution>g.restitution?u.restitution:g.restitution,o.slop=u.slop>g.slop?u.slop:g.slop,o.contactCount=d,l.pair=o;var p=c[0],m=h[0],x=c[1],S=h[1];(S.vertex===p||m.vertex===x)&&(h[1]=m,h[0]=m=S,S=h[1]),m.vertex=p,S.vertex=x},r.setActive=function(o,l,f){l?(o.isActive=!0,o.timeUpdated=f):(o.isActive=!1,o.contactCount=0)},r.id=function(o,l){return o.id<l.id?o.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+o.id.toString(36)}})()},function(t,n,i){var r={};t.exports=r;var a=i(3),o=i(2),l=i(7),f=i(1),c=i(11),d=i(0);(function(){r._warming=.4,r._torqueDampen=1,r._minLength=1e-6,r.create=function(h){var u=h;u.bodyA&&!u.pointA&&(u.pointA={x:0,y:0}),u.bodyB&&!u.pointB&&(u.pointB={x:0,y:0});var g=u.bodyA?o.add(u.bodyA.position,u.pointA):u.pointA,p=u.bodyB?o.add(u.bodyB.position,u.pointB):u.pointB,m=o.magnitude(o.sub(g,p));u.length=typeof u.length<"u"?u.length:m,u.id=u.id||d.nextId(),u.label=u.label||"Constraint",u.type="constraint",u.stiffness=u.stiffness||(u.length>0?1:.7),u.damping=u.damping||0,u.angularStiffness=u.angularStiffness||0,u.angleA=u.bodyA?u.bodyA.angle:u.angleA,u.angleB=u.bodyB?u.bodyB.angle:u.angleB,u.plugin={};var x={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return u.length===0&&u.stiffness>.1?(x.type="pin",x.anchors=!1):u.stiffness<.9&&(x.type="spring"),u.render=d.extend(x,u.render),u},r.preSolveAll=function(h){for(var u=0;u<h.length;u+=1){var g=h[u],p=g.constraintImpulse;g.isStatic||p.x===0&&p.y===0&&p.angle===0||(g.position.x+=p.x,g.position.y+=p.y,g.angle+=p.angle)}},r.solveAll=function(h,u){for(var g=d.clamp(u/d._baseDelta,0,1),p=0;p<h.length;p+=1){var m=h[p],x=!m.bodyA||m.bodyA&&m.bodyA.isStatic,S=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(x||S)&&r.solve(h[p],g)}for(p=0;p<h.length;p+=1)m=h[p],x=!m.bodyA||m.bodyA&&m.bodyA.isStatic,S=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!x&&!S&&r.solve(h[p],g)},r.solve=function(h,u){var g=h.bodyA,p=h.bodyB,m=h.pointA,x=h.pointB;if(!(!g&&!p)){g&&!g.isStatic&&(o.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),p&&!p.isStatic&&(o.rotate(x,p.angle-h.angleB,x),h.angleB=p.angle);var S=m,T=x;if(g&&(S=o.add(g.position,m)),p&&(T=o.add(p.position,x)),!(!S||!T)){var M=o.sub(S,T),_=o.magnitude(M);_<r._minLength&&(_=r._minLength);var E=(_-h.length)/_,A=h.stiffness>=1||h.length===0,w=A?h.stiffness*u:h.stiffness*u*u,y=h.damping*u,v=o.mult(M,E*w),b=(g?g.inverseMass:0)+(p?p.inverseMass:0),R=(g?g.inverseInertia:0)+(p?p.inverseInertia:0),D=b+R,U,N,O,B,z;if(y>0){var Z=o.create();O=o.div(M,_),z=o.sub(p&&o.sub(p.position,p.positionPrev)||Z,g&&o.sub(g.position,g.positionPrev)||Z),B=o.dot(O,z)}g&&!g.isStatic&&(N=g.inverseMass/b,g.constraintImpulse.x-=v.x*N,g.constraintImpulse.y-=v.y*N,g.position.x-=v.x*N,g.position.y-=v.y*N,y>0&&(g.positionPrev.x-=y*O.x*B*N,g.positionPrev.y-=y*O.y*B*N),U=o.cross(m,v)/D*r._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=U,g.angle-=U),p&&!p.isStatic&&(N=p.inverseMass/b,p.constraintImpulse.x+=v.x*N,p.constraintImpulse.y+=v.y*N,p.position.x+=v.x*N,p.position.y+=v.y*N,y>0&&(p.positionPrev.x+=y*O.x*B*N,p.positionPrev.y+=y*O.y*B*N),U=o.cross(x,v)/D*r._torqueDampen*p.inverseInertia*(1-h.angularStiffness),p.constraintImpulse.angle+=U,p.angle+=U)}}},r.postSolveAll=function(h){for(var u=0;u<h.length;u++){var g=h[u],p=g.constraintImpulse;if(!(g.isStatic||p.x===0&&p.y===0&&p.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var x=g.parts[m];a.translate(x.vertices,p),m>0&&(x.position.x+=p.x,x.position.y+=p.y),p.angle!==0&&(a.rotate(x.vertices,p.angle,g.position),c.rotate(x.axes,p.angle),m>0&&o.rotateAbout(x.position,p.angle,g.position,x.position)),f.update(x.bounds,x.vertices,g.velocity)}p.angle*=r._warming,p.x*=r._warming,p.y*=r._warming}}},r.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},r.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},r.currentLength=function(h){var u=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),g=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),p=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),x=u-p,S=g-m;return Math.sqrt(x*x+S*S)}})()},function(t,n,i){var r={};t.exports=r;var a=i(2),o=i(0);(function(){r.fromVertices=function(l){for(var f={},c=0;c<l.length;c++){var d=(c+1)%l.length,h=a.normalise({x:l[d].y-l[c].y,y:l[c].x-l[d].x}),u=h.y===0?1/0:h.x/h.y;u=u.toFixed(3).toString(),f[u]=h}return o.values(f)},r.rotate=function(l,f){if(f!==0)for(var c=Math.cos(f),d=Math.sin(f),h=0;h<l.length;h++){var u=l[h],g;g=u.x*c-u.y*d,u.y=u.x*d+u.y*c,u.x=g}}})()},function(t,n,i){var r={};t.exports=r;var a=i(3),o=i(0),l=i(4),f=i(1),c=i(2);(function(){r.rectangle=function(d,h,u,g,p){p=p||{};var m={label:"Rectangle Body",position:{x:d,y:h},vertices:a.fromPath("L 0 0 L "+u+" 0 L "+u+" "+g+" L 0 "+g)};if(p.chamfer){var x=p.chamfer;m.vertices=a.chamfer(m.vertices,x.radius,x.quality,x.qualityMin,x.qualityMax),delete p.chamfer}return l.create(o.extend({},m,p))},r.trapezoid=function(d,h,u,g,p,m){m=m||{},p>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),p*=.5;var x=(1-p*2)*u,S=u*p,T=S+x,M=T+S,_;p<.5?_="L 0 0 L "+S+" "+-g+" L "+T+" "+-g+" L "+M+" 0":_="L 0 0 L "+T+" "+-g+" L "+M+" 0";var E={label:"Trapezoid Body",position:{x:d,y:h},vertices:a.fromPath(_)};if(m.chamfer){var A=m.chamfer;E.vertices=a.chamfer(E.vertices,A.radius,A.quality,A.qualityMin,A.qualityMax),delete m.chamfer}return l.create(o.extend({},E,m))},r.circle=function(d,h,u,g,p){g=g||{};var m={label:"Circle Body",circleRadius:u};p=p||25;var x=Math.ceil(Math.max(10,Math.min(p,u)));return x%2===1&&(x+=1),r.polygon(d,h,x,u,o.extend({},m,g))},r.polygon=function(d,h,u,g,p){if(p=p||{},u<3)return r.circle(d,h,g,p);for(var m=2*Math.PI/u,x="",S=m*.5,T=0;T<u;T+=1){var M=S+T*m,_=Math.cos(M)*g,E=Math.sin(M)*g;x+="L "+_.toFixed(3)+" "+E.toFixed(3)+" "}var A={label:"Polygon Body",position:{x:d,y:h},vertices:a.fromPath(x)};if(p.chamfer){var w=p.chamfer;A.vertices=a.chamfer(A.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete p.chamfer}return l.create(o.extend({},A,p))},r.fromVertices=function(d,h,u,g,p,m,x,S){var T=o.getDecomp(),M,_,E,A,w,y,v,b,R,D,U;for(M=!!(T&&T.quickDecomp),g=g||{},E=[],p=typeof p<"u"?p:!1,m=typeof m<"u"?m:.01,x=typeof x<"u"?x:10,S=typeof S<"u"?S:.01,o.isArray(u[0])||(u=[u]),D=0;D<u.length;D+=1)if(y=u[D],A=a.isConvex(y),w=!A,w&&!M&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),A||!M)A?y=a.clockwiseSort(y):y=a.hull(y),E.push({position:{x:d,y:h},vertices:y});else{var N=y.map(function(re){return[re.x,re.y]});T.makeCCW(N),m!==!1&&T.removeCollinearPoints(N,m),S!==!1&&T.removeDuplicatePoints&&T.removeDuplicatePoints(N,S);var O=T.quickDecomp(N);for(v=0;v<O.length;v++){var B=O[v],z=B.map(function(re){return{x:re[0],y:re[1]}});x>0&&a.area(z)<x||E.push({position:a.centre(z),vertices:z})}}for(v=0;v<E.length;v++)E[v]=l.create(o.extend(E[v],g));if(p){var Z=5;for(v=0;v<E.length;v++){var te=E[v];for(b=v+1;b<E.length;b++){var le=E[b];if(f.overlaps(te.bounds,le.bounds)){var me=te.vertices,Re=le.vertices;for(R=0;R<te.vertices.length;R++)for(U=0;U<le.vertices.length;U++){var Y=c.magnitudeSquared(c.sub(me[(R+1)%me.length],Re[U])),j=c.magnitudeSquared(c.sub(me[R],Re[(U+1)%Re.length]));Y<Z&&j<Z&&(me[R].isInternal=!0,Re[U].isInternal=!0)}}}}}return E.length>1?(_=l.create(o.extend({parts:E.slice(0)},g)),l.setPosition(_,{x:d,y:h}),_):E[0]}})()},function(t,n,i){var r={};t.exports=r;var a=i(0),o=i(8);(function(){r.create=function(l){var f={bodies:[],collisions:[],pairs:null};return a.extend(f,l)},r.setBodies=function(l,f){l.bodies=f.slice(0)},r.clear=function(l){l.bodies=[],l.collisions=[]},r.collisions=function(l){var f=l.pairs,c=l.bodies,d=c.length,h=r.canCollide,u=o.collides,g=l.collisions,p=0,m,x;for(c.sort(r._compareBoundsX),m=0;m<d;m++){var S=c[m],T=S.bounds,M=S.bounds.max.x,_=S.bounds.max.y,E=S.bounds.min.y,A=S.isStatic||S.isSleeping,w=S.parts.length,y=w===1;for(x=m+1;x<d;x++){var v=c[x],b=v.bounds;if(b.min.x>M)break;if(!(_<b.min.y||E>b.max.y)&&!(A&&(v.isStatic||v.isSleeping))&&h(S.collisionFilter,v.collisionFilter)){var R=v.parts.length;if(y&&R===1){var D=u(S,v,f);D&&(g[p++]=D)}else for(var U=w>1?1:0,N=R>1?1:0,O=U;O<w;O++)for(var B=S.parts[O],T=B.bounds,z=N;z<R;z++){var Z=v.parts[z],b=Z.bounds;if(!(T.min.x>b.max.x||T.max.x<b.min.x||T.max.y<b.min.y||T.min.y>b.max.y)){var D=u(B,Z,f);D&&(g[p++]=D)}}}}}return g.length!==p&&(g.length=p),g},r.canCollide=function(l,f){return l.group===f.group&&l.group!==0?l.group>0:(l.mask&f.category)!==0&&(f.mask&l.category)!==0},r._compareBoundsX=function(l,f){return l.bounds.min.x-f.bounds.min.x}})()},function(t,n,i){var r={};t.exports=r;var a=i(0);(function(){r.create=function(o){var l={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=o||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(f){var c=r._getRelativeMousePosition(f,l.element,l.pixelRatio),d=f.changedTouches;d&&(l.button=0,f.preventDefault()),l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=f},l.mousedown=function(f){var c=r._getRelativeMousePosition(f,l.element,l.pixelRatio),d=f.changedTouches;d?(l.button=0,f.preventDefault()):l.button=f.button,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=f},l.mouseup=function(f){var c=r._getRelativeMousePosition(f,l.element,l.pixelRatio),d=f.changedTouches;d&&f.preventDefault(),l.button=-1,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=f},l.mousewheel=function(f){l.wheelDelta=Math.max(-1,Math.min(1,f.wheelDelta||-f.detail)),f.preventDefault(),l.sourceEvents.mousewheel=f},r.setElement(l,l.element),l},r.setElement=function(o,l){o.element=l,l.addEventListener("mousemove",o.mousemove,{passive:!0}),l.addEventListener("mousedown",o.mousedown,{passive:!0}),l.addEventListener("mouseup",o.mouseup,{passive:!0}),l.addEventListener("wheel",o.mousewheel,{passive:!1}),l.addEventListener("touchmove",o.mousemove,{passive:!1}),l.addEventListener("touchstart",o.mousedown,{passive:!1}),l.addEventListener("touchend",o.mouseup,{passive:!1})},r.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},r.setOffset=function(o,l){o.offset.x=l.x,o.offset.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},r.setScale=function(o,l){o.scale.x=l.x,o.scale.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},r._getRelativeMousePosition=function(o,l,f){var c=l.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,u=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,g=o.changedTouches,p,m;return g?(p=g[0].pageX-c.left-h,m=g[0].pageY-c.top-u):(p=o.pageX-c.left-h,m=o.pageY-c.top-u),{x:p/(l.clientWidth/(l.width||l.clientWidth)*f),y:m/(l.clientHeight/(l.height||l.clientHeight)*f)}}})()},function(t,n,i){var r={};t.exports=r;var a=i(0);(function(){r._registry={},r.register=function(o){if(r.isPlugin(o)||a.warn("Plugin.register:",r.toString(o),"does not implement all required fields."),o.name in r._registry){var l=r._registry[o.name],f=r.versionParse(o.version).number,c=r.versionParse(l.version).number;f>c?(a.warn("Plugin.register:",r.toString(l),"was upgraded to",r.toString(o)),r._registry[o.name]=o):f<c?a.warn("Plugin.register:",r.toString(l),"can not be downgraded to",r.toString(o)):o!==l&&a.warn("Plugin.register:",r.toString(o),"is already registered to different plugin object")}else r._registry[o.name]=o;return o},r.resolve=function(o){return r._registry[r.dependencyParse(o).name]},r.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},r.isPlugin=function(o){return o&&o.name&&o.version&&o.install},r.isUsed=function(o,l){return o.used.indexOf(l)>-1},r.isFor=function(o,l){var f=o.for&&r.dependencyParse(o.for);return!o.for||l.name===f.name&&r.versionSatisfies(l.version,f.range)},r.use=function(o,l){if(o.uses=(o.uses||[]).concat(l||[]),o.uses.length===0){a.warn("Plugin.use:",r.toString(o),"does not specify any dependencies to install.");return}for(var f=r.dependencies(o),c=a.topologicalSort(f),d=[],h=0;h<c.length;h+=1)if(c[h]!==o.name){var u=r.resolve(c[h]);if(!u){d.push("❌ "+c[h]);continue}r.isUsed(o,u.name)||(r.isFor(u,o)||(a.warn("Plugin.use:",r.toString(u),"is for",u.for,"but installed on",r.toString(o)+"."),u._warned=!0),u.install?u.install(o):(a.warn("Plugin.use:",r.toString(u),"does not specify an install function."),u._warned=!0),u._warned?(d.push("🔶 "+r.toString(u)),delete u._warned):d.push("✅ "+r.toString(u)),o.used.push(u.name))}d.length>0&&a.info(d.join("  "))},r.dependencies=function(o,l){var f=r.dependencyParse(o),c=f.name;if(l=l||{},!(c in l)){o=r.resolve(o)||o,l[c]=a.map(o.uses||[],function(h){r.isPlugin(h)&&r.register(h);var u=r.dependencyParse(h),g=r.resolve(h);return g&&!r.versionSatisfies(g.version,u.range)?(a.warn("Plugin.dependencies:",r.toString(g),"does not satisfy",r.toString(u),"used by",r.toString(f)+"."),g._warned=!0,o._warned=!0):g||(a.warn("Plugin.dependencies:",r.toString(h),"used by",r.toString(f),"could not be resolved."),o._warned=!0),u.name});for(var d=0;d<l[c].length;d+=1)r.dependencies(l[c][d],l);return l}},r.dependencyParse=function(o){if(a.isString(o)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},r.versionParse=function(o){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var f=l.exec(o),c=Number(f[4]),d=Number(f[5]),h=Number(f[6]);return{isRange:!!(f[1]||f[2]),version:f[3],range:o,operator:f[1]||f[2]||"",major:c,minor:d,patch:h,parts:[c,d,h],prerelease:f[7],number:c*1e8+d*1e4+h}},r.versionSatisfies=function(o,l){l=l||"*";var f=r.versionParse(l),c=r.versionParse(o);if(f.isRange){if(f.operator==="*"||o==="*")return!0;if(f.operator===">")return c.number>f.number;if(f.operator===">=")return c.number>=f.number;if(f.operator==="~")return c.major===f.major&&c.minor===f.minor&&c.patch>=f.patch;if(f.operator==="^")return f.major>0?c.major===f.major&&c.number>=f.number:f.minor>0?c.minor===f.minor&&c.patch>=f.patch:c.patch===f.patch}return o===l||o==="*"}})()},function(t,n){var i={};t.exports=i,function(){i.create=function(r){return{vertex:r,normalImpulse:0,tangentImpulse:0}}}()},function(t,n,i){var r={};t.exports=r;var a=i(7),o=i(18),l=i(13),f=i(19),c=i(5),d=i(6),h=i(10),u=i(0),g=i(4);(function(){r._deltaMax=1e3/60,r.create=function(p){p=p||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},x=u.extend(m,p);return x.world=p.world||d.create({label:"World"}),x.pairs=p.pairs||f.create(),x.detector=p.detector||l.create(),x.detector.pairs=x.pairs,x.grid={buckets:[]},x.world.gravity=x.gravity,x.broadphase=x.grid,x.metrics={},x},r.update=function(p,m){var x=u.now(),S=p.world,T=p.detector,M=p.pairs,_=p.timing,E=_.timestamp,A;m>r._deltaMax&&u.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",r._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:u._baseDelta,m*=_.timeScale,_.timestamp+=m,_.lastDelta=m;var w={timestamp:_.timestamp,delta:m};c.trigger(p,"beforeUpdate",w);var y=d.allBodies(S),v=d.allConstraints(S);for(S.isModified&&(l.setBodies(T,y),d.setModified(S,!1,!1,!0)),p.enableSleeping&&a.update(y,m),r._bodiesApplyGravity(y,p.gravity),m>0&&r._bodiesUpdate(y,m),c.trigger(p,"beforeSolve",w),h.preSolveAll(y),A=0;A<p.constraintIterations;A++)h.solveAll(v,m);h.postSolveAll(y);var b=l.collisions(T);f.update(M,b,E),p.enableSleeping&&a.afterCollisions(M.list),M.collisionStart.length>0&&c.trigger(p,"collisionStart",{pairs:M.collisionStart,timestamp:_.timestamp,delta:m});var R=u.clamp(20/p.positionIterations,0,1);for(o.preSolvePosition(M.list),A=0;A<p.positionIterations;A++)o.solvePosition(M.list,m,R);for(o.postSolvePosition(y),h.preSolveAll(y),A=0;A<p.constraintIterations;A++)h.solveAll(v,m);for(h.postSolveAll(y),o.preSolveVelocity(M.list),A=0;A<p.velocityIterations;A++)o.solveVelocity(M.list,m);return r._bodiesUpdateVelocities(y),M.collisionActive.length>0&&c.trigger(p,"collisionActive",{pairs:M.collisionActive,timestamp:_.timestamp,delta:m}),M.collisionEnd.length>0&&c.trigger(p,"collisionEnd",{pairs:M.collisionEnd,timestamp:_.timestamp,delta:m}),r._bodiesClearForces(y),c.trigger(p,"afterUpdate",w),p.timing.lastElapsed=u.now()-x,p},r.merge=function(p,m){if(u.extend(p,m),m.world){p.world=m.world,r.clear(p);for(var x=d.allBodies(p.world),S=0;S<x.length;S++){var T=x[S];a.set(T,!1),T.id=u.nextId()}}},r.clear=function(p){f.clear(p.pairs),l.clear(p.detector)},r._bodiesClearForces=function(p){for(var m=p.length,x=0;x<m;x++){var S=p[x];S.force.x=0,S.force.y=0,S.torque=0}},r._bodiesApplyGravity=function(p,m){var x=typeof m.scale<"u"?m.scale:.001,S=p.length;if(!(m.x===0&&m.y===0||x===0))for(var T=0;T<S;T++){var M=p[T];M.isStatic||M.isSleeping||(M.force.y+=M.mass*m.y*x,M.force.x+=M.mass*m.x*x)}},r._bodiesUpdate=function(p,m){for(var x=p.length,S=0;S<x;S++){var T=p[S];T.isStatic||T.isSleeping||g.update(T,m)}},r._bodiesUpdateVelocities=function(p){for(var m=p.length,x=0;x<m;x++)g.updateVelocities(p[x])}})()},function(t,n,i){var r={};t.exports=r;var a=i(3),o=i(0),l=i(1);(function(){r._restingThresh=2,r._restingThreshTangent=Math.sqrt(6),r._positionDampen=.9,r._positionWarming=.8,r._frictionNormalMultiplier=5,r._frictionMaxStatic=Number.MAX_VALUE,r.preSolvePosition=function(f){var c,d,h,u=f.length;for(c=0;c<u;c++)d=f[c],d.isActive&&(h=d.contactCount,d.collision.parentA.totalContacts+=h,d.collision.parentB.totalContacts+=h)},r.solvePosition=function(f,c,d){var h,u,g,p,m,x,S,T,M=r._positionDampen*(d||1),_=o.clamp(c/o._baseDelta,0,1),E=f.length;for(h=0;h<E;h++)u=f[h],!(!u.isActive||u.isSensor)&&(g=u.collision,p=g.parentA,m=g.parentB,x=g.normal,u.separation=g.depth+x.x*(m.positionImpulse.x-p.positionImpulse.x)+x.y*(m.positionImpulse.y-p.positionImpulse.y));for(h=0;h<E;h++)u=f[h],!(!u.isActive||u.isSensor)&&(g=u.collision,p=g.parentA,m=g.parentB,x=g.normal,T=u.separation-u.slop*_,(p.isStatic||m.isStatic)&&(T*=2),p.isStatic||p.isSleeping||(S=M/p.totalContacts,p.positionImpulse.x+=x.x*T*S,p.positionImpulse.y+=x.y*T*S),m.isStatic||m.isSleeping||(S=M/m.totalContacts,m.positionImpulse.x-=x.x*T*S,m.positionImpulse.y-=x.y*T*S))},r.postSolvePosition=function(f){for(var c=r._positionWarming,d=f.length,h=a.translate,u=l.update,g=0;g<d;g++){var p=f[g],m=p.positionImpulse,x=m.x,S=m.y,T=p.velocity;if(p.totalContacts=0,x!==0||S!==0){for(var M=0;M<p.parts.length;M++){var _=p.parts[M];h(_.vertices,m),u(_.bounds,_.vertices,T),_.position.x+=x,_.position.y+=S}p.positionPrev.x+=x,p.positionPrev.y+=S,x*T.x+S*T.y<0?(m.x=0,m.y=0):(m.x*=c,m.y*=c)}}},r.preSolveVelocity=function(f){var c=f.length,d,h;for(d=0;d<c;d++){var u=f[d];if(!(!u.isActive||u.isSensor)){var g=u.contacts,p=u.contactCount,m=u.collision,x=m.parentA,S=m.parentB,T=m.normal,M=m.tangent;for(h=0;h<p;h++){var _=g[h],E=_.vertex,A=_.normalImpulse,w=_.tangentImpulse;if(A!==0||w!==0){var y=T.x*A+M.x*w,v=T.y*A+M.y*w;x.isStatic||x.isSleeping||(x.positionPrev.x+=y*x.inverseMass,x.positionPrev.y+=v*x.inverseMass,x.anglePrev+=x.inverseInertia*((E.x-x.position.x)*v-(E.y-x.position.y)*y)),S.isStatic||S.isSleeping||(S.positionPrev.x-=y*S.inverseMass,S.positionPrev.y-=v*S.inverseMass,S.anglePrev-=S.inverseInertia*((E.x-S.position.x)*v-(E.y-S.position.y)*y))}}}}},r.solveVelocity=function(f,c){var d=c/o._baseDelta,h=d*d,u=h*d,g=-r._restingThresh*d,p=r._restingThreshTangent,m=r._frictionNormalMultiplier*d,x=r._frictionMaxStatic,S=f.length,T,M,_,E;for(_=0;_<S;_++){var A=f[_];if(!(!A.isActive||A.isSensor)){var w=A.collision,y=w.parentA,v=w.parentB,b=w.normal.x,R=w.normal.y,D=w.tangent.x,U=w.tangent.y,N=A.inverseMass,O=A.friction*A.frictionStatic*m,B=A.contacts,z=A.contactCount,Z=1/z,te=y.position.x-y.positionPrev.x,le=y.position.y-y.positionPrev.y,me=y.angle-y.anglePrev,Re=v.position.x-v.positionPrev.x,Y=v.position.y-v.positionPrev.y,j=v.angle-v.anglePrev;for(E=0;E<z;E++){var re=B[E],se=re.vertex,he=se.x-y.position.x,ze=se.y-y.position.y,Se=se.x-v.position.x,Ge=se.y-v.position.y,Be=te-ze*me,Xe=le+he*me,I=Re-Ge*j,bt=Y+Se*j,We=Be-I,Ke=Xe-bt,xe=b*We+R*Ke,Ne=D*We+U*Ke,Te=A.separation+xe,Le=Math.min(Te,1);Le=Te<0?0:Le;var gt=Le*O;Ne<-gt||Ne>gt?(M=Ne>0?Ne:-Ne,T=A.friction*(Ne>0?1:-1)*u,T<-M?T=-M:T>M&&(T=M)):(T=Ne,M=x);var L=he*R-ze*b,C=Se*R-Ge*b,G=Z/(N+y.inverseInertia*L*L+v.inverseInertia*C*C),$=(1+A.restitution)*xe*G;if(T*=G,xe<g)re.normalImpulse=0;else{var J=re.normalImpulse;re.normalImpulse+=$,re.normalImpulse>0&&(re.normalImpulse=0),$=re.normalImpulse-J}if(Ne<-p||Ne>p)re.tangentImpulse=0;else{var q=re.tangentImpulse;re.tangentImpulse+=T,re.tangentImpulse<-M&&(re.tangentImpulse=-M),re.tangentImpulse>M&&(re.tangentImpulse=M),T=re.tangentImpulse-q}var _e=b*$+D*T,ae=R*$+U*T;y.isStatic||y.isSleeping||(y.positionPrev.x+=_e*y.inverseMass,y.positionPrev.y+=ae*y.inverseMass,y.anglePrev+=(he*ae-ze*_e)*y.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=_e*v.inverseMass,v.positionPrev.y-=ae*v.inverseMass,v.anglePrev-=(Se*ae-Ge*_e)*v.inverseInertia)}}}}})()},function(t,n,i){var r={};t.exports=r;var a=i(9),o=i(0);(function(){r.create=function(l){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},r.update=function(l,f,c){var d=a.update,h=a.create,u=a.setActive,g=l.table,p=l.list,m=p.length,x=m,S=l.collisionStart,T=l.collisionEnd,M=l.collisionActive,_=f.length,E=0,A=0,w=0,y,v,b;for(b=0;b<_;b++)y=f[b],v=y.pair,v?(v.isActive&&(M[w++]=v),d(v,y,c)):(v=h(y,c),g[v.id]=v,S[E++]=v,p[x++]=v);for(x=0,m=p.length,b=0;b<m;b++)v=p[b],v.timeUpdated>=c?p[x++]=v:(u(v,!1,c),v.collision.bodyA.sleepCounter>0&&v.collision.bodyB.sleepCounter>0?p[x++]=v:(T[A++]=v,delete g[v.id]));p.length!==x&&(p.length=x),S.length!==E&&(S.length=E),T.length!==A&&(T.length=A),M.length!==w&&(M.length=w)},r.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(t,n,i){var r=t.exports=i(21);r.Axes=i(11),r.Bodies=i(12),r.Body=i(4),r.Bounds=i(1),r.Collision=i(8),r.Common=i(0),r.Composite=i(6),r.Composites=i(22),r.Constraint=i(10),r.Contact=i(16),r.Detector=i(13),r.Engine=i(17),r.Events=i(5),r.Grid=i(23),r.Mouse=i(14),r.MouseConstraint=i(24),r.Pair=i(9),r.Pairs=i(19),r.Plugin=i(15),r.Query=i(25),r.Render=i(26),r.Resolver=i(18),r.Runner=i(27),r.SAT=i(28),r.Sleeping=i(7),r.Svg=i(29),r.Vector=i(2),r.Vertices=i(3),r.World=i(30),r.Engine.run=r.Runner.run,r.Common.deprecated(r.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,n,i){var r={};t.exports=r;var a=i(15),o=i(0);(function(){r.name="matter-js",r.version="0.20.0",r.uses=[],r.used=[],r.use=function(){a.use(r,Array.prototype.slice.call(arguments))},r.before=function(l,f){return l=l.replace(/^Matter./,""),o.chainPathBefore(r,l,f)},r.after=function(l,f){return l=l.replace(/^Matter./,""),o.chainPathAfter(r,l,f)}})()},function(t,n,i){var r={};t.exports=r;var a=i(6),o=i(10),l=i(0),f=i(4),c=i(12),d=l.deprecated;(function(){r.stack=function(h,u,g,p,m,x,S){for(var T=a.create({label:"Stack"}),M=h,_=u,E,A=0,w=0;w<p;w++){for(var y=0,v=0;v<g;v++){var b=S(M,_,v,w,E,A);if(b){var R=b.bounds.max.y-b.bounds.min.y,D=b.bounds.max.x-b.bounds.min.x;R>y&&(y=R),f.translate(b,{x:D*.5,y:R*.5}),M=b.bounds.max.x+m,a.addBody(T,b),E=b,A+=1}else M+=m}_+=y+x,M=h}return T},r.chain=function(h,u,g,p,m,x){for(var S=h.bodies,T=1;T<S.length;T++){var M=S[T-1],_=S[T],E=M.bounds.max.y-M.bounds.min.y,A=M.bounds.max.x-M.bounds.min.x,w=_.bounds.max.y-_.bounds.min.y,y=_.bounds.max.x-_.bounds.min.x,v={bodyA:M,pointA:{x:A*u,y:E*g},bodyB:_,pointB:{x:y*p,y:w*m}},b=l.extend(v,x);a.addConstraint(h,o.create(b))}return h.label+=" Chain",h},r.mesh=function(h,u,g,p,m){var x=h.bodies,S,T,M,_,E;for(S=0;S<g;S++){for(T=1;T<u;T++)M=x[T-1+S*u],_=x[T+S*u],a.addConstraint(h,o.create(l.extend({bodyA:M,bodyB:_},m)));if(S>0)for(T=0;T<u;T++)M=x[T+(S-1)*u],_=x[T+S*u],a.addConstraint(h,o.create(l.extend({bodyA:M,bodyB:_},m))),p&&T>0&&(E=x[T-1+(S-1)*u],a.addConstraint(h,o.create(l.extend({bodyA:E,bodyB:_},m)))),p&&T<u-1&&(E=x[T+1+(S-1)*u],a.addConstraint(h,o.create(l.extend({bodyA:E,bodyB:_},m))))}return h.label+=" Mesh",h},r.pyramid=function(h,u,g,p,m,x,S){return r.stack(h,u,g,p,m,x,function(T,M,_,E,A,w){var y=Math.min(p,Math.ceil(g/2)),v=A?A.bounds.max.x-A.bounds.min.x:0;if(!(E>y)){E=y-E;var b=E,R=g-1-E;if(!(_<b||_>R)){w===1&&f.translate(A,{x:(_+(g%2===1?1:-1))*v,y:0});var D=A?_*v:0;return S(h+D+_*m,M,_,E,A,w)}}})},r.newtonsCradle=function(h,u,g,p,m){for(var x=a.create({label:"Newtons Cradle"}),S=0;S<g;S++){var T=1.9,M=c.circle(h+S*(p*T),u+m,p,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),_=o.create({pointA:{x:h+S*(p*T),y:u},bodyB:M});a.addBody(x,M),a.addConstraint(x,_)}return x},d(r,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),r.car=function(h,u,g,p,m){var x=f.nextGroup(!0),S=20,T=-g*.5+S,M=g*.5-S,_=0,E=a.create({label:"Car"}),A=c.rectangle(h,u,g,p,{collisionFilter:{group:x},chamfer:{radius:p*.5},density:2e-4}),w=c.circle(h+T,u+_,m,{collisionFilter:{group:x},friction:.8}),y=c.circle(h+M,u+_,m,{collisionFilter:{group:x},friction:.8}),v=o.create({bodyB:A,pointB:{x:T,y:_},bodyA:w,stiffness:1,length:0}),b=o.create({bodyB:A,pointB:{x:M,y:_},bodyA:y,stiffness:1,length:0});return a.addBody(E,A),a.addBody(E,w),a.addBody(E,y),a.addConstraint(E,v),a.addConstraint(E,b),E},d(r,"car","Composites.car ➤ moved to car example"),r.softBody=function(h,u,g,p,m,x,S,T,M,_){M=l.extend({inertia:1/0},M),_=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},_);var E=r.stack(h,u,g,p,m,x,function(A,w){return c.circle(A,w,T,M)});return r.mesh(E,g,p,S,_),E.label="Soft Body",E},d(r,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,n,i){var r={};t.exports=r;var a=i(9),o=i(0),l=o.deprecated;(function(){r.create=function(f){var c={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(c,f)},r.update=function(f,c,d,h){var u,g,p,m=d.world,x=f.buckets,S,T,M=!1;for(u=0;u<c.length;u++){var _=c[u];if(!(_.isSleeping&&!h)&&!(m.bounds&&(_.bounds.max.x<m.bounds.min.x||_.bounds.min.x>m.bounds.max.x||_.bounds.max.y<m.bounds.min.y||_.bounds.min.y>m.bounds.max.y))){var E=r._getRegion(f,_);if(!_.region||E.id!==_.region.id||h){(!_.region||h)&&(_.region=E);var A=r._regionUnion(E,_.region);for(g=A.startCol;g<=A.endCol;g++)for(p=A.startRow;p<=A.endRow;p++){T=r._getBucketId(g,p),S=x[T];var w=g>=E.startCol&&g<=E.endCol&&p>=E.startRow&&p<=E.endRow,y=g>=_.region.startCol&&g<=_.region.endCol&&p>=_.region.startRow&&p<=_.region.endRow;!w&&y&&y&&S&&r._bucketRemoveBody(f,S,_),(_.region===E||w&&!y||h)&&(S||(S=r._createBucket(x,T)),r._bucketAddBody(f,S,_))}_.region=E,M=!0}}}M&&(f.pairsList=r._createActivePairsList(f))},l(r,"update","Grid.update ➤ replaced by Matter.Detector"),r.clear=function(f){f.buckets={},f.pairs={},f.pairsList=[]},l(r,"clear","Grid.clear ➤ replaced by Matter.Detector"),r._regionUnion=function(f,c){var d=Math.min(f.startCol,c.startCol),h=Math.max(f.endCol,c.endCol),u=Math.min(f.startRow,c.startRow),g=Math.max(f.endRow,c.endRow);return r._createRegion(d,h,u,g)},r._getRegion=function(f,c){var d=c.bounds,h=Math.floor(d.min.x/f.bucketWidth),u=Math.floor(d.max.x/f.bucketWidth),g=Math.floor(d.min.y/f.bucketHeight),p=Math.floor(d.max.y/f.bucketHeight);return r._createRegion(h,u,g,p)},r._createRegion=function(f,c,d,h){return{id:f+","+c+","+d+","+h,startCol:f,endCol:c,startRow:d,endRow:h}},r._getBucketId=function(f,c){return"C"+f+"R"+c},r._createBucket=function(f,c){var d=f[c]=[];return d},r._bucketAddBody=function(f,c,d){var h=f.pairs,u=a.id,g=c.length,p;for(p=0;p<g;p++){var m=c[p];if(!(d.id===m.id||d.isStatic&&m.isStatic)){var x=u(d,m),S=h[x];S?S[2]+=1:h[x]=[d,m,1]}}c.push(d)},r._bucketRemoveBody=function(f,c,d){var h=f.pairs,u=a.id,g;c.splice(o.indexOf(c,d),1);var p=c.length;for(g=0;g<p;g++){var m=h[u(d,c[g])];m&&(m[2]-=1)}},r._createActivePairsList=function(f){var c,d=f.pairs,h=o.keys(d),u=h.length,g=[],p;for(p=0;p<u;p++)c=d[h[p]],c[2]>0?g.push(c):delete d[h[p]];return g}})()},function(t,n,i){var r={};t.exports=r;var a=i(3),o=i(7),l=i(14),f=i(5),c=i(13),d=i(10),h=i(6),u=i(0),g=i(1);(function(){r.create=function(p,m){var x=(p?p.mouse:null)||(m?m.mouse:null);x||(p&&p.render&&p.render.canvas?x=l.create(p.render.canvas):m&&m.element?x=l.create(m.element):(x=l.create(),u.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var S=d.create({label:"Mouse Constraint",pointA:x.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),T={type:"mouseConstraint",mouse:x,element:null,body:null,constraint:S,collisionFilter:{category:1,mask:4294967295,group:0}},M=u.extend(T,m);return f.on(p,"beforeUpdate",function(){var _=h.allBodies(p.world);r.update(M,_),r._triggerEvents(M)}),M},r.update=function(p,m){var x=p.mouse,S=p.constraint,T=p.body;if(x.button===0){if(S.bodyB)o.set(S.bodyB,!1),S.pointA=x.position;else for(var M=0;M<m.length;M++)if(T=m[M],g.contains(T.bounds,x.position)&&c.canCollide(T.collisionFilter,p.collisionFilter))for(var _=T.parts.length>1?1:0;_<T.parts.length;_++){var E=T.parts[_];if(a.contains(E.vertices,x.position)){S.pointA=x.position,S.bodyB=p.body=T,S.pointB={x:x.position.x-T.position.x,y:x.position.y-T.position.y},S.angleB=T.angle,o.set(T,!1),f.trigger(p,"startdrag",{mouse:x,body:T});break}}}else S.bodyB=p.body=null,S.pointB=null,T&&f.trigger(p,"enddrag",{mouse:x,body:T})},r._triggerEvents=function(p){var m=p.mouse,x=m.sourceEvents;x.mousemove&&f.trigger(p,"mousemove",{mouse:m}),x.mousedown&&f.trigger(p,"mousedown",{mouse:m}),x.mouseup&&f.trigger(p,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(t,n,i){var r={};t.exports=r;var a=i(2),o=i(8),l=i(1),f=i(12),c=i(3);(function(){r.collides=function(d,h){for(var u=[],g=h.length,p=d.bounds,m=o.collides,x=l.overlaps,S=0;S<g;S++){var T=h[S],M=T.parts.length,_=M===1?0:1;if(x(T.bounds,p))for(var E=_;E<M;E++){var A=T.parts[E];if(x(A.bounds,p)){var w=m(A,d);if(w){u.push(w);break}}}}return u},r.ray=function(d,h,u,g){g=g||1e-100;for(var p=a.angle(h,u),m=a.magnitude(a.sub(h,u)),x=(u.x+h.x)*.5,S=(u.y+h.y)*.5,T=f.rectangle(x,S,m,g,{angle:p}),M=r.collides(T,d),_=0;_<M.length;_+=1){var E=M[_];E.body=E.bodyB=E.bodyA}return M},r.region=function(d,h,u){for(var g=[],p=0;p<d.length;p++){var m=d[p],x=l.overlaps(m.bounds,h);(x&&!u||!x&&u)&&g.push(m)}return g},r.point=function(d,h){for(var u=[],g=0;g<d.length;g++){var p=d[g];if(l.contains(p.bounds,h))for(var m=p.parts.length===1?0:1;m<p.parts.length;m++){var x=p.parts[m];if(l.contains(x.bounds,h)&&c.contains(x.vertices,h)){u.push(p);break}}}return u}})()},function(t,n,i){var r={};t.exports=r;var a=i(4),o=i(0),l=i(6),f=i(1),c=i(5),d=i(2),h=i(14);(function(){var u,g;typeof window<"u"&&(u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(_){window.setTimeout(function(){_(o.now())},1e3/60)},g=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),r._goodFps=30,r._goodDelta=1e3/60,r.create=function(_){var E={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!_.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},A=o.extend(E,_);return A.canvas&&(A.canvas.width=A.options.width||A.canvas.width,A.canvas.height=A.options.height||A.canvas.height),A.mouse=_.mouse,A.engine=_.engine,A.canvas=A.canvas||x(A.options.width,A.options.height),A.context=A.canvas.getContext("2d"),A.textures={},A.bounds=A.bounds||{min:{x:0,y:0},max:{x:A.canvas.width,y:A.canvas.height}},A.controller=r,A.options.showBroadphase=!1,A.options.pixelRatio!==1&&r.setPixelRatio(A,A.options.pixelRatio),o.isElement(A.element)&&A.element.appendChild(A.canvas),A},r.run=function(_){(function E(A){_.frameRequestId=u(E),p(_,A),r.world(_,A),_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0),(_.options.showStats||_.options.showDebug)&&r.stats(_,_.context,A),(_.options.showPerformance||_.options.showDebug)&&r.performance(_,_.context,A),_.context.setTransform(1,0,0,1,0,0)})()},r.stop=function(_){g(_.frameRequestId)},r.setPixelRatio=function(_,E){var A=_.options,w=_.canvas;E==="auto"&&(E=S(w)),A.pixelRatio=E,w.setAttribute("data-pixel-ratio",E),w.width=A.width*E,w.height=A.height*E,w.style.width=A.width+"px",w.style.height=A.height+"px"},r.setSize=function(_,E,A){_.options.width=E,_.options.height=A,_.bounds.max.x=_.bounds.min.x+E,_.bounds.max.y=_.bounds.min.y+A,_.options.pixelRatio!==1?r.setPixelRatio(_,_.options.pixelRatio):(_.canvas.width=E,_.canvas.height=A)},r.lookAt=function(_,E,A,w){w=typeof w<"u"?w:!0,E=o.isArray(E)?E:[E],A=A||{x:0,y:0};for(var y={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},v=0;v<E.length;v+=1){var b=E[v],R=b.bounds?b.bounds.min:b.min||b.position||b,D=b.bounds?b.bounds.max:b.max||b.position||b;R&&D&&(R.x<y.min.x&&(y.min.x=R.x),D.x>y.max.x&&(y.max.x=D.x),R.y<y.min.y&&(y.min.y=R.y),D.y>y.max.y&&(y.max.y=D.y))}var U=y.max.x-y.min.x+2*A.x,N=y.max.y-y.min.y+2*A.y,O=_.canvas.height,B=_.canvas.width,z=B/O,Z=U/N,te=1,le=1;Z>z?le=Z/z:te=z/Z,_.options.hasBounds=!0,_.bounds.min.x=y.min.x,_.bounds.max.x=y.min.x+U*te,_.bounds.min.y=y.min.y,_.bounds.max.y=y.min.y+N*le,w&&(_.bounds.min.x+=U*.5-U*te*.5,_.bounds.max.x+=U*.5-U*te*.5,_.bounds.min.y+=N*.5-N*le*.5,_.bounds.max.y+=N*.5-N*le*.5),_.bounds.min.x-=A.x,_.bounds.max.x-=A.x,_.bounds.min.y-=A.y,_.bounds.max.y-=A.y,_.mouse&&(h.setScale(_.mouse,{x:(_.bounds.max.x-_.bounds.min.x)/_.canvas.width,y:(_.bounds.max.y-_.bounds.min.y)/_.canvas.height}),h.setOffset(_.mouse,_.bounds.min))},r.startViewTransform=function(_){var E=_.bounds.max.x-_.bounds.min.x,A=_.bounds.max.y-_.bounds.min.y,w=E/_.options.width,y=A/_.options.height;_.context.setTransform(_.options.pixelRatio/w,0,0,_.options.pixelRatio/y,0,0),_.context.translate(-_.bounds.min.x,-_.bounds.min.y)},r.endViewTransform=function(_){_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0)},r.world=function(_,E){var A=o.now(),w=_.engine,y=w.world,v=_.canvas,b=_.context,R=_.options,D=_.timing,U=l.allBodies(y),N=l.allConstraints(y),O=R.wireframes?R.wireframeBackground:R.background,B=[],z=[],Z,te={timestamp:w.timing.timestamp};if(c.trigger(_,"beforeRender",te),_.currentBackground!==O&&M(_,O),b.globalCompositeOperation="source-in",b.fillStyle="transparent",b.fillRect(0,0,v.width,v.height),b.globalCompositeOperation="source-over",R.hasBounds){for(Z=0;Z<U.length;Z++){var le=U[Z];f.overlaps(le.bounds,_.bounds)&&B.push(le)}for(Z=0;Z<N.length;Z++){var me=N[Z],Re=me.bodyA,Y=me.bodyB,j=me.pointA,re=me.pointB;Re&&(j=d.add(Re.position,me.pointA)),Y&&(re=d.add(Y.position,me.pointB)),!(!j||!re)&&(f.contains(_.bounds,j)||f.contains(_.bounds,re))&&z.push(me)}r.startViewTransform(_),_.mouse&&(h.setScale(_.mouse,{x:(_.bounds.max.x-_.bounds.min.x)/_.options.width,y:(_.bounds.max.y-_.bounds.min.y)/_.options.height}),h.setOffset(_.mouse,_.bounds.min))}else z=N,B=U,_.options.pixelRatio!==1&&_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0);!R.wireframes||w.enableSleeping&&R.showSleeping?r.bodies(_,B,b):(R.showConvexHulls&&r.bodyConvexHulls(_,B,b),r.bodyWireframes(_,B,b)),R.showBounds&&r.bodyBounds(_,B,b),(R.showAxes||R.showAngleIndicator)&&r.bodyAxes(_,B,b),R.showPositions&&r.bodyPositions(_,B,b),R.showVelocity&&r.bodyVelocity(_,B,b),R.showIds&&r.bodyIds(_,B,b),R.showSeparations&&r.separations(_,w.pairs.list,b),R.showCollisions&&r.collisions(_,w.pairs.list,b),R.showVertexNumbers&&r.vertexNumbers(_,B,b),R.showMousePosition&&r.mousePosition(_,_.mouse,b),r.constraints(z,b),R.hasBounds&&r.endViewTransform(_),c.trigger(_,"afterRender",te),D.lastElapsed=o.now()-A},r.stats=function(_,E,A){for(var w=_.engine,y=w.world,v=l.allBodies(y),b=0,R=55,D=44,U=0,N=0,O=0;O<v.length;O+=1)b+=v[O].parts.length;var B={Part:b,Body:v.length,Cons:l.allConstraints(y).length,Comp:l.allComposites(y).length,Pair:w.pairs.list.length};E.fillStyle="#0e0f19",E.fillRect(U,N,R*5.5,D),E.font="12px Arial",E.textBaseline="top",E.textAlign="right";for(var z in B){var Z=B[z];E.fillStyle="#aaa",E.fillText(z,U+R,N+8),E.fillStyle="#eee",E.fillText(Z,U+R,N+26),U+=R}},r.performance=function(_,E){var A=_.engine,w=_.timing,y=w.deltaHistory,v=w.elapsedHistory,b=w.timestampElapsedHistory,R=w.engineDeltaHistory,D=w.engineUpdatesHistory,U=w.engineElapsedHistory,N=A.timing.lastUpdatesPerFrame,O=A.timing.lastDelta,B=m(y),z=m(v),Z=m(R),te=m(D),le=m(U),me=m(b),Re=me/B||0,Y=Math.round(B/O),j=1e3/B||0,re=4,se=12,he=60,ze=34,Se=10,Ge=69;E.fillStyle="#0e0f19",E.fillRect(0,50,se*5+he*6+22,ze),r.status(E,Se,Ge,he,re,y.length,Math.round(j)+" fps",j/r._goodFps,function(Be){return y[Be]/B-1}),r.status(E,Se+se+he,Ge,he,re,R.length,O.toFixed(2)+" dt",r._goodDelta/O,function(Be){return R[Be]/Z-1}),r.status(E,Se+(se+he)*2,Ge,he,re,D.length,N+" upf",Math.pow(o.clamp(te/Y||1,0,1),4),function(Be){return D[Be]/te-1}),r.status(E,Se+(se+he)*3,Ge,he,re,U.length,le.toFixed(2)+" ut",1-N*le/r._goodFps,function(Be){return U[Be]/le-1}),r.status(E,Se+(se+he)*4,Ge,he,re,v.length,z.toFixed(2)+" rt",1-z/r._goodFps,function(Be){return v[Be]/z-1}),r.status(E,Se+(se+he)*5,Ge,he,re,b.length,Re.toFixed(2)+" x",Re*Re*Re,function(Be){return(b[Be]/y[Be]/Re||0)-1})},r.status=function(_,E,A,w,y,v,b,R,D){_.strokeStyle="#888",_.fillStyle="#444",_.lineWidth=1,_.fillRect(E,A+7,w,1),_.beginPath(),_.moveTo(E,A+7-y*o.clamp(.4*D(0),-2,2));for(var U=0;U<w;U+=1)_.lineTo(E+U,A+7-(U<v?y*o.clamp(.4*D(U),-2,2):0));_.stroke(),_.fillStyle="hsl("+o.clamp(25+95*R,0,120)+",100%,60%)",_.fillRect(E,A-7,4,4),_.font="12px Arial",_.textBaseline="middle",_.textAlign="right",_.fillStyle="#eee",_.fillText(b,E+w,A-5)},r.constraints=function(_,E){for(var A=E,w=0;w<_.length;w++){var y=_[w];if(!(!y.render.visible||!y.pointA||!y.pointB)){var v=y.bodyA,b=y.bodyB,R,D;if(v?R=d.add(v.position,y.pointA):R=y.pointA,y.render.type==="pin")A.beginPath(),A.arc(R.x,R.y,3,0,2*Math.PI),A.closePath();else{if(b?D=d.add(b.position,y.pointB):D=y.pointB,A.beginPath(),A.moveTo(R.x,R.y),y.render.type==="spring")for(var U=d.sub(D,R),N=d.perp(d.normalise(U)),O=Math.ceil(o.clamp(y.length/5,12,20)),B,z=1;z<O;z+=1)B=z%2===0?1:-1,A.lineTo(R.x+U.x*(z/O)+N.x*B*4,R.y+U.y*(z/O)+N.y*B*4);A.lineTo(D.x,D.y)}y.render.lineWidth&&(A.lineWidth=y.render.lineWidth,A.strokeStyle=y.render.strokeStyle,A.stroke()),y.render.anchors&&(A.fillStyle=y.render.strokeStyle,A.beginPath(),A.arc(R.x,R.y,3,0,2*Math.PI),A.arc(D.x,D.y,3,0,2*Math.PI),A.closePath(),A.fill())}}},r.bodies=function(_,E,A){var w=A;_.engine;var y=_.options,v=y.showInternalEdges||!y.wireframes,b,R,D,U;for(D=0;D<E.length;D++)if(b=E[D],!!b.render.visible){for(U=b.parts.length>1?1:0;U<b.parts.length;U++)if(R=b.parts[U],!!R.render.visible){if(y.showSleeping&&b.isSleeping?w.globalAlpha=.5*R.render.opacity:R.render.opacity!==1&&(w.globalAlpha=R.render.opacity),R.render.sprite&&R.render.sprite.texture&&!y.wireframes){var N=R.render.sprite,O=T(_,N.texture);w.translate(R.position.x,R.position.y),w.rotate(R.angle),w.drawImage(O,O.width*-N.xOffset*N.xScale,O.height*-N.yOffset*N.yScale,O.width*N.xScale,O.height*N.yScale),w.rotate(-R.angle),w.translate(-R.position.x,-R.position.y)}else{if(R.circleRadius)w.beginPath(),w.arc(R.position.x,R.position.y,R.circleRadius,0,2*Math.PI);else{w.beginPath(),w.moveTo(R.vertices[0].x,R.vertices[0].y);for(var B=1;B<R.vertices.length;B++)!R.vertices[B-1].isInternal||v?w.lineTo(R.vertices[B].x,R.vertices[B].y):w.moveTo(R.vertices[B].x,R.vertices[B].y),R.vertices[B].isInternal&&!v&&w.moveTo(R.vertices[(B+1)%R.vertices.length].x,R.vertices[(B+1)%R.vertices.length].y);w.lineTo(R.vertices[0].x,R.vertices[0].y),w.closePath()}y.wireframes?(w.lineWidth=1,w.strokeStyle=_.options.wireframeStrokeStyle,w.stroke()):(w.fillStyle=R.render.fillStyle,R.render.lineWidth&&(w.lineWidth=R.render.lineWidth,w.strokeStyle=R.render.strokeStyle,w.stroke()),w.fill())}w.globalAlpha=1}}},r.bodyWireframes=function(_,E,A){var w=A,y=_.options.showInternalEdges,v,b,R,D,U;for(w.beginPath(),R=0;R<E.length;R++)if(v=E[R],!!v.render.visible)for(U=v.parts.length>1?1:0;U<v.parts.length;U++){for(b=v.parts[U],w.moveTo(b.vertices[0].x,b.vertices[0].y),D=1;D<b.vertices.length;D++)!b.vertices[D-1].isInternal||y?w.lineTo(b.vertices[D].x,b.vertices[D].y):w.moveTo(b.vertices[D].x,b.vertices[D].y),b.vertices[D].isInternal&&!y&&w.moveTo(b.vertices[(D+1)%b.vertices.length].x,b.vertices[(D+1)%b.vertices.length].y);w.lineTo(b.vertices[0].x,b.vertices[0].y)}w.lineWidth=1,w.strokeStyle=_.options.wireframeStrokeStyle,w.stroke()},r.bodyConvexHulls=function(_,E,A){var w=A,y,v,b;for(w.beginPath(),v=0;v<E.length;v++)if(y=E[v],!(!y.render.visible||y.parts.length===1)){for(w.moveTo(y.vertices[0].x,y.vertices[0].y),b=1;b<y.vertices.length;b++)w.lineTo(y.vertices[b].x,y.vertices[b].y);w.lineTo(y.vertices[0].x,y.vertices[0].y)}w.lineWidth=1,w.strokeStyle="rgba(255,255,255,0.2)",w.stroke()},r.vertexNumbers=function(_,E,A){var w=A,y,v,b;for(y=0;y<E.length;y++){var R=E[y].parts;for(b=R.length>1?1:0;b<R.length;b++){var D=R[b];for(v=0;v<D.vertices.length;v++)w.fillStyle="rgba(255,255,255,0.2)",w.fillText(y+"_"+v,D.position.x+(D.vertices[v].x-D.position.x)*.8,D.position.y+(D.vertices[v].y-D.position.y)*.8)}}},r.mousePosition=function(_,E,A){var w=A;w.fillStyle="rgba(255,255,255,0.8)",w.fillText(E.position.x+"  "+E.position.y,E.position.x+5,E.position.y-5)},r.bodyBounds=function(_,E,A){var w=A;_.engine;var y=_.options;w.beginPath();for(var v=0;v<E.length;v++){var b=E[v];if(b.render.visible)for(var R=E[v].parts,D=R.length>1?1:0;D<R.length;D++){var U=R[D];w.rect(U.bounds.min.x,U.bounds.min.y,U.bounds.max.x-U.bounds.min.x,U.bounds.max.y-U.bounds.min.y)}}y.wireframes?w.strokeStyle="rgba(255,255,255,0.08)":w.strokeStyle="rgba(0,0,0,0.1)",w.lineWidth=1,w.stroke()},r.bodyAxes=function(_,E,A){var w=A;_.engine;var y=_.options,v,b,R,D;for(w.beginPath(),b=0;b<E.length;b++){var U=E[b],N=U.parts;if(U.render.visible)if(y.showAxes)for(R=N.length>1?1:0;R<N.length;R++)for(v=N[R],D=0;D<v.axes.length;D++){var O=v.axes[D];w.moveTo(v.position.x,v.position.y),w.lineTo(v.position.x+O.x*20,v.position.y+O.y*20)}else for(R=N.length>1?1:0;R<N.length;R++)for(v=N[R],D=0;D<v.axes.length;D++)w.moveTo(v.position.x,v.position.y),w.lineTo((v.vertices[0].x+v.vertices[v.vertices.length-1].x)/2,(v.vertices[0].y+v.vertices[v.vertices.length-1].y)/2)}y.wireframes?(w.strokeStyle="indianred",w.lineWidth=1):(w.strokeStyle="rgba(255, 255, 255, 0.4)",w.globalCompositeOperation="overlay",w.lineWidth=2),w.stroke(),w.globalCompositeOperation="source-over"},r.bodyPositions=function(_,E,A){var w=A;_.engine;var y=_.options,v,b,R,D;for(w.beginPath(),R=0;R<E.length;R++)if(v=E[R],!!v.render.visible)for(D=0;D<v.parts.length;D++)b=v.parts[D],w.arc(b.position.x,b.position.y,3,0,2*Math.PI,!1),w.closePath();for(y.wireframes?w.fillStyle="indianred":w.fillStyle="rgba(0,0,0,0.5)",w.fill(),w.beginPath(),R=0;R<E.length;R++)v=E[R],v.render.visible&&(w.arc(v.positionPrev.x,v.positionPrev.y,2,0,2*Math.PI,!1),w.closePath());w.fillStyle="rgba(255,165,0,0.8)",w.fill()},r.bodyVelocity=function(_,E,A){var w=A;w.beginPath();for(var y=0;y<E.length;y++){var v=E[y];if(v.render.visible){var b=a.getVelocity(v);w.moveTo(v.position.x,v.position.y),w.lineTo(v.position.x+b.x,v.position.y+b.y)}}w.lineWidth=3,w.strokeStyle="cornflowerblue",w.stroke()},r.bodyIds=function(_,E,A){var w=A,y,v;for(y=0;y<E.length;y++)if(E[y].render.visible){var b=E[y].parts;for(v=b.length>1?1:0;v<b.length;v++){var R=b[v];w.font="12px Arial",w.fillStyle="rgba(255,255,255,0.5)",w.fillText(R.id,R.position.x+10,R.position.y-10)}}},r.collisions=function(_,E,A){var w=A,y=_.options,v,b,R,D;for(w.beginPath(),R=0;R<E.length;R++)if(v=E[R],!!v.isActive)for(b=v.collision,D=0;D<v.contactCount;D++){var U=v.contacts[D],N=U.vertex;w.rect(N.x-1.5,N.y-1.5,3.5,3.5)}for(y.wireframes?w.fillStyle="rgba(255,255,255,0.7)":w.fillStyle="orange",w.fill(),w.beginPath(),R=0;R<E.length;R++)if(v=E[R],!!v.isActive&&(b=v.collision,v.contactCount>0)){var O=v.contacts[0].vertex.x,B=v.contacts[0].vertex.y;v.contactCount===2&&(O=(v.contacts[0].vertex.x+v.contacts[1].vertex.x)/2,B=(v.contacts[0].vertex.y+v.contacts[1].vertex.y)/2),b.bodyB===b.supports[0].body||b.bodyA.isStatic===!0?w.moveTo(O-b.normal.x*8,B-b.normal.y*8):w.moveTo(O+b.normal.x*8,B+b.normal.y*8),w.lineTo(O,B)}y.wireframes?w.strokeStyle="rgba(255,165,0,0.7)":w.strokeStyle="orange",w.lineWidth=1,w.stroke()},r.separations=function(_,E,A){var w=A,y=_.options,v,b,R,D,U;for(w.beginPath(),U=0;U<E.length;U++)if(v=E[U],!!v.isActive){b=v.collision,R=b.bodyA,D=b.bodyB;var N=1;!D.isStatic&&!R.isStatic&&(N=.5),D.isStatic&&(N=0),w.moveTo(D.position.x,D.position.y),w.lineTo(D.position.x-b.penetration.x*N,D.position.y-b.penetration.y*N),N=1,!D.isStatic&&!R.isStatic&&(N=.5),R.isStatic&&(N=0),w.moveTo(R.position.x,R.position.y),w.lineTo(R.position.x+b.penetration.x*N,R.position.y+b.penetration.y*N)}y.wireframes?w.strokeStyle="rgba(255,165,0,0.5)":w.strokeStyle="orange",w.stroke()},r.inspector=function(_,E){_.engine;var A=_.selected,w=_.render,y=w.options,v;if(y.hasBounds){var b=w.bounds.max.x-w.bounds.min.x,R=w.bounds.max.y-w.bounds.min.y,D=b/w.options.width,U=R/w.options.height;E.scale(1/D,1/U),E.translate(-w.bounds.min.x,-w.bounds.min.y)}for(var N=0;N<A.length;N++){var O=A[N].data;switch(E.translate(.5,.5),E.lineWidth=1,E.strokeStyle="rgba(255,165,0,0.9)",E.setLineDash([1,2]),O.type){case"body":v=O.bounds,E.beginPath(),E.rect(Math.floor(v.min.x-3),Math.floor(v.min.y-3),Math.floor(v.max.x-v.min.x+6),Math.floor(v.max.y-v.min.y+6)),E.closePath(),E.stroke();break;case"constraint":var B=O.pointA;O.bodyA&&(B=O.pointB),E.beginPath(),E.arc(B.x,B.y,10,0,2*Math.PI),E.closePath(),E.stroke();break}E.setLineDash([]),E.translate(-.5,-.5)}_.selectStart!==null&&(E.translate(.5,.5),E.lineWidth=1,E.strokeStyle="rgba(255,165,0,0.6)",E.fillStyle="rgba(255,165,0,0.1)",v=_.selectBounds,E.beginPath(),E.rect(Math.floor(v.min.x),Math.floor(v.min.y),Math.floor(v.max.x-v.min.x),Math.floor(v.max.y-v.min.y)),E.closePath(),E.stroke(),E.fill(),E.translate(-.5,-.5)),y.hasBounds&&E.setTransform(1,0,0,1,0,0)};var p=function(_,E){var A=_.engine,w=_.timing,y=w.historySize,v=A.timing.timestamp;w.delta=E-w.lastTime||r._goodDelta,w.lastTime=E,w.timestampElapsed=v-w.lastTimestamp||0,w.lastTimestamp=v,w.deltaHistory.unshift(w.delta),w.deltaHistory.length=Math.min(w.deltaHistory.length,y),w.engineDeltaHistory.unshift(A.timing.lastDelta),w.engineDeltaHistory.length=Math.min(w.engineDeltaHistory.length,y),w.timestampElapsedHistory.unshift(w.timestampElapsed),w.timestampElapsedHistory.length=Math.min(w.timestampElapsedHistory.length,y),w.engineUpdatesHistory.unshift(A.timing.lastUpdatesPerFrame),w.engineUpdatesHistory.length=Math.min(w.engineUpdatesHistory.length,y),w.engineElapsedHistory.unshift(A.timing.lastElapsed),w.engineElapsedHistory.length=Math.min(w.engineElapsedHistory.length,y),w.elapsedHistory.unshift(w.lastElapsed),w.elapsedHistory.length=Math.min(w.elapsedHistory.length,y)},m=function(_){for(var E=0,A=0;A<_.length;A+=1)E+=_[A];return E/_.length||0},x=function(_,E){var A=document.createElement("canvas");return A.width=_,A.height=E,A.oncontextmenu=function(){return!1},A.onselectstart=function(){return!1},A},S=function(_){var E=_.getContext("2d"),A=window.devicePixelRatio||1,w=E.webkitBackingStorePixelRatio||E.mozBackingStorePixelRatio||E.msBackingStorePixelRatio||E.oBackingStorePixelRatio||E.backingStorePixelRatio||1;return A/w},T=function(_,E){var A=_.textures[E];return A||(A=_.textures[E]=new Image,A.src=E,A)},M=function(_,E){var A=E;/(jpg|gif|png)$/.test(E)&&(A="url("+E+")"),_.canvas.style.background=A,_.canvas.style.backgroundSize="contain",_.currentBackground=E}})()},function(t,n,i){var r={};t.exports=r;var a=i(5),o=i(17),l=i(0);(function(){r._maxFrameDelta=1e3/15,r._frameDeltaFallback=1e3/60,r._timeBufferMargin=1.5,r._elapsedNextEstimate=1,r._smoothingLowerBound=.1,r._smoothingUpperBound=.9,r.create=function(c){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(d,c);return h.fps=0,h},r.run=function(c,d){return c.timeBuffer=r._frameDeltaFallback,function h(u){c.frameRequestId=r._onNextFrame(c,h),u&&c.enabled&&r.tick(c,d,u)}(),c},r.tick=function(c,d,h){var u=l.now(),g=c.delta,p=0,m=h-c.timeLastTick;if((!m||!c.timeLastTick||m>Math.max(r._maxFrameDelta,c.maxFrameTime))&&(m=c.frameDelta||r._frameDeltaFallback),c.frameDeltaSmoothing){c.frameDeltaHistory.push(m),c.frameDeltaHistory=c.frameDeltaHistory.slice(-c.frameDeltaHistorySize);var x=c.frameDeltaHistory.slice(0).sort(),S=c.frameDeltaHistory.slice(x.length*r._smoothingLowerBound,x.length*r._smoothingUpperBound),T=f(S);m=T||m}c.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),c.frameDelta=m,c.timeLastTick=h,c.timeBuffer+=c.frameDelta,c.timeBuffer=l.clamp(c.timeBuffer,0,c.frameDelta+g*r._timeBufferMargin),c.lastUpdatesDeferred=0;var M=c.maxUpdates||Math.ceil(c.maxFrameTime/g),_={timestamp:d.timing.timestamp};a.trigger(c,"beforeTick",_),a.trigger(c,"tick",_);for(var E=l.now();g>0&&c.timeBuffer>=g*r._timeBufferMargin;){a.trigger(c,"beforeUpdate",_),o.update(d,g),a.trigger(c,"afterUpdate",_),c.timeBuffer-=g,p+=1;var A=l.now()-u,w=l.now()-E,y=A+r._elapsedNextEstimate*w/p;if(p>=M||y>c.maxFrameTime){c.lastUpdatesDeferred=Math.round(Math.max(0,c.timeBuffer/g-r._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=p,a.trigger(c,"afterTick",_),c.frameDeltaHistory.length>=100&&(c.lastUpdatesDeferred&&Math.round(c.frameDelta/g)>M?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):c.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof c.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(c.deltaMin||c.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),c.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},r.stop=function(c){r._cancelNextFrame(c)},r._onNextFrame=function(c,d){if(typeof window<"u"&&window.requestAnimationFrame)c.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return c.frameRequestId},r._cancelNextFrame=function(c){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(c.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var f=function(c){for(var d=0,h=c.length,u=0;u<h;u+=1)d+=c[u];return d/h||0}})()},function(t,n,i){var r={};t.exports=r;var a=i(8),o=i(0),l=o.deprecated;(function(){r.collides=function(f,c){return a.collides(f,c)},l(r,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,n,i){var r={};t.exports=r,i(1);var a=i(0);(function(){r.pathToVertices=function(o,l){typeof window<"u"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var f,c,d,h,u,g,p,m,x,S,T=[],M,_,E=0,A=0,w=0;l=l||15;var y=function(b,R,D){var U=D%2===1&&D>1;if(!x||b!=x.x||R!=x.y){x&&U?(M=x.x,_=x.y):(M=0,_=0);var N={x:M+b,y:_+R};(U||!x)&&(x=N),T.push(N),A=M+b,w=_+R}},v=function(b){var R=b.pathSegTypeAsLetter.toUpperCase();if(R!=="Z"){switch(R){case"M":case"L":case"T":case"C":case"S":case"Q":A=b.x,w=b.y;break;case"H":A=b.x;break;case"V":w=b.y;break}y(A,w,b.pathSegType)}};for(r._svgPathToAbsolute(o),d=o.getTotalLength(),g=[],f=0;f<o.pathSegList.numberOfItems;f+=1)g.push(o.pathSegList.getItem(f));for(p=g.concat();E<d;){if(S=o.getPathSegAtLength(E),u=g[S],u!=m){for(;p.length&&p[0]!=u;)v(p.shift());m=u}switch(u.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=o.getPointAtLength(E),y(h.x,h.y,0);break}E+=l}for(f=0,c=p.length;f<c;++f)v(p[f]);return T},r._svgPathToAbsolute=function(o){for(var l,f,c,d,h,u,g=o.pathSegList,p=0,m=0,x=g.numberOfItems,S=0;S<x;++S){var T=g.getItem(S),M=T.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(M))"x"in T&&(p=T.x),"y"in T&&(m=T.y);else switch("x1"in T&&(c=p+T.x1),"x2"in T&&(h=p+T.x2),"y1"in T&&(d=m+T.y1),"y2"in T&&(u=m+T.y2),"x"in T&&(p+=T.x),"y"in T&&(m+=T.y),M){case"m":g.replaceItem(o.createSVGPathSegMovetoAbs(p,m),S);break;case"l":g.replaceItem(o.createSVGPathSegLinetoAbs(p,m),S);break;case"h":g.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(p),S);break;case"v":g.replaceItem(o.createSVGPathSegLinetoVerticalAbs(m),S);break;case"c":g.replaceItem(o.createSVGPathSegCurvetoCubicAbs(p,m,c,d,h,u),S);break;case"s":g.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(p,m,h,u),S);break;case"q":g.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(p,m,c,d),S);break;case"t":g.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(p,m),S);break;case"a":g.replaceItem(o.createSVGPathSegArcAbs(p,m,T.r1,T.r2,T.angle,T.largeArcFlag,T.sweepFlag),S);break;case"z":case"Z":p=l,m=f;break}(M=="M"||M=="m")&&(l=p,f=m)}}})()},function(t,n,i){var r={};t.exports=r;var a=i(6);i(0),function(){r.create=a.create,r.add=a.add,r.remove=a.remove,r.clear=a.clear,r.addComposite=a.addComposite,r.addBody=a.addBody,r.addConstraint=a.addConstraint}()}])})}(ia)),ia.exports}var zt=xv();class _v{constructor(){this.speed=1,this.isPlaying=!1,this.width=450,this.height=800,this.range={x:199,y:372}}init(){this.engine=zt.Engine.create({enableSleeping:!0}),this.createFrame(),this.setupTxt(),this.isPlaying=!0}createCustomBody(e,{x:t=0,y:n=0,isStatic:i=!1,mass:r=.5,restitution:a=.2,scale:o=1.16}={}){const l=e.map(c=>zt.Bodies.fromVertices(c.centroid.x*o,c.centroid.y*o,[c.relative.map(d=>({x:d.x*o,y:d.y*o}))],{},!1)),f=zt.Body.create({parts:l,restitution:a,mass:r,isStatic:i,sleepThreshold:120});return zt.Body.setPosition(f,{x:t,y:n}),f}update(e){zt.Engine.update(this.engine,Math.min(e,16.6666))}createFrame(){const e=this.createCustomBody(fv,{x:225,y:517,isStatic:!0,mass:0,restitution:0,scale:1});zt.World.add(this.engine.world,e)}setupTxt(){this.txtArray=[];for(let e=0;e<at.SRC_PARAM.createLength/4;e++){const t=this.createCustomBody(hv,{x:0,y:0}),n=this.createCustomBody(dv,{x:0,y:0}),i=this.createCustomBody(pv,{x:0,y:0}),r=this.createCustomBody(mv,{x:0,y:0});this.txtArray.push(t,n,i,r)}zt.World.add(this.engine.world,this.txtArray),this.txtArray.forEach(e=>{this.pause(e)})}pause(e){zt.Body.setStatic(e,!0),zt.Body.setPosition(e,{x:-100,y:300}),zt.Body.setVelocity(e,{x:0,y:0})}resume(e){zt.Body.setPosition(e,{x:70+Math.random()*(this.width-140),y:-200}),zt.Body.setVelocity(e,{x:0,y:0}),zt.Body.setStatic(e,!1),zt.Sleeping.set(e,!1)}wakeUp(){this.txtArray.forEach(e=>{zt.Sleeping.set(e,!1)})}}class vv{constructor(e,t,n){this.app=n,this.camera=e,this.canvas=t.domElement,this._nextTargetIndex=0,this._currentHoverMesh=null,this._rect=this.canvas.getBoundingClientRect(),this._hovering=!1,this._hoveringRecord=[],this._types=4,window.addEventListener("resize",()=>{this._rect=this.canvas.getBoundingClientRect()})}attachInputListeners(e){const t=new op,{targets:n,onSequenceHover:i,radius:r=.4}=e;this._meshById=new Map,n.forEach(a=>{this._meshById.set(a.id,a)}),window.addEventListener("mousedown",a=>{this._hovering=!0,this.checkIntersection(a,t,n,i,r)}),window.addEventListener("mouseup",()=>{const a=Math.floor(this._hoveringRecord.length/this._types);a>0&&this.onSequenceComplete(a),this.reset()}),window.addEventListener("mousemove",a=>{this._hovering&&this.checkIntersection(a,t,n,i,r)},!1),document.addEventListener("touchstart",a=>{this.app.playing&&(this._hovering=!0,this.checkIntersection(a,t,n,i,r))}),document.addEventListener("touchend",()=>{const a=Math.floor(this._hoveringRecord.length/this._types);a>0&&this.onSequenceComplete(a),this.reset()}),document.addEventListener("touchmove",a=>{this.app.playing&&this._hovering&&this.checkIntersection(a,t,n,i,r)},!1)}checkIntersection(e,t,n,i,r){const a=this._rect;let o,l;e.touches&&e.touches.length>0?(o=e.touches[0].clientX,l=e.touches[0].clientY):e.changedTouches&&e.changedTouches.length>0?(o=e.changedTouches[0].clientX,l=e.changedTouches[0].clientY):(o=e.clientX,l=e.clientY);const f=(o-a.left)/a.width*2-1,c=-((l-a.top)/a.height)*2+1,d=new Ze(f,c);t.setFromCamera(d,this.camera);const h=t.intersectObjects(n);if(h.length>0)for(let u=0;u<h.length;u++){const g=h[u],p=g.object,m=g.point,x=p.position;if(m.distanceTo(x)<=r){const T=p.userData.index;if(this._currentHoverMesh!==p){let M=0;if(this._currentHoverMesh!==null&&(M=x.distanceTo(this._currentHoverMesh.position)),this._hoveringRecord.includes(p.id)){if(this._hoveringRecord.length>=2&&this._hoveringRecord[this._hoveringRecord.length-2]===p.id){const _=this._meshById.get(this._hoveringRecord[this._hoveringRecord.length-1]);_.userData.helperMesh.visible=!1,this._hoveringRecord.pop(),this.app.removePointFromLine(!1),this._nextTargetIndex=(this._nextTargetIndex-1+this._types)%this._types;const E=this._meshById.get(this._hoveringRecord[this._hoveringRecord.length-1]);this._currentHoverMesh=E}}else if(this._nextTargetIndex===T&&1.3>M){this._hoveringRecord.push(p.id);const _=this._meshById.get(p.id);this.app.addPointToLine(_.position),_.userData.helperMesh.visible=!0,this._nextTargetIndex=(this._nextTargetIndex+1)%this._types,this._currentHoverMesh=p}i(T)}break}}}onSequenceComplete(e){console.log(this._hoveringRecord);for(let t=0;t<e*this._types;t++){const n=this._meshById.get(this._hoveringRecord[t]);t%this._types===2&&this.app.fadeText(this.app.clearCount+Math.floor(t/this._types),n.position,Math.floor(t/this._types)),this.app.removeOBJ(n.userData.id)}this.app.updateClearCount(e),this.app.wakeUp(),this.app.addOBJ(e*this._types)}reset(){this._hovering=!1,this._currentHoverMesh=null;for(let e=0;e<this._hoveringRecord.length;e++){const t=this._meshById.get(this._hoveringRecord[e]);t.userData.helperMesh.visible=!1}this._hoveringRecord=[],this.app.removePointFromLine(!0),this._nextTargetIndex=0}}class ma{constructor(e=[]){this.readyPool=[...e],ma.shuffle(this.readyPool),this.usedPool=[]}static shuffle(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}}refill(){ma.shuffle(this.usedPool),this.readyPool=this.usedPool,this.usedPool=[]}spawn(){return this.readyPool.length===0&&this.refill(),this.readyPool.shift()}recycle(e){this.usedPool.push(e)}}window.addEventListener("DOMContentLoaded",async()=>{const s=document.querySelector("#app"),e=new yv(s);await e.load(),e.init(),e.render()},!1);class yv{constructor(e){this.wrapper=e;const t=new $e(at.RENDERER_PARAM.clearColor);this.renderer=new Yx({stencil:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(t),this.w=this.wrapper.clientWidth,this.h=this.wrapper.clientHeight,this.renderer.setSize(this.w,this.h),this.wrapper.appendChild(this.renderer.domElement),this.scene=new Wd,this.camera=new mn(at.CAMERA_PARAM.fovy,this.w/this.h,at.CAMERA_PARAM.near,at.CAMERA_PARAM.far),this.camera.position.copy(at.CAMERA_PARAM.position),this.camera.lookAt(at.CAMERA_PARAM.lookAt);const n=500;this.axesHelper=new cp(n),this.scene.add(this.axesHelper),this.playing=!1,this.render=this.render.bind(this),window.addEventListener("resize",()=>{this.w=this.wrapper.clientWidth,this.h=this.wrapper.clientHeight,this.renderer.setSize(this.w,this.h),this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix()},!1)}async load(){const e=new ip,n=["./img/ta.png","./img/ma.png","./img/nya.png","./img/n.png","./img/game-cover.webp","./img/game-bg.webp","./img/game-bottom.webp","./img/game-touchIcon.webp","./img/game-count-part.webp","./img/game-count-0.webp","./img/game-count-1.webp","./img/game-count-2.webp","./img/game-count-3.webp","./img/game-count-4.webp","./img/game-count-5.webp","./img/game-count-6.webp","./img/game-count-7.webp","./img/game-count-8.webp","./img/game-count-9.webp","./img/game-count-10.webp","./img/game-count-11.webp","./img/game-count-12.webp","./img/game-count-13.webp","./img/game-count-14.webp","./img/game-count-15.webp","./img/game-count-16.webp","./img/game-count-17.webp","./img/game-count-18.webp","./img/game-count-19.webp","./img/game-count-20.webp","./img/game-count-21.webp","./img/message-part1.webp","./img/message-part2.png","./img/message-part3.png","./img/message-part4.png","./img/top-bg.webp","./img/game-cat1-leftArm.webp","./img/game-cat1-rightArm.webp","./img/game-cat2-rightArm.webp","./img/game-cat2-leftArm.webp","./img/game-text1.webp","./img/game-text2.webp","./img/game-text3.webp","./img/game-text4.webp","./img/game-text5.webp","./img/game-text6.webp","./img/game-text7.webp","./img/game-text8.webp","./img/game-text9.webp","./img/game-text10.webp","./img/game-text11.webp","./img/game-text12.webp","./img/game-text13.webp","./img/game-text14.webp","./img/game-text15.webp","./img/game-text16.webp","./img/game-text17.webp","./img/game-text18.webp","./img/game-text19.webp","./img/game-text20.webp"].map((i,r)=>new Promise(a=>{e.load(i,o=>{o.wrapS=Qr,o.wrapT=Qr,a(o)})}));this.textures=await Promise.all(n),this.textures.forEach(i=>{i.colorSpace="srgb"})}init(){this.prevTime=performance.now(),this.uTime=0,this.clearCount=0,this.Raycaster=new vv(this.camera,this.renderer,this),this.Matter=new _v,this.Matter.init("webgl-canvas");const e=Array.from({length:at.SRC_PARAM.createLength},(n,i)=>({id:i}));this.pool=new ma(e),this.range={x:2.85,y:5.36},this.baseMat=new hr({color:16777215,transparent:!0}),this.planeGeo=new br,this.planeMaskGeo=new br(1,1,30,1);const t=this.planeMaskGeo.attributes.position;for(let n=0;n<t.count/2;n++){const i=t.getX(n),r=t.getY(n);t.setY(n,r/1+i*i*.18+i*i*i*i*.85+.04)}t.needsUpdate=!0,this.sphereGeo=new Cl,this.group=new zi,this.scene.add(this.group),this.createTxtMesh(),this.createGameScene(),this.setSRC(this.Matter.txtArray),this.createLine2Helper(),this.addOBJ(24),this.createMessageScene(),this.gameSceneMask.position.y=0,tt.to(this.messageSceneMask.position,{y:-7.75/2*3,duration:1,ease:"power3.out"}),this.playing=!0,this.catPunchManager()}render(){requestAnimationFrame(this.render);const e=performance.now()-this.prevTime;this.uTime+=e,this.prevTime=performance.now(),this.Matter.isPlaying&&(this.Matter.update(e),this.updateTxt()),this.renderer.render(this.scene,this.camera)}createNewTexMat(e,t=0){const n=this.baseMat.clone();return n.map=e,n.needsUpdate=!0,0<t&&(n.stencilWrite=!0,n.stencilRef=t,n.stencilFunc=Yh,n.stencilFail=Ht,n.stencilZFail=Ht,n.stencilZPass=Ht),n}createTxtMesh(){this.txtMat=[];for(let e=0;e<4;e++)this.txtMat.push(this.createNewTexMat(this.textures[e],2));this.txtMeshArray=[];for(let e=0;e<at.SRC_PARAM.createLength;e++){const t=new je(this.planeGeo,this.txtMat[e%4]);t.scale.set(1.5*1.16,1.5*1.16,1),t.userData.index=e%4,this.group.add(t),this.txtMeshArray.push(t)}this.Raycaster.attachInputListeners({targets:this.txtMeshArray,onSequenceHover:e=>{}})}setSRC(e){this.txtMeshArray.forEach((t,n)=>{const i=new je(this.planeGeo,this.createNewTexMat(this.textures[7]));i.scale.set(.3,.3,1),this.group.add(i),i.visible=!1,t.userData.id=n,t.userData.helperMesh=i,t.userData.matterBody=e[n]})}createTopScene(){const e=new hr({colorWrite:!1,depthWrite:!1,depthTest:!1,color:16777215,colorWrite:!1,stencilWrite:!0,stencilRef:1,stencilFunc:qr,stencilFail:Ht,stencilZFail:Ht,stencilZPass:Ta});this.topSceneMask=new je(this.planeGeo,e),this.topSceneMask.position.z=.05,this.topSceneMask.scale.set(at.TOPSCENE_PARAM.bg.baseScale,at.TOPSCENE_PARAM.bg.baseScale/2*3,1),this.group.add(this.topSceneMask);const t=new je(this.planeGeo,this.createNewTexMat(this.textures[35],1));t.position.z=.05,t.scale.set(at.TOPSCENE_PARAM.bg.baseScale,at.TOPSCENE_PARAM.bg.baseScale/2*3,1),this.group.add(t)}createGameScene(){const e=new hr({colorWrite:!1,depthWrite:!1,depthTest:!1,color:255,colorWrite:!1,stencilWrite:!0,stencilRef:2,stencilFunc:qr,stencilFail:Ht,stencilZFail:Ht,stencilZPass:Ta});this.gameSceneMask=new je(this.planeMaskGeo,e),this.gameSceneMask.position.y=-7.71/2*3,this.gameSceneMask.position.z=-.02,this.gameSceneMask.scale.set(at.GAMESCENE_PARAM.bg.baseScale,at.GAMESCENE_PARAM.bg.baseScale/2*3,1),this.group.add(this.gameSceneMask);const t=new je(this.planeGeo,this.createNewTexMat(this.textures[5],2));t.position.z=-.02,t.scale.set(at.GAMESCENE_PARAM.bg.baseScale,at.GAMESCENE_PARAM.bg.baseScale/2*3,1),this.group.add(t);const n=new je(this.planeGeo,this.createNewTexMat(this.textures[4],2));n.position.z=.02,n.scale.set(at.GAMESCENE_PARAM.cover.baseScale,at.GAMESCENE_PARAM.cover.baseScale/2*3,1),this.group.add(n),this.clearCountGroup=new zi,this.group.add(this.clearCountGroup);const i=at.GAMESCENE_PARAM.cover.baseScale/1067,r=new je(this.planeGeo,this.createNewTexMat(this.textures[8],2));r.position.z=.03,r.position.x=i*369/2,r.position.y=i*94/2,r.scale.set(i*369,i*94,1),this.clearCountGroup.add(r),this.clearCountNumberGroup=new zi,this.clearCountGroup.add(this.clearCountNumberGroup);const a=this.textures[9];this.clearCountNumberMesh=new je(this.planeGeo,this.createNewTexMat(a,2)),this.clearCountNumberMesh.position.z=.03,this.clearCountNumberMesh.position.x=i*-a.width/2,this.clearCountNumberMesh.position.y=i*(a.height/2-7),this.clearCountNumberMesh.scale.set(i*a.width,i*a.height,1),this.clearCountNumberGroup.add(this.clearCountNumberMesh),this.clearCountGroup.position.x=i*-(369/2-a.width/2),this.clearCountGroup.position.y=i*-640,this.cat1leftArmMesh=new je(this.planeGeo,this.createNewTexMat(this.textures[36],2)),this.cat1leftArmMesh.position.set(i*-770,i*422,.03),this.cat1leftArmMesh.userData.basePosition=this.cat1leftArmMesh.position.clone(),this.cat1leftArmMesh.scale.set(i*this.textures[36].width,i*this.textures[36].height,1),this.cat1leftArmMesh.userData.baseScale=this.cat1leftArmMesh.scale.clone(),this.group.add(this.cat1leftArmMesh),this.cat1rightArmMesh=new je(this.planeGeo,this.createNewTexMat(this.textures[37],2)),this.cat1rightArmMesh.position.set(i*-894,i*-287,.03),this.cat1rightArmMesh.userData.basePosition=this.cat1rightArmMesh.position.clone(),this.cat1rightArmMesh.scale.set(i*this.textures[37].width,i*this.textures[37].height,1),this.cat1rightArmMesh.userData.baseScale=this.cat1rightArmMesh.scale.clone(),this.group.add(this.cat1rightArmMesh),this.cat2rightArmMesh=new je(this.planeGeo,this.createNewTexMat(this.textures[38],2)),this.cat2rightArmMesh.position.set(i*871,i*246,.03),this.cat2rightArmMesh.userData.basePosition=this.cat2rightArmMesh.position.clone(),this.cat2rightArmMesh.scale.set(i*this.textures[38].width,i*this.textures[38].height,1),this.cat2rightArmMesh.userData.baseScale=this.cat2rightArmMesh.scale.clone(),this.group.add(this.cat2rightArmMesh),this.cat2leftArmMesh=new je(this.planeGeo,this.createNewTexMat(this.textures[39],2)),this.cat2leftArmMesh.position.set(i*788,i*-467,.03),this.cat2leftArmMesh.userData.basePosition=this.cat2leftArmMesh.position.clone(),this.cat2leftArmMesh.scale.set(i*this.textures[39].width,i*this.textures[39].height,1),this.cat2leftArmMesh.userData.baseScale=this.cat2leftArmMesh.scale.clone(),this.group.add(this.cat2leftArmMesh);let o=[41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];o=this.shuffle(o),o.unshift(40),o.push(59),this.textMesh_array=[],console.log(o);for(let l=0;l<o.length;l++){const f=this.textures[o[l]],c=new je(this.planeGeo,this.createNewTexMat(f,2));c.position.z=.03,c.material.opacity=0,c.scale.set(i*f.width*.7,i*f.height*.7,1),this.group.add(c),this.textMesh_array.push(c)}}fadeText(e,t,n){if(e<this.textMesh_array.length){const i=this.textMesh_array[e];tt.timeline().to(i.material,{opacity:1,duration:.4,delay:n*.3,ease:"power2.out"}).to(i.material,{opacity:0,duration:.4,delay:1,ease:"power2.out"}),tt.timeline().set(i.position,{x:t.x,y:t.y}).to(i.position,{y:t.y+.5,duration:2,delay:n*.3,ease:"power2.out"})}}addOBJ(e){if(0<e){const t={x:0};tt.to(t,{x:1,duration:.35,repeat:e-1,onStart:()=>{const n=this.pool.spawn().id,i=this.txtMeshArray[n].userData.matterBody;this.Matter.resume(i)},onRepeat:()=>{const n=this.pool.spawn().id,i=this.txtMeshArray[n].userData.matterBody;this.Matter.resume(i)}})}}shuffle(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}removeOBJ(e){const t=this.txtMeshArray[e].userData.matterBody;this.Matter.pause(t),this.pool.recycle({id:e})}wakeUp(){this.Matter.wakeUp()}updateTxt(){this.txtMeshArray&&this.txtMeshArray.forEach(e=>{const t=e.userData.helperMesh,n=e.userData.matterBody;e.position.x=(n.position.x-this.Matter.width/2)/this.Matter.range.x*this.range.x,e.position.y=(n.position.y-this.Matter.height/2)/this.Matter.range.y*-this.range.y,e.rotation.z=-n.angle,t.position.x=e.position.x,t.position.y=e.position.y})}createLine2Helper(){this.sequencePoints=[],this.lineGeometry=new sf,this.lineGeometry.setPositions(Array(3*30).fill(0)),this.lineMaterial=new Dl({color:16749144,linewidth:4,dashed:!1}),this.lineMaterial.resolution.set(this.w,this.h),this.sequenceHelperLine=new Kx(this.lineGeometry,this.lineMaterial),this.sequenceHelperLine.position.z=.02,this.sequenceHelperLine.computeLineDistances(),this.group.add(this.sequenceHelperLine),window.addEventListener("resize",()=>{this.lineMaterial.resolution.set(this.w,this.h)})}updateLine2Helper(){if(this.sequencePoints.length>=2){const e=this.sequencePoints.flatMap(t=>[t.x,t.y,t.z]);this.lineGeometry.setPositions(e),this.sequenceHelperLine.computeLineDistances()}else this.hideLine2Helper()}hideLine2Helper(){this.lineGeometry.setPositions(Array(3*2).fill(15)),this.sequenceHelperLine.computeLineDistances()}addPointToLine(e){this.sequencePoints.push(e.clone()),this.updateLine2Helper()}removePointFromLine(e){e?(this.hideLine2Helper(),this.sequencePoints=[]):this.sequencePoints.pop(),this.updateLine2Helper()}updateClearCount(e){this.clearCount=Math.min(21,this.clearCount+e);const t=this.textures[9+this.clearCount],n=at.GAMESCENE_PARAM.cover.baseScale/1067;this.clearCountNumberMesh.material.map=t,this.clearCountNumberMesh.position.z=.03,this.clearCountNumberMesh.position.x=n*-t.width/2,this.clearCountNumberMesh.position.y=n*(t.height/2-7),this.clearCountNumberMesh.scale.set(n*t.width,n*t.height,1),tt.timeline().to(this.clearCountNumberGroup.scale,{y:.7,duration:.2,ease:"power1.out"}).to(this.clearCountNumberGroup.scale,{y:1,duration:.2,ease:"power1.out"}),this.clearCountGroup.position.x=n*-(369/2-t.width/2),this.clearCount===21&&(this.playing=!1,tt.timeline().to(this.messageSceneMask.position,{y:-7.75/2*3*1.03,duration:.5,delay:1,ease:"power1.out"}).to(this.messageSceneMask.position,{y:0,duration:1,ease:"power3.out"}))}createMessageScene(){const e=new hr({color:255,colorWrite:!0,stencilWrite:!0,stencilRef:3,stencilFunc:qr,stencilFail:Ht,stencilZFail:Ht,stencilZPass:Ta});this.messageSceneMask=new je(this.planeMaskGeo,e),this.messageSceneMask.position.y=-7.75/2*3*2,this.messageSceneMask.position.z=-.05,this.messageSceneMask.scale.set(at.MESSAGESCENE_PARAM.part1.baseScale,at.MESSAGESCENE_PARAM.part1.baseScale/2*3,1),this.group.add(this.messageSceneMask);const t=new je(this.planeGeo,this.createNewTexMat(this.textures[31],3));t.position.z=-.05,t.scale.set(at.MESSAGESCENE_PARAM.part1.baseScale,at.MESSAGESCENE_PARAM.part1.baseScale/2*3,1),this.group.add(t);const n=at.MESSAGESCENE_PARAM.part1.baseScale/1067;this.part2Mesh=new je(this.planeGeo,this.createNewTexMat(this.textures[32],3)),this.part2Mesh.position.z=-.04,this.part2Mesh.position.x=n*-5,this.part2Mesh.position.y=n*373,this.part2Mesh.scale.set(n*this.textures[32].width,n*this.textures[32].height,1),this.group.add(this.part2Mesh),this.part3Mesh=new je(this.planeGeo,this.createNewTexMat(this.textures[33],3)),this.part3Mesh.position.z=-.04,this.part3Mesh.position.y=n*-205,this.part3Mesh.scale.set(n*this.textures[33].width,n*this.textures[33].height,1),this.group.add(this.part3Mesh),this.part4Mesh=new je(this.planeGeo,this.createNewTexMat(this.textures[34],3)),this.part4Mesh.position.z=-.04,this.part4Mesh.position.x=n*-1,this.part4Mesh.position.y=n*-395,this.part4Mesh.scale.set(n*this.textures[34].width,n*this.textures[34].height,1),this.group.add(this.part4Mesh)}cat1Punch(e){const t=this.cat1leftArmMesh.userData.basePosition,n=this.cat1leftArmMesh.userData.baseScale,i=this.cat1rightArmMesh.userData.basePosition,r=this.cat1rightArmMesh.userData.baseScale,a=2+Math.random()*.85;e===0?(tt.timeline().to(this.cat1leftArmMesh.position,{x:t.x+a,y:t.y-1.2,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{let o=[],l=[0,0,0,0],f=this.cat1leftArmMesh.position.clone();f.x+=2.2,f.y+=-1.05,this.txtMeshArray.forEach(d=>{const h=d.position;Math.sqrt((f.x-h.x)**2+(f.y-h.y)**2)<1.65&&(o.push(d.id),l[d.userData.index]++)}),console.log(o),console.log(l);const c=Math.min(...l);if(0<c){for(let d=0;d<c;d++){const h=f.clone();h.x+=Math.random()-.5,h.y+=Math.random()-.5,this.fadeText(this.clearCount+d,h,d)}this.updateClearCount(c)}for(let d=0;d<o.length;d++){const h=this.Raycaster._meshById.get(o[d]);this.removeOBJ(h.userData.id)}this.wakeUp(),this.addOBJ(o.length)}}).to(this.cat1leftArmMesh.position,{x:t.x,y:t.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat1leftArmMesh.scale,{x:n.x*1.2,y:n.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat1leftArmMesh.scale,{x:n.x,y:n.y,duration:.1,ease:"power0.inOut"})):e===1?(tt.timeline().to(this.cat1rightArmMesh.position,{x:i.x+a,y:i.y+.5,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{let o=[],l=[0,0,0,0],f=this.cat1rightArmMesh.position.clone();f.x+=2.7,f.y+=.15,this.txtMeshArray.forEach(d=>{const h=d.position;Math.sqrt((f.x-h.x)**2+(f.y-h.y)**2)<1.65&&(o.push(d.id),l[d.userData.index]++)}),console.log(o),console.log(l);const c=Math.min(...l);if(0<c){for(let d=0;d<c;d++){const h=f.clone();h.x+=Math.random()-.5,h.y+=Math.random()-.5,this.fadeText(this.clearCount+d,h,d)}this.updateClearCount(c)}for(let d=0;d<o.length;d++){const h=this.Raycaster._meshById.get(o[d]);this.removeOBJ(h.userData.id)}this.wakeUp(),this.addOBJ(o.length)}}).to(this.cat1rightArmMesh.position,{x:i.x,y:i.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat1rightArmMesh.scale,{x:r.x*1.2,y:r.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat1rightArmMesh.scale,{x:r.x,y:r.y,duration:.1,ease:"power0.inOut"})):e===2&&(tt.timeline().to(this.cat1leftArmMesh.position,{x:t.x+a,y:t.y-1.2,duration:.3,delay:.6,ease:"power2.out"}).to(this.cat1leftArmMesh.position,{x:t.x,y:t.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat1leftArmMesh.scale,{x:n.x*1.2,y:n.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat1leftArmMesh.scale,{x:n.x,y:n.y,duration:.1,ease:"power0.inOut"}),tt.timeline().to(this.cat1rightArmMesh.position,{x:i.x+a,y:i.y+.5,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{let o=[],l=[0,0,0,0],f=this.cat1leftArmMesh.position.clone();f.x+=2.2,f.y+=-1.05;let c=this.cat1rightArmMesh.position.clone();c.x+=2.7,c.y+=.15,this.txtMeshArray.forEach(h=>{const u=h.position,g=Math.sqrt((f.x-u.x)**2+(f.y-u.y)**2),p=Math.sqrt((c.x-u.x)**2+(c.y-u.y)**2);(g<1.65||p<1.65)&&(o.push(h.id),l[h.userData.index]++)}),console.log(o),console.log(l);const d=Math.min(...l);if(0<d){for(let h=0;h<d;h++){const u=f.clone();u.x+=Math.random()-.5,u.y+=Math.random()-.5,this.fadeText(this.clearCount+h,u,h)}this.updateClearCount(d)}for(let h=0;h<o.length;h++)if(this.Raycaster._hoveringRecord.includes(o[h])){this.Raycaster.reset();break}for(let h=0;h<o.length;h++){const u=this.Raycaster._meshById.get(o[h]);this.removeOBJ(u.userData.id)}this.wakeUp(),this.addOBJ(o.length)}}).to(this.cat1rightArmMesh.position,{x:i.x,y:i.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat1rightArmMesh.scale,{x:r.x*1.2,y:r.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat1rightArmMesh.scale,{x:r.x,y:r.y,duration:.1,ease:"power0.inOut"}))}cat2Punch(e){const t=this.cat2leftArmMesh.userData.basePosition,n=this.cat2leftArmMesh.userData.baseScale,i=this.cat2rightArmMesh.userData.basePosition,r=this.cat2rightArmMesh.userData.baseScale,a=-(2+Math.random()*.85);e===3?(tt.timeline().to(this.cat2rightArmMesh.position,{x:i.x+a,y:i.y+-.7,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{let o=[],l=[0,0,0,0],f=this.cat2rightArmMesh.position.clone();f.x+=-2.67,f.y+=-.35,this.txtMeshArray.forEach(d=>{const h=d.position;Math.sqrt((f.x-h.x)**2+(f.y-h.y)**2)<1.65&&(o.push(d.id),l[d.userData.index]++)}),console.log(o),console.log(l);const c=Math.min(...l);if(0<c){for(let d=0;d<c;d++){const h=f.clone();h.x+=Math.random()-.5,h.y+=Math.random()-.5,this.fadeText(this.clearCount+d,h,d)}this.updateClearCount(c)}for(let d=0;d<o.length;d++){const h=this.Raycaster._meshById.get(o[d]);this.removeOBJ(h.userData.id)}this.wakeUp(),this.addOBJ(o.length)}}).to(this.cat2rightArmMesh.position,{x:i.x,y:i.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat2rightArmMesh.scale,{x:r.x*1.2,y:r.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat2rightArmMesh.scale,{x:r.x,y:r.y,duration:.1,ease:"power0.inOut"})):e===4?(tt.timeline().to(this.cat2leftArmMesh.position,{x:t.x+a,y:t.y+1.2,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{let o=[],l=[0,0,0,0],f=this.cat2leftArmMesh.position.clone();f.x+=-2.45,f.y+=.65,this.txtMeshArray.forEach(d=>{const h=d.position;Math.sqrt((f.x-h.x)**2+(f.y-h.y)**2)<1.65&&(o.push(d.id),l[d.userData.index]++)}),console.log(o),console.log(l);const c=Math.min(...l);if(0<c){for(let d=0;d<c;d++){const h=f.clone();h.x+=Math.random()-.5,h.y+=Math.random()-.5,this.fadeText(this.clearCount+d,h,d)}this.updateClearCount(c)}for(let d=0;d<o.length;d++){const h=this.Raycaster._meshById.get(o[d]);this.removeOBJ(h.userData.id)}this.wakeUp(),this.addOBJ(o.length)}}).to(this.cat2leftArmMesh.position,{x:t.x,y:t.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat2leftArmMesh.scale,{x:n.x*1.2,y:n.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat2leftArmMesh.scale,{x:n.x,y:n.y,duration:.1,ease:"power0.inOut"})):e===5&&(tt.timeline().to(this.cat2leftArmMesh.position,{x:t.x+a,y:t.y+1.2,duration:.3,delay:.6,ease:"power2.out"}).to(this.cat2leftArmMesh.position,{x:t.x,y:t.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat2leftArmMesh.scale,{x:n.x*1.2,y:n.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat2leftArmMesh.scale,{x:n.x,y:n.y,duration:.1,ease:"power0.inOut"}),tt.timeline().to(this.cat2rightArmMesh.position,{x:i.x+a,y:i.y+-.7,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{let o=[],l=[0,0,0,0],f=this.cat2leftArmMesh.position.clone();f.x+=-2.45,f.y+=.65;let c=this.cat2rightArmMesh.position.clone();c.x+=-2.67,c.y+=-.35,this.txtMeshArray.forEach(h=>{const u=h.position,g=Math.sqrt((f.x-u.x)**2+(f.y-u.y)**2),p=Math.sqrt((c.x-u.x)**2+(c.y-u.y)**2);(g<1.65||p<1.65)&&(o.push(h.id),l[h.userData.index]++)}),console.log(o),console.log(l);const d=Math.min(...l);if(0<d){for(let h=0;h<d;h++){const u=f.clone();u.x+=Math.random()-.5,u.y+=Math.random()-.5,this.fadeText(this.clearCount+h,u,h)}this.updateClearCount(d)}for(let h=0;h<o.length;h++)if(this.Raycaster._hoveringRecord.includes(o[h])){this.Raycaster.reset();break}for(let h=0;h<o.length;h++){const u=this.Raycaster._meshById.get(o[h]);this.removeOBJ(u.userData.id)}this.wakeUp(),this.addOBJ(o.length)}}).to(this.cat2rightArmMesh.position,{x:i.x,y:i.y,duration:.3,delay:.7,ease:"power2.out"}),tt.timeline().to(this.cat2rightArmMesh.scale,{x:r.x*1.2,y:r.y*1.2,duration:.1,delay:.6,ease:"power0.inOut"}).to(this.cat2rightArmMesh.scale,{x:r.x,y:r.y,duration:.1,ease:"power0.inOut"}))}catPunchManager(){if(this.playing){const e=Math.round(Math.random()*5),t=8+Math.random()*5,n=this.cat1leftArmMesh.userData.basePosition,i=this.cat1rightArmMesh.userData.basePosition,r=this.cat2leftArmMesh.userData.basePosition,a=this.cat2rightArmMesh.userData.basePosition,o={x:0};tt.to(o,{x:1,duration:1.5,delay:t,onUpdate:()=>{const l=1-Math.max(0,o.x-.8)*5,f=(Math.random()*.03-.015)*l,c=(Math.random()*.03-.015)*l,d=(Math.random()*.03-.015)*l,h=(Math.random()*.03-.015)*l;e<3?(tt.set(this.cat1leftArmMesh.position,{x:n.x+f,y:n.y+c}),tt.set(this.cat1rightArmMesh.position,{x:i.x+d,y:i.y+h})):(tt.set(this.cat2leftArmMesh.position,{x:r.x+f,y:r.y+c}),tt.set(this.cat2rightArmMesh.position,{x:a.x+d,y:a.y+h}))},onComplete:()=>{this.playing&&(e<3?this.cat1Punch(e):this.cat2Punch(e),this.catPunchManager())}})}}}
