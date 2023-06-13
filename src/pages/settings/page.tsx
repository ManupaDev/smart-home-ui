import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../firebase/auth";

function SettingsPage() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    signOutUser();
    navigate("/auth/sign-in");
  };

  return (
    <div className="overflow-y-scroll rounded-3xl border-black  bg-white p-8">
      <h1 className="text-4xl font-semibold text-black">Settings</h1>
      <div className="mt-4">
        <h1 className="text-2xl font-semibold text-black">Account</h1>
        <button
          type="button"
          onClick={handleSignOut}
          className="mt-2 flex w-48 items-center  justify-center gap-x-4 rounded-xl border-2 border-black bg-white px-6 py-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
