import { useContext} from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from '../../imgs/logo.png';
import './style.css';

import { useFormik } from "formik";
import * as Yup from "yup";


export const Login = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      password: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: async values => {
      const logado = await auth.login(values.email, values.password);
      if(logado){
        navigate('/Home');
      } else {
        formik.setStatus('E-mail ou senha incorretos');
      }
    }
  });

  return (
    <div className="card-login">
      <h1><img src={logo} alt="Logo" /></h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input 
            id="email"
            type="email" 
            placeholder="@gmail.com" 
            onChange={formik.handleChange}
            value={formik.values.email} 
          />
          {formik.touched.email && formik.errors.email ? (<div className="mensagem">{formik.errors.email}</div>) : null}

          <label htmlFor="password">Password</label>
          <input 
          id="password"
          type="password" 
          placeholder="*************" 
          onChange={formik.handleChange}
          value={formik.values.password} 
          />
          {formik.touched.password && formik.errors.password ? (<div className="mensagem">{formik.errors.password}</div>) : null}

          <button type="submit" className="btn-login">Sign In</button>
          {formik.status && <p className="erro-login" >{formik.status}</p>}
            
        </form> 
    </div>
  );
}