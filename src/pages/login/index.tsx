import { usePageReduce } from './reduce';

export function Login() {
  const { pageState, pageAction } = usePageReduce();
  return (
    <div className="page-container row justify-content-center">
      <div className="col-12 col-md-4 align-self-center">
        <div className="card">
          <div className="card-body">
            <input className="form-control" value={pageState.username} onChange={pageAction.changeUserName} placeholder="username"/>
            <div className="text-danger">{pageState.userNameError}</div>
            <input className="form-control mt-3" value={pageState.password} onChange={pageAction.changePassword} placeholder="password"/>
            <div className="text-danger">{pageState.passwordError}</div>
            <button className="btn btn-primary btn-block mt-3" onClick={pageAction.login}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}