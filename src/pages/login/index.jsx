import GithubIcon from 'assets/icons/GithubIcon';
import GoogleIcon from 'assets/icons/GoogleIcon';
import Button from 'components/Button';
import SignInForm from 'components/SignInForm';

const Login = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-7 md:grid-cols-2 h-screen">
      <header className=''>
        <div>Icon</div>
        <div>Base</div>
      </header>
      <main className='row-span-5'>
        <div className='grid grid-cols-1 grid-rows-6 h-full'>
        <div className='row-span-1'>
          <div>Sign In</div>
          <div>Sign in to your account</div>
        </div>
        <div className='row-span-1'>
          <div>
            <span>Icon</span>
            <span>Sign in with Google</span>
          </div>
          <div>
            <span>Icon</span>
            <span>Sign in with Apple</span>
          </div>
        </div>
        <div className='row-span-3'>
          <SignInForm></SignInForm>
        </div>

        <div className='row-span-1'>
          <p>Don't have an account?</p>
          <a href="#">Register here</a>
        </div>
        </div>
      </main>
      <footer className='row-span-1'>
        <div>Logo1</div>
        <div>Logo2</div>
        <div>Logo3</div>
      </footer>
    </div>
  );
};

export default Login;
