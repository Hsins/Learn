(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{791:function(t,s,a){"use strict";a.r(s);var e=a(8),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introducing-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-node"}},[t._v("#")]),t._v(" Introducing Node")]),t._v(" "),a("p",[t._v("從這一單元開始，我們將會使用資料庫來開發一個應用程式，這需要後端程式語言的支持，所以這一單元將會介紹 Node.js。")]),t._v(" "),a("h2",{attrs:{id:"mysql-and-other-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-and-other-languages"}},[t._v("#")]),t._v(" MySQL and Other Languages")]),t._v(" "),a("h2",{attrs:{id:"but-what-about-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#but-what-about-php"}},[t._v("#")]),t._v(" BUT WHAT ABOUT PHP")]),t._v(" "),a("h2",{attrs:{id:"introduction-to-join-us-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-join-us-app"}},[t._v("#")]),t._v(" Introduction to JOIN US app")]),t._v(" "),a("h2",{attrs:{id:"setting-up-cloud9-for-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-cloud9-for-node"}},[t._v("#")]),t._v(" Setting Up Cloud9 for Node")]),t._v(" "),a("h2",{attrs:{id:"_5-minute-nodejs-crash-course"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-minute-nodejs-crash-course"}},[t._v("#")]),t._v(" 5 Minute NodeJS Crash Course")]),t._v(" "),a("h2",{attrs:{id:"code-5-minute-node-crash-course"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-5-minute-node-crash-course"}},[t._v("#")]),t._v(" CODE: 5 Minute Node Crash Course")]),t._v(" "),a("p",[t._v('Print "HELLO WORLD" 500 times using Node:')]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HELLO WORLD!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Execute file with:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ node filename.js\n")])])]),a("h2",{attrs:{id:"note-about-faker-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-about-faker-install"}},[t._v("#")]),t._v(" Note about Faker install")]),t._v(" "),a("p",[t._v("在下一個單元會使用 "),a("code",[t._v("Faker")]),t._v(" 套件包來生成虛擬的測試資料，但如果在專案資料夾下沒有 "),a("code",[t._v("package.json")]),t._v(" 的話可能會出現警告訊息，可以忽略他或是創建一個 "),a("code",[t._v("app.js")]),t._v(" 文件並執行以下代碼：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),a("h2",{attrs:{id:"introduction-to-npm-and-faker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-npm-and-faker"}},[t._v("#")]),t._v(" Introduction to NPM and Faker")]),t._v(" "),a("h2",{attrs:{id:"code-introduction-to-npm-and-faker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-introduction-to-npm-and-faker"}},[t._v("#")]),t._v(" CODE: Introduction to NPM and Faker")]),t._v(" "),a("h2",{attrs:{id:"introducing-the-mysql-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-the-mysql-package"}},[t._v("#")]),t._v(" Introducing the MySQL Package")]),t._v(" "),a("h2",{attrs:{id:"note-about-connecting-node-to-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-about-connecting-node-to-mysql"}},[t._v("#")]),t._v(" Note about connecting Node to MySQL")]),t._v(" "),a("h2",{attrs:{id:"connecting-node-to-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-node-to-mysql"}},[t._v("#")]),t._v(" Connecting Node to MySQL")]),t._v(" "),a("h2",{attrs:{id:"code-connecting-node-to-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-connecting-node-to-mysql"}},[t._v("#")]),t._v(" CODE: Connecting Node to MySQL")]),t._v(" "),a("h2",{attrs:{id:"creating-our-users-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-our-users-table"}},[t._v("#")]),t._v(" Creating Our Users Table")]),t._v(" "),a("h2",{attrs:{id:"code-creating-our-users-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-creating-our-users-table"}},[t._v("#")]),t._v(" CODE: Creating Our Users Table")]),t._v(" "),a("h2",{attrs:{id:"selecting-using-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selecting-using-node"}},[t._v("#")]),t._v(" Selecting Using Node")]),t._v(" "),a("h2",{attrs:{id:"code-selecting-using-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-selecting-using-node"}},[t._v("#")]),t._v(" CODE: Selecting Using Node")]),t._v(" "),a("h2",{attrs:{id:"inserting-using-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inserting-using-node"}},[t._v("#")]),t._v(" Inserting Using Node")]),t._v(" "),a("h2",{attrs:{id:"code-inserting-using-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-inserting-using-node"}},[t._v("#")]),t._v(" CODE: Inserting Using Node")]),t._v(" "),a("h2",{attrs:{id:"some-mysql-node-magic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-mysql-node-magic"}},[t._v("#")]),t._v(" Some MySQL/Node Magic")]),t._v(" "),a("h2",{attrs:{id:"bulk-inserting-500-users-finally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulk-inserting-500-users-finally"}},[t._v("#")]),t._v(" Bulk Inserting 500 Users - Finally!")]),t._v(" "),a("h2",{attrs:{id:"code-bulk-inserting-500-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-bulk-inserting-500-users"}},[t._v("#")]),t._v(" CODE: Bulk Inserting 500 Users")]),t._v(" "),a("h2",{attrs:{id:"_500-users-exercises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_500-users-exercises"}},[t._v("#")]),t._v(" 500 Users Exercises")]),t._v(" "),a("h2",{attrs:{id:"_500-users-exercises-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_500-users-exercises-solutions"}},[t._v("#")]),t._v(" 500 Users Exercises Solutions")]),t._v(" "),a("h2",{attrs:{id:"code-500-users-exercises-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-500-users-exercises-solutions"}},[t._v("#")]),t._v(" CODE: 500 Users Exercises Solutions")])])}),[],!1,null,null,null);s.default=r.exports}}]);