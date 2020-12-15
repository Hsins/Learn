(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{779:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-databases-and-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-databases-and-tables"}},[t._v("#")]),t._v(" Create Databases and Tables")]),t._v(" "),a("h2",{attrs:{id:"create-and-drop-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-drop-databases"}},[t._v("#")]),t._v(" Create and Drop Databases")]),t._v(" "),a("p",[t._v("我們在伺服器上所啟動的資料庫服務中，通常會同時包含許多不同的資料庫，因為一個較為複雜的應用程式資料可能來自不同的資料庫：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/26391143/82979372-7c676980-a019-11ea-8ed4-27b633bd46af.png",alt:"Database Server",height:"300"}})]),t._v(" "),a("h3",{attrs:{id:"create-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-databases"}},[t._v("#")]),t._v(" Create Databases")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("CREATE DATABASE <database_name>;")]),t._v(" 命令創建資料庫，命名時建議使用底線 "),a("code",[t._v("_")]),t._v(" 取代減號 "),a("code",[t._v("-")]),t._v("，儘量避免空白並統一命名規則：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Create databases:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- CREATE DATABASE <database_name>;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" soap_store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"dropping-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dropping-databases"}},[t._v("#")]),t._v(" Dropping Databases")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("DROP DATABASE <database_name>;")]),t._v(" 命令刪除既有的資料庫：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Drop databases:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- DROP DATABASE <database_name>;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" hello_world_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"use-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-databases"}},[t._v("#")]),t._v(" Use Databases")]),t._v(" "),a("p",[t._v("創建好資料庫之後，我們使用 "),a("code",[t._v("USE <database name>;")]),t._v(" 命令在選擇要使用的資料庫，而 "),a("code",[t._v("SELECT database();")]),t._v(" 命令可以告知我們當前選擇的是哪一個資料庫：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Choose what database to be used:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- USE <database name>;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" dog_walking_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"lecture-introduction-to-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-introduction-to-tables"}},[t._v("#")]),t._v(" [Lecture] Introduction to Tables")]),t._v(" "),a("p",[t._v("非關聯性資料庫由一張張的資料 "),a("strong",[t._v("表（table）")]),t._v(" 所構成，舉例來說一張存放貓咪資料的資料表可能如下所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Breed")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Age")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Blue")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Scottish Fold")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Rocket")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Persian")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Monty")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tabby")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Sam")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Munchkin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")])])])]),t._v(" "),a("p",[t._v("其中 "),a("code",[t._v("Name")]),t._v("、"),a("code",[t._v("Bredd")]),t._v(" 和 "),a("code",[t._v("Age")]),t._v(" 稱為 "),a("strong",[t._v("表頭（headers）")]),t._v(" 或 "),a("strong",[t._v("欄（columns）")]),t._v("，而實際存放的資料稱為 "),a("strong",[t._v("列（rows）")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"lecture-the-basic-datatypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-the-basic-datatypes"}},[t._v("#")]),t._v(" [Lecture] The Basic Datatypes")]),t._v(" "),a("p",[t._v("在進行資料庫建置時，表中通常會限制資料型態來使得處理上具有一致性，在 MySQL 提供了以下的資料型態：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("數字型態（Numeric Types）")]),t._v("："),a("code",[t._v("INT")]),t._v("、"),a("code",[t._v("SMALLINT")]),t._v("、"),a("code",[t._v("TINYINT")]),t._v("、"),a("code",[t._v("MEDIUMINT")]),t._v("、"),a("code",[t._v("BIGINT")]),t._v("、"),a("code",[t._v("DECIMAL")]),t._v("、"),a("code",[t._v("NUMERIC")]),t._v("、"),a("code",[t._v("FLOAT")]),t._v("、"),a("code",[t._v("DOUBLE")]),t._v("、"),a("code",[t._v("BIT")]),t._v("…等。")]),t._v(" "),a("li",[a("strong",[t._v("字串型態（String Types）")]),t._v("："),a("code",[t._v("CHAR")]),t._v("、"),a("code",[t._v("VARCHAR")]),t._v("、"),a("code",[t._v("BINARY")]),t._v("、"),a("code",[t._v("VARBINARY")]),t._v("、"),a("code",[t._v("BLOB")]),t._v("、"),a("code",[t._v("TINYBLOB")]),t._v("、"),a("code",[t._v("MEDIUMBLOB")]),t._v("、"),a("code",[t._v("LONGBLOB")]),t._v("、"),a("code",[t._v("TEXT")]),t._v("、"),a("code",[t._v("TINYTEXT")]),t._v("、"),a("code",[t._v("MEDIUMTEXT")]),t._v("、"),a("code",[t._v("LONGTEXT")]),t._v("、"),a("code",[t._v("ENUM")]),t._v("…等。")]),t._v(" "),a("li",[a("strong",[t._v("日期型態（Data Types）")]),t._v("："),a("code",[t._v("DATE")]),t._v("、"),a("code",[t._v("DATETIME")]),t._v("、"),a("code",[t._v("TIMESTAMP")]),t._v("、"),a("code",[t._v("TIME")]),t._v("、"),a("code",[t._v("YEAR")]),t._v("…等。")])]),t._v(" "),a("p",[t._v("其中比較常用的是用以表示數字（最大可以表示到 4294967295）的 "),a("code",[t._v("INT")]),t._v(" 整數型態以及表示字串長度在 255 內的 "),a("code",[t._v("VARCHAR")]),t._v(" 短字串型態。")]),t._v(" "),a("h2",{attrs:{id:"lecture-note-about-int-max-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-note-about-int-max-size"}},[t._v("#")]),t._v(" [Lecture] Note about INT max size")]),t._v(" "),a("p",[t._v("在前一小節中，對於整數型態 "),a("code",[t._v("INT")]),t._v(" 的大小限制會涉及到有無符號而有所區別，建議可以參考 "),a("a",{attrs:{href:"https://stackoverflow.com/questions/3895692/what-does-unsigned-in-mysql-mean-and-when-to-use-it/3895705#3895705",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow | What does “unsigned” in MySQL mean and when to use it?")]),t._v(" 中的說明。")]),t._v(" "),a("h2",{attrs:{id:"lecture-basic-datatypes-challenge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-basic-datatypes-challenge"}},[t._v("#")]),t._v(" [Lecture] Basic Datatypes Challenge")]),t._v(" "),a("p",[t._v("如果我們要建置一個存放 Tweets 資料的資料庫，嘗試規劃一下以下資料採用 MySQL 的資料型態：")]),t._v(" "),a("ul",[a("li",[t._v("A username (max 15 chars)")]),t._v(" "),a("li",[t._v("The tweet content (max 140 chars)")]),t._v(" "),a("li",[t._v("Number of favorites")])]),t._v(" "),a("h2",{attrs:{id:"lecture-basic-datatypes-challenge-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-basic-datatypes-challenge-solution"}},[t._v("#")]),t._v(" [Lecture] Basic Datatypes Challenge - Solution")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Username")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Content")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Favorites")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("VARCHAR(15)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("VARCHAR(140)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("INT")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("coolguy")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("my first tweet")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("guitar_queen")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("I love music:)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("lonely_heart")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("still looking 4 love")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),a("h2",{attrs:{id:"lecture-creating-your-own-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-creating-your-own-tables"}},[t._v("#")]),t._v(" [Lecture] Creating Your Own Tables")]),t._v(" "),a("p",[t._v("在 MySQL 中，我們使用 "),a("code",[t._v("CREATE TABLE <tablename> (column_name data_type);")]),t._v(" 命令來建置資料表並指定標頭以及所使用的資料型態。")]),t._v(" "),a("h2",{attrs:{id:"lecture-code-creating-your-own-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-code-creating-your-own-tables"}},[t._v("#")]),t._v(" [Lecture] CODE: Creating Your Own Tables")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- To Create a Table")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- CREATE TABLE tablename")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--  (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--     column_name data_type,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--     column_name data_type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--  );")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Create a cats Table")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" cats\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"lecture-how-do-we-know-it-worked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-how-do-we-know-it-worked"}},[t._v("#")]),t._v(" [Lecture] How Do We Know It Worked?")]),t._v(" "),a("p",[t._v("當我們創建好資料表後，可以使用 "),a("code",[t._v("SHOW <tablename>;")]),t._v(" 來顯示既有的資料表，而 "),a("code",[t._v("SHOW COLUMNS FROM <tablename>;")]),t._v(" 則可以列出表中的欄位，除此之外也可以使用 "),a("code",[t._v("DESC <tablename>;")]),t._v("，但值得注意的是雖然目前 "),a("code",[t._v("DESC")]),t._v(" 和 "),a("code",[t._v("SHOW COLUMNS FROM")]),t._v(" 所得到的結果看起來是相同的，但這兩個命令之間並不完全相等。")]),t._v(" "),a("h2",{attrs:{id:"lecture-code-how-do-we-know-it-worked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-code-how-do-we-know-it-worked"}},[t._v("#")]),t._v(" [Lecture] CODE: How Do We Know It Worked?")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMNS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" tablename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" tablename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"lecture-dropping-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-dropping-tables"}},[t._v("#")]),t._v(" [Lecture] Dropping Tables")]),t._v(" "),a("p",[t._v("如果要刪除既有的資料表，使用 "),a("code",[t._v("DROP TABLE <tablename>;")]),t._v(" 命令。")]),t._v(" "),a("h2",{attrs:{id:"lecture-code-dropping-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-code-dropping-tables"}},[t._v("#")]),t._v(" [Lecture] CODE: Dropping Tables")]),t._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Dropping Tables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- DROP TABLE <tablename>;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" cats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"lecture-creating-your-own-tables-challenge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-creating-your-own-tables-challenge"}},[t._v("#")]),t._v(" [Lecture] Creating Your Own Tables Challenge")]),t._v(" "),a("p",[t._v("使用這一章節學到的命令，完成以下目標：")]),t._v(" "),a("ul",[a("li",[t._v("Create a pastries table")]),t._v(" "),a("li",[t._v("It should include 2 columns:\n"),a("ul",[a("li",[a("code",[t._v("name")]),t._v(" (50 characters max)")]),t._v(" "),a("li",[a("code",[t._v("quantity")])])])]),t._v(" "),a("li",[t._v("Inspect your table/columns in the CLI")]),t._v(" "),a("li",[t._v("Delete your table!")])]),t._v(" "),a("h2",{attrs:{id:"lecture-code-creating-your-own-tables-challenge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-code-creating-your-own-tables-challenge"}},[t._v("#")]),t._v(" [Lecture] CODE: Creating Your Own Tables Challenge")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" pastries\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    quantity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" pastries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" pastries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);