console.log("Hello, World!"),$((function(){function e(){$("#btn-connect").removeClass("hide").addClass("hide"),$("#connectedAddress").html(L.substring(0,4)+"..."+L.substring(L.length-4)+"<br/><a>Disconnect</a>"),$("#referredBy").html(n(S)),$("#profileAddress").html(n(L)),$("#introPanel").removeClass("hide").addClass("hide"),$("#profilePanel").removeClass("hide")}function n(e){return k?e.substring(0,15)+"...":e}async function t(){C.methods.users(L).call((function(r,l){r?console.log(r):0<l.id?(e(),$("#profilePanelRegisterSection").addClass("hide"),$("#profilePanelRegistered").removeClass("hide"),$("#refURL").val("https://DeMatrixs.Info/?ref="+L),$("#playerID").html(l.id),$("#matrixParent").html(n(l.referrer)),$("#totalInvitedPartners").html(l.partnersCount),$("#totalDividendEarnings").html(new BigNumber(l.divsClaimed).div(P).toFixed(5)+" POL"),o(i),setTimeout((function(){t()}),1e4)):(e(),o())}))}function o(e){C.methods.viewDivs(L).call((function(n,t){n||($("#newDivs").html(new BigNumber(t).div(P).toFixed(5)+" POL"),0<+t&&$("#withdrawBtn").removeClass("hide")),e&&e()}))}function i(){$("#matrixDiv").removeClass("hide"),$("#matrixDivX6").removeClass("hide"),W=new BigNumber(0),C.methods.userEarningsAll(L).call((function(e,n){if(!e){for(let e=1;13>e;e++)console.log("LEVEL:",e,n.x3MatrixEarnings[e].toString()),q[+e]=new BigNumber(n.x3MatrixEarnings[e].toString()),U[+e]=new BigNumber(n.x6MatrixEarnings[e].toString()),W=(W=W.plus(new BigNumber(n.x3MatrixEarnings[e].toString()))).plus(new BigNumber(n.x6MatrixEarnings[e].toString())),$("#x3_level"+e+"_earned").html(q[+e].div(P).toFixed(1)),$("#x6_level"+e+"_earned").html(U[+e].div(P).toFixed(1));$("#totalEarningsMATIC").html(W.div(P).toFixed(1)+" POL"),C.methods.usersHighestLevels(L).call((function(e,n){c((function(){l(n.x3HighestLevel,1,n.x6HighestLevel)}))}))}}))}function r(e,n,t,o,i){let a=n;0==e[1].length&&(e[1]=["0x0000000000000000000000000000000000000000"]),C.methods.users(e[1][n]).call((function(s,u){s||"0x0000000000000000000000000000000000000000"==e[1]||($("#x3_idOfLevel"+t+"_"+ +(a+1)).html("ID: "+u.id.toString()),$("#x3_idOfLevel"+t+"_"+ +(a+1)).attr("title","Partner ID:"+u.id.toString()+", Addr: "+e[1][a])),n+1<e[1].length?c((function(){r(e,n+1,t,o,i)})):C.methods.users(e[0]).call((function(n,r){n||($("#x3_level"+t+"_referrer").html(r.id.toString()),$("#x3_level"+t+"_referrer").attr("title","Current Referrer ID:"+r.id.toString()+", Addr: "+e[0])),c(13>t?function(){l(o,t+1,i)}:function(){d(i,1)})}))}))}function l(e,n,t){n<=e?($("#x3_level"+n+"_stats").removeClass("hide"),$("#x3_level"+n+"_buy").removeClass("hide"),$("#x3_level"+n+"_buy").addClass("hide"),$("#x3_level"+n+"_matrix").removeClass("disabled2"),$("#x3_level"+n).removeClass("disabled"),C.methods.usersX3Matrix(L,n).call((function(o,i){1==i[2]&&($("#x3_level"+n).addClass("disabled"),x("Level "+n+" is blocked for further partner payments until you upgrade to the next level!","Upgrade needed",1e4)),c((function(){r(i,0,n,e,t)}))}))):($("#x3_level"+n+"_stats").removeClass("hide"),$("#x3_level"+n+"_stats").addClass("hide"),$("#x3_level"+n+"_buy").removeClass("hide"),$("#x3_level"+n+"_matrix").removeClass("disabled2"),$("#x3_level"+n+"_matrix").addClass("disabled2"),$("#x3_level"+n).removeClass("disabled"),n>e+1?($("#x3_level"+n).removeClass("disabled"),$("#x3_level"+n).addClass("disabled")):$("#x3_level"+n+"_matrix").removeClass("disabled2"),c(13>n?function(){l(e,n+1,t)}:function(){d(t,1)}))}function a(e,n,t,o){let i=n;0==e[1].length&&(e[1]=["0x0000000000000000000000000000000000000000"]),C.methods.users(e[1][i]).call((function(r,l){r||"0x0000000000000000000000000000000000000000"==e[1]||($("#x6_idOfLevel"+t+"_1_"+ +(i+1)).html("ID: "+l.id.toString()),$("#x6_idOfLevel"+t+"_1_"+ +(i+1)).attr("title","Partner ID:"+l.id.toString()+", Addr: "+e[1][i])),n<e[1].length-1?c((function(){a(e,n+1,t,o)})):c((function(){s(e,0,t,o)}))}))}function s(e,n,t,o){let i=n;0==e[2].length&&(e[2]=["0x0000000000000000000000000000000000000000"]),C.methods.users(e[2][i]).call((function(r,l){r||"0x0000000000000000000000000000000000000000"==e[2]||($("#x6_idOfLevel"+t+"_2_"+ +(i+1)).html("ID: "+l.id.toString()),$("#x6_idOfLevel"+t+"_2_"+ +(i+1)).attr("title","Partner ID:"+l.id.toString()+", Addr: "+e[2][i])),n<e[2].length-1?c((function(){s(e,n+1,t,o)})):13>t&&c((function(){d(o,t+1)}))}))}function d(e,n){n<=e?($("#x6_level"+n+"_stats").removeClass("hide"),$("#x6_level"+n+"_buy").removeClass("hide"),$("#x6_level"+n+"_buy").addClass("hide"),$("#x6_level"+n+"_matrix").removeClass("disabled2"),$("#x6_level"+n).removeClass("disabled"),C.methods.usersX6Matrix(L,n).call((function(t,o){1==o[3]&&($("#x6_level"+n).addClass("disabled"),x("Level "+n+" is blocked for further partner payments until you upgrade to the next level!","Upgrade needed",1e4)),c((function(){C.methods.users(o[0]).call((function(t,i){t||($("#x6_level"+n+"_referrer").html(i.id.toString()),$("#x6_level"+n+"_referrer").attr("title","Current Referrer ID:"+i.id.toString()+", Addr: "+o[0])),a(o,0,n,e)}))}))}))):($("#x6_level"+n+"_stats").removeClass("hide"),$("#x6_level"+n+"_stats").addClass("hide"),$("#x6_level"+n+"_buy").removeClass("hide"),$("#x6_level"+n+"_matrix").removeClass("disabled2"),$("#x6_level"+n+"_matrix").addClass("disabled2"),$("#x6_level"+n).removeClass("disabled"),n>e+1?(console.log("Disabling x6:",n),$("#x6_level"+n).removeClass("disabled"),$("#x6_level"+n).addClass("disabled")):$("#x6_level"+n+"_matrix").removeClass("disabled2"),12>n&&d(e,n+1))}function c(e){setTimeout((function(){e()}),100)}async function u(){_=new Web3(A),console.log("Web3 instance is",_);const e=await _.eth.getChainId(),n=E.getChain(e);if(e!=b)return void $("#wrongChainError").foundation("open");console.log("NETWORK NAME:",n.name);const o=await _.eth.getAccounts();console.log("Got accounts",o),L=o[0],t()}async function v(){console.log("Opening a dialog",B);try{A=await B.connect()}catch(e){return void console.log("Could not get a wallet connection",e)}A.on("accountsChanged",(()=>{u()})),A.on("chainChanged",(()=>{u()})),A.on("networkChanged",(()=>{u()})),await async function(){const e=await new Web3(A);C=new e.eth.Contract(polymatrixabi.abi,D),await u()}()}function h(e,n){$("#loadingDiv").removeClass("hide"),k&&(G=0,X=n,Y=e,f()),C.methods.buyNewLevel(e,n).send({from:L,value:K[n-1].toString()},(function(t){return t?($("#loadingDiv").addClass("hide"),void x("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",2048e18)):void(k||(G=0,X=n,Y=e,f()))}))}function f(){console.log("CHECK BUY COMPLETE:",G),C.methods.usersHighestLevels(L).call((function(e,n){1==Y?+n.x3HighestLevel>=+X?($("#loadingDiv").addClass("hide"),setTimeout((function(){t()}),1500)):15>G?setTimeout((function(){G++,f()}),1500):($("#loadingDiv").addClass("hide"),x("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",2048e18)):+n.x6HighestLevel>=+X?($("#loadingDiv").addClass("hide"),setTimeout((function(){t()}),1500)):15>G?setTimeout((function(){G++,f()}),1500):($("#loadingDiv").addClass("hide"),x("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",2048e18))}))}function g(){console.log("CHECK USER COMPLETE:",j);try{C.methods.users(L).call({from:L},(function(e,n){0<n.id?(console.log("USER COMPLETE:",n),$("#loadingDiv").addClass("hide"),$("#playerID").html(n.id.toString()),setTimeout((function(){t()}),1500)):15>j?setTimeout((function(){j++,g()}),1500):($("#loadingDiv").addClass("hide"),x("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",2048e18))}))}catch(e){setTimeout((function(){j++,g()}),1500)}}function m(){window.open("/dematrixs.pdf","_blank").focus()}function x(e,n,t){$.toast({text:e,heading:n||"POLYMATRIX",showHideTransition:"fade",allowToastClose:!0,hideAfter:t||8e3,stack:5,position:"bottom-right",bgColor:"#ff3cbe",textColor:"#eeeeee",textAlign:"left",loader:!0,loaderBg:"#9EC600",beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}})}var C,_;const b=137,w="0x7AeC8DaeFe1D436EfcEa813fa6469e2Db156cb1B",y=window.Web3Modal.default,p=window.WalletConnectProvider.default,E=window.evmChains,D="0x165cD535DC20Ac1a5ddBBe4Be76280eBa89295e5";let B,A,L;new BigNumber("1024000000000000000000");var S,k=!1;window.matchMedia("only screen and (pointer:coarse)").matches&&(k=!0);const P=8e17;Array(12),Array(12);var N=Array(12),O=Array(12),I=Array(12),R=Array(12),T=Array(12),M=Array(12),H=Array(12),F=Array(12),q=Array(12),U=Array(12),W=new BigNumber(0);for(let e=0;12>e;e++)N[e]=[],T[e]=[],O[e]=[],M[e]=[],I[e]=[],H[e]=[],R[e]=[],F[e]=[],q[e]=new BigNumber(0),U[e]=new BigNumber(0);var K=[];K[0]=new BigNumber(1e18),K[11]=new BigNumber("1024e18"),K[12]=new BigNumber("2048e18");for(let e=1;12>e;e++)K[e]=new BigNumber(K[e-1].toString()).times(2);$(document).foundation(),function(){var e=document.querySelector(".js-shareUrl"),n=function(e){return function(){document.execCommand("copy",!1,e.select())}}(e);e.addEventListener("click",(function(){n(),x("Your REF URL has been copied to your clipboard ready for you to share!")}),!1);var t=function(e){var n,t,o=decodeURIComponent(window.location.search.substring(1)).split("&");for(t=0;t<o.length;t++)if((n=o[t].split("="))[0]===e)return void 0===n[1]||n[1]}("ref")||"";if(0<t.length)S=t;else{let e=Cookies.get("ref")||"";0<e.length&&(S=e)}S||(console.log("NO REF"),S=w),"undefined"==S&&(console.log("NO REF2"),S=w),Cookies.set("ref",S,{expires:60}),console.log("REF:",S),S&&(refererShort=S.substring(0,20)+"..."),B=new y({cacheProvider:!1,providerOptions:{walletconnect:{package:p,options:{rpc:{chainID_required:"https://rpc-mainnet.matic.network"},network:"polygon"}}},disableInjectedProvider:!1})}(),document.querySelector("#unlockBtn").addEventListener("click",v),document.querySelector("#unlockBtn2").addEventListener("click",v),document.querySelector("#btn-connect").addEventListener("click",v),document.querySelector("#connectedAddress").addEventListener("click",(async function(){console.log("Killing the wallet connection",A),A.close&&(await A.close(),await B.clearCachedProvider(),A=null),L=null})),document.querySelector("#withdrawBtn").addEventListener("click",(function(){$("#loadingDiv").removeClass("hide"),C.methods.claimDivs().send({from:L},(function(e){return e?($("#loadingDiv").addClass("hide"),void x("An error occured sending your transaciton - please ensure you have enough gas and try again","Error with transaciton",2048e18)):($("#loadingDiv").addClass("hide"),$("#newDivs").html("0 POL"),void x("Dividends are being processed by the blockchain and will be in your wallet shortly!","Withdrawing Dividends",4e4))}))})),document.querySelector("#registerBtn").addEventListener("click",(function(){C.methods.isUserExists(S).call((function(e,n){console.log("REF CHECK:",e,n);let t=!0;return e?(console.log(e),void x("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",2048e18)):(0==n&&(t=!1),t||(S=w),console.log("REG REF:",S),Cookies.set("ref",S,{expires:60}),$("#loadingDiv").removeClass("hide"),k&&(j=0,g()),void C.methods.registrationExt(S).send({from:L,value:K[0].times(2)},(function(e){return e?($("#loadingDiv").addClass("hide"),void x("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",2048e18)):void(k||(j=0,g()))})))}))}));for(let e=2;15>e;e++)$("#x3BuyBtn_level"+e).click((function(){h(1,e)})),$("#x6BuyBtn_level"+e).click((function(){h(2,e)}));var G=0,X=0,Y=0,j=0;return document.querySelector("#gameGudeBtn").addEventListener("click",m),document.querySelector("#viewGuideBtn").addEventListener("click",m),void document.querySelector("#viewContractBtn").addEventListener("click",(function(){window.open("https://polygonscan.com/address/0x165cD535DC20Ac1a5ddBBe4Be76280eBa89295e5","_blank").focus()}))}));