import Auth from 'templates/Auth'
import FormForgotPassword from 'components/FormForgotPassword'

export default function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}
