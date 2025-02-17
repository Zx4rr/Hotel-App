import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      {children} {/* children'ı burada kullanarak hatayı düzelttik */}
    </div>
  );
}

export default AuthLayout;
