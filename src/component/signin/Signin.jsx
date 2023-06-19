import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useSavedUser from '../Hooks/useSavedUser';

const Signin = () => {
  const { setUser, SignInWithEmailPassword } = useContext(MyContext);
  const [userSavedFetch] = useSavedUser();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    SignInWithEmailPassword(data.email, data.password)
      .then((result) => {
        userSavedFetch(result?.user);
        setUser(result?.user);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error?.massage);
      });
  };

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>sign in now!</h1>
            <p className='py-6 w-96'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
          >
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  className='input input-bordered'
                  {...register('email', { required: true })}
                />
                <small className='text-red-600'>
                  {errors.email && <span>This field is required</span>}
                </small>
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  className='input input-bordered'
                  {...register('password', { required: true })}
                />
                <small className='text-red-600'>
                  {errors.password && <span>This field is required</span>}
                </small>
                <label className='label'>
                  <button className='label-text-alt link link-hover'>
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
