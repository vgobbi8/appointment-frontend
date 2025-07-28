import AuthForm from "@/components/AuthForm";
import "tailwindcss";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className=" w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        <AuthForm type="login" />
      </div>
    </div>
  );
}
