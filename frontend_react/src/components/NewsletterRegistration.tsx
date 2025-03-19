import { Input } from "./Input.tsx";
import { Button } from "./Button.tsx";
import React, { useState } from "react";
import { useSubscribeToNewsletterMutation } from "./use-queries.ts";
import LogoLoadingIndicator from "./LogoLoadingIndicator.tsx";

export function NewsletterRegistration() {
  const [email, setEmail] = useState("");

  // todo:
  //   - useSubscribeToNewsletterMutation
  //   - input disabled, während mutation läuft
  //   - save Disabled wenn Mutation läuft, oder Textfeld leer
  //   - LoadingIndicator während Request läuft
  //       <LoadingIndicator secondary placeholder={<img src={logo} />} />
  //   - nach erfolgreichem Speichenr "Subscribed!" zurücksetzen, wenn Taste gedrückt wird

  // DISKUTIEREN:
  //  - Mit Next.js könnte man Server Function nehmen!!!!!

  const mutation = useSubscribeToNewsletterMutation();
  const buttonDisabled = mutation.isPending || email.trim().length < 3;

  const handleEmailChange = (e: string) => {
    setEmail(e);
    mutation.reset();
  };

  const handleSubmit = async () => {
    await mutation.mutateAsync(email);
    setEmail("");
  };

  return (
    <div
      className={"max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"}
    >
      <div>Don't miss new recipes. Subscribe to newsletter</div>
      <div className={"max-w-64"}>
        <Input
          value={email}
          disabled={mutation.isPending}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button disabled={buttonDisabled}>
          {mutation.isPending ? (
            <LogoLoadingIndicator />
          ) : (
            <button disabled={buttonDisabled} onClick={handleSubmit}>
              Subscribe
            </button>
          )}
        </Button>
      </div>
      <div>{mutation.isSuccess && "Subscribed!"}</div>
    </div>
  );
}
