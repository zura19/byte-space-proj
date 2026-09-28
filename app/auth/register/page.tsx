import { AuthTemplate } from "../components/AuthTemplate";
import { RegisterCard } from "../components/RegisterCard";

export default function Register() {
  return (
    <AuthTemplate
      heading="Sign up and come in"
      subheading="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterCard />
    </AuthTemplate>
  );
}
