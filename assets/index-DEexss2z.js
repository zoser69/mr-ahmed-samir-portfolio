(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="174",Wm=0,Fh=1,Xm=2,Ld=1,Ym=2,Oi=3,mr=0,bn=1,ki=2,ur=0,Ds=1,Lc=2,Oh=3,Bh=4,qm=5,Or=100,$m=101,Zm=102,Km=103,Jm=104,jm=200,Qm=201,e_=202,t_=203,Ic=204,Uc=205,n_=206,i_=207,r_=208,s_=209,o_=210,a_=211,l_=212,c_=213,u_=214,Nc=0,Fc=1,Oc=2,Vs=3,Bc=4,zc=5,kc=6,Hc=7,Id=0,h_=1,f_=2,hr=0,d_=1,p_=2,m_=3,__=4,g_=5,v_=6,x_=7,Ud=300,Gs=301,Ws=302,Vc=303,Gc=304,Ml=306,Wc=1e3,zr=1001,Xc=1002,mi=1003,S_=1004,sa=1005,Mi=1006,Dl=1007,kr=1008,$i=1009,Nd=1010,Fd=1011,ko=1012,Ku=1013,Jr=1014,Vi=1015,ea=1016,Ju=1017,ju=1018,Xs=1020,Od=35902,Bd=1021,zd=1022,pi=1023,kd=1024,Hd=1025,Ls=1026,Ys=1027,Vd=1028,Qu=1029,Gd=1030,eh=1031,th=1033,Xa=33776,Ya=33777,qa=33778,$a=33779,Yc=35840,qc=35841,$c=35842,Zc=35843,Kc=36196,Jc=37492,jc=37496,Qc=37808,eu=37809,tu=37810,nu=37811,iu=37812,ru=37813,su=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,hu=37820,fu=37821,Za=36492,du=36494,pu=36495,Wd=36283,mu=36284,_u=36285,gu=36286,M_=3200,y_=3201,Xd=0,E_=1,rr="",ti="srgb",qs="srgb-linear",al="linear",gt="srgb",ss=7680,zh=519,T_=512,b_=513,w_=514,Yd=515,A_=516,C_=517,R_=518,P_=519,kh=35044,Hh="300 es",Gi=2e3,ll=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,vu=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function D_(r,e){return(r%e+e)%e}function Il(r,e,t){return(1-t)*r+t*e}function oo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],E=i[1],S=i[4],v=i[7],C=i[2],R=i[5],T=i[8];return s[0]=o*g+a*E+l*C,s[3]=o*m+a*S+l*R,s[6]=o*p+a*v+l*T,s[1]=c*g+u*E+h*C,s[4]=c*m+u*S+h*R,s[7]=c*p+u*v+h*T,s[2]=f*g+d*E+_*C,s[5]=f*m+d*S+_*R,s[8]=f*p+d*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new je;function qd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function L_(){const r=cl("canvas");return r.style.display="block",r}const Vh={};function Dr(r){r in Vh||(Vh[r]=!0,console.warn(r))}function I_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function U_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function N_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const r={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rr?al:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[qs]:{primaries:e,whitePoint:n,transfer:al,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const ht=F_();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let os;class O_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=cl("canvas")),os.width=e.width,os.height=e.height;const n=os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=os}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nl(i[o].image)):s.push(Nl(i[o]))}else s=Nl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?O_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z_=0;class wn extends to{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=zr,i=zr,s=Mi,o=kr,a=pi,l=$i,c=wn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=no(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Ud;wn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(d+1)/2,C=(p+1)/2,R=(u+f)/4,T=(h+g)/4,P=(_+m)/4;return S>v&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=R/n,s=T/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=P/s),this.set(n,i,s,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-g)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends to{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends k_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $d extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,p*E);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const v=a*E;if(l=l*m+f*v,c=c*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new z,Xh=new ta;class na{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),aa.subVectors(this.max,ao),as.subVectors(e.a,ao),ls.subVectors(e.b,ao),cs.subVectors(e.c,ao),Ji.subVectors(ls,as),ji.subVectors(cs,ls),Er.subVectors(as,cs);let t=[0,-Ji.z,Ji.y,0,-ji.z,ji.y,0,-Er.z,Er.y,Ji.z,0,-Ji.x,ji.z,0,-ji.x,Er.z,0,-Er.x,-Ji.y,Ji.x,0,-ji.y,ji.x,0,-Er.y,Er.x,0];return!Ol(t,as,ls,cs,aa)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,as,ls,cs,aa))?!1:(la.crossVectors(Ji,ji),t=[la.x,la.y,la.z],Ol(t,as,ls,cs,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new z,new z,new z,new z,new z,new z,new z,new z],li=new z,oa=new na,as=new z,ls=new z,cs=new z,Ji=new z,ji=new z,Er=new z,ao=new z,aa=new z,la=new z,Tr=new z;function Ol(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Tr.fromArray(r,s);const a=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=n.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const V_=new na,lo=new z,Bl=new z;class yl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):V_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Bl)),this.expandByPoint(lo.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new z,zl=new z,ca=new z,Qi=new z,kl=new z,ua=new z,Hl=new z;class Zd{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zl.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(zl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=Qi.dot(this.direction),l=-Qi.dot(ca),c=Qi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(zl).addScaledVector(ca,f),d}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const n=Di.dot(this.direction),i=Di.dot(Di)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,i,s){kl.subVectors(t,e),ua.subVectors(n,e),Hl.crossVectors(kl,ua);let o=this.direction.dot(Hl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(Qi,ua));if(l<0)return null;const c=a*this.direction.dot(kl.cross(Qi));if(c<0||l+c>o)return null;const u=-a*Qi.dot(Hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),er.crossVectors(n,Un),er.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),er.crossVectors(n,Un)),er.normalize(),ha.crossVectors(Un,er),i[0]=er.x,i[4]=ha.x,i[8]=Un.x,i[1]=er.y,i[5]=ha.y,i[9]=Un.y,i[2]=er.z,i[6]=ha.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],E=n[3],S=n[7],v=n[11],C=n[15],R=i[0],T=i[4],P=i[8],M=i[12],x=i[1],D=i[5],U=i[9],O=i[13],k=i[2],H=i[6],X=i[10],Y=i[14],V=i[3],ne=i[7],L=i[11],ce=i[15];return s[0]=o*R+a*x+l*k+c*V,s[4]=o*T+a*D+l*H+c*ne,s[8]=o*P+a*U+l*X+c*L,s[12]=o*M+a*O+l*Y+c*ce,s[1]=u*R+h*x+f*k+d*V,s[5]=u*T+h*D+f*H+d*ne,s[9]=u*P+h*U+f*X+d*L,s[13]=u*M+h*O+f*Y+d*ce,s[2]=_*R+g*x+m*k+p*V,s[6]=_*T+g*D+m*H+p*ne,s[10]=_*P+g*U+m*X+p*L,s[14]=_*M+g*O+m*Y+p*ce,s[3]=E*R+S*x+v*k+C*V,s[7]=E*T+S*D+v*H+C*ne,s[11]=E*P+S*U+v*X+C*L,s[15]=E*M+S*O+v*Y+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],E=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,v=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,C=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,R=t*E+n*S+i*v+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=E*T,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=S*T,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=v*T,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=C*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,E=l*c,S=l*u,v=l*h,C=n.x,R=n.y,T=n.z;return i[0]=(1-(g+p))*C,i[1]=(d+v)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(d-v)*R,i[5]=(1-(f+p))*R,i[6]=(m+E)*R,i[7]=0,i[8]=(_+S)*T,i[9]=(m-E)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const c=1/s,u=1/o,h=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Gi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===Gi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ll)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Gi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===Gi)_=(o+s)*h,g=-2*h;else if(a===ll)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new z,ci=new bt,G_=new z(0,0,0),W_=new z(1,1,1),er=new z,ha=new z,Un=new z,Yh=new bt,qh=new ta;class wi{constructor(e=0,t=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const $h=new z,hs=new ta,Li=new bt,fa=new z,co=new z,Y_=new z,q_=new ta,Zh=new z(1,0,0),Kh=new z(0,1,0),Jh=new z(0,0,1),jh={type:"added"},$_={type:"removed"},fs={type:"childadded",child:null},Vl={type:"childremoved",child:null};class tn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new z,t=new wi,n=new ta,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(co,fa,this.up):Li.lookAt(fa,co,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Li),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($_),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tn.DEFAULT_UP=new z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new z,Ii=new z,Gl=new z,Ui=new z,ds=new z,ps=new z,Qh=new z,Wl=new z,Xl=new z,Yl=new z,ql=new vt,$l=new vt,Zl=new vt;class di{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ui.subVectors(i,t),Ii.subVectors(n,t),Gl.subVectors(e,t);const o=ui.dot(ui),a=ui.dot(Ii),l=ui.dot(Gl),c=Ii.dot(Ii),u=Ii.dot(Gl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ql.setScalar(0),$l.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(e,t),$l.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ql,s.x),o.addScaledVector($l,s.y),o.addScaledVector(Zl,s.z),o}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Ii.subVectors(e,t),ui.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ui.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ds.subVectors(i,n),ps.subVectors(s,n),Wl.subVectors(e,n);const l=ds.dot(Wl),c=ps.dot(Wl);if(l<=0&&c<=0)return t.copy(n);Xl.subVectors(e,i);const u=ds.dot(Xl),h=ps.dot(Xl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ds,o);Yl.subVectors(e,s);const d=ds.dot(Yl),_=ps.dot(Yl);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ps,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Qh.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Qh,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},da={h:0,s:0,l:0};function Kl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=D_(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Kl(o,s,e+1/3),this.g=Kl(o,s,e),this.b=Kl(o,s,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return ht.fromWorkingColorSpace(sn.copy(this),e),Math.round(st(sn.r*255,0,255))*65536+Math.round(st(sn.g*255,0,255))*256+Math.round(st(sn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,i=sn.g,s=sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=ti){ht.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,i=sn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(da);const n=Il(tr.h,da.h,t),i=Il(tr.s,da.s,t),s=Il(tr.l,da.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new lt;lt.NAMES=Jd;let Z_=0;class io extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Ds,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jd extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new z,pa=new be;let K_=0;class _i{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kh,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}}class Qd extends _i{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ep extends _i{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends _i{constructor(e,t,n){super(new Float32Array(e),t,n)}}let J_=0;const jn=new bt,Jl=new tn,ms=new z,Nn=new na,uo=new na,Zt=new z;class Ci extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?ep:Qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Nn.min,uo.min),Nn.expandByPoint(Zt),Zt.addVectors(Nn.max,uo.max),Nn.expandByPoint(Zt)):(Nn.expandByPoint(uo.min),Nn.expandByPoint(uo.max))}Nn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Zt.add(ms)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new z,l[P]=new z;const c=new z,u=new z,h=new z,f=new be,d=new be,_=new be,g=new z,m=new z;function p(P,M,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),a[P].add(g),a[M].add(g),a[x].add(g),l[P].add(m),l[M].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,M=E.length;P<M;++P){const x=E[P],D=x.start,U=x.count;for(let O=D,k=D+U;O<k;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new z,v=new z,C=new z,R=new z;function T(P){C.fromBufferAttribute(i,P),R.copy(C);const M=a[P];S.copy(M),S.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(R,M);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,M=E.length;P<M;++P){const x=E[P],D=x.start,U=x.count;for(let O=D,k=D+U;O<k;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new _i(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ef=new bt,br=new Zd,ma=new yl,tf=new z,_a=new z,ga=new z,va=new z,jl=new z,xa=new z,nf=new z,Sa=new z;class yi extends tn{constructor(e=new Ci,t=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(jl.fromBufferAttribute(h,e),o?xa.addScaledVector(jl,u):xa.addScaledVector(jl.sub(t),u))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(ma.containsPoint(br.origin)===!1&&(br.intersectSphere(ma,tf)===null||br.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(s).invert(),br.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,C=S;v<C;v+=3){const R=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);i=Ma(this,p,e,n,c,u,h,R,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=Ma(this,o,e,n,c,u,h,E,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,C=S;v<C;v+=3){const R=v,T=v+1,P=v+2;i=Ma(this,p,e,n,c,u,h,R,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=m,S=m+1,v=m+2;i=Ma(this,o,e,n,c,u,h,E,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function j_(r,e,t,n,i,s,o,a){let l;if(e.side===bn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===mr,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:r}}function Ma(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,_a),r.getVertexPosition(l,ga),r.getVertexPosition(c,va);const u=j_(r,e,t,n,_a,ga,va,nf);if(u){const h=new z;di.getBarycoord(nf,_a,ga,va,h),i&&(u.uv=di.getInterpolatedAttribute(i,a,l,c,h,new be)),s&&(u.uv1=di.getInterpolatedAttribute(s,a,l,c,h,new be)),o&&(u.normal=di.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};di.getNormal(_a,ga,va,f.normal),u.face=f,u.barycoord=h}return u}class ia extends Ci{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Yi(c,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(h,2));function _(g,m,p,E,S,v,C,R,T,P,M){const x=v/T,D=C/P,U=v/2,O=C/2,k=R/2,H=T+1,X=P+1;let Y=0,V=0;const ne=new z;for(let L=0;L<X;L++){const ce=L*D-O;for(let De=0;De<H;De++){const $e=De*x-U;ne[g]=$e*E,ne[m]=ce*S,ne[p]=k,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[p]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(De/T),h.push(1-L/P),Y+=1}}for(let L=0;L<P;L++)for(let ce=0;ce<T;ce++){const De=f+ce+H*L,$e=f+ce+H*(L+1),$=f+(ce+1)+H*(L+1),oe=f+(ce+1)+H*L;l.push(De,$e,oe),l.push($e,$,oe),V+=6}a.addGroup(d,V,M),d+=V,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=$s(r[t]);for(const i in n)e[i]=n[i]}return e}function Q_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function tp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const eg={clone:$s,merge:mn};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class np extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new z,rf=new be,sf=new be;class kn extends np{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,rf,sf),t.subVectors(sf,rf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,gs=1;class ig extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(_s,gs,e,t);i.layers=this.layers,this.add(i);const s=new kn(_s,gs,e,t);s.layers=this.layers,this.add(s);const o=new kn(_s,gs,e,t);o.layers=this.layers,this.add(o);const a=new kn(_s,gs,e,t);a.layers=this.layers,this.add(a);const l=new kn(_s,gs,e,t);l.layers=this.layers,this.add(l);const c=new kn(_s,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ip extends wn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ip(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ia(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:ur});s.uniforms.tEquirect.value=t;const o=new yi(i,s),a=t.minFilter;return t.minFilter===kr&&(t.minFilter=Mi),new ig(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class _o extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _o;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class og extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ec=new z,ag=new z,lg=new je;class Lr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ec.subVectors(n,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lg.getNormalMatrix(e),i=this.coplanarPoint(ec).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new yl,ya=new z;class ih{constructor(e=new Lr,t=new Lr,n=new Lr,i=new Lr,s=new Lr,o=new Lr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],E=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+_,v+E).normalize(),n[3].setComponents(l-o,f-u,m-_,v-E).normalize(),n[4].setComponents(l-a,f-h,m-g,v-S).normalize(),t===Gi)n[5].setComponents(l+a,f+h,m+g,v+S).normalize();else if(t===ll)n[5].setComponents(a,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rp extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new bt,xu=new Zd,Ea=new yl,Ta=new z;class cg extends tn{constructor(e=new Ci,t=new rp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;of.copy(i).invert(),xu.copy(e.ray).applyMatrix4(of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);Ta.fromBufferAttribute(h,m),af(Ta,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Ta.fromBufferAttribute(h,_),af(Ta,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function af(r,e,t,n,i,s,o){const a=xu.distanceSqToPoint(r);if(a<t){const l=new z;xu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sp extends wn{constructor(e,t,n,i,s,o,a,l,c,u=Ls){if(u!==Ls&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ls&&(n=Jr),n===void 0&&u===Ys&&(n=Xs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new be:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,i=[],s=[],o=[],a=new z,l=new bt;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(st(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(st(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rh extends Ri{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ug extends rh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ba=new z,tc=new sh,nc=new sh,ic=new sh;class hg extends Ri{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(ba.subVectors(i[0],i[1]).add(i[0]),c=ba);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ba.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ba),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),tc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),nc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),ic.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),nc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ic.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(tc.calc(l),nc.calc(l),ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lf(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function fg(r,e){const t=1-r;return t*t*e}function dg(r,e){return 2*(1-r)*r*e}function pg(r,e){return r*r*e}function wo(r,e,t,n){return fg(r,e)+dg(r,t)+pg(r,n)}function mg(r,e){const t=1-r;return t*t*t*e}function _g(r,e){const t=1-r;return 3*t*t*r*e}function gg(r,e){return 3*(1-r)*r*r*e}function vg(r,e){return r*r*r*e}function Ao(r,e,t,n,i){return mg(r,e)+_g(r,t)+gg(r,n)+vg(r,i)}class op extends Ri{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,i.x,s.x,o.x,a.x),Ao(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xg extends Ri{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,i.x,s.x,o.x,a.x),Ao(e,i.y,s.y,o.y,a.y),Ao(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ap extends Ri{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sg extends Ri{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lp extends Ri{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(wo(e,i.x,s.x,o.x),wo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mg extends Ri{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(wo(e,i.x,s.x,o.x),wo(e,i.y,s.y,o.y),wo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cp extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(lf(a,l.x,c.x,u.x,h.x),lf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var Su=Object.freeze({__proto__:null,ArcCurve:ug,CatmullRomCurve3:hg,CubicBezierCurve:op,CubicBezierCurve3:xg,EllipseCurve:rh,LineCurve:ap,LineCurve3:Sg,QuadraticBezierCurve:lp,QuadraticBezierCurve3:Mg,SplineCurve:cp});class yg extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Su[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Su[i.type]().fromJSON(i))}return this}}class Mu extends yg{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ap(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new lp(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new op(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new rh(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ka extends Mu{constructor(e){super(e),this.uuid=no(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mu().fromJSON(i))}return this}}class Eg{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let o=up(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,h,f,d,_;if(i&&(o=Cg(e,t,o,n)),e.length>80*n){l=u=e[0],c=h=e[1];for(let g=n;g<s;g+=n)f=e[g],d=e[g+1],f<l&&(l=f),d<c&&(c=d),f>u&&(u=f),d>h&&(h=d);_=Math.max(u-l,h-c),_=_!==0?32767/_:0}return Ho(o,a,n,l,c,_,0),a}}function up(r,e,t,n,i){let s,o;if(i===zg(r,e,t,n)>0)for(s=e;s<t;s+=n)o=cf(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=cf(s,r[s],r[s+1],o);return o&&El(o,o.next)&&(Go(o),o=o.next),o}function Qr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(El(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ho(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Ig(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?bg(r,n,i,s):Tg(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Go(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=wg(Qr(r),e,t),Ho(r,e,t,n,i,s,2)):o===2&&Ag(r,e,t,n,i,s):Ho(Qr(r),e,t,n,i,s,1);break}}}function Tg(r){const e=r.prev,t=r,n=r.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&ws(i,a,s,l,o,c,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function bg(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Pt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=yu(d,_,e,t,n),E=yu(g,m,e,t,n);let S=r.prevZ,v=r.nextZ;for(;S&&S.z>=p&&v&&v.z<=E;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=m&&S!==i&&S!==o&&ws(a,u,l,h,c,f,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&ws(a,u,l,h,c,f,v.x,v.y)&&Pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=m&&S!==i&&S!==o&&ws(a,u,l,h,c,f,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&ws(a,u,l,h,c,f,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!El(i,s)&&hp(i,n,n.next,s)&&Vo(i,s)&&Vo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Go(n),Go(n.next),n=r=s),n=n.next}while(n!==r);return Qr(n)}function Ag(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fg(o,a)){let l=fp(o,a);o=Qr(o,o.next),l=Qr(l,l.next),Ho(o,e,t,n,i,s,0),Ho(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Cg(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=up(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ng(c));for(i.sort(Rg),s=0;s<i.length;s++)t=Pg(i[s],t);return t}function Rg(r,e){return r.x-e.x}function Pg(r,e){const t=Dg(r,e);if(!t)return e;const n=fp(t,r);return Qr(n,n.next),Qr(t,t.next)}function Dg(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ws(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Vo(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Lg(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function Lg(r,e){return Pt(r.prev,r,e.prev)<0&&Pt(e.next,r,r.next)<0}function Ig(r,e,t,n){let i=r;do i.z===0&&(i.z=yu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ug(i)}function Ug(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function yu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ng(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ws(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Fg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Og(r,e)&&(Vo(r,e)&&Vo(e,r)&&Bg(r,e)&&(Pt(r.prev,r,e.prev)||Pt(r,e.prev,e))||El(r,e)&&Pt(r.prev,r,r.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function El(r,e){return r.x===e.x&&r.y===e.y}function hp(r,e,t,n){const i=Aa(Pt(r,e,t)),s=Aa(Pt(r,e,n)),o=Aa(Pt(t,n,r)),a=Aa(Pt(t,n,e));return!!(i!==s&&o!==a||i===0&&wa(r,t,e)||s===0&&wa(r,n,e)||o===0&&wa(t,r,n)||a===0&&wa(t,e,n))}function wa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Aa(r){return r>0?1:r<0?-1:0}function Og(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&hp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Vo(r,e){return Pt(r.prev,r,r.next)<0?Pt(r,e,r.next)>=0&&Pt(r,r.prev,e)>=0:Pt(r,e,r.prev)<0||Pt(r,r.next,e)<0}function Bg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function fp(r,e){const t=new Eu(r.i,r.x,r.y),n=new Eu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function cf(r,e,t,n){const i=new Eu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Go(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Eu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zg(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Us{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Us.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];uf(e),hf(n,e);let o=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,hf(n,t[l]);const a=Eg.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function uf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function hf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class oh extends Ci{constructor(e=new Ka([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Yi(i,3)),this.setAttribute("uv",new Yi(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:kg;let S,v=!1,C,R,T,P;p&&(S=p.getSpacedPoints(u),v=!0,f=!1,C=p.computeFrenetFrames(u,!1),R=new z,T=new z,P=new z),f||(m=0,d=0,_=0,g=0);const M=a.extractPoints(c);let x=M.shape;const D=M.holes;if(!Us.isClockWise(x)){x=x.reverse();for(let te=0,K=D.length;te<K;te++){const A=D[te];Us.isClockWise(A)&&(D[te]=A.reverse())}}const O=Us.triangulateShape(x,D),k=x;for(let te=0,K=D.length;te<K;te++){const A=D[te];x=x.concat(A)}function H(te,K,A){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(K,A)}const X=x.length,Y=O.length;function V(te,K,A){let Ee,ie,N;const ae=te.x-K.x,Ue=te.y-K.y,_e=A.x-te.x,w=A.y-te.y,y=ae*ae+Ue*Ue,G=ae*w-Ue*_e;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(y),Q=Math.sqrt(_e*_e+w*w),j=K.x-Ue/J,de=K.y+ae/J,ue=A.x-w/Q,ge=A.y+_e/Q,Ye=((ue-j)*w-(ge-de)*_e)/(ae*w-Ue*_e);Ee=j+ae*Ye-te.x,ie=de+Ue*Ye-te.y;const le=Ee*Ee+ie*ie;if(le<=2)return new be(Ee,ie);N=Math.sqrt(le/2)}else{let J=!1;ae>Number.EPSILON?_e>Number.EPSILON&&(J=!0):ae<-Number.EPSILON?_e<-Number.EPSILON&&(J=!0):Math.sign(Ue)===Math.sign(w)&&(J=!0),J?(Ee=-Ue,ie=ae,N=Math.sqrt(y)):(Ee=ae,ie=Ue,N=Math.sqrt(y/2))}return new be(Ee/N,ie/N)}const ne=[];for(let te=0,K=k.length,A=K-1,Ee=te+1;te<K;te++,A++,Ee++)A===K&&(A=0),Ee===K&&(Ee=0),ne[te]=V(k[te],k[A],k[Ee]);const L=[];let ce,De=ne.concat();for(let te=0,K=D.length;te<K;te++){const A=D[te];ce=[];for(let Ee=0,ie=A.length,N=ie-1,ae=Ee+1;Ee<ie;Ee++,N++,ae++)N===ie&&(N=0),ae===ie&&(ae=0),ce[Ee]=V(A[Ee],A[N],A[ae]);L.push(ce),De=De.concat(ce)}for(let te=0;te<m;te++){const K=te/m,A=d*Math.cos(K*Math.PI/2),Ee=_*Math.sin(K*Math.PI/2)+g;for(let ie=0,N=k.length;ie<N;ie++){const ae=H(k[ie],ne[ie],Ee);re(ae.x,ae.y,-A)}for(let ie=0,N=D.length;ie<N;ie++){const ae=D[ie];ce=L[ie];for(let Ue=0,_e=ae.length;Ue<_e;Ue++){const w=H(ae[Ue],ce[Ue],Ee);re(w.x,w.y,-A)}}}const $e=_+g;for(let te=0;te<X;te++){const K=f?H(x[te],De[te],$e):x[te];v?(T.copy(C.normals[0]).multiplyScalar(K.x),R.copy(C.binormals[0]).multiplyScalar(K.y),P.copy(S[0]).add(T).add(R),re(P.x,P.y,P.z)):re(K.x,K.y,0)}for(let te=1;te<=u;te++)for(let K=0;K<X;K++){const A=f?H(x[K],De[K],$e):x[K];v?(T.copy(C.normals[te]).multiplyScalar(A.x),R.copy(C.binormals[te]).multiplyScalar(A.y),P.copy(S[te]).add(T).add(R),re(P.x,P.y,P.z)):re(A.x,A.y,h/u*te)}for(let te=m-1;te>=0;te--){const K=te/m,A=d*Math.cos(K*Math.PI/2),Ee=_*Math.sin(K*Math.PI/2)+g;for(let ie=0,N=k.length;ie<N;ie++){const ae=H(k[ie],ne[ie],Ee);re(ae.x,ae.y,h+A)}for(let ie=0,N=D.length;ie<N;ie++){const ae=D[ie];ce=L[ie];for(let Ue=0,_e=ae.length;Ue<_e;Ue++){const w=H(ae[Ue],ce[Ue],Ee);v?re(w.x,w.y+S[u-1].y,S[u-1].x+A):re(w.x,w.y,h+A)}}}$(),oe();function $(){const te=i.length/3;if(f){let K=0,A=X*K;for(let Ee=0;Ee<Y;Ee++){const ie=O[Ee];ye(ie[2]+A,ie[1]+A,ie[0]+A)}K=u+m*2,A=X*K;for(let Ee=0;Ee<Y;Ee++){const ie=O[Ee];ye(ie[0]+A,ie[1]+A,ie[2]+A)}}else{for(let K=0;K<Y;K++){const A=O[K];ye(A[2],A[1],A[0])}for(let K=0;K<Y;K++){const A=O[K];ye(A[0]+X*u,A[1]+X*u,A[2]+X*u)}}n.addGroup(te,i.length/3-te,0)}function oe(){const te=i.length/3;let K=0;he(k,K),K+=k.length;for(let A=0,Ee=D.length;A<Ee;A++){const ie=D[A];he(ie,K),K+=ie.length}n.addGroup(te,i.length/3-te,1)}function he(te,K){let A=te.length;for(;--A>=0;){const Ee=A;let ie=A-1;ie<0&&(ie=te.length-1);for(let N=0,ae=u+m*2;N<ae;N++){const Ue=X*N,_e=X*(N+1),w=K+Ee+Ue,y=K+ie+Ue,G=K+ie+_e,J=K+Ee+_e;Be(w,y,G,J)}}}function re(te,K,A){l.push(te),l.push(K),l.push(A)}function ye(te,K,A){Ce(te),Ce(K),Ce(A);const Ee=i.length/3,ie=E.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);He(ie[0]),He(ie[1]),He(ie[2])}function Be(te,K,A,Ee){Ce(te),Ce(K),Ce(Ee),Ce(K),Ce(A),Ce(Ee);const ie=i.length/3,N=E.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);He(N[0]),He(N[1]),He(N[3]),He(N[1]),He(N[2]),He(N[3])}function Ce(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function He(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Su[i.type]().fromJSON(i)),new oh(n,e.options)}}const kg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new be(s,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],_=e[i*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-h),new be(f,1-_),new be(g,1-p)]:[new be(a,1-l),new be(u,1-h),new be(d,1-_),new be(m,1-p)]}};function Hg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Tl extends Ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let S=0;S<c;S++){const v=S*h-s;_.push(v,-E,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const S=E+c*p,v=E+c*(p+1),C=E+1+c*(p+1),R=E+1+c*p;d.push(S,v,R),d.push(v,C,R)}this.setIndex(d),this.setAttribute("position",new Yi(_,3)),this.setAttribute("normal",new Yi(g,3)),this.setAttribute("uv",new Yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class rc extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vg extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gg extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ff={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Wg{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Xg=new Wg;class ah{constructor(e){this.manager=e!==void 0?e:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ah.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class Yg extends Error{constructor(e,t){super(e),this.response=t}}class qg extends ah{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ff.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{g+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let R=0,T=u.length;R<T;R++){const P=u[R];P.onProgress&&P.onProgress(C)}p.enqueue(v),E()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Yg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{ff.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lh extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sc=new bt,df=new z,pf=new z;class dp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mf=new bt,ho=new z,oc=new z;class $g extends dp{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(ho),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),i.makeTranslation(-ho.x,-ho.y,-ho.z),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}}class Zg extends lh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $g}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pp extends np{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kg extends dp{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _f extends lh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Kg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jg extends lh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jg extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Qg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gf(){return performance.now()}class e0{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const E=[];for(let S=0,v=p.length;S<v;S++){const C=p[S],R=new Ka;R.curves=C.curves,E.push(R)}return E}function n(p,E){const S=E.length;let v=!1;for(let C=S-1,R=0;R<S;C=R++){let T=E[C],P=E[R],M=P.x-T.x,x=P.y-T.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(T=E[R],M=-M,P=E[C],x=-x),p.y<T.y||p.y>P.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const D=x*(p.x-T.x)-M*(p.y-T.y);if(D===0)return!0;if(D<0)continue;v=!v}}else{if(p.y!==T.y)continue;if(P.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=P.x)return!0}}return v}const i=Us.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ka,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let p=0,E=s.length;p<E;p++)a=s[p],g=a.getPoints(),o=i(g),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new Ka,p:g},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,E=0;for(let S=0,v=f.length;S<v;S++)h[S]=[];for(let S=0,v=f.length;S<v;S++){const C=d[S];for(let R=0;R<C.length;R++){const T=C[R];let P=!0;for(let M=0;M<f.length;M++)n(T.p,f[M].p)&&(S!==M&&E++,P?(P=!1,h[M].push(T)):p=!0);P&&h[S].push(T)}}E>0&&p===!1&&(d=h)}let m;for(let p=0,E=f.length;p<E;p++){l=f[p].s,c.push(l),m=d[p];for(let S=0,v=m.length;S<v;S++)l.holes.push(m[S].h)}return c}}function vf(r,e,t,n){const i=t0(n);switch(t){case Bd:return r*e;case kd:return r*e;case Hd:return r*e*2;case Vd:return r*e/i.components*i.byteLength;case Qu:return r*e/i.components*i.byteLength;case Gd:return r*e*2/i.components*i.byteLength;case eh:return r*e*2/i.components*i.byteLength;case zd:return r*e*3/i.components*i.byteLength;case pi:return r*e*4/i.components*i.byteLength;case th:return r*e*4/i.components*i.byteLength;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qa:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qc:case Zc:return Math.max(r,16)*Math.max(e,8)/4;case Yc:case $c:return Math.max(r,8)*Math.max(e,8)/2;case Kc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Za:case du:case pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Wd:case mu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _u:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(r){switch(r){case $i:case Nd:return{byteLength:1,components:1};case ko:case Fd:case ea:return{byteLength:2,components:1};case Ju:case ju:return{byteLength:2,components:4};case Jr:case Ku:case Vi:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function n0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
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
#endif`,tv=`struct PhysicalMaterial {
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fv=`#if defined( USE_POINTS_UV )
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
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hv=`float getShadowMask() {
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
}`,Vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
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
}`,cx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,xx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,bx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:u0,batching_pars_vertex:h0,batching_vertex:f0,begin_vertex:d0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:_0,bumpmap_pars_fragment:g0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:M0,color_fragment:y0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:b0,common:w0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:R0,displacementmap_vertex:P0,emissivemap_fragment:D0,emissivemap_pars_fragment:L0,colorspace_fragment:I0,colorspace_pars_fragment:U0,envmap_fragment:N0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:Z0,envmap_vertex:z0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:q0,lights_pars_begin:$0,lights_toon_fragment:K0,lights_toon_pars_fragment:J0,lights_phong_fragment:j0,lights_phong_pars_fragment:Q0,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:rv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:lv,map_fragment:cv,map_pars_fragment:uv,map_particle_fragment:hv,map_particle_pars_fragment:fv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:pv,morphinstance_vertex:mv,morphcolor_vertex:_v,morphnormal_vertex:gv,morphtarget_pars_vertex:vv,morphtarget_vertex:xv,normal_fragment_begin:Sv,normal_fragment_maps:Mv,normal_pars_fragment:yv,normal_pars_vertex:Ev,normal_vertex:Tv,normalmap_pars_fragment:bv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Rv,opaque_fragment:Pv,packing:Dv,premultiplied_alpha_fragment:Lv,project_vertex:Iv,dithering_fragment:Uv,dithering_pars_fragment:Nv,roughnessmap_fragment:Fv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:zv,shadowmap_vertex:kv,shadowmask_pars_fragment:Hv,skinbase_vertex:Vv,skinning_pars_vertex:Gv,skinning_vertex:Wv,skinnormal_vertex:Xv,specularmap_fragment:Yv,specularmap_pars_fragment:qv,tonemapping_fragment:$v,tonemapping_pars_fragment:Zv,transmission_fragment:Kv,transmission_pars_fragment:Jv,uv_pars_fragment:jv,uv_pars_vertex:Qv,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:rx,backgroundCube_frag:sx,cube_vert:ox,cube_frag:ax,depth_vert:lx,depth_frag:cx,distanceRGBA_vert:ux,distanceRGBA_frag:hx,equirect_vert:fx,equirect_frag:dx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:_x,meshbasic_frag:gx,meshlambert_vert:vx,meshlambert_frag:xx,meshmatcap_vert:Sx,meshmatcap_frag:Mx,meshnormal_vert:yx,meshnormal_frag:Ex,meshphong_vert:Tx,meshphong_frag:bx,meshphysical_vert:wx,meshphysical_frag:Ax,meshtoon_vert:Cx,meshtoon_frag:Rx,points_vert:Px,points_frag:Dx,shadow_vert:Lx,shadow_frag:Ix,sprite_vert:Ux,sprite_frag:Nx},Me={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},xi={basic:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:mn([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:mn([Me.lights,Me.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};xi.physical={uniforms:mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ca={r:0,b:0,g:0},Ar=new wi,Fx=new bt;function Ox(r,e,t,n,i,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function g(S){let v=!1;const C=_(S);C===null?p(a,l):C&&C.isColor&&(p(C,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,v){const C=_(v);C&&(C.isCubeTexture||C.mapping===Ml)?(u===void 0&&(u=new yi(new ia(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:$s(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ar.copy(v.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Ar)),u.material.toneMapped=ht.getTransfer(C.colorSpace)!==gt,(h!==C||f!==C.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new yi(new Tl(2,2),new _r({name:"BackgroundMaterial",uniforms:$s(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(C.colorSpace)!==gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Ca,tp(r)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,v,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:E}}function Bx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,D,U,O,k){let H=!1;const X=h(O,U,D);s!==X&&(s=X,c(s.object)),H=d(x,O,U,k),H&&_(x,O,U,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(x,D,U,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,D,U){const O=U.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let H=k[D.id];H===void 0&&(H={},k[D.id]=H);let X=H[O];return X===void 0&&(X=f(l()),H[O]=X),X}function f(x){const D=[],U=[],O=[];for(let k=0;k<t;k++)D[k]=0,U[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,D,U,O){const k=s.attributes,H=D.attributes;let X=0;const Y=U.getAttributes();for(const V in Y)if(Y[V].location>=0){const L=k[V];let ce=H[V];if(ce===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),L===void 0||L.attribute!==ce||ce&&L.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function _(x,D,U,O){const k={},H=D.attributes;let X=0;const Y=U.getAttributes();for(const V in Y)if(Y[V].location>=0){let L=H[V];L===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ce={};ce.attribute=L,L&&L.data&&(ce.data=L.data),k[V]=ce,X++}s.attributes=k,s.attributesNum=X,s.index=O}function g(){const x=s.newAttributes;for(let D=0,U=x.length;D<U;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const U=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;U[x]=1,O[x]===0&&(r.enableVertexAttribArray(x),O[x]=1),k[x]!==D&&(r.vertexAttribDivisor(x,D),k[x]=D)}function E(){const x=s.newAttributes,D=s.enabledAttributes;for(let U=0,O=D.length;U<O;U++)D[U]!==x[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function S(x,D,U,O,k,H,X){X===!0?r.vertexAttribIPointer(x,D,U,k,H):r.vertexAttribPointer(x,D,U,O,k,H)}function v(x,D,U,O){g();const k=O.attributes,H=U.getAttributes(),X=D.defaultAttributeValues;for(const Y in H){const V=H[Y];if(V.location>=0){let ne=k[Y];if(ne===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const L=ne.normalized,ce=ne.itemSize,De=e.get(ne);if(De===void 0)continue;const $e=De.buffer,$=De.type,oe=De.bytesPerElement,he=$===r.INT||$===r.UNSIGNED_INT||ne.gpuType===Ku;if(ne.isInterleavedBufferAttribute){const re=ne.data,ye=re.stride,Be=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)p(V.location+Ce,re.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)m(V.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let Ce=0;Ce<V.locationSize;Ce++)S(V.location+Ce,ce/V.locationSize,$,L,ye*oe,(Be+ce/V.locationSize*Ce)*oe,he)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)p(V.location+re,ne.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let re=0;re<V.locationSize;re++)S(V.location+re,ce/V.locationSize,$,L,ce*oe,ce/V.locationSize*re*oe,he)}}else if(X!==void 0){const L=X[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}E()}function C(){P();for(const x in n){const D=n[x];for(const U in D){const O=D[U];for(const k in O)u(O[k].object),delete O[k];delete D[U]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const U in D){const O=D[U];for(const k in O)u(O[k].object),delete O[k];delete D[U]}delete n[x.id]}function T(x){for(const D in n){const U=n[D];if(U[x.id]===void 0)continue;const O=U[x.id];for(const k in O)u(O[k].object),delete O[k];delete U[x.id]}}function P(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function zx(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==$i&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vi&&!P)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function Hx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Lr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,S=E*4;let v=p.clippingState||null;l.value=v,v=u(_,f,S,d);for(let C=0;C!==S;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==g;++S,v+=4)o.copy(h[S]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Vx(r){let e=new WeakMap;function t(o,a){return a===Vc?o.mapping=Gs:a===Gc&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===Gc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rg(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const As=4,xf=[.125,.215,.35,.446,.526,.582],Br=20,ac=new pp,Sf=new lt;let lc=null,cc=0,uc=0,hc=!1;const Ir=(1+Math.sqrt(5))/2,vs=1/Ir,Mf=[new z(-Ir,vs,0),new z(Ir,vs,0),new z(-vs,0,Ir),new z(vs,0,Ir),new z(0,Ir,-vs),new z(0,Ir,vs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Gx=new z;class yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Gx}=s;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:ea,format:pi,colorSpace:qs,depthBuffer:!1},i=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(s)),this._blurMaterial=Xx(s,e,t)}return i}_compileMaterial(e){const t=new yi(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,i,s){const l=new kn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Sf),h.toneMapping=hr,h.autoClear=!1;const _=new jd({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new yi(new ia,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Sf),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const v=this._cubeSize;Ra(i,S*v,E>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gs||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new yi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ac)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mf[(i-s-1)%Mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Br-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const p=[];let E=0;for(let T=0;T<Br;++T){const P=T/g,M=Math.exp(-P*P/2);p.push(M),T===0?E+=M:T<m&&(E+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const v=this._sizeLods[i],C=3*v*(i>S-As?i-S+As:0),R=4*(this._cubeSize-v);Ra(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(h,ac)}}function Wx(r){const e=[],t=[],n=[];let i=r;const s=r-As+1+xf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-As?l=xf[o-r+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,E=new Float32Array(g*_*d),S=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,P=R>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(M,g*_*R),S.set(f,m*_*R);const x=[R,R,R,R,R,R];v.set(x,p*_*R)}const C=new Ci;C.setAttribute("position",new _i(E,g)),C.setAttribute("uv",new _i(S,m)),C.setAttribute("faceIndex",new _i(v,p)),e.push(C),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(r,e,t){const n=new jr(r,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Xx(r,e,t){const n=new Float32Array(Br),i=new z(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ch(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Tf(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function bf(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function Yx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vc||l===Gc,u=l===Gs||l===Ws;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new yf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $x(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const E=d.array;g=d.version;for(let S=0,v=E.length;S<v;S+=3){const C=E[S+0],R=E[S+1],T=E[S+2];f.push(C,R,R,T,T,C)}}else if(_!==void 0){const E=_.array;g=_.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const C=S+0,R=S+1,T=S+2;f.push(C,R,R,T,T,C)}}else return;const m=new(qd(f)?ep:Qd)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zx(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E]*g[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jx(r,e,t){const n=new WeakMap,i=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*R*4*h),P=new $d(T,C,R,h);P.type=Vi,P.needsUpdate=!0;const M=v*4;for(let D=0;D<h;D++){const U=p[D],O=E[D],k=S[D],H=C*R*4*D;for(let X=0;X<U.count;X++){const Y=X*M;_===!0&&(i.fromBufferAttribute(U,X),T[H+Y+0]=i.x,T[H+Y+1]=i.y,T[H+Y+2]=i.z,T[H+Y+3]=0),g===!0&&(i.fromBufferAttribute(O,X),T[H+Y+4]=i.x,T[H+Y+5]=i.y,T[H+Y+6]=i.z,T[H+Y+7]=0),m===!0&&(i.fromBufferAttribute(k,X),T[H+Y+8]=i.x,T[H+Y+9]=i.y,T[H+Y+10]=i.z,T[H+Y+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new be(C,R)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function jx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const _p=new wn,wf=new sp(1,1),gp=new $d,vp=new H_,xp=new ip,Af=[],Cf=[],Rf=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function ro(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Af[i];if(s===void 0&&(s=new Float32Array(i),Af[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function bl(r,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Qx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function eS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function tS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function nS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function iS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Df.set(n),r.uniformMatrix2fv(this.addr,!1,Df),$t(t,n)}}function rS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Pf.set(n),r.uniformMatrix3fv(this.addr,!1,Pf),$t(t,n)}}function sS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Rf.set(n),r.uniformMatrix4fv(this.addr,!1,Rf),$t(t,n)}}function oS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function aS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function lS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function cS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function uS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function fS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function dS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function pS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(wf.compareFunction=Yd,s=wf):s=_p,t.setTexture2D(e||s,i)}function mS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function _S(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xp,i)}function gS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gp,i)}function vS(r){switch(r){case 5126:return Qx;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return gS}}function xS(r,e){r.uniform1fv(this.addr,e)}function SS(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function MS(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function yS(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function ES(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function TS(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bS(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wS(r,e){r.uniform1iv(this.addr,e)}function AS(r,e){r.uniform2iv(this.addr,e)}function CS(r,e){r.uniform3iv(this.addr,e)}function RS(r,e){r.uniform4iv(this.addr,e)}function PS(r,e){r.uniform1uiv(this.addr,e)}function DS(r,e){r.uniform2uiv(this.addr,e)}function LS(r,e){r.uniform3uiv(this.addr,e)}function IS(r,e){r.uniform4uiv(this.addr,e)}function US(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_p,s[o])}function NS(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vp,s[o])}function FS(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xp,s[o])}function OS(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||gp,s[o])}function BS(r){switch(r){case 5126:return xS;case 35664:return SS;case 35665:return MS;case 35666:return yS;case 35674:return ES;case 35675:return TS;case 35676:return bS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return PS;case 36294:return DS;case 36295:return LS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}class zS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vS(t.type)}}class kS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BS(t.type)}}class HS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Lf(r,e){r.seq.push(e),r.map[e.id]=e}function VS(r,e,t){const n=r.name,i=n.length;for(fc.lastIndex=0;;){const s=fc.exec(n),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lf(t,c===void 0?new zS(a,r,e):new kS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new HS(a),Lf(t,h)),t=h}}}class Ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);VS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function If(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const GS=37297;let WS=0;function XS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Uf=new je;function YS(r){ht._getMatrix(Uf,ht.workingColorSpace,r);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case al:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Nf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+XS(r.getShaderSource(e),o)}else return i}function qS(r,e){const t=YS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $S(r,e){let t;switch(e){case d_:t="Linear";break;case p_:t="Reinhard";break;case m_:t="Cineon";break;case __:t="ACESFilmic";break;case v_:t="AgX";break;case x_:t="Neutral";break;case g_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new z;function ZS(){ht.getLuminanceCoefficients(Pa);const r=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function JS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function go(r){return r!==""}function Ff(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(r){return r.replace(QS,tM)}const eM=new Map;function tM(r,e){let t=Qe[e];if(t===void 0){const n=eM.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(r){return r.replace(nM,iM)}function iM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Id:e="ENVMAP_BLENDING_MULTIPLY";break;case h_:e="ENVMAP_BLENDING_MIX";break;case f_:e="ENVMAP_BLENDING_ADD";break}return e}function lM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rM(t),c=sM(t),u=oM(t),h=aM(t),f=lM(t),d=KS(t),_=JS(s),g=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(go).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(go).join(`
`),p.length>0&&(p+=`
`)):(m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),p=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==hr?$S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,qS("linearToOutputTexel",t.outputColorSpace),ZS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),o=Tu(o),o=Ff(o,t),o=Of(o,t),a=Tu(a),a=Ff(a,t),a=Of(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,v=E+p+a,C=If(i,i.VERTEX_SHADER,S),R=If(i,i.FRAGMENT_SHADER,v);i.attachShader(g,C),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(D){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(C).trim(),k=i.getShaderInfoLog(R).trim();let H=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,R);else{const Y=Nf(i,C,"vertex"),V=Nf(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Y+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||k==="")&&(X=!1);X&&(D.diagnostics={runnable:H,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(C),i.deleteShader(R),P=new Ja(i,g),M=jS(i,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,GS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let uM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fM(e),t.set(e,n)),n}}class fM{constructor(e){this.id=uM++,this.code=e,this.usedTimes=0}}function dM(r,e,t,n,i,s,o){const a=new Kd,l=new hM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,U,O){const k=U.fog,H=O.geometry,X=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),V=Y&&Y.mapping===Ml?Y.image.height:null,ne=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const L=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=L!==void 0?L.length:0;let De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let $e,$,oe,he;if(ne){const Te=xi[ne];$e=Te.vertexShader,$=Te.fragmentShader}else $e=M.vertexShader,$=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const re=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Be=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,He=!!M.map,te=!!M.matcap,K=!!Y,A=!!M.aoMap,Ee=!!M.lightMap,ie=!!M.bumpMap,N=!!M.normalMap,ae=!!M.displacementMap,Ue=!!M.emissiveMap,_e=!!M.metalnessMap,w=!!M.roughnessMap,y=M.anisotropy>0,G=M.clearcoat>0,J=M.dispersion>0,Q=M.iridescence>0,j=M.sheen>0,de=M.transmission>0,ue=y&&!!M.anisotropyMap,ge=G&&!!M.clearcoatMap,Ye=G&&!!M.clearcoatNormalMap,le=G&&!!M.clearcoatRoughnessMap,fe=Q&&!!M.iridescenceMap,ze=Q&&!!M.iridescenceThicknessMap,Oe=j&&!!M.sheenColorMap,we=j&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,Ge=!!M.specularColorMap,at=!!M.specularIntensityMap,I=de&&!!M.transmissionMap,me=de&&!!M.thicknessMap,Z=!!M.gradientMap,ee=!!M.alphaMap,pe=M.alphaTest>0,ve=!!M.alphaHash,We=!!M.extensions;let ct=hr;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Lt={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:$,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:Be,instancingColor:Be&&O.instanceColor!==null,instancingMorph:Be&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:qs,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:te,envMap:K,envMapMode:K&&Y.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:Ee,bumpMap:ie,normalMap:N,displacementMap:f&&ae,emissiveMap:Ue,normalMapObjectSpace:N&&M.normalMapType===E_,normalMapTangentSpace:N&&M.normalMapType===Xd,metalnessMap:_e,roughnessMap:w,anisotropy:y,anisotropyMap:ue,clearcoat:G,clearcoatMap:ge,clearcoatNormalMap:Ye,clearcoatRoughnessMap:le,dispersion:J,iridescence:Q,iridescenceMap:fe,iridescenceThicknessMap:ze,sheen:j,sheenColorMap:Oe,sheenRoughnessMap:we,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:at,transmission:de,transmissionMap:I,thicknessMap:me,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Ds&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:ve,combine:M.combine,mapUv:He&&g(M.map.channel),aoMapUv:A&&g(M.aoMap.channel),lightMapUv:Ee&&g(M.lightMap.channel),bumpMapUv:ie&&g(M.bumpMap.channel),normalMapUv:N&&g(M.normalMap.channel),displacementMapUv:ae&&g(M.displacementMap.channel),emissiveMapUv:Ue&&g(M.emissiveMap.channel),metalnessMapUv:_e&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:ue&&g(M.anisotropyMap.channel),clearcoatMapUv:ge&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(M.sheenRoughnessMap.channel),specularMapUv:Ke&&g(M.specularMap.channel),specularColorMapUv:Ge&&g(M.specularColorMap.channel),specularIntensityMapUv:at&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:me&&g(M.thicknessMap.channel),alphaMapUv:ee&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(N||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(He||ee),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ki,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:We&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&M.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(E(x,M),S(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=_[M.type];let D;if(x){const U=xi[x];D=eg.clone(U.uniforms)}else D=M.uniforms;return D}function C(M,x){let D;for(let U=0,O=u.length;U<O;U++){const k=u[U];if(k.cacheKey===x){D=k,++D.usedTimes;break}}return D===void 0&&(D=new cM(r,x,M,s),u.push(D)),D}function R(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:P}}function pM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function mM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||mM),n.length>1&&n.sort(f||kf),i.length>1&&i.sort(f||kf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function _M(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Hf,r.set(n,[o])):i>=s.length?(o=new Hf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new lt};break;case"SpotLight":t={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function vM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xM=0;function SM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function MM(r){const e=new gM,t=vM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new bt,o=new bt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,E=0,S=0,v=0,C=0,R=0,T=0;c.sort(SM);for(let M=0,x=c.length;M<x;M++){const D=c[M],U=D.color,O=D.intensity,k=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*O,h+=U.g*O,f+=U.b*O;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],O);T++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,V=t.get(D);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=D.shadow.matrix,E++}n.directional[d]=X,d++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(O),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[g]=X;const Y=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,Y.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=Y.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=H,v++}g++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(U).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Y=D.shadow,V=t.get(D);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=D.shadow.matrix,S++}n.point[_]=X,_++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(O),X.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=T,n.version=xM++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Vf(r){const e=new MM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Vf(r),e.set(i,[a])):s>=o.length?(a=new Vf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const EM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
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
}`;function bM(r,e,t){let n=new ih;const i=new be,s=new be,o=new vt,a=new Vg({depthPacking:y_}),l=new Gg,c={},u=t.maxTextureSize,h={[mr]:bn,[bn]:mr,[ki]:ki},f=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:EM,fragmentShader:TM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ci;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ur),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==Oi&&this.type===Oi,k=p===Oi&&this.type!==Oi;for(let H=0,X=R.length;H<X;H++){const Y=R[H],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();if(i.multiply(ne),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||O===!0||k===!0){const ce=this.type!==Oi?{minFilter:mi,magFilter:mi}:{};V.map!==null&&V.map.dispose(),V.map=new jr(i.x,i.y,ce),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const L=V.getViewportCount();for(let ce=0;ce<L;ce++){const De=V.getViewport(ce);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),U.viewport(o),V.updateMatrices(Y,ce),n=V.getFrustum(),v(T,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&E(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,D)};function E(R,T){const P=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jr(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(T,null,P,f,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(T,null,P,d,g,null)}function S(R,T,P,M){let x=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,O=T.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let H=k[O];H===void 0&&(H=x.clone(),k[O]=H,T.addEventListener("dispose",C)),x=H}if(x.visible=T.visible,x.wireframe=T.wireframe,M===Oi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=P}return x}function v(R,T,P,M,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Oi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=e.update(R),k=R.material;if(Array.isArray(k)){const H=O.groups;for(let X=0,Y=H.length;X<Y;X++){const V=H[X],ne=k[V.materialIndex];if(ne&&ne.visible){const L=S(R,ne,M,x);R.onBeforeShadow(r,R,T,P,O,L,V),r.renderBufferDirect(P,null,O,L,R,V),R.onAfterShadow(r,R,T,P,O,L,V)}}}else if(k.visible){const H=S(R,k,M,x);R.onBeforeShadow(r,R,T,P,O,H,null),r.renderBufferDirect(P,null,O,H,R,null),R.onAfterShadow(r,R,T,P,O,H,null)}}const U=R.children;for(let O=0,k=U.length;O<k;O++)v(U[O],T,P,M,x)}function C(R){R.target.removeEventListener("dispose",C);for(const P in c){const M=c[P],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const wM={[Nc]:Fc,[Oc]:kc,[Bc]:Hc,[Vs]:zc,[Fc]:Nc,[kc]:Oc,[Hc]:Bc,[zc]:Vs};function AM(r,e){function t(){let I=!1;const me=new vt;let Z=null;const ee=new vt(0,0,0,0);return{setMask:function(pe){Z!==pe&&!I&&(r.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){I=pe},setClear:function(pe,ve,We,ct,Lt){Lt===!0&&(pe*=ct,ve*=ct,We*=ct),me.set(pe,ve,We,ct),ee.equals(me)===!1&&(r.clearColor(pe,ve,We,ct),ee.copy(me))},reset:function(){I=!1,Z=null,ee.set(-1,0,0,0)}}}function n(){let I=!1,me=!1,Z=null,ee=null,pe=null;return{setReversed:function(ve){if(me!==ve){const We=e.get("EXT_clip_control");me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const ct=pe;pe=null,this.setClear(ct)}me=ve},getReversed:function(){return me},setTest:function(ve){ve?re(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!I&&(r.depthMask(ve),Z=ve)},setFunc:function(ve){if(me&&(ve=wM[ve]),ee!==ve){switch(ve){case Nc:r.depthFunc(r.NEVER);break;case Fc:r.depthFunc(r.ALWAYS);break;case Oc:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case Bc:r.depthFunc(r.EQUAL);break;case zc:r.depthFunc(r.GEQUAL);break;case kc:r.depthFunc(r.GREATER);break;case Hc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=ve}},setLocked:function(ve){I=ve},setClear:function(ve){pe!==ve&&(me&&(ve=1-ve),r.clearDepth(ve),pe=ve)},reset:function(){I=!1,Z=null,ee=null,pe=null,me=!1}}}function i(){let I=!1,me=null,Z=null,ee=null,pe=null,ve=null,We=null,ct=null,Lt=null;return{setTest:function(Te){I||(Te?re(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(Te){me!==Te&&!I&&(r.stencilMask(Te),me=Te)},setFunc:function(Te,Le,Je){(Z!==Te||ee!==Le||pe!==Je)&&(r.stencilFunc(Te,Le,Je),Z=Te,ee=Le,pe=Je)},setOp:function(Te,Le,Je){(ve!==Te||We!==Le||ct!==Je)&&(r.stencilOp(Te,Le,Je),ve=Te,We=Le,ct=Je)},setLocked:function(Te){I=Te},setClear:function(Te){Lt!==Te&&(r.clearStencil(Te),Lt=Te)},reset:function(){I=!1,me=null,Z=null,ee=null,pe=null,ve=null,We=null,ct=null,Lt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,E=null,S=null,v=null,C=null,R=null,T=new lt(0,0,0),P=0,M=!1,x=null,D=null,U=null,O=null,k=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Y>=2);let ne=null,L={};const ce=r.getParameter(r.SCISSOR_BOX),De=r.getParameter(r.VIEWPORT),$e=new vt().fromArray(ce),$=new vt().fromArray(De);function oe(I,me,Z,ee){const pe=new Uint8Array(4),ve=r.createTexture();r.bindTexture(I,ve),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<Z;We++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(me+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return ve}const he={};he[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(Vs),ie(!1),N(Fh),re(r.CULL_FACE),A(ur);function re(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function ye(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Be(I,me){return h[I]!==me?(r.bindFramebuffer(I,me),h[I]=me,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=me),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Ce(I,me){let Z=d,ee=!1;if(I){Z=f.get(me),Z===void 0&&(Z=[],f.set(me,Z));const pe=I.textures;if(Z.length!==pe.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,We=pe.length;ve<We;ve++)Z[ve]=r.COLOR_ATTACHMENT0+ve;Z.length=pe.length,ee=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,ee=!0);ee&&r.drawBuffers(Z)}function He(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const te={[Or]:r.FUNC_ADD,[$m]:r.FUNC_SUBTRACT,[Zm]:r.FUNC_REVERSE_SUBTRACT};te[Km]=r.MIN,te[Jm]=r.MAX;const K={[jm]:r.ZERO,[Qm]:r.ONE,[e_]:r.SRC_COLOR,[Ic]:r.SRC_ALPHA,[o_]:r.SRC_ALPHA_SATURATE,[r_]:r.DST_COLOR,[n_]:r.DST_ALPHA,[t_]:r.ONE_MINUS_SRC_COLOR,[Uc]:r.ONE_MINUS_SRC_ALPHA,[s_]:r.ONE_MINUS_DST_COLOR,[i_]:r.ONE_MINUS_DST_ALPHA,[a_]:r.CONSTANT_COLOR,[l_]:r.ONE_MINUS_CONSTANT_COLOR,[c_]:r.CONSTANT_ALPHA,[u_]:r.ONE_MINUS_CONSTANT_ALPHA};function A(I,me,Z,ee,pe,ve,We,ct,Lt,Te){if(I===ur){g===!0&&(ye(r.BLEND),g=!1);return}if(g===!1&&(re(r.BLEND),g=!0),I!==qm){if(I!==m||Te!==M){if((p!==Or||v!==Or)&&(r.blendEquation(r.FUNC_ADD),p=Or,v=Or),Te)switch(I){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lc:r.blendFunc(r.ONE,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,S=null,C=null,R=null,T.set(0,0,0),P=0,m=I,M=Te}return}pe=pe||me,ve=ve||Z,We=We||ee,(me!==p||pe!==v)&&(r.blendEquationSeparate(te[me],te[pe]),p=me,v=pe),(Z!==E||ee!==S||ve!==C||We!==R)&&(r.blendFuncSeparate(K[Z],K[ee],K[ve],K[We]),E=Z,S=ee,C=ve,R=We),(ct.equals(T)===!1||Lt!==P)&&(r.blendColor(ct.r,ct.g,ct.b,Lt),T.copy(ct),P=Lt),m=I,M=!1}function Ee(I,me){I.side===ki?ye(r.CULL_FACE):re(r.CULL_FACE);let Z=I.side===bn;me&&(Z=!Z),ie(Z),I.blending===Ds&&I.transparent===!1?A(ur):A(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ee=I.stencilWrite;a.setTest(ee),ee&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function N(I){I!==Wm?(re(r.CULL_FACE),I!==D&&(I===Fh?r.cullFace(r.BACK):I===Xm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),D=I}function ae(I){I!==U&&(X&&r.lineWidth(I),U=I)}function Ue(I,me,Z){I?(re(r.POLYGON_OFFSET_FILL),(O!==me||k!==Z)&&(r.polygonOffset(me,Z),O=me,k=Z)):ye(r.POLYGON_OFFSET_FILL)}function _e(I){I?re(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function w(I){I===void 0&&(I=r.TEXTURE0+H-1),ne!==I&&(r.activeTexture(I),ne=I)}function y(I,me,Z){Z===void 0&&(ne===null?Z=r.TEXTURE0+H-1:Z=ne);let ee=L[Z];ee===void 0&&(ee={type:void 0,texture:void 0},L[Z]=ee),(ee.type!==I||ee.texture!==me)&&(ne!==Z&&(r.activeTexture(Z),ne=Z),r.bindTexture(I,me||he[I]),ee.type=I,ee.texture=me)}function G(){const I=L[ne];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(I){$e.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function we(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ke(I,me){let Z=c.get(me);Z===void 0&&(Z=new WeakMap,c.set(me,Z));let ee=Z.get(I);ee===void 0&&(ee=r.getUniformBlockIndex(me,I.name),Z.set(I,ee))}function Ge(I,me){const ee=c.get(me).get(I);l.get(me)!==ee&&(r.uniformBlockBinding(me,ee,I.__bindingPointIndex),l.set(me,ee))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,L={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,E=null,S=null,v=null,C=null,R=null,T=new lt(0,0,0),P=0,M=!1,x=null,D=null,U=null,O=null,k=null,$e.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:ye,bindFramebuffer:Be,drawBuffers:Ce,useProgram:He,setBlending:A,setMaterial:Ee,setFlipSided:ie,setCullFace:N,setLineWidth:ae,setPolygonOffset:Ue,setScissorTest:_e,activeTexture:w,bindTexture:y,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:fe,texImage3D:ze,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:Ye,texStorage3D:le,texSubImage2D:j,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Oe,viewport:we,reset:at}}function CM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return d?new OffscreenCanvas(w,y):cl("canvas")}function g(w,y,G){let J=1;const Q=_e(w);if((Q.width>G||Q.height>G)&&(J=G/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(J*Q.width),de=Math.floor(J*Q.height);h===void 0&&(h=_(j,de));const ue=y?_(j,de):h;return ue.width=j,ue.height=de,ue.getContext("2d").drawImage(w,0,0,j,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+de+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(w,y,G,J,Q=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=y;if(y===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),y===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),y===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),y===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),y===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),y===r.RGBA){const de=Q?al:ht.getTransfer(J);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=de===gt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(w,y){let G;return w?y===null||y===Jr||y===Xs?G=r.DEPTH24_STENCIL8:y===Vi?G=r.DEPTH32F_STENCIL8:y===ko&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Jr||y===Xs?G=r.DEPTH_COMPONENT24:y===Vi?G=r.DEPTH_COMPONENT32F:y===ko&&(G=r.DEPTH_COMPONENT16),G}function C(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==mi&&w.minFilter!==Mi?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){const y=w.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&u.delete(y)}function T(w){const y=w.target;y.removeEventListener("dispose",T),x(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const G=w.source,J=f.get(G);if(J){const Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(w),Object.keys(J).length===0&&f.delete(G)}n.remove(w)}function M(w){const y=n.get(w);r.deleteTexture(y.__webglTexture);const G=w.source,J=f.get(G);delete J[y.__cacheKey],o.memory.textures--}function x(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)r.deleteFramebuffer(y.__webglFramebuffer[J]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=w.textures;for(let J=0,Q=G.length;J<Q;J++){const j=n.get(G[J]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(w)}let D=0;function U(){D=0}function O(){const w=D;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),D+=1,w}function k(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function H(w,y){const G=n.get(w);if(w.isVideoTexture&&ae(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,w,y);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function X(w,y){const G=n.get(w);if(w.version>0&&G.__version!==w.version){$(G,w,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function Y(w,y){const G=n.get(w);if(w.version>0&&G.__version!==w.version){$(G,w,y);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function V(w,y){const G=n.get(w);if(w.version>0&&G.__version!==w.version){oe(G,w,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const ne={[Wc]:r.REPEAT,[zr]:r.CLAMP_TO_EDGE,[Xc]:r.MIRRORED_REPEAT},L={[mi]:r.NEAREST,[S_]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Dl]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},ce={[T_]:r.NEVER,[P_]:r.ALWAYS,[b_]:r.LESS,[Yd]:r.LEQUAL,[w_]:r.EQUAL,[R_]:r.GEQUAL,[A_]:r.GREATER,[C_]:r.NOTEQUAL};function De(w,y){if(y.type===Vi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mi||y.magFilter===Dl||y.magFilter===sa||y.magFilter===kr||y.minFilter===Mi||y.minFilter===Dl||y.minFilter===sa||y.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ne[y.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ne[y.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ne[y.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,L[y.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,L[y.minFilter]),y.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mi||y.minFilter!==sa&&y.minFilter!==kr||y.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(w,y){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R));const J=y.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const j=k(y);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[j].usedTimes++;const de=Q[w.__cacheKey];de!==void 0&&(Q[w.__cacheKey].usedTimes--,de.usedTimes===0&&M(y)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return G}function $(w,y,G){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const Q=$e(w,y),j=y.source;t.bindTexture(J,w.__webglTexture,r.TEXTURE0+G);const de=n.get(j);if(j.version!==de.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);const ue=ht.getPrimaries(ht.workingColorSpace),ge=y.colorSpace===rr?null:ht.getPrimaries(y.colorSpace),Ye=y.colorSpace===rr||ue===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let le=g(y.image,!1,i.maxTextureSize);le=Ue(y,le);const fe=s.convert(y.format,y.colorSpace),ze=s.convert(y.type);let Oe=S(y.internalFormat,fe,ze,y.colorSpace,y.isVideoTexture);De(J,y);let we;const Ke=y.mipmaps,Ge=y.isVideoTexture!==!0,at=de.__version===void 0||Q===!0,I=j.dataReady,me=C(y,le);if(y.isDepthTexture)Oe=v(y.format===Ys,y.type),at&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Oe,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Oe,le.width,le.height,0,fe,ze,null));else if(y.isDataTexture)if(Ke.length>0){Ge&&at&&t.texStorage2D(r.TEXTURE_2D,me,Oe,Ke[0].width,Ke[0].height);for(let Z=0,ee=Ke.length;Z<ee;Z++)we=Ke[Z],Ge?I&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,we.width,we.height,fe,ze,we.data):t.texImage2D(r.TEXTURE_2D,Z,Oe,we.width,we.height,0,fe,ze,we.data);y.generateMipmaps=!1}else Ge?(at&&t.texStorage2D(r.TEXTURE_2D,me,Oe,le.width,le.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,fe,ze,le.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,le.width,le.height,0,fe,ze,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Oe,Ke[0].width,Ke[0].height,le.depth);for(let Z=0,ee=Ke.length;Z<ee;Z++)if(we=Ke[Z],y.format!==pi)if(fe!==null)if(Ge){if(I)if(y.layerUpdates.size>0){const pe=vf(we.width,we.height,y.format,y.type);for(const ve of y.layerUpdates){const We=we.data.subarray(ve*pe/we.data.BYTES_PER_ELEMENT,(ve+1)*pe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,ve,we.width,we.height,1,fe,We)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,le.depth,fe,we.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Oe,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,le.depth,fe,ze,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Oe,we.width,we.height,le.depth,0,fe,ze,we.data)}else{Ge&&at&&t.texStorage2D(r.TEXTURE_2D,me,Oe,Ke[0].width,Ke[0].height);for(let Z=0,ee=Ke.length;Z<ee;Z++)we=Ke[Z],y.format!==pi?fe!==null?Ge?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,we.width,we.height,fe,we.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,we.width,we.height,fe,ze,we.data):t.texImage2D(r.TEXTURE_2D,Z,Oe,we.width,we.height,0,fe,ze,we.data)}else if(y.isDataArrayTexture)if(Ge){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Oe,le.width,le.height,le.depth),I)if(y.layerUpdates.size>0){const Z=vf(le.width,le.height,y.format,y.type);for(const ee of y.layerUpdates){const pe=le.data.subarray(ee*Z/le.data.BYTES_PER_ELEMENT,(ee+1)*Z/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,fe,ze,pe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,fe,ze,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,fe,ze,le.data);else if(y.isData3DTexture)Ge?(at&&t.texStorage3D(r.TEXTURE_3D,me,Oe,le.width,le.height,le.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,fe,ze,le.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,fe,ze,le.data);else if(y.isFramebufferTexture){if(at)if(Ge)t.texStorage2D(r.TEXTURE_2D,me,Oe,le.width,le.height);else{let Z=le.width,ee=le.height;for(let pe=0;pe<me;pe++)t.texImage2D(r.TEXTURE_2D,pe,Oe,Z,ee,0,fe,ze,null),Z>>=1,ee>>=1}}else if(Ke.length>0){if(Ge&&at){const Z=_e(Ke[0]);t.texStorage2D(r.TEXTURE_2D,me,Oe,Z.width,Z.height)}for(let Z=0,ee=Ke.length;Z<ee;Z++)we=Ke[Z],Ge?I&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,fe,ze,we):t.texImage2D(r.TEXTURE_2D,Z,Oe,fe,ze,we);y.generateMipmaps=!1}else if(Ge){if(at){const Z=_e(le);t.texStorage2D(r.TEXTURE_2D,me,Oe,Z.width,Z.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,ze,le)}else t.texImage2D(r.TEXTURE_2D,0,Oe,fe,ze,le);m(y)&&p(J),de.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function oe(w,y,G){if(y.image.length!==6)return;const J=$e(w,y),Q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const j=n.get(Q);if(Q.version!==j.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const de=ht.getPrimaries(ht.workingColorSpace),ue=y.colorSpace===rr?null:ht.getPrimaries(y.colorSpace),ge=y.colorSpace===rr||de===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!Ye&&!le?fe[ee]=g(y.image[ee],!0,i.maxCubemapSize):fe[ee]=le?y.image[ee].image:y.image[ee],fe[ee]=Ue(y,fe[ee]);const ze=fe[0],Oe=s.convert(y.format,y.colorSpace),we=s.convert(y.type),Ke=S(y.internalFormat,Oe,we,y.colorSpace),Ge=y.isVideoTexture!==!0,at=j.__version===void 0||J===!0,I=Q.dataReady;let me=C(y,ze);De(r.TEXTURE_CUBE_MAP,y);let Z;if(Ye){Ge&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ke,ze.width,ze.height);for(let ee=0;ee<6;ee++){Z=fe[ee].mipmaps;for(let pe=0;pe<Z.length;pe++){const ve=Z[pe];y.format!==pi?Oe!==null?Ge?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ve.width,ve.height,Oe,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ve.width,ve.height,Oe,we,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ke,ve.width,ve.height,0,Oe,we,ve.data)}}}else{if(Z=y.mipmaps,Ge&&at){Z.length>0&&me++;const ee=_e(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,Oe,we,fe[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,fe[ee].width,fe[ee].height,0,Oe,we,fe[ee].data);for(let pe=0;pe<Z.length;pe++){const We=Z[pe].image[ee].image;Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,We.width,We.height,Oe,we,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ke,We.width,We.height,0,Oe,we,We.data)}}else{Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,we,fe[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Oe,we,fe[ee]);for(let pe=0;pe<Z.length;pe++){const ve=Z[pe];Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Oe,we,ve.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ke,Oe,we,ve.image[ee])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function he(w,y,G,J,Q,j){const de=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),ge=S(G.internalFormat,de,ue,G.colorSpace),Ye=n.get(y),le=n.get(G);if(le.__renderTarget=y,!Ye.__hasExternalTextures){const fe=Math.max(1,y.width>>j),ze=Math.max(1,y.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,ge,fe,ze,y.depth,0,de,ue,null):t.texImage2D(Q,j,ge,fe,ze,0,de,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),N(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,le.__webglTexture,0,ie(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,le.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(w,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),y.depthBuffer){const J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,j=v(y.stencilBuffer,Q),de=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=ie(y);N(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,j,y.width,y.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,w)}else{const J=y.textures;for(let Q=0;Q<J.length;Q++){const j=J[Q],de=s.convert(j.format,j.colorSpace),ue=s.convert(j.type),ge=S(j.internalFormat,de,ue,j.colorSpace),Ye=ie(y);G&&N(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,ge,y.width,y.height):N(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,ge,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ge,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const Q=J.__webglTexture,j=ie(y);if(y.depthTexture.format===Ls)N(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ys)N(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Be(w){const y=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ye(y.__webglFramebuffer,w)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=r.createRenderbuffer(),re(y.__webglDepthbuffer[J],w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),re(y.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(w,y,G){const J=n.get(w);y!==void 0&&he(J.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Be(w)}function He(w){const y=w.texture,G=n.get(w),J=n.get(y);w.addEventListener("dispose",T);const Q=w.textures,j=w.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let ge=0;ge<y.mipmaps.length;ge++)G.__webglFramebuffer[ue][ge]=r.createFramebuffer()}else G.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)G.__webglFramebuffer[ue]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(de)for(let ue=0,ge=Q.length;ue<ge;ue++){const Ye=n.get(Q[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&N(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const ge=Q[ue];G.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Ye=s.convert(ge.format,ge.colorSpace),le=s.convert(ge.type),fe=S(ge.internalFormat,Ye,le,ge.colorSpace,w.isXRRenderTarget===!0),ze=ie(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,fe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),re(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),De(r.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)he(G.__webglFramebuffer[ue][ge],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else he(G.__webglFramebuffer[ue],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,ge=Q.length;ue<ge;ue++){const Ye=Q[ue],le=n.get(Ye);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),De(r.TEXTURE_2D,Ye),he(G.__webglFramebuffer,w,Ye,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),m(Ye)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),De(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)he(G.__webglFramebuffer[ge],w,y,r.COLOR_ATTACHMENT0,ue,ge);else he(G.__webglFramebuffer,w,y,r.COLOR_ATTACHMENT0,ue,0);m(y)&&p(ue),t.unbindTexture()}w.depthBuffer&&Be(w)}function te(w){const y=w.textures;for(let G=0,J=y.length;G<J;G++){const Q=y[G];if(m(Q)){const j=E(w),de=n.get(Q).__webglTexture;t.bindTexture(j,de),p(j),t.unbindTexture()}}}const K=[],A=[];function Ee(w){if(w.samples>0){if(N(w)===!1){const y=w.textures,G=w.width,J=w.height;let Q=r.COLOR_BUFFER_BIT;const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(w),ue=y.length>1;if(ue)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ye=n.get(y[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,G,J,0,0,G,J,Q,r.NEAREST),l===!0&&(K.length=0,A.length=0,K.push(r.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(K.push(j),A.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,A)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ye=n.get(y[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ie(w){return Math.min(i.maxSamples,w.samples)}function N(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Ue(w,y){const G=w.colorSpace,J=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==qs&&G!==rr&&(ht.getTransfer(G)===gt?(J!==pi||Q!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function _e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ce,this.setupRenderTarget=He,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=N}function RM(r,e){function t(n,i=rr){let s;const o=ht.getTransfer(i);if(n===$i)return r.UNSIGNED_BYTE;if(n===Ju)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Od)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return r.BYTE;if(n===Fd)return r.SHORT;if(n===ko)return r.UNSIGNED_SHORT;if(n===Ku)return r.INT;if(n===Jr)return r.UNSIGNED_INT;if(n===Vi)return r.FLOAT;if(n===ea)return r.HALF_FLOAT;if(n===Bd)return r.ALPHA;if(n===zd)return r.RGB;if(n===pi)return r.RGBA;if(n===kd)return r.LUMINANCE;if(n===Hd)return r.LUMINANCE_ALPHA;if(n===Ls)return r.DEPTH_COMPONENT;if(n===Ys)return r.DEPTH_STENCIL;if(n===Vd)return r.RED;if(n===Qu)return r.RED_INTEGER;if(n===Gd)return r.RG;if(n===eh)return r.RG_INTEGER;if(n===th)return r.RGBA_INTEGER;if(n===Xa||n===Ya||n===qa||n===$a)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===qc||n===$c||n===Zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Jc||n===jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kc||n===Jc)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===iu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ru)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===su)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ou)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===au)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===du||n===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===mu||n===_u||n===gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
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

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _r({vertexShader:PM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yi(new Tl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends to{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new LM,m=t.getContextAttributes();let p=null,E=null;const S=[],v=[],C=new be;let R=null;const T=new kn;T.viewport=new vt;const P=new kn;P.viewport=new vt;const M=[T,P],x=new jg;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=S[$];return oe===void 0&&(oe=new Ql,S[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=S[$];return oe===void 0&&(oe=new Ql,S[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=S[$];return oe===void 0&&(oe=new Ql,S[$]=oe),oe.getHandSpace()};function O($){const oe=v.indexOf($.inputSource);if(oe===-1)return;const he=S[oe];he!==void 0&&(he.update($.inputSource,$.frame,c||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",H);for(let $=0;$<S.length;$++){const oe=v[$];oe!==null&&(v[$]=null,S[$].disconnect(oe))}D=null,U=null,g.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,E=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,re=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Ys:Ls,re=m.stencil?Xs:Jr);const Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new jr(f.textureWidth,f.textureHeight,{format:pi,type:$i,depthTexture:new sp(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new jr(d.framebufferWidth,d.framebufferHeight,{format:pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H($){for(let oe=0;oe<$.removed.length;oe++){const he=$.removed[oe],re=v.indexOf(he);re>=0&&(v[re]=null,S[re].disconnect(he))}for(let oe=0;oe<$.added.length;oe++){const he=$.added[oe];let re=v.indexOf(he);if(re===-1){for(let Be=0;Be<S.length;Be++)if(Be>=v.length){v.push(he),re=Be;break}else if(v[Be]===null){v[Be]=he,re=Be;break}if(re===-1)break}const ye=S[re];ye&&ye.connect(he)}}const X=new z,Y=new z;function V($,oe,he){X.setFromMatrixPosition(oe.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const re=X.distanceTo(Y),ye=oe.projectionMatrix.elements,Be=he.projectionMatrix.elements,Ce=ye[14]/(ye[10]-1),He=ye[14]/(ye[10]+1),te=(ye[9]+1)/ye[5],K=(ye[9]-1)/ye[5],A=(ye[8]-1)/ye[0],Ee=(Be[8]+1)/Be[0],ie=Ce*A,N=Ce*Ee,ae=re/(-A+Ee),Ue=ae*-A;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ye[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const _e=Ce+ae,w=He+ae,y=ie-Ue,G=N+(re-Ue),J=te*He/w*_e,Q=K*He/w*_e;$.projectionMatrix.makePerspective(y,G,J,Q,_e,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let oe=$.near,he=$.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(he=g.depthFar)),x.near=P.near=T.near=oe,x.far=P.far=T.far=he,(D!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,U=x.far),T.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;const re=$.parent,ye=x.cameras;ne(x,re);for(let Be=0;Be<ye.length;Be++)ne(ye[Be],re);ye.length===2?V(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),L($,x,re)};function L($,oe,he){he===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=vu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ce=null;function De($,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let re=!1;he.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Ce=0;Ce<he.length;Ce++){const He=he[Ce];let te=null;if(d!==null)te=d.getViewport(He);else{const A=h.getViewSubImage(f,He);te=A.viewport,Ce===0&&(e.setRenderTargetTextures(E,A.colorTexture,f.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(E))}let K=M[Ce];K===void 0&&(K=new kn,K.layers.enable(Ce),K.viewport=new vt,M[Ce]=K),K.matrix.fromArray(He.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(He.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(te.x,te.y,te.width,te.height),Ce===0&&(x.matrix.copy(K.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(K)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ce=h.getDepthInformation(he[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,i.renderState)}}for(let he=0;he<S.length;he++){const re=v[he],ye=S[he];re!==null&&ye!==void 0&&ye.update(re,oe,c||o)}ce&&ce($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const $e=new mp;$e.setAnimationLoop(De),this.setAnimationLoop=function($){ce=$},this.dispose=function(){}}}const Cr=new wi,UM=new bt;function NM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,Cr.copy(v),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Cr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function FM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=i[E.id];v===void 0&&(_(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(E,C);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function u(E){const S=h();E.__bindingPointIndex=S;const v=r.createBuffer(),C=E.__size,R=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=i[E.id],v=E.uniforms,C=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let R=0,T=v.length;R<T;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,x=P.length;M<x;M++){const D=P[M];if(d(D,R,M,C)===!0){const U=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let H=0;H<O.length;H++){const X=O[H],Y=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+k,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,S,v,C){const R=E.value,T=S+"_"+v;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const P=C[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return C[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(E){const S=E.uniforms;let v=0;const C=16;for(let T=0,P=S.length;T<P;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,D=M.length;x<D;x++){const U=M[x],O=Array.isArray(U.value)?U.value:[U.value];for(let k=0,H=O.length;k<H;k++){const X=O[k],Y=g(X),V=v%C,ne=V%Y.boundary,L=V+ne;v+=ne,L!==0&&C-L<Y.storage&&(v+=C-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const R=v%C;return R>0&&(v+=C-R),E.__size=v,E.__cache={},this}function g(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class OM{constructor(e={}){const{canvas:t=L_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let C=!1,R=0,T=0,P=null,M=-1,x=null;const D=new vt,U=new vt;let O=null;const k=new lt(0);let H=0,X=t.width,Y=t.height,V=1,ne=null,L=null;const ce=new vt(0,0,X,Y),De=new vt(0,0,X,Y);let $e=!1;const $=new ih;let oe=!1,he=!1;this.transmissionResolutionScale=1;const re=new bt,ye=new bt,Be=new z,Ce=new vt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function K(){return P===null?V:1}let A=n;function Ee(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zu}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),A===null){const B="webgl2";if(A=Ee(B,b),A===null)throw Ee(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ie,N,ae,Ue,_e,w,y,G,J,Q,j,de,ue,ge,Ye,le,fe,ze,Oe,we,Ke,Ge,at,I;function me(){ie=new qx(A),ie.init(),Ge=new RM(A,ie),N=new kx(A,ie,e,Ge),ae=new AM(A,ie),N.reverseDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Ue=new Kx(A),_e=new pM,w=new CM(A,ie,ae,_e,N,Ge,Ue),y=new Vx(v),G=new Yx(v),J=new n0(A),at=new Bx(A,J),Q=new $x(A,J,Ue,at),j=new jx(A,Q,J,Ue),Oe=new Jx(A,N,w),le=new Hx(_e),de=new dM(v,y,G,ie,N,at,le),ue=new NM(v,_e),ge=new _M,Ye=new yM(ie),ze=new Ox(v,y,G,ae,j,d,l),fe=new bM(v,j,N),I=new FM(A,Ue,N,ae),we=new zx(A,ie,Ue),Ke=new Zx(A,ie,Ue),Ue.programs=de.programs,v.capabilities=N,v.extensions=ie,v.properties=_e,v.renderLists=ge,v.shadowMap=fe,v.state=ae,v.info=Ue}me();const Z=new IM(v,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(X,Y,!1))},this.getSize=function(b){return b.set(X,Y)},this.setSize=function(b,B,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Y=B,t.width=Math.floor(b*V),t.height=Math.floor(B*V),q===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(X*V,Y*V).floor()},this.setDrawingBufferSize=function(b,B,q){X=b,Y=B,V=q,t.width=Math.floor(b*q),t.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,B,q,W){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,B,q,W),ae.viewport(D.copy(ce).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,B,q,W){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,B,q,W),ae.scissor(U.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(b){ae.setScissorTest($e=b)},this.setOpaqueSort=function(b){ne=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,q=!0){let W=0;if(b){let F=!1;if(P!==null){const se=P.texture.format;F=se===th||se===eh||se===Qu}if(F){const se=P.texture.type,Se=se===$i||se===Jr||se===ko||se===Xs||se===Ju||se===ju,Re=ze.getClearColor(),Ae=ze.getClearAlpha(),Fe=Re.r,Ve=Re.g,Ne=Re.b;Se?(_[0]=Fe,_[1]=Ve,_[2]=Ne,_[3]=Ae,A.clearBufferuiv(A.COLOR,0,_)):(g[0]=Fe,g[1]=Ve,g[2]=Ne,g[3]=Ae,A.clearBufferiv(A.COLOR,0,g))}else W|=A.COLOR_BUFFER_BIT}B&&(W|=A.DEPTH_BUFFER_BIT),q&&(W|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ze.dispose(),ge.dispose(),Ye.dispose(),_e.dispose(),y.dispose(),G.dispose(),j.dispose(),at.dispose(),I.dispose(),de.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",xe),Z.removeEventListener("sessionend",qe),Ie.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Ue.autoReset,B=fe.enabled,q=fe.autoUpdate,W=fe.needsUpdate,F=fe.type;me(),Ue.autoReset=b,fe.enabled=B,fe.autoUpdate=q,fe.needsUpdate=W,fe.type=F}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function We(b){const B=b.target;B.removeEventListener("dispose",We),ct(B)}function ct(b){Lt(b),_e.remove(b)}function Lt(b){const B=_e.get(b).programs;B!==void 0&&(B.forEach(function(q){de.releaseProgram(q)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,W,F,se){B===null&&(B=He);const Se=F.isMesh&&F.matrixWorld.determinant()<0,Re=Ln(b,B,q,W,F);ae.setMaterial(W,Se);let Ae=q.index,Fe=1;if(W.wireframe===!0){if(Ae=Q.getWireframeAttribute(q),Ae===void 0)return;Fe=2}const Ve=q.drawRange,Ne=q.attributes.position;let Ze=Ve.start*Fe,dt=(Ve.start+Ve.count)*Fe;se!==null&&(Ze=Math.max(Ze,se.start*Fe),dt=Math.min(dt,(se.start+se.count)*Fe)),Ae!==null?(Ze=Math.max(Ze,0),dt=Math.min(dt,Ae.count)):Ne!=null&&(Ze=Math.max(Ze,0),dt=Math.min(dt,Ne.count));const Bt=dt-Ze;if(Bt<0||Bt===1/0)return;at.setup(F,W,Re,q,Ae);let It,ut=we;if(Ae!==null&&(It=J.get(Ae),ut=Ke,ut.setIndex(It)),F.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*K()),ut.setMode(A.LINES)):ut.setMode(A.TRIANGLES);else if(F.isLine){let ke=W.linewidth;ke===void 0&&(ke=1),ae.setLineWidth(ke*K()),F.isLineSegments?ut.setMode(A.LINES):F.isLineLoop?ut.setMode(A.LINE_LOOP):ut.setMode(A.LINE_STRIP)}else F.isPoints?ut.setMode(A.POINTS):F.isSprite&&ut.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ke=F._multiDrawStarts,Qt=F._multiDrawCounts,pt=F._multiDrawCount,ai=Ae?J.get(Ae).bytesPerElement:1,rs=_e.get(W).currentProgram.getUniforms();for(let In=0;In<pt;In++)rs.setValue(A,"_gl_DrawID",In),ut.render(ke[In]/ai,Qt[In])}else if(F.isInstancedMesh)ut.renderInstances(Ze,Bt,F.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Qt=Math.min(q.instanceCount,ke);ut.renderInstances(Ze,Bt,Qt)}else ut.render(Ze,Bt)};function Te(b,B,q){b.transparent===!0&&b.side===ki&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,xt(b,B,q),b.side=mr,b.needsUpdate=!0,xt(b,B,q),b.side=ki):xt(b,B,q)}this.compile=function(b,B,q=null){q===null&&(q=b),p=Ye.get(q),p.init(B),S.push(p),q.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==q&&b.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let Se=0;Se<se.length;Se++){const Re=se[Se];Te(Re,q,F),W.add(Re)}else Te(se,q,F),W.add(se)}),p=S.pop(),W},this.compileAsync=function(b,B,q=null){const W=this.compile(b,B,q);return new Promise(F=>{function se(){if(W.forEach(function(Se){_e.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){F(b);return}setTimeout(se,10)}ie.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Le=null;function Je(b){Le&&Le(b)}function xe(){Ie.stop()}function qe(){Ie.start()}const Ie=new mp;Ie.setAnimationLoop(Je),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(b){Le=b,Z.setAnimationLoop(b),b===null?Ie.stop():Ie.start()},Z.addEventListener("sessionstart",xe),Z.addEventListener("sessionend",qe),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,P),p=Ye.get(b,S.length),p.init(B),S.push(p),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(ye),he=this.localClippingEnabled,oe=le.init(this.clippingPlanes,he),m=ge.get(b,E.length),m.init(),E.push(m),Z.enabled===!0&&Z.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&Xe(se,B,-1/0,v.sortObjects)}Xe(b,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,L),te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,te&&ze.addToRenderList(m,b),this.info.render.frame++,oe===!0&&le.beginShadows();const q=p.state.shadowsArray;fe.render(q,b,B),oe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),B.isArrayCamera){const se=B.cameras;if(F.length>0)for(let Se=0,Re=se.length;Se<Re;Se++){const Ae=se[Se];nt(W,F,b,Ae)}te&&ze.render(b);for(let Se=0,Re=se.length;Se<Re;Se++){const Ae=se[Se];Nt(m,b,Ae,Ae.viewport)}}else F.length>0&&nt(W,F,b,B),te&&ze.render(b),Nt(m,b,B);P!==null&&T===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,B),at.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],oe===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Xe(b,B,q,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){W&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ye);const Se=j.update(b),Re=b.material;Re.visible&&m.push(b,Se,Re,q,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Se=j.update(b),Re=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ce.copy(Se.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(ye)),Array.isArray(Re)){const Ae=Se.groups;for(let Fe=0,Ve=Ae.length;Fe<Ve;Fe++){const Ne=Ae[Fe],Ze=Re[Ne.materialIndex];Ze&&Ze.visible&&m.push(b,Se,Ze,q,Ce.z,Ne)}}else Re.visible&&m.push(b,Se,Re,q,Ce.z,null)}}const se=b.children;for(let Se=0,Re=se.length;Se<Re;Se++)Xe(se[Se],B,q,W)}function Nt(b,B,q,W){const F=b.opaque,se=b.transmissive,Se=b.transparent;p.setupLightsView(q),oe===!0&&le.setGlobalState(v.clippingPlanes,q),W&&ae.viewport(D.copy(W)),F.length>0&&Et(F,B,q),se.length>0&&Et(se,B,q),Se.length>0&&Et(Se,B,q),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function nt(b,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new jr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ea:$i,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const se=p.state.transmissionRenderTarget[W.id],Se=W.viewport||D;se.setSize(Se.z*v.transmissionResolutionScale,Se.w*v.transmissionResolutionScale);const Re=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(k),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),te&&ze.render(q);const Ae=v.toneMapping;v.toneMapping=hr;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),oe===!0&&le.setGlobalState(v.clippingPlanes,W),Et(b,q,W),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ne=0,Ze=B.length;Ne<Ze;Ne++){const dt=B[Ne],Bt=dt.object,It=dt.geometry,ut=dt.material,ke=dt.group;if(ut.side===ki&&Bt.layers.test(W.layers)){const Qt=ut.side;ut.side=bn,ut.needsUpdate=!0,Vt(Bt,q,W,It,ut,ke),ut.side=Qt,ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se))}v.setRenderTarget(Re),v.setClearColor(k,H),Fe!==void 0&&(W.viewport=Fe),v.toneMapping=Ae}function Et(b,B,q){const W=B.isScene===!0?B.overrideMaterial:null;for(let F=0,se=b.length;F<se;F++){const Se=b[F],Re=Se.object,Ae=Se.geometry,Fe=W===null?Se.material:W,Ve=Se.group;Re.layers.test(q.layers)&&Vt(Re,B,q,Ae,Fe,Ve)}}function Vt(b,B,q,W,F,se){b.onBeforeRender(v,B,q,W,F,se),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,B,q,W,b,se),F.transparent===!0&&F.side===ki&&F.forceSinglePass===!1?(F.side=bn,F.needsUpdate=!0,v.renderBufferDirect(q,B,W,F,b,se),F.side=mr,F.needsUpdate=!0,v.renderBufferDirect(q,B,W,F,b,se),F.side=ki):v.renderBufferDirect(q,B,W,F,b,se),b.onAfterRender(v,B,q,W,F,se)}function xt(b,B,q){B.isScene!==!0&&(B=He);const W=_e.get(b),F=p.state.lights,se=p.state.shadowsArray,Se=F.state.version,Re=de.getParameters(b,F.state,se,B,q),Ae=de.getProgramCacheKey(Re);let Fe=W.programs;W.environment=b.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(b.isMeshStandardMaterial?G:y).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",We),Fe=new Map,W.programs=Fe);let Ve=Fe.get(Ae);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Se)return ft(b,Re),Ve}else Re.uniforms=de.getUniforms(b),b.onBeforeCompile(Re,v),Ve=de.acquireProgram(Re,Ae),Fe.set(Ae,Ve),W.uniforms=Re.uniforms;const Ne=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=le.uniform),ft(b,Re),W.needsLights=hn(b),W.lightsStateVersion=Se,W.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function St(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Ja.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function ft(b,B){const q=_e.get(b);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Ln(b,B,q,W,F){B.isScene!==!0&&(B=He),w.resetTextureUnits();const se=B.fog,Se=W.isMeshStandardMaterial?B.environment:null,Re=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:qs,Ae=(W.isMeshStandardMaterial?G:y).get(W.envMap||Se),Fe=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let Bt=hr;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const It=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=It!==void 0?It.length:0,ke=_e.get(W),Qt=p.state.lights;if(oe===!0&&(he===!0||b!==x)){const fn=b===x&&W.id===M;le.setState(W,b,fn)}let pt=!1;W.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Qt.state.version||ke.outputColorSpace!==Re||F.isBatchedMesh&&ke.batching===!1||!F.isBatchedMesh&&ke.batching===!0||F.isBatchedMesh&&ke.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ke.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ke.instancing===!1||!F.isInstancedMesh&&ke.instancing===!0||F.isSkinnedMesh&&ke.skinning===!1||!F.isSkinnedMesh&&ke.skinning===!0||F.isInstancedMesh&&ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ke.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ke.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ke.instancingMorph===!1&&F.morphTexture!==null||ke.envMap!==Ae||W.fog===!0&&ke.fog!==se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Fe||ke.vertexTangents!==Ve||ke.morphTargets!==Ne||ke.morphNormals!==Ze||ke.morphColors!==dt||ke.toneMapping!==Bt||ke.morphTargetsCount!==ut)&&(pt=!0):(pt=!0,ke.__version=W.version);let ai=ke.currentProgram;pt===!0&&(ai=xt(W,B,F));let rs=!1,In=!1,so=!1;const wt=ai.getUniforms(),Kn=ke.uniforms;if(ae.useProgram(ai.program)&&(rs=!0,In=!0,so=!0),W.id!==M&&(M=W.id,In=!0),rs||x!==b){ae.buffers.depth.getReversed()?(re.copy(b.projectionMatrix),U_(re),N_(re),wt.setValue(A,"projectionMatrix",re)):wt.setValue(A,"projectionMatrix",b.projectionMatrix),wt.setValue(A,"viewMatrix",b.matrixWorldInverse);const Mn=wt.map.cameraPosition;Mn!==void 0&&Mn.setValue(A,Be.setFromMatrixPosition(b.matrixWorld)),N.logarithmicDepthBuffer&&wt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,In=!0,so=!0)}if(F.isSkinnedMesh){wt.setOptional(A,F,"bindMatrix"),wt.setOptional(A,F,"bindMatrixInverse");const fn=F.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),wt.setValue(A,"boneTexture",fn.boneTexture,w))}F.isBatchedMesh&&(wt.setOptional(A,F,"batchingTexture"),wt.setValue(A,"batchingTexture",F._matricesTexture,w),wt.setOptional(A,F,"batchingIdTexture"),wt.setValue(A,"batchingIdTexture",F._indirectTexture,w),wt.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&wt.setValue(A,"batchingColorTexture",F._colorsTexture,w));const Jn=q.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Oe.update(F,q,ai),(In||ke.receiveShadow!==F.receiveShadow)&&(ke.receiveShadow=F.receiveShadow,wt.setValue(A,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kn.envMap.value=Ae,Kn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Kn.envMapIntensity.value=B.environmentIntensity),In&&(wt.setValue(A,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Tt(Kn,so),se&&W.fog===!0&&ue.refreshFogUniforms(Kn,se),ue.refreshMaterialUniforms(Kn,W,V,Y,p.state.transmissionRenderTarget[b.id]),Ja.upload(A,St(ke),Kn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ja.upload(A,St(ke),Kn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(A,"center",F.center),wt.setValue(A,"modelViewMatrix",F.modelViewMatrix),wt.setValue(A,"normalMatrix",F.normalMatrix),wt.setValue(A,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const fn=W.uniformsGroups;for(let Mn=0,Pl=fn.length;Mn<Pl;Mn++){const yr=fn[Mn];I.update(yr,ai),I.bind(yr,ai)}}return ai}function Tt(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function hn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,B,q){_e.get(b.texture).__webglTexture=B,_e.get(b.depthTexture).__webglTexture=q;const W=_e.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const q=_e.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Zn=A.createFramebuffer();this.setRenderTarget=function(b,B=0,q=0){P=b,R=B,T=q;let W=!0,F=null,se=!1,Se=!1;if(b){const Ae=_e.get(b);if(Ae.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(A.FRAMEBUFFER,null),W=!1;else if(Ae.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Ae.__hasExternalTextures)w.rebindTextures(b,_e.get(b.texture).__webglTexture,_e.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Ae.__boundDepthTexture!==Ne){if(Ne!==null&&_e.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const Ve=_e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?F=Ve[B][q]:F=Ve[B],se=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=_e.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[q]:F=Ve,D.copy(b.viewport),U.copy(b.scissor),O=b.scissorTest}else D.copy(ce).multiplyScalar(V).floor(),U.copy(De).multiplyScalar(V).floor(),O=$e;if(q!==0&&(F=Zn),ae.bindFramebuffer(A.FRAMEBUFFER,F)&&W&&ae.drawBuffers(b,F),ae.viewport(D),ae.scissor(U),ae.setScissorTest(O),se){const Ae=_e.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,q)}else if(Se){const Ae=_e.get(b.texture),Fe=B;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ae.__webglTexture,q,Fe)}else if(b!==null&&q!==0){const Ae=_e.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ae.__webglTexture,q)}M=-1},this.readRenderTargetPixels=function(b,B,q,W,F,se,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=_e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){ae.bindFramebuffer(A.FRAMEBUFFER,Re);try{const Ae=b.texture,Fe=Ae.format,Ve=Ae.type;if(!N.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&q>=0&&q<=b.height-F&&A.readPixels(B,q,W,F,Ge.convert(Fe),Ge.convert(Ve),se)}finally{const Ae=P!==null?_e.get(P).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,B,q,W,F,se,Se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=_e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){const Ae=b.texture,Fe=Ae.format,Ve=Ae.type;if(!N.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-W&&q>=0&&q<=b.height-F){ae.bindFramebuffer(A.FRAMEBUFFER,Re);const Ne=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ne),A.bufferData(A.PIXEL_PACK_BUFFER,se.byteLength,A.STREAM_READ),A.readPixels(B,q,W,F,Ge.convert(Fe),Ge.convert(Ve),0);const Ze=P!==null?_e.get(P).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,Ze);const dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await I_(A,dt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ne),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,se),A.deleteBuffer(Ne),A.deleteSync(dt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,q=0){b.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-q),F=Math.floor(b.image.width*W),se=Math.floor(b.image.height*W),Se=B!==null?B.x:0,Re=B!==null?B.y:0;w.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,q,0,0,Se,Re,F,se),ae.unbindTexture()};const Gt=A.createFramebuffer(),Wt=A.createFramebuffer();this.copyTextureToTexture=function(b,B,q=null,W=null,F=0,se=null){b.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],B=arguments[2],se=arguments[3]||0,q=null),se===null&&(F!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let Se,Re,Ae,Fe,Ve,Ne,Ze,dt,Bt;const It=b.isCompressedTexture?b.mipmaps[se]:b.image;if(q!==null)Se=q.max.x-q.min.x,Re=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,Ve=q.min.y,Ne=q.isBox3?q.min.z:0;else{const Jn=Math.pow(2,-F);Se=Math.floor(It.width*Jn),Re=Math.floor(It.height*Jn),b.isDataArrayTexture?Ae=It.depth:b.isData3DTexture?Ae=Math.floor(It.depth*Jn):Ae=1,Fe=0,Ve=0,Ne=0}W!==null?(Ze=W.x,dt=W.y,Bt=W.z):(Ze=0,dt=0,Bt=0);const ut=Ge.convert(B.format),ke=Ge.convert(B.type);let Qt;B.isData3DTexture?(w.setTexture3D(B,0),Qt=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),Qt=A.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),Qt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const pt=A.getParameter(A.UNPACK_ROW_LENGTH),ai=A.getParameter(A.UNPACK_IMAGE_HEIGHT),rs=A.getParameter(A.UNPACK_SKIP_PIXELS),In=A.getParameter(A.UNPACK_SKIP_ROWS),so=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,It.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,It.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ne);const wt=b.isDataArrayTexture||b.isData3DTexture,Kn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Jn=_e.get(b),fn=_e.get(B),Mn=_e.get(Jn.__renderTarget),Pl=_e.get(fn.__renderTarget);ae.bindFramebuffer(A.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Pl.__webglFramebuffer);for(let yr=0;yr<Ae;yr++)wt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(b).__webglTexture,F,Ne+yr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(B).__webglTexture,se,Bt+yr)),A.blitFramebuffer(Fe,Ve,Se,Re,Ze,dt,Se,Re,A.DEPTH_BUFFER_BIT,A.NEAREST);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||_e.has(b)){const Jn=_e.get(b),fn=_e.get(B);ae.bindFramebuffer(A.READ_FRAMEBUFFER,Gt),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Wt);for(let Mn=0;Mn<Ae;Mn++)wt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Jn.__webglTexture,F,Ne+Mn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Jn.__webglTexture,F),Kn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fn.__webglTexture,se,Bt+Mn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fn.__webglTexture,se),F!==0?A.blitFramebuffer(Fe,Ve,Se,Re,Ze,dt,Se,Re,A.COLOR_BUFFER_BIT,A.NEAREST):Kn?A.copyTexSubImage3D(Qt,se,Ze,dt,Bt+Mn,Fe,Ve,Se,Re):A.copyTexSubImage2D(Qt,se,Ze,dt,Fe,Ve,Se,Re);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Kn?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Qt,se,Ze,dt,Bt,Se,Re,Ae,ut,ke,It.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(Qt,se,Ze,dt,Bt,Se,Re,Ae,ut,It.data):A.texSubImage3D(Qt,se,Ze,dt,Bt,Se,Re,Ae,ut,ke,It):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,se,Ze,dt,Se,Re,ut,ke,It.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,se,Ze,dt,It.width,It.height,ut,It.data):A.texSubImage2D(A.TEXTURE_2D,se,Ze,dt,Se,Re,ut,ke,It);A.pixelStorei(A.UNPACK_ROW_LENGTH,pt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ai),A.pixelStorei(A.UNPACK_SKIP_PIXELS,rs),A.pixelStorei(A.UNPACK_SKIP_ROWS,In),A.pixelStorei(A.UNPACK_SKIP_IMAGES,so),se===0&&B.generateMipmaps&&A.generateMipmap(Qt),ae.unbindTexture()},this.copyTextureToTexture3D=function(b,B,q=null,W=null,F=0){return b.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,W=arguments[1]||null,b=arguments[2],B=arguments[3],F=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,q,W,F)},this.initRenderTarget=function(b){_e.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,ae.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class BM extends ah{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new qg(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new zM(e)}}class zM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=kM(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function kM(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=HM(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function HM(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new e0;let a,l,c,u,h,f,d,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+n,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+n,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,d=g[m++]*e+t,_=g[m++]*e+n,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class VM extends oh{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}let ei,hi,_n,Hr,xs,Da,Fi,vo=!1,dc=!0,pc=0,mc=0,Gf=0,Wf=0,Xf=0,Yf=0;const _c={high:{pixelRatioMax:2,antialias:!0,curveSegments:8,bevelSegments:3,desktopParticles:90,mobileParticles:40,precision:"highp",desktopLetters:16,mobileLetters:8,enablePointLight:!0},mid:{pixelRatioMax:1.75,antialias:!0,curveSegments:6,bevelSegments:2,desktopParticles:50,mobileParticles:25,precision:"highp",desktopLetters:14,mobileLetters:8,enablePointLight:!0},low:{pixelRatioMax:1.25,antialias:!1,curveSegments:4,bevelSegments:2,desktopParticles:25,mobileParticles:15,precision:"mediump",desktopLetters:10,mobileLetters:6,enablePointLight:!1}};function GM(){const r=window.innerWidth<768||typeof navigator<"u"&&navigator.maxTouchPoints>1,e=typeof navigator<"u"&&navigator.hardwareConcurrency||4,t=typeof navigator<"u"&&navigator.deviceMemory||4;return e<=2||t<=2?"low":!r&&e>=6||r&&e>=8&&t>=6?"high":"mid"}function Sp(r){const e=document.getElementById("three-canvas");if(!e)return;qf(),vo=!1;const t=U=>{U.preventDefault(),console.warn("[ThreeScene] WebGL context lost. Hiding canvas to prevent white artifacts."),e.style.display="none",Hr&&(cancelAnimationFrame(Hr),Hr=null)},n=()=>{console.log("[ThreeScene] WebGL context restored. Rebuilding scene."),e.style.display="block",Sp(r)};e.addEventListener("webglcontextlost",t,{once:!0}),e.addEventListener("webglcontextrestored",n,{once:!0});const i=window.innerWidth<768||typeof navigator<"u"&&navigator.maxTouchPoints>1;let s=GM(),o=_c[s];console.log(`[ThreeScene] Device capability tier: "${s}" (Cores: ${navigator.hardwareConcurrency||"N/A"}, RAM: ${navigator.deviceMemory||"N/A"}GB)`),ei=new og,ei.background=null;const a=window.innerWidth/window.innerHeight;hi=new kn(45,a,.1,90),hi.position.set(0,0,32),_n=new OM({canvas:e,antialias:o.antialias,alpha:!0,powerPreference:"high-performance",precision:o.precision}),_n.setClearColor(0,0),_n.clear();const l=()=>{const U=window.devicePixelRatio||1;return i?s==="high"?Math.min(U,1.5):s==="mid"?Math.min(U,1.25):Math.min(U,1):Math.min(U,o.pixelRatioMax)};_n.setSize(window.innerWidth,window.innerHeight),_n.setPixelRatio(l());const c=new Jg(10910811,.95);ei.add(c);const u=new _f(16447216,2);u.position.set(15,20,20),ei.add(u);const h=new _f(5123611,3);h.position.set(-18,-12,-10),ei.add(h),o.enablePointLight&&(Fi=new Zg(13480347,2.2,45),Fi.position.set(0,0,15),ei.add(Fi)),xs=new _o,ei.add(xs),new BM().load("/mr-ahmed-samir-portfolio/fonts/serif_bold.json",U=>{if(vo)return;const O=["E","N","G","L","I","S","H","A","M","S","R","X","V","K","Q","Z"],k=i?o.mobileLetters:o.desktopLetters,H=O.slice(0,k),X=[new rc({color:5123611,emissive:1313284,metalness:.4,roughness:.25}),new rc({color:7225895,emissive:1969670,metalness:.5,roughness:.3}),new rc({color:9329208,emissive:2363912,metalness:.35,roughness:.35})],ne=i?[{x:-8.5,y:13.5,z:-14,size:1.6},{x:-8,y:4.5,z:-18,size:1.8},{x:-8.5,y:-4.5,z:-15,size:1.6},{x:-7.5,y:-13.5,z:-20,size:1.9},{x:8.5,y:12,z:-16,size:1.7},{x:8,y:3,z:-14,size:1.5},{x:8.5,y:-6,z:-19,size:1.8},{x:7.5,y:-15,z:-15,size:1.6}]:[{x:-28,y:11,z:-14,size:2.2},{x:-25,y:2,z:-18,size:2},{x:-29,y:-6,z:-22,size:2.3},{x:-24,y:-13,z:-16,size:1.9},{x:-16,y:13.5,z:-20,size:2.1},{x:-5,y:14.5,z:-16,size:1.8},{x:9,y:14,z:-22,size:2.2},{x:23,y:13,z:-18,size:2},{x:28,y:7.5,z:-16,size:2},{x:26,y:-.5,z:-20,size:2.2},{x:30,y:-8,z:-18,size:2.1},{x:25,y:-14,z:-22,size:2.4},{x:-14,y:-3,z:-30,size:2.8},{x:14,y:-6,z:-28,size:2.6},{x:2,y:8,z:-32,size:2.9},{x:16,y:9.5,z:-26,size:2.4}];H.forEach((L,ce)=>{const De=ne[ce%ne.length],$e=De.size||1.8,$=new VM(L,{font:U,size:$e,depth:.28,curveSegments:o.curveSegments,bevelEnabled:!0,bevelThickness:.05,bevelSize:.03,bevelOffset:0,bevelSegments:o.bevelSegments});$.center();const oe=X[ce%X.length],he=new yi($,oe),re=De.x,ye=De.y,Be=De.z;he.position.set(re,ye,Be);const Ce=Math.random()*Math.PI,He=Math.random()*Math.PI,te=Math.random()*Math.PI;he.rotation.set(Ce,He,te),he.userData={baseX:re,baseY:ye,baseZ:Be,baseRotX:Ce,baseRotY:He,baseRotZ:te,rotSpeedX:(Math.random()-.5)*.008+.003,rotSpeedY:(Math.random()-.5)*.01+.004,rotSpeedZ:(Math.random()-.5)*.005,floatFreqX:.35+Math.random()*.25,floatFreqY:.45+Math.random()*.3,floatFreqZ:.3+Math.random()*.25,ampX:.4+Math.random()*.3,ampY:.5+Math.random()*.4,ampZ:.8+Math.random()*.5,phase:ce/H.length*Math.PI*2},xs.add(he)})});const _=i?o.mobileParticles:o.desktopParticles,g=new Ci,m=new Float32Array(_*3);for(let U=0;U<_*3;U+=3)m[U]=(Math.random()-.5)*55,m[U+1]=(Math.random()-.5)*45,m[U+2]=-8-Math.random()*25;g.setAttribute("position",new _i(m,3));const p=new rp({color:10910811,size:i?.18:.22,transparent:!0,opacity:.4,blending:Lc});Da=new cg(g,p),ei.add(Da);const E=U=>{pc=(U.clientX/window.innerWidth-.5)*2,mc=(U.clientY/window.innerHeight-.5)*2,Gf=pc*2.2,Wf=-mc*1.6,Fi&&(Xf=pc*16,Yf=-mc*10)};i||window.addEventListener("mousemove",E,{passive:!0});let S=window.innerWidth,v=window.innerHeight;const C=()=>{if(vo||!_n||!hi)return;const U=window.innerWidth,O=window.innerHeight;i&&Math.abs(U-S)<2&&Math.abs(O-v)<140||(S=U,v=O,hi.aspect=U/O,hi.updateProjectionMatrix(),_n.setSize(U,O),_n.setPixelRatio(l()))};window.addEventListener("resize",C,{passive:!0});const R=()=>{dc=!document.hidden};document.addEventListener("visibilitychange",R);const T=new Qg;let P=0,M=performance.now(),x=0;function D(){if(vo||(Hr=requestAnimationFrame(D),!dc))return;P++;const U=performance.now();if(U-M>=1e3){const k=P*1e3/(U-M);P=0,M=U,k<40&&dc?(x++,x>=2&&(s==="high"?(s="mid",o=_c.mid,_n.setPixelRatio(l()),console.warn('[ThreeScene FPS Watchdog] Downscaled quality tier to "mid" for smooth 60 FPS')):s==="mid"&&(s="low",o=_c.low,_n.setPixelRatio(l()),console.warn('[ThreeScene FPS Watchdog] Downscaled quality tier to "low" for smooth 60 FPS')),x=0)):x=Math.max(0,x-1)}const O=T.getElapsedTime();i||(hi.position.x+=(Gf-hi.position.x)*.05,hi.position.y+=(Wf-hi.position.y)*.05,hi.lookAt(0,0,0),Fi&&(Fi.position.x+=(Xf-Fi.position.x)*.08,Fi.position.y+=(Yf-Fi.position.y)*.08)),xs&&xs.children.length>0&&xs.children.forEach(k=>{const H=k.userData;k.rotation.x=H.baseRotX+O*(H.rotSpeedX*60),k.rotation.y=H.baseRotY+O*(H.rotSpeedY*60),k.rotation.z=H.baseRotZ+O*(H.rotSpeedZ*60),k.position.x=H.baseX+Math.sin(O*H.floatFreqX+H.phase)*H.ampX,k.position.y=H.baseY+Math.cos(O*H.floatFreqY+H.phase)*H.ampY,k.position.z=H.baseZ+Math.sin(O*H.floatFreqZ+H.phase)*H.ampZ}),Da&&(Da.rotation.y=O*.015),_n.render(ei,hi),typeof r=="function"&&(r(),r=null)}return D(),()=>{qf(),i||window.removeEventListener("mousemove",E),window.removeEventListener("resize",C),document.removeEventListener("visibilitychange",R)}}function qf(){vo=!0,Hr&&(cancelAnimationFrame(Hr),Hr=null),ei&&(ei.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(e=>e.dispose()):r.material.dispose())}),ei=null),_n&&(_n.dispose(),_n.forceContextLoss(),_n=null)}function Bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Mp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},uh,nn,At,ri=1e8,yt=1/ri,bu=Math.PI*2,WM=bu/4,XM=0,yp=Math.sqrt,YM=Math.cos,qM=Math.sin,jt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Zi=function(e){return typeof e=="number"},hh=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},An=function(e){return e!==!1},fh=function(){return typeof window<"u"},La=function(e){return Ut(e)||jt(e)},Ep=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,$M=/random\([^)]+\)/g,ZM=/,\s*/g,$f=/(?:-?\.?\d|\.)+/gi,Tp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bp=/[+-]=-?[.\d]+/,KM=/[^,'"\[\]\s]+/gi,JM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,gi,wu,dh,qn={},ul={},wp,Ap=function(e){return(ul=Zs(e,qn))&&Dn},ph=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xo=function(e,t){return!t&&console.warn(e)},Cp=function(e,t){return e&&(qn[e]=t)&&ul&&(ul[e]=t)||qn},Yo=function(){return 0},jM={suppressEvents:!0,isStart:!0,kill:!1},ja={suppressEvents:!0,kill:!1},QM={suppressEvents:!0},mh={},fr=[],Au={},Rp,zn={},vc={},Zf=30,Qa=[],_h="",gh=function(e){var t=e[0],n,i;if(Ai(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qa.length;i--&&!Qa[i].targetTest(t););n=Qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jp(e[i],n)))||e.splice(i,1);return e},Wr=function(e){return e._gsap||gh(si(e))[0]._gsap},Pp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():hh(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ey=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=fr.length,t=fr.slice(0),n,i;for(Au={},fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vh=function(e){return!!(e._initted||e._startAt||e.add)},Dp=function(e,t,n,i){fr.length&&!nn&&hl(),e.render(t,n,!!(nn&&t<0&&vh(e))),fr.length&&!nn&&hl()},Lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(KM).length<2?t:jt(e)?e.trim():e},Ip=function(e){return e},$n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ty=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Zs=function(e,t){for(var n in t)e[n]=t[n];return e},Kf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ai(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Co=function(e){var t=e.parent||Rt,n=e.keyframes?ty(un(e.keyframes)):$n;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ny=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Up=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},wl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},iy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cu=function(e,t,n,i){return e._startAt&&(nn?e._startAt.revert(ja):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ry=function r(e){return!e||e._ts&&r(e.parent)},Jf=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Al=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},Cl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Al(e),n._dirty||Xr(n,e)),e},Np=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dl(e.rawTime(),t),(!t._dur||ra(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),Xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},Si=function(e,t,n,i){return t.parent&&gr(t),t._start=Ct((Zi(n)?n:n||e!==Rt?Qn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Up(e,t,"_first","_last",e._sort?"_start":0),Ru(t)||(e._recent=t),i||Np(e,t),e._ts<0&&Cl(e,e._tTime),e},Fp=function(e,t){return(qn.ScrollTrigger||ph("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},Op=function(e,t,n,i,s){if(Sh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rp!==Vn.frame)return fr.push(e),e._lazy=[s,i],1},sy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ru=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oy=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&sy(e)&&!(!e._initted&&Ru(e))||(e._ts<0||e._dp._ts<0)&&!Ru(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ra(0,e._tDur,t),u=Ks(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ks(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||i||e._zTime===yt||!t&&e._zTime){if(!e._initted&&Op(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Cu(e,t,n,!0),e._onUpdate&&!n&&Wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&gr(e,1),!n&&!nn&&(Wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ay=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Js=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Cl(e,e._tTime=e._tDur*a),e.parent&&Al(e),n||Xr(e.parent,e),e},jf=function(e){return e instanceof Tn?Xr(e):Js(e,e._dur)},ly={_start:0,endTime:Yo,totalDuration:Yo},Qn=function r(e,t,n){var i=e.labels,s=e._recent||ly,o=e.duration()>=ri?s.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ro=function(e,t,n){var i=Zi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},Mr=function(e,t){return e||e===0?t(e):t},ra=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!jt(e)||!(t=JM.exec(e))?"":t[1]},cy=function(e,t,n){return Mr(n,function(i){return ra(e,t,i)})},Pu=[].slice,Bp=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==gi},uy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||Bp(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(e,t,n){return At&&!t&&At.selector?At.selector(e):jt(e)&&!n&&(wu||!js())?Pu.call((t||dh).querySelectorAll(e),0):un(e)?uy(e,n):Bp(e)?Pu.call(e,0):e?[e]:[]},Du=function(e){return e=si(e)[0]||Xo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return si(t,n.querySelectorAll?n:n===e?Xo("Invalid scope")||dh.createElement("div"):e)}},zp=function(e){return e.sort(function(){return .5-Math.random()})},kp=function(e){if(Ut(e))return e;var t=Ai(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,E,S,v,C,R,T,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ri])[1],!M){for(T=-ri;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*u-.5:i%M,E=M===ri?0:l?g*h/M-.5:i/M|0,T=0,P=ri,R=0;R<g;R++)S=R%M-p,v=E-(R/M|0),m[R]=C=c?Math.abs(c==="y"?v:S):yp(S*S+v*v),C>T&&(T=C),C<P&&(P=C);i==="random"&&zp(m),m.max=T-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=ln(t.amount||t.each)||0,n=n&&g<0?Ey(n):n}return g=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(g):g)*m.v)+m.u}},Lu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zi(n)?0:ln(n))}},Hp=function(e,t){var n=un(e),i,s;return!n&&Ai(e)&&(i=n=e.radius||ri,e.values?(e=si(e.values),(s=!Zi(e[0]))&&(i*=i)):e=Lu(e.increment)),Mr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ri,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Zi(o)?u:u+ln(o)}:Lu(e))},Vp=function(e,t,n,i){return Mr(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},hy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},fy=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},dy=function(e,t,n){return Wp(e,t,0,1,n)},Gp=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},py=function r(e,t,n){var i=t-e;return un(e)?Gp(e,r(0,e.length),t):Mr(n,function(s){return(i+(s-e)%i)%i+e})},my=function r(e,t,n){var i=t-e,s=i*2;return un(e)?Gp(e,r(0,e.length-1),t):Mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},qo=function(e){return e.replace($M,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ZM);return Vp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Wp=function(e,t,n,i,s){var o=t-e,a=i-n;return Mr(s,function(l){return n+((l-e)/o*a||0)})},_y=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=jt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Zs(un(e)?[]:{},e));if(!u){for(l in t)xh.call(a,e,l,"get",t[l]);s=function(_){return Eh(_,a)||(o?e.p:e)}}}return Mr(n,s)},Qf=function(e,t,n){var i=e.labels,s=ri,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&fr.length&&hl(),a&&(At=a),u=l?s.apply(c,l):s.call(c),At=o,u},xo=function(e){return gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Wn(e,"onInterrupt"),e},Rs,Xp=[],Yp=function(e){if(e)if(e=!e.name&&e.default||e,fh()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Yo,render:Eh,add:xh,kill:Iy,modifier:Ly,rawVars:0},o={targetTest:0,get:0,getSetter:yh,aliases:{},register:0};if(js(),e!==i){if(zn[t])return;$n(i,$n(fl(e,s),o)),Zs(i.prototype,Zs(s,fl(e,o))),zn[i.prop=t]=i,e.targetTest&&(Qa.push(i),mh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cp(t,i),e.register&&e.register(Dn,i,Rn)}else Xp.push(e)},Mt=255,So={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},xc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},qp=function(e,t,n){var i=e?Zi(e)?[e>>16,e>>8&Mt,e&Mt]:0:So.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),So[e])i=So[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match($f),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=xc(l+1/3,s,o),i[1]=xc(l,s,o),i[2]=xc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Tp),n&&i.length<4&&(i[3]=1),i}else i=e.match($f)||So.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},$p=function(e){var t=[],n=[],i=-1;return e.split(dr).forEach(function(s){var o=s.match(Cs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ed=function(e,t,n){var i="",s=(e+i).match(dr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=qp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=$p(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(dr,"1").split(Cs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(dr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},dr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in So)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),gy=/hsl[a]?\(/,Zp=function(e){var t=e.join(" "),n;if(dr.lastIndex=0,dr.test(t))return n=gy.test(t),e[1]=ed(e[1],n),e[0]=ed(e[0],n,$p(e[1])),!0},$o,Vn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,E=m===!0,S,v,C,R;if((p>e||p<0)&&(n+=p-t),i+=p,C=i-n,S=C-o,(S>0||E)&&(R=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,o+=S+(S>=s?4:s-S),v=1),E||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](C,f,R,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){wp&&(!wu&&fh()&&(gi=wu=window,dh=gi.document||{},qn.gsap=Dn,(gi.gsapVersions||(gi.gsapVersions=[])).push(Dn.version),Ap(ul||gi.GreenSockGlobals||!gi.gsap&&gi||{}),Xp.forEach(Yp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},$o=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),$o=0,c=Yo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,E){var S=p?function(v,C,R,T){m(v,C,R,T),h.remove(S)}:m;return h.remove(m),a[E?"unshift":"push"](S),js(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),js=function(){return!$o&&Vn.wake()},ot={},vy=/^[\d.\-M][\d.\-,\s]/,xy=/["']/g,Sy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(xy,"").trim():+c,i=l.substr(a+1).trim();return t},My=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yy=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Sy(t[1])]:My(e).split(",").map(Lp)):ot._CE&&vy.test(e)?ot._CE("",e):n},Ey=function(e){return function(t){return 1-e(1-t)}},Yr=function(e,t){return e&&(Ut(e)?e:ot[e]||yy(e))||t},is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Cn(e,function(a){ot[a]=qn[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},Kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/bu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*qM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Kp(a);return s=bu/s,l.config=function(c,u){return r(e,c,u)},l},Mc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kp(n);return i.config=function(s){return r(e,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;is("Elastic",Sc("in"),Sc("out"),Sc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});is("Circ",function(r){return-(yp(1-r*r)-1)});is("Sine",function(r){return r===1?1:-YM(r*WM)+1});is("Back",Mc("in"),Mc("out"),Mc());ot.SteppedEase=ot.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-yt;return function(a){return((i*ra(0,o,a)|0)+s)*n}}};Wo.ease=ot["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _h+=r+","+r+"Params,"});var Jp=function(e,t){this.id=XM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pp,this.set=t?t.getSetter:yh},Zo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Js(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),$o||Vn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cl(this,n),!s._dp||s.parent||Np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Al(this),iy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=QM);var i=nn;return nn=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-yt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-yt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ut(n)?n:Ip,l=function(){var u=i.then;i.then=null,s&&s(),Ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){xo(this)},r})();$n(Zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){Mp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Rt&&Si(n.parent||Rt,Bi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Fp(Bi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ro(0,arguments,this),this},t.from=function(i,s,o){return Ro(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ro(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,Qn(this,o),1),this},t.call=function(i,s,o){return Si(this,Ht.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(i,o,Qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Co(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Co(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,E,S,v,C,R,T;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ct(u%m),u===l?(g=this._repeat,f=c):(C=Ct(u/m),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=Ks(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),R&&g&1&&(f=c-f,T=1),g!==C&&!this._lock){var P=R&&C&1,M=P===(R&&g&1);if(g<C&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ct(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=ay(this,Ct(a),Ct(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!C&&(Wn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){E=0,_&&(u+=this._zTime=-yt);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||nn&&vh(d)),f!==this._time||!this._ts&&!p){E=0,_&&(u+=this._zTime=x?-yt:yt);break}}d=_}}if(E&&!s&&(this.pause(),E.render(f>=a?0:-yt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Al(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Zi(s)||(s=Qn(this,s,i)),!(i instanceof Zo)){if(un(i))return i.forEach(function(a){return o.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(Ut(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Si(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&wl(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ht.delayedCall(0,s||Yo,o);return a.data="isPause",this._hasPause=1,Si(this,a,Qn(this,i))},t.removePause=function(i){var s=this._first;for(i=Qn(this,i);s;)s._start===i&&s.data==="isPause"&&gr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=si(i),l=this._first,c=Zi(s),u;l;)l instanceof Ht?ey(l._targets,a)&&(c?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Qn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Ht.to(o,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||yt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Js(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,$n({startAt:{time:Qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Qf(this,Qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Qf(this,Qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Xr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ri,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Si(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Js(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Dp(Rt,dl(i,Rt)),Rp=Vn.frame),Vn.frame>=Zf){Zf+=Yn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&Yn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},e})(Zo);$n(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ty=function(e,t,n,i,s,o,a){var l=new Rn(this._pt,e,t,0,1,im,null,s),c=0,u=0,h,f,d,_,g,m,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=qo(i)),o&&(E=[n,i],o(E,e,t),n=E[0],i=E[1]),f=n.match(gc)||[];h=gc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ns(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=gc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(bp.test(i)||p)&&(l.e=0),this._pt=l,l},xh=function(e,t,n,i,s,o,a,l,c,u){Ut(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ut(h)?c?Ry:tm:Mh,_;if(jt(i)&&(~i.indexOf("random(")&&(i=qo(i)),i.charAt(1)==="="&&(_=Ns(f,i)+(ln(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Iu)return!isNaN(f*i)&&i!==""?(_=new Rn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Dy:nm,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&ph(t,i),Ty.call(this,e,t,f,i,d,l||Yn.stringFilter,c))},by=function(e,t,n,i,s){if(Ut(e)&&(e=Po(e,s,t,n,i)),!Ai(e)||e.style&&e.nodeType||un(e)||Ep(e))return jt(e)?Po(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Po(e[a],s,t,n,i);return o},jp=function(e,t,n,i,s,o){var a,l,c,u;if(zn[e]&&(a=new zn[e]).init(s,a.rawVars?t[e]:by(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},sr,Iu,Sh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!uh,v=e.timeline,C=i.easeReverse||h,R,T,P,M,x,D,U,O,k,H,X,Y,V;if(v&&(!f||!s)&&(s="none"),e._ease=Yr(s,Wo.ease),e._rEase=C&&(Yr(C)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if(O=m[0]?Wr(m[0]).harness:0,Y=O&&i[O.prop],R=fl(i,mh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?ja:jM),g._lazy=0),o){if(gr(e._startAt=Ht.set(m,$n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!a&&!d)&&e._startAt.revert(ja),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),P=$n({overwrite:!1,data:"isFromStart",lazy:a&&!g&&An(l),immediateRender:a,stagger:0,parent:p},R),Y&&(P[O.prop]=Y),gr(e._startAt=Ht.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(ja):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],U=x._gsap||gh(m)[T]._gsap,e._ptLookup[T]=H={},Au[U.id]&&fr.length&&hl(),X=E===m?T:E.indexOf(x),O&&(k=new O).init(x,Y||R,e,X,E)!==!1&&(e._pt=M=new Rn(e._pt,x,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ne){H[ne]=M}),k.priority&&(D=1)),!O||Y)for(P in R)zn[P]&&(k=jp(P,R,e,X,x,E))?k.priority&&(D=1):H[P]=M=xh.call(e,x,P,"get",R[P],X,E,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),S&&e._pt&&(sr=e,Rt.killTweensOf(x,H,e.globalTime(t)),V=!e.parent,sr=0),e._pt&&l&&(Au[U.id]=1)}D&&rm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,f&&t<=0&&v.render(ri,!0,!0)},wy=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Iu=1,e.vars[t]="+=0",Sh(e,a),Iu=0,l?Xo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ft(n)+ln(h.e)),h.b&&(h.b=u.s+ln(h.b))},Ay=function(e,t){var n=e[0]?Wr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Zs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Cy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Po=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?qo(e):e},Qp=_h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",em={};Cn(Qp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return em[r]=1});var Ht=(function(r){Mp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Co(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Rt,E=(un(n)||Ep(n)?Zi(n[0]):"length"in i)?[n]:si(n),S,v,C,R,T,P,M,x;if(a._targets=E.length?gh(E):Xo("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||La(c)||La(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(S=a.timeline=new Tn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:E}),S.kill(),S.parent=S._dp=Bi(a),S._start=0,f||La(c)||La(u)){if(R=E.length,M=f&&kp(f),Ai(f))for(T in f)~Qp.indexOf(T)&&(x||(x={}),x[T]=f[T]);for(v=0;v<R;v++)C=fl(i,em),C.stagger=0,D&&(C.easeReverse=D),x&&Zs(C,x),P=E[v],C.duration=+Po(c,Bi(a),v,P,E),C.delay=(+Po(u,Bi(a),v,P,E)||0)-a._delay,!f&&R===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(P,C,M?M(v,P,E):0),S._ease=ot.none;S.duration()?c=u=0:a.timeline=0}else if(_){Co($n(S.vars.defaults,{ease:"none"})),S._ease=Yr(_.ease||i.ease||"none");var U=0,O,k,H;if(un(_))_.forEach(function(X){return S.to(E,X,">")}),S.duration();else{C={};for(T in _)T==="ease"||T==="easeEach"||Cy(T,_[T],C,_.easeEach);for(T in C)for(O=C[T].sort(function(X,Y){return X.t-Y.t}),U=0,v=0;v<O.length;v++)k=O[v],H={ease:k.e,duration:(k.t-(v?O[v-1].t:0))/100*c},H[T]=k.v,S.to(E,H,U),U+=H.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!uh&&(sr=Bi(a),Rt.killTweensOf(E),sr=0),Si(p,Bi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ct(p._time)&&An(h)&&ry(Bi(a))&&p.data!=="nested")&&(a._tTime=-yt,a.render(Math.max(0,-u)||0)),m&&Fp(Bi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-yt&&!u?l:i<yt?0:i,f,d,_,g,m,p,E,S;if(!c)oy(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ct(h%g),h===l?(_=this._repeat,f=c):(m=Ct(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=Ks(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ct(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Op(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var C=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(v?-1:1)/C:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(f/c);if(this._from&&(this.ratio=E=1-E),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Wn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Cu(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&gr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){$o||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sh(this,c),u=this._ease(c/this._dur),wy(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Cl(this,0),this.parent||Up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,sr&&sr.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?si(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&ny(a,l))return s==="all"&&(this._pt=0),xo(this);for(h=this._op=this._op||[],s!=="all"&&(jt(s)&&(g={},Cn(s,function(E){return g[E]=1}),s=g),s=Ay(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&wl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&xo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ro(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ro(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e})(Zo);$n(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new Tn,t=Pu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mh=function(e,t,n){return e[t]=n},tm=function(e,t,n){return e[t](n)},Ry=function(e,t,n,i){return e[t](i.fp,n)},Py=function(e,t,n){return e.setAttribute(t,n)},yh=function(e,t){return Ut(e[t])?tm:hh(e[t])&&e.setAttribute?Py:Mh},nm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Dy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},im=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Eh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ly=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Iy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Uy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Rn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||nm,this.d=l||this,this.set=c||Mh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Uy,this.m=n,this.mt=s,this.tween=i},r})();Cn(_h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return mh[r]=1});qn.TweenMax=qn.TweenLite=Ht;qn.TimelineLite=qn.TimelineMax=Tn;Rt=new Tn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=Zp;var qr=[],el={},Ny=[],td=0,Fy=0,yc=function(e){return(el[e]||Ny).map(function(t){return t()})},Uu=function(){var e=Date.now(),t=[];e-td>2&&(yc("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=gi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),yc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),td=e,yc("matchMedia"))},sm=(function(){function r(t,n){this.selector=n&&Du(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=At,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Du(s)),At=o,h=i.apply(o,arguments),Ut(h)&&o._r.push(h),At=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=qr.length;o--;)qr[o].id===this.id&&qr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Oy=(function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ai(n)||(n={matches:n});var o=new sm(0,s||this.scope),a=o.conditions={},l,c,u;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=gi.matchMedia(n[c]),l&&(qr.indexOf(o)<0&&qr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uu):l.addEventListener("change",Uu)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Yp(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=si(e)[0]);var s=Wr(e||{}).get,o=n?Ip:Lp;return n==="native"&&(n=""),e&&(t?o((zn[t]&&zn[t].get||s)(e,t,n,i)):function(a,l,c){return o((zn[a]&&zn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=si(e),e.length>1){var i=e.map(function(u){return Dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=zn[t],a=Wr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Rs._pt=0,h.init(e,n?u+n:u,Rs,0,[e]),h.render(1,h),Rs._pt&&Eh(1,Rs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Dn.to(e,$n((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,Wo.ease)),Kf(Wo,e||{})},config:function(e){return Kf(Yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!zn[a]&&!qn[a]&&Xo(t+" effect requires "+a+" plugin.")}),vc[t]=function(a,l,c){return n(si(a),$n(l||{},s),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(vc[t](a,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):ot},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=s;return Si(Rt,n,0),n},context:function(e,t){return e?new sm(e,t):At},matchMedia:function(e){return new Oy(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Uu()},addEventListener:function(e,t){var n=el[e]||(el[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=el[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:py,wrapYoyo:my,distribute:kp,random:Vp,snap:Hp,normalize:dy,getUnit:ln,clamp:cy,splitColor:qp,toArray:si,selector:Du,mapRange:Wp,pipe:hy,unitize:fy,interpolate:_y,shuffle:zp},install:Ap,effects:vc,ticker:Vn,updateRoot:Tn.updateRoot,plugins:zn,globalTimeline:Rt,core:{PropTween:Rn,globals:Cp,Tween:Ht,Timeline:Tn,Animation:Zo,getCache:Wr,_removeLinkedListItem:wl,reverting:function(){return nn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return uh=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=Ht[r]});Vn.add(Tn.updateRoot);Rs=pl.to({},{duration:0});var By=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zy=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=By(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ec=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(jt(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}zy(a,s)}}}},Dn=pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ec("roundProps",Lu),Ec("modifiers"),Ec("snap",Hp))||pl;Ht.version=Tn.version=Dn.version="3.15.0";wp=1;fh()&&js();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nd,or,Fs,Th,Vr,id,bh,ky=function(){return typeof window<"u"},Ki={},Ur=180/Math.PI,Os=Math.PI/180,Ss=Math.atan2,rd=1e8,wh=/([A-Z])/g,Hy=/(left|right|width|margin|padding|x)/i,Vy=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},om=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},am=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qy=function(e,t,n){return e.style[t]=n},$y=function(e,t,n){return e.style.setProperty(t,n)},Zy=function(e,t,n){return e._gsap[t]=n},Ky=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},jy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Pn=Dt+"Origin",Qy=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=zi(i,a)}):this.tfm[e]=o.x?o[e]:zi(i,e),e===Pn&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},lm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bh(),(!s||!s.isStart)&&!n[Dt]&&(lm(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cm=function(e,t){var n={target:e,props:[],revert:eE,save:Qy};return e._gsap||Dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},um,Fu=function(e,t){var n=or.createElementNS?or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):or.createElement(e);return n&&n.style?n:or.createElement(e)},Xn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qs(t)||t,1)||""},sd="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||Vr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(sd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?sd[o]:"")+e},Ou=function(){ky()&&window.document&&(nd=window,or=nd.document,Fs=or.documentElement,Vr=Fu("div")||{style:{}},Fu("div"),Dt=Qs(Dt),Pn=Dt+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",um=!!Qs("perspective"),bh=Dn.core.reverting,Th=1)},od=function(e){var t=e.ownerSVGElement,n=Fu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fs.removeChild(n),s},ad=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hm=function(e){var t,n;try{t=e.getBBox()}catch{t=od(e),n=1}return t&&(t.width||t.height)||n||(t=od(e)),t&&!t.width&&!t.x&&!t.y?{x:+ad(e,["x","cx","x1"])||0,y:+ad(e,["y","cy","y1"])||0,width:0,height:0}:t},fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hm(e))},vr=function(e,t){if(t){var n=e.style,i;t in Ki&&t!==Pn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wh,"-$1").toLowerCase())):n.removeAttribute(t)}},ar=function(e,t,n,i,s,o){var a=new Rn(e._pt,t,n,0,1,o?am:om);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},ld={deg:1,rad:1,turn:1},tE={grid:1,flex:1},xr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vr.style,l=Hy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||ld[i]||ld[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&fm(e),(d||o==="%")&&(Ki[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ft(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===or||!g.appendChild)&&(g=or.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Vn.time&&!m.uncache)return Ft(s/m.width*h);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,_=e[u],E?e.style[t]=E:vr(e,t)}else(d||o==="%")&&!tE[Xn(g,"display")]&&(a.position=Xn(e,"position")),g===e&&(a.position="static"),g.appendChild(Vr),_=Vr[u],g.removeChild(Vr),a.position="absolute";return l&&d&&(m=Wr(g),m.time=Vn.time,m.width=g[u]),Ft(f?_*s/h:_&&s?h/_*s:0)},zi=function(e,t,n,i){var s;return Th||Ou(),t in Ei&&t!=="transform"&&(t=Ei[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ki[t]&&t!=="transform"?(s=Jo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_l(Xn(e,Pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[t]&&ml[t](e,t,n)||Xn(e,t)||Pp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xr(e,t,s,n)+n:s},nE=function(e,t,n,i){if(!n||n==="none"){var s=Qs(t,e,1),o=s&&Xn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Xn(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,im),l=0,c=0,u,h,f,d,_,g,m,p,E,S,v,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Xn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Xn(e,t)||i,g?e.style[t]=g:vr(e,t)),u=[n,i],Zp(u),n=u[0],i=u[1],f=n.match(Cs)||[],C=i.match(Cs)||[],C.length){for(;h=Cs.exec(i);)m=h[0],E=i.substring(l,h.index),_?_=(_+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Ns(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=Cs.lastIndex-S.length,S||(S=S||Yn.units[t]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=xr(e,t,g,S)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?am:om;return bp.test(i)&&(a.e=0),this._pt=a,a},cd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cd[n]||n,t[1]=cd[i]||i,t.join(" ")},rE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?Pn:Dt),vr(n,a);l&&(vr(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Jo(n,1),o.uncache=1,lm(i)))}},ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,rE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ko=[1,0,0,1,0,0],dm={},pm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ud=function(e){var t=Xn(e,Dt);return pm(t)?Ko:t.substr(7).match(Tp).map(Ft)},Ah=function(e,t){var n=e._gsap||Wr(e),i=e.style,s=ud(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ko:s):(s===Ko&&!e.offsetParent&&e!==Fs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Fs.appendChild(e)),s=ud(e),l?i.display=l:vr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bu=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ah(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],E=l[5],S=t.split(" "),v=parseFloat(S[0])||0,C=parseFloat(S[1])||0,R,T,P,M;n?l!==Ko&&(T=d*m-_*g)&&(P=v*(m/T)+C*(-g/T)+(g*E-m*p)/T,M=v*(-_/T)+C*(d/T)-(d*E-_*p)/T,v=P,C=M):(R=hm(e),v=R.x+(~S[0].indexOf("%")?v/100*R.width:v),C=R.y+(~(S[1]||S[0]).indexOf("%")?C/100*R.height:C)),i||i!==!1&&a.smooth?(p=v-c,E=C-u,a.xOffset=h+(p*d+E*g)-p,a.yOffset=f+(p*_+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Pn]="0px 0px",o&&(ar(o,a,"xOrigin",c,v),ar(o,a,"yOrigin",u,C),ar(o,a,"xOffset",h,a.xOffset),ar(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+C)},Jo=function(e,t){var n=e._gsap||new Jp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Xn(e,Pn)||"0",u,h,f,d,_,g,m,p,E,S,v,C,R,T,P,M,x,D,U,O,k,H,X,Y,V,ne,L,ce,De,$e,$,oe;return u=h=f=g=m=p=E=S=v=0,d=_=1,n.svg=!!(e.getCTM&&fm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),T=Ah(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Bu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,R=n.yOrigin||0,T!==Ko&&(D=T[0],U=T[1],O=T[2],k=T[3],u=H=T[4],h=X=T[5],T.length===6?(d=Math.sqrt(D*D+U*U),_=Math.sqrt(k*k+O*O),g=D||U?Ss(U,D)*Ur:0,E=O||k?Ss(O,k)*Ur+g:0,E&&(_*=Math.abs(Math.cos(E*Os))),n.svg&&(u-=C-(C*D+R*O),h-=R-(C*U+R*k))):(oe=T[6],$e=T[7],L=T[8],ce=T[9],De=T[10],$=T[11],u=T[12],h=T[13],f=T[14],P=Ss(oe,De),m=P*Ur,P&&(M=Math.cos(-P),x=Math.sin(-P),Y=H*M+L*x,V=X*M+ce*x,ne=oe*M+De*x,L=H*-x+L*M,ce=X*-x+ce*M,De=oe*-x+De*M,$=$e*-x+$*M,H=Y,X=V,oe=ne),P=Ss(-O,De),p=P*Ur,P&&(M=Math.cos(-P),x=Math.sin(-P),Y=D*M-L*x,V=U*M-ce*x,ne=O*M-De*x,$=k*x+$*M,D=Y,U=V,O=ne),P=Ss(U,D),g=P*Ur,P&&(M=Math.cos(P),x=Math.sin(P),Y=D*M+U*x,V=H*M+X*x,U=U*M-D*x,X=X*M-H*x,D=Y,H=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Ft(Math.sqrt(D*D+U*U+O*O)),_=Ft(Math.sqrt(X*X+oe*oe)),P=Ss(H,X),E=Math.abs(P)>2e-4?P*Ur:0,v=$?1/($<0?-$:$):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pm(Xn(e,Dt)),Y&&e.setAttribute("transform",Y))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ft(d),n.scaleY=Ft(_),n.rotation=Ft(g)+a,n.rotationX=Ft(m)+a,n.rotationY=Ft(p)+a,n.skewX=E+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Pn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?oE:um?mm:sE,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tc=function(e,t,n){var i=ln(t);return Ft(parseFloat(t)+parseFloat(xr(e,"x",n+"px",i)))+i},sE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mm(e,t)},Rr="0deg",fo="0px",Pr=") ",mm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,S=n.zOrigin,v="",C=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==Rr||u!==Rr)){var R=parseFloat(u)*Os,T=Math.sin(R),P=Math.cos(R),M;R=parseFloat(h)*Os,M=Math.cos(R),o=Tc(E,o,T*M*-S),a=Tc(E,a,-Math.sin(R)*-S),l=Tc(E,l,P*M*-S+S)}m!==fo&&(v+="perspective("+m+Pr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(C||o!==fo||a!==fo||l!==fo)&&(v+=l!==fo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),c!==Rr&&(v+="rotate("+c+Pr),u!==Rr&&(v+="rotateY("+u+Pr),h!==Rr&&(v+="rotateX("+h+Pr),(f!==Rr||d!==Rr)&&(v+="skew("+f+", "+d+Pr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Pr),E.style[Dt]=v||"translate(0, 0)"},oE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,S=parseFloat(o),v=parseFloat(a),C,R,T,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Os,c*=Os,C=Math.cos(l)*h,R=Math.sin(l)*h,T=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Os,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,R*=M)),C=Ft(C),R=Ft(R),T=Ft(T),P=Ft(P)):(C=h,P=f,R=T=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=xr(d,"x",o,"px"),v=xr(d,"y",a,"px")),(_||g||m||p)&&(S=Ft(S+_-(_*C+g*T)+m),v=Ft(v+g-(_*R+g*P)+p)),(i||s)&&(M=d.getBBox(),S=Ft(S+i/100*M.width),v=Ft(v+s/100*M.height)),M="matrix("+C+","+R+","+T+","+P+","+S+","+v+")",d.setAttribute("transform",M),E&&(d.style[Dt]=M)},aE=function(e,t,n,i,s){var o=360,a=jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*rd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*rd)%o-~~(c/o)*o)),e._pt=f=new Rn(e._pt,t,n,i,c,Gy),f.e=u,f.u="deg",e._props.push(n),f},hd=function(e,t){for(var n in t)e[n]=t[n];return e},lE=function(e,t,n){var i=hd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Jo(n,1),vr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Jo(n,1),o[Dt]=c);for(l in Ki)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=ln(c),_=ln(u),h=d!==_?xr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Rn(e._pt,a,l,h,f-h,Nu),e._pt.u=_||0,e._props.push(l));hd(a,i)};Cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ml[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return zi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var _m={name:"css",register:Ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,E,S,v,C,R,T,P,M;Th||Ou(),this.styles=this.styles||cm(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(zn[g]&&jp(g,t,n,i,e,s)))){if(d=typeof u,_=ml[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=qo(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",dr.lastIndex=0,dr.test(c)||(m=ln(c),p=ln(u),p?m!==p&&(c=xr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],jt(c)&&~c.indexOf("random(")&&(c=qo(c)),ln(c+"")||c==="auto"||(c+=Yn.units[g]||ln(zi(e,g))||""),(c+"").charAt(1)==="="&&(c=zi(e,g))):c=zi(e,g),f=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),g in Ei&&(g==="autoAlpha"&&(f===1&&zi(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),ar(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ei[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Ki,S){if(this.styles.save(g),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Xn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Xn(e,"perspective"),x?e.style.perspective=x:vr(e,"perspective")}h=parseFloat(u)}if(v||(C=e._gsap,C.renderTransform&&!t.parseTransform||Jo(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,v=this._pt=new Rn(this._pt,a,Dt,0,1,C.renderTransform,C,0,-1),v.dep=1),g==="scale")this._pt=new Rn(this._pt,C,"scaleY",C.scaleY,(E?Ns(C.scaleY,E+h):h)-C.scaleY||0,Nu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Pn,0,a[Pn]),u=iE(u),C.svg?Bu(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&ar(this,C,"zOrigin",C.zOrigin,p),ar(this,a,g,_l(c),_l(u)));continue}else if(g==="svgOrigin"){Bu(e,u,1,R,0,this);continue}else if(g in dm){aE(this,C,g,f,E?Ns(f,E+u):u);continue}else if(g==="smoothOrigin"){ar(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){lE(this,u,e);continue}}else g in a||(g=Qs(g)||g);if(S||(h||h===0)&&(f||f===0)&&!Vy.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=ln(u)||(g in Yn.units?Yn.units[g]:m),m!==p&&(f=xr(e,g,c,p)),this._pt=new Rn(this._pt,S?C:a,g,f,(E?Ns(f,E+h):h)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Yy:Nu),this._pt.u=p||0,S&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=Xy):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Wy);else if(g in a)nE.call(this,e,g,c,E?E+u:u);else if(g in e)this.add(e,g,c||e[g],E?E+u:u,i,s);else if(g!=="parseTransform"){ph(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}T&&rm(this)},render:function(e,t){if(t.tween._time||!bh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:zi,aliases:Ei,getSetter:function(e,t,n){var i=Ei[t];return i&&i.indexOf(",")<0&&(t=i),t in Ki&&t!==Pn&&(e._gsap.x||zi(e,"x"))?n&&id===n?t==="scale"?Ky:Zy:(id=n||{})&&(t==="scale"?Jy:jy):e.style&&!hh(e.style[t])?qy:~t.indexOf("-")?$y:yh(e,t)},core:{_removeProperty:vr,_getMatrix:Ah}};Dn.utils.checkPrefix=Qs;Dn.core.getStyleSaver=cm;(function(r,e,t,n){var i=Cn(r+","+e+","+t,function(s){Ki[s]=1});Cn(e,function(s){Yn.units[s]="deg",dm[s]=1}),Ei[i[13]]=r+","+e,Cn(n,function(s){var o=s.split(":");Ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Dn.registerPlugin(_m);var Fn=Dn.registerPlugin(_m)||Dn;Fn.core.Tween;function cE(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function uE(r,e,t){return e&&cE(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var en,tl,Gn,lr,cr,Bs,gm,Nr,zs,vm,Wi,fi,xm,Sm=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},Mm=1,Ps=[],rt=[],bi=[],Do=Date.now,zu=function(e,t){return t},hE=function(){var e=zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,bi),rt=n,bi=i,zu=function(o,a){return t[o](a)}},pr=function(e,t){return~bi.indexOf(e)&&bi[bi.indexOf(e)+1][t]},Lo=function(e){return!!~vm.indexOf(e)},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ia="scrollLeft",Ua="scrollTop",ku=function(){return Wi&&Wi.isPressed||rt.cache++},gl=function(e,t){var n=function i(s){if(s||s===0){Mm&&(Gn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),e(s),i.cacheID=rt.cache,o&&zu("ss",s)}else(t||rt.cache!==i.cacheID||zu("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Ia,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gl(function(r){return arguments.length?Gn.scrollTo(r,Yt.sc()):Gn.pageXOffset||lr[Ia]||cr[Ia]||Bs[Ia]||0})},Yt={s:Ua,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:gl(function(r){return arguments.length?Gn.scrollTo(Sn.sc(),r):Gn.pageYOffset||lr[Ua]||cr[Ua]||Bs[Ua]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||en.utils.toArray)(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},fE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Sr=function(e,t){var n=t.s,i=t.sc;Lo(e)&&(e=lr.scrollingElement||cr);var s=rt.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||pn(e,"scroll",ku);var a=rt[s+o],l=a||(rt[s+o]=gl(pr(e,n),!0)||(Lo(e)?i:gl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=en.getProperty(e,"scrollBehavior")==="smooth"),l},Hu=function(e,t,n){var i=e,s=e,o=Do(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Do();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=Do();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},po=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ym=function(){zs=en.core.globals().ScrollTrigger,zs&&zs.core&&hE()},Em=function(e){return en=e||Sm(),!tl&&en&&typeof document<"u"&&document.body&&(Gn=window,lr=document,cr=lr.documentElement,Bs=lr.body,vm=[Gn,lr,cr,Bs],en.utils.clamp,xm=en.core.context||function(){},Nr="onpointerenter"in Bs?"pointer":"mouse",gm=Ot.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Ot.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mm=0},500),tl=1),zs||ym(),tl};Sn.op=Yt;rt.cache=0;var Ot=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){tl||Em(en)||console.warn("Please gsap.registerPlugin(Observer)"),zs||ym();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,S=n.onPress,v=n.onRelease,C=n.onRight,R=n.onLeft,T=n.onUp,P=n.onDown,M=n.onChangeX,x=n.onChangeY,D=n.onChange,U=n.onToggleX,O=n.onToggleY,k=n.onHover,H=n.onHoverEnd,X=n.onMove,Y=n.ignoreCheck,V=n.isNormalizer,ne=n.onGestureStart,L=n.onGestureEnd,ce=n.onWheel,De=n.onEnable,$e=n.onDisable,$=n.onClick,oe=n.scrollSpeed,he=n.capture,re=n.allowClicks,ye=n.lockAxis,Be=n.onLockAxis;this.target=a=En(a)||cr,this.vars=n,d&&(d=en.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,oe=oe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Bs).lineHeight)||22);var Ce,He,te,K,A,Ee,ie,N=this,ae=0,Ue=0,_e=n.passive||!u&&n.passive!==!1,w=Sr(a,Sn),y=Sr(a,Yt),G=w(),J=y(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",j=Lo(a),de=a.ownerDocument||lr,ue=[0,0,0],ge=[0,0,0],Ye=0,le=function(){return Ye=Do()},fe=function(Le,Je){return(N.event=Le)&&d&&fE(Le.target,d)||Je&&Q&&Le.pointerType!=="touch"||Y&&Y(Le,Je)},ze=function(){N._vx.reset(),N._vy.reset(),He.pause(),h&&h(N)},Oe=function(){var Le=N.deltaX=fd(ue),Je=N.deltaY=fd(ge),xe=Math.abs(Le)>=i,qe=Math.abs(Je)>=i;D&&(xe||qe)&&D(N,Le,Je,ue,ge),xe&&(C&&N.deltaX>0&&C(N),R&&N.deltaX<0&&R(N),M&&M(N),U&&N.deltaX<0!=ae<0&&U(N),ae=N.deltaX,ue[0]=ue[1]=ue[2]=0),qe&&(P&&N.deltaY>0&&P(N),T&&N.deltaY<0&&T(N),x&&x(N),O&&N.deltaY<0!=Ue<0&&O(N),Ue=N.deltaY,ge[0]=ge[1]=ge[2]=0),(K||te)&&(X&&X(N),te&&(m&&te===1&&m(N),E&&E(N),te=0),K=!1),Ee&&!(Ee=!1)&&Be&&Be(N),A&&(ce(N),A=!1),Ce=0},we=function(Le,Je,xe){ue[xe]+=Le,ge[xe]+=Je,N._vx.update(Le),N._vy.update(Je),c?Ce||(Ce=requestAnimationFrame(Oe)):Oe()},Ke=function(Le,Je){ye&&!ie&&(N.axis=ie=Math.abs(Le)>Math.abs(Je)?"x":"y",Ee=!0),ie!=="y"&&(ue[2]+=Le,N._vx.update(Le,!0)),ie!=="x"&&(ge[2]+=Je,N._vy.update(Je,!0)),c?Ce||(Ce=requestAnimationFrame(Oe)):Oe()},Ge=function(Le){if(!fe(Le,1)){Le=po(Le,u);var Je=Le.clientX,xe=Le.clientY,qe=Je-N.x,Ie=xe-N.y,Xe=N.isDragging;N.x=Je,N.y=xe,(Xe||(qe||Ie)&&(Math.abs(N.startX-Je)>=s||Math.abs(N.startY-xe)>=s))&&(te||(te=Xe?2:1),Xe||(N.isDragging=!0),Ke(qe,Ie))}},at=N.onPress=function(Te){fe(Te,1)||Te&&Te.button||(N.axis=ie=null,He.pause(),N.isPressed=!0,Te=po(Te),ae=Ue=0,N.startX=N.x=Te.clientX,N.startY=N.y=Te.clientY,N._vx.reset(),N._vy.reset(),pn(V?a:de,fi[1],Ge,_e,!0),N.deltaX=N.deltaY=0,S&&S(N))},I=N.onRelease=function(Te){if(!fe(Te,1)){dn(V?a:de,fi[1],Ge,!0);var Le=!isNaN(N.y-N.startY),Je=N.isDragging,xe=Je&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),qe=po(Te);!xe&&Le&&(N._vx.reset(),N._vy.reset(),u&&re&&en.delayedCall(.08,function(){if(Do()-Ye>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(de.createEvent){var Ie=de.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Gn,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ie)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,h&&Je&&!V&&He.restart(!0),te&&Oe(),p&&Je&&p(N),v&&v(N,xe)}},me=function(Le){return Le.touches&&Le.touches.length>1&&(N.isGesturing=!0)&&ne(Le,N.isDragging)},Z=function(){return(N.isGesturing=!1)||L(N)},ee=function(Le){if(!fe(Le)){var Je=w(),xe=y();we((Je-G)*oe,(xe-J)*oe,1),G=Je,J=xe,h&&He.restart(!0)}},pe=function(Le){if(!fe(Le)){Le=po(Le,u),ce&&(A=!0);var Je=(Le.deltaMode===1?l:Le.deltaMode===2?Gn.innerHeight:1)*_;we(Le.deltaX*Je,Le.deltaY*Je,0),h&&!V&&He.restart(!0)}},ve=function(Le){if(!fe(Le)){var Je=Le.clientX,xe=Le.clientY,qe=Je-N.x,Ie=xe-N.y;N.x=Je,N.y=xe,K=!0,h&&He.restart(!0),(qe||Ie)&&Ke(qe,Ie)}},We=function(Le){N.event=Le,k(N)},ct=function(Le){N.event=Le,H(N)},Lt=function(Le){return fe(Le)||po(Le,u)&&$(N)};He=N._dc=en.delayedCall(f||.25,ze).pause(),N.deltaX=N.deltaY=0,N._vx=Hu(0,50,!0),N._vy=Hu(0,50,!0),N.scrollX=w,N.scrollY=y,N.isDragging=N.isGesturing=N.isPressed=!1,xm(this),N.enable=function(Te){return N.isEnabled||(pn(j?de:a,"scroll",ku),o.indexOf("scroll")>=0&&pn(j?de:a,"scroll",ee,_e,he),o.indexOf("wheel")>=0&&pn(a,"wheel",pe,_e,he),(o.indexOf("touch")>=0&&gm||o.indexOf("pointer")>=0)&&(pn(a,fi[0],at,_e,he),pn(de,fi[2],I),pn(de,fi[3],I),re&&pn(a,"click",le,!0,!0),$&&pn(a,"click",Lt),ne&&pn(de,"gesturestart",me),L&&pn(de,"gestureend",Z),k&&pn(a,Nr+"enter",We),H&&pn(a,Nr+"leave",ct),X&&pn(a,Nr+"move",ve)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=K=te=!1,N._vx.reset(),N._vy.reset(),G=w(),J=y(),Te&&Te.type&&at(Te),De&&De(N)),N},N.disable=function(){N.isEnabled&&(Ps.filter(function(Te){return Te!==N&&Lo(Te.target)}).length||dn(j?de:a,"scroll",ku),N.isPressed&&(N._vx.reset(),N._vy.reset(),dn(V?a:de,fi[1],Ge,!0)),dn(j?de:a,"scroll",ee,he),dn(a,"wheel",pe,he),dn(a,fi[0],at,he),dn(de,fi[2],I),dn(de,fi[3],I),dn(a,"click",le,!0),dn(a,"click",Lt),dn(de,"gesturestart",me),dn(de,"gestureend",Z),dn(a,Nr+"enter",We),dn(a,Nr+"leave",ct),dn(a,Nr+"move",ve),N.isEnabled=N.isPressed=N.isDragging=!1,$e&&$e(N))},N.kill=N.revert=function(){N.disable();var Te=Ps.indexOf(N);Te>=0&&Ps.splice(Te,1),Wi===N&&(Wi=0)},Ps.push(N),V&&Lo(a)&&(Wi=N),N.enable(g)},uE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ot.version="3.15.0";Ot.create=function(r){return new Ot(r)};Ot.register=Em;Ot.getAll=function(){return Ps.slice()};Ot.getById=function(r){return Ps.filter(function(e){return e.vars.id===r})[0]};Sm()&&en.registerPlugin(Ot);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Ts,it,_t,Hn,mt,Ch,vl,jo,Io,Mo,Na,on,Rl,Vu,vn,dd,pd,bs,Tm,bc,bm,gn,Gu,wm,Am,ir,Wu,Rh,ks,Ph,Uo,Xu,wc,Fa=1,an=Date.now,Ac=an(),oi=0,yo=0,md=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},_d=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dE=function r(){return yo&&requestAnimationFrame(r)},gd=function(){return Rl=1},vd=function(){return Rl=0},vi=function(e){return e},Eo=function(e){return Math.round(e*1e5)/1e5||0},Cm=function(){return typeof window<"u"},Rm=function(){return Pe||Cm()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},es=function(e){return!!~Ch.indexOf(e)},Pm=function(e){return(e==="Height"?Ph:it["inner"+e])||Hn["client"+e]||mt["client"+e]},Dm=function(e){return pr(e,"getBoundingClientRect")||(es(e)?function(){return ol.width=it.innerWidth,ol.height=Ph,ol}:function(){return Hi(e)})},pE=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=pr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Pm(s):e["client"+s])||0}},mE=function(e,t){return!t||~bi.indexOf(e)?Dm(e):function(){return ol}},Ti=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=pr(e,n))?o()-Dm(e)()[s]:es(e)?(Hn[n]||mt[n])-Pm(i):e[n]-e["offset"+i])},Oa=function(e,t){for(var n=0;n<bs.length;n+=3)(!t||~t.indexOf(bs[n+1]))&&e(bs[n],bs[n+1],bs[n+2])},Bn=function(e){return typeof e=="string"},cn=function(e){return typeof e=="function"},To=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},mo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ms=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ys=Math.abs,Lm="left",Im="top",Dh="right",Lh="bottom",$r="width",Zr="height",No="Right",Fo="Left",Oo="Top",Bo="Bottom",kt="padding",ni="margin",eo="Width",Ih="Height",Xt="px",ii=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},_E=function(e){var t=ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},xd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&ii(e)[Vu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},xl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Um=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},gE=function(e){return function(t){return Pe.utils.snap(Um(e),t)}},Uh=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},vE=function(e){return function(t,n){return Uh(Um(e))(t,n.direction)}},Ba=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},za=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Sd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ka={toggleActions:"play",anticipatePin:0},Sl={top:0,left:0,center:.5,bottom:1,right:1},nl=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sl?Sl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ha=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=_t.createElement("div"),g=es(n)||pr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?mt:n.tagName==="IFRAME"?n.contentDocument.body:n,E=e.indexOf("start")!==-1,S=E?c:u,v="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Yt?Dh:Lh)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=E,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],il(_,0,i,E),_},il=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+eo]=1,s["border"+a+eo]=0,s[n.p]=t+"px",Pe.set(e,s)},et=[],Yu={},Qo,Md=function(){return an()-oi>34&&(Qo||(Qo=requestAnimationFrame(qi)))},Es=function(){(!gn||!gn.isPressed||gn.startX>mt.clientWidth)&&(rt.cache++,gn?Qo||(Qo=requestAnimationFrame(qi)):qi(),oi||ns("scrollStart"),oi=an())},Cc=function(){Am=it.innerWidth,wm=it.innerHeight},bo=function(e){rt.cache++,(e===!0||!on&&!bm&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!Gu||Am!==it.innerWidth||Math.abs(it.innerHeight-wm)>it.innerHeight*.25))&&vl.restart(!0)},ts={},xE=[],Nm=function r(){return Kt(tt,"scrollEnd",r)||Gr(!0)},ns=function(e){return ts[e]&&ts[e].map(function(t){return t()})||xE},On=[],Fm=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},Om=function(){return rt.forEach(function(e){return cn(e)&&++e.cacheID&&(e.rec=e())})},Nh=function(e,t){var n;for(vn=0;vn<et.length;vn++)n=et[vn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Uo=!0,t&&Fm(t),t||ns("revert")},Bm=function(e,t){rt.cache++,(t||!xn)&&rt.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(it.history.scrollRestoration=Rh=e)},xn,Kr=0,yd,SE=function(){if(yd!==Kr){var e=yd=Kr;requestAnimationFrame(function(){return e===Kr&&Gr(!0)})}},zm=function(){mt.appendChild(ks),Ph=!gn&&ks.offsetHeight||it.innerHeight,mt.removeChild(ks)},Ed=function(e){return jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Gr=function(e,t){if(Hn=_t.documentElement,mt=_t.body,Ch=[it,_t,Hn,mt],oi&&!e&&!Uo){Jt(tt,"scrollEnd",Nm);return}zm(),xn=tt.isRefreshing=!0,Uo||Om();var n=ns("refreshInit");Tm&&tt.sort(),t||Nh(),rt.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Uo=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xu=1,Ed(!0),et.forEach(function(i){var s=Ti(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Ed(!1),Xu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bm(Rh,1),vl.pause(),Kr++,xn=2,qi(2),et.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=tt.isRefreshing=!1,ns("refresh")},qu=0,rl=1,zo,qi=function(e){if(e===2||!xn&&!Uo){tt.isUpdating=!0,zo&&zo.update(0);var t=et.length,n=an(),i=n-Ac>=50,s=t&&et[0].scroll();if(rl=qu>s?-1:1,xn||(qu=s),i&&(oi&&!Rl&&n-oi>200&&(oi=0,ns("scrollEnd")),Mo=Ac,Ac=n),rl<0){for(vn=t;vn-- >0;)et[vn]&&et[vn].update(0,i);rl=1}else for(vn=0;vn<t;vn++)et[vn]&&et[vn].update(0,i);tt.isUpdating=!1}Qo=0},$u=[Lm,Im,Lh,Dh,ni+Bo,ni+No,ni+Oo,ni+Fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sl=$u.concat([$r,Zr,"boxSizing","max"+eo,"max"+Ih,"position",ni,kt,kt+Oo,kt+No,kt+Bo,kt+Fo]),ME=function(e,t,n){Hs(n);var i=e._gsap;if(i.spacerIsNative)Hs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$u.length,o=t.style,a=e.style,l;s--;)l=$u[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lh]=a[Dh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$r]=xl(e,Sn)+Xt,o[Zr]=xl(e,Yt)+Xt,o[kt]=a[ni]=a[Im]=a[Lm]="0",Hs(i),a[$r]=a["max"+eo]=n[$r],a[Zr]=a["max"+Ih]=n[Zr],a[kt]=n[kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yE=/([A-Z])/g,Hs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yE,"-$1").toLowerCase())}},Va=function(e){for(var t=sl.length,n=e.style,i=[],s=0;s<t;s++)i.push(sl[s],n[sl[s]]);return i.t=e,i},EE=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ol={left:0,top:0},Td=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){cn(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?nl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,E;if(d&&d.seek(0),isNaN(e)||(e=+e),To(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&il(a,n,i,!0);else{cn(t)&&(t=t(l));var S=(e||"0").split(" "),v,C,R,T;E=En(t,l)||mt,v=Hi(E)||{},(!v||!v.left&&!v.top)&&ii(E).display==="none"&&(T=E.style.display,E.style.display="block",v=Hi(E),T?E.style.display=T:E.style.removeProperty("display")),C=nl(S[0],v[i.d]),R=nl(S[1]||"0",n),e=v[i.p]-c[i.p]-u+C+s-R,a&&il(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,M=o._isStart;m="scroll"+i.d2,il(o,P,i,M&&P>20||!M&&(h?Math.max(mt[m],Hn[m]):o.parentNode[m])<=P+1),h&&(c=Hi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return d&&E&&(m=Hi(E),d.seek(f),p=Hi(E),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},TE=/(webkit|moz|length|cssText|inset)/i,bd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=ii(e);for(o in a)!+o&&!TE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},km=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ga=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},wd=function(e,t){var n=Sr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=km(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&qi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),tt.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){Ts||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yo){this.update=this.refresh=this.kill=vi;return}n=xd(Bn(n)||To(n)||n.nodeType?{trigger:n}:n,ka);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,S=s.once,v=s.snap,C=s.pinReparent,R=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Yt,D=!h&&h!==0,U=En(n.scroller||it),O=Pe.core.getCache(U),k=es(U),H=("pinType"in n?n.pinType:pr(U,"pinType")||k&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=D&&n.toggleActions.split(" "),V="markers"in n?n.markers:ka.markers,ne=k?0:parseFloat(ii(U)["border"+x.p2+eo])||0,L=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(L)},De=pE(U,k,x),$e=mE(U,k),$=0,oe=0,he=0,re=Sr(U,x),ye,Be,Ce,He,te,K,A,Ee,ie,N,ae,Ue,_e,w,y,G,J,Q,j,de,ue,ge,Ye,le,fe,ze,Oe,we,Ke,Ge,at,I,me,Z,ee,pe,ve,We,ct;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=U,L.scroll=T?T.time.bind(T):re,He=re(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Tm=1,n.refreshPriority===-9999&&(zo=L)),O.tweenScroll=O.tweenScroll||{top:wd(U,Yt),left:wd(U,Sn)},L.tweenTo=ye=O.tweenScroll[x.p],L.scrubDuration=function(xe){me=To(xe)&&xe,me?I?I.duration(xe):I=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:me,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Ge=0,l||(l=i.vars.id)),v&&((!Fr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in mt.style&&Pe.set(k?[mt,Hn]:U,{scrollBehavior:"auto"}),rt.forEach(function(xe){return cn(xe)&&xe.target===(k?_t.scrollingElement||Hn:U)&&(xe.smooth=!1)}),Ce=cn(v.snapTo)?v.snapTo:v.snapTo==="labels"?gE(i):v.snapTo==="labelsDirectional"?vE(i):v.directional!==!1?function(xe,qe){return Uh(v.snapTo)(xe,an()-oe<500?0:qe.direction)}:Pe.utils.snap(v.snapTo),Z=v.duration||{min:.1,max:2},Z=Fr(Z)?Io(Z.min,Z.max):Io(Z,Z),ee=Pe.delayedCall(v.delay||me/2||.1,function(){var xe=re(),qe=an()-oe<500,Ie=ye.tween;if((qe||Math.abs(L.getVelocity())<10)&&!Ie&&!Rl&&$!==xe){var Xe=(xe-K)/w,Nt=i&&!D?i.totalProgress():Xe,nt=qe?0:(Nt-at)/(an()-Mo)*1e3||0,Et=Pe.utils.clamp(-Xe,1-Xe,ys(nt/2)*nt/.185),Vt=Xe+(v.inertia===!1?0:Et),xt,St,ft=v,Ln=ft.onStart,Tt=ft.onInterrupt,hn=ft.onComplete;if(xt=Ce(Vt,L),To(xt)||(xt=Vt),St=Math.max(0,Math.round(K+xt*w)),xe<=A&&xe>=K&&St!==xe){if(Ie&&!Ie._initted&&Ie.data<=ys(St-xe))return;v.inertia===!1&&(Et=xt-Xe),ye(St,{duration:Z(ys(Math.max(ys(Vt-Nt),ys(xt-Nt))*.185/nt/.05||0)),ease:v.ease||"power3",data:ys(St-xe),onInterrupt:function(){return ee.restart(!0)&&Tt&&Ms(L,Tt)},onComplete:function(){L.update(),$=re(),i&&!D&&(I?I.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),Ge=at=i&&!D?i.totalProgress():L.progress,E&&E(L),hn&&Ms(L,hn)}},xe,Et*w,St-xe-Et*w),Ln&&Ms(L,Ln,ye.tween)}}else L.isActive&&$!==xe&&ee.restart(!0)}).pause()),l&&(Yu[l]=L),f=L.trigger=En(f||d!==!0&&d),ct=f&&f._gsap&&f._gsap.stRevert,ct&&(ct=ct(L)),d=d===!0?f:En(d),Bn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===ni||(_=!_&&d.parentNode&&d.parentNode.style&&ii(d.parentNode).display==="flex"?!1:kt),L.pin=d,Be=Pe.core.getCache(d),Be.spacer?y=Be.pinState:(R&&(R=En(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Be.spacerIsNative=!!R,R&&(Be.spacerState=Va(R))),Be.spacer=Q=R||_t.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Be.pinState=y=Va(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),L.spacer=Q=Be.spacer,Ke=ii(d),le=Ke[_+x.os2],de=Pe.getProperty(d),ue=Pe.quickSetter(d,x.a,Xt),Rc(d,Q,Ke),J=Va(d)),V){Ue=Fr(V)?xd(V,Sd):Sd,N=Ha("scroller-start",l,U,x,Ue,0),ae=Ha("scroller-end",l,U,x,Ue,0,N),j=N["offset"+x.op.d2];var Lt=En(pr(U,"content")||U);Ee=this.markerStart=Ha("start",l,Lt,x,Ue,j,0,T),ie=this.markerEnd=Ha("end",l,Lt,x,Ue,j,0,T),T&&(We=Pe.quickSetter([Ee,ie],x.a,Xt)),!H&&!(bi.length&&pr(U,"fixedMarkers")===!0)&&(_E(k?mt:U),Pe.set([N,ae],{force3D:!0}),ze=Pe.quickSetter(N,x.a,Xt),we=Pe.quickSetter(ae,x.a,Xt))}if(T){var Te=T.vars.onUpdate,Le=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),Te&&Te.apply(T,Le||[])})}if(L.previous=function(){return et[et.indexOf(L)-1]},L.next=function(){return et[et.indexOf(L)+1]},L.revert=function(xe,qe){if(!qe)return L.kill(!0);var Ie=xe!==!1||!L.enabled,Xe=on;Ie!==L.isReverted&&(Ie&&(pe=Math.max(re(),L.scroll.rec||0),he=L.progress,ve=i&&i.progress()),Ee&&[Ee,ie,N,ae].forEach(function(Nt){return Nt.style.display=Ie?"none":"block"}),Ie&&(on=L,L.update(Ie)),d&&(!C||!L.isActive)&&(Ie?ME(d,Q,y):Rc(d,Q,ii(d),fe)),Ie||L.update(Ie),on=Xe,L.isReverted=Ie)},L.refresh=function(xe,qe,Ie,Xe){if(!((on||!L.enabled)&&!qe)){if(d&&xe&&oi){Jt(r,"scrollEnd",Nm);return}!xn&&ce&&ce(L),on=L,ye.tween&&!Ie&&(ye.tween.kill(),ye.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ze){return Ze.vars.immediateRender&&Ze.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Nt=De(),nt=$e(),Et=T?T.duration():Ti(U,x),Vt=w<=.01||!w,xt=0,St=Xe||0,ft=Fr(Ie)?Ie.end:n.end,Ln=n.endTrigger||f,Tt=Fr(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),hn=L.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,L),Zn=f&&Math.max(0,et.indexOf(L))||0,Gt=Zn,Wt,b,B,q,W,F,se,Se,Re,Ae,Fe,Ve,Ne;for(V&&Fr(Ie)&&(Ve=Pe.getProperty(N,x.p),Ne=Pe.getProperty(ae,x.p));Gt-- >0;)F=et[Gt],F.end||F.refresh(0,1)||(on=L),se=F.pin,se&&(se===f||se===d||se===hn)&&!F.isReverted&&(Ae||(Ae=[]),Ae.unshift(F),F.revert(!0,!0)),F!==et[Gt]&&(Zn--,Gt--);for(cn(Tt)&&(Tt=Tt(L)),Tt=md(Tt,"start",L),K=Td(Tt,f,Nt,x,re(),Ee,N,L,nt,ne,H,Et,T,L._startClamp&&"_startClamp")||(d?-.001:0),cn(ft)&&(ft=ft(L)),Bn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Bn(Tt)?Tt.split(" ")[0]:"")+ft:(xt=nl(ft.substr(2),Nt),ft=Bn(Tt)?Tt:(T?Pe.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,K):K)+xt,Ln=f)),ft=md(ft,"end",L),A=Math.max(K,Td(ft||(Ln?"100% 0":Et),Ln,Nt,x,re()+xt,ie,ae,L,nt,ne,H,Et,T,L._endClamp&&"_endClamp"))||-.001,xt=0,Gt=Zn;Gt--;)F=et[Gt]||{},se=F.pin,se&&F.start-F._pinPush<=K&&!T&&F.end>0&&(Wt=F.end-(L._startClamp?Math.max(0,F.start):F.start),(se===f&&F.start-F._pinPush<K||se===hn)&&isNaN(Tt)&&(xt+=Wt*(1-F.progress)),se===d&&(St+=Wt));if(K+=xt,A+=xt,L._startClamp&&(L._startClamp+=xt),L._endClamp&&!xn&&(L._endClamp=A||-.001,A=Math.min(A,Ti(U,x))),w=A-K||(K-=.01)&&.001,Vt&&(he=Pe.utils.clamp(0,1,Pe.utils.normalize(K,A,pe))),L._pinPush=St,Ee&&xt&&(Wt={},Wt[x.a]="+="+xt,hn&&(Wt[x.p]="-="+re()),Pe.set([Ee,ie],Wt)),d&&!(Xu&&L.end>=Ti(U,x)))Wt=ii(d),q=x===Yt,B=re(),ge=parseFloat(de(x.a))+St,!Et&&A>1&&(Fe=(k?_t.scrollingElement||Hn:U).style,Fe={style:Fe,value:Fe["overflow"+x.a.toUpperCase()]},k&&ii(mt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Fe.style["overflow"+x.a.toUpperCase()]="scroll")),Rc(d,Q,Wt),J=Va(d),b=Hi(d,!0),Se=H&&Sr(U,q?Sn:Yt)(),_?(fe=[_+x.os2,w+St+Xt],fe.t=Q,Gt=_===kt?xl(d,x)+w+St:0,Gt&&(fe.push(x.d,Gt+Xt),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Gt+Xt)),Hs(fe),hn&&et.forEach(function(Ze){Ze.pin===hn&&Ze.vars.pinSpacing!==!1&&(Ze._subPinOffset=!0)}),H&&re(pe)):(Gt=xl(d,x),Gt&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Gt+Xt)),H&&(W={top:b.top+(q?B-K:Se)+Xt,left:b.left+(q?Se:B-K)+Xt,boxSizing:"border-box",position:"fixed"},W[$r]=W["max"+eo]=Math.ceil(b.width)+Xt,W[Zr]=W["max"+Ih]=Math.ceil(b.height)+Xt,W[ni]=W[ni+Oo]=W[ni+No]=W[ni+Bo]=W[ni+Fo]="0",W[kt]=Wt[kt],W[kt+Oo]=Wt[kt+Oo],W[kt+No]=Wt[kt+No],W[kt+Bo]=Wt[kt+Bo],W[kt+Fo]=Wt[kt+Fo],G=EE(y,W,C),xn&&re(0)),i?(Re=i._initted,bc(1),i.render(i.duration(),!0,!0),Ye=de(x.a)-ge+w+St,Oe=Math.abs(w-Ye)>1,H&&Oe&&G.splice(G.length-2,2),i.render(0,!0,!0),Re||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bc(0)):Ye=w,Fe&&(Fe.value?Fe.style["overflow"+x.a.toUpperCase()]=Fe.value:Fe.style.removeProperty("overflow-"+x.a));else if(f&&re()&&!T)for(b=f.parentNode;b&&b!==mt;)b._pinOffset&&(K-=b._pinOffset,A-=b._pinOffset),b=b.parentNode;Ae&&Ae.forEach(function(Ze){return Ze.revert(!1,!0)}),L.start=K,L.end=A,He=te=xn?pe:re(),!T&&!xn&&(He<pe&&re(pe),L.scroll.rec=0),L.revert(!1,!0),oe=an(),ee&&($=-1,ee.restart(!0)),on=0,i&&D&&(i._initted||ve)&&i.progress()!==ve&&i.progress(ve||0,!0).render(i.time(),!0,!0),(Vt||he!==L.progress||T||g||i&&!i._initted)&&(i&&!D&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(T&&K<-.001&&!he?Pe.utils.normalize(K,A,0):he,!0),L.progress=Vt||(He-K)/w===he?0:he),d&&_&&(Q._pinOffset=Math.round(L.progress*Ye)),I&&I.invalidate(),isNaN(Ve)||(Ve-=Pe.getProperty(N,x.p),Ne-=Pe.getProperty(ae,x.p),Ga(N,x,Ve),Ga(Ee,x,Ve-(Xe||0)),Ga(ae,x,Ne),Ga(ie,x,Ne-(Xe||0))),Vt&&!xn&&L.update(),u&&!xn&&!_e&&(_e=!0,u(L),_e=!1)}},L.getVelocity=function(){return(re()-te)/(an()-Mo)*1e3||0},L.endAnimation=function(){mo(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||mo(i,L.direction<0,1):mo(i,i.reversed()))},L.labelToScroll=function(xe){return i&&i.labels&&(K||L.refresh()||K)+i.labels[xe]/i.duration()*w||0},L.getTrailing=function(xe){var qe=et.indexOf(L),Ie=L.direction>0?et.slice(0,qe).reverse():et.slice(qe+1);return(Bn(xe)?Ie.filter(function(Xe){return Xe.vars.preventOverlaps===xe}):Ie).filter(function(Xe){return L.direction>0?Xe.end<=K:Xe.start>=A})},L.update=function(xe,qe,Ie){if(!(T&&!Ie&&!xe)){var Xe=xn===!0?pe:L.scroll(),Nt=xe?0:(Xe-K)/w,nt=Nt<0?0:Nt>1?1:Nt||0,Et=L.progress,Vt,xt,St,ft,Ln,Tt,hn,Zn;if(qe&&(te=He,He=T?re():Xe,v&&(at=Ge,Ge=i&&!D?i.totalProgress():nt)),m&&d&&!on&&!Fa&&oi&&(!nt&&K<Xe+(Xe-te)/(an()-Mo)*m?nt=1e-4:nt===1&&A>Xe+(Xe-te)/(an()-Mo)*m&&(nt=.9999)),nt!==Et&&L.enabled){if(Vt=L.isActive=!!nt&&nt<1,xt=!!Et&&Et<1,Tt=Vt!==xt,Ln=Tt||!!nt!=!!Et,L.direction=nt>Et?1:-1,L.progress=nt,Ln&&!on&&(St=nt&&!Et?0:nt===1?1:Et===1?2:3,D&&(ft=!Tt&&Y[St+1]!=="none"&&Y[St+1]||Y[St],Zn=i&&(ft==="complete"||ft==="reset"||ft in i))),M&&(Tt||Zn)&&(Zn||h||!i)&&(cn(M)?M(L):L.getTrailing(M).forEach(function(B){return B.endAnimation()})),D||(I&&!on&&!Fa?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",nt,i._tTime/i._tDur):(I.vars.totalProgress=nt,I.invalidate().restart())):i&&i.totalProgress(nt,!!(on&&(oe||xe)))),d){if(xe&&_&&(Q.style[_+x.os2]=le),!H)ue(Eo(ge+Ye*nt));else if(Ln){if(hn=!xe&&nt>Et&&A+1>Xe&&Xe+1>=Ti(U,x),C)if(!xe&&(Vt||hn)){var Gt=Hi(d,!0),Wt=Xe-K;bd(d,mt,Gt.top+(x===Yt?Wt:0)+Xt,Gt.left+(x===Yt?0:Wt)+Xt)}else bd(d,Q);Hs(Vt||hn?G:J),Oe&&nt<1&&Vt||ue(ge+(nt===1&&!hn?Ye:0))}}v&&!ye.tween&&!on&&!Fa&&ee.restart(!0),a&&(Tt||S&&nt&&(nt<1||!wc))&&jo(a.targets).forEach(function(B){return B.classList[Vt||S?"add":"remove"](a.className)}),o&&!D&&!xe&&o(L),Ln&&!on?(D&&(Zn&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),o&&o(L)),(Tt||!wc)&&(c&&Tt&&Ms(L,c),X[St]&&Ms(L,X[St]),S&&(nt===1?L.kill(!1,1):X[St]=0),Tt||(St=nt===1?1:3,X[St]&&Ms(L,X[St]))),P&&!Vt&&Math.abs(L.getVelocity())>(To(P)?P:2500)&&(mo(L.callbackAnimation),I?I.progress(1):mo(i,ft==="reverse"?1:!nt,1))):D&&o&&!on&&o(L)}if(we){var b=T?Xe/T.duration()*(T._caScrollDist||0):Xe;ze(b+(N._isFlipped?1:0)),we(b)}We&&We(-Xe/T.duration()*(T._caScrollDist||0))}},L.enable=function(xe,qe){L.enabled||(L.enabled=!0,Jt(U,"resize",bo),k||Jt(U,"scroll",Es),ce&&Jt(r,"refreshInit",ce),xe!==!1&&(L.progress=he=0,He=te=$=re()),qe!==!1&&L.refresh())},L.getTween=function(xe){return xe&&ye?ye.tween:I},L.setPositions=function(xe,qe,Ie,Xe){if(T){var Nt=T.scrollTrigger,nt=T.duration(),Et=Nt.end-Nt.start;xe=Nt.start+Et*xe/nt,qe=Nt.start+Et*qe/nt}L.refresh(!1,!1,{start:_d(xe,Ie&&!!L._startClamp),end:_d(qe,Ie&&!!L._endClamp)},Xe),L.update()},L.adjustPinSpacing=function(xe){if(fe&&xe){var qe=fe.indexOf(x.d)+1;fe[qe]=parseFloat(fe[qe])+xe+Xt,fe[1]=parseFloat(fe[1])+xe+Xt,Hs(fe)}},L.disable=function(xe,qe){if(xe!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,qe||I&&I.pause(),pe=0,Be&&(Be.uncache=1),ce&&Kt(r,"refreshInit",ce),ee&&(ee.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!k)){for(var Ie=et.length;Ie--;)if(et[Ie].scroller===U&&et[Ie]!==L)return;Kt(U,"resize",bo),k||Kt(U,"scroll",Es)}},L.kill=function(xe,qe){L.disable(xe,qe),I&&!qe&&I.kill(),l&&delete Yu[l];var Ie=et.indexOf(L);Ie>=0&&et.splice(Ie,1),Ie===vn&&rl>0&&vn--,Ie=0,et.forEach(function(Xe){return Xe.scroller===L.scroller&&(Ie=1)}),Ie||xn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,xe&&i.revert({kill:!1}),qe||i.kill()),Ee&&[Ee,ie,N,ae].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),zo===L&&(zo=0),d&&(Be&&(Be.uncache=1),Ie=0,et.forEach(function(Xe){return Xe.pin===d&&Ie++}),Ie||(Be.spacer=0)),n.onKill&&n.onKill(L)},et.push(L),L.enable(!1,!1),ct&&ct(L),i&&i.add&&!w){var Je=L.update;L.update=function(){L.update=Je,rt.cache++,K||A||L.refresh()},Pe.delayedCall(.01,L.update),w=.01,K=A=0}else L.refresh();d&&SE()},r.register=function(n){return Ts||(Pe=n||Rm(),Cm()&&window.document&&r.enable(),Ts=yo),Ts},r.defaults=function(n){if(n)for(var i in n)ka[i]=n[i];return ka},r.disable=function(n,i){yo=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),Kt(it,"wheel",Es),Kt(_t,"scroll",Es),clearInterval(Na),Kt(_t,"touchcancel",vi),Kt(mt,"touchstart",vi),Ba(Kt,_t,"pointerdown,touchstart,mousedown",gd),Ba(Kt,_t,"pointerup,touchend,mouseup",vd),vl.kill(),Oa(Kt);for(var s=0;s<rt.length;s+=3)za(Kt,rt[s],rt[s+1]),za(Kt,rt[s],rt[s+2])},r.enable=function(){if(it=window,_t=document,Hn=_t.documentElement,mt=_t.body,Pe){if(jo=Pe.utils.toArray,Io=Pe.utils.clamp,Wu=Pe.core.context||vi,bc=Pe.core.suppressOverwrites||vi,Rh=it.history.scrollRestoration||"auto",qu=it.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),mt){yo=1,ks=document.createElement("div"),ks.style.height="100vh",ks.style.position="absolute",zm(),dE(),Ot.register(Pe),r.isTouch=Ot.isTouch,ir=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gu=Ot.isTouch===1,Jt(it,"wheel",Es),Ch=[it,_t,Hn,mt],Pe.matchMedia?(r.matchMedia=function(u){var h=Pe.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Pe.addEventListener("matchMediaInit",function(){Om(),Nh()}),Pe.addEventListener("matchMediaRevert",function(){return Fm()}),Pe.addEventListener("matchMedia",function(){Gr(0,1),ns("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Cc(),Cc})):console.warn("Requires GSAP 3.11.0 or later"),Cc(),Jt(_t,"scroll",Es);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Hi(mt),Yt.m=Math.round(a.top+Yt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),Na=setInterval(Md,250),Pe.delayedCall(.5,function(){return Fa=0}),Jt(_t,"touchcancel",vi),Jt(mt,"touchstart",vi),Ba(Jt,_t,"pointerdown,touchstart,mousedown",gd),Ba(Jt,_t,"pointerup,touchend,mouseup",vd),Vu=Pe.utils.checkPrefix("transform"),sl.push(Vu),Ts=an(),vl=Pe.delayedCall(.2,Gr).pause(),bs=[_t,"visibilitychange",function(){var u=it.innerWidth,h=it.innerHeight;_t.hidden?(dd=u,pd=h):(dd!==u||pd!==h)&&bo()},_t,"DOMContentLoaded",Gr,it,"load",Gr,it,"resize",bo],Oa(Jt),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)za(Kt,rt[l],rt[l+1]),za(Kt,rt[l],rt[l+2])}else if(_t){var c=function u(){r.enable(),_t.removeEventListener("DOMContentLoaded",u)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(wc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Na)||(Na=i)&&setInterval(Md,i),"ignoreMobileResize"in n&&(Gu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Oa(Kt)||Oa(Jt,n.autoRefreshEvents||"none"),bm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=rt.indexOf(s),a=es(s);~o&&rt.splice(o,a?6:2),i&&(a?bi.unshift(it,i,mt,i,Hn,i):bi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?En(n):n).getBoundingClientRect(),a=o[s?$r:Zr]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?$r:Zr],l=i==null?a/2:i in Sl?Sl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ts.killAll||[];ts={},i.forEach(function(s){return s()})}},r})();tt.version="3.15.0";tt.saveStyles=function(r){return r?jo(r).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Wu())}}):On};tt.revert=function(r,e){return Nh(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?bo(!0):(Ts||tt.register())&&Gr(!0)};tt.update=function(r){return++rt.cache&&qi(r===!0?2:0)};tt.clearScrollMemory=Bm;tt.maxScroll=function(r,e){return Ti(r,e?Sn:Yt)};tt.getScrollFunc=function(r,e){return Sr(En(r),e?Sn:Yt)};tt.getById=function(r){return Yu[r]};tt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!oi};tt.snapDirectional=Uh;tt.addEventListener=function(r,e){var t=ts[r]||(ts[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=ts[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Pe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&cn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return cn(s)&&(s=s(),Jt(tt,"refresh",function(){return s=e.batchMax()})),jo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var Ad=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Pc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===Hn&&r(mt,t)},Wa={auto:1,scroll:1},bE=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=an(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wa[(l=ii(s)).overflowY]||Wa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!es(s)&&(Wa[(l=ii(s)).overflowY]||Wa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hm=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&bE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(_t,Ot.eventTypes[0],Rd,!1,!0)},onDisable:function(){return Kt(_t,Ot.eventTypes[0],Rd,!0)}})},wE=/(input|label|select|textarea)/i,Cd,Rd=function(e){var t=wE.test(e.target.tagName);(t||Cd)&&(e._gsapAllow=!0,Cd=t)},AE=function(e){Fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=En(e.target)||Hn,u=Pe.core.globals().ScrollSmoother,h=u&&u.get(),f=ir&&(e.content&&En(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Sr(c,Yt),_=Sr(c,Sn),g=1,m=(Ot.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,E=cn(i)?function(){return i(a)}:function(){return i||2.8},S,v,C=Hm(c,e.type,!0,s),R=function(){return v=!1},T=vi,P=vi,M=function(){l=Ti(c,Yt),P=Io(ir?1:0,l),n&&(T=Io(0,Ti(c,Sn))),S=Kr},x=function(){f._gsap.y=Eo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(R);var V=Eo(a.deltaY/2),ne=P(d.v-V);if(f&&ne!==d.v+d.offset){d.offset=ne-d.v;var L=Eo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=rt.cache,qi()}return!0}d.offset&&x(),v=!0},U,O,k,H,X=function(){M(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return ir&&Y.type==="touchmove"&&D()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=g;g=Eo((it.visualViewport&&it.visualViewport.scale||1)/m),U.pause(),Y!==g&&Pc(c,g>1.01?!0:n?!1:"x"),O=_(),k=d(),M(),S=Kr},e.onRelease=e.onGestureStart=function(Y,V){if(d.offset&&x(),!V)H.restart(!0);else{rt.cache++;var ne=E(),L,ce;n&&(L=_(),ce=L+ne*.05*-Y.velocityX/.227,ne*=Ad(_,L,ce,Ti(c,Sn)),U.vars.scrollX=T(ce)),L=d(),ce=L+ne*.05*-Y.velocityY/.227,ne*=Ad(d,L,ce,Ti(c,Yt)),U.vars.scrollY=P(ce),U.invalidate().duration(ne).play(.01),(ir&&U.vars.scrollY>=l||L>=l-1)&&Pe.to({},{onUpdate:X,duration:ne})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),an()-p>1e3&&(S=0,p=an())},e.onChange=function(Y,V,ne,L,ce){if(Kr!==S&&M(),V&&n&&_(T(L[2]===V?O+(Y.startX-Y.x):_()+V-L[1])),ne){d.offset&&x();var De=ce[2]===ne,$e=De?k+Y.startY-Y.y:d()+ne-ce[1],$=P($e);De&&$e!==$&&(k+=$-$e),d($)}(ne||V)&&qi()},e.onEnable=function(){Pc(c,n?!1:"x"),tt.addEventListener("refresh",X),Jt(it,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){Pc(c,!0),Kt(it,"resize",X),tt.removeEventListener("refresh",X),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=ir,ir&&!d()&&d(1),ir&&Pe.ticker.add(vi),H=a._dc,U=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:km(d,d(),function(){return U.pause()})},onUpdate:qi,onComplete:H.vars.onComplete}),a};tt.sort=function(r){if(cn(r))return et.sort(r);var e=it.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Ot(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var e=r instanceof Ot?r:AE(r);return gn&&gn.target===e.target&&gn.kill(),es(e.target)&&(gn=e),e};tt.core={_getVelocityProp:Hu,_inputObserver:Hm,_scrollers:rt,_proxies:bi,bridge:{ss:function(){oi||ns("scrollStart"),oi=an()},ref:function(){return on}}};Rm()&&Pe.registerPlugin(tt);Fn.registerPlugin(tt);tt.config({ignoreMobileResize:!0});typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");function CE(){const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=document.getElementById("hero-portrait-img");if(!e)return;if(r){Fn.set(["#hero-portrait-img",".hero-text-item","#about .about-header-item","#about .timeline-track-line","#about .about-card-item","#contact .contact-reveal-box > *","#contact .social-card-item"],{opacity:1,x:0,y:0,scale:1,scaleY:1});return}const t=Fn.timeline({defaults:{ease:"power3.out",force3D:!0}});Fn.set(e,{opacity:0,x:-40,scale:.98}),Fn.set(".hero-text-item",{opacity:0,x:20}),t.to(e,{opacity:1,x:0,scale:1,duration:.9}).to(".hero-text-item",{opacity:1,x:0,duration:.55,stagger:.05},"-=0.7"),document.getElementById("about")&&(Fn.set("#about .about-header-item",{opacity:0,y:20}),Fn.set("#about .timeline-track-line",{scaleY:0,transformOrigin:"top center"}),Fn.set("#about .about-card-item",{opacity:0,y:24}),Fn.timeline({scrollTrigger:{trigger:"#about",start:"top 65%",once:!0},defaults:{ease:"power3.out",force3D:!0}}).to("#about .about-header-item",{opacity:1,y:0,duration:.55,stagger:.08}).to("#about .timeline-track-line",{scaleY:1,duration:.7,ease:"power2.inOut"},"-=0.3").to("#about .about-card-item",{opacity:1,y:0,duration:.65,stagger:.14},"-=0.5")),document.getElementById("contact")&&(Fn.set("#contact .contact-reveal-box > *",{opacity:0,y:20}),Fn.set("#contact .social-card-item",{opacity:0,y:16,scale:.96}),Fn.timeline({scrollTrigger:{trigger:"#contact",start:"top 65%",once:!0},defaults:{ease:"power3.out",force3D:!0}}).to("#contact .contact-reveal-box > *",{opacity:1,y:0,duration:.6,stagger:.1}).to("#contact .social-card-item",{opacity:1,y:0,scale:1,duration:.5,stagger:.06},"-=0.3")),window.addEventListener("load",()=>{tt.refresh()})}/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=([r,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t!=null&&t.length&&t.forEach(i=>{const s=Gm(i);n.appendChild(s)}),n},RE=(r,e={})=>{const n={...Vm,...e};return Gm(["svg",n,r])};/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),DE=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",LE=r=>r.flatMap(DE).map(t=>t.trim()).filter(Boolean).filter((t,n,i)=>i.indexOf(t)===n).join(" "),IE=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()),Pd=(r,{nameAttr:e,icons:t,attrs:n})=>{var h;const i=r.getAttribute(e);if(i==null)return;const s=IE(i),o=t[s];if(!o)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const a=PE(r),l={...Vm,"data-lucide":i,...n,...a},c=LE(["lucide",`lucide-${i}`,a,n]);c&&Object.assign(l,{class:c});const u=RE(o,l);return(h=r.parentNode)==null?void 0:h.replaceChild(u,r)};/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];/**
 * @license lucide v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=({icons:r={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(i=>Pd(i,{nameAttr:e,icons:r,attrs:t})),e==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>Pd(s,{nameAttr:"icon-name",icons:r,attrs:t})))}};function Dc(){const r=document.getElementById("site-curtain");r&&(r.style.opacity="0",setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r)},600))}function Dd(){console.log("[App] Initializing Mr. Ahmed Samir Portfolio...");const r=setTimeout(Dc,800);try{HE({icons:{PhoneCall:OE,MessageCircle:FE,Phone:BE,Facebook:UE,Youtube:kE,Video:zE,Instagram:NE},attrs:{"aria-hidden":"true"}}),console.log("[App] Lucide icons initialized successfully with a11y")}catch(e){console.error("[App] Lucide icon error:",e)}try{Sp(()=>{clearTimeout(r),Dc()}),console.log("[App] Three.js scene initialized successfully")}catch(e){console.error("[App] Three.js initialization error:",e);const t=document.getElementById("three-canvas");t&&(t.style.display="none");const n=document.getElementById("three-canvas-container");n&&(n.style.display="none"),Dc()}try{CE(),console.log("[App] Portrait hero initialized successfully")}catch(e){console.error("[App] Portrait hero error:",e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Dd):Dd();
