function MetaMenu(){
  this.html = $("<div class=meta-menu>META</div>")
  var self = this
  var linkList = $("<ul class=link-list>")
  var links = [
    "/dashboard/index.html",
  	"/dashboard/toolkits/chat/new-chat-project.html",
  	"/docs/infrastructure/feeds/get-started.html",
  	"/docs/infrastructure/pubsub/get-started.html",
  	"/docs/toolkits/chat/get-started.html",
  	"/index.html",
  	"/infrastructure/feeds/index.html",
  	"/infrastructure/pubsub/index.html",
  	"/products.html",
  	"/toolkits/chat.html",
  	"/toolkits/doc_sync.html",
  	"/toolkits/index.html",
  	"/toolkits/video.html"
  ]
  links.forEach(function(link){
    linkList.append($(`<li><a href=${link}>${link}</a></li>`))
  })
  self.html.append(linkList)
}

$().ready(function(){
  $("body").append(new MetaMenu().html)
})