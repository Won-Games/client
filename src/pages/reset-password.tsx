import Auth from 'templates/Auth'
import FormResetPassword from 'components/FormResetPassword'

export default function ResetPassword() {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  )
}
