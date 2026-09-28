import { AuthTemplate } from "../components/AuthTemplate";

export default function page() {
  return (
    <AuthTemplate
      heading="Sign up and come in"
      subheading="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Register</h1>
      </div>
    </AuthTemplate>
  );
}
