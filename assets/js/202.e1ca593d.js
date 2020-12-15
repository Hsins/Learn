(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{581:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-timeout"}},[t._v("#")]),t._v(" Git Timeout")]),t._v(" "),s("h2",{attrs:{id:"lecture-git-branches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lecture-git-branches"}},[t._v("#")]),t._v(" [Lecture] Git Branches")]),t._v(" "),s("p",[t._v("我們可以將 "),s("strong",[t._v("分支（branch）")]),t._v(" 想像成是專案的不同版本，在開發過程中我們可以創建分支來進行開發、嘗試新的特性來避免影響到主要的專案，在創建新分支要先確認當前是否有尚未提交的紀錄：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Show all branchs")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add a new branch and switch to it")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch count-to-ten\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout count-to-ten\n")])])]),s("p",[t._v("上述的指令還可以替代成：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add a new branch and switch in one-line command")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b count-to-ten\n")])])]),s("p",[t._v("在分支下進行的更動不會影響到其他分支，如果要使更動的部分也加到另外一個分支時，必須進行分支的合併：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Swich to the master branch")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Merge branchs")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge count-to-ten\n")])])]),s("p",[t._v("在進行分支的合併之後，會連帶將提交的訊息也併入。通常在合併分支之後，為了保持專案的乾淨，建議將不必要使用到的分支進行刪除：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Delete branch")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d count-to-ten\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);