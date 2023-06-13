import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../../firebase/auth";

function SignInPage() {

  const navigate = useNavigate();

  const handleSignIn  = async () =>{
    const result = await signUpUser();
    if (result?.user) {
      navigate("/home")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight-black">
      <div className="flex h-96 w-96 flex-col items-center justify-center gap-y-8  rounded-3xl border-black bg-glass_grey p-8">
        <h1 className="text-4xl font-bold  text-white">SMART HOME UI</h1>
        <button
          type="button"
          onClick={handleSignIn}
          className="flex items-center gap-x-4 rounded-2xl border border-white bg-white px-6 py-2"
        >
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt=""
            className="block h-6 w-6"
          />
          <span className="block text-xl font-semibold text-black">
            Sign In With Google
          </span>
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
