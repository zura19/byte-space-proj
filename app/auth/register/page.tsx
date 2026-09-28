import { AuthCard } from "../components/AuthCard";
import { AuthTemplate } from "../components/AuthTemplate";

export default function page() {
  return (
    <AuthTemplate
      heading="Sign up and come in"
      subheading="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        badge="Create an account"
        title="Welcome to ByteSpace"
        footerText="Already have an account?"
        footerLinkText="Login"
        footerLinkHref="/auth/login"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Register Form Here</h1>
        </div>
      </AuthCard>
    </AuthTemplate>
  );
}
