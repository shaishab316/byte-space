import { AuthForm } from '../_components/AuthForm';
import { AuthShell } from '../_components/AuthShell';

export default function RegistrationPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <AuthForm
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        fields={[
          {
            name: 'fullName',
            label: 'Full Name',
            type: 'text',
            placeholder: 'Jamie Davis',
          },
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
        submitLabel="Continue"
        submitClassName="bg-secondary hover:bg-secondary/50 text-black"
        footerText="Already have an account?"
        footerLink={{ href: '/login', label: 'Login' }}
      />
    </AuthShell>
  );
}
