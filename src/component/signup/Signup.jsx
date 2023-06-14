import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/Context';

const Signup = () => {
  const { userWithEmailPassword, setUser } = useContext(MyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userWithEmailPassword(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        reset();
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

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
