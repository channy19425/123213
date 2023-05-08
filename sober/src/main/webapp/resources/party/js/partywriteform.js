  function handleKeyPress(event) {
	   if (event.keyCode === 13) {
	     event.preventDefault(); // 기본 동작을 막음
	     document.getElementById("submit-bu").click(); // 버튼을 클릭하는 이벤트 발생
	   }
	 }
   
   
    function selected_lo(location,bar){
    	  $("#location_").val(location).show().prop("readonly",true);
    	  $("#bar_name_").val(bar).show().prop("readonly",true);
      } 
   
   
   
      $(document).ready(function(){
    	  
    	  
    	  $("#kewordsearch").hide();
    	  $("#outerformbutton").hide();
    	  $("#location_").hide();
    	  $("#bar_name_").hide();
    	  
    	  $("#num_of_people").change(function(){
    		  if($(this).val()<2){
    			  $("#num_err").html("인원수는 최소 2명으로 선택하세요.").css("color","red").css("font-size","11pt")
    			  .css("font-weight","bold");
    		  }else{
    			  $("#num_err").html("");
    		  }
    		  
    	  });
    	  
    	  $("#num_of_people").keyup(function(){
    		  if($(this).val()<2){
    			  $("#num_err").html("인원수는 최소 2명으로 선택하세요.").css("color","red").css("font-size","11pt")
    			  .css("font-weight","bold");
    		  }else{
    			  $("#num_err").html("");
    		  }
    		  
    	  });
    	  
    	  
    	  // submit 클릭시 모든 값 작성했는지 유효성 검사 실행
    	  $("#submit-bu").click(function(event){
    		  
      		  
    		  
    		  var currentDate = new Date(); 
    		  var twoMonthsFromNow = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate());
    		  var inputDate = $("#schedule_").val(); // "yyyy-MM-dd" 형식의 String 값
    		  var selectedDate = new Date(inputDate); // Date 객체로 변환
    		  
    		  if($.trim($("#title").val())==""){
    			  alert("제목을 입력하세요.");
    			  $("#title").focus();
    			  return false;
    		  }
    		  
    		  
    		  if($("#schedule_").val()==""){
    			  alert("모임 일정을 선택하세요. ");
    			  return false;
    		  }
    		  
    		  if(selectedDate>twoMonthsFromNow){
    			    alert("모임 일정은 금일을 기준으로 2달 이내까지만 적용 가능합니다. ");
    			    $("#schedule_").val("").focus();
    			    return false;
    			  }

    		  if(selectedDate<currentDate){
    			    alert("지난 날짜는 선택할 수 없습니다.  ");
    			    $("#schedule_").val("").focus();
    			    return false;
    			  }
    		  
    		  if($("#hour").val()==""){
    			  alert("모임 시간을 선택하세요.");
    			  return false;
    		  }
    		  
    		  if($("#num_of_people").val()==""){
    			  alert("모임 인원수를 입력하세요.");
    			  return false;
    		  }
    		  
    		  if($("#num_of_people").val()<2){
    			  alert("모임 인원수는 2명 이상부터 가능합니다. ");
    			  $("#num_of_people").focus();
    			  return false;
    		  }

    		  if($("#num_of_people").val()>30){
    			  alert("모임 인원수는 30명 이하만 선택 가능합니다. ");
    			  $("#num_of_people").val("").focus();
    			  return false;
    		  }
    		  
    		  if($("input[type=radio]:checked").length<1){
    			  alert("성별을 선택하세요.");
    			  return false;
    		  }
    		  
    		  if($.trim($("#location_").val())===""){
    			  alert("모임 장소를 입력하세요.");
    			  $("#keyword_").focus();
    			  return false;
    		  }else{
    			  $("#location").val($("#location_").val());
    		  }
    		
    		  if($.trim($("#bar_name_").val())!=""){
    			  $("#bar_name_").val($("#bar_name").val());
    		  }
    		  
    		  if($.trim($("#content_").val())==""){
    			  alert("모집 내용을 입력하세요. ");
    			  $("#content_").focus();
    			  return false;
    		  }else{
    			  $("#content").val($("#content_").val());
    		  }
    		  
    		  
    		  $("#outerform").submit();
    		  
    	  });
    	  
    	  $("#kewordsearch_").click(function(){
    		  $("#keyword").val($("#keyword_").val());
    		  $("#innerform").submit();
    	  });
    	  
    	  
    	  
    	  
      });
      