import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

/** 
	•	🔐 Secure Routes: Use JWT for protected routes.
	•	🔄 Refresh Token: Implement a token refresh mechanism.
	•	🔎 User Roles: Add roles (admin, user, etc.) in Prisma.
	•	🛠 Deployment: Deploy backend (Render, Vercel, etc.).
*/
const clientId = "your_google_client_id_here";

function Login() {
  const handleSuccess = async (response) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        idToken: response.credential,
      });

      console.log("Login Success:", res.data);
      localStorage.setItem("token", res.data.user.token);
    } catch (error) {
      console.error("Login Failed:", error.response?.data);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>Google Authentication</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;