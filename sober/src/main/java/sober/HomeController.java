package sober;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    // 여기는 main 페이지로 이동하는 컨트롤러 입니다. ( 테스트 용 ) 
	@RequestMapping("main")
	public String main() {
		return "public/main_page";
	}

}
