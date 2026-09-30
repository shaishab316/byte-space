import { AuthForm } from '../_components/AuthForm';
import { AuthShell } from '../_components/AuthShell';

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthForm
        eyebrow="Sign In"
        title="Welcome Back"
        fields={[
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'designer@example.com',
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '••••••••',
          },
        ]}
        submitLabel="Sign In"
        submitClassName="bg-[#CCFF00] hover:bg-[#b8e600] text-black"
        showSocialProviders
        footerText="New user?"
        footerLink={{ href: '/registration', label: 'Create an account' }}
      />
    </AuthShell>
  );
}
