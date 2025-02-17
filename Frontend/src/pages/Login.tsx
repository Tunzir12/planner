const Login = () => {
  return (
    <div className="flex flex-col space-y-10">
        <input type="text" name="uname" placeholder="username"/>
        <input type="text" name="pass" placeholder="password"/>
        <button >Log In</button>
        <p className="text-sm">create new account <a href="/register">here</a>!!!!</p>
    </div>
  )
}

export default Login