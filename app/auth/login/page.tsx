import { AuthTemplate } from "../components/AuthTemplate";

export default function page() {
  return (
    <AuthTemplate
      heading="Sign in with ease"
      subheading="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Login</h1>
      </div>
    </AuthTemplate>
  );
}
