  $(document).ready(function() {
  albumPage.init();
})

var albumPage = {
  init: function() {
    albumPage.styling();
    albumPage.events();
  },
  styling: function() {
    $('.home .row').html("");
    albums.forEach(function(element,idx) {
      var albumHtmlStr = albumPage.htmlGenerator(albumTemplates.homeTmpl,element);
      $('.home .row').append(albumHtmlStr)
    });
    $('.albums').html("");
    albums.forEach(function(element,idx) {
      var albumHtmlStr = albumPage.htmlGenerator(albumTemplates.albumTmpl,element);
      $('.albums').append(albumHtmlStr);
      element.pictures.forEach(function (picElement, index) {
        var picHtmlStr = albumPage.htmlGenerator(albumTemplates.innerPicsTmpl,picElement);
        $('.' + element.id + ' .inner_pics').append(picHtmlStr);
      });
      var navHtmlStr = albumPage.htmlGenerator(albumTemplates.navTmpl,element);
      $('.albumNav ul').append(navHtmlStr);
    });
  },
  events: function() {


    //Change pages
    $('.albumNav li').on('click', function(event) {
      event.preventDefault();
      var thingWeClickText = $(this).attr('id');
      var ourClassToShow = "." + thingWeClickText.toLowerCase();

      if(thingWeClickText.toLowerCase() === 'home') {
        $(ourClassToShow).removeClass('hidden')
        $(".albumNav").addClass("hidden");
      } else {
        //var htmlStr = albumPage.htmlGenerator(albumTemplates[thingWeClickText.toLowerCase()])
        $(ourClassToShow).removeClass('hidden');
        $(ourClassToShow).siblings().addClass('hidden')
        $('.home').addClass('hidden');
      }
    })

    $('.album_cover').on('click', function(event) {
      event.preventDefault();
      var thingWeClickText = $(this).data('album');
      var ourClassToShow = "." + thingWeClickText.toLowerCase();


        //var htmlStr = albumPage.htmlGenerator(albumTemplates[thingWeClickText.toLowerCase()])
        $(ourClassToShow).removeClass('hidden');
        $(ourClassToShow).siblings().addClass('hidden')
        $('.home').addClass('hidden');
        $(".albumNav").removeClass("hidden");

    })
},
  templification: function(template) {
    return _.template(template);
  },

  htmlGenerator: function(template,data) {
    var tmpl = albumPage.templification(template);
    return tmpl(data);
  }

};
