import styles from "../styles/login.module.css";
import Button from "@/components/Button";
import React from "react";
import Input from "@/components/Input";
import ErrorComponent from "@/components/ErrorComponent";
import useFetch from "@/hooks/useFetch";

const Login = () => {
  const [data, loading, error, makeRequest] = useFetch();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { response, json } = await makeRequest("/api/dsasdaogin");
    console.log(response);
    console.log(json);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.loginBg}>
      <main className={styles.loginGrid}>
        <div className={styles.loginImage}>
          <img src="login-pic.jpg" alt="Pessoa tirando foto de paisagem" />
        </div>
        <div className={styles.loginOuterContent}>
          <div className={styles.loginInnerContent}>
            <div className={styles.loginLogo}>
              <img src="logo.svg" alt="Instagrão Logo" />
              <h1 className="logo">Instagrao</h1>
            </div>
            <form className={styles.loginForm} action="/">
              <Input
                type="text"
                name="username"
                label="Nome de usuário ou email"
                handleChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                label="Senha"
                handleChange={handleChange}
              />
              <Button isLoading={loading} handleClick={handleClick}>
                Entrar
              </Button>
              <ErrorComponent message={error} />
            </form>
            <p className={styles.loginForgot}>
              <a href="/">Esqueceu sua Senha?</a>
            </p>
          </div>
          <div className={styles.loginCadastro}>
            <p>
              Não tem uma conta? <a href="/">Cadastre-se</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
