// Layouts
import { AuthLayout } from '../layouts/AuthLayout';

// Views
import { Auth } from '../views/auth/Auth';

export const routes = [
  {
    path: '/',
    layout: AuthLayout,
    protected: true,
    component: Auth
  }
];
