// JavaScript Document

$("#save_quiz_answer li.answer label").click(function(){										
												var thisinput=$(this).children("input");
												if(thisinput.not(':checkbox').length>0){
												if(thisinput.parents(".imagesonechoice").length>0){
													$("#save_quiz_answer li.answer ul li").not(thisinput.parents("li.answer")).removeClass("answer active");
													thisinput.parents("li.answer ul li").addClass("answer active");
												}else{
												$("#save_quiz_answer li.answer").not(thisinput.parents("li.answer")).removeClass("active");
												thisinput.parents("li.answer").addClass("active");
												}}
												});


$("#save_quiz_answer li.answer ul li label").has("input[type=checkbox]").click(function(evt){
												evt.stopPropagation();
												evt.preventDefault();
												$(this).parent("li").toggleClass("active answer");								
												});








//$("p.progress span span").addClass("questionsleft").insertBefore("p.progress");