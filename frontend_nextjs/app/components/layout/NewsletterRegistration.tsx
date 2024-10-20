"use client";

import { Input } from "../Input.tsx";
import { Button } from "../Button.tsx";
import React, { useState, useTransition } from "react";
import { subscribeToNewsletter } from "@/app/components/recipify-actions.ts";

export function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"Subscribed!" | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleEmailChange = (e: string) => {
    setStatus(null);
    setEmail(e);
  };

  const handleSubmit = () => {
    startTransition(async () => {
      await subscribeToNewsletter(email);
      setStatus("Subscribed!");
    });
  };

  const saveDisabled = email.length < 1 || isPending;

  return (
    <div
      className={"max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"}
    >
      <div>Don't miss new recipes. Subscribe to newsletter</div>
      <div className={"max-w-64"}>
        <Input
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          disabled={isPending}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button disabled={saveDisabled} checked={status === "Subscribed!"}>
          <button onClick={handleSubmit}>Subscribe</button>
        </Button>
      </div>
      <div>{status === "Subscribed!" && "Subscribed!"}</div>
    </div>
  );
}
