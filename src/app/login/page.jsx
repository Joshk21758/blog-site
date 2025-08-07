"use client";

import { login } from "@/actions/auth";
import { useActionState } from "react";

export default function Login() {
  const [state, action, isPending] = useActionState(login, undefined);
  return (
    <div>
      <p className="title">Login</p>
      <form action={action} className="form-class">
        <label className="label-class">Email</label>
        <input
          type="email"
          name="email"
          className="input-class"
          placeholder="Enter your email"
        />
        {state?.errors?.email && <p className="errors">{state.errors.email}</p>}
        <label className="label-class">Password</label>
        <input
          type="password"
          name="password"
          className="input-class"
          placeholder="Enter your password"
        />
        {state?.errors?.password && (
          <p className="errors">{state.errors.password}</p>
        )}
        <button className="login-btn" disabled={isPending}>
          {isPending ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
