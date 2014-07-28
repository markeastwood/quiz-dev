// JavaScript Document

$("#save_quiz_answer li.answer label input").not(':checkbox').click(function(){										
												
												if($(this).parents(".imagesonechoice").length>0){
													$("#save_quiz_answer li.answer ul li").not($(this).parents("li.answer")).removeClass("answer active");
													$(this).parents("li.answer ul li").addClass("answer active");
												}else{
												$("#save_quiz_answer li.answer").not($(this).parents("li.answer")).removeClass("active");
												$(this).parents("li.answer").addClass("active");
												}
												});


$("#save_quiz_answer li.answer ul li label input[type=checkbox]").click(function(){
												$(this).parent("label").parent("li").toggleClass("active answer");
												});






$("p.progress span span").addClass("questionsleft").insertBefore("p.progress");