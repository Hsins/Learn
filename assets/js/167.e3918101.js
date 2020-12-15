(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{546:function(a,n,e){"use strict";e.r(n);var t=e(8),s=Object(t.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"making-real-projects-with-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-real-projects-with-docker"}},[a._v("#")]),a._v(" Making Real Projects with Docker")]),a._v(" "),e("h2",{attrs:{id:"project-outline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-outline"}},[a._v("#")]),a._v(" Project Outline")]),a._v(" "),e("p",[a._v("在這一節的內容中，會使用 Docker 容器來實際打包一個簡單的 Node.js 網路應用程式專案。大致上可以分為以下步驟：")]),a._v(" "),e("ol",[e("li",[a._v("創建 Node.js 網路應用程式")]),a._v(" "),e("li",[a._v("創建 "),e("code",[a._v("Dockerfile")])]),a._v(" "),e("li",[a._v("使用 "),e("code",[a._v("docker build")]),a._v(" 創建 Docker 映像")]),a._v(" "),e("li",[a._v("使用 Docker 映像創建並運行容器實例")]),a._v(" "),e("li",[a._v("開放網路連接")])]),a._v(" "),e("p",[a._v("在內容中會有一部份是錯誤的使用方式，這部份會進行強調與說明。")]),a._v(" "),e("h2",{attrs:{id:"setup-node-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-node-server"}},[a._v("#")]),a._v(" Setup Node Server")]),a._v(" "),e("p",[a._v("首先在專案資料夾下建立 "),e("code",[a._v("index.js")]),a._v(" 和 "),e("code",[a._v("package.json")]),a._v(" 檔：")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" express "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'express'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("express")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'How are you doing'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Listening on port 8080'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n  "dependencies": {\n    "express": "*"\n  },\n  "scripts": {\n    "start": "node index.js"\n  }\n}\n')])])]),e("h2",{attrs:{id:"planned-error-npm-not-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#planned-error-npm-not-found"}},[a._v("#")]),a._v(" Planned Error: NPM NOT FOUND")]),a._v(" "),e("p",[a._v("在創建好 "),e("code",[a._v("index.js")]),a._v(" 和 "),e("code",[a._v("package.json")]),a._v(" 之後，在目錄下創建一個 "),e("code",[a._v("Dockerfile")]),a._v(" 檔案：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('# Specify a base image\nFROM alpine\n\n# Install some dependencies\nRUN npm install\n\n# Default command\nCMD ["npm", "start"]\n')])])]),e("p",[a._v("執行 "),e("code",[a._v("docker build .")]),a._v(" 命令時，系統會返回 "),e("code",[a._v("/bin/sh: npm: not found")]),a._v(" 的錯誤訊息。")]),a._v(" "),e("p",[a._v("這是由於我們所選擇的基礎映像 "),e("a",{attrs:{href:"https://hub.docker.com/_/alpine",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("alpine")])]),a._v(" 並不包含 "),e("code",[a._v("npm")]),a._v(" 指令。我們可以選擇其他的映像，比如 "),e("a",{attrs:{href:"https://hub.docker.com/_/node",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("node")])]),a._v(" 或是使用帶有標籤的 "),e("code",[a._v("node:alpine")]),a._v("。")]),a._v(" "),e("p",[a._v("目前 Docker 官方推薦使用安全且輕量的 "),e("a",{attrs:{href:"https://www.alpinelinux.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alpine Linx")]),a._v(" 代替其他作業系統作為基礎映像。他的容量僅僅只有 5 MB 左右，能夠提昇下載速度，並且提高主機之間的切換方便性，也佔用較少的硬碟空間。")]),a._v(" "),e("h2",{attrs:{id:"planned-error-no-such-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#planned-error-no-such-file"}},[a._v("#")]),a._v(" Planned Error: NO SUCH FILE")]),a._v(" "),e("p",[a._v("我們將選擇的基礎映像改為已經含有 "),e("code",[a._v("npm")]),a._v(" 命令的 "),e("code",[a._v("node:alpine")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('# Specify a base image\nFROM node:alpine\n\n# Install some dependencies\nRUN npm install\n\n# Default command\nCMD ["npm", "start"]\n')])])]),e("p",[a._v("執行 "),e("code",[a._v("docker build .")]),a._v(" 命令時，此時系統會返回 "),e("code",[a._v("no such file or directory, open '/package.json'")]),a._v(" 的錯誤訊息。")]),a._v(" "),e("p",[a._v("這是由於容器在創建時，所有的檔案系統與內容都來自於基礎映像的快照（snapshot），也就是說我們在專案資料夾中的 "),e("code",[a._v("index.js")]),a._v(" 和 "),e("code",[a._v("package.json")]),a._v(" 並不存在於容器所認知的檔案系統中。為了解決這個問題，我們要將專案文件夾中的檔案，在容器被創建時一併複製一份進去：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('# Specify a base image\nFROM node:alpine\n\n# Install some dependencies\nCOPY ./ ./\nRUN npm install\n\n# Default command\nCMD ["npm", "start"]\n')])])]),e("p",[a._v("接著創建映像並運行容器：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ docker build -t hsins/simpleweb "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n$ docker run hsins/simpleweb\n")])])]),e("h2",{attrs:{id:"container-port-mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container-port-mapping"}},[a._v("#")]),a._v(" Container Port Mapping")]),a._v(" "),e("p",[a._v("此時我們如果直接訪問 "),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8080/")]),a._v(" 是不會有任何結果的，因為網頁應用所啟用的通訊埠（port）是在容器內，還需要進行通訊埠轉發（Port Mapping）。通訊埠轉發並不會在 "),e("code",[a._v("Dockerfile")]),a._v(" 中進行設定，而是針對容器進行設定：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker run -p <LOCAL_PORT>:<CONTAINER_PORT> <IMAGE_NAME>")]),a._v("\n$ docker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 hsins:simpleweb\n")])])]),e("h2",{attrs:{id:"specifying-a-working-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specifying-a-working-directory"}},[a._v("#")]),a._v(" Specifying a Working Directory")]),a._v(" "),e("p",[a._v("到目前為止，還有一個美中不足的就是我們並沒有指定工作目錄。這樣一來所有複製的檔案，以及容器運行後的進入點會是系統根目錄，倘若我們要複製的檔案或文件夾與之衝突，會被覆蓋掉而造成錯誤，也有安全性的問題。我們應該在 "),e("code",[a._v("Dockerfile")]),a._v(" 中設定工作目錄：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('# Specify a base image\nFROM node:alpine\n\nWORKDIR /usr/app\n\n# Install some dependencies\nCOPY ./ ./\nRUN npm install\n\n# Default command\nCMD ["npm", "start"]\n')])])]),e("h2",{attrs:{id:"minimizing-cache-busting-and-rebuilds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimizing-cache-busting-and-rebuilds"}},[a._v("#")]),a._v(" Minimizing Cache Busting and Rebuilds")]),a._v(" "),e("p",[a._v("容器的運行來自於映像的快照，而映像中的所有內容與設定是 "),e("code",[a._v("docker build")]),a._v(" 時根據 "),e("code",[a._v("Dockerfile")]),a._v(" 與專案文件夾下的內容所決定的，倘若今天修改了 "),e("code",[a._v("index.js")]),a._v(" 的內容，我們必須重新運行一次 "),e("code",[a._v("docker build")]),a._v(" 來生成映像。為了能夠加快映像的生成，我們可以善用緩存：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('# Specify a base image\nFROM node:alpine\n\nWORKDIR /usr/app\n\n# Install some dependencies\nCOPY ./package.json ./\nRUN npm install\nCOPY ./ ./\n\n# Default command\nCMD ["npm", "start"]\n')])])]),e("p",[a._v("注意我們在執行 "),e("code",[a._v("npm install")]),a._v(" 之前複製 "),e("code",[a._v("package.json")]),a._v("，而其餘檔案則在 "),e("code",[a._v("npm install")]),a._v(" 之後才進行複製。也就是說，當重新運行 "),e("code",[a._v("docker build")]),a._v(" 時，如果 "),e("code",[a._v("package.json")]),a._v(" 中的內容沒有變動，會直接使用緩存來加速映像的創建。")])])}),[],!1,null,null,null);n.default=s.exports}}]);