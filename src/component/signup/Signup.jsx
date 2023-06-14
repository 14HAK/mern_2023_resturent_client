import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>sign up now!</h1>
            <p className='py-6 w-96'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  required
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  required
                  className='input input-bordered'
                />
                <label className='label'>
                  <button className='label-text-alt link link-hover'>
                    <Link to={'/signin'}>already have an account?</Link>
                  </button>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
