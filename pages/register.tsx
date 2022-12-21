export default function RegisterPage() {
  return (
    <form
      action="/api/users"
      method="post"
      className="mt-12 mx-auto card w-96 bg-base-200"
    >
      <div className="card-body">
        <h2 className="card-title">Register Akun</h2>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Nama Lengkap</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="fullName"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            name="email"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
          />
        </div>

        <div className="card-actions justify-end">
          <button className="btn">Register</button>
        </div>
      </div>
    </form>
  );
}
