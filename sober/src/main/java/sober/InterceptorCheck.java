package sober;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;

public class InterceptorCheck implements HandlerInterceptor{

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		HttpSession session = request.getSession();
		String id = (String)session.getAttribute("id");
		
		if(id == null || id.equals("")) {
			// WEB-INF - views - member - loginform.jsp 로 보내버립니당.
			response.sendRedirect("member/loginform");
			return false;
		}
		
		
		
		
		return true;
	}
	
	
	
}
