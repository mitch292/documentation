(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{236:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("p",[t._v("You can deploy your own instant, relevant, and typo-tolerant MeiliSearch engine by yourself.\nIt can be achieved by following these three steps.")]),t._v(" "),a("h3",{attrs:{id:"deploy-the-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-server"}},[t._v("#")]),t._v(" Deploy the Server")]),t._v(" "),a("p",[t._v("You can deploy the server on your own machine. It will listen to HTTP requests on the 7700 port by default.")]),t._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"curl"}},[a("p",[t._v("This script will download the latest stable release of MeiliSearch.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/meilisearch/MeiliSearch/master/download-latest.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n$ ./meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),t._v(" "),a("Tab",{attrs:{label:"Docker"}},[a("p",[t._v("Using Docker you can choose to run "),a("a",{attrs:{href:"https://hub.docker.com/r/getmeili/meilisearch/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("any available tags"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run -it --rm -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7700")]),t._v(":7700 getmeili/meilisearch\nServer is listening on: http://0.0.0.0:7700\n")])])])]),t._v(" "),a("Tab",{attrs:{label:"Cargo"}},[a("p",[t._v("If you have the Rust toolchain installed you can compile MeiliSearch from the sources.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/meilisearch/MeiliSearch.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" MeiliSearch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cargo run --release\nServer is listening on: http://127.0.0.1:7700\n")])])])])],1),t._v(" "),a("h3",{attrs:{id:"create-an-index-and-upload-some-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-index-and-upload-some-documents"}},[t._v("#")]),t._v(" Create an Index and Upload Some Documents")]),t._v(" "),a("p",[t._v("MeiliSearch can serve multiple indexes, with different kinds of documents. Therefore, it is required to create an index before sending documents to it.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:7700/indexes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "name" : "Movie"\n  }\'')]),t._v("\n")])])]),a("p",[t._v("The response looks like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "name": "Movie",\n  "uid": "12345678",\n  ...\n}\n')])])]),a("p",[t._v("This "),a("code",[t._v("uid")]),t._v(" is the "),a("code",[t._v(":uid")]),t._v(" identifier used in all "),a("code",[t._v("indexes/:uid")]),t._v(" routes.")]),t._v(" "),a("p",[t._v("Now that the server knows about our brand new index, we can send it data.\nWe provide you a dataset, it is available in the "),a("code",[t._v("datasets/")]),t._v(" "),a("a",{attrs:{href:"https://github.com/meilisearch/MeiliSearch/tree/master/datasets",target:"_blank",rel:"noopener noreferrer"}},[t._v("directory"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:7700/indexes/12345678/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data @datasets/movies/movies.json\n")])])]),a("h3",{attrs:{id:"search-for-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-for-documents"}},[t._v("#")]),t._v(" Search for Documents")]),t._v(" "),a("p",[t._v("The search engine is now aware of our documents and can serve those via our HTTP server.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:7700/indexes/12345678/search?q=botman'")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"29751"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Batman Unmasked: The Psychology of the Dark Knight"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/jjHu128XLARc2k4cJrblAvZe0HE.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Delve into the world of Batman and the vigilante justice tha"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2008-07-15"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"471474"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Batman: Gotham by Gaslight"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/7souLi5zqQCnpZVghaXv0Wowi0y.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ve Victorian Age Gotham City, Batman begins his war on crime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-01-12"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offset"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"processingTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"botman"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("jq")]),t._v(" command line tool"),a("OutboundLink")],1),t._v(" can greatly help you read the server responses.")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);