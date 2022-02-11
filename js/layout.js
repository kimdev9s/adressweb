$(document).ready(function(){
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성
			reader.onload = function (e) { 
			//파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
				$('#blah').attr('src', e.target.result);
				//이미지 Tag의 SRC속성에 읽어들인 File내용을 지정
				//(아래 코드에서 읽어들인 dataURL형식)
				$('.img_regi .ph').css('background', '#fff');
				$('.img_regi .ph img').css('visibility', 'visible');
			}                    
			reader.readAsDataURL(input.files[0]);
			//File내용을 읽어 dataURL형식의 문자열로 저장
            init().then(()=>{
                console.log("uploading sucess");
                      predict();
            })
      
		}
	}//readURL()--

	//file 양식으로 이미지를 선택(값이 변경) 되었을때 처리하는 코드
	$("#imgInp").change(function(){
		readURL(this);
	});
});