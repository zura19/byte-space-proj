import { AuthCard } from "../components/AuthCard";
import { AuthTemplate } from "../components/AuthTemplate";

export default function page() {
  return (
    <AuthTemplate
      heading="Sign in with ease"
      subheading="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        badge="Sign in"
        title="Welcome Back"
        footerText="Don't have an account?"
        footerLinkText="Sign up"
        footerLinkHref="/auth/register"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Login Form Here</h1>
        </div>
      </AuthCard>
    </AuthTemplate>
  );
}
