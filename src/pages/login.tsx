import styles from "../styles/login.module.css";
import Button from "@/components/Button";
import React from "react";
import Input from "@/components/Input";
import ErrorComponent from "@/components/ErrorComponent";
import { UserContext } from "@/utils/UserContext";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { loading, logUser } = React.useContext(UserContext);
  const router = useRouter();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const user = await logUser(username, password);
    if (user) router.push("/");
  };

  const handleChange = (
    { target }: { target: HTMLInputElement },
    callback: React.Dispatch<React.SetStateAction<string>>
  ) => {
    callback(target.value);
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
                value={username}
                handleChange={(event) => handleChange(event, setUsername)}
              />
              <Input
                type="password"
                name="password"
                label="Senha"
                value={password}
                handleChange={(event) => handleChange(event, setPassword)}
              />
              <Button isLoading={loading} handleClick={handleClick}>
                Entrar
              </Button>
              <ErrorComponent message={""} />
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
