

const Login = () => {
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">Login</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input type="email" placeholder="Your Email Address" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
          <input type="password" placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
        </div>
        <button className="btn_dark_rounded my-5 w-full !rounded-md">Continue</button>
        <p className="text-black front-bold">Don't have an account? <span className="text-secondary underline cursor-pointer">Sign Up</span></p>
        <div className="flexCenter mt-5 gap-3 w-[435px]">
        </div>
      </div>
    </section>
  )
}

export default Login