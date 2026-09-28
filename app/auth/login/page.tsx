import { AuthTemplate } from "../components/AuthTemplate";
import { LoginCard } from "../components/LoginCard";

export default function Login() {
  return (
    <AuthTemplate
      heading="Sign in with ease"
      subheading="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginCard />
    </AuthTemplate>
  );
}
