var fs = require('fs');
var path = require('path');
var gui = require('nw.gui');
var im = require('imagemagick');
var path = require('path');

// Get the current window
var win = gui.Window.get();

win.setAlwaysOnTop('top');

window.ondragover = window.ondrop = function(e){ e.preventDefault(); return false; }

$(document).ready(function(){

	$('#drop').on('dragover', function(e){
		$(this).addClass('hover');
	});
	$('#drop').on('dragleave', function(e){
		$(this).removeClass('hover');
	});

	$('#drop').on('drop', function(e){
		e.preventDefault();

			//console.log(e.originalEvent.dataTransfer.files);
		/*
		for(var i = 0; i < e.dataTransfer.files.length; ++i){
			var file = e.dataTransfer.files[i].path;
			var name = $(e.dataTransfer.files[i].name);
			var output = path.dirname(file) + path.sep + 'icon.png';

			im.convert([file,'-resize','50x50',output], function(err, stdout){
				console.log(stdout);
			});
		}
		*/
		
	});


});


  // Document is ready
  //http://translate.google.fr/translate_tts?ie=UTF-8&q=fichier%20partag%C3%A9&tl=fr&total=1&idx=0&textlen=15